"use client";
import { useEffect, useState } from "react";
import Modal from "react-modal";

function ModalEdit({
  user,
  openModal,
  changeModal,
}: {
  user: any;
  openModal: boolean;
  changeModal: any;
}) {
  const [data, setData] = useState({
    name: "",
    dni: "",
    active: false,
    password: "",
  });

  useEffect(() => {
    setData({
      ...data,
      name: user.name,
      dni: user.dni,
      active: user.active,
      password: "",
    });
  }, [user]);

  async function handleSubmit(e: any) {
    e.preventDefault();
  }

  return (
    <Modal
      ariaHideApp={false}
      isOpen={openModal}
      style={{
        overlay: {
          backgroundColor: "rgb(0,0,0,0.5)", // Fondo oscuro
        },
        content: {
          width: "50%", // Cambia el tamaño del contenido
          height: "85%", // Cambia el tamaño del contenido
          margin: "auto", // Centra el contenido
          padding: "20px", // Agrega padding al contenido
          borderRadius: "10px", // Redondea las esquinas
        },
      }}
    >
      <div className="flex flex-col h-full">
        <header className="mb-4">
          <h2 className="font-semibold text-xl">Editar usuario</h2>
        </header>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="mb-2">
                Nombres
              </label>
              <input
                className="px-2 py-2 border border-slate-500 outline-none rounded-md"
                type="text"
                defaultValue={data.name}
                required
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="mb-2">
                Dni
              </label>
              <input
                className="px-2 py-2 border border-slate-500 outline-none rounded-md"
                type="text"
                value={data.dni ? data.dni : ""}
                required
                onChange={(e) => setData({ ...data, dni: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="mb-2">
                Estado
              </label>
              <select
                defaultValue={data.active === true ? "0" : "1"}
                onChange={(e) =>
                  setData({
                    ...data,
                    active: e.target.value === "1" ? true : false,
                  })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option value="1">ACTIVO</option>
                <option value="0">INACTIVO</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="mb-2">
                Ingresar contraseña
              </label>
              <input
                className="px-2 py-2 border border-slate-500 outline-none rounded-md mb-4"
                type="password"
                defaultValue={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                required
              />
            </div>

            <div className="mb-8 text-sm text-slate-400">
              <strong>Nota</strong>
              <p>
                La modificación del usuario no alterará las referencias de los
                registros realizados por la misma.
              </p>
            </div>
            <div className="flex flex-row justify-end gap-4">
              <button className="bg-green-600 text-white rounded-md px-2 py-1 w-fit ">
                Guardar cambios
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
  );
}

export default ModalEdit;
