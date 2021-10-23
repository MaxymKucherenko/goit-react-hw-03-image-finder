import axios from 'axios'

const instance = axios.create({
  baseURL: "https://pixabay.com/api",
});
const IMAGES_PER_PAGE = 12;
const PIXABAY_KEY = "22740436-05bbd607dbbc32bdc3528cde5";

export const search = (q, page) => {
  return instance.get(
    `?q=${q}&page=${page}&key=${PIXABAY_KEY}&image_type=photo&orientation=horizontal&per_page=${IMAGES_PER_PAGE}`
  );
};