import mykhalchuk from '../assets/images/coach-mykhalchuk.png';
import kulikov from '../assets/images/coach-kulikov.jpg';
import venchur from '../assets/images/coach-venchur.jpg';

export interface Coach {
  name: string;
  role: string;
  /** `undefined` renders a neutral placeholder panel. */
  photo?: ImageMetadata;
  alt: string;
  position?: string;
  /** Short factual blurb (1–2 sentences); omitted until confirmed by the client. */
  bio?: string;
}

// TODO: confirm coach ranks and get a short bio for each coach from the client.
export const COACHES: Coach[] = [
  {
    name: 'Олександр Михальчук',
    role: 'Президент федерації · 3 дан',
    photo: mykhalchuk,
    alt: 'Олександр Михальчук — президент Львівської обласної федерації рукопашного бою, у кімоно з чорним поясом',
    position: '50% 20%',
    bio: 'У рукопашному бою з 1998 року. З 2015 року розвиває його як спорт для дітей.',
  },
  {
    name: 'Анастасія Венчур',
    role: 'Тренерка · 2 дан',
    photo: venchur,
    alt: 'Анастасія Венчур — тренерка федерації рукопашного бою у Львові, у кімоно з чорним поясом',
    position: '50% 15%',
    bio: 'Майстер спорту України. Переможниця програми «100 найкращих тренерів» 2025 року.',
  },
  {
    name: 'Олександр Куліков-Глуговський',
    role: 'Помічник тренера · 9 кю',
    photo: kulikov,
    alt: 'Олександр Куліков-Глуговський — помічник тренера федерації рукопашного бою у Львові, у кімоно з помаранчевим поясом',
    position: '50% 12%',
    bio: 'Допомагає проводити тренування під керівництвом федерації.',
  },
];
