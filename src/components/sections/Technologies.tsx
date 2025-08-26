'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
	frontendTechs,
	backendTechs,
	tools,
	TechItem,
} from '@/constants/technologies'
import Image from 'next/image'

const containerVariants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: 'easeOut' } as const,
	},
	exit: {
		opacity: 0,
		y: 30,
		transition: { duration: 0.3, ease: 'easeIn' } as const,
	},
}

interface TechSectionProps {
	title: string
	items: TechItem[]
}

const TechSection = ({ title, items }: TechSectionProps) => {
	const [showAll, setShowAll] = useState(false)
	const displayedItems = showAll ? items : items.slice(0, 5)

	return (
		<motion.div
			className='mb-10 px-4 sm:px-6 md:px-8'
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.3 }}
			variants={containerVariants}
		>
			<h3 className='text-2xl font-semibold mb-4 text-[#FAFAFA]'>{title}</h3>

			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 overflow-visible'>
				<AnimatePresence>
					{displayedItems.map(({ name, icon }) => (
						<motion.div
							key={name}
							className='flex flex-col items-center justify-center hover:bg-gray-800 rounded-2xl p-6 sm:p-8 transition-transform duration-300 hover:scale-105'
							variants={itemVariants}
							initial='hidden'
							animate='show'
							exit='exit'
						>
							<Image src={icon} alt={name} width={50} height={50} />
							<p className='mt-2 text-center text-sm sm:text-base text-[#FAFAFA]'>
								{name}
							</p>
						</motion.div>
					))}
				</AnimatePresence>
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
		</motion.div>
	)
}

const Technologies = () => (
	<section className='max-w-[1440px] mx-auto py-10 md:py-16'>
		<motion.h2
			className='text-3xl sm:text-4xl font-bold mb-8 text-center text-[#FAFAFA]'
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
		>
			Technologies & Tools
		</motion.h2>

		<TechSection title='Frontend' items={frontendTechs} />
		<TechSection title='Backend' items={backendTechs} />
		<TechSection title='Tools' items={tools} />
	</section>
)

export default Technologies
