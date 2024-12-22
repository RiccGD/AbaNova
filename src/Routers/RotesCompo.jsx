import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
/* Importar as Paginas */
import {  } from "module";
import {Pinterest} from "../Paginas/Pinterest"
import {Cursos} from "../Paginas/Cursos"
import {GitHub} from "../Paginas/GitHub"

export function RotasCompo() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Nome/>} />

                <Route path='Pinterest' element={<Pinterest/>} />
                <Route path='Cursos' element={<Nome/>} />
                <Route path='GitHub' element={<Nome/>} />
            </Routes>
        </Router>
    );
}