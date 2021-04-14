import React from "react";

const BtnOrAnd = ({name, onChangeValue}) => {
    return <div className="btn-group mt-2 mt-xl-0" role="group"  onChange={onChangeValue}>
        <input
            type="radio"
            className="btn-check"
            name={name}
            id={`${name}1`}
            autoComplete="off"
            value="And"
            defaultChecked
        />
        <label className="btn btn-secondary" htmlFor={`${name}1`}>
            And
        </label>

        <input
            type="radio"
            className="btn-check"
            name={name}
            id={`${name}2`}
            autoComplete="off"
            value="Or"
        />
        <label className="btn btn-secondary" htmlFor={`${name}2`}>
            Or
        </label>
    </div>
}

export default BtnOrAnd