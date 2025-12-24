import React, { useContext, useState } from 'react';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import { styled } from '@mui/material/styles';
import { FaTwitter, FaLinkedinIn, FaGithub, FaYoutube, FaBloggerB, FaRedditAlien, FaStackOverflow, FaCodepen, FaInstagram, FaGitlab, FaMediumM } from 'react-icons/fa';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { ThemeContext } from '../../contexts/ThemeContext';

import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

const SocialIcon = styled('a')(({ themeColors }) => ({
	width: '45px',
	height: '45px',
	borderRadius: '50%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '21px',
	backgroundColor: themeColors.primary,
	color: themeColors.secondary,
	transition: '250ms ease-in-out',
	'&:hover': {
		transform: 'scale(1.1)',
		color: themeColors.secondary,
		backgroundColor: themeColors.tertiary,
	},
}));

const DetailsIcon = styled('div')(({ themeColors }) => ({
	backgroundColor: themeColors.primary,
	color: themeColors.secondary,
	borderRadius: '50%',
	width: '45px',
	height: '45px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '23px',
	transition: '250ms ease-in-out',
	flexShrink: 0,
	'&:hover': {
		transform: 'scale(1.1)',
		color: themeColors.secondary,
		backgroundColor: themeColors.tertiary,
	},
}));

function Contacts() {
	const [open, setOpen] = useState(false);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const [success, setSuccess] = useState(false);
	const [errMsg, setErrMsg] = useState('');

	const { theme } = useContext(ThemeContext);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const handleContactForm = (e) => {
		e.preventDefault();

		if (name && email && message) {
			if (isEmail(email)) {
				const responseData = {
					name: name,
					email: email,
					message: message,
				};

				axios.post(contactsData.sheetAPI, responseData).then((res) => {
					console.log('success');
					setSuccess(true);
					setErrMsg('');

					setName('');
					setEmail('');
					setMessage('');
					setOpen(false);
				});
			} else {
				setErrMsg('Invalid email');
				setOpen(true);
			}
		} else {
			setErrMsg('Enter all the fields');
			setOpen(true);
		}
	};

	return (
		<div className='contacts' id='contacts' style={{ backgroundColor: theme.secondary }}>
			<div className='contacts--container'>
				<h1 style={{ color: theme.primary }}>Contacts</h1>
				<div className='contacts-details'>
					<a href={`mailto:${contactsData.email}`} className='personal-details'>
						<DetailsIcon themeColors={theme}>
							<FiAtSign />
						</DetailsIcon>
						<p style={{ color: theme.tertiary }}>{contactsData.email}</p>
					</a>
					<a href={`tel:${contactsData.phone}`} className='personal-details'>
						<DetailsIcon themeColors={theme}>
							<FiPhone />
						</DetailsIcon>
						<p style={{ color: theme.tertiary }}>{contactsData.phone}</p>
					</a>
					<div className='personal-details'>
						<DetailsIcon themeColors={theme}>
							<HiOutlineLocationMarker />
						</DetailsIcon>
						<p style={{ color: theme.tertiary }}>{contactsData.address}</p>
					</div>

					<div className='socialmedia-icons'>
						{socialsData.twitter && (
							<SocialIcon href={socialsData.twitter} target='_blank' rel='noreferrer' themeColors={theme}>
								<FaTwitter aria-label='Twitter' />
							</SocialIcon>
						)}
						{socialsData.github && (
							<SocialIcon href={socialsData.github} target='_blank' rel='noreferrer' themeColors={theme}>
								<FaGithub aria-label='GitHub' />
							</SocialIcon>
						)}
						{socialsData.linkedIn && (
							<SocialIcon href={socialsData.linkedIn} target='_blank' rel='noreferrer' themeColors={theme}>
								<FaLinkedinIn aria-label='LinkedIn' />
							</SocialIcon>
						)}
						{socialsData.instagram && (
							<SocialIcon href={socialsData.instagram} target='_blank' rel='noreferrer' themeColors={theme}>
								<FaInstagram aria-label='Instagram' />
							</SocialIcon>
						)}
						{socialsData.medium && (
							<SocialIcon href={socialsData.medium} target='_blank' rel='noreferrer' themeColors={theme}>
								<FaMediumM aria-label='Medium' />
							</SocialIcon>
						)}
						{socialsData.blogger && (
							<SocialIcon href={socialsData.blogger} target='_blank' rel='noreferrer' themeColors={theme}>
								<FaBloggerB aria-label='Blogger' />
							</SocialIcon>
						)}
						{socialsData.youtube && (
							<SocialIcon href={socialsData.youtube} target='_blank' rel='noreferrer' themeColors={theme}>
								<FaYoutube aria-label='YouTube' />
							</SocialIcon>
						)}
						{socialsData.reddit && (
							<SocialIcon href={socialsData.reddit} target='_blank' rel='noreferrer' themeColors={theme}>
								<FaRedditAlien aria-label='Reddit' />
							</SocialIcon>
						)}
						{socialsData.stackOverflow && (
							<SocialIcon href={socialsData.stackOverflow} target='_blank' rel='noreferrer' themeColors={theme}>
								<FaStackOverflow aria-label='Stack Overflow' />
							</SocialIcon>
						)}
						{socialsData.codepen && (
							<SocialIcon href={socialsData.codepen} target='_blank' rel='noreferrer' themeColors={theme}>
								<FaCodepen aria-label='CodePen' />
							</SocialIcon>
						)}
						{socialsData.gitlab && (
							<SocialIcon href={socialsData.gitlab} target='_blank' rel='noreferrer' themeColors={theme}>
								<FaGitlab aria-label='GitLab' />
							</SocialIcon>
						)}
					</div>
				</div>
			</div>
			<img src={theme.contactsimg} alt='contacts' className='contacts--img' />
		</div>
	);
}

export default Contacts;
