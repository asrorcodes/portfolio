'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaTelegram } from 'react-icons/fa'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'
import { SiUpwork } from 'react-icons/si'
import profileImage from '@/assets/images/profile-photo.jpg'

interface SocialLink {
	href: string
	icon: any
	label: string
}

const socialLinks: SocialLink[] = [
	{
		href: 'mailto:developer@example.com',
		icon: <FiMail className='h-5 w-5' />,
		label: 'Email',
	},
	{
		href: 'https://www.linkedin.com/in/johndoe/',
		icon: <FiLinkedin className='h-5 w-5' />,
		label: 'LinkedIn',
	},
	{
		href: 'https://github.com/johndoe',
		icon: <FiGithub className='h-5 w-5' />,
		label: 'GitHub',
	},
	{
		href: 'https://t.me/johndoe',
		icon: <FaTelegram className='h-5 w-5' />,
		label: 'Telegram',
	},
	{
		href: 'https://www.upwork.com/freelancers/~0123456789abcdef',
		icon: <SiUpwork className='h-5 w-5' />,
		label: 'Upwork',
	},
]

const skills = [
	{
		name: 'React',
		bg: 'bg-blue-500/10',
		text: 'text-blue-500',
		border: 'border-blue-500/20',
	},
	{
		name: 'Next.js',
		bg: 'bg-black/10',
		text: 'text-white',
		border: 'border-white/20',
	},
	{
		name: 'TypeScript',
		bg: 'bg-blue-400/10',
		text: 'text-blue-400',
		border: 'border-blue-400/20',
	},
	{
		name: 'Node.js',
		bg: 'bg-green-500/10',
		text: 'text-green-500',
		border: 'border-green-500/20',
	},
]

const Header = () => {
	return (
		<motion.header
			initial={{ y: -50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			className='max-w-[1440px] mx-auto p-4 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 border border-[#222323] rounded-2xl shadow-lg'
		>
			{/* Left: Profile + Info */}
			<div className='flex flex-col sm:flex-row items-start gap-4'>
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.6 }}
					className='flex-shrink-0'
				>
					<Image
						src={profileImage}
						alt='Profile'
						width={50}
						height={50}
						className='rounded-full object-cover ring-2 ring-[#333]'
					/>
				</motion.div>
				<div className='flex-1 space-y-2'>
					<motion.h1
						whileHover={{ scale: 1.05 }}
						className='inline-block text-lg sm:text-xl font-medium text-[#E5E5E5] border-b-2 border-transparent hover:border-[#E5E5E5] cursor-pointer'
					>
						John Doe
					</motion.h1>
					<p className='text-[#A1A1A1] text-sm sm:text-base'>
						Senior Full Stack Developer | 7+ years experience
					</p>
					<div className='flex flex-wrap gap-2'>
						{skills.map((skill, idx) => (
							<motion.span
								key={skill.name}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: idx * 0.1 }}
								whileHover={{ scale: 1.1 }}
								className={`px-2 py-1 text-xs sm:text-sm rounded-full ${skill.bg} ${skill.text} border ${skill.border}`}
							>
								{skill.name}
							</motion.span>
						))}
					</div>
				</div>
			</div>

			{/* Right: Social Links */}
			<div className='flex items-center gap-3 sm:gap-4 mt-3 md:mt-0 text-[#A1A1A1]'>
				{socialLinks.map((link, idx) => (
					<motion.a
						key={link.label}
						href={link.href}
						target='_blank'
						rel='noopener noreferrer'
						whileHover={{ y: -3, scale: 1.2, color: '#fff' }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 300 }}
						aria-label={link.label}
						className='hover:text-white'
					>
						{link.icon}
					</motion.a>
				))}
			</div>
		</motion.header>
	)
}

export default Header
