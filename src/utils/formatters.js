export function formatNumber(num) {
  return new Intl.NumberFormat('en-US').format(num);
}

export function truncateText(str, maxLength = 100) {
  if (!str) return '';
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}
