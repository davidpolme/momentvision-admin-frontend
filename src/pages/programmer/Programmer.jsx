import React from "react";
import "./Programmer.scss";

import { sendProgrammerApi } from "../../api/programmerApi.js";
const Programmer = () => {
  const validateForm = (
    name,
    initialDate,
    initialHour,
    endDate,
    endHour,
    description
  ) => {
    //check if the fields are empty
    if (
      name === "" ||
      initialDate === "" ||
      initialHour === "" ||
      endDate === "" ||
      endHour === "" ||
      description === ""
    ) {
      alert("Todos los campos son obligatorios");
      return true;
    }
    //check if the initial date is less than the end date
    if (initialDate > endDate) {
      alert("La fecha de inicio no puede ser mayor a la fecha de fin");
      return true;
    }
    //check if the initial date is equal to the end date
    if (initialDate === endDate) {
      //check if the initial hour is less than the end hour
      if (initialHour > endHour) {
        alert("La hora de inicio no puede ser mayor a la hora de fin");
        return true;
      }
    }
    return false;
  };

  const cleanForm = () => {
    document.getElementById("name").value = "";
    document.getElementById("initial-date").value = "";
    document.getElementById("initial-hour").value = "";
    document.getElementById("end-date").value = "";
    document.getElementById("end-hour").value = "";
    document.getElementById("description").value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //save the data in variables
    const name = e.target.name.value;
    const initialDate = e.target["initial-date"].value;
    const initialHour = e.target["initial-hour"].value;
    const endDate = e.target["end-date"].value;
    const endHour = e.target["end-hour"].value;
    const description = e.target.description.value;
    const errorsInForm=validateForm(name, initialDate, initialHour, endDate, endHour, description);
    if(errorsInForm){
      return;
    }
    //create the object
    const event = {
      name,
      initialDate,
      initialHour,
      endDate,
      endHour,
      description,
    };
    try{

      //send the object to the server
      const response = await sendProgrammerApi(event);
      if (response.status === 200) {
        alert("Evento creado correctamente");
      }
    }catch(error){
      alert("Error al crear el evento");
    }

    //clean the form
    cleanForm();
    
  };

  return (
    <div className="programmer">
      <h1 className="programmer__title">Programmer</h1>

      <form className="programmer__form" onSubmit={(e) => handleSubmit(e)}>
        <div className="programmer__form__group">
          <label className="programmer__form__group__label" htmlFor="name">
            Nombre del evento
          </label>
          <input
            className="programmer__form__group__input"
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="dates">
          <div className="initial-date">
            <div className="programmer__form__group">
              <label
                className="programmer__form__group__label"
                htmlFor="initial-date"
              >
                Fecha de inicio
              </label>
              <input
                className="programmer__form__group__input"
                type="date"
                id="initial-date"
                name="initial-date"
              />
            </div>

            <div className="programmer__form__group">
              <label
                className="programmer__form__group__label"
                htmlFor="initial-hour"
              >
                Hora de inicio
              </label>
              <input
                className="programmer__form__group__input"
                type="time"
                id="initial-hour"
                name="initial-hour"
              />
            </div>
          </div>

          <div className="end-date">
            <div className="programmer__form__group">
              <label
                className="programmer__form__group__label"
                htmlFor="end-date"
              >
                Fecha de fin
              </label>
              <input
                className="programmer__form__group__input"
                type="date"
                id="end-date"
                name="end-date"
              />
            </div>

            <div className="programmer__form__group">
              <label
                className="programmer__form__group__label"
                htmlFor="end-hour"
              >
                Hora de fin
              </label>
              <input
                className="programmer__form__group__input"
                type="time"
                id="end-hour"
                name="end-hour"
              />
            </div>
          </div>
        </div>

        <div className="programmer__form__group">
          <label
            className="programmer__form__group__label"
            htmlFor="description"
          >
            Descripción
          </label>
          <textarea
            className="programmer__form__group__input"
            id="description"
            name="description"
          />
        </div>
        <div className="programmer__form__group">
          <button className="programmer__form__group__button" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Programmer;
