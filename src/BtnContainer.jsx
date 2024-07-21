import React from 'react'

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            type="button"
            key={job.id}
            className={currentItem === index ? 'job-btn active-btn' : 'job-btn'}
            onClick={() => setCurrentItem(index)}
          >
            {job.company}
          </button>
        )
      })}
    </div>
  )
}

export default BtnContainer
