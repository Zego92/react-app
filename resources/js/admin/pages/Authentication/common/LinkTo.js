import React from "react"
import PropTypes from "prop-types"
import { useHistory } from "react-router-dom"
import { Button } from "reactstrap"

function LinkTo({ link }) {
  const histrory = useHistory()
  const isLogin = link === "login"
  const text = isLogin ? "Already have an account ?" : "Don't have an account ?"
  const linkText = isLogin ? "Login" : "Signup now"

  const clickHandler = () => histrory.push(link)

  return (
    <div className="mt-0 text-center">
      <p>
        {text}
        <Button
          onClick={clickHandler}
          color="link"
          className="fw-medium text-primary px-1"
        >
          {linkText}
        </Button>
      </p>
    </div>
  )
}

LinkTo.propTypes = {
  link: PropTypes.string,
}

export default LinkTo
