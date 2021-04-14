import React from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  Row,
  Media,
} from "reactstrap"

import avatar from "../../assets/images/users/avatar-1.jpg"

const WelcomeComp = props => {
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <div className="media">
            <div className="me-3">
              <img
                src={avatar}
                alt=""
                className="avatar-sm rounded-circle img-thumbnail"
              />
            </div>
            <div className="media-body">
              <Media>
                <div className="media-body">
                  <div className="text-muted">
                    <h5 className="mb-1">Henry wells</h5>
                    <p className="mb-0">UI / UX Designer</p>
                  </div>
                </div>

                <UncontrolledDropdown className="ms-2">
                  <DropdownToggle
                    className="btn btn-light btn-sm"
                    color="#eff2f7"
                    type="button"
                  >
                    <i className="bx bxs-cog align-middle me-1"></i> Setting
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-end">
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Something else
                    </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Media>
            </div>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default WelcomeComp
