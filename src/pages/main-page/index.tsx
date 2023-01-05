import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { ArtPreview, ArtStyle, Prompt } from "components/pages";

export default function MainPage() {
    return (
        <Box component='section' sx={{ width: '100%', height: '100%', py: '30px' }}>
            <Grid container direction="row" justifyContent="center" alignItems="stretch">
                <Grid item xs={12} lg={6} sx={{ pr: '15px' }}>
                    <Stack direction='column' alignItems='stretch' justifyContent='flex-start'>
                        <Prompt />
                        <ArtStyle />
                    </Stack>
                </Grid>
                <Grid item xs={12} lg={6} sx={{ pl: '15px' }}>
                    <ArtPreview />
                </Grid>
            </Grid>
        </Box>
    );
}