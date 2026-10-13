export const SITE = {
  url: 'https://fight.lviv.ua',
  name: 'Fight Lions',
  fullName: 'Fight Lions — Львівська Обласна Федерація Рукопашного бою',
  orgName: 'Львівська Обласна Федерація Рукопашного бою',
  shortOrg: 'ЛОФ рукопашного бою',
  title: 'Рукопашний бій у Львові — секція для дітей і дорослих | Fight Lions',
  description:
    'Рукопашний бій у Львові: секція для дітей і дорослих. П’ять залів у Львові, система поясів, перше пробне заняття безкоштовно. Запис за телефоном.',
  locale: 'uk_UA',
  phone: { href: '+380977089715', display: '+38 097 708 97 15' },
  tournamentHub:
    'https://www.tournamenthub.club/uk/clubs/hand-to-hand-combat/ua/lviv/lvivska-oblasna-federatsiia-rukopashnoho-boiu',
} as const;

export type SocialId = 'telegram' | 'viber' | 'instagram' | 'youtube' | 'facebook' | 'tiktok';

export interface Social {
  id: SocialId;
  label: string;
  /** `null` until the real link is provided; such socials are not rendered. */
  href: string | null;
}

export const MESSENGERS: Social[] = [
  { id: 'telegram', label: 'Telegram', href: 'https://t.me/Rykopashka' },
  { id: 'viber', label: 'Viber', href: `viber://chat?number=${SITE.phone.href}` },
];

export const SOCIALS: Social[] = [
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/fightlions_lviv' },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UC-JSr4qXcZaxG07032LTwLA',
  },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/fightlions.lviv' },
  // TODO: add the TikTok URL when the client provides it.
  { id: 'tiktok', label: 'TikTok', href: null },
];

export const NAV = [
  { href: '#about', label: 'Напрямки' },
  { href: '#grading', label: 'Градація' },
  { href: '#coaches', label: 'Тренери' },
  { href: '#training', label: 'Розклад' },
  { href: '#contacts', label: 'Контакти' },
] as const;
