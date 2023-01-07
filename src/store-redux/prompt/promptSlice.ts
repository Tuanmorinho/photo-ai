import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPromptStore } from 'models';

const initialState: IPromptStore = {
	prompt: '',
    filter: ''
};

const promptSlice = createSlice({
	name: 'v',
	initialState,
	reducers: {
		setPrompt: (state, action: PayloadAction<string>) => {
		    state.prompt = action.payload;
		},
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
		}
	},
});

export const { setPrompt, setFilter } = promptSlice.actions

export default promptSlice.reducer;