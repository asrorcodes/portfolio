export interface Service {
	title: string
	description: string
	icon: any
}

export const services: Service[] = [
	{
		title: '👨🏾‍💻 Hire me',
		description:
			'With experience building production ready apps, I can build your next project.',
		icon: (
			<svg
				stroke='currentColor'
				fill='none'
				strokeWidth='2'
				viewBox='0 0 24 24'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='w-6 h-6'
			>
				<polyline points='16 18 22 12 16 6'></polyline>
				<polyline points='8 6 2 12 8 18'></polyline>
			</svg>
		),
	},
	{
		title: '🚀 Full-stack solutions',
		description:
			'End-to-end development from database design to polished UI. I build scalable, production-ready full-stack applications.',
		icon: (
			<svg
				stroke='currentColor'
				fill='none'
				strokeWidth='2'
				viewBox='0 0 24 24'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='w-6 h-6'
			>
				<path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
				<circle cx='9' cy='7' r='4'></circle>
				<path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
				<path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
			</svg>
		),
	},
	{
		title: '🎯 Code review & mentoring',
		description:
			'Get expert code reviews, architecture guidance, and mentoring to level up your development team or personal projects.',
		icon: (
			<svg
				stroke='currentColor'
				fill='none'
				strokeWidth='2'
				viewBox='0 0 24 24'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='w-6 h-6'
			>
				<polygon points='23 7 16 12 23 17 23 7'></polygon>
				<rect x='1' y='5' width='15' height='14' rx='2' ry='2'></rect>
			</svg>
		),
	},
]
