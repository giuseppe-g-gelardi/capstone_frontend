import React from "react";

const CommissionVisuals = (props) => {

  const layout = props.layout
  const color = props.color
  const keycaps = props.keycaps

  return (
    <div>
      <p>you chose an {color} {layout} with {keycaps} keycaps!</p>
    </div>
  )
}

export default CommissionVisuals