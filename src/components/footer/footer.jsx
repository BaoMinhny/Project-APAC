import React from 'react'
import "../footer/footer.css"

const footer = () => {
  return (
    <footer className="m-2 me-4">
        <div className="row text-center p-1">
          <div className="col">
            <nav className="d-flex flex-column flex-md-row justify-content-center justify-content-md-end gap-3">
            <a href="#" className="text-decoration-none text-dark">© 2021</a>
              <a href="#" className="text-decoration-none text-dark">Accessibility</a>
              <a href="#" className="text-decoration-none text-dark">Cookies</a>
              <a href="#" className="text-decoration-none text-dark">Privacy</a>
              <a href="#" className="text-decoration-none text-dark">Terms</a>
            </nav>
        </div>
      </div>
    </footer>
  )
}

export default footer