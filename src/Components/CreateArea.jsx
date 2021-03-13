import React, {useState} from 'react';
import NoteAddRoundedIcon from '@material-ui/icons/NoteAddRounded';
import Fab from '@material-ui/core/Fab';

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
            <form className='create-note'>
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
                 <Fab
                    onClick={submitNote}    
                >
                    <NoteAddRoundedIcon />
                </Fab>
            </form>
        </div>
    );
}

export default CreateArea;