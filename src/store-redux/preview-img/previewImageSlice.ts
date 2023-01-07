import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { imageApi } from 'api';
import { IPreviewImageStore, IPromptStore } from 'models';

const initialState: IPreviewImageStore = {
	images: [],
	loading: false,
	error: ''
};

export const generateImage = createAsyncThunk('previewImg', async (params: IPromptStore) => {
	const images = await imageApi.getImages(params);
	return images;
})

const previewImageSlice = createSlice({
	name: 'previewImageSlice',
	initialState,
	reducers: {
		setImages: (state, action: PayloadAction<string[]>) => {
		    state.images = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(generateImage.pending, (state) => {
			state.loading = true;
		})
		builder.addCase(generateImage.rejected, (state) => {
			state.error = 'We have an error';
			state.loading = false;
		})
		builder.addCase(generateImage.fulfilled, (state, action: any) => {
			state.images = action.payload;
			state.loading = false;
		})
	}
});

export const { setImages } = previewImageSlice.actions

export default previewImageSlice.reducer;
