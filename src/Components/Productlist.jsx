import React from 'react'
import Products from './Products'

export default function Productlist() {
  return (
    <section className="container my-5">
  <div className="d-flex justify-content-center mt-4">
    <ul className="pagination">
      <li className="page-item"><button className="page-link">1</button></li>
      <li className="page-item"><button className="page-link">2</button></li>
      <li className="page-item"><button className="page-link">3</button></li>
      <li className="page-item"><button className="page-link">Next</button></li>
    </ul>
  </div>
</section>

  )
}
