'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Logo from '../../../../public/logo.svg';

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<aside
			className={`w-64 text-white bg-[#192231] border-r-2 border-gray-700 ${
				isOpen ? 'lg:w-20' : 'lg:w-64'
			}`}
		>
			<div className={`p-4 ${isOpen ? 'lg:pt-0 lg:pb-0' : 'lg:pt-4 lg:pb-4'}`}>
				<div
					className={`flex items-center mb-6 ${isOpen ? 'justify-center' : ''}`}
				>
					<div onClick={toggleSidebar} className='cursor-pointer'>
						{isOpen ? (
							<HiX className='text-sm' />
						) : (
							<HiMenu className='text-xl' />
						)}
					</div>
					<div className='items-center hidden ml-2 lg:flex'>
						<Image
							src={Logo} // Replace with your logo image URL
							alt='Logo'
							className={`h-10 w-30 ${isOpen ? 'opacity-100' : 'opacity-100'}`}
							width={400}
							height={400}
						/>
					</div>
				</div>
				<nav className={isOpen ? 'hidden' : ''}>
					<h2 className='mt-4 mb-4 text-xl'>Navigation</h2>
					<ul className='space-y-1'>
						<li className='mb-2'>
							<Link href='/' className='text-gray-300 hover:text-white'>
								Health
							</Link>
						</li>
						<li className='mb-2'>
							<Link href='/about' className='text-gray-300 hover:text-white'>
								Tech
							</Link>
						</li>
						<li className='mb-2'>
							<Link href='/services' className='text-gray-300 hover:text-white'>
								Paranormal
							</Link>
						</li>
						<li className='mb-2'>
							<Link href='/services' className='text-gray-300 hover:text-white'>
								Culture
							</Link>
						</li>
						{/* Add more navigation links as needed */}
					</ul>
				</nav>
			</div>
		</aside>
	);
};

export default Sidebar;
