import './globals.css'

export const metadata = {
	title: 'John Doe - Web Developer',
	description:
		'John Doe portfolio sayti. Next.js va TypeScript bilan yaratilgan zamonaviy veb sayt.',
	keywords: [
		'Frontend',
		'Portfolio',
		'React',
		'Next.js',
		'Web Developer',
		'John Doe',
	],
	authors: [{ name: 'John Doe' }],
	openGraph: {
		title: 'John Doe - Web Developer',
		description:
			'Mening portfolio saytim, loyihalarim va tajribam bilan tanishing.',
		url: 'https://johndoe.dev',
		type: 'website',
		images: ['https://johndoe.dev/og-image.png'],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@johndoe',
		images: ['https://johndoe.dev/twitter-image.png'],
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className='bg-[#121212] text-white min-h-screen font-sans'>
				{children}
			</body>
		</html>
	)
}
