import {
	ArrowDownOnSquareIcon,
	CloudArrowUpIcon,
	LockClosedIcon,
	ServerIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';

const Features = () => {
	const features = [
		{
			name: 'Discover.',
			description:
				'Myths will be easily discoverable in a easy to understand layout',
			icon: CloudArrowUpIcon,
		},
		{
			name: 'User-Generated Content',
			description: 'Users will be able to submit myths they want us to debunk.',
			icon: LockClosedIcon,
		},
		{
			name: 'Social Media Integration',
			description: 'We want everyone to share the myths we debunked.',
			icon: ServerIcon,
		},
		{
			name: 'More Features Announced Soon',
			description: 'Stay Tuned',
			icon: ArrowDownOnSquareIcon,
		},
	];
	return (
		<>
			<div className='py-24 overflow-hidden sm:py-32'>
				<div className='px-6 mx-auto max-w-7xl lg:px-8'>
					<div className='grid grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
						<div className='lg:pr-8 lg:pt-4'>
							<div className='lg:max-w-lg'>
								<h2 className='text-base font-semibold leading-7 text-indigo-600'>
									Discover Myths
								</h2>
								<p className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
									A better place for debunking myths
								</p>
								<p className='mt-6 text-lg leading-8 text-white'>
									Have you ever wanted to know if something was a myth? Well
									that is what we are working on. We want to enable a platform
									that would let you debunk myths.
								</p>
								<dl className='max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
									{features.map((feature) => (
										<div key={feature.name} className='relative pl-9'>
											<dt className='inline font-semibold text-gray-100'>
												<feature.icon
													className='absolute w-5 h-5 text-indigo-600 left-1 top-1'
													aria-hidden='true'
												/>
												{feature.name}
											</dt>{' '}
											<dd className='inline text-gray-400'>
												{feature.description}
											</dd>
										</div>
									))}
								</dl>
							</div>
						</div>
						<Image
							src='https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
							alt='Product screenshot'
							className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0'
							width={2432}
							height={1442}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Features;
