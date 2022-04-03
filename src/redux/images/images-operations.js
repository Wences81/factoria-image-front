import { createAsyncThunk } from '@reduxjs/toolkit';
import * as imagesApi from '../../services/images-api';

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async (_, { rejectWithValue }) => {
    try {
      const images = await imagesApi.fetchImages();
      return images.data.result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addImage = createAsyncThunk(
  'images/addImage',
  async (image, { rejectWithValue }) => {
    try {
      return await imagesApi.addImage(image);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteImage = createAsyncThunk(
  'images/deleteImage',
  async (_id, { rejectWithValue }) => {
    try {
      await imagesApi.deleteImage(_id);
      return _id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
