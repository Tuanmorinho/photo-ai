import { PaletteMode } from '@mui/material';

export interface IThemeStore {
    mode: PaletteMode
}

export interface IPromptStore {
    prompt: string;
    filter: string;
}

export interface IPreviewImageStore {
    images: string[];
    loading: boolean;
    error?: string;
}