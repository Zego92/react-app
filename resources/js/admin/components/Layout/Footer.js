import React from "react"
import { Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container-fluid">
          <div className="text-sm-end d-none d-sm-block">
            {new Date().getFullYear()} © NeuroQuant
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
