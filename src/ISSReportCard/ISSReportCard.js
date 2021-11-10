import React from 'react';

const ISSReportCard = ({ issReports }) => {
  let singleISSReportCard = issReports.map((report) => {
    return (
      <div id={report.id} key={report.id}>
        <p>{report.title}</p>
        <p>{report.publishedAt}</p>
        {/*<img src={report.image} alt={report.title} />*/}
        <p>{report.newsSite}</p>
        <p>{report.summary}</p>
        <a href={report.url}>Read More</a>
      </div>
    )
  })

  return (
    <div>
      {singleISSReportCard}
    </div>
  )
}

export default ISSReportCard;
