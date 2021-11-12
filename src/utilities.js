let blogsData = [];
let issReportsData = [];

export const cleanBlogsData = (data) => {
  return data.map((blog) => {
          return {
            id:blog.id,
            title: blog.title,
            image: blog.imageUrl,
            newsSite: blog.newsSite,
            publishedAt: blog.publishedAt,
            summary: blog.summary,
            url: blog.url
          }
        }
      )
    }

export const cleanISSReportsData = (data) => {
  return data.map((report) => {
          return {
            id: report.id,
            image: report.imageUrl,
            newsSite: report.newsSite,
            publishedAt: report.publishedAt,
            summary: report.summary,
            title: report.title,
            url: report.url
          }
        }
      )
}
