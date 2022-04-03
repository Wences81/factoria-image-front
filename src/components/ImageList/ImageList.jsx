import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { imagesOperations, imagesSelectors } from '../../redux/images/index';

import PropTypes from 'prop-types';
import { List, Item, Button, Name } from './ImageList.styled';

export default function ImageList() {
  const dispatch = useDispatch();

  const images = useSelector(imagesSelectors.getVisibleImages);
  useEffect(() => {
    dispatch(imagesOperations.fetchImages());
  }, [dispatch]);

  return (
    <List>
      {images.map(({ _id, name, image }) => (
        <Item key={_id}>
          <Name>
            {name} : {image}{' '}
          </Name>

          <Button
            type="button"
            onClick={() => dispatch(imagesOperations.deleteImage(_id))}
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
