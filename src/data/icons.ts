/** Inner SVG markup (24×24 grid). Elements with class="accent" are drawn in the secondary blue. */
export const ICONS = {
  // Benefits
  levels:
    '<path d="M4 20h4v-4H4zM10 20h4v-8h-4zM16 20h4V6h-4z"/><path class="accent" d="M5 11l5-5"/>',
  cross: '<path d="M5 5l14 14M19 5L5 19"/><circle class="accent" cx="12" cy="12" r="2.5"/>',
  belt: '<rect x="3" y="9" width="18" height="6"/><path class="accent" d="M10 9v6h4V9"/><path d="M12 15l-2 5M12 15l2 5"/>',
  pin: '<path d="M12 21s-6-5.5-6-11a6 6 0 0112 0c0 5.5-6 11-6 11z"/><circle class="accent" cx="12" cy="10" r="2.2"/>',
  swap: '<path d="M3 8h14M13 4l4 4-4 4"/><path class="accent" d="M21 16H7M11 12l-4 4 4 4"/>',
  flag: '<path d="M5 21V4M5 4h13l-3 4.5 3 4.5H5"/><path class="accent" d="M5 21h6"/>',
  // Socials and messengers
  telegram: '<path d="M3 11.5 21 4l-3.5 16-6-4.5-3 3v-5.5L17 7.5 8.5 14z"/>',
  viber:
    '<path d="M4 4h16v12H11l-4 4v-4H4z"/><path d="M9 8.5c0 3 2.5 5.5 5.5 5.5M13 8.5a2 2 0 0 1 2 2"/>',
  instagram:
    '<rect x="4" y="4" width="16" height="16"/><circle cx="12" cy="12" r="3.8"/><path d="M16.8 7.2h.01"/>',
  youtube: '<rect x="3" y="6" width="18" height="12"/><path d="M10 9.5v5l4.5-2.5z"/>',
  facebook:
    '<rect x="4" y="4" width="16" height="16"/><path d="M13.5 20v-7h2.5M10.5 13h5M13.5 13V9.8c0-1.2.7-1.8 1.8-1.8h1"/>',
  tiktok: '<path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 4c.4 2.3 1.8 3.6 4 3.8"/>',
} as const;

export type IconName = keyof typeof ICONS;
