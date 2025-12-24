import React, { useContext } from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData';

const SpecializationCard = styled(Card, {
	shouldForwardProp: (prop) => prop !== 'themeColors' && prop !== 'data-highlight',
})(({ theme: muiTheme, themeColors, 'data-highlight': highlight }) => ({
	height: '100%',
	minHeight: '550px',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	borderRadius: '24px',
	border: `2px solid ${highlight ? themeColors.primary : 'rgba(255, 255, 255, 0.1)'}`,
	borderTop: highlight ? `4px solid ${themeColors.primary}` : `2px solid rgba(255, 255, 255, 0.1)`,
	backgroundColor: highlight ? `${themeColors.primary}08` : 'rgba(255, 255, 255, 0.03)',
	backdropFilter: 'blur(10px)',
	boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
	transition: 'all 0.4s ease',
	position: 'relative',
	overflow: 'visible',
	'&:hover': {
		transform: 'translateY(-12px) scale(1.02)',
		boxShadow: `0 20px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px ${themeColors.primary}60`,
		borderColor: themeColors.primary,
		borderTop: `4px solid ${themeColors.primary}`,
		backgroundColor: `${themeColors.primary}12`,
	},
	[muiTheme.breakpoints.down('lg')]: {
		minHeight: '520px',
	},
	[muiTheme.breakpoints.down('md')]: {
		minHeight: '480px',
	},
	[muiTheme.breakpoints.down('sm')]: {
		minHeight: 'auto',
		height: 'auto',
	},
}));

const StatCard = styled(motion.div, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ themeColors }) => ({
	textAlign: 'center',
	padding: '2rem 1.5rem',
	minHeight: '160px',
	height: '160px',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: '20px',
	backgroundColor: 'rgba(255, 255, 255, 0.05)',
	backdropFilter: 'blur(10px)',
	border: `2px solid ${themeColors.primary}40`,
	boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
	transition: 'all 0.3s ease',
	'&:hover': {
		transform: 'translateY(-8px)',
		boxShadow: `0 12px 32px ${themeColors.primary}30`,
		borderColor: themeColors.primary,
		backgroundColor: `${themeColors.primary}10`,
	},
}));

function About() {
	const { theme } = useContext(ThemeContext);

	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.2,
				duration: 0.5,
			},
		}),
	};

	return (
		<div className='about' id='about' style={{ backgroundColor: theme.secondary }}>
			<div className='line-styling'>
				<div className='style-circle' style={{ backgroundColor: theme.primary }}></div>
				<div className='style-circle' style={{ backgroundColor: theme.primary }}></div>
				<div className='style-line' style={{ backgroundColor: theme.primary }}></div>
			</div>
			<div className='about-body'>
				<div className='about-description'>
					<h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
					<p style={{ color: theme.tertiary80 }}>
						{aboutData.description1}
						<br />
						<br />
						{aboutData.description2}
					</p>

					{/* Stats Section */}
					{aboutData.stats && aboutData.stats.length > 0 && (
						<Box sx={{ mt: 4, mb: 4 }}>
							<Grid container spacing={3}>
								{aboutData.stats.map((stat, index) => (
									<Grid item xs={6} sm={3} key={index}>
										<StatCard themeColors={theme} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }}>
											<Typography
												variant='h3'
												style={{
													color: theme.primary,
													fontWeight: '700',
													marginBottom: '0.5rem',
												}}>
												{stat.value}
											</Typography>
											<Typography variant='body1' style={{ color: theme.tertiary, fontWeight: '600' }}>
												{stat.label}
											</Typography>
										</StatCard>
									</Grid>
								))}
							</Grid>
						</Box>
					)}

					{/* Specializations Section */}
					{aboutData.specializations && aboutData.specializations.length > 0 && (
						<Box sx={{ mt: 5 }}>
							<Typography
								variant='h4'
								style={{
									color: theme.primary,
									marginBottom: '2.5rem',
									fontWeight: '800',
									textAlign: 'center',
									fontSize: '2.5rem',
									letterSpacing: '-0.5px',
								}}>
								Core Specializations
							</Typography>
							<Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
								{aboutData.specializations.map((spec, index) => (
									<Grid item xs={12} md={4} key={spec.id} sx={{ display: 'flex', flexDirection: 'column' }}>
										<motion.div custom={index} initial='hidden' whileInView='visible' viewport={{ once: true }} variants={cardVariants}>
											<SpecializationCard themeColors={theme} data-highlight={spec.highlight}>
												<CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
													<Box sx={{ textAlign: 'center', mb: 3 }}>
														<Typography variant='h1' style={{ marginBottom: '1rem', fontSize: '3.5rem' }}>
															{spec.icon}
														</Typography>
														<Typography
															variant='h5'
															style={{
																color: theme.primary,
																fontWeight: '700',
																marginBottom: '0.75rem',
																fontSize: '1.5rem',
															}}>
															{spec.title}
														</Typography>
													</Box>
													<Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
														<Typography
															variant='body1'
															style={{
																color: theme.tertiary80,
																marginBottom: '2rem',
																lineHeight: '1.7',
																opacity: 0.9,
															}}>
															{spec.description}
														</Typography>
														<Box sx={{ mt: 'auto' }}>
															<Typography
																variant='subtitle2'
																style={{
																	color: theme.primary,
																	fontWeight: '700',
																	marginBottom: '0.75rem',
																	fontSize: '0.9rem',
																	textTransform: 'uppercase',
																	letterSpacing: '0.5px',
																}}>
																Key Skills
															</Typography>
															<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'flex-start' }}>
																{spec.skills &&
																	spec.skills.map((skill, idx) => (
																		<span
																			key={idx}
																			style={{
																				padding: '0.4rem 0.9rem',
																				backgroundColor: `${theme.primary}15`,
																				color: theme.tertiary,
																				borderRadius: '20px',
																				fontSize: '0.85rem',
																				fontWeight: '600',
																				border: `1px solid ${theme.primary}30`,
																				transition: 'all 0.2s ease',
																				flex: '0 0 calc(33.333% - 6px)',
																				maxWidth: 'calc(33.333% - 6px)',
																				minWidth: 'fit-content',
																				textAlign: 'center',
																				whiteSpace: 'nowrap',
																				boxSizing: 'border-box',
																			}}>
																			{skill}
																		</span>
																	))}
															</Box>
														</Box>
													</Box>
												</CardContent>
											</SpecializationCard>
										</motion.div>
									</Grid>
								))}
							</Grid>
						</Box>
					)}
				</div>
				<div className='about-img'>
					<motion.img src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2} alt='' initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.05 }} />
				</div>
			</div>
		</div>
	);
}

export default About;
