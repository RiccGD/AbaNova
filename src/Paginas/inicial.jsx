import {Style} from "./Start.css";
import {Cabechalho} from "../Componentes/Cabe"
import {Atalhos} from "../Componentes/ataio"

function Inicial() {
    return (
    <>
       <Cabechalho />

       <div className="Talhos">
        <Atalhos/>
        <Atalhos/>
        <Atalhos/>
        <Atalhos/>
        <Atalhos/>
       </div>
    </>
  );
}