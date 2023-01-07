import { Box, Button, PaletteMode, Stack, Typography } from "@mui/material";
import { IPromptStore } from "models";
import { useDispatch, useSelector } from "react-redux";
import { setPrompt } from "store-redux";
import { RootState } from "store-redux/store";

const ExamplePrompt: string[] = [ 'Anime', 'Black and White scenery', 'Winter snow', 'Vibrantly colorful' ]

export function Prompt() {

    const colorMode: PaletteMode = useSelector((state: RootState) => state.colorMode.mode);
    const prompt: IPromptStore = useSelector((state: RootState) => state.prompt);
    const dispatch = useDispatch();

    const handleChooseExample = (value: string) => {
        if (value) dispatch(setPrompt(value))
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stack direction='column' alignItems='stretch' justifyContent='flex-end'>
                <Stack direction='row' alignItems='end' justifyContent='space-between'>
                    <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: '30px' }}>Enter Prompt</Typography>
                    <Typography sx={{ fontWeight: 600, lineHeight: '22px', fontSize: '14px', color: '#A6A6B0' }}>{prompt.prompt.length}/200</Typography>
                </Stack>
                <Box sx={{ mt: '16px' }}>
                    <textarea style={{ width: '100%', border: 'none', backgroundColor: colorMode === 'dark' ? '#334355' : '#F5F5FA', color: colorMode === 'dark' ? '#fff' : '#38383D', borderRadius: '8px', resize: 'none', fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '400', padding: '8px 12px', overflow: 'auto', outline: 'none' }} onChange={($event) => dispatch(setPrompt($event.target.value))} value={prompt.prompt} rows={7} placeholder='Type anything'></textarea>
                </Box>
                <Box sx={{ mt: '16px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', overflow: 'hidden', pb: '3px', '&:hover': { overflow: 'auto' } }}>
                    {
                        ExamplePrompt.map((v, i) => (
                            <Box mr={'8px'} key={i}>
                                <Button sx={{ backgroundColor: 'primary.light', '&:hover': { backgroundColor: 'primary.main', color: 'white' }, px: 2, whiteSpace: 'nowrap', minWidth: 'max-content' }} onClick={() => handleChooseExample(v)}>
                                    {v}
                                </Button>
                            </Box>
                        ))
                    }
                </Box>
            </Stack>
        </Box>
    );
}