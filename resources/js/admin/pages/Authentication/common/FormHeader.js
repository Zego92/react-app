import React from "react"

// import images
import logoLightPng from "../../../assets/images/logo-light.png"

export default function FormHeader() {
  return (
    <div className="bg-primary bg-dark">
      <div className="p-2 text-center">
        <img src={logoLightPng} alt="" height="40" />
      </div>
    </div>
  )
}
