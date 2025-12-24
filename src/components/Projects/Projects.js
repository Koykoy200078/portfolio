import React, { useContext, useState } from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData, projectCategories } from '../../data/projectsData';

import './Projects.css';
import SingleProject from './SingleProject/SingleProject';

const FilterChip = styled(Chip, {
	shouldForwardProp: (prop) => prop !== 'themeColors' && prop !== 'active',
})(({ themeColors, active }) => ({
	margin: '0.5rem',
	padding: '1.5rem 0.75rem',
	fontSize: '1rem',
	fontWeight: '600',
	backgroundColor: active ? themeColors.primary : `${themeColors.primary}15`,
	color: active ? themeColors.secondary : themeColors.tertiary,
	border: `2px solid ${themeColors.primary}`,
	transition: 'all 0.3s ease',
	cursor: 'pointer',
	'&:hover': {
		backgroundColor: themeColors.primary,
		color: themeColors.secondary,
		transform: 'translateY(-3px)',
		boxShadow: `0 8px 16px ${themeColors.primary}40`,
	},
}));

function Projects() {
	const { theme } = useContext(ThemeContext);
	const [activeFilter, setActiveFilter] = useState('all');

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const titleVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	// Filter projects based on selected category
	const filteredProjects = activeFilter === 'all' ? projectsData : projectsData.filter((project) => project.category === activeFilter);

	// Separate featured projects based on active filter
	const featuredProjects = activeFilter === 'all' ? projectsData.filter((project) => project.featured) : filteredProjects.filter((project) => project.featured);

	// Get non-featured filtered projects
	const regularProjects = filteredProjects.filter((project) => !project.featured);

	const categories = projectCategories || [
		{ value: 'all', label: 'All Projects', icon: '🎯' },
		{ value: 'mobile', label: 'Mobile Apps', icon: '📱' },
		{ value: 'web', label: 'Web Apps', icon: '🌐' },
		{ value: 'software', label: 'Software', icon: '💻' },
	];

	return (
		<>
			{projectsData.length > 0 && (
				<div className='projects' id='projects' style={{ backgroundColor: theme.secondary }}>
					<Box className='projects-container'>
						<motion.div initial='hidden' whileInView='visible' viewport={{ once: true }} variants={containerVariants}>
							<motion.div variants={titleVariants} className='projects--header'>
								<Typography
									variant='h2'
									component='h1'
									style={{
										color: theme.primary,
										fontFamily: 'var(--primaryFont)',
										fontSize: '3.5rem',
										fontWeight: 800,
										letterSpacing: '-0.5px',
										marginBottom: '1rem',
									}}>
									Projects
								</Typography>
								<Typography
									variant='body1'
									style={{
										color: theme.tertiary80,
										textAlign: 'center',
										maxWidth: '700px',
										margin: '0 auto',
									}}>
									Showcasing my work across Mobile Development, Full Stack Web, and Software Engineering
								</Typography>
							</motion.div>

							{/* Category Filter Chips */}
							<Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 4, mb: 3 }}>
								{categories.map((category) => (
									<FilterChip key={category.value} label={`${category.icon} ${category.label}`} onClick={() => setActiveFilter(category.value)} themeColors={theme} active={activeFilter === category.value ? 1 : 0} />
								))}
							</Box>

							{/* Featured Projects Section */}
							{featuredProjects.length > 0 && (
								<Box sx={{ mb: 4 }}>
									<Typography
										variant='h4'
										style={{
											color: theme.primary,
											textAlign: 'center',
											marginBottom: '2rem',
											fontWeight: '700',
											fontFamily: 'var(--primaryFont)',
										}}>
										⭐ Featured Projects
									</Typography>
									<div className='projects--grid'>
										{featuredProjects.map((project, index) => (
											<motion.div key={project.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }}>
												<SingleProject theme={theme} id={project.id} name={project.projectName} desc={project.projectDesc} tags={project.tags} code={project.code} demo={project.demo} image={project.image} techStack={project.techStack} highlights={project.highlights} featured={project.featured} />
											</motion.div>
										))}
									</div>
								</Box>
							)}

							{/* All/Filtered Projects */}
							<div className='projects--body'>
								<AnimatePresence mode='wait'>
									<motion.div key={activeFilter} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className='projects--grid'>
										{regularProjects.length > 0 ? (
											regularProjects.map((project, index) => (
												<motion.div key={project.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}>
													<SingleProject theme={theme} id={project.id} name={project.projectName} desc={project.projectDesc} tags={project.tags} code={project.code} demo={project.demo} image={project.image} techStack={project.techStack} highlights={project.highlights} featured={project.featured} />
												</motion.div>
											))
										) : featuredProjects.length === 0 ? (
											<Box sx={{ textAlign: 'center', py: 5, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gridColumn: '1 / -1' }}>
												<Typography variant='h5' style={{ color: theme.tertiary80 }}>
													No projects found in this category
												</Typography>
											</Box>
										) : null}
									</motion.div>
								</AnimatePresence>
							</div>
						</motion.div>
					</Box>
				</div>
			)}
		</>
	);
}

export default Projects;
