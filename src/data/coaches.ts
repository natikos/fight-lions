import mykhalchuk from '../assets/images/coach-mykhalchuk.png';
import venchur from '../assets/images/coach-venchur.jpg';

export interface Coach {
  name: string;
  role: string;
  /** `undefined` renders a neutral placeholder panel. */
  photo?: ImageMetadata;
  alt: string;
  position?: string;
}

// TODO: add a real photo for coach 3 and confirm ranks with the client.
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
    photo: venchur,
    alt: 'Анастасія Венчур — тренерка федерації рукопашного бою у Львові, у кімоно з чорним поясом',
    position: '50% 15%',
  },
  {
    name: 'Олександр Куліков-Глуговський',
    role: 'Тренер · помаранчевий пояс',
    alt: 'Фото тренера Олександра Куліков-Глуговського буде додано',
  },
];
