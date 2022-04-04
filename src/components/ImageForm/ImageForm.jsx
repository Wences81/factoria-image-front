import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { imagesOperations } from '../../redux/images/index';
import { Form, Label, Input, Button } from './ImageForm.styled';

export default function ImageForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleChange = e => {
    const { name, value = '' } = e.target;
    name === 'name' ? setName(value) : setImage(value);
  };

  const resetState = () => {
    setName('');
    setImage('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(imagesOperations.addImage({ name, image }));
    resetState();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Image Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title=""
          required
          value={name}
          onChange={handleChange}
        />
      </Label>

      <Label>
        Image Path
        <Input
          type=""
          name="Image"
          pattern=""
          title=""
          required
          value={image}
          onChange={handleChange}
        />
      </Label>

      <Button
        type="submit"
        onClick={() => dispatch(imagesOperations.addImage({ name, image }))}
      >
        Add to image
      </Button>
    </Form>
  );
}
