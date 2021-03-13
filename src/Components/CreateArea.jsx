import React, {useState} from 'react';

const CreateArea = (props) => {
    
    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const {title: noteTitle, content: noteContent} = note;

    const handleChange = (event) => {
        const {name, value} = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    const submitNote = (event) => {
        props.onAdd(note);
        setNote({
            title: '',
            content: ''
        });
        event.preventDefault();
    } 

    return (
        <div>
            <form>
                <input 
                    name='title'
                    onChange={handleChange}
                    value={noteTitle}
                    placeholder='title'    
                 />
                <textarea 
                    name='content'
                    onChange={handleChange}
                    value={noteContent}
                    placeholder='Write a note...'
                    rows='3'
                 />
                 <button
                    onClick={submitNote}    
                >
                    Add
                </button>
            </form>
        </div>
    );
}

export default CreateArea;