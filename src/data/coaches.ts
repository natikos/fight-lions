import mykhalchuk from '../assets/images/coach-mykhalchuk.png';
import placeholder2 from '../assets/images/coach-placeholder-2.jpg';

export interface Coach {
  name: string;
  role: string;
  /** `undefined` renders a neutral placeholder panel. */
  photo?: ImageMetadata;
  alt: string;
  position?: string;
}

// TODO: replace stock photos (coaches 2 and 3) with real ones and confirm ranks with the client.
export const COACHES: Coach[] = [
  {
    name: 'Олександр Михальчук',
    role: 'Президент федерації · 3 дан',
    photo: mykhalchuk,
    alt: 'Олександр Михальчук — президент Львівської обласної федерації рукопашного бою, у кімоно з чорним поясом',
    position: '50% 20%',
  },
  {
    name: 'Анастасія Венчур',
    role: 'Тренерка · 1 дан',
    photo: placeholder2,
    alt: 'Анастасія Венчур — тренерка федерації рукопашного бою у Львові',
    position: '50% 22%',
  },
  {
    name: 'Олександр Куліков-Глуговський',
    role: 'Тренер · помаранчевий пояс',
    alt: 'Фото тренера Олександра Куліков-Глуговського буде додано',
  },
];
