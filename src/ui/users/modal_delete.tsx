"use client ";

import Modal from "react-modal";

function ModalDelete({
  user,
  openModal,
  changeModal,
}: {
  user?: any;
  openModal: boolean;
  changeModal: any;
}) {
  return (
    <>
      <Modal
        isOpen={openModal}
        style={{
          overlay: {
            backgroundColor: "rgb(0,0,0,0.5)", // Fondo oscuro
          },
          content: {
            width: "50%", // Cambia el tamaño del contenido
            height: "50%", // Cambia el tamaño del contenido
            margin: "auto", // Centra el contenido
            padding: "20px", // Agrega padding al contenido
            borderRadius: "10px", // Redondea las esquinas
          },
        }}
      >
        <div className="flex flex-col h-full">
          <header className="mb-4">
            <h2 className="font-semibold text-xl">Eliminar usuario</h2>
          </header>
          <div>
            <form action="" className="flex flex-col">
              <p className="mb-8">
                Para eliminar al usuario, por favor ingrese su contraseña de
                administrador
              </p>
              <label htmlFor="" className="mb-2">
                Ingresar contraseña
              </label>
              <input
                className="px-2 py-2 border border-slate-500 outline-none rounded-md mb-4"
                type="password"
              />
              <div className="mb-8 text-sm text-slate-400">
                <strong>Nota</strong>
                <p>
                  La eliminación del usuario no eliminará las referencias de los
                  registros realizados por la misma.
                </p>
              </div>
              <div className="flex flex-row justify-end gap-4">
                <button className="bg-red-600 text-white rounded-md px-2 py-1 w-fit ">
                  Eliminar usuario
                </button>
                <button
                  onClick={changeModal}
                  className="bg-gray-600 rounded-md px-2 py-1 text-white"
                >
                  Cerrar ventana
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalDelete;
