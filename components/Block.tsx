import React from 'react'

function Block({name}: {name?: string}) {
  return (
    <div>
      <h2>block</h2>
      block name: {name ?? "default name"}
    </div>
  )
}

export default Block
