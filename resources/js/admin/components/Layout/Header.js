import PropTypes from "prop-types"
import React, { Component } from "react"

import { connect } from "react-redux"

import { Link } from "react-router-dom"

// Import menuDropdown
// import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../Common/ProfileMenu"

import logoLightShort from "../../assets/images/logo-light-short.png"
import logoLightPng from "../../assets/images/logo-light.png"

//i18n
import { withTranslation } from "react-i18next"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.toggleMenu = this.toggleMenu.bind(this)
    this.toggleFullscreen = this.toggleFullscreen.bind(this)
  }
  /**
   * Toggle sidebar
   */
  toggleMenu() {
    this.props.toggleMenuCallback()
  }

  toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box">
                <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logoLightShort} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoLightPng} alt="" height="40" />
                  </span>
                </Link>
              </div>

              <button
                type="button"
                onClick={this.toggleMenu}
                className="btn btn-sm px-3 font-size-16 header-item waves-effect d-xl-none d-inline-block"
                id="vertical-menu-btn"
              >
                <i className="fa fa-fw fa-bars"></i>
              </button>
            </div>
            <div className="d-flex">
              <div className="dropdown d-none d-lg-inline-block ms-1">
                <button
                  type="button"
                  onClick={this.toggleFullscreen}
                  className="btn header-item noti-icon waves-effect"
                  data-toggle="fullscreen"
                >
                  <i className="bx bx-fullscreen"></i>
                </button>
              </div>

              {/* <NotificationDropdown /> */}
              <ProfileMenu />
            </div>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

const mapStatetoProps = state => {
  const { layoutType } = state.Layout
  return { layoutType }
}
export default connect(mapStatetoProps, null)(withTranslation()(Header))

Header.propTypes = {
  t: PropTypes.any,
  toggleMenuCallback: PropTypes.any,
}
