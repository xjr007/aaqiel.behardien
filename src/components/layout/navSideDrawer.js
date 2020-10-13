import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	IconButton,
	List,
	ListItem,
	ListItemText,
	Drawer,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

export const NavSideDrawer = ({ NavLinks }) => {
	const [state, setState] = useState({ right: false });
	const toggleDrawer = (anchor, open) => e => {
		if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
			return;
		}
		setState({ [anchor]: open });
	};

	const sideDrawerList = anchor => (
		<div
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
			className='nav_side_drawer'
		>
			<List component='nav'>
				{NavLinks.map(({ title, path }) => (
					<Link href={path} key={title} className='link_txt'>
						<ListItem button>
							<ListItemText primary={title} />
						</ListItem>
					</Link>
				))}
			</List>
		</div>
	);
	return (
		<Fragment>
			<IconButton
				onClick={toggleDrawer('right', true)}
				edge='start'
				aria-label='menu'
			>
				<Menu fontSize='large' className='burger' />
			</IconButton>
			<Drawer
				anchor='right'
				open={state.right}
				onOpen={toggleDrawer('right', true)}
				onClose={toggleDrawer('right', false)}
			>
				{sideDrawerList('right')}
			</Drawer>
		</Fragment>
	);
};

export default NavSideDrawer;
