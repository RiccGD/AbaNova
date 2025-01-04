import {Style} from "./cabe.module.css";
import { useState } from "react";

function LinkCur() {

  const [Cursos, SetCursos] = useState({Nomes:'',Imagens:'',Links:''});

  //adicionar um nova aba de Curso
  const Addcurso = (e) => {
    const { name, value } = e.target;
    Cursos({ ...Cursos, [name]: value });
  };

    return (
    <>
     <div className={Style.basemais}>
      <button className={Style.Abrir} onClick={abrir}><img className="btnMage"/></button>
     </div>

        <div className={Style.Formu}>
        <form  onSubmit={f} className={Style.FormBase}>

          <div className={Style.escreva}>
            <label for="nome">Nome do Destino: </label>
            <input type="text" name="nome" 
            id="nome" value={Cursos.name}
            onChange={handleChange} placeholder="Name" 
            required />
          </div><div className={Style.escreva}>
            <label for="nome">Uma Imagem: </label>
            <input type="text" name="Imagem" 
            id="Imagem" value={Cursos.imagens}
            onChange={handleChange} placeholder="Imagens" 
            required />
          </div>
          <div className={Style.escreva}>
            <label for="nome">O link do Destino: </label>
            <input type="text" name="link" 
            id="link" value={Cursos.Links}
            onChange={handleChange} placeholder="Links" 
            required />
          </div>
          <button type="submit">Adicionar</button>

        </form>
      </div>
     

     
    </>
  );
}