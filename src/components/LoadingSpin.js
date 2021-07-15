import React from 'react';
import ReactLoading from 'react-loading';
 
const LoadingSpin = ({ type }) => (
    <ReactLoading className={'loadingComp'} type={type} color={'#c3083f'} height={'10%'} width={'10%'} />
);
 
export default LoadingSpin;