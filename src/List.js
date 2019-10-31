import React from 'react';

function List(props){
    return(
        <ul>
            <li>
            {
              props.data.map((item, index) =><li key={index}> {item} </li>)
            }
            </li>
        </ul>
    )
}

export default List;