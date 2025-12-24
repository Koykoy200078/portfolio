import React from 'react';
import { Box, Typography, Chip, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaPlay, FaCode, FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

const ModernProjectCard = styled(Card, {
	shouldForwardProp: (prop) => prop !== 'themeColors' && prop !== 'featured',
})(({ themeColors, featured }) => ({
	position: 'relative',
	backgroundColor: `${themeColors.secondary}dd`,
	backdropFilter: 'blur(10px)',
	WebkitBackdropFilter: 'blur(10px)',
	border: featured ? `2px solid ${themeColors.primary}` : `1px solid ${themeColors.primary}20`,
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
		right: 0,
		height: '3px',
		background: `linear-gradient(90deg, ${themeColors.primary} 0%, ${themeColors.primary}80 100%)`,
		transform: 'scaleX(0)',
		transition: 'transform 0.3s ease',
	},
	'&:hover': {
		transform: 'translateY(-8px)',
		boxShadow: `0 20px 40px ${themeColors.primary}30`,
		border: featured ? `2px solid ${themeColors.primary}` : `1px solid ${themeColors.primary}40`,
		'&::before': {
			transform: 'scaleX(1)',
		},
		'& .project-image': {
			transform: 'scale(1.05)',
		},
	},
}));

const ProjectImageWrapper = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ themeColors }) => ({
	position: 'relative',
	width: '100%',
	height: '220px',
	overflow: 'hidden',
	backgroundColor: `${themeColors.primary}10`,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '1rem',
	'& img': {
		width: '100%',
		height: '100%',
		objectFit: 'contain',
		transition: 'transform 0.3s ease',
	},
}));

const ActionButton = styled('a', {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ themeColors }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '0.5rem',
	padding: '0.6rem 1.2rem',
	borderRadius: '12px',
	backgroundColor: `${themeColors.primary}20`,
	color: themeColors.primary,
	border: `1px solid ${themeColors.primary}40`,
	fontWeight: '600',
	fontSize: '0.9rem',
	fontFamily: 'var(--primaryFont)',
	textDecoration: 'none',
	transition: 'all 0.3s ease',
	'&:hover': {
		backgroundColor: themeColors.primary,
		color: themeColors.secondary,
		transform: 'translateY(-2px)',
		boxShadow: `0 4px 12px ${themeColors.primary}40`,
	},
}));

const TechStackChip = styled(Chip, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ themeColors }) => ({
	margin: '0.25rem',
	backgroundColor: `${themeColors.primary}15`,
	color: themeColors.tertiary,
	fontWeight: '600',
	fontSize: '0.8rem',
	border: `1px solid ${themeColors.primary}30`,
	fontFamily: 'var(--primaryFont)',
	height: 'auto',
	padding: '0.4rem 0.25rem',
}));

function SingleProject({ id, name, desc, tags, code, demo, image, theme, techStack, highlights, featured }) {
	return (
		<ModernProjectCard themeColors={theme} featured={featured ? 1 : 0}>
			{featured && (
				<Box
					sx={{
						position: 'absolute',
						top: '1rem',
						right: '1rem',
						zIndex: 10,
						backgroundColor: `${theme.primary}20`,
						backdropFilter: 'blur(10px)',
						border: `1px solid ${theme.primary}`,
						borderRadius: '12px',
						padding: '0.5rem 0.75rem',
						display: 'flex',
						alignItems: 'center',
						gap: '0.5rem',
					}}>
					<FaStar style={{ color: theme.primary, fontSize: '1rem' }} />
					<Typography style={{ color: theme.primary, fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--primaryFont)' }}>Featured</Typography>
				</Box>
			)}

			<ProjectImageWrapper themeColors={theme}>
				<img className='project-image' src={image || placeholder} alt={name} />
			</ProjectImageWrapper>

			<CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
				<Typography
					variant='h5'
					component='h3'
					style={{
						color: theme.tertiary,
						fontFamily: 'var(--primaryFont)',
						fontSize: '1.5rem',
						fontWeight: 700,
						marginBottom: '0.75rem',
						lineHeight: 1.3,
					}}>
					{name}
				</Typography>

				<Typography
					variant='body2'
					style={{
						color: theme.tertiary80,
						fontFamily: 'var(--primaryFont)',
						fontSize: '0.95rem',
						lineHeight: 1.6,
						marginBottom: '1rem',
					}}>
					{desc}
				</Typography>

				{/* Highlights Section */}
				{highlights && highlights.length > 0 && (
					<Box sx={{ mb: 2 }}>
						<Typography
							variant='subtitle2'
							style={{
								color: theme.primary,
								fontWeight: '700',
								marginBottom: '0.5rem',
								fontFamily: 'var(--primaryFont)',
							}}>
							Key Highlights:
						</Typography>
						<ul
							style={{
								margin: 0,
								paddingLeft: '1.25rem',
								color: theme.tertiary80,
								fontFamily: 'var(--primaryFont)',
							}}>
							{highlights.slice(0, 3).map((highlight, idx) => (
								<li key={idx} style={{ marginBottom: '0.35rem', fontSize: '0.85rem' }}>
									{highlight}
								</li>
							))}
						</ul>
					</Box>
				)}

				{/* Tech Stack Section */}
				{techStack && techStack.length > 0 && (
					<Box sx={{ mb: 2 }}>
						<Typography
							variant='subtitle2'
							style={{
								color: theme.primary,
								fontWeight: '700',
								marginBottom: '0.5rem',
								fontFamily: 'var(--primaryFont)',
							}}>
							Tech Stack:
						</Typography>
						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
							{techStack.map((tech, idx) => (
								<TechStackChip key={idx} label={tech} themeColors={theme} size='small' />
							))}
						</Box>
					</Box>
				)}

				{/* Action Buttons */}
				<Box sx={{ mt: 'auto', pt: 2, display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
					{demo && (
						<ActionButton href={demo} target='_blank' rel='noreferrer' themeColors={theme}>
							<FaExternalLinkAlt style={{ fontSize: '0.9rem' }} />
							Live Demo
						</ActionButton>
					)}
					{code && (
						<ActionButton href={code} target='_blank' rel='noreferrer' themeColors={theme}>
							<FaCode style={{ fontSize: '0.9rem' }} />
							View Code
						</ActionButton>
					)}
				</Box>

				{/* Tags */}
				{tags && tags.length > 0 && (
					<Box sx={{ mt: 2, pt: 2, borderTop: `1px solid ${theme.primary}20`, display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
						{tags.map((tag, id) => (
							<Typography
								key={id}
								style={{
									color: theme.tertiary80,
									fontSize: '0.8rem',
									fontFamily: 'var(--primaryFont)',
									fontWeight: 500,
								}}>
								#{tag}
							</Typography>
						))}
					</Box>
				)}
			</CardContent>
		</ModernProjectCard>
	);
}

export default SingleProject;
