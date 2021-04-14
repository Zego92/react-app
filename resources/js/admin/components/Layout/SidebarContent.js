import React, { Component, createRef } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

//Simple bar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

class SidebarContent extends Component {
  constructor(props) {
    super(props)
    this.refDiv = createRef()
  }

  componentDidMount() {
    this.initMenu()
  }

  initMenu() {
    new MetisMenu("#side-menu")

    let matchingMenuItem = null
    const ul = document.getElementById("side-menu")
    const items = ul.getElementsByTagName("a")
    for (let i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem)
    }
  }

  scrollElement = item => {
    setTimeout(() => {
      if (this.refDiv.current !== null) {
        if (item) {
          const currentPosition = item.offsetTop
          if (currentPosition > window.innerHeight) {
            if (this.refDiv.current)
              this.refDiv.current.getScrollElement().scrollTop =
                currentPosition - 300
          }
        }
      }
    }, 300)
  }

  activateParentDropdown = item => {
    item.classList.add("active")
    const parent = item.parentElement

    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      this.scrollElement(item)
      return false
    }
    this.scrollElement(item)
    return false
  }

  render() {
    const isCollapsed = this.props.sideBarType === "condensed"

    return (
      <React.Fragment>
        <SimpleBar style={{ maxHeight: "100%" }} ref={this.refDiv}>
          <div id="sidebar-menu">
            <ul className="metismenu list-unstyled" id="side-menu">
              {/*<li>*/}
              {/*  <Link to="/dashboard" className="waves-effect">*/}
              {/*    {isCollapsed && <i className="bx bx-home-circle" />}*/}
              {/*    <span>{this.props.t("Dashboards")}</span>*/}
              {/*  </Link>*/}
              {/*</li>*/}

              <li>
                <Link to="/#" className="has-arrow waves-effect">
                  {isCollapsed && <i className="bx bx-data" />}
                  <span>{this.props.t("DataLibrary")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/browse-data">{this.props.t("BrowseData")}</Link>
                  </li>
                  <li>
                    <Link to="/import-data">{this.props.t("ImportData")}</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#" className="has-arrow waves-effect">
                  {isCollapsed && <i className="bx bx-wallet-alt" />}
                  <span>{this.props.t("BackTester")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/create-backtest">
                      {this.props.t("CreateBackTest")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/#" className="has-arrow waves-effect">
                  {isCollapsed && <i className="bx bx-cog" />}
                  <span>{this.props.t("AI/MachineLearning")}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/ml-tool">
                      {this.props.t("MachineLearningTool")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ml-models">
                      {this.props.t("ProprietaryML-models")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <div className="line " />
              </li>

              <li>
                <Link to="/blog" className="waves-effect">
                  {isCollapsed && <i className="bx bx-detail" />}
                  <span>{this.props.t("Blog")}</span>
                </Link>
              </li>
              {/* <li>
                <Link to="/newsletters" className="waves-effect">
                  {isCollapsed && <i className="bx bx-book-open" />}
                  <span>{this.props.t("Newsletters")}</span>
                </Link>
              </li> */}
              <li>
                <Link to="/tutorials" className="waves-effect">
                  {isCollapsed && <i className="bx bx-video" />}
                  <span>{this.props.t("Tutorials")}</span>
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="waves-effect">
                  {isCollapsed && <i className="bx bx-pen" />}
                  <span>{this.props.t("ContactUs")}</span>
                </Link>
              </li>
              {/* <li>
                <Link to="/test" className="waves-effect">
                  <span>{this.props.t("Test Page")}</span>
                </Link>
              </li> */}
            </ul>
          </div>
        </SimpleBar>
      </React.Fragment>
    )
  }
}

SidebarContent.propTypes = {
  sideBarType: PropTypes.string,
}

const mapStateToProps = state => ({ sideBarType: state.Layout.leftSideBarType })

export default connect(mapStateToProps)(
  withRouter(withTranslation()(SidebarContent))
)
