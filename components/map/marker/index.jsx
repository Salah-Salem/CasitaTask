import { Fragment } from 'react'

export default function Marker({ text, tooltip, $hover, type }) {
  return (
    <Fragment>
      <div
        className={`${$hover ? 'circle hover' : 'circle'} ${
          type == 'Neutrual'
            ? 'bg-primary'
            : type == 'Negative'
            ? 'bg-danger'
            : 'bg-success'
        }`}
      >
        <span
          className="circleText red-tooltip"
          title={tooltip}
          data-toggle="tooltip"
          data-bs-toggle="tooltip"
          data-placement="top"
        >
          {text}
        </span>
      </div>
    </Fragment>
  )
}
