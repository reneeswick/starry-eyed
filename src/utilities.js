import { getBlogs, getISSReports } from './apiCalls';

let blogsData = [];
let issReportsData = [];

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
    return blogsData;
};

export const cleanISSReportsData = () => {
  getISSReports()
    .then(data => {
      issReportsData = (
        data.map((report) => {
          return {
            id: report.id,
            image: report.imageUrl,
            newsSite: report.newsSite,
            publishedAt: report.publishedAt,
            summary: report.summary,
            title: report.title,
            url: report.url
          }
        })
      )
    })
    return issReportsData
}
