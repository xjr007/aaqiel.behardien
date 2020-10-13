import React from 'react';
import { Link } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Container,
} from '@material-ui/core';
import { Home } from '@material-ui/icons';
import NavLinks from '../../assets/msc/navLinks';

const navBar = () => {
	return (
		<AppBar position='fixed' className='nav_bar'>
			<Toolbar>
				<Container className='container_wrap' maxWidth='xl'>
					<IconButton edge='start' color='inherit' aria-label='home'>
						<Home fontSize='large' />
					</IconButton>
					<List
						className='container_wrap'
						component='nav'
						aria-labelledby='main navigation'
					>
						{NavLinks.map(({ title, path }) => (
							<Link href={path} key={title} id='link_txt'>
								<ListItem button>
									<ListItemText primary={title} />
								</ListItem>
							</Link>
						))}
					</List>
				</Container>
			</Toolbar>
		</AppBar>
	);
};

export default navBar;
