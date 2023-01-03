import { Container, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../common';

export function EmptyLayout() {

	return (
		<Stack minHeight='100vh'>
			<Container>
                <Outlet />
            </Container>
		</Stack>
	);
}