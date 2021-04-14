import React, { Component } from "react"
import SidebarContent from "./SidebarContent"

class Sidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="vertical-menu">
          <div data-simplebar className="h-100">
            <SidebarContent />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Sidebar
