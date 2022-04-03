import { createAsyncThunk } from '@reduxjs/toolkit';
import * as imagesApi from '../../services/images-api';

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async (_, { rejectWithValue }) => {
    try {
      const images = await imagesApi.fetchImages();
      return images;
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
  async (id, { rejectWithValue }) => {
    try {
      await imagesApi.deleteImage(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
