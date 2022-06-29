import { Fragment } from 'react'

export default function Select({ onSelect }) {
  return (
    <Fragment>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select a sentiment</option>
        <option value="Neutrual">Neutrual</option>
        <option value="Positive">Positive</option>
        <option value="Negative">Negative</option>
      </select>
    </Fragment>
  )
}
