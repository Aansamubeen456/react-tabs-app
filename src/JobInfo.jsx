import React from 'react'
import Duties from './Duties'

const JobInfo = ({ jobs, currentItem }) => {
  const { dates, title, company, duties } = jobs[currentItem]

  return (
    <article className="jobs-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  )
}

export default JobInfo
