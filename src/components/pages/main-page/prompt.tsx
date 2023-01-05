import { Box, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export function Prompt() {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <Box sx={{ width: '100%' }}>
            <Stack direction='column' alignItems='stretch' justifyContent='center'>
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: '30px' }}>Enter Prompt</Typography>
                </Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("firstName", { required: true, maxLength: 20 })} />
                    <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                    <input type="number" {...register("age", { min: 18, max: 99 })} />
                    <input type="submit" />
                </form>
            </Stack>
        </Box>
    );
}