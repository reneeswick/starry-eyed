import { getBlogs } from './apiCalls';

export let blogsData = [];

export const cleanBlogsData = () => {
  getBlogs()
    .then(data => {
      blogsData = (
        data.map((blog) => {
          return {
            id:blog.id,
            title: blog.title,
            image: blog.imageUrl,
            newsSite: blog.newsSite,
            publishedAt: blog.publishedAt,
            summary: blog.summary,
            url: blog.url}
        })
      )
    })
};
