import React, { useEffect, useState } from 'react';
import ISSReportCard from '../ISSReportCard/ISSReportCard';
import { cleanISSReportsData } from '../utilities';

const ISSReportContainer = () => {
  const [issReports, setISSReports] = useState([])

  useEffect(() => {
    setISSReports(cleanISSReportsData())
  })

  return (
    <div>
      <h2>ISSReportContainer</h2>
      <ISSReportCard />
    </div>
  )
}

export default ISSReportContainer;
