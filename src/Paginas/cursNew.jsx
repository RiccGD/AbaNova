import {Style} from "./.css";
import {Cabechalho} from "../Componentes/Cabe"
import {LinkCur} from "../Componentes/CurComp"

function Inicial() {
    return (
    <>
       <Cabechalho />

       <div className="organiLin">
         <LinkCur/>
         <LinkCur/>
         <LinkCur/>
         <LinkCur/>
       </div>
       <div>
         <Note/>
       </div>
    </>
  );
}