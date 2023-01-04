import { PaletteMode } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IThemeStore } from 'models';

const initialState: IThemeStore = {
	mode: 'light'
};

const colorModeSlice = createSlice({
	name: 'colorModeSlice',
	initialState,
	reducers: {
		toggleColorMode: (state, action: PayloadAction<PaletteMode>) => {
		    state.mode = action.payload
		}
	},
});

export const { toggleColorMode } = colorModeSlice.actions

export default colorModeSlice.reducer;
