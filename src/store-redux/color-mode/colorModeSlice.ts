import { createTheme } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';
import { IThemeStore } from 'models';

const initialState: IThemeStore = {
	theme: 'light'
};

const colorModeSlice = createSlice({
	name: 'colorModeSlice',
	initialState,
	reducers: {
		// setScreens(state, action) {
		//     state.screens = action.payload
		// }
	},
});

// export const { setScreens } = colorModeSlice.actions

export default colorModeSlice.reducer;
