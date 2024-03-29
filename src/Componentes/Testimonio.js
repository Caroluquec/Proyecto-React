import React from "react";
import "../Estilos-componentes/Testimonio.css";

function Testimonio(props){
  return (
    <div className="contenedor-testimonio">
      <img 
      className="imagen-testimonio"
      src = {require(`../Imagenes/testimonio-${props.imagen}.png`)}
      alt= " Foto tesimonio 1"/>
      <div className="contenerdor-texto-testimonio">
        <p className="nombre-testimonio">{props.nombre} en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>      

    </div>

  );
    
} 

export default Testimonio;