'use client'

import { services } from '@/constants/services'

const Services = () => {
	return (
		<section className='max-w-[1440px] mx-auto py-10 md:py-16'>
			<h2 className='text-2xl md:text-3xl font-medium mb-8 text-[#FAFAFA]'>
				# services 🛠️
			</h2>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				{services.map((service, index) => (
					<div
						key={index}
						className='p-6 rounded-lg border border-[#222323] cursor-pointer'
					>
						<div className='mb-4 text-[#FAFAFA]'>{service.icon}</div>
						<h3 className='text-lg font-medium mb-2 text-[#FAFAFA]'>
							{service.title}
						</h3>
						<p className='text-sm text-[#A1A1A1]'>{service.description}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Services
