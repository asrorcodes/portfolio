import Image from 'next/image'
import { FaTelegram } from 'react-icons/fa'
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'
import { SiUpwork } from 'react-icons/si'

interface SocialLink {
	href: string
	icon: any
	label: string
}

const socialLinks: SocialLink[] = [
	{
		href: 'mailto:eshonkulovnodirbek@gmail.com',
		icon: <FiMail className='h-5 w-5' />,
		label: 'Email',
	},
	{
		href: 'https://www.linkedin.com/in/nodirbek-eshonkulov-7373971a0/',
		icon: <FiLinkedin className='h-5 w-5' />,
		label: 'LinkedIn',
	},
	{
		href: 'https://github.com/ideal22',
		icon: <FiGithub className='h-5 w-5' />,
		label: 'GitHub',
	},
	{
		href: 'https://t.me/ideal22',
		icon: <FaTelegram className='h-5 w-5' />,
		label: 'Telegram',
	},
	{
		href: 'https://www.upwork.com/freelancers/~015ce662d9090a6657',
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
		<div className='max-w-[1440px] mx-auto py-4'>
			<header className='p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
				<div className='flex items-start gap-4'>
					<Image
						src='/images/profile-photo.jpg'
						alt='Profile'
						width={48}
						height={48}
						className='rounded-full object-cover'
					/>
					<div className='space-y-2'>
						<h1 className='inline-block text-xl font-medium text-[#E5E5E5] border-b-2 border-transparent hover:border-[#E5E5E5] cursor-pointer'>
							Shokhruz Isroilov
						</h1>
						<p className='text-[#A1A1A1]'>
							Senior Full Stack Developer | 5+ years
						</p>
						<div className='flex flex-wrap gap-2'>
							{skills.map(skill => (
								<span
									key={skill.name}
									className={`px-2 py-1 text-xs rounded-full ${skill.bg} ${skill.text} border ${skill.border}`}
								>
									{skill.name}
								</span>
							))}
						</div>
					</div>
				</div>

				<div className='flex items-center gap-4 text-[#A1A1A1]'>
					{socialLinks.map(link => (
						<a
							key={link.label}
							href={link.href}
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-white transform transition-transform duration-300 hover:-translate-y-1'
							aria-label={link.label}
						>
							{link.icon}
						</a>
					))}
				</div>
			</header>
		</div>
	)
}

export default Header
