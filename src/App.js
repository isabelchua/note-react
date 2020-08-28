import React, { useContext } from 'react';

import './App.css';
import NewNoteInput from './NewNoteInput';
import { NotesContext } from './NotesContext';

function App() {
	const { notes, removeNote } = useContext(NotesContext);
	return (
		<div className="App">
			<NewNoteInput />
			<ul>
				{notes.map(note => (
					<li onClick={() => removeNote(note.id)} key={note.id}>
						{note.text}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
