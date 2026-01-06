export default function Estilos() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ======================================================
              COLUMNA IZQUIERDA · TIPOGRAFÍA
          ====================================================== */}
          <div className="space-y-12">

            {/* ENCABEZADOS */}
            <section className="space-y-3">
              <h2 className="text-md-sumimas ">
                Tipografía · Encabezados
              </h2>

              <div className="space-y-2">
                <h1>Este es el título (H1)</h1>
                <h2>Este es el subtítulo (H2)</h2>
                <h3>Este es un encabezado H3</h3>
              </div>
            </section>

            {/* PÁRRAFOS */}
            <section className="space-y-3">
              <h2 className="text-md-sumimas ">
                Tipografía · Párrafos
              </h2>

              <div className="space-y-2">
                <p>
                  Este es un párrafo de ejemplo usando el texto primario del sistema.
                </p>
                <p className="subtitle">
                  Este es un párrafo secundario (subtitle), usado para descripciones
                  o información complementaria.
                </p>
              </div>
            </section>

            {/* ESCALA */}
            <section className="space-y-3">
              <h2 className="text-md-sumimas ">
                Tipografía · Escala de tamaños
              </h2>

              <div className="grid grid-cols-2 gap-2">
                <div className="text-xxs-sumimas">Texto xxs</div>
                <div className="text-xs-sumimas">Texto xs</div>
                <div className="text-sm-sumimas">Texto sm</div>
                <div className="text-base-sumimas">Texto base</div>
                <div className="text-md-sumimas">Texto md</div>
                <div className="text-lg-sumimas">Texto lg</div>
              </div>
            </section>

          </div>

          {/* ======================================================
              COLUMNA CENTRAL · BOTONES Y ALERTAS
          ====================================================== */}
          <div className="space-y-12">

            {/* BOTONES */}
            <section className="space-y-3">
              <h2 className="text-md-sumimas ">
                Botones
              </h2>

              <div className="flex gap-4 flex-wrap">
                <button className="btn-uno ">
                  Botón primario
                </button>

                <button className="btn-dos">
                  Botón secundario
                </button>
                <button className="btn-cancelar">
                  Botón cancelar
                </button>
                <button className="btn-confirmar">
                  Botón confirmar
                </button>
              </div>
            </section>

            {/* ALERTAS */}
            <section className="space-y-3">
              <h2 className="text-md-sumimas ">
                Alertas
              </h2>

              <div className="space-y-3">
                <div className="alert alert-info">
                  Alerta informativa: mensaje neutral para el usuario.
                </div>

                <div className="alert alert-warning">
                  Alerta de advertencia: acción que requiere atención.
                </div>

                <div className="alert alert-success">
                  Alerta de éxito: operación realizada correctamente.
                </div>

                <div className="alert alert-danger">
                  Alerta de error: ocurrió un problema inesperado.
                </div>
              </div>
            </section>

          </div>

          {/* ======================================================
              COLUMNA DERECHA · FORMULARIOS
          ====================================================== */}
          <div className="space-y-12">

            <section className="space-y-3">
              <h2 className="text-md-sumimas font-medium">
                Formularios
              </h2>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label>Correo electrónico</label>
                  <input
                    className="input w-full"
                    placeholder="usuario@correo.com"
                  />
                </div>

                <div className="space-y-1">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    className="input w-full"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </section>

          </div>

        </div>
      </div>
    </div>
  );
}
