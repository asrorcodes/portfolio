'use client'

import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import { experiences } from '@/constants/experience'

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.1,
		},
	},
}

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: 'easeOut' } as const,
	},
}

const Experience: FC = () => {
	const [expanded, setExpanded] = useState<boolean[]>(
		Array(experiences.length).fill(false)
	)
	const toggleExpand = (index: number) => {
		const newExpanded = [...expanded]
		newExpanded[index] = !newExpanded[index]
		setExpanded(newExpanded)
	}

	return (
		<section className='max-w-[1440px] mx-auto px-4 py-10 md:py-16'>
			<motion.h2
				className='text-2xl sm:text-3xl font-semibold mb-8 text-[#FAFAFA]'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
			>
				# work experience 💼
			</motion.h2>

			<motion.div
				className='space-y-6'
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.3 }}
				variants={containerVariants}
			>
				{experiences.map((exp, idx) => (
					<motion.div
						key={idx}
						className='p-4 sm:p-6 rounded-lg border border-[#222323] bg-[#0A0A0A] transition-all'
						variants={itemVariants}
					>
						{/* Header */}
						<div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4'>
							<div className='flex flex-col gap-1'>
								<a
									href={exp.link}
									target='_blank'
									rel='noopener noreferrer'
									className='text-base sm:text-lg font-medium hover:underline text-[#FAFAFA]'
								>
									{exp.company}
								</a>
								<div className='flex flex-wrap sm:flex-nowrap items-center gap-2 text-xs sm:text-sm text-[#A1A1A1]'>
									<span>{exp.role}</span>
									<span className='w-1.5 h-1.5 rounded-full bg-gray-500/40'></span>
									<span>{exp.location}</span>
								</div>
								<span className='text-xs sm:text-sm text-[#838383]'>
									{exp.duration}
								</span>
							</div>
						</div>

						{/* Achievements */}
						<ul className='list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#A1A1A1] pl-1'>
							{(expanded[idx]
								? exp.achievements
								: exp.achievements.slice(0, 3)
							).map((item, i) => (
								<li key={i} className='leading-relaxed break-words'>
									{item}
								</li>
							))}
						</ul>

						{/* Tags and Read More */}
						<div className='mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2'>
							<div className='flex flex-wrap gap-1.5'>
								{exp.tags.map((tag, i) => (
									<span
										key={i}
										className='px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-gray-700/30 text-[#A1A1A1] border border-gray-500/20 whitespace-nowrap'
									>
										{tag}
									</span>
								))}
							</div>

							{exp.achievements.length > 3 && (
								<button
									className='text-sm sm:text-base font-medium text-blue-500 hover:text-blue-600 flex items-center gap-1 transition-colors self-end sm:self-auto'
									onClick={() => toggleExpand(idx)}
								>
									<span className='whitespace-nowrap'>
										{expanded[idx] ? 'Show less' : 'Read more'}
									</span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
										className={`lucide lucide-chevron-down ml-1 transition-transform ${
											expanded[idx] ? 'rotate-180' : ''
										}`}
									>
										<path d='m6 9 6 6 6-6'></path>
									</svg>
								</button>
							)}
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	)
}

export default Experience
