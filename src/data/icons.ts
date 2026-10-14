/** Inner SVG markup (24×24 grid). Elements with class="accent" are drawn in the secondary blue. */
export const ICONS = {
  // Benefits
  family:
    '<circle class="accent tint" cx="17.5" cy="11.5" r="2"/><path class="accent tint" d="M14 21v-2.5a3.5 3.5 0 017 0V21"/><circle cx="8" cy="6.5" r="2.5"/><path d="M3.5 21v-4a4.5 4.5 0 019 0v4"/><path d="M2 21h20"/>',
  shield:
    '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path class="accent" d="M9 9l6 6M15 9l-6 6"/><path class="accent tint" d="M12 10.5l1.5 1.5-1.5 1.5-1.5-1.5z"/>',
  belt: '<path d="M2 7.5h20M2 12.5h20"/><path d="M5 7.5v5M19 7.5v5"/><path d="M10.5 12.5L6.5 20.5l3 1 2.5-6.5M13.5 12.5l4 8-3 1-2.5-6.5"/><path class="accent tint" d="M9 6h6l1.5 4-1.5 4H9l-1.5-4z"/>',
  pin: '<path d="M12 19s-6.5-5.5-6.5-10.5a6.5 6.5 0 0113 0C18.5 13.5 12 19 12 19z"/><circle class="accent tint" cx="12" cy="8.5" r="2.5"/><path d="M7 21.5h10"/>',
  sparring:
    '<path d="M8 17V6.5A3.5 3.5 0 0111.5 3H14a5 5 0 015 5v4a5 5 0 01-5 5z"/><path class="accent tint" d="M8 9.5H6.5A2.5 2.5 0 004 12v1.5A3.5 3.5 0 007.5 17H8"/><path class="accent tint" d="M8 17h9v4H8z"/>',
  trophy:
    '<path d="M7 4h10v6a5 5 0 01-10 0z"/><path d="M7 6H4v2a3 3 0 003 3M17 6h3v2a3 3 0 01-3 3"/><path d="M12 15v3M9 18h6v3H9z"/><path class="accent tint" d="M12 6l1 2 2.2.3-1.600 1.5.4 2.2-2-1-2 1 .4-2.2L8.800 8.300 11 8z"/>',
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
