'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
	frontendTechs,
	backendTechs,
	tools,
	TechItem,
} from '@/constants/technologies'

export const TechSection = ({
	title,
	items,
}: {
	title: string
	items: TechItem[]
}) => {
	const [showAll, setShowAll] = useState(false)
	const displayedItems = showAll ? items : items.slice(0, 5)

	return (
		<div className='mb-10 px-4 sm:px-6 md:px-8'>
			<h3 className='text-2xl font-semibold mb-4 text-[#FAFAFA]'>{title}</h3>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6'>
				{displayedItems.map(({ name, icon }, idx) => (
					<div
						key={idx}
						className='flex flex-col items-center justify-center hover:bg-gray-800 rounded-2xl p-6 sm:p-8 transition-transform duration-300 hover:scale-105'
					>
						<Image
							src={icon}
							alt={name}
							width={40}
							height={40}
							className='object-contain'
						/>
						<p className='mt-2 text-center text-sm sm:text-base text-[#FAFAFA]'>
							{name}
						</p>
					</div>
				))}
			</div>

			{items.length > 5 && (
				<div className='flex justify-center mt-4'>
					<button
						onClick={() => setShowAll(!showAll)}
						className='flex items-center gap-2 text-sm sm:text-base text-gray-400 hover:text-white transition-colors'
					>
						{showAll ? 'Show Less' : 'Show More'}
						<svg
							stroke='currentColor'
							fill='none'
							strokeWidth='2'
							viewBox='0 0 24 24'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='text-lg'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<polyline
								points={showAll ? '18 15 12 9 6 15' : '6 9 12 15 18 9'}
							/>
						</svg>
					</button>
				</div>
			)}
		</div>
	)
}

const Technologies = () => (
	<section className='max-w-[1440px] mx-auto py-10 md:py-16'>
		<h2 className='text-3xl sm:text-4xl font-bold mb-8 text-center text-[#FAFAFA]'>
			Technologies & Tools
		</h2>
		<TechSection title='Frontend' items={frontendTechs} />
		<TechSection title='Backend' items={backendTechs} />
		<TechSection title='Tools' items={tools} />
	</section>
)

export default Technologies
