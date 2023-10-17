import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-scroll'

const Home = () => {
	return (
		<div
			name='home'
			className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
			<div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
				<div className='flex flex-col justify-center h-full'>
					<h2 className='text-2xl sm:text-7xl font-bold text-white'>
						I’m Christian Franc M. Carvajal
					</h2>
					<p className='text-gray-500 py-4 max-w-md'>
						To acquire new valuable knowledge and skills in any environment
						where I can apply my knowledge. To build a career that offers both
						challenge and growth with opportunities to expand my knowledge and
						skills by using them in a working environment that simulates the
						real world.
					</p>

					<div>
						<Link
							to='portfolio'
							smooth
							duration={500}
							className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
							Portfolio{' '}
							<span className='group-hover:rotate-90 duration-300'>
								<BiRightArrowAlt size={25} />
							</span>
						</Link>
					</div>
				</div>

				<div>
					<img
						src='https://avatars.githubusercontent.com/u/31362410?v=4'
						className='rounded-md mx-auto w-full md:w-2/3'
						alt='myProfile'
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
