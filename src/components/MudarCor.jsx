import React from 'react';

const DynamicStyledParagraph = ({ isHighlighted, text }) => {
 
  const paragraphStyle = {
    color: isHighlighted ? 'red' : 'black',
    fontWeight: isHighlighted ? 'bold' : 'normal', 
  }

  return (
    <p style={paragraphStyle}>
      {text}
    </p>
  )
}

export default DynamicStyledParagraph


