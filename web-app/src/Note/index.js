import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { NoteForm, NoteTitle, SaveAndStatus, SaveButton, TextArea, Loader, ErrorMessage, DeleteButton, CreateButton, Footer } from "./Note.styled";
import { FiCheck, FiLoader } from "react-icons/fi"
import { IconAndLabel } from "../IconAndLabel/IconAndLabel.styled";
import { FullHeightAndWidthCentered } from "../App.styled";


const Note = ({ onSave, onDelete, onCreate }) => {
  const { id } = useParams();

  const [note, setNote] = useState(null);
  const [getStatus, setGetStatus] = useState("IDLE");
  const [status, setStatus] = useState("IDLE");

  const fetchNote = useCallback(async () => {
    setGetStatus("LOADING");
    const response = await fetch(`/notes/${id}`);
    const note = await response.json();
    if (response.ok) {
      setNote(note);
      setGetStatus("IDLE");
    } else {
      setGetStatus("ERROR");
    }
  }, [id]);

  const saveNote = async () => {
    setStatus("LOADING")
    const response = await fetch(`/notes/${note.id}`, {
      method: "PUT",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      setStatus("SAVED");
      onSave(note);
    } else {
      setStatus("ERROR");
    }
  };

  const deleteNote = async () => {
    setStatus("LOADING")
    const response = await fetch(`/notes/${note.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      setStatus("DELETED");
      onDelete(note.id);
    } else {
      setStatus("ERROR");
    }
  };

  useEffect(() => {
    fetchNote();
  }, [id, fetchNote]);

  if (getStatus === "LOADING") {
    return (
      <FullHeightAndWidthCentered>
        <Loader />
      </FullHeightAndWidthCentered>
    );
  }

  if (getStatus === "ERROR") {
    return (
      <FullHeightAndWidthCentered>
        404 : La note {id} n'existe pas !
      </FullHeightAndWidthCentered>
    );
  }

  return (
    <NoteForm
      onSubmit={(event) => {
        event.preventDefault();
        saveNote();
      }}>
      <NoteTitle type="text"
        value={note ? note.title : ""}
        onChange={(event) => {
          setStatus("IDLE");
          setNote({
            ...note,
            title: event.target.value,
          });
        }}
      />
      <TextArea value={note ? note.content : ""}
        onChange={(event) => {
          setStatus("IDLE");
          setNote({
            ...note,
            content: event.target.value,
          });
        }}
      />
      <Footer>
        <SaveAndStatus>
          <SaveButton>Sauvegarder</SaveButton>
          {status === "SAVED" ? (
            <IconAndLabel >
              <FiCheck />
              Sauvegarder
            </IconAndLabel>
          ) : status === "ERROR" ? (
            <ErrorMessage>Erreur lors de la sauvegarde</ErrorMessage>
          ) : status === "LOADING" ? (
            <Loader />
          ) : status === "DELETED" ? (
            <IconAndLabel >
              <FiCheck />
              Supprimé
            </IconAndLabel>
          ) : null
          }
        </SaveAndStatus>
        <DeleteButton onClick={deleteNote} type="button">Supprimer</DeleteButton>
      </Footer>
    </NoteForm >
  );
};

export default Note;

