import { style } from "./pinterest_module.css";
import {Cabechalho} from "../Componentes/Cabe";

function Pinterest() {
    return (
        <>
        <Cabechalho/>
        <div className="PintLink">
          <img></img>
          <h3><link></link></h3>
        </div>


        <iframe
          src="https://assets.pinterest.com/ext/embed.html?id=738590407673589013"
          height="445"
          width="345"
          frameBorder="0"
          scrolling="no"
          title="Pinterest Pin"></iframe>

        </>
    );
  }