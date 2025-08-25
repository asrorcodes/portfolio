import './globals.css'

export const metadata = {
	title: 'Shohruz Isroilov - Frontend Developer',
	description:
		'Shohruz Isroilovning portfolio sayti. Next.js, TypeScript bilan yaratilgan zamonaviy websayt.',
	keywords: [
		'Frontend',
		'Portfolio',
		'React',
		'Next.js',
		'Web Developer',
		'Shohruz Isroilov',
	],
	authors: [{ name: 'Shohruz Isroilov' }],
	openGraph: {
		title: 'Shohruz Isroilov - Frontend Developer',
		description: 'Mening portfolio saytim, Loyihalarim bilan tanishing.',
		url: 'https://shokhruzisroilov.uz',
		type: 'website',
		// images: ['https://shokhruzisroilov.uz/og-image.png'],
	},
	// twitter: {
	// 	card: 'summary_large_image',
	// 	site: '@sizning_username',
	// 	images: ['https://shokhruzisroilov.uz/twitter-image.png'],
	// },
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='uz'>
			<body className='bg-[#0A0A0A] min-h-screen'>{children}</body>
		</html>
	)
}
