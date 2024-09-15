import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'Full Stack Engineer',
		company: 'Iyrix Technologies',
		description: `As a Full Stack Engineer at Iyrix Technologies from June 2023 to August 2024, I was responsible for the development and maintenance of dynamic web and mobile applications, focusing on enhancing user experience and performance through strategic feature implementation and architectural decisions. I streamlined complex application state management, leading to faster response times and improved user engagement. By collaborating closely with cross-functional teams, I ensured that design and technical requirements were consistently aligned, resulting in seamless integration of user interface and user experience. I also spearheaded real-time data updates using WebSockets, which significantly enhanced the user experience by providing timely and relevant information. Additionally, I optimized deployment processes by implementing continuous integration pipelines, reducing manual overhead and improving release speed. My contributions spanned both mobile and web development, ensuring performance goals were consistently met through rigorous testing and refinement. During this role, I utilized technologies such as Microsoft Azure, React.js, Vue.js, Angular, Node.js, Docker, C#, Java, Solidity, Redux, and embraced Agile development practices for full-stack development.`,
		contract: ContractType.FullTime,
		type: 'Full Stack Development',
		location: 'San Francisco, CA',
		period: { from: new Date(2023, 5, 1) },
		skills: getSkills('html','css','angular','js', 'java', 'javalin'),
		name: 'Full Stack Engineer',
		color: 'orange',
		links: [],
		logo: Assets.Iyrix,
		shortDescription: 'Dynamic app development and real-time updates.'
	},
	{
		slug: 'Senior Software Developer',
		company: 'Byte Consulting',
		description: `As a Full Stack Engineer at Iyrix Technologies from June 2023 to August 2024, working remotely from San Francisco, I played a crucial role in the development and maintenance of dynamic web and mobile applications, focusing on maximizing user experience and performance through strategic feature implementation and architectural decisions. I streamlined complex application state management, resulting in faster response times and improved user engagement. Collaborating with cross-functional teams, I ensured design and technical requirements were aligned, leading to seamless user interface and user experience integration. I spearheaded the use of WebSockets for real-time data updates, significantly enhancing user experience with timely information. I also optimized deployment processes using continuous integration pipelines, reducing manual effort and improving release speed. My contributions spanned both mobile and web development, consistently meeting performance goals through rigorous testing and refinement. During this time, I worked with technologies like Microsoft Azure, React.js, Vue.js, Angular, Node.js, Docker, C#, Java, Solidity, and Redux, with a focus on Agile development practices and full-stack development.`,
		contract: ContractType.FullTime,
		type: 'Senior Software Developer',
		location: 'San Francisco, CA',
		period: { from: new Date(2019, 10, 1), to: new Date(2023, 2, 1) },
		skills: getSkills('html', 'css', 'bootstrap', 'tailwind', 'mui', 'js', 'reactjs', 'angular', 'ts', 'python', 'flask', 'c#', '.net', 'postgreSQL'),
		name: 'Senior Software Developer',
		color: 'mediumaquamarine',
		links: [],
		logo: Assets.ByteConsulting,
		shortDescription: 'High-performance web and mobile development.'
	},
	{
		slug: 'software-development',
		company: 'Lacework ',
		description: `As a Software Engineer at Lacework from July 2017 to September 2019 in Mountain View, California, I orchestrated the migration from a legacy front-end system to a modern, scalable solution, which improved application speed by 35% and simplified future development. I partnered closely with design and backend teams to create reusable components and optimize data flow, enhancing system maintainability and user experience. I played a key role in designing and implementing a robust testing framework, leading to significantly higher test coverage and more reliable deployments. Additionally, I led efforts to improve application performance by leveraging server-side rendering and strategic data-fetching techniques, which improved page load times and increased user satisfaction. Throughout my tenure, I worked with technologies such as GraphQL, .NET Core, Node.js, PHP, TypeScript, Django, ASP.NET Core, Java, Flask, Spring Framework, and Python.`,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Mountain View, CA',
		period: { from: new Date(2017, 6, 1), to: new Date(2019, 8, 1) },
		skills: getSkills('html', 'css', 'bootstrap', 'tailwind', 'mui', 'js', 'reactjs', 'angular', 'ts', 'python', 'flask', 'c#', '.net'),
		name: 'Software Engineer',
		color: 'blue',
		links: [],
		logo: Assets.Lacework,
		shortDescription: 'Legacy migration and performance optimization.'
	},
	{
		slug: 'fullstack-development',
		company: 'Axcient',
		description: `As a Full Stack Developer at Axcient from May 2013 to June 2017 in Denver, Colorado, I developed and maintained scalable web and mobile applications, ensuring seamless communication between front-end and back-end services. This led to faster development cycles and an enhanced user experience. I focused on optimizing mobile application performance by addressing real-time data processing issues, which significantly improved app responsiveness. I collaborated with cross-functional teams to ensure that application features aligned with both business and technical goals, resulting in successful deployments to global app stores. I also improved application reliability and performance through comprehensive testing and strategic updates, ensuring high availability and user satisfaction. During this time, I utilized technologies such as ASP.NET, Spring Boot, PHP, Laravel, Entity Framework, Express.js, Python, Go, JavaScript, and the .NET Framework.`,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Denver, CO',
		period: { from: new Date(2013, 4, 1), to: new Date(2017, 5, 31) },
		skills: getSkills('html','css', 'bootstrap', 'js', 'reactjs', 'python', 'PostgreSQL', 'c#', '.net'),
		name: 'Full Stack Developer',
		color: 'green',
		links: [],
		logo: Assets.Axcient,
		shortDescription: 'Scalable web and mobile application development.'
	}
];

export const title = 'Experience';
