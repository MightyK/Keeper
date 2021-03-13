import React, {useState} from 'react';
import NoteAddRoundedIcon from '@material-ui/icons/NoteAddRounded';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const CreateArea = (props) => {
    
    const [zoomedIn, setZoomedIn] = useState(false);
    const [rows, setRows] = useState('');
    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const {title: noteTitle, content: noteContent} = note;
    
    const expand = () => {
        setRows('3')
        setZoomedIn(true);

    }


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
                {zoomedIn ? 
                <input 
                    name='title'
                    onChange={handleChange}
                    value={noteTitle}
                    placeholder='title'    
                 /> : null
                }
                <textarea 
                    name='content'
                    onChange={handleChange}
                    value={noteContent}
                    placeholder='Write a note...'
                    rows={rows}
                    onClick={expand}
                 />
            <Zoom in={zoomedIn}>
                <Fab
                    onClick={submitNote}    
                >
                    <NoteAddRoundedIcon />
                </Fab>
            </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;