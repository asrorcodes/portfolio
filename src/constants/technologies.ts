import { JavaScriptIcon } from '@/assets/icons'

export interface TechItem {
	name: string
	icon: any
}

export const frontendTechs: TechItem[] = [
	{ name: 'JavaScript', icon: JavaScriptIcon },
	{ name: 'React', icon: JavaScriptIcon },
	{ name: 'Next.js', icon: JavaScriptIcon },
	{ name: 'TypeScript', icon: JavaScriptIcon },
	{ name: 'Tailwind CSS', icon: JavaScriptIcon },
	{ name: 'Redux', icon: JavaScriptIcon },
	{ name: 'Framer Motion', icon: JavaScriptIcon },
	{ name: 'Vue.js', icon: JavaScriptIcon },
	{ name: 'Svelte', icon: JavaScriptIcon },
]

export const backendTechs: TechItem[] = [
	{ name: 'Node.js', icon: JavaScriptIcon },
	{ name: 'Express.js', icon: JavaScriptIcon },
	{ name: 'MongoDB', icon: JavaScriptIcon },
	{ name: 'PostgreSQL', icon: JavaScriptIcon },
	{ name: 'Prisma', icon: JavaScriptIcon },
	{ name: 'Redis', icon: JavaScriptIcon },
	{ name: 'Firebase', icon: JavaScriptIcon },
]

export const tools: TechItem[] = [
	{ name: 'Git', icon: JavaScriptIcon },
	{ name: 'VS Code', icon: JavaScriptIcon },
	{ name: 'Postman', icon: JavaScriptIcon },
	{ name: 'Figma', icon: JavaScriptIcon },
	{ name: 'Docker', icon: JavaScriptIcon },
	{ name: 'Jest', icon: JavaScriptIcon },
	{ name: 'Webpack', icon: JavaScriptIcon },
]
