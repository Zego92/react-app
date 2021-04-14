import ConditionsForm from "./ConditionsForm";
import BtnOrAnd from "./BtnOrAnd";
import React, {useState} from "react";

const SelectSignalConditions = ({initialOptionsGroupByType, addSignal, selectedTarget, setSelectedSignal}) => {
    const [amountForm, setAmountForm] = useState(1);

    const addNewBlock = () => {
        setAmountForm(amountForm + 1)
    }
    const removeBlock = () => {
        setAmountForm(amountForm - 1)
    }
    const onChangeValue = (e) => {
        e.preventDefault();
        console.log(e.target.value, e.target.name);
    }

    let updatesOptionsGroupByType = initialOptionsGroupByType.map(group => {
        if (group.value === selectedTarget.group) {
            return {
                ...group,
                data: [
                    {
                        ...selectedTarget,
                        label: `Same as Target (${selectedTarget.label})`
                    },
                    {
                        label: "All",
                        options: [...group.data]
                    }
                ]
            }
        }
        return group
    })
    return <>
        <ConditionsForm
            initialOptionsGroupByType={updatesOptionsGroupByType}
            addSignal={addSignal}
            setSelectedSignal={setSelectedSignal}
        />
        {amountForm >= 2 && (
            <>
                <BtnOrAnd name="firstAndSecond" onChangeValue={onChangeValue}/>
                <ConditionsForm
                    initialOptionsGroupByType={updatesOptionsGroupByType}
                    addSignal={addSignal}
                    setSelectedSignal={setSelectedSignal}
                />
            </>
        )}
        {amountForm >= 3 && (
            <>
                <BtnOrAnd name="secondAndThird" onChangeValue={onChangeValue}/>
                <ConditionsForm
                    initialOptionsGroupByType={updatesOptionsGroupByType}
                    addSignal={addSignal}
                    setSelectedSignal={setSelectedSignal}
                />
            </>
        )}
        {amountForm > 1 && (
            <button
                type="button"
                className="btn btn-light waves-effect btn-label waves-light mt-3"
                onClick={removeBlock}
            >
                <i className="bx bx-trash label-icon"/>
                Remove condition
            </button>
        )}
        {amountForm <= 2 && (
            <button
                type="button"
                className="btn btn-light waves-effect btn-label waves-light mt-3 mx-3"
                onClick={addNewBlock}
            >
                <i className="bx bx-plus label-icon"/>
                Add condition
            </button>
        )}
    </>
}

export default SelectSignalConditions