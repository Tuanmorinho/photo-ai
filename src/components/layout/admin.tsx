import { Container, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../common';

export function AdminLayout() {

	return (
		<Stack minHeight='100vh'>
			<Header />
			<Container>
                <Outlet />
            </Container>
		</Stack>
	);
}