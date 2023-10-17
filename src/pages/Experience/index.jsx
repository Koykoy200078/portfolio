import React from 'react'

import nextjs from '../../assets/experience/nextjs.png'
import html from '../../assets/experience/html.png'
import github from '../../assets/experience/github.png'
import tailwindcss from '../../assets/experience/tailwind.png'
import react from '../../assets/experience/react.png'

import python from '../../assets/experience/python.png'
import androidstudio from '../../assets/experience/androidstudio.png'

import reactnative from '../../assets/experience/reactnative.png'
import flutter from '../../assets/experience/flutter.png'

import csharp from '../../assets/experience/csharp.png'
import laravel from '../../assets/experience/laravel.png'
import php from '../../assets/experience/php.png'
import dotnet from '../../assets/experience/dotnet.png'

const Experience = () => {
	const data = [
		{
			id: 1,
			src: html,
			title: 'HTML',
			style: 'shadow-orange-500',
		},
		{
			id: 2,
			src: react,
			title: 'React JS',
			style: 'shadow-blue-600',
		},
		{
			id: 3,
			src: nextjs,
			title: 'Next Js',
			style: 'shadow-white',
		},
		{
			id: 4,
			src: github,
			title: 'Github',
			style: 'shadow-gray-400',
		},
		{
			id: 5,
			src: tailwindcss,
			title: 'TailWind CSS',
			style: 'shadow-sky-400',
		},
		{
			id: 6,
			src: python,
			title: 'TailWind CSS',
			style: 'shadow-yellow-400',
		},
		{
			id: 7,
			src: androidstudio,
			title: 'Android Studio',
			style: 'shadow-white',
		},
		{
			id: 8,
			src: reactnative,
			title: 'React Native',
			style: 'shadow-sky-300',
		},
		{
			id: 9,
			src: flutter,
			title: 'Flutter',
			style: 'shadow-blue-600',
		},
		{
			id: 10,
			src: csharp,
			title: 'C#',
			style: 'shadow-blue-600',
		},
		{
			id: 11,
			src: laravel,
			title: 'Laravel Framwork',
			style: 'shadow-red-600',
		},
		{
			id: 12,
			src: php,
			title: 'PHP',
			style: 'shadow-purple-300',
		},
		{
			id: 13,
			src: dotnet,
			title: '.NET Framework',
			style: 'shadow-purple-600',
		},
	]
	return (
		<div
			name='experience'
			className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
			<div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
				<div>
					<p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
						Experience
					</p>
					<p className='py-6'>These are the technologies I've worked with</p>
				</div>

				<div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
					{data.map(({ id, src, title, style }) => (
						<div
							key={id}
							className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
							<img src={src} alt='' className='w-20 mx-auto' />
							<p className='mt-4'>{title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Experience
