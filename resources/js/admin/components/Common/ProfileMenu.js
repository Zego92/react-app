import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import { withRouter, Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

// users
import user1 from "../../assets/images/users/avatar-1.jpg"

class ProfileMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: false,
      name: "Admin",
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      menu: !prevState.menu,
    }))
  }

  componentDidMount() {
    if (localStorage.getItem("authUser")) {
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        const obj = JSON.parse(localStorage.getItem("authUser"))
        this.setState({ name: obj.displayName })
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        const obj = JSON.parse(localStorage.getItem("authUser"))
        this.setState({ name: obj.username })
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Dropdown
          isOpen={this.state.menu}
          toggle={this.toggle}
          className="d-inline-block"
        >
          <DropdownToggle
            className="btn header-item waves-effect"
            id="page-header-user-dropdown"
            tag="button"
          >
            <img
              className="rounded-circle header-profile-user"
              src={user1}
              alt="Header Avatar"
            />{" "}
            <span className="d-none d-xl-inline-block ms-1">
              {this.state.name}
            </span>
            <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem tag="a" href="/profile">
              {this.props.t("Profile Settings")}
            </DropdownItem>
            <DropdownItem tag="a" href="/billing">
              {this.props.t("Billing Method")}
            </DropdownItem>
            <Link to="/logout" className="dropdown-item">
              <span>{this.props.t("Logout")}</span>
            </Link>
            <Link to="/my-subscription" className="dropdown-item">
              <span>{this.props.t("My Subscription")}</span>
            </Link>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    )
  }
}

ProfileMenu.propTypes = {
  t: PropTypes.any,
}

export default withRouter(withTranslation()(ProfileMenu))
