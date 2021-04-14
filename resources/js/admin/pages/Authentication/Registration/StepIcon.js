import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

function StepIcon({ activeTab, val, left, setactiveTab }) {
  const classWrapper = classnames({
    current: activeTab === val,
    desable: activeTab < val,
  })
  const btnClass = classnames({
    active: activeTab === val,
    desable: activeTab < val,
  })
  const btnStyle = { width: "2rem", height: "2rem", left: `${left}%` }
  const clickHandler = () => setactiveTab(val)
  console.log()
  return (
    <div className={classWrapper}>
      <button
        onClick={clickHandler}
        disabled={activeTab < val}
        type="button"
        className={`${btnClass} position-absolute top-0 translate-middle btn btn-sm btn-primary rounded-pill`}
        style={btnStyle}
      >
        {val}
      </button>
    </div>
  )
}

StepIcon.propTypes = {
  activeTab: PropTypes.number,
  val: PropTypes.number,
  left: PropTypes.number,
  setactiveTab: PropTypes.func,
}

export default StepIcon
