export interface Service {
	title: string
	description: string
	icon: any
}

export const services: Service[] = [
	{
		title: 'Hire Me',
		description:
			'With 7+ years of experience in building scalable full-stack applications, I can bring your project to life from start to finish.',
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
		title: 'Full-Stack Solutions',
		description:
			'End-to-end development from database design, API architecture to polished UI. I build robust, production-ready applications used globally.',
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
		title: 'Code Review & Mentoring',
		description:
			'Provide expert code reviews, architecture guidance, and mentoring to help teams and individuals improve code quality and adopt best practices.',
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
	{
		title: 'Global API Integration',
		description:
			'Integrate and maintain global APIs and third-party services for scalable, multilingual applications accessible worldwide.',
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
				<circle cx='12' cy='12' r='10'></circle>
				<line x1='2' y1='12' x2='22' y2='12'></line>
				<line x1='12' y1='2' x2='12' y2='22'></line>
			</svg>
		),
	},
	{
		title: 'Performance Optimization',
		description:
			'Optimize web applications for speed and scalability, reducing load times and improving UX for global users.',
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
				<polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'></polygon>
			</svg>
		),
	},
	{
		title: 'Security & Best Practices',
		description:
			'Implement top-level security, authentication, and best practices to ensure safe, reliable, and maintainable applications.',
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
				<rect x='3' y='11' width='18' height='11' rx='2' ry='2'></rect>
				<path d='M7 11V7a5 5 0 0 1 10 0v4'></path>
			</svg>
		),
	},
]
