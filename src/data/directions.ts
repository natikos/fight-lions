import wrestling from '../assets/images/photo-card-wrestling.jpg';
import striking from '../assets/images/photo-card-striking.jpg';
import selfDefence from '../assets/images/photo-card-selfdefence.jpg';

export const DIRECTIONS = [
  {
    title: 'Боротьба',
    description: 'Боротьба в стійці та в партері, кидкова техніка.',
    tags: ['Боротьба в стійці', 'Боротьба в партері', 'Кидкова техніка'],
    image: wrestling,
    alt: 'Боротьба в стійці на змаганнях Львівської федерації рукопашного бою',
    position: '42% 55%',
  },
  {
    title: 'Удари',
    description: 'Ударна та ударно-кидкова техніка.',
    tags: ['Ударна техніка', 'Ударно-кидкова техніка'],
    image: striking,
    alt: 'Удар ногою на змаганнях з рукопашного бою у Львові',
    position: '52% 60%',
  },
  {
    title: 'Самооборона',
    description: 'Захист від зброї та робота зі зброєю, затримання, дії в несподіваній ситуації.',
    tags: ['Техніка затримання', 'Робота проти зброї', 'Робота зі зброєю'],
    image: selfDefence,
    alt: 'Самооборона: вправи з м’якою зброєю на тренуванні у Львові',
    position: '30% 50%',
  },
];
