import React from "react";

const Login = ({setPantalla}) => {

  return (

    <form>
    <h1>Iniciar Sesión</h1>
      <div>
        <label>Correo electrónico:</label>
        <input
          type="text"
          id="correo"
          name="correo"
          placeholder="correo@correo.com"
        />
      </div>

      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          id="contraseña"
          name="contraseña"
          placeholder="Contraseña"
        />
      </div>

        <p>
        ¿Aun no tienes una cuenta?{" "}
        <span
          onClick={() => setPantalla("registro")}
          style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
        >
          Regístrate
        </span>
        </p>

      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;
