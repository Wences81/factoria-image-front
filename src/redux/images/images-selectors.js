import { createSelector } from 'reselect';

export const getImages = state => state.images.items;
export const getFilter = state => state.images.filter;
export const getLoading = state => state.images.isLoading;
export const getError = state => state.images.error;

export const getVisibleImages = createSelector(
  [getImages, getFilter],
  (images, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return images.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
