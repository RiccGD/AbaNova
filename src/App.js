import {BrowserRouter} from 'react-router-dom'
import {Rotas} from './Routers/RotesCompo'
import './App.css';

export function App() {
  return (
    <BrowserRouter>
     <Rotas />
    </BrowserRouter>
  )
}