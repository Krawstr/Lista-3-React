import React from 'react'

const ComponentePai = () => {
  const message = "Eu acho q sou um Props!"

  return (
    <>
      <h1>Componente Pai</h1>
      <ComponenteFIlho message={message} />
    </>
  )
}

const ComponenteFIlho = (props) => {
  return (
    <>
      <h2>Componente Filho</h2>
      <p>{props.message}</p>
    </>
  )
}

export default ComponentePai
