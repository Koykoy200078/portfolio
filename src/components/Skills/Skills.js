import React, { useContext, useState } from 'react';
import { Tabs, Tab, Box, Grid, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import Marquee from 'react-fast-marquee';

import './Skills.css';

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData, skillsCategories } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';

const StyledTabs = styled(Tabs, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ themeColors }) => ({
	'& .MuiTabs-indicator': {
		backgroundColor: themeColors.primary,
		height: '3px',
	},
}));

const StyledTab = styled(Tab, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ themeColors }) => ({
	color: themeColors.tertiary80,
	fontWeight: '600',
	fontSize: '1rem',
	textTransform: 'none',
	minWidth: '120px',
	'&.Mui-selected': {
		color: themeColors.primary,
	},
	'&:hover': {
		color: themeColors.primary,
		opacity: 1,
	},
}));

const SkillCard = styled(Card, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ themeColors }) => ({
	height: '100%',
	minHeight: '180px',
	borderRadius: '20px',
	backgroundColor: `${themeColors.secondary}dd`,
	backdropFilter: 'blur(10px)',
	WebkitBackdropFilter: 'blur(10px)',
	border: `1px solid ${themeColors.primary}20`,
	transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
	cursor: 'pointer',
	position: 'relative',
	overflow: 'hidden',
	'&::before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		height: '3px',
		background: `linear-gradient(90deg, ${themeColors.primary} 0%, ${themeColors.primary}80 100%)`,
		transform: 'scaleX(0)',
		transition: 'transform 0.3s ease',
	},
	'&:hover': {
		transform: 'translateY(-10px)',
		boxShadow: `0 15px 40px ${themeColors.primary}30`,
		border: `1px solid ${themeColors.primary}40`,
		'&::before': {
			transform: 'scaleX(1)',
		},
	},
}));

function Skills() {
	const { theme } = useContext(ThemeContext);
	const [activeCategory, setActiveCategory] = useState('all');

	const skillBoxStyle = {
		backgroundColor: theme.secondary,
		boxShadow: `0px 0px 30px ${theme.primary30}`,
	};

	const handleCategoryChange = (event, newValue) => {
		setActiveCategory(newValue);
	};

	const getSkillsByCategory = (category) => {
		if (category === 'all') return skillsData;
		if (skillsCategories && skillsCategories[category]) {
			return skillsCategories[category].skills || [];
		}
		return [];
	};

	const displaySkills = getSkillsByCategory(activeCategory);

	const categories = [
		{ value: 'all', label: 'All Skills', icon: '🎯' },
		...(skillsCategories
			? Object.keys(skillsCategories).map((key) => ({
					value: key,
					label: skillsCategories[key].title,
					icon: skillsCategories[key].icon,
			  }))
			: []),
	];

	return (
		<div className='skills' style={{ backgroundColor: theme.secondary }}>
			<div className='skillsHeader'>
				<h2 style={{ color: theme.primary }}>Skills & Technologies</h2>
				<Typography
					variant='body1'
					style={{
						color: theme.tertiary80,
						textAlign: 'center',
						marginTop: '1rem',
						maxWidth: '700px',
						margin: '1rem auto 0',
					}}>
					Comprehensive skill set across multiple domains of software development
				</Typography>
			</div>

			{/* Category Tabs */}
			{skillsCategories && (
				<Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 3 }}>
					<StyledTabs value={activeCategory} onChange={handleCategoryChange} variant='scrollable' scrollButtons='auto' themeColors={theme}>
						{categories.map((cat) => (
							<StyledTab key={cat.value} value={cat.value} label={`${cat.icon} ${cat.label}`} themeColors={theme} />
						))}
					</StyledTabs>
				</Box>
			)}

			<div className='skillsContainer'>
				{/* Categorized Grid View */}
				{skillsCategories && activeCategory !== 'all' ? (
					<AnimatePresence mode='wait'>
						<motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
							<Box sx={{ maxWidth: '1200px', margin: '0 auto', px: 3 }}>
								<Grid container spacing={3}>
									{displaySkills.map((skill, index) => (
										<Grid item xs={6} sm={4} md={3} key={index}>
											<motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}>
												<SkillCard themeColors={theme}>
													<CardContent sx={{ textAlign: 'center', py: 3 }}>
														<Box
															sx={{
																width: '80px',
																height: '80px',
																margin: '0 auto 1rem',
																display: 'flex',
																alignItems: 'center',
																justifyContent: 'center',
															}}>
															<img src={skillsImage(skill)} alt={skill} style={{ maxWidth: '100%', maxHeight: '100%' }} />
														</Box>
														<Typography
															variant='h6'
															style={{
																color: theme.tertiary,
																fontWeight: '600',
																fontSize: '0.95rem',
															}}>
															{skill}
														</Typography>
													</CardContent>
												</SkillCard>
											</motion.div>
										</Grid>
									))}
								</Grid>
							</Box>
						</motion.div>
					</AnimatePresence>
				) : (
					/* Marquee View for All Skills */
					<div className='skill--scroll'>
						<Marquee gradient={false} speed={80} pauseOnHover={true} pauseOnClick={true} delay={0} play={true} direction='left'>
							{displaySkills.map((skill, id) => (
								<div className='skill--box' key={id} style={skillBoxStyle}>
									<img src={skillsImage(skill)} alt={skill} />
									<h3 style={{ color: theme.tertiary }}>{skill}</h3>
								</div>
							))}
						</Marquee>
					</div>
				)}
			</div>
		</div>
	);
}

export default Skills;
