export const getBlogs = () => {
  return fetch('https://api.spaceflightnewsapi.net/v3/blogs')
    .then(response => response.json())
    .catch(err => console.log(err))
};

export const getISSReports = () => {
  return fetch('https://api.spaceflightnewsapi.net/v3/reports')
    .then(response => response.json())
    // .then(data => console.log(data))
    .catch(err => console.log(err))
};
