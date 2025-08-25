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
		company: 'SmartBank',
		link: 'https://smartbank.uz',
		role: 'Senior Frontend Developer',
		location: 'Tashkent, Uzbekistan',
		duration: 'Aug 2023 - Present',
		achievements: [
			'Optimized performance of an e-commerce platform, reducing load time by 40%',
			'Delivered key features like advanced product search, filtering, and sorting',
			'Led a team of frontend developers, providing mentorship and conducting code reviews',
			'Migrated a React app to Next.js 14 for enhanced performance and SEO',
			'Built and maintained reusable components and custom hooks for scalability',
		],
		tags: [
			'React18',
			'JavaScript',
			'TypeScript',
			'Next.js 14',
			'TailwindCSS',
			'Redux',
			'RTK Query',
			'Zustand',
			'Ant Design',
			'i18next',
		],
		iconColor: '#00A859',
	},
]
