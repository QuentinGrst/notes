import { useEffect, useState } from "react";
import { Side, Main, MessageNoNoteSelected, LoaderWrapper, AddCircle, AddText, ChangeTheme, AddSearch, Search, DeleteSearch } from "./App.styled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyle } from "./GlobalStyle";
import Note from "./Note";
import LinkToNote from "./LinkToNote";
// import Modal from "./Modal";
import { NoteList } from "./NoteList/NoteList.styled.js";
import { Routes, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import { Loader } from "./Note/Note.styled";
import { HiMoon, HiPlusCircle, HiSun, HiX } from "react-icons/hi";

function App() {
  const [notes, setNotes] = useState(null);
  const [isLoading, setIsLoadong] = useState(true);

  const fetchNotes = async () => {
    const response = await fetch("/notes");
    const notes = await response.json();
    setIsLoadong(false);
    setNotes(notes);
  };

  const [theme, setTheme] = useState('light');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const Navigate = useNavigate();

  const updateNote = (noteToUpdate) => {
    setNotes(
      notes.map((note) => (note.id === noteToUpdate.id ? noteToUpdate : note))
    );
  };

  const doesNotMatchSearchTerm = (note) => {
    if (note.title) {
      if (note.title.includes(searchTerm)) {
        return true;
      } else if (note.content) {
        if (note.content.includes(searchTerm)) {
          return true;
        }
      }
    } else if (note.content) {
      if (note.content.includes(searchTerm))
        return true;
    }
    return false;
  }

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
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Side>
        <AddText>
          <ChangeTheme onClick={toggleTheme}>
            {theme === 'light' ? <HiSun /> : <HiMoon />}
          </ChangeTheme>
          <p>Toutes les notes</p>
          <AddCircle>
            <HiPlusCircle onClick={createNote} type="button">Crée une note</HiPlusCircle>
          </AddCircle>
        </AddText>
        <AddSearch>
          <Search type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <DeleteSearch onClick={() => { setSearchTerm("") }}><HiX /></DeleteSearch>
        </AddSearch>
        {isLoading && <LoaderWrapper>
          <Loader />
        </LoaderWrapper>}
        {notes && (
          <NoteList>
            {notes.filter((note) => doesNotMatchSearchTerm(note)).map((note) => (
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
    </ThemeProvider >
  );
}

export default App;
