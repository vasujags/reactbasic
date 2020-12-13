import React from 'react';

const Person = props=>{
    return(
        <div>
            <h1 onClick={props.click}>Person name is  {props.name},age is {props.age}</h1>
            <span>{props.children}</span>
            <input onChange={props.change} type = "text"/>
        </div>
        );
}

export default Person;