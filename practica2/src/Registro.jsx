import React from "react";

const Registro = ({setPantalla}) => {
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
        <label htmlFor="Contraseña">Contraseña:</label>
        <input
          type="password"
          id="registroContraseña"
          name="contraseña"
          placeholder="Constraseña"
        />
      </div>

      <div>
        <label htmlFor="DNI">DNI:</label>
        <input
          type="text"
          id="registroDNI"
          name="dni"
          placeholder="0000-0000-00000"
        />
      </div>
            <div>
        <label htmlFor="NumeroColaborador">Número de colaborador:</label>
        <input
          type="text"
          id="registroNumColaborador"
          name="numeroColaborador"
          placeholder="0000000"
        />
      </div>
              <p>
        ¿Ya tienes una cuenta?{" "}
        <span
          onClick={() => setPantalla("login")}
          style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
        >
          Iniciar Sesión
        </span>
        </p>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Registro;
