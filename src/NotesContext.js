import React, { createContext, useState } from 'react';
import { nanoid } from 'nanoid';

export const NotesContext = createContext({
	notes: [{ text: "Hello, I'm default", id: '0' }]
});

export const NotesProvider = ({ children }) => {
	const [notes, setNotes] = useState([]);

	const addNote = text => {
		setNotes([{ text, id: nanoid(10) }, ...notes]);
	};

	console.log(nanoid(10));

	const removeNote = id => {
		setNotes(notes.filter(note => note.id !== id));
	};

	return (
		<NotesContext.Provider value={{ notes, addNote, removeNote }}>
			{children}
		</NotesContext.Provider>
	);
};
