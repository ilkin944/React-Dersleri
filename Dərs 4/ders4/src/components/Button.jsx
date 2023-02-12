import React from 'react'

const Button = ({pageNotFound, setPageNotFound}) => {
  return (
    <button onClick={() => setPageNotFound("Mayis")}>
        {pageNotFound} adini deyis
    </button>
  )
}

export default Button