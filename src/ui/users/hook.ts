import axios from "axios";
import { useState } from "react";

export function useHookUsersAdmin() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [userSelected, setUserSelected] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [users, setUsers] = useState([]);

  const changeModalDelete = (user: any) => {
    setUserSelected(user);
    setOpenModal(!openModal);
  };

  const changeModalEdit = (user: any) => {
    setUserSelected(user);
    setOpenModalEdit(!openModalEdit);
  };

  async function fetchUsers() {
    const response = await axios.get("/api/users");
    setUsers(response.data.data);
    setIsFetching(false);
  }

  return {
    openModal,
    openModalEdit,
    userSelected,
    isFetching,
    users,
    changeModalDelete,
    changeModalEdit,
    fetchUsers,
  };
}
