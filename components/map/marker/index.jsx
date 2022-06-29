import { Fragment } from 'react'

export default function Marker({ text, tooltip, $hover, type }) {
  const handleClick = () => {
    console.log(`You clicked on ${tooltip}`)
  }

  return (
    <Fragment>
      <div
        className={`${$hover ? 'circle hover' : 'circle'} ${
          type == 'Neutrual'
            ? 'primary'
            : type == 'Negative'
            ? 'danger'
            : 'success'
        }`}
        onClick={handleClick}
      >
        <span className="circleText" title={tooltip}>
          {text}
        </span>
      </div>
    </Fragment>
  )
}
