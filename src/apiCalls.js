export const getBlogs = () => {
  return fetch('https://api.spaceflightnewsapi.net/v3/blogs')
    .then(response => response.json())
    .catch(err => console.log(err))
};
