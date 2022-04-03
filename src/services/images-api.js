import axios from 'axios';

axios.defaults.baseURL = 'https://factoria-image-back.herokuapp.com';

export async function fetchImages() {
  const { data } = await axios.get('/api/images');
  return data;
}

export async function addImage(image) {
  const { data } = await axios.post('/api/images', image);
  return data;
}

export async function deleteImage(id) {
  await axios.delete(`/api/images/${id}`);
  return id;
}
