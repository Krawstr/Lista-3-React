const GaleriaImagens = ({ images }) => {
    return (
      <div>
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image.url} 
            alt={image.altText} 
            style={{ margin: '10px', width: '200px', height: 'auto' }}
          />
        ))}
      </div>
    )
  }
  
  export default GaleriaImagens