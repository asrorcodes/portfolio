import project1 from '@/assets/images/project1.jpg'
import project2 from '@/assets/images/project2.jpg'
import project3 from '@/assets/images/project3.jpg'
import project4 from '@/assets/images/project4.jpg'
import { StaticImageData } from 'next/image'

export interface Project {
	title: string
	description: string
	image: StaticImageData | string
	link: string
	tags: string[]
}

export const projects: Project[] = [
	{
		title: '🌐 GlobalBank',
		description:
			'Next-generation international banking platform with lightning-fast online payments, secure cross-border transfers, virtual cards, and marketplace integrations. Designed for seamless UX across continents.',
		image: project1,
		link: 'https://globalbank.com/',
		tags: [
			'Next.js',
			'TypeScript',
			'Tailwind CSS',
			'Shadcn UI',
			'i18next',
			'Redux',
			'RTK Query',
			'Zustand',
		],
	},
	{
		title: '🤖 Smart FAQ Generator',
		description:
			'AI-powered platform that generates professional FAQ sections in seconds. Ideal for startups and SMEs worldwide. Fully customizable, exportable, and multi-language ready.',
		image: project2,
		link: 'https://faq-generator-global.vercel.app/',
		tags: [
			'React',
			'TypeScript',
			'Tailwind CSS',
			'Shadcn UI',
			'OpenAI',
			'react-hook-form',
			'react-hot-toast',
			'Zod',
		],
	},
	{
		title: '📊 SaaS Analytics Dashboard',
		description:
			'Cloud-based analytics solution for SaaS companies around the globe. Tracks KPIs, user engagement, and revenue metrics in real-time. Includes dynamic charts, multi-tenant support, and dashboards optimized for performance.',
		image: project3,
		link: 'https://saas-dashboard-global.com/',
		tags: [
			'React',
			'Next.js',
			'TypeScript',
			'Chart.js',
			'GraphQL',
			'Tailwind CSS',
			'AWS',
			'Docker',
			'Storybook',
		],
	},
	{
		title: '🛒 E-commerce Multistore Platform',
		description:
			'Global multi-vendor e-commerce platform with advanced product filtering, real-time inventory management, multi-currency support, and analytics dashboards. Perfect for scaling international online stores.',
		image: project4,
		link: 'https://multistore-global.com/',
		tags: [
			'React',
			'Next.js',
			'TypeScript',
			'Node.js',
			'MongoDB',
			'Tailwind CSS',
			'Stripe API',
			'REST API',
			'i18next',
		],
	},
]
