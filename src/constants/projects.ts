import project1 from '@/assets/images/project1.jpg'
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
		title: 'Socially',
		description:
			'Full-stack social media application with real-time notifications. Features include user authentication, post creation/deletion, likes, comments, follow/unfollow functionality, and profile management.',
		image: project1,
		link: 'https://socially-rosy-one.vercel.app/',
		tags: [
			'Next.js',
			'TypeScript',
			'Tailwind CSS',
			'Shadcn UI',
			'Prisma',
			'NeonDB',
			'uploadthing',
			'react-hook-form',
			'react-hot-toast',
			'react-icons',
		],
	},
	{
		title: 'Smartbank',
		description:
			'Modern banking platform with features like online payments, money transfers, marketplace integration, and virtual cards. Built with focus on UX and performance.',
		image: '/smartbank.png',
		link: 'https://www.smartbank.uz/',
		tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'i18next'],
	},
	{
		title: 'Smart FAQ Generator',
		description:
			'Smart FAQ Generator is a lightweight AI-powered web app that helps freelancers, small businesses, and startups generate professional FAQ sections in seconds. Fully editable and exportable.',
		image: '/smart-faq.png',
		link: 'https://faq-generator-ai.vercel.app/',
		tags: [
			'ReactJS',
			'TypeScript',
			'Tailwind CSS',
			'Shadcn UI',
			'openAI',
			'react-hook-form',
			'react-hot-toast',
			'zod',
		],
	},
	{
		title: 'Socially',
		description:
			'Full-stack social media application with real-time notifications. Features include user authentication, post creation/deletion, likes, comments, follow/unfollow functionality, and profile management.',
		image: project1,
		link: 'https://socially-rosy-one.vercel.app/',
		tags: [
			'Next.js',
			'TypeScript',
			'Tailwind CSS',
			'Shadcn UI',
			'Prisma',
			'NeonDB',
			'uploadthing',
			'react-hook-form',
			'react-hot-toast',
			'react-icons',
		],
	},
]
