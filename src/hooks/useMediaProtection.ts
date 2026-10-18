import { useEffect } from 'react';

/**
 * useMediaProtection
 * 
 * Provides client-side media deterrence across the entire application:
 * 1. Suppresses context menu (right-click) globally for all components, routes and dynamic modals.
 * 2. Prevents drag-and-drop actions on all images and videos.
 * 3. Enforces `controlsList="nodownload"` and non-draggable attributes on HTML5 video elements.
 * 4. Ensures proper event listener and MutationObserver cleanup to prevent memory leaks.
 */
export function useMediaProtection(): void {
  useEffect(() => {
    // 1. Disable browser context menu across the entire website
    const handleContextMenu = (e: MouseEvent): void => {
      e.preventDefault();
    };

    // 2. Prevent dragging for all images and videos
    const handleDragStart = (e: DragEvent): void => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const tagName = target.tagName?.toLowerCase();
      if (
        tagName === 'img' ||
        tagName === 'video' ||
        target.closest('img, video')
      ) {
        e.preventDefault();
      }
    };

    // 3. Enforce video attributes (controlsList="nodownload", draggable="false")
    const protectVideoElement = (video: HTMLVideoElement): void => {
      try {
        const currentControlsList = video.getAttribute('controlsList') || '';
        if (!currentControlsList.includes('nodownload')) {
          video.setAttribute(
            'controlsList',
            currentControlsList ? `${currentControlsList} nodownload` : 'nodownload'
          );
        }
        if (video.getAttribute('draggable') !== 'false') {
          video.setAttribute('draggable', 'false');
        }
      } catch {
        // Silently handle detached nodes
      }
    };

    const protectAllVideos = (): void => {
      document.querySelectorAll<HTMLVideoElement>('video').forEach(protectVideoElement);
    };

    // Run initial scan on mounted elements
    protectAllVideos();

    // Observe dynamically mounted video elements across all routes and modals
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.tagName.toLowerCase() === 'video') {
              protectVideoElement(node as HTMLVideoElement);
            } else {
              node.querySelectorAll<HTMLVideoElement>('video').forEach(protectVideoElement);
            }
          }
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Attach listeners with capture phase to ensure intercept across all subcomponents
    document.addEventListener('contextmenu', handleContextMenu, { capture: true });
    document.addEventListener('dragstart', handleDragStart, { capture: true });

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      document.removeEventListener('dragstart', handleDragStart, { capture: true });
      observer.disconnect();
    };
  }, []);
}

export default useMediaProtection;
