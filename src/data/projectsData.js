import one from '../assets/svg/projects/one.svg';
import two from '../assets/svg/projects/two.svg';
import six from '../assets/svg/projects/six.svg';
import five from '../assets/svg/projects/five.svg';

export const projectsData = [
	{
		id: 1,
		projectName: 'eBuy - Local eCommerce (aka e-Cycle)',
		projectDesc: 'eBuy is a versatile and dynamic e-commerce platform that caters to shoppers looking for an extensive range of both new and used items. ',
		tags: ['React Native', 'Laravel'],
		code: 'https://github.com/Koykoy200078/ebuy-web',
		demo: 'https://github.com/Koykoy200078/ebuy-web',
		image: one,
		category: 'mobile', // mobile, web, software
		featured: true,
		techStack: ['React Native', 'Laravel', 'MySQL', 'REST API', 'UI/UX Prototyping', 'Mobile App Development'],
		highlights: ['New & used items marketplace', 'Real-time chat system', 'Secure payment integration'],
	},
	{
		id: 2,
		projectName: 'E-Transpo',
		projectDesc: 'E-Transpo is a groundbreaking public transportation payment system designed to simplify and enhance your daily commute between, Municipality of Dauin and Dumaguete City, and vice versa.',
		tags: ['Android Studio', 'Firebase'],
		code: 'https://github.com/Koykoy200078/E-Transpo',
		demo: 'https://github.com/Koykoy200078/E-Transpo',
		image: two,
		category: 'mobile',
		featured: true,
		techStack: ['Android', 'Kotlin', 'Firebase', 'Google Maps API', 'UI/UX Prototyping', 'Mobile App Development'],
		highlights: ['QR code ticketing system', 'Real-time bus tracking', 'Dauin-Dumaguete route coverage'],
	},
	{
		id: 3,
		projectName: 'E-Collect',
		projectDesc:
			'E-Collect mobile application for Sacred Heart Credit Development, a financial institution focused on credit services. The app empowers field agents to visit clients and record collections for Interest, Principal, and Penalty payments. My solution streamlined manual tracking into a digital workflow, improving accuracy, accountability, and real-time reporting. The project significantly reduced paperwork and enhanced operational efficiency for on-site collections.',
		tags: ['React Native', 'Firebase'],
		code: 'https://github.com/Koykoy200078/',
		demo: 'https://github.com/Koykoy200078/',
		image: two,
		category: 'mobile',
		featured: true,
		techStack: ['Android', 'Kotlin', 'REST API', 'UI/UX Prototyping', 'Mobile App Development'],
		highlights: ['Offline-first with Realm DB', 'Collection tracking (Interest/Principal/Penalty)', 'Field agent workflow optimization'],
	},
	{
		id: 4,
		projectName: 'eLivestock',
		projectDesc: 'eLivestock is a digital platform that enables farmers to post their livestock products for sale within their local community.',
		tags: ['React Native', 'Laravel', 'MongoDB', 'Firebase'],
		code: 'https://github.com/Koykoy200078/eLivestock',
		demo: '',
		image: five,
		category: 'mobile',
		featured: false,
		techStack: ['React Native', 'Laravel', 'MongoDB', 'Firebase', 'Node.js'],
		highlights: ['Farmer-to-buyer marketplace', 'Livestock product listings', 'Community-based selling'],
	},
	{
		id: 5,
		projectName: 'Weather App',
		projectDesc: 'Weather forecast systems and applications predict weather conditions based on multiple parameters.',
		tags: ['Django', 'CSS', 'Material Ui'],
		code: 'https://github.com/Koykoy200078/',
		demo: 'https://github.com/Koykoy200078/',
		image: six,
		category: 'web',
		featured: false,
		techStack: ['Django', 'Python', 'Material UI', 'Weather API'],
		highlights: ['Multi-parameter forecasting', '7-day weather predictions', 'Location-based conditions'],
	},
];

// Project categories
export const projectCategories = [
	{ value: 'all', label: 'All Projects', icon: '🚀' },
	{ value: 'mobile', label: 'Mobile Apps', icon: '📱' },
	{ value: 'web', label: 'Web Applications', icon: '🌐' },
	{ value: 'software', label: 'Software', icon: '💻' },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
