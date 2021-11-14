import React, { useEffect, useState } from 'react';
import ISSReportCard from '../ISSReportCard/ISSReportCard';
import { cleanISSReportsData } from '../utilities';
import { getISSReports } from '../apiCalls';
import './ISSReportContainer.css';

const ISSReportContainer = ({mode}) => {
  const [issReports, setISSReports] = useState([])

  useEffect(() => {
    let reportsData = []
    getISSReports()
      .then(data => {
        reportsData = cleanISSReportsData(data)
        setISSReports(reportsData)
      })
  }, [issReports]);

  return (
    <div className='report-card-container'>
      <h2>ISS Daily Summary Report (NASA) </h2>
      <ISSReportCard issReports={issReports} mode={mode}/>
    </div>
  )
};

export default ISSReportContainer;
