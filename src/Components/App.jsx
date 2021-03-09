import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';

const createNote = (note) => 
    (
        <Note 
            id={note.key}
            key={note.key}
            name={note.title}
            info={note.content}
        />
    );


function App() {
    return <div>
        <Header />
        <div>
            {notes.map(createNote)}
        </div>
        <Footer />
    </div>;
};

export default App;