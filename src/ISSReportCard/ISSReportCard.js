import React from 'react';
import './ISSReportCard.css';

const ISSReportCard = ({ issReports, mode }) => {
  let singleISSReportCard = issReports.map((report) => {
    let time = report.publishedAt.slice(0, 7)
    return (
      <div className={`report-card ${mode}`} id={report.id} key={report.id}>
        <img className='iss-img' src={report.image} alt={report.title} />
        <p className='iss-publish-time'>{time}</p>
        <p className='iss-summary'>{report.summary}</p>
        <a className='iss-read-more' href={report.url}>Read More</a>
      </div>
    )
  });

  return (
    <div className='report-card-grid'>
      {singleISSReportCard}
    </div>
  )
};

export default ISSReportCard;
