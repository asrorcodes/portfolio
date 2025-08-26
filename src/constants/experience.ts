export interface ExperienceItem {
	company: string
	link: string
	role: string
	location: string
	duration: string
	achievements: string[]
	tags: string[]
	iconColor?: string
}

export const experiences: ExperienceItem[] = [
	{
		company: 'GlobalTech Solutions',
		link: 'https://globaltech.com',
		role: 'Full Stack Developer',
		location: 'New York, USA',
		duration: 'Jan 2021 - Jul 2023',
		achievements: [
			'Designed and implemented scalable full-stack web applications for international clients',
			'Integrated cloud solutions with AWS Lambda and S3 for serverless deployments',
			'Developed real-time analytics dashboards using React and Chart.js',
			'Led code reviews and improved CI/CD pipelines, reducing deployment errors by 30%',
			'Mentored junior developers across different time zones',
		],
		tags: [
			'React',
			'Node.js',
			'TypeScript',
			'GraphQL',
			'AWS',
			'Docker',
			'Express.js',
			'MongoDB',
			'REST API',
			'TailwindCSS',
		],
		iconColor: '#1E90FF',
	},
	{
		company: 'NextGen Labs',
		link: 'https://nextgenlabs.de',
		role: 'Frontend Developer',
		location: 'Berlin, Germany',
		duration: 'Mar 2018 - Dec 2020',
		achievements: [
			'Built responsive web applications for European clients using React and Next.js',
			'Optimized application performance and reduced bundle size by 25%',
			'Collaborated with UX/UI designers to improve user experience',
			'Implemented multilingual support and accessibility standards',
			'Participated in Agile sprints and improved team workflow efficiency',
		],
		tags: [
			'React',
			'Next.js',
			'JavaScript',
			'TypeScript',
			'Redux',
			'TailwindCSS',
			'i18next',
			'Jest',
			'Storybook',
			'REST API',
		],
		iconColor: '#FF4500',
	},
	{
		company: 'WebCrafters Inc.',
		link: 'https://webcrafters.sg',
		role: 'Junior Full Stack Developer',
		location: 'Singapore',
		duration: 'Jun 2016 - Feb 2018',
		achievements: [
			'Developed client-facing web applications using React and Node.js',
			'Integrated third-party APIs for payments and notifications',
			'Assisted in database design using PostgreSQL and MongoDB',
			'Participated in daily stand-ups and Agile ceremonies',
			'Wrote unit and integration tests to ensure application reliability',
		],
		tags: [
			'React',
			'Node.js',
			'Express.js',
			'JavaScript',
			'HTML5',
			'CSS3',
			'MongoDB',
			'PostgreSQL',
			'REST API',
			'Git',
		],
		iconColor: '#32CD32',
	},
]
