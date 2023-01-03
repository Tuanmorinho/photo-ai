import { Paper } from '@mui/material';

export function Header() {
    return (
        <Paper
            sx={{ position: 'fixed', right: 0, left: 0 }}
            elevation={2}
        >
            This is Header
        </Paper>
    );
}