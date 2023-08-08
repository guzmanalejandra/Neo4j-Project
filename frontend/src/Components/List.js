import React from "react";

export const List = ({ juegos }) => {
  return (
    <div>
      <table className="table is-fullwidth is-small">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Multijugador</th>
            <th>Plataforma</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {juegos.map((juego) => (
            <tr>
              <td>{juego.nombre}</td>
              <td>{juego.categoria}</td>
              <td>{juego.multijugador}</td>
              <td>{juego.plataforma}</td>
              <td><img src={juego.url} className="img is-64x64" alt="Portada juego" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
