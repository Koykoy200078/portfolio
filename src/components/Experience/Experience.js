import React, { useContext } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';
import { experienceData } from '../../data/experienceData';
import ExperienceCard from './ExperienceCard';

import './Experience.css';

function Experience() {
	const { theme } = useContext(ThemeContext);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
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

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.8 },
		},
	};

	return (
		<div className='experience' id='experience' style={{ backgroundColor: theme.secondary }}>
			<Box className='experience-container'>
				<motion.div initial='hidden' whileInView='visible' viewport={{ once: true }} variants={containerVariants}>
					<motion.div variants={titleVariants}>
						<Typography
							variant='h2'
							component='h1'
							className='experience-title'
							style={{
								color: theme.primary,
								fontFamily: 'var(--primaryFont)',
								fontSize: '3.5rem',
								fontWeight: 800,
								letterSpacing: '-0.5px',
								marginBottom: '3rem',
								textAlign: 'center',
							}}>
							Experience
						</Typography>
					</motion.div>

					<Grid container spacing={3}>
						{experienceData.map((exp, index) => (
							<Grid item xs={12} md={6} key={exp.id}>
								<ExperienceCard id={exp.id} jobtitle={exp.jobtitle} company={exp.company} startYear={exp.startYear} endYear={exp.endYear} index={index} />
							</Grid>
						))}
					</Grid>

					{/* <motion.div variants={imageVariants} className='experience-image-wrapper'>
						<img src={theme.expimg} alt='Experience illustration' className='experience-illustration' />
					</motion.div> */}
				</motion.div>
			</Box>
		</div>
	);
}

export default Experience;
