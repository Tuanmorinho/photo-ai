import { Box, Button, Paper, Stack, useTheme } from '@mui/material';
import { DarkModeIcon, LightModeIcon, Logo, TitleLogo } from 'asset/media';

export function Header() {

    const theme = useTheme();

    return (
        <Paper
            sx={{ position: 'fixed', right: 0, left: 0 }}
            elevation={2}
        >
            <Box sx={{ height: '80px' }}>
                <Box sx={{ width: '100%', height: '100%', paddingLeft: '50px', paddingRight: '50px' }}>
                    <Stack direction='row' justifyContent='space-between' alignItems='center' height='100%'>
                        <Box>
                            <Stack direction='row' justifyContent='flex-start' alignItems='center'>
                                <Box sx={{ width: '26px', height: '48px' }}>
                                    <Logo />
                                </Box>
                                <Box sx={{ marginLeft: '10px', alignItems: 'center', display: 'flex', alignSelf: 'center' }}>
                                    <TitleLogo />
                                </Box>
                            </Stack>
                        </Box>
                        <Box>
                            <Stack direction='row' justifyContent='flex-end' alignItems='center'>
                                <Box sx={{ width: '42px', height: '42px', marginRight: '17px', cursor: 'pointer' }}>
                                    {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon /> }
                                </Box>
                                <Button variant="contained" sx={{ fontSize: '16px', width: '150px', height: '50px', backgroundColor: 'primary.main' }}>Log in</Button>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Paper>
    );
}