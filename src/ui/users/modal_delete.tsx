"use client ";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "react-modal";

function ModalDelete({
  user,
  openModal,
  changeModal,
  setIsfetch,
  isfetch,
}: {
  user?: any;
  openModal: boolean;
  changeModal: any;
  setIsfetch: any;
  isfetch: boolean;
}) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { data: session } = useSession();
  async function handleDelete(e: any) {
    e.preventDefault();
    const format = {
      action: "delete",
      infoAdmin: {
        uuid: session?.user.id,
        password,
      },
      payload: {
        user_deleted_id: user.id,
      },
    };
    try {
      await axios.post("/api/users/action", format);
      setIsfetch(!isfetch);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  }

  return (
    <>
      <Modal
        ariaHideApp={false}
        isOpen={openModal}
        style={{
          overlay: {
            backgroundColor: "rgb(0,0,0,0.5)", // Fondo oscuro
          },
          content: {
            width: "50%", // Cambia el tamaño del contenido
            height: "60%  ", // Cambia el tamaño del contenido
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
            <form onSubmit={handleDelete} className="flex flex-col">
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
                onChange={(e) => setPassword(e.target.value)}
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
              <div className="mt-4 text-red-500 text-sm">
                {error ? "Ocurrio un error al eliminar el usuario" : ""}
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalDelete;
