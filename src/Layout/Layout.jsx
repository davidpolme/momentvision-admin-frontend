import React from "react";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout__header">
        <h1>Moment Visión</h1>
      </header>
      <main className="layout__content">{children}</main>
      <footer className="layout__footer">
        <p>Created for cloud architecture class - Uniandes - 2023</p>
      </footer>
    </div>
  );
};

export default Layout;
