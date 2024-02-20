import wrapPromise from "../utils/wrapper";

const fetchPost = (url) => {
  const response = fetch(url).then((res) => res.json());
  return wrapPromise(response);
};

export default fetchPost;
