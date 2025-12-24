import React, { useContext } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css';
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData';

function Education() {
	const { theme } = useContext(ThemeContext);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	return (
		<div className='education' id='education' style={{ backgroundColor: theme.secondary }}>
			<div className='education-body'>
				<div className='education-description'>
					<motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
						<Typography
							variant='h2'
							style={{
								color: theme.primary,
								fontWeight: '800',
								marginBottom: '3rem',
								fontSize: '3.5rem',
								letterSpacing: '-0.5px',
								fontFamily: 'var(--primaryFont)',
							}}>
							Education
						</Typography>
					</motion.div>
					<motion.div variants={containerVariants} initial='hidden' whileInView='visible' viewport={{ once: true }}>
						<Grid container spacing={3}>
							{educationData.map((edu, index) => (
								<Grid item xs={12} key={edu.id}>
									<EducationCard id={edu.id} institution={edu.institution} course={edu.course} startYear={edu.startYear} endYear={edu.endYear} index={index} />
								</Grid>
							))}
						</Grid>
					</motion.div>
				</div>
				<div className='education-image'>
					<motion.img src={theme.eduimg} alt='' initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} />
				</div>
			</div>
		</div>
	);
}

export default Education;
