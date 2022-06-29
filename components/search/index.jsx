import { Fragment } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
export default function Search({ onSearch }) {
  return (
    <Fragment>
      <div className="form-control">
        <input
          type="text"
          name="searchInput"
          id="searchInput"
          onChange={(e) => onSearch(e.target.value)}
        />
        <BiSearchAlt2 />
      </div>
    </Fragment>
  )
}
