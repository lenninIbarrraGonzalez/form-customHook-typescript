import { useState } from 'react';

interface DataForm {
  userName: string;
  email: string;
}

export const Form = () => {
  const [formState, setFormState] = useState<DataForm>({
    userName: '',
    email: '',
  });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    if (name in formState) {
      setFormState((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

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
          value={formState.userName}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          type="email"
          placeholder="email@domain.com"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
      </div>

      <h4>{formState.userName}</h4>
      <h4>{formState.email}</h4>
      <pre>{JSON.stringify(formState)}</pre>
    </section>
  );
};
