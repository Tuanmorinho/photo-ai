import { Container, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../common';

export function MainLayout() {
	return (
		<Stack minHeight='100vh'>
			<Header />
			<Container sx={{ pt: '80px' }}>
				<Outlet />
			</Container>
		</Stack>
	);
}