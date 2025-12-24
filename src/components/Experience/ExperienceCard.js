import React, { useContext } from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';

const ModernExperienceCard = styled(Card, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ themeColors }) => ({
	position: 'relative',
	backgroundColor: `${themeColors.secondary}dd`,
	backdropFilter: 'blur(10px)',
	WebkitBackdropFilter: 'blur(10px)',
	border: `1px solid ${themeColors.primary}20`,
	borderRadius: '20px',
	overflow: 'hidden',
	transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
	'&::before': {
		content: '""',
		position: 'absolute',
		left: 0,
		top: 0,
		height: '100%',
		width: '4px',
		background: `linear-gradient(180deg, ${themeColors.primary} 0%, ${themeColors.primary}80 100%)`,
		transition: 'width 0.3s ease',
	},
	'&:hover': {
		transform: 'translateX(8px)',
		boxShadow: `0 12px 40px ${themeColors.primary}30`,
		border: `1px solid ${themeColors.primary}40`,
		'&::before': {
			width: '6px',
		},
		'& .icon-wrapper': {
			transform: 'rotate(5deg) scale(1.05)',
		},
	},
}));

const IconWrapper = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ themeColors }) => ({
	width: '70px',
	height: '70px',
	borderRadius: '16px',
	background: `linear-gradient(135deg, ${themeColors.primary}20 0%, ${themeColors.primary}10 100%)`,
	border: `2px solid ${themeColors.primary}30`,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	transition: 'all 0.3s ease',
	flexShrink: 0,
}));

function ExperienceCard({ id, company, jobtitle, startYear, endYear, index }) {
	const { theme } = useContext(ThemeContext);

	const cardVariants = {
		hidden: { opacity: 0, x: -30 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
				delay: index * 0.15,
			},
		},
	};

	return (
		<motion.div initial='hidden' whileInView='visible' viewport={{ once: true, margin: '-50px' }} variants={cardVariants}>
			<ModernExperienceCard themeColors={theme}>
				<CardContent sx={{ p: 4 }}>
					<Box sx={{ display: 'flex', gap: 2.5, alignItems: 'flex-start' }}>
						<IconWrapper className='icon-wrapper' themeColors={theme}>
							<FaBriefcase style={{ fontSize: '2rem', color: theme.primary }} />
						</IconWrapper>

						<Box sx={{ flex: 1, minWidth: 0 }}>
							<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
								<Chip
									icon={<FaCalendarAlt />}
									label={`${startYear} - ${endYear}`}
									size='small'
									style={{
										backgroundColor: `${theme.primary}20`,
										color: theme.primary,
										border: `1px solid ${theme.primary}40`,
										fontWeight: '700',
										fontFamily: 'var(--primaryFont)',
										padding: '0.5rem 0.25rem',
										height: 'auto',
									}}
								/>
							</Box>

							<Typography
								variant='h5'
								component='h3'
								style={{
									color: theme.tertiary,
									fontFamily: 'var(--primaryFont)',
									fontSize: '1.5rem',
									fontWeight: 700,
									marginBottom: '0.5rem',
									lineHeight: 1.3,
								}}>
								{jobtitle}
							</Typography>

							<Typography
								variant='body1'
								style={{
									color: theme.tertiary80,
									fontFamily: 'var(--primaryFont)',
									fontSize: '1.1rem',
									fontWeight: 600,
								}}>
								{company}
							</Typography>
						</Box>
					</Box>
				</CardContent>
			</ModernExperienceCard>
		</motion.div>
	);
}

export default ExperienceCard;
