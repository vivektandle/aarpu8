export const HOME_PRODUCT_SCENES = [
  {
    id: 'luxoria',
    slug: 'ap-slide-18-luxoria',
    name: 'AP SLIDE 18 LUXORIA',
    category: 'Sleek Interlock Sliding System',
    tagline: 'Linear, performance-engineered design with precision rails & 18mm slim interlock.',
    mechanismType: 'sliding',
    badge: 'Flagship Sliding',
    specifications: {
      maxDimensions: '1200 × 2700 mm',
      maxWeightPerSash: '180 Kg',
      glazing: '22 mm',
      interlockWidth: '18 mm'
    },
    hotspots: [
      { id: 'hs-glass', title: 'Acoustic Glass Panel', label: 'Glass', x: 30, y: 38, desc: 'High-clarity double glazed 22mm acoustic insulated panel.' },
      { id: 'hs-frame', title: 'Slim Aluminium Frame', label: 'Frame', x: 12, y: 25, desc: 'High-tensile 6063-T6 architectural alloy profile.' },
      { id: 'hs-interlock', title: '18mm Ultra-Slim Interlock', label: '18mm Interlock', x: 50, y: 48, desc: 'Minimalist 18mm interlock column with PA66 thermal break.' },
      { id: 'hs-track', title: 'Flush Roller Track', label: 'Track', x: 75, y: 88, desc: 'Concealed stainless steel rail with zero-threshold drainage.' },
      { id: 'hs-seal', title: 'EPDM Weather Barrier', label: 'Seal', x: 88, y: 65, desc: 'High-density EPDM gasket preventing draft and driving rain ingress.' }
    ],
    animationSteps: [
      {
        step: 1,
        code: 'COMPLETE',
        title: 'COMPLETE SYSTEM',
        subtitle: 'AP SLIDE 18 LUXORIA — Sleek Interlock Sliding System',
        desc: 'Sash is fully aligned with outer frame and locked securely against weather elements.',
        cameraFocus: 'full',
        viewType: 'assembled',
        sashOffset: 0,
        highlightTarget: null
      },
      {
        step: 2,
        code: 'GLASS',
        title: 'GLASS PANEL REVEAL',
        subtitle: '22mm Double Glazing Pocket',
        desc: 'Double glazed thermal insulated glass with high clarity index and acoustic dampening.',
        cameraFocus: 'glass',
        viewType: 'assembled',
        sashOffset: 0,
        highlightTarget: 'glass'
      },
      {
        step: 3,
        code: 'PROFILE',
        title: 'ALUMINIUM PROFILE',
        subtitle: '21 / 44 mm Frame Visible Width',
        desc: 'Architectural extruded alloy frame offering maximum structural rigidity with minimal sightline.',
        cameraFocus: 'profile',
        viewType: 'assembled',
        sashOffset: 0,
        highlightTarget: 'frame'
      },
      {
        step: 4,
        code: 'SLIDE',
        title: 'SLIDING MECHANISM',
        subtitle: 'Precision Roller Motion',
        desc: 'Glass sash glides smoothly along the bottom rail with minimal operational force.',
        cameraFocus: 'track',
        viewType: 'assembled',
        sashOffset: 55, // percent slide
        highlightTarget: 'track'
      },
      {
        step: 5,
        code: 'INTERLOCK',
        title: 'PROGRESSIVE INTERLOCK',
        subtitle: '18 mm Interlock Face Width',
        desc: 'Sashes overlap at the ultra-thin 18mm interlock profile maintaining panoramic outdoor visibility.',
        cameraFocus: 'interlock',
        viewType: 'assembled',
        sashOffset: 25,
        highlightTarget: 'interlock'
      },
      {
        step: 6,
        code: 'EXPLODED',
        title: 'EXPLODED ENGINEERING ASSEMBLY',
        subtitle: 'Track, Roller, Sash & Glass Separation',
        desc: 'Separating the individual glass panel, aluminium sash, progressive interlock, roller cartridge and floor rail.',
        cameraFocus: 'full',
        viewType: 'exploded',
        sashOffset: 0,
        highlightTarget: 'exploded'
      },
      {
        step: 7,
        code: 'ASSEMBLED',
        title: 'COMPLETE SYSTEM READY',
        subtitle: 'Swiss Architectural Standard',
        desc: 'System returns to assembled state, ready for luxury residential and penthouse installations.',
        cameraFocus: 'full',
        viewType: 'assembled',
        sashOffset: 0,
        highlightTarget: null
      }
    ],
    explodedLayers: [
      { name: '22mm Double Glazed Glass Unit', color: '#38bdf8', depthLabel: 'Outer Thermal Shield', offsetY: -60 },
      { name: 'Aluminium Sash Frame (31mm)', color: '#94a3b8', depthLabel: 'Primary Structural Carrier', offsetY: -35 },
      { name: '18mm Progressive Interlock Bar', color: '#64748b', depthLabel: 'Vertical Spine', offsetY: -10 },
      { name: 'Stainless Roller Cartridge', color: '#cbd5e1', depthLabel: 'Motion Carriage', offsetY: 15 },
      { name: 'Flush Bottom Track Rail', color: '#475569', depthLabel: 'Floor Sub-frame', offsetY: 40 },
      { name: 'EPDM Rubber Weather Seal', color: '#1e293b', depthLabel: 'Acoustic Barrier', offsetY: 65 }
    ]
  },
  {
    id: 'glissar',
    slug: 'ap-slide-19-glissar',
    name: 'AP SLIDE 19 GLISSAR',
    category: 'Sleek Interlock Sliding System',
    tagline: 'High-capacity progressive sliding door engineered for massive 380kg glass panes.',
    mechanismType: 'sliding',
    badge: 'Heavy Capacity',
    specifications: {
      maxDimensions: '1500 × 3660 mm',
      maxWeightPerSash: '380 Kg',
      glazing: '28 mm',
      interlockWidth: '198 mm'
    },
    hotspots: [
      { id: 'hs-glissar-glass', title: '28mm Argon Glazing Pocket', label: '28mm Glass', x: 35, y: 32, desc: 'Accommodates 28mm double acoustic laminated or low-E glass.' },
      { id: 'hs-glissar-frame', title: '26/49mm Visible Frame', label: 'Frame', x: 12, y: 22, desc: 'Heavy structural extrusion engineered for high wind load.' },
      { id: 'hs-glissar-interlock', title: '198mm Reinforced Interlock', label: '198mm Interlock', x: 50, y: 46, desc: 'Typhoon-rated 198mm interlock spine with internal steel reinforcement.' },
      { id: 'hs-glissar-roller', title: 'Quad Stainless Roller', label: 'Quad Roller', x: 80, y: 88, desc: 'Heavy-duty quad roller carriage supporting up to 380kg per sash.' }
    ],
    animationSteps: [
      {
        step: 1,
        code: 'COMPLETE',
        title: 'HIGH-CAPACITY SLIDING SYSTEM',
        subtitle: 'AP SLIDE 19 GLISSAR — 380kg Heavy Pane Capacity',
        desc: 'Engineered for grand oceanfront estates and over-sized patio apertures up to 3.66 meters height.',
        cameraFocus: 'full',
        viewType: 'assembled',
        sashOffset: 0,
        highlightTarget: null
      },
      {
        step: 2,
        code: 'FRAME_ZOOM',
        title: 'PROFILE DIMENSIONS REVEAL',
        subtitle: '26 / 49 MM Frame & 38 MM Sash Depth',
        desc: 'Showcasing the precise structural wall thickness and 50mm sash visible width.',
        cameraFocus: 'profile',
        viewType: 'assembled',
        sashOffset: 0,
        highlightTarget: 'frame'
      },
      {
        step: 3,
        code: 'HEAVY_SLIDE',
        title: '380KG SMOOTH SLIDING MOTION',
        subtitle: 'Quad Roller Precision Bearings',
        desc: '380kg glass panel slides effortlessly along the stainless steel floor track.',
        cameraFocus: 'track',
        viewType: 'assembled',
        sashOffset: 60,
        highlightTarget: 'track'
      },
      {
        step: 4,
        code: 'TYPHOON_INTERLOCK',
        title: '198MM REINFORCED INTERLOCK',
        subtitle: 'Typhoon Wind Pressure Resistance',
        desc: 'Robust 198mm interlock face width designed to withstand coastal storm forces.',
        cameraFocus: 'interlock',
        viewType: 'assembled',
        sashOffset: 30,
        highlightTarget: 'interlock'
      },
      {
        step: 5,
        code: 'EXPLODED',
        title: 'HEAVY CARRIAGE EXPLODED VIEW',
        subtitle: 'Structural Alloy, Quad Rollers & Glass Unit',
        desc: 'Visualizing how heavy 28mm laminated glass integrates with the 38mm primary alloy sash.',
        cameraFocus: 'full',
        viewType: 'exploded',
        sashOffset: 0,
        highlightTarget: 'exploded'
      },
      {
        step: 6,
        code: 'ASSEMBLED',
        title: 'SYSTEM READY FOR GRAND SPANS',
        subtitle: 'Over-Sized Architectural Apertures',
        desc: 'AP Slide 19 Glissar provides seamless panoramic indoor-outdoor transition.',
        cameraFocus: 'full',
        viewType: 'assembled',
        sashOffset: 0,
        highlightTarget: null
      }
    ],
    explodedLayers: [
      { name: '28mm Double Laminated Acoustic Glass', color: '#38bdf8', depthLabel: 'Acoustic Barrier', offsetY: -60 },
      { name: 'Heavy Duty Sash Carrier (38mm)', color: '#94a3b8', depthLabel: 'Primary Alloy Frame', offsetY: -35 },
      { name: 'Reinforced 198mm Interlock Column', color: '#64748b', depthLabel: 'Typhoon Spine', offsetY: -10 },
      { name: 'Quad Roller Assembly Cartridge', color: '#cbd5e1', depthLabel: 'Heavy Motion Engine', offsetY: 15 },
      { name: 'Multi-Track Sub-Base Rail', color: '#475569', depthLabel: 'Floor Sub-frame', offsetY: 40 },
      { name: 'Dual EPDM Compression Gaskets', color: '#1e293b', depthLabel: 'Weather Seal', offsetY: 65 }
    ]
  },
  {
    id: 'swing38',
    slug: 'standard-line-swing-38',
    name: 'STANDARD LINE SWING 38',
    category: 'Sleek Casement System',
    tagline: 'Refined hinged casement window with inward/outward swing, tilt-turn & 3 locking points.',
    mechanismType: 'swing',
    badge: 'Multi-Function Swing',
    specifications: {
      maxDimensions: '1200 × 2400 mm',
      maxWeightPerSash: '120 Kg',
      glazing: '30 mm',
      frameVisibleWidth: '20 mm'
    },
    hotspots: [
      { id: 'hs-swing-hinge', title: 'Concealed Friction Hinge', label: 'Hinge', x: 12, y: 22, desc: 'Concealed stainless steel hinges permitting 180° outward rotation.' },
      { id: 'hs-swing-sash', title: '45.5mm Casement Sash', label: 'Sash', x: 45, y: 35, desc: 'Slender casement sash profile with 47mm visible width.' },
      { id: 'hs-swing-glass', title: '30mm Triple Glazing', label: 'Glass', x: 60, y: 50, desc: 'Accommodates 30mm triple glass for up to 48dB noise reduction.' },
      { id: 'hs-swing-lock', title: '3-Point Perimeter Lock', label: '3-Point Lock', x: 88, y: 60, desc: 'Triple locking points providing burglar resistance.' },
      { id: 'hs-swing-seal', title: 'Triple EPDM Seal', label: 'Seal', x: 25, y: 80, desc: 'Continuous EPDM compression gasket eliminating air leakage.' }
    ],
    animationSteps: [
      {
        step: 1,
        code: 'CLOSED',
        title: 'CLOSED & FLUSH SEALED',
        subtitle: 'STANDARD LINE SWING 38 — Sleek Casement System',
        desc: 'Casement sash rests completely flush against the 20mm visible frame with triple EPDM compression gasket.',
        cameraFocus: 'full',
        viewType: 'assembled',
        swingAngle: 0,
        tiltAngle: 0,
        highlightTarget: null
      },
      {
        step: 2,
        code: 'UNLOCK',
        title: '3-POINT LOCK DISENGAGE',
        subtitle: 'Multi-Point Security Actuator',
        desc: 'Ergonomic handle rotates to disengage 3 perimeter locking pins simultaneously.',
        cameraFocus: 'profile',
        viewType: 'assembled',
        swingAngle: 0,
        tiltAngle: 0,
        highlightTarget: 'lock'
      },
      {
        step: 3,
        code: 'OPEN_OUTWARD',
        title: 'OUTWARD SWING ROTATION',
        subtitle: '180° Easy-Clean Friction Stay Hinges',
        desc: 'Sash pivots outward on heavy-duty friction stay hinges for full ambient ventilation.',
        cameraFocus: 'hinge',
        viewType: 'assembled',
        swingAngle: -48, // degree swing
        tiltAngle: 0,
        highlightTarget: 'hinge'
      },
      {
        step: 4,
        code: 'TILT_MODE',
        title: 'INWARD TILT VENTILATION',
        subtitle: '15° Micro-Ventilation Tilt & Turn',
        desc: 'Handle turn upwards engages tilt mode, angling top of sash inward for secure draft-free airflow.',
        cameraFocus: 'full',
        viewType: 'assembled',
        swingAngle: 0,
        tiltAngle: 14, // degree tilt
        highlightTarget: 'sash'
      },
      {
        step: 5,
        code: 'EXPLODED',
        title: 'CASEMENT EXPLODED ASSEMBLY',
        subtitle: 'Hinges, Sash, Glass & Perimeter Seals',
        desc: 'Separating the 30mm acoustic glass panel, 45.5mm sash profile, concealed hinges and EPDM gaskets.',
        cameraFocus: 'full',
        viewType: 'exploded',
        swingAngle: 0,
        tiltAngle: 0,
        highlightTarget: 'exploded'
      },
      {
        step: 6,
        code: 'ASSEMBLED',
        title: 'CASEMENT SYSTEM READY',
        subtitle: 'Acoustic Urban & Villa Windows',
        desc: 'Standard Line Swing 38 offers supreme versatility, combining swing, tilt and fixed configurations.',
        cameraFocus: 'full',
        viewType: 'assembled',
        swingAngle: 0,
        tiltAngle: 0,
        highlightTarget: null
      }
    ],
    explodedLayers: [
      { name: '30mm Triple Glazed Glass Panel', color: '#38bdf8', depthLabel: 'Acoustic Shield', offsetY: -60 },
      { name: '45.5mm Casement Sash Frame', color: '#94a3b8', depthLabel: 'Aluminium Sash', offsetY: -35 },
      { name: 'Concealed Friction Hinge Arm', color: '#cbd5e1', depthLabel: 'Pivot Engine', offsetY: -10 },
      { name: 'Triple EPDM Perimeter Gaskets', color: '#1e293b', depthLabel: 'Weather Seal', offsetY: 15 },
      { name: '20mm Visible Outer Frame', color: '#475569', depthLabel: 'Masonry Frame', offsetY: 40 }
    ]
  },
  {
    id: 'curtainwall34',
    slug: 'standard-line-curtain-wall-34',
    name: 'STANDARD LINE CURTAIN WALL 34',
    category: 'Sleek Curtain Wall System',
    tagline: 'Adaptable architectural façade solution with thin 34mm profiles & 400kg capacity.',
    mechanismType: 'curtainwall',
    badge: 'Facade Masterpiece',
    specifications: {
      mullionDepth: '65 - 250 mm',
      mullionFaceWidth: '34 mm',
      maxWeightPerSash: '400 Kg',
      glazing: '36 mm'
    },
    hotspots: [
      { id: 'hs-cw-mullion', title: '34mm Slender Mullion', label: '34mm Mullion', x: 50, y: 25, desc: 'Slender 34mm face width mullion with structural depths from 65 to 250mm.' },
      { id: 'hs-cw-glass', title: '36mm Facade Glass Skin', label: '36mm Glass', x: 25, y: 45, desc: 'High-performance double/triple solar control glazing.' },
      { id: 'hs-cw-vent', title: 'Concealed Top-Hung Vent', label: 'Openable Vent', x: 75, y: 55, desc: 'Seamlessly integrated top-hung openable vent invisible from exterior.' },
      { id: 'hs-cw-seal', title: 'Continuous Drainage Seal', label: 'EPDM Seal', x: 35, y: 82, desc: 'Pressure-equalized internal drainage channel directing moisture outdoors.' }
    ],
    animationSteps: [
      {
        step: 1,
        code: 'BUILDING',
        title: 'ARCHITECTURAL FACADE OVERVIEW',
        subtitle: 'STANDARD LINE CURTAIN WALL 34 — Multistory Glass Skin',
        desc: 'Continuous glass curtain wall mounted to structural floor slabs across high-rise corporate towers.',
        cameraFocus: 'building',
        viewType: 'assembled',
        ventAngle: 0,
        highlightTarget: null
      },
      {
        step: 2,
        code: 'FACADE_ZOOM',
        title: '34MM SLENDER MULLION LINES',
        subtitle: 'Minimal Visual Distraction',
        desc: 'Slender 34mm visible profile face width maximizes natural daylight penetration inside.',
        cameraFocus: 'facade',
        viewType: 'assembled',
        ventAngle: 0,
        highlightTarget: 'mullion'
      },
      {
        step: 3,
        code: 'MODULE',
        title: 'CURTAIN WALL MODULE UNIT',
        subtitle: 'Up to 400kg Glass Load Capacity',
        desc: 'Individual structural grid module engineered for extreme thermal and wind load pressures.',
        cameraFocus: 'module',
        viewType: 'assembled',
        ventAngle: 0,
        highlightTarget: 'module'
      },
      {
        step: 4,
        code: 'OPENABLE_VENT',
        title: 'CONCEALED TOP-HUNG OPEN VENT',
        subtitle: 'Invisible Exterior Integrated Vent',
        desc: 'Top-hung window opens outward for natural air exchange without breaking the exterior glass plane.',
        cameraFocus: 'module',
        viewType: 'assembled',
        ventAngle: -22, // open vent outward
        highlightTarget: 'vent'
      },
      {
        step: 5,
        code: 'EXPLODED',
        title: 'CURTAIN WALL EXPLODED ASSEMBLY',
        subtitle: '36mm Glass, Pressure Plate & Mullion Spine',
        desc: 'Exploding exterior pressure plate, EPDM structural gaskets, thermal isolator and 34mm mullion spine.',
        cameraFocus: 'full',
        viewType: 'exploded',
        ventAngle: 0,
        highlightTarget: 'exploded'
      },
      {
        step: 6,
        code: 'ASSEMBLED',
        title: 'COMPLETE ARCHITECTURAL FAÇADE',
        subtitle: 'Civic Landmarks & High-Rise Towers',
        desc: 'Aarpu curtain wall system blends invisible aesthetics with Swiss structural engineering.',
        cameraFocus: 'building',
        viewType: 'assembled',
        ventAngle: 0,
        highlightTarget: null
      }
    ],
    explodedLayers: [
      { name: '36mm High-Performance Double Glazing', color: '#38bdf8', depthLabel: 'Building Skin', offsetY: -60 },
      { name: 'Exterior Aluminium Pressure Plate', color: '#cbd5e1', depthLabel: 'Outer Fastener', offsetY: -35 },
      { name: 'EPDM Structural Rubber Gaskets', color: '#1e293b', depthLabel: 'Weather Seal', offsetY: -10 },
      { name: '34mm Slender Mullion Profile (65-250mm)', color: '#475569', depthLabel: 'Vertical Spine', offsetY: 15 },
      { name: 'Internal PA66 Thermal Isolator', color: '#64748b', depthLabel: 'Thermal Core', offsetY: 40 }
    ]
  }
];
