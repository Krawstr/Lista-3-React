const Component = () => {
  const items = ['QUERO', 'Dormir', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAA'];

  return (
    <>
      <h1>@#$)#_$#_)$_+#$#$#$</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Já disse q quero dormi?</p>
    </>
  )
}

export default Component
