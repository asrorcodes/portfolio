'use client'

import { motion } from 'framer-motion'

const Currently = () => {
	return (
		<section className='max-w-[1440px] mx-auto py-10 md:py-16'>
			<motion.h2
				className='mb-8 text-2xl md:text-3xl font-medium text-[#FAFAFA]'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
			>
				# currently working 🧑‍💻
			</motion.h2>

			<motion.div
				className='p-8 rounded-lg border border-[#222323]'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
			>
				<h3 className='mb-2 text-xl md:text-2xl font-medium text-[#FAFAFA]'>
					Google LLC
				</h3>
				<p className='text-[#A1A1A1]'>
					Working as a Senior Frontend Developer. Currently building scalable
					web applications using React.js, Next.js, and TypeScript for millions
					of users worldwide.
				</p>
			</motion.div>
		</section>
	)
}

export default Currently
