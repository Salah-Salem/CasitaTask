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
        <span className="circleText" title={tooltip}>
          {text}
        </span>
      </div>
    </Fragment>
  )
}
