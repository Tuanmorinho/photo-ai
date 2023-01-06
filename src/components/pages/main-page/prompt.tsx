import { Box, Stack, Typography, Button, styled, ButtonProps, PaletteMode } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "store-redux/store";

const ExamplePrompt: string[] = [ 'Anime', 'Black and White scenery', 'Winter snow', 'Vibrantly colorful' ]

export function Prompt() {

    const colorMode: PaletteMode = useSelector((state: RootState) => state.colorMode.mode)

    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => console.log(data);

    const [prompt, setPrompt] = useState<string>('');

    const handleChooseExample = (value: string) => {
        if (value) setPrompt(value)
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stack direction='column' alignItems='stretch' justifyContent='flex-end'>
                <Stack direction='row' alignItems='end' justifyContent='space-between'>
                    <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: '30px' }}>Enter Prompt</Typography>
                    <Typography sx={{ fontWeight: 600, lineHeight: '22px', fontSize: '14px', color: '#A6A6B0' }}>{prompt.length}/200</Typography>
                </Stack>
                <Box sx={{ mt: '16px' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea {...register("prompt", { required: true, maxLength: 200 })} value={prompt}></textarea>
                        <button type='submit'>Submit</button>
                    </form>
                </Box>
                <Box sx={{ mt: '16px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', overflow: 'hidden', '&:hover': { overflow: 'auto', pb: '3px' } }}>
                    {
                        ExamplePrompt.map((v, i) => (
                            <Box mr={'8px'}>
                                <Button key={i} sx={{ backgroundColor: 'primary.light', '&:hover': { backgroundColor: 'primary.main', color: 'white' }, px: 2, whiteSpace: 'nowrap', minWidth: 'max-content' }} onClick={() => handleChooseExample(v)}>
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