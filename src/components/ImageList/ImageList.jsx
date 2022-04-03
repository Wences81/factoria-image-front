import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { imagesOperations, imagesSelectors } from '../../redux/images/index';
import { Button, List, Column, Item } from './ImageList.styled';
import PropTypes from 'prop-types';

export default function ImageList() {
  const dispatch = useDispatch();

  const images = useSelector(imagesSelectors.getVisibleImages);
  useEffect(() => {
    dispatch(imagesOperations.fetchImages());
  }, [dispatch]);

  return (
    <List>
      {images.map(({ id, name, image }) => (
        <Item key={id}>
          <Column>{name}</Column>
          <Column>{image}</Column>

          <Button
            type="button"
            onClick={() => dispatch(imagesOperations.deleteImage(id))}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
}

ImageList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
};
