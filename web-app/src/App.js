import { useEffect, useState } from "react";
import { Side, Main, MessageNoNoteSelected, LoaderWrapper } from "./App.styled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyle } from "./GlobalStyle";
import Note from "./Note";
import LinkToNote from "./LinkToNote";
import { NoteList } from "./NoteList/NoteList.styled.js";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Loader } from "./Note/Note.styled";

function App() {
  const [notes, setNotes] = useState(null);
  const [isLoading, setIsLoadong] = useState(true);

  const fetchNotes = async () => {
    const response = await fetch("/notes");
    const notes = await response.json();
    setIsLoadong(false);
    setNotes(notes);
  };

  const updateNote = (noteToUpdate) => {
    setNotes(
      notes.map((note) => (note.id === noteToUpdate.id ? noteToUpdate : note))
    );
  };

  const deleteNote = (id) => {
    setNotes(
      notes.filter((note) => (note.id !== id))
    );

  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Side>
        {isLoading && <LoaderWrapper>
          <Loader />
        </LoaderWrapper>}
        {notes && (
          <NoteList>
            {notes.map((note) => (
              <li key={note.id}>
                <LinkToNote id={note.id} title={note.title} />
              </li>
            ))}
          </NoteList>
        )}</Side>
      <Main>
        <Routes>
          <Route path="/" element={
            <MessageNoNoteSelected>
              {!isLoading && "Selectionnez une note pour l'éditer"}
            </MessageNoNoteSelected>} />
          <Route path="/notes/:id" element={< Note onSave={updateNote} onDelete={deleteNote} />} />
        </Routes>
      </Main>
    </ThemeProvider>
  );
}

export default App;
