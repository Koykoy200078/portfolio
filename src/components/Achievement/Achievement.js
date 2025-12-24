import React, { useContext } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

import './Achievement.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { achievementData } from '../../data/achievementData';
import AchievementCard from './AchievementCard';

const SectionHeader = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ themeColors }) => ({
	marginBottom: '4rem',
	textAlign: 'center',
	position: 'relative',
	'&::after': {
		content: '""',
		position: 'absolute',
		bottom: '-1rem',
		left: '50%',
		transform: 'translateX(-50%)',
		width: '80px',
		height: '4px',
		background: `linear-gradient(90deg, ${themeColors.primary}, ${themeColors.tertiary})`,
		borderRadius: '2px',
	},
}));

function Achievement() {
	const { theme } = useContext(ThemeContext);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	};

	const headerVariants = {
		hidden: { opacity: 0, y: -30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	return (
		<>
			{achievementData.achievements.length > 0 && (
				<Box
					className='achievement'
					id='achievement'
					component='section'
					sx={{
						backgroundColor: theme.secondary,
						minHeight: '100vh',
						py: { xs: 6, sm: 8, md: 10 },
						px: { xs: 2, sm: 3, md: 4 },
						position: 'relative',
						overflow: 'hidden',
					}}>
					{/* Background decoration */}
					<Box
						sx={{
							position: 'absolute',
							top: '-10%',
							right: '-5%',
							width: '400px',
							height: '400px',
							borderRadius: '50%',
							background: `radial-gradient(circle, ${theme.primary}15 0%, transparent 70%)`,
							pointerEvents: 'none',
							zIndex: 0,
						}}
					/>

					<Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
						<motion.div initial='hidden' whileInView='visible' viewport={{ once: true, margin: '-100px' }} variants={containerVariants}>
							<SectionHeader themeColors={theme} component={motion.div} variants={headerVariants}>
								<Typography
									variant='h2'
									component='h1'
									sx={{
										color: theme.primary,
										fontFamily: 'var(--primaryFont)',
										fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
										fontWeight: 700,
										mb: 2,
									}}>
									Achievements
								</Typography>
								<Typography
									variant='h5'
									component='h4'
									sx={{
										color: theme.tertiary80,
										fontFamily: 'var(--primaryFont)',
										fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
										fontWeight: 400,
										maxWidth: '800px',
										mx: 'auto',
										lineHeight: 1.6,
									}}>
									{achievementData.bio}
								</Typography>
							</SectionHeader>

							<Box
								component={motion.div}
								variants={containerVariants}
								sx={{
									display: 'grid',
									gridTemplateColumns: {
										xs: '1fr',
										md: 'repeat(2, 1fr)',
									},
									gap: { xs: 3, sm: 4 },
								}}>
								{achievementData.achievements.map((achieve, index) => (
									<AchievementCard key={achieve.id} id={achieve.id} title={achieve.title} details={achieve.details} date={achieve.date} field={achieve.field} image={achieve.image} index={index} />
								))}
							</Box>
						</motion.div>
					</Container>
				</Box>
			)}
		</>
	);
}

export default Achievement;
