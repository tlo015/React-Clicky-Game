import React from 'react';
import './pictures.css';

const Pictures = props => (
    <div className="imgContainer" key={props.id} onClick={()=> props.handleClick(props.id)}>
        <img alt={props.name} src={props.image} />
    </div>
);

export default Pictures;