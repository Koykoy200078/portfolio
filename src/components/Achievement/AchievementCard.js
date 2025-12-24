import React, { useContext } from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';

import { AiOutlineFolder, AiOutlineTrophy } from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';

import './Achievement.css';

const ModernAchievementCard = styled(Card, {
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
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	'&::before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '4px',
		background: `linear-gradient(90deg, ${themeColors.primary}, ${themeColors.tertiary})`,
		transform: 'scaleX(0)',
		transformOrigin: 'left',
		transition: 'transform 0.3s ease',
	},
	'&:hover': {
		transform: 'translateY(-8px)',
		boxShadow: `0 20px 40px ${themeColors.primary}30`,
		border: `1px solid ${themeColors.primary}40`,
		'&::before': {
			transform: 'scaleX(1)',
		},
		'& .trophy-icon': {
			transform: 'rotate(-10deg) scale(1.1)',
		},
		'& .achievement-image': {
			transform: 'scale(1.05)',
		},
	},
}));

const IconWrapper = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ themeColors }) => ({
	width: '60px',
	height: '60px',
	borderRadius: '16px',
	background: `linear-gradient(135deg, ${themeColors.primary}20 0%, ${themeColors.primary}10 100%)`,
	border: `2px solid ${themeColors.primary}30`,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	transition: 'all 0.3s ease',
	flexShrink: 0,
}));

const ImageContainer = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ themeColors }) => ({
	position: 'relative',
	width: '100%',
	height: '180px',
	overflow: 'hidden',
	backgroundColor: `${themeColors.primary}10`,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	'& img': {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		transition: 'transform 0.3s ease',
	},
}));

function AchievementCard({ id, title, details, date, field, image, index }) {
	const { theme } = useContext(ThemeContext);

	const cardVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				delay: index * 0.1,
			},
		},
	};

	return (
		<motion.div initial='hidden' whileInView='visible' viewport={{ once: true, margin: '-50px' }} variants={cardVariants}>
			<ModernAchievementCard themeColors={theme}>
				{image && (
					<ImageContainer themeColors={theme}>
						<img src={image} alt={title} className='achievement-image' />
					</ImageContainer>
				)}

				<CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
					<Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
						<IconWrapper className='trophy-icon' themeColors={theme}>
							<AiOutlineTrophy style={{ fontSize: '1.8rem', color: theme.primary }} />
						</IconWrapper>

						<Box sx={{ flex: 1 }}>
							<Typography
								variant='h6'
								component='h3'
								sx={{
									color: theme.tertiary,
									fontFamily: 'var(--primaryFont)',
									fontSize: '1.25rem',
									fontWeight: 700,
									mb: 1,
									lineHeight: 1.3,
								}}>
								{title}
							</Typography>
						</Box>
					</Box>

					<Typography
						variant='body2'
						sx={{
							color: theme.tertiary80,
							fontFamily: 'var(--primaryFont)',
							fontSize: '0.95rem',
							lineHeight: 1.6,
							mb: 2,
							flex: 1,
						}}>
						{details}
					</Typography>

					<Box
						sx={{
							mt: 'auto',
							pt: 2,
							borderTop: `1px solid ${theme.primary}20`,
							display: 'flex',
							flexWrap: 'wrap',
							gap: 1.5,
							alignItems: 'center',
						}}>
						{date && (
							<Chip
								icon={<FaCalendarAlt />}
								label={date}
								size='small'
								style={{
									backgroundColor: `${theme.primary}20`,
									color: theme.primary,
									border: `1px solid ${theme.primary}40`,
									fontWeight: '600',
									fontFamily: 'var(--primaryFont)',
									padding: '0.5rem 0.25rem',
									height: 'auto',
								}}
							/>
						)}
						{field && (
							<Chip
								icon={<AiOutlineFolder />}
								label={field}
								size='small'
								style={{
									backgroundColor: `${theme.primary}15`,
									color: theme.tertiary,
									border: `1px solid ${theme.primary}30`,
									fontWeight: '600',
									fontFamily: 'var(--primaryFont)',
									padding: '0.5rem 0.25rem',
									height: 'auto',
								}}
							/>
						)}
					</Box>
				</CardContent>
			</ModernAchievementCard>
		</motion.div>
	);
}

export default AchievementCard;
