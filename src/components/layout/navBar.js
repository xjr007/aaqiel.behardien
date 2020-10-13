import React from 'react';
import { Link } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	IconButton,
	Container,
	List,
	ListItem,
	ListItemText,
} from '@material-ui/core';
import { Home } from '@material-ui/icons';
import NavLinks from '../../assets/msc/navLinks';
import NavSideDrawer from './navSideDrawer';

const navBar = () => {
	return (
		<AppBar position='fixed' className='nav_bar'>
			<Toolbar>
				<Container className='container_wrap' maxWidth='xl'>
					<IconButton edge='start' color='inherit' aria-label='home'>
						<Home fontSize='large' />
					</IconButton>
					<List component='nav' className='container_wrap'>
						{NavLinks.map(({ title, path }) => (
							<Link href={path} key={title} className='link_txt'>
								<ListItem button>
									<ListItemText primary={title} />
								</ListItem>
							</Link>
						))}
					</List>
					<NavSideDrawer NavLinks={NavLinks} />
				</Container>
			</Toolbar>
		</AppBar>
	);
};

export default navBar;
