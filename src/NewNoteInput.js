import React, { useState, useContext } from 'react';
import { NotesContext } from './NotesContext';

function NewNoteInput() {
	const { addNote } = useContext(NotesContext);
	const [text, setText] = useState('');

	const onTextChange = e => {
		setText(e.target.value);
	};

	const onSubmit = () => {
		addNote(text);
		setText('');
	};

	return (
		<div>
			<input onChange={onTextChange} type="text" value={text} />
			<button onClick={onSubmit}>Add Note</button>
		</div>
	);
}

export default NewNoteInput;
