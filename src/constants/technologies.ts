import {
	JavaScriptIcon,
	TypeScriptIcon,
	ReactIcon,
	NextJsIcon,
	TailwindIcon,
	ReduxIcon,
	VueIcon,
	SvelteIcon,
	NodeJsIcon,
	ExpressIcon,
	MongoDBIcon,
	PostgreSQLIcon,
	RedisIcon,
	FirebaseIcon,
	GitIcon,
	VSCodeIcon,
	PostmanIcon,
	FigmaIcon,
	DockerIcon,
	JestIcon,
	WebpackIcon,
} from '@/assets/icons'

export interface TechItem {
	name: string
	icon: any
}

export const frontendTechs: TechItem[] = [
	{ name: 'JavaScript', icon: JavaScriptIcon },
	{ name: 'TypeScript', icon: TypeScriptIcon },
	{ name: 'React', icon: ReactIcon },
	{ name: 'Next.js', icon: NextJsIcon },
	{ name: 'Tailwind CSS', icon: TailwindIcon },
	{ name: 'Redux', icon: ReduxIcon },
	{ name: 'Vue.js', icon: VueIcon },
	{ name: 'Svelte', icon: SvelteIcon },
]

export const backendTechs: TechItem[] = [
	{ name: 'Node.js', icon: NodeJsIcon },
	{ name: 'Express.js', icon: ExpressIcon },
	{ name: 'MongoDB', icon: MongoDBIcon },
	{ name: 'PostgreSQL', icon: PostgreSQLIcon },
	{ name: 'Redis', icon: RedisIcon },
	{ name: 'Firebase', icon: FirebaseIcon },
]

export const tools: TechItem[] = [
	{ name: 'Git', icon: GitIcon },
	{ name: 'VS Code', icon: VSCodeIcon },
	{ name: 'Postman', icon: PostmanIcon },
	{ name: 'Figma', icon: FigmaIcon },
	{ name: 'Docker', icon: DockerIcon },
	{ name: 'Jest', icon: JestIcon },
	{ name: 'Webpack', icon: WebpackIcon },
]
