'use client'

import Image from 'next/image'
import { projects } from '@/constants/projects'

const Projects = () => {
	return (
		<section className='py-10 md:py-16 max-w-[1440px] mx-auto px-4'>
			<h2 className='text-2xl md:text-3xl font-medium mb-8 text-[#FAFAFA]'>
				# projects 🏗️
			</h2>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
				{projects.map((project, idx) => (
					<a
						key={idx}
						href={project.link}
						target='_blank'
						rel='noopener noreferrer'
						className='flex flex-col h-full rounded-lg overflow-hidden border border-[#222323] p-4 bg-[#0A0A0A] transition-transform duration-300'
					>
						<div className='relative w-full min-h-[200px] sm:min-h-[220px] md:min-h-[250px]'>
							<Image
								src={project.image}
								alt={project.title}
								fill
								className='object-cover rounded-md'
							/>
						</div>

						<div className='mt-4 flex-1 flex flex-col'>
							<h3 className='text-lg font-medium text-[#FAFAFA] mb-2'>
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
					</a>
				))}
			</div>
		</section>
	)
}

export default Projects
