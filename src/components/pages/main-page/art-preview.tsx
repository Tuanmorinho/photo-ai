import { Box, Typography, Stack, Grid } from "@mui/material";
import { NoImageIcon } from "asset/icon";

export function ArtPreview() {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack direction='column' alignItems='stretch' justifyContent='flex-start'>
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: '30px' }}>Art Preview</Typography>
                </Box>
                <Box sx={{ width: '100%', mt: '16px', backgroundColor: 'primary.light', borderRadius: '12px' }}>
                    <Grid container justifyContent='center' alignItems='stretch' sx={{ p: '8px' }}>
                        {[0, 1, 2, 3].map(v => (
                            <Grid key={v} item xs={12} lg={6} justifyContent='center' alignItems='center' sx={{ width: '100%', height: '100%', p: '8px'}}>
                                <Box sx={{ width: '243px', height: '344px', background: 'linear-gradient(162.93deg, #4B9CFC -16.46%, #EF90FF 124.24%)', borderRadius: '8px' }}>
                                    <Stack sx={{ width: '100%', height: '100%' }} alignItems='center' justifyContent='center'>
                                        <NoImageIcon />
                                    </Stack>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Stack>
        </Box>
    );
}