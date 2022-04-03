import axios from 'axios';

axios.defaults.baseURL = 'https://factoria-image-back.herokuapp.com';

export async function fetchImages() {
  const { data } = await axios.get('/images');
  return data;
}

export async function addImage(image) {
  const { data } = await axios.post('/images', image);
  return data;
}

export async function deleteImage(id) {
  await axios.delete(`/images/${id}`);
  return id;
}
