import React from "react";
import TabPanel from "../admin/tabs/TabsPanel";
import { useEffect, useState } from "react";
import { ImExit } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
import { TbKey } from "react-icons/tb";
import "./AdminStyle.css";

function AdminPage({
  phones,
  setPhones,
  tablets,
  setTablets,
  watches,
  setWatches,
  laptops,
  setLaptops,
}) {
  const [showAdminPanel, setStatusAdminPanel] = useState(false);
  const [admin, setAdmin] = useState();
  const [adminForm, setAdminForm] = useState({
    name: "",
    password: "",
  });

  const changeHandler = (event) => {
    setAdminForm({
      ...adminForm,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const onLogAdmin = () => {
    if (
      admin.name === adminForm.name &&
      admin.password === adminForm.password
    ) {
      setStatusAdminPanel(true);
    } else {
      alert("Данные неправильные");
    }
  };

  useEffect(() => {
    fetch("http://localhost:5555/AdminPage")
      .then((response) => response.json())
      .then((data) => setAdmin(data[0]));
  }, []);

  return (
    <>
      {showAdminPanel ? (
        <TabPanel
          setPhones={setPhones}
          phones={phones}
          tablets={tablets}
          setTablets={setTablets}
          watches={watches}
          setWatches={setWatches}
          laptops={laptops}
          setLaptops={setLaptops}
        />
      ) : (
        <div className="container-form">
          <div className="wrapper-from-group">
            <div className="icon-admin__page">
              <ImExit size={28} />
            </div>
            <div className="block-admin__name">
              <AiOutlineUser className="block-admin__icon"/>
              <input
                className="admin-name"
                type="text"
                name="name"
                placeholder="Введите имя"
                onChange={changeHandler}
              />
            </div>
            <div className="block-admin__password">
              <TbKey className="block-password__icon"/>
              <input
                className="admin-password"
                type="password"
                name="password"
                placeholder="Введите пароль"
                onChange={changeHandler}
              />
            </div>
            <div>
              <button className="admin-btn" onClick={onLogAdmin}>
                Войти
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminPage;
