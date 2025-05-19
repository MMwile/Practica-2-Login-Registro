import React from "react";

const Registro = () => {
  return (
    <form>
      <h1>Registrarse</h1>

      <div>
        <label htmlFor="Nombre">Nombre completo:</label>
        <input
          type="text"
          id="registroNombre"
          name="name"
          placeholder="Nombre"
        />
      </div>

      <div>
        <label htmlFor="Correo">Correo electrónico:</label>
        <input
          type="email"
          id="registroCorreo"
          name="email"
          placeholder="correo@correo.com"
        />
      </div>

      <div>
        <label htmlFor="register-password">Contraseña:</label>
        <input
          type="password"
          id="registroContraseña"
          name="contraseña"
          placeholder="Constraseña"
        />
      </div>

      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Registro;
