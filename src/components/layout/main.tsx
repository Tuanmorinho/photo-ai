import { Container, Stack, Box, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { RootState } from 'store-redux/store';
import { Header } from '../common';

export function MainLayout() {

	const isLoading: boolean = useSelector((state: RootState) => state.previewImages.loading);
	
	return (
		<Stack minHeight='100vh' sx={{ position: 'relative' }}>
			<Header />
			<Container sx={{ pt: '80px' }}>
				<Outlet />
			</Container>
			{isLoading && (
				<Box sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 99999, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
					<Stack width='100%' height='100%' direction='column' alignItems='center' justifyContent='center'>
						<CircularProgress />
            		</Stack>
				</Box>
			)}
		</Stack>
	);
}