import React, { useState } from 'react'

const HeadandTail = () => {
  const [selectedValue, setselectedValue] = useState('')
  const [value, setValue] = useState([])
  const handleChange = (e) => {
    setselectedValue(e.target.value)
  }

  const onSubmit = () => {
    if (!selectedValue) {
      alert('Please select value from dropdown')
    }
    if (value.length === 0) {
      let temp = []
      temp.push(selectedValue)
      setValue((prev) => [...prev, temp])
    } else {
      let lastarry = value[value.length - 1]
      let lastele = lastarry[lastarry.length - 1]
      if (lastele === selectedValue) {
        let tempPrev = [...value]
        tempPrev[tempPrev.length - 1].push(selectedValue)
        setValue(tempPrev)
        // setValue((prev) => {
        //   prev[prev.length - 1].push(selectedValue)
        //   return [...prev]
        // })
      } else {
        let temp = []
        temp.push(selectedValue)
        setValue((prev) => [...prev, temp])
      }
    }
    setselectedValue('')
  }
  return (
    <div>
      <h1> Head and Tail Page</h1>
      <select onChange={handleChange} value={selectedValue}>
        <option value={''}>Select Value</option>
        <option value={'H'}>H</option>
        <option value={'T'}>T</option>
      </select>

      <button onClick={() => onSubmit()}>Submit</button>

      <div
        style={{
          display: 'flex',
          margin: '20px',
        }}
      >
        {value.map((item) => {
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {item.map((inner) => (
                <span style={{
                  margin: '2px'
                }}>{inner}</span>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HeadandTail
