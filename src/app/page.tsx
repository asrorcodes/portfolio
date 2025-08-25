import {
	Currently,
	Experience,
	Header,
	Projects,
	Services,
	Technologies,
} from '@/components'

export default function Home() {
	return (
		<main className='p-4'>
			<Header />
			<Currently />
			<Services />
			<Technologies />
			<Projects />
			<Experience />
		</main>
	)
}
