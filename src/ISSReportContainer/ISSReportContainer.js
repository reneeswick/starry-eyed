import React, { useEffect, useState } from 'react';
import ISSReportCard from '../ISSReportCard/ISSReportCard';
import { cleanISSReportsData } from '../utilities';
import './ISSReportContainer.css';

const ISSReportContainer = () => {
  const [issReports, setISSReports] = useState([])

  useEffect(() => {
    setISSReports(cleanISSReportsData())
  })

  return (
    <div className='report-card-container'>
      <h2>ISSReportContainer</h2>
      <ISSReportCard issReports={issReports}/>
    </div>
  )
}

export default ISSReportContainer;
