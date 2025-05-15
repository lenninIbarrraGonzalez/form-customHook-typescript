import { useForm } from '../hooks/useForm';

export const Form = () => {
  const { userName, email, formState, handleChange, handleReset } = useForm();

  return (
    <section className="container">
      <h1>Formulario con customHook y typescript</h1>
      <hr />
      <div>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Nombre"
          name="userName"
          value={userName}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          type="email"
          placeholder="email@domain.com"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      <h4>{!userName ? <span>no existe un nombre</span> : userName}</h4>
      <h4>{!email ? <span>no existe un correo</span> : email}</h4>
      <pre>{JSON.stringify(formState)}</pre>

      <hr />
      <button className="btn btn-outline-primary" onClick={handleReset}>
        Reiniciar
      </button>
    </section>
  );
};
