import ImageList from '../ImageList/ImageList';
import ImageForm from '../ImageForm/ImageForm';
import { Title } from './App.styled';

export default function App() {
  return (
    <div>
      <Title>Image List</Title>
      <ImageForm />
      <ImageList />
    </div>
  );
}
