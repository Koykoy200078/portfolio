import React, { useContext, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { MdPhone } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';

const NavMenuIcon = styled(IoMenuSharp, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ theme: muiTheme, themeColors }) => ({
	fontSize: '2.5rem',
	color: themeColors.tertiary,
	cursor: 'pointer',
	transform: 'translateY(-10px)',
	transition: 'color 0.3s',
	'&:hover': {
		color: themeColors.primary,
	},
	[muiTheme.breakpoints.down('sm')]: {
		fontSize: '2.5rem',
	},
	[muiTheme.breakpoints.down('xs')]: {
		fontSize: '2rem',
	},
}));

const StyledDrawer = styled(Drawer, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ theme: muiTheme, themeColors }) => ({
	'& .MuiDrawer-paper': {
		padding: '0em 1.8em',
		width: '14em',
		fontFamily: ' var(--primaryFont)',
		fontStyle: ' normal',
		fontWeight: ' normal',
		fontSize: ' 24px',
		background: themeColors.secondary,
		overflow: 'hidden',
		borderTopRightRadius: '40px',
		borderBottomRightRadius: '40px',
		[muiTheme.breakpoints.down('sm')]: {
			width: '12em',
		},
	},
}));

const StyledCloseIcon = styled(CloseIcon, {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ theme: muiTheme, themeColors }) => ({
	fontSize: '2rem',
	fontWeight: 'bold',
	cursor: 'pointer',
	color: themeColors.primary,
	position: 'absolute',
	right: 40,
	top: 40,
	transition: 'color 0.2s',
	'&:hover': {
		color: themeColors.tertiary,
	},
	[muiTheme.breakpoints.down('sm')]: {
		right: 20,
		top: 20,
	},
}));

const DrawerItem = styled('div', {
	shouldForwardProp: (prop) => prop !== 'themeColors',
})(({ theme: muiTheme, themeColors }) => ({
	margin: '2rem auto',
	borderRadius: '78.8418px',
	background: themeColors.secondary,
	color: themeColors.primary,
	width: '85%',
	height: '60px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-evenly',
	padding: '0 30px',
	boxSizing: 'border-box',
	border: '2px solid',
	borderColor: themeColors.primary,
	transition: 'background-color 0.2s, color 0.2s',
	'&:hover': {
		background: themeColors.primary,
		color: themeColors.secondary,
	},
	[muiTheme.breakpoints.down('sm')]: {
		width: '100%',
		padding: '0 25px',
		height: '55px',
	},
}));

const DrawerLinks = styled('span')(({ theme }) => ({
	fontFamily: 'var(--primaryFont)',
	width: '50%',
	fontSize: '1.3rem',
	fontWeight: 600,
	[theme.breakpoints.down('sm')]: {
		fontSize: '1.125rem',
	},
}));

const DrawerIconStyle = styled('div')(({ theme }) => ({
	fontSize: '1.6rem',
	[theme.breakpoints.down('sm')]: {
		fontSize: '1.385rem',
	},
}));

function Navbar() {
	const { theme, setHandleDrawer } = useContext(ThemeContext);

	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
		setHandleDrawer();
	};

	const handleDrawerClose = () => {
		setOpen(false);
		setHandleDrawer();
	};

	const shortname = (name) => {
		if (name.length > 12) {
			return name.split(' ')[0];
		} else {
			return name;
		}
	};

	const fadeInLeft = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
	};

	return (
		<div className='navbar'>
			<div className='navbar--container'>
				<h1 style={{ color: theme.secondary }}>{shortname(headerData.name)}</h1>

				<NavMenuIcon themeColors={theme} onClick={handleDrawerOpen} aria-label='Menu' />
			</div>
			<StyledDrawer
				variant='temporary'
				onClose={(event, reason) => {
					if (reason !== 'backdropClick') {
						handleDrawerClose();
					} else if (reason !== 'escapeKeyDown') {
						handleDrawerClose();
					}
				}}
				anchor='left'
				open={open}
				themeColors={theme}
				className='drawer'
				disableScrollLock={true}>
				<div className='div-closebtn'>
					<StyledCloseIcon
						onClick={handleDrawerClose}
						onKeyDown={(e) => {
							if (e.key === ' ' || e.key === 'Enter') {
								e.preventDefault();
								handleDrawerClose();
							}
						}}
						themeColors={theme}
						role='button'
						tabIndex='0'
						aria-label='Close'
					/>
				</div>
				<br />

				<div onClick={handleDrawerClose}>
					<div className='navLink--container'>
						<motion.div initial='hidden' animate='visible' variants={fadeInLeft}>
							<NavLink to='/' smooth={true}>
								<DrawerItem themeColors={theme}>
									<DrawerIconStyle>
										<IoHomeSharp />
									</DrawerIconStyle>
									<DrawerLinks>Home</DrawerLinks>
								</DrawerItem>
							</NavLink>
						</motion.div>

						<motion.div initial='hidden' animate='visible' variants={fadeInLeft} transition={{ delay: 0.1 }}>
							<NavLink to='/#about' smooth={true}>
								<DrawerItem themeColors={theme}>
									<DrawerIconStyle>
										<FaUser />
									</DrawerIconStyle>
									<DrawerLinks>About</DrawerLinks>
								</DrawerItem>
							</NavLink>
						</motion.div>

						<motion.div initial='hidden' animate='visible' variants={fadeInLeft} transition={{ delay: 0.2 }}>
							<NavLink to='/#education' smooth={true}>
								<DrawerItem themeColors={theme}>
									<DrawerIconStyle>
										<HiDocumentText />
									</DrawerIconStyle>
									<DrawerLinks>Education</DrawerLinks>
								</DrawerItem>
							</NavLink>
						</motion.div>

						<motion.div initial='hidden' animate='visible' variants={fadeInLeft} transition={{ delay: 0.3 }}>
							<NavLink to='/#contacts' smooth={true}>
								<DrawerItem themeColors={theme}>
									<DrawerIconStyle>
										<MdPhone />
									</DrawerIconStyle>
									<DrawerLinks>Contact</DrawerLinks>
								</DrawerItem>
							</NavLink>
						</motion.div>
					</div>
				</div>
			</StyledDrawer>
		</div>
	);
}

export default Navbar;
