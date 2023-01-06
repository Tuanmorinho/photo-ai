import { Box, Typography, Stack, Grid } from "@mui/material";
import { ArtStyleImage } from "asset";

const StyledGridImage = styled(Button)`
  background-color: grey;
  color: #fff;
  padding: 6px 12px;
  &:hover {
    background-color: #a9a9a9;
  }
  &:focus {
    background-color: green;
  }
`;

export function ArtStyle() {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack direction='column' alignItems='stretch' justifyContent='flex-start'>
                <Box sx={{ width: '100%', textAlign: 'left' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: '30px' }}>Art Style</Typography>
                </Box>
                <Box sx={{ width: '100%', mt: '16px', backgroundColor: 'primary.light', borderRadius: '12px' }}>
                    <Grid container justifyContent='flex-start' alignItems='stretch' sx={{ p: '8px' }}>
                        {ArtStyleImage.map((item, i) => (
                            <Grid key={i} item xs={6} lg={3} justifyContent='center' alignItems='center' sx={{ width: '100%', height: '100%', p: '8px', cursor: 'pointer' }}>
                                <Box sx={{ backgroundImage: `url(${item.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: { xs: '100%', lg: '114px' }, height: { lg: '114px' }, paddingBottom: { xs: '100%', lg: '0' }, borderRadius: '8px' }}></Box>
                                <Typography sx={{ fontWeight: 700, lineHeight: '22px', textAlign: 'center', fontSize: '14px', mt: '8px' }}>{item.title}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Stack>
        </Box>
    );
}