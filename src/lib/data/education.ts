import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Web Development Certification',
		description: '',
		location: 'Miami, Florida',
		logo: Assets.Geeks,
		name: '',
		organization: '4Geeks Academy',
		period: { from: new Date(2023, 1, 3), to: new Date(2023, 5, 12) },
		shortDescription: '',
		slug: '',
		subjects: ['HTML5','CSS3', 'Bootstrap', 'JavaScript', 'React', 'Python', 'Flask', 'SQLAlchemy', 'PostgreSQL']
	},
	{
		degree: "Bachelor's degree in Computer Science",
		description: 'During my four years at the University of Colorado Boulder, I immersed myself in a rigorous Computer Science program that provided a strong foundation in both theoretical and practical aspects of the field. My curriculum covered a wide range of subjects including algorithms, data structures, software engineering, database management, computer networks, and artificial intelligence.',
		location: 'Boulder, Colorado',
		logo: Assets.BoulderLogo,
		name: '',
		organization: 'University of Colorado Boulder',
		period: { from: new Date(2009, 4, 1), to: new Date(2013, 4, 1)},
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Front end Development', 'Back end Development', 'Computer Architecture', 'Algorithms and Data structures', 'Project Management', 'Java', 'JavaScript']
	}
];

export const title = 'Education';
