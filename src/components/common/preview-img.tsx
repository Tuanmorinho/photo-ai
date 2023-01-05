import { Box, Stack } from "@mui/material";
import { NoImageIcon } from "asset/media";

export function PreviewImage() {
    return (
        <Box sx={{ width: '243px', height: '344px', background: 'linear-gradient(162.93deg, #4B9CFC -16.46%, #EF90FF 124.24%)', borderRadius: '8px' }}>
            <Stack sx={{ width: '100%', height: '100%' }} alignItems='center' justifyContent='center'>
                <NoImageIcon />
            </Stack>
        </Box>
    );
}