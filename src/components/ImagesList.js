import React from 'react';
import Image from './Image';

const ImagesList = props => props.images.map( img => <Image image={img} key={img.id} /> );

export default ImagesList; 