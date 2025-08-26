'use client'

import { services } from '@/constants/services'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Services = () => {
	return (
		<section className='max-w-[1440px] mx-auto py-10 md:py-16'>
			<motion.h2
				className='text-2xl md:text-3xl font-medium mb-8 text-[#FAFAFA]'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
			>
				# services 🛠️
			</motion.h2>

			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				{services.map((service, index) => (
					<ServiceCard key={index} service={service} index={index} />
				))}
			</div>
		</section>
	)
}

interface Service {
	icon: React.ReactNode
	title: string
	description: string
}

const ServiceCard = ({
	service,
	index,
}: {
	service: Service
	index: number
}) => {
	const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
		null
	)

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const rect = e.currentTarget.getBoundingClientRect()
		setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
	}

	const handleMouseLeave = () => setMousePos(null)

	return (
		<motion.div
			className='relative p-6 rounded-lg border border-[#222323] cursor-pointer overflow-hidden'
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				background: mousePos
					? `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.1), transparent 60%)`
					: undefined,
				transition: 'background 0.2s ease',
			}}
		>
			<div className='mb-4 text-[#FAFAFA]'>{service.icon}</div>
			<h3 className='text-lg font-medium mb-2 text-[#FAFAFA]'>
				{service.title}
			</h3>
			<p className='text-sm text-[#A1A1A1]'>{service.description}</p>
		</motion.div>
	)
}

export default Services
