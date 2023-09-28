
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="flex w-4/5 max-w-screen-xl">
    {/* Columna izquierda: Formulario */}
    <div className="w-1/2 h-full">
      <div className="bg-white p-10 rounded-lg shadow-lg h-full">
        <h2 className="text-4xl font-semibold mb-6">Bienvenido a SUMA</h2>
        <form className="h-full flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <select
                id="role"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 outline-none text-opacity-70"
              >
                <option value="" selected>Selecciona un Perfil</option>
                <option value="">Usuario</option>
                <option value="">Administrador</option>
              </select>
            </div>
            <div className="mb-6">
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 outline-none"
                placeholder="Nombre de usuario"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 outline-none"
                placeholder="Contraseña"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
    
    {/* Columna derecha: Imagen */}
    <div className="w-1/2">
      {/* Reemplaza la siguiente línea con la URL de tu imagen */}
      <img
        src="https://via.placeholder.com/400x400" // URL de ejemplo, debes reemplazarla
        alt="Imagen de fondo"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
</div>

  );
}

export default App;
