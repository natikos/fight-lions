export type BeltColor =
  'white' | 'purple' | 'red' | 'orange' | 'blue' | 'yellow' | 'green' | 'brown' | 'black';

export interface Belt {
  /** Kyu grades, e.g. "16 · 15". */
  kyu: string;
  name: string;
  color: BeltColor;
  /** Color of the stripe on the second (striped) grade. */
  stripe: BeltColor;
}

export const BELTS: Belt[] = [
  { kyu: '16 · 15', name: 'Білий', color: 'white', stripe: 'purple' },
  { kyu: '14 · 13', name: 'Фіолетовий', color: 'purple', stripe: 'red' },
  { kyu: '12 · 11', name: 'Червоний', color: 'red', stripe: 'orange' },
  { kyu: '10 · 9', name: 'Помаранчевий', color: 'orange', stripe: 'blue' },
  { kyu: '8 · 7', name: 'Синій', color: 'blue', stripe: 'yellow' },
  { kyu: '6 · 5', name: 'Жовтий', color: 'yellow', stripe: 'green' },
  { kyu: '4 · 3', name: 'Зелений', color: 'green', stripe: 'brown' },
  { kyu: '2 · 1', name: 'Коричневий', color: 'brown', stripe: 'black' },
];

export const BLACK_BELT = {
  kyu: 'дан',
  name: 'Чорний',
  color: 'black' as BeltColor,
  /** Every black belt carries its owner's surname. */
  label: 'Ваше прізвище',
};
