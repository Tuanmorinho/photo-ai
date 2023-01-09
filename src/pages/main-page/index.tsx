import { Box, Button, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { ArtPreview, ArtStyle, Prompt } from "components/pages";
import { IPromptStore } from "models";
import { useState } from "react";
import { useSelector } from "react-redux";
import { generateImage } from "store-redux";
import { RootState, useAppDispatch } from "store-redux/store";

export default function MainPage() {    

    const prompt: IPromptStore = useSelector((state: RootState) => state.prompt);
    const dispatch = useAppDispatch();
    const [disabled, setDisabled] = useState<boolean>(false);

    const handleCreateArt = () => {
        if (prompt.prompt.length !== 0 && prompt.filter.length !== 0) {
            setDisabled(true);
            dispatch(generateImage(prompt));
        };

    }

    return (
        <Box component='section' sx={{ width: '100%', height: '100%', py: '30px' }}>
            <Grid container direction="row" justifyContent="center" alignItems="stretch">
                <Grid item xs={12} lg={6} sx={{ pr: { lg: '15px' } }}>
                    <Stack direction='column' alignItems='stretch' justifyContent='flex-start' height='782px' borderRadius='12px' sx={{ overflow: 'hidden', pr: '3px', '&:hover': { overflow: 'auto' } }}>
                        <Prompt />
                        <Box flexGrow='1' mt='32px'>
                            <ArtStyle />
			            </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} lg={6} sx={{ pl: { lg: '15px' }}}>
                    <ArtPreview />
                </Grid>
                <Grid item xs={12} lg={6} sx={{ pr: { lg: '15px' } }}>
                    <Stack width='100%' mt='20px' alignItems='center' justifyContent='center'>
                        <Button variant="contained" disabled={prompt.prompt.length === 0 || prompt.filter.length === 0 || disabled} sx={{ fontSize: '16px', width: '250px', height: '50px', backgroundColor: 'primary.main' }} onClick={handleCreateArt}>Create</Button>
                    </Stack>
                </Grid>
                <Grid item xs={12} lg={6} sx={{ pl: { lg: '15px' }}}></Grid>
            </Grid>
        </Box>
    );
}