import { Box, Typography, Stack, Grid } from "@mui/material";
import { PreviewImage } from "components/common";

export function ArtPreview() {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack direction='column' alignItems='stretch' justifyContent='flex-start'>
                <Box sx={{ width: '100%', textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: '30px' }}>Art Preview</Typography>
                </Box>
                <Box sx={{ width: '100%', mt: '16px', backgroundColor: 'primary.light' }}>
                    <Grid container justifyContent='center' alignItems='stretch' sx={{}}>
                        {[0, 1, 2, 3].map((v, i) => (
                            <Grid key={i} item xs={12} lg={6} justifyContent='center' alignItems='center' sx={{ width: '100%', height: '100%', py: '8px'}}>
                                <PreviewImage />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Stack>
        </Box>
    );
}