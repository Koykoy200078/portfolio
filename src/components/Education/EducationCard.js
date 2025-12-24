import React, { useContext } from 'react';
import { Card, CardContent, Box, Typography, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

import { ThemeContext } from '../../contexts/ThemeContext';
import './Education.css';

const ModernEducationCard = styled(Card, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ themeColors }) => ({
	backgroundColor: 'rgba(255, 255, 255, 0.05)',
	backdropFilter: 'blur(10px)',
	borderRadius: '20px',
	border: `2px solid rgba(255, 255, 255, 0.1)`,
	boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
	transition: 'all 0.4s ease',
	position: 'relative',
	overflow: 'hidden',
	'&::before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		width: '4px',
		height: '100%',
		background: `linear-gradient(180deg, ${themeColors.primary}, ${themeColors.tertiary})`,
		transition: 'width 0.4s ease',
	},
	'&:hover': {
		transform: 'translateX(8px)',
		boxShadow: `0 12px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px ${themeColors.primary}40`,
		borderColor: `${themeColors.primary}60`,
		backgroundColor: 'rgba(255, 255, 255, 0.08)',
		'&::before': {
			width: '6px',
		},
	},
}));

const IconWrapper = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ themeColors }) => ({
	width: '70px',
	height: '70px',
	borderRadius: '16px',
	background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.primary}CC)`,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexShrink: 0,
	boxShadow: `0 4px 12px ${themeColors.primary}40`,
	transition: 'transform 0.3s ease',
	'&:hover': {
		transform: 'rotate(5deg) scale(1.05)',
	},
}));

function EducationCard({ id, institution, course, startYear, endYear, index }) {
	const { theme } = useContext(ThemeContext);

	const cardVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				delay: index * 0.15,
				duration: 0.5,
			},
		},
	};

	return (
		<motion.div variants={cardVariants}>
			<ModernEducationCard themeColors={theme}>
				<CardContent sx={{ p: 4 }}>
					<Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
						<IconWrapper themeColors={theme}>
							<FaGraduationCap style={{ fontSize: '2rem', color: theme.secondary }} />
						</IconWrapper>
						<Box sx={{ flex: 1 }}>
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
								style={{
									color: theme.tertiary,
									fontWeight: '700',
									marginBottom: '0.5rem',
									fontFamily: 'var(--primaryFont)',
									fontSize: '1.5rem',
									lineHeight: '1.3',
								}}>
								{course}
							</Typography>
							<Typography
								variant='body1'
								style={{
									color: theme.tertiary80,
									fontWeight: '600',
									fontFamily: 'var(--primaryFont)',
									fontSize: '1.1rem',
									opacity: 0.9,
								}}>
								{institution}
							</Typography>
						</Box>
					</Box>
				</CardContent>
			</ModernEducationCard>
		</motion.div>
	);
}

export default EducationCard;
