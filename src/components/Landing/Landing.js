import React, { useContext } from 'react';
import { Button, Chip, Box } from '@mui/material';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import { FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaBlogger, FaFacebook } from 'react-icons/fa';

const ResumeBtn = styled(Button, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ theme: muiTheme, themeColors }) => ({
	color: themeColors.primary,
	borderRadius: '30px',
	textTransform: 'inherit',
	textDecoration: 'none',
	width: '150px',
	fontSize: '1rem',
	fontWeight: '500',
	height: '50px',
	fontFamily: 'var(--primaryFont)',
	border: `3px solid ${themeColors.primary}`,
	transition: '100ms ease-out',
	'&:hover': {
		backgroundColor: themeColors.tertiary,
		color: themeColors.secondary,
		border: `3px solid ${themeColors.tertiary}`,
	},
	[muiTheme.breakpoints.down('sm')]: {
		width: '180px',
	},
}));

const ContactBtn = styled(Button, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ theme: muiTheme, themeColors }) => ({
	backgroundColor: themeColors.primary,
	color: themeColors.secondary,
	borderRadius: '30px',
	textTransform: 'inherit',
	textDecoration: 'none',
	width: '150px',
	height: '50px',
	fontSize: '1rem',
	fontWeight: '500',
	fontFamily: 'var(--primaryFont)',
	border: `3px solid ${themeColors.primary}`,
	transition: '100ms ease-out',
	'&:hover': {
		backgroundColor: themeColors.secondary,
		color: themeColors.tertiary,
		border: `3px solid ${themeColors.tertiary}`,
	},
	[muiTheme.breakpoints.down('sm')]: {
		display: 'none',
	},
}));

const SpecialtyChip = styled(Chip, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ themeColors }) => ({
	margin: '0.5rem',
	padding: '1.5rem 0.5rem',
	fontSize: '1rem',
	fontWeight: '600',
	backgroundColor: `${themeColors.primary}20`,
	color: themeColors.primary,
	border: `2px solid ${themeColors.primary}`,
	transition: 'all 0.3s ease',
	'&:hover': {
		backgroundColor: themeColors.primary,
		color: themeColors.secondary,
		transform: 'translateY(-5px)',
		boxShadow: `0 10px 20px ${themeColors.primary}40`,
	},
}));

const ContentCard = styled(motion.div, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ themeColors }) => ({
	backgroundColor: 'rgba(255, 255, 255, 0.05)',
	backdropFilter: 'blur(10px)',
	borderRadius: '24px',
	padding: '3rem',
	border: `1px solid rgba(255, 255, 255, 0.1)`,
	borderTop: `4px solid ${themeColors.primary}`,
	boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
	transition: 'all 0.4s ease',
	position: 'relative',
	overflow: 'visible',
	'&:hover': {
		transform: 'translateY(-8px)',
		boxShadow: `0 20px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px ${themeColors.primary}40`,
		backgroundColor: 'rgba(255, 255, 255, 0.08)',
	},
	'@media (max-width: 600px)': {
		overflow: 'visible',
	},
}));

function Landing() {
	const { theme, drawerOpen } = useContext(ThemeContext);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	};

	return (
		<div className='landing'>
			<div className='landing--container'>
				<div className='landing--container-left' style={{ backgroundColor: theme.primary }}>
					<div className='lcl--content'>
						{socialsData.facebook && (
							<motion.a href={socialsData.facebook} target='_blank' rel='noreferrer' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
								<FaFacebook className='landing--social' style={{ color: theme.secondary }} aria-label='Facebook' />
							</motion.a>
						)}
						{socialsData.linkedIn && (
							<motion.a href={socialsData.linkedIn} target='_blank' rel='noreferrer' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
								<FaLinkedin className='landing--social' style={{ color: theme.secondary }} aria-label='LinkedIn' />
							</motion.a>
						)}
						{socialsData.github && (
							<motion.a href={socialsData.github} target='_blank' rel='noreferrer' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
								<FaGithub className='landing--social' style={{ color: theme.secondary }} aria-label='GitHub' />
							</motion.a>
						)}
						{socialsData.twitter && (
							<motion.a href={socialsData.twitter} target='_blank' rel='noreferrer' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
								<FaTwitter className='landing--social' style={{ color: theme.secondary }} aria-label='Twitter' />
							</motion.a>
						)}
						{socialsData.youtube && (
							<motion.a href={socialsData.youtube} target='_blank' rel='noreferrer' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
								<FaYoutube className='landing--social' style={{ color: theme.secondary }} aria-label='YouTube' />
							</motion.a>
						)}
						{socialsData.blogger && (
							<motion.a href={socialsData.blogger} target='_blank' rel='noreferrer' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
								<FaBlogger className='landing--social' style={{ color: theme.secondary }} aria-label='Blogger' />
							</motion.a>
						)}
					</div>
				</div>
				<motion.img
					src={headerData.image}
					alt=''
					className='landing--img'
					style={{
						opacity: `${drawerOpen ? '0' : '1'}`,
						borderColor: theme.secondary,
					}}
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: drawerOpen ? 0 : 1 }}
					transition={{ duration: 0.5 }}
					whileHover={{ scale: 1.05 }}
				/>
				<div className='landing--container-right' style={{ backgroundColor: theme.secondary }}>
					<ContentCard className='lcr--content' themeColors={theme} style={{ color: theme.tertiary }} variants={containerVariants} initial='hidden' animate='visible' whileHover={{ scale: 1.02 }}>
						<motion.h6 variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
							<span style={{ fontSize: '1.2rem' }}>👋</span>
							{headerData.title}
						</motion.h6>
						<motion.h1 variants={itemVariants}>{headerData.name}</motion.h1>

						{/* Specialty Badges */}
						<motion.div variants={itemVariants} style={{ margin: '1.5rem 0' }}>
							<Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: 1 }}>{headerData.specialties && headerData.specialties.map((specialty, index) => <SpecialtyChip key={index} label={`${specialty.icon} ${specialty.text}`} themeColors={theme} />)}</Box>
						</motion.div>

						<motion.p variants={itemVariants} style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
							{headerData.tagline || headerData.description}
						</motion.p>

						{headerData.availability && (
							<motion.p
								variants={itemVariants}
								style={{
									fontSize: '0.95rem',
									color: theme.primary,
									fontWeight: '600',
									marginTop: '1rem',
								}}>
								✨ {headerData.availability}
							</motion.p>
						)}

						<motion.div className='lcr-buttonContainer' variants={itemVariants}>
							{headerData.resumePdf && (
								<a href={headerData.resumePdf} download='resume' target='_blank' rel='noreferrer'>
									<ResumeBtn themeColors={theme}>Download CV</ResumeBtn>
								</a>
							)}
							<a href='#contacts' style={{ textDecoration: 'none' }}>
								<ContactBtn themeColors={theme}>Contact</ContactBtn>
							</a>
						</motion.div>
					</ContentCard>
				</div>
			</div>
		</div>
	);
}

export default Landing;
