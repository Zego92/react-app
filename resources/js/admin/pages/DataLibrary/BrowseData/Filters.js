import React from "react"
import FilterSection from "./FilterSection"
import FilterTab from "./FilterTab"

const dataType = [
  {
    id: 11,
    name: "Alternative Data",
  },
  {
    id: 12,
    name: "Sentiment Data",
  },
  {
    id: 13,
    name: "Breadth",
  },
  {
    id: 14,
    name: "Maco/Fundamental",
  },
]

const regions = [
  { id: "reg1", name: "Sweden" },
  { id: "reg2", name: "Europe" },
  { id: "reg3", name: "USA" },
  { id: "reg4", name: "Asia" },
]

export default function Filters() {
  const [checkedList, setCheckedList] = React.useState([])

  const inputHandler = id => {
    const isExist = [...checkedList].includes(id)
    let newList

    if (isExist) {
      newList = [...checkedList].filter(v => v !== id)
    } else {
      newList = [...checkedList, id]
    }
    setCheckedList(newList)
  }

  const clearList = () => setCheckedList([])

  const isChecked = id => [...checkedList].some(v => v === id)

  return (
    <React.Fragment>
      <FilterSection
        title="Data type"
        list={dataType}
        inputHandler={inputHandler}
        isChecked={isChecked}
      />
      <FilterSection
        title="Regions"
        list={regions}
        inputHandler={inputHandler}
        isChecked={isChecked}
      />
      <FilterTab
        checkedList={checkedList}
        inputHandler={inputHandler}
        clearList={clearList}
      />
    </React.Fragment>
  )
}
