'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { projects } from '@/constants/projects'

const containerVariants = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.1 },
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

const Projects = () => {
	return (
		<section className='py-10 md:py-16 max-w-[1440px] mx-auto px-4'>
			<motion.h2
				className='text-2xl md:text-3xl font-medium mb-8 text-[#FAFAFA]'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
			>
				# projects 🏗️
			</motion.h2>

			<motion.div
				className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.3 }}
				variants={containerVariants}
			>
				{projects.map((project, idx) => (
					<ProjectCard key={idx} project={project} index={idx} />
				))}
			</motion.div>
		</section>
	)
}

interface Project {
	image: any
	title: string
	description: string
	tags: string[]
	link: string
}

const ProjectCard = ({
	project,
	index,
}: {
	project: Project
	index: number
}) => {
	const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
		null
	)

	const handleMouseMove = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		const rect = e.currentTarget.getBoundingClientRect()
		setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
	}

	const handleMouseLeave = () => setMousePos(null)

	return (
		<motion.a
			href={project.link}
			target='_blank'
			rel='noopener noreferrer'
			className='relative group flex flex-col h-full rounded-lg overflow-hidden border border-[#222323] p-4 bg-[#0A0A0A] transition-transform duration-300 hover:scale-105'
			variants={itemVariants}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				background: mousePos
					? `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.1), transparent 60%)`
					: undefined,
				transition: 'background 0.2s ease',
			}}
		>
			<div className='relative w-full' style={{ paddingTop: '75%' }}>
				{' '}
				{/* 4:3 ratio */}
				<Image
					src={project.image}
					alt={project.title}
					fill
					className='object-cover rounded-md'
				/>
			</div>

			<div className='mt-4 flex-1 flex flex-col'>
				<h3 className='text-lg font-medium text-[#FAFAFA] mb-2 group-hover:text-blue-400'>
					{project.title}
				</h3>
				<p className='text-[#A1A1A1] text-sm line-clamp-3'>
					{project.description}
				</p>
			</div>

			<div className='flex flex-wrap gap-2 mt-4'>
				{project.tags.map((tag, i) => (
					<span
						key={i}
						className='text-xs bg-[#262626] px-2 py-1 rounded-full text-[#FAFAFA]'
					>
						{tag}
					</span>
				))}
			</div>
		</motion.a>
	)
}

export default Projects
