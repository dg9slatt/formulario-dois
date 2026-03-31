import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    cidade: "",
    perfil: "",
    receberNovidades: false,
    observacoes: ""
  });

  function handleChange(event) {
    const {name, value, type, checked} = event.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(form);
  }

  return (
    <div>
      <h2>Cadastro</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Cidade:</label>
          <input
            type="text"
            name="cidade"
            value={form.cidade}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Perfil:</label>
          <select
            name="perfil"
            value={form.perfil}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="admin">Admin</option>
            <option value="usuario">Usuário</option>
          </select>
        </div>

        <div>
          <label>
            <input
            type="checkbox"
            name="receberNovidades"
            checked={form.receberNovidades}
            onChange={handleChange}
            />
            Receber Novidades
          </label>
        </div>

        <div>
          <Label>Observaçôes:</Label>
          <textarea
            name="observacoes"
            value={form.observacoes}
            onChange={handleChange}
          />
        </div>

      <button type="submit">Enviar</button>

      </form>

    <h3>Dados:</h3>
    <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}

export default App
