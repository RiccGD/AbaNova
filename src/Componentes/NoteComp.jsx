import {Style} from ".notesEtilos/.css";
import { useState } from "react";

function Note() {
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState('');
  
    // Função para adicionar uma nova nota
    const addNote = () => {
      if (note.trim()) {
        setNotes([...notes, note]);
        setNote('');
      }
    };
  
    // Função para lidar com a mudança de texto no textarea
    const handleChange = (event) => {
      setNote(event.target.value);
    };
  
    return (
        <>
      <div>
        <textarea
          value={note}
          onChange={handleChange}
          placeholder="Escreva sua nota aqui.."
          className={Style.bloconota}
        ></textarea>
        <br />
        <button onClick={addNote} className={Style.btnIr}>Adicionar</button>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
      </>
    );
  }