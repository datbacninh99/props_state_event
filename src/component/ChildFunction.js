import React from 'react';

export default function ChildFunction(props) {
    return (
        <div>
            <p>{props.studentName}: {props.children}</p>
        </div>
    )
}