import { useEffect, useState } from "react";
import { Side, Main, MessageNoNoteSelected, LoaderWrapper, CreateButton } from "./App.styled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyle } from "./GlobalStyle";
import Note from "./Note";
import LinkToNote from "./LinkToNote";
import { NoteList } from "./NoteList/NoteList.styled.js";
import { Routes, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import { Loader } from "./Note/Note.styled";
import { Navigate } from "react-router-dom";

function App() {
  const [notes, setNotes] = useState(null);
  const [isLoading, setIsLoadong] = useState(true);

  const fetchNotes = async () => {
    const response = await fetch("/notes");
    const notes = await response.json();
    setIsLoadong(false);
    setNotes(notes);
  };

  const Navigate = useNavigate();

  const updateNote = (noteToUpdate) => {
    setNotes(
      notes.map((note) => (note.id === noteToUpdate.id ? noteToUpdate : note))
    );
  };


  const deleteNote = (id) => {
    setNotes(
      notes.filter((note) => (note.id !== id))
    );
    Navigate("/notes/");
  };
  useEffect(() => {
    fetchNotes();
  }, []);

  const createNote = async () => {
    const response = await fetch(`/notes/`, {
      method: "POST",
      body: JSON.stringify({ title: "Sans Titre" }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const note = await response.json();
    setNotes([note, ...notes]);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Side>
        <div>
          <CreateButton onClick={createNote} type="button">Crée une note</CreateButton>
        </div>
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
