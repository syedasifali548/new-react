import React from 'react'

const Practice = () => {
 const students = [];

  return (
    <>
    <p>{students.length === 0 && "Not Found"}</p>
    <p>Number of the Students: {students.length}</p>
    </>
  )
}

export default Practice