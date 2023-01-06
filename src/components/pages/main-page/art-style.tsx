import { Box, Grid, PaletteMode, Stack, Typography } from "@mui/material";
import { ArtStyleImage } from "asset";
import { useSelector } from "react-redux";
import { RootState } from "store-redux/store";

export function ArtStyle() {

    const colorMode: PaletteMode = useSelector((state: RootState) => state.colorMode.mode);

    const handleChooseStyle = (style: string) => {
        
    }

    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <Stack direction='column' alignItems='stretch' justifyContent='flex-start' height='100%'>
                <Box sx={{ width: '100%', textAlign: 'left' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: '30px' }}>Art Style</Typography>
                </Box>
                <Box sx={{ width: '100%', height: '100%', mt: '16px', backgroundColor: 'primary.light', borderRadius: '12px' }}>
                    <Grid container justifyContent='flex-start' alignItems='stretch' sx={{ p: '8px', overflowY: 'auto' }}>
                        {ArtStyleImage.map((item, i) => (
                            <Grid key={i} item xs={6} lg={3} justifyContent='center' alignItems='center' sx={{ width: '100%', height: '100%', p: '8px'}}>
                                <Box sx={{ backgroundImage: `url(${item.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: { xs: '100%', lg: '114px' }, height: { lg: '114px' }, paddingBottom: { xs: '100%', lg: '0' }, borderRadius: '8px', position: 'relative' }}>
                                    <Box sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, cursor: 'pointer', '&:hover': { backgroundColor: colorMode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)', borderRadius: '8px' } }} onClick={() => handleChooseStyle(item.value)}></Box>
                                </Box>
                                <Typography sx={{ fontWeight: 700, lineHeight: '22px', textAlign: 'center', fontSize: '14px', mt: '8px' }}>{item.title}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Stack>
        </Box>
    );
}