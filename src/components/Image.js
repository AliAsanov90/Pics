import React from 'react';

const Image = props => {
  const { urls, description, alt_description } = props.image;
  const style = { marginTop: '20px' };
  
  return <img src={urls.regular} alt={description || alt_description} style={style} />;
};

export default Image;
