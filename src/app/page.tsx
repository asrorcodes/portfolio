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
		<main className='bg-[#0A0A0A] min-h-[100vh] p-4'>
			<Header />
			<Currently />
			<Services />
			<Technologies />
			<Projects />
			<Experience />
		</main>
	)
}
