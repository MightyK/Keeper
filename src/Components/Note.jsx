import React from 'react';

const Note = props => {
    return (
    <div className="note">
        <h1>{props.name}</h1>
        <p>{props.info}</p>
        <button>
            DELETE
        </button>
    </div>
    );
};



export default Note;