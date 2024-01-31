"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ModalDelete from "./modal_delete";
import axios from "axios";
import ModalEdit from "./modal_edit";
import { useSession } from "next-auth/react";
import { useHookUsersAdmin } from "./hook";

function UsersAdmin() {
  const { data: session, status } = useSession();

  // const [openModal, setOpenModal] = useState(false);
  // const [openModalEdit, setOpenModalEdit] = useState(false);
  // const [userSelected, setUserSelected] = useState({});
  // const [isFetching, setIsFetching] = useState(true);
  // const [users, setUsers] = useState([]);

  // const changeModalDelete = (user: any) => {
  //   setUserSelected(user);
  //   setOpenModal(!openModal);
  // };

  // const changeModalEdit = (user: any) => {
  //   setUserSelected(user);
  //   setOpenModalEdit(!openModalEdit);
  // };

  // async function fetchUsers() {
  //   const response = await axios.get("/api/users");
  //   setUsers(response.data.data);
  //   setIsFetching(false);
  // }

  const {
    openModal,
    openModalEdit,
    userSelected,
    isFetching,
    users,
    changeModalDelete,
    changeModalEdit,
    fetchUsers,
  } = useHookUsersAdmin();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className=" w-full p-4">
      <div className="flex flex-col">
        <div className="border rounded-md px-3 shadow-md py-3 flex flex-row justify-between gap-4">
          <input
            className="w-full rounded-md outline-none py-1 px-1 border"
            type="text"
            name=""
            id=""
          />
          <div className="flex gap-4 min-w-fit">
            <Link
              className="outline-none rounded-md px-2 py-1 bg-orange-400 border-none"
              href={"/system/users/create"}
            >
              Registrar
            </Link>
            <Link
              className="outline-none rounded-md px-2 py-1 bg-sky-400 border-none"
              href={""}
            >
              Historial de actividades
            </Link>
          </div>
        </div>
        <div className="mt-4 shadow-md p-3 border rounded-md">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nombres
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Rol
                  </th>
                  <th scope="col" className="px-6 py-3">
                    DNI
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Estado
                  </th>
                  <th scope="col" className="px-6 py-3" colSpan={2}>
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {isFetching ? (
                  <tr>
                    <td className="px-6 py-4">Loading...</td>
                  </tr>
                ) : (
                  users.map((user: any, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4">{user.name}</td>
                      <td className="px-6 py-4">{user.role}</td>
                      <td className="px-6 py-4">{user.dni}</td>
                      <td className="px-6 py-4">
                        {user.active ? "ACTIVO" : "INHABILITADO"}
                      </td>
                      <td className="px-6">
                        <button
                          onClick={() => changeModalDelete(user)}
                          className="px-2 py-1 bg-red-600 text-white rounded-md "
                        >
                          Eliminar
                        </button>
                        <button
                          onClick={() => changeModalEdit(user)}
                          className="px-2 py-1 bg-green-600 text-white rounded-md ml-4"
                        >
                          Editar
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* modal */}

      <ModalDelete
        user={userSelected}
        openModal={openModal}
        changeModal={changeModalDelete}
      ></ModalDelete>

      <ModalEdit
        user={userSelected}
        openModal={openModalEdit}
        changeModal={changeModalEdit}
      ></ModalEdit>
    </main>
  );
}

export default UsersAdmin;
