export type Group = 'junior' | 'middle' | 'senior';

export const GROUPS: Record<Group, string> = {
  junior: 'Молодша',
  middle: 'Середня',
  senior: 'Старша',
};

/** 0 = Monday … 6 = Sunday. Only Monday–Saturday are used. */
export const DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'] as const;

export interface Slot {
  group: Group;
  time: string;
}

export interface DayBlock {
  days: number[];
  slots: Slot[];
}

export interface Hall {
  street: string;
  /** Defaults to Львів; Брюховичі is shown only in that hall's address. */
  locality: string;
  venue: string;
  blocks: DayBlock[];
}

const j = (time: string): Slot => ({ group: 'junior', time });
const m = (time: string): Slot => ({ group: 'middle', time });
const s = (time: string): Slot => ({ group: 'senior', time });

export const HALLS: Hall[] = [
  {
    street: 'вул. Шевченка, 390',
    locality: 'Львів',
    venue: 'СЗШ № 92',
    blocks: [{ days: [0, 2, 4], slots: [j('16:15–18:00'), m('17:30–19:30'), s('19:00–21:15')] }],
  },
  {
    street: 'вул. Театральна, 15',
    locality: 'Львів',
    venue: 'СЗШ № 62',
    blocks: [
      { days: [0, 2, 4], slots: [j('16:15–18:00'), m('17:30–19:30')] },
      { days: [1, 3], slots: [s('19:00–21:00')] },
    ],
  },
  {
    street: 'вул. Дорога Кривчицька, 1',
    locality: 'Львів',
    venue: 'Ліцей № 70',
    blocks: [
      { days: [1, 3], slots: [j('15:45–17:30'), m('17:00–19:30')] },
      { days: [5], slots: [j('09:45–11:30'), m('11:00–13:30')] },
    ],
  },
  {
    street: 'вул. Володимира Великого, 2',
    locality: 'Львів',
    venue: 'видавництво «Вільна Україна»',
    blocks: [{ days: [0, 2, 4], slots: [j('15:45–17:30'), m('17:00–19:00'), s('18:45–21:00')] }],
  },
  {
    street: 'вул. Широка, 3',
    locality: 'Брюховичі',
    venue: 'школа «GlobalKids»',
    blocks: [{ days: [1, 3], slots: [j('16:00–17:30')] }],
  },
];

export type DayIndex = 0 | 1 | 2 | 3 | 4 | 5;

export interface Sparring {
  title: string;
  note: string;
  day: DayIndex;
  time: string;
  /** Shown instead of a group name. */
  label: string;
}

export const SPARRING: Sparring = {
  title: 'День спарингів',
  note: 'після ранкових груп',
  day: 5,
  time: '12:00–14:00',
  label: 'спаринг',
};

/** Address as shown in the schedule: the locality is only spelled out outside Львів. */
export const hallAddress = (hall: Hall) =>
  hall.locality === 'Львів' ? hall.street : `${hall.locality}, ${hall.street}`;
