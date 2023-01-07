import { Box, Button, PaletteMode, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store-redux/store";

export default function PageNotFound() {

    const colorMode: PaletteMode = useSelector((state: RootState) => state.colorMode.mode);
    const navigate = useNavigate();

    return (
        <Box width='100%' height='100vh' sx={{ backgroundColor: 'background.default' }}>
            <Stack width='100%' height='100%' direction='column' alignItems='center' justifyContent='center'>
                <Stack width='100%' direction='row' alignItems='center' justifyContent='center'>
                    <Box borderRight={ colorMode === 'dark' ? '2px solid #fff' : '2px solid #38383D' } pr={6}>
                        <Typography variant="h2" sx={{ fontWeight: 500 }}>404</Typography>
                    </Box>
                    <Box pl={6}>
                        <Typography variant="h5" sx={{ fontWeight: 400 }}>This page could not be found.</Typography>
                    </Box>
                </Stack>
                <Box mt={10}>
                    <Button variant='text' onClick={() => navigate('/')}>Back to Home</Button>
                </Box>
            </Stack>
        </Box>
    );
}