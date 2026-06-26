function calcularIMC(peso, alturaCm) {
  const alturaM = alturaCm / 100;
  const imc = peso / (alturaM * alturaM);
  return imc.toFixed(2);
}

function FormularioPersona({ onAgregar }) {
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [edad, setEdad] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [peso, setPeso] = React.useState("");

  function manejarEnvio(evento) {
    evento.preventDefault();

    if (
  nombre.trim() === "" ||
  apellido.trim() === "" ||
  Number(edad) <= 0 || Number(edad) > 120 ||
  Number(altura) <= 0 || Number(altura) > 270 ||
  Number(peso) <= 0 || Number(peso) > 700   
    ) {
      alert("Completá todos los campos correctamente.");
      return;
    }

    const nuevaPersona = {
      nombre: nombre,
      apellido: apellido,
      edad: Number(edad),
      altura: Number(altura),
      peso: Number(peso),
      imc: calcularIMC(Number(peso), Number(altura)),
    };

    onAgregar(nuevaPersona);

    setNombre("");
    setApellido("");
    setEdad("");
    setAltura("");
    setPeso("");
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <div className="campo">
        <label>Nombre</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>

      <div className="campo">
        <label>Apellido</label>
        <input value={apellido} onChange={(e) => setApellido(e.target.value)} />
      </div>

      <div className="campo">
        <label>Edad</label>
        <input type="number" min="0" max="120" value={edad} onChange={(e) => setEdad(e.target.value)} />
      </div>

      <div className="campo">
        <label>Altura (cm)</label>
        <input type="number" min="1" max="270" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </div>

      <div className="campo">
        <label>Peso (kg)</label>
        <input type="number" min="1" max="700" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </div>

      <button type="submit">Agregar persona</button>
    </form>
  );
}

function TablaPersonas({ personas, onQuitar }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Altura (cm)</th>
          <th>Peso (kg)</th>
          <th>IMC</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {personas.map((persona, indice) => (
          <tr key={indice}>
            <td>{persona.nombre}</td>
            <td>{persona.apellido}</td>
            <td>{persona.edad}</td>
            <td>{persona.altura}</td>
            <td>{persona.peso}</td>
            <td>{persona.imc}</td>
            <td>
              <button onClick={() => onQuitar(indice)}>Quitar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [personas, setPersonas] = React.useState([]);

  function agregarPersona(persona) {
    setPersonas([...personas, persona]);
  }

  function quitarPersona(indice) {
    const nuevaLista = personas.filter((_, i) => i !== indice);
    setPersonas(nuevaLista);
  }

  return (
    <div>
      <FormularioPersona onAgregar={agregarPersona} />
      <TablaPersonas personas={personas} onQuitar={quitarPersona} />
    </div>
  );
}

const raiz = ReactDOM.createRoot(document.getElementById("raiz"));
raiz.render(<App />);