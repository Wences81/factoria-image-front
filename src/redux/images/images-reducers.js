import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addImage, deleteImage, fetchImages } from './images-operations';
import { imagesActions } from '.';

const items = createReducer([], {
  [fetchImages.fulfilled]: (_, state, { payload }) => payload,
  [addImage.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteImage.fulfilled]: (state, { payload }) =>
    state.filter(image => image.id !== payload),
});

const isLoading = createReducer(false, {
  [fetchImages.pending]: () => true,
  [fetchImages.fulfilled]: () => false,
  [fetchImages.rejected]: () => false,
  [addImage.pending]: () => true,
  [addImage.fulfilled]: () => false,
  [addImage.rejected]: () => false,
  [deleteImage.pending]: () => true,
  [deleteImage.fulfilled]: () => false,
  [deleteImage.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchImages.rejected]: (_state, { payload }) => payload,
  [fetchImages.pending]: null,
  [addImage.rejected]: (_state, { payload }) => payload,
  [addImage.pending]: null,
  [deleteImage.rejected]: (_state, { payload }) => payload,
  [deleteImage.pending]: null,
});

const filter = createReducer('', {
  [imagesActions.changeFilter]: (_state, { payload }) => payload,
});

export default combineReducers({
  items,
  isLoading,
  error,
  filter,
});
