import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { RiTShirt2Line } from "react-icons/ri";
import "../../styles/add-players.scss";

export default function AddPlayers() {
  const history = useHistory();

  const [fields, setfields] = useState([
    { player_name: "", age: "", position: "", number: "" },
    { player_name: "", age: "", position: "", number: "" },
  ]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   history.push("/add-players");
  // };

  const handleRemove = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setfields([...newFields])
   
  };

  // const handleChange = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...fields];
  //   list[index][name] = value;
  //   setfields(list);
  // };

  const handleAddField = (e) => {
    e.preventDefault();
    setfields([
      ...fields,
      { player_name: "", age: "", position: "", number: "" },
    ]);
  };

  return (
    <div className="container-fluid add-players">
      <div className="row my-2">
        <p className="header">
          <RiTShirt2Line /> Add Players
        </p>
        <button
          className="btn btn-xs primary-btn ml-auto"
          onClick={() => history.push("/teams")}
        >
          <i className="mdi mdi-arrow-left mr-1" />
          Back
        </button>
      </div>
      <div className="row justify-content-center mt-3 inner-content-wrapper">
        <div className="col-11">
          <form>
            {fields.map((data, index) => {
              return (
                <Field data={data} index={index} handleRemove={handleRemove} />
              );
            })}

            <div className="row pl-0 mt-3">
              <div className="col-lg-2 pl-0">
                <button className="btn form-control primary-btn">
                  Submit Players
                </button>
              </div>
              <div className="col-lg-2 pl-0">
                <button
                  className="btn form-control primary-btn"
                  onClick={handleAddField}
                >
                  Add New Player
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const Field = ({ index, data, handleRemove }) => {
  return (
    <>
      <div className="form-row">
        <div className="form-group col">
          <label>Player Image</label>
          <input
            className="form-control"
            type="file"
            name="name"
            placeholder="Obi Femi"
          />
        </div>

        <div className="form-group col">
          <label>Full Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Obi Femi"
          />
        </div>
        <div className="form-group col">
          <label>Date Of Birth</label>
          <input
            className="form-control"
            type="date"
            name="name"
            placeholder="18"
          />
        </div>
        <div className="form-group col">
          <label>Position</label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Forward"
          />
        </div>
        <div className="form-group col">
          <label>Shirt Number</label>
          <input
            className="form-control"
            type="number"
            name="name"
            placeholder="Obi Femi"
          />
        </div>
        <div className="remove-div">
          <i
            className="mdi mdi-delete-outline"
            onClick={() => handleRemove(index)}
          />
        </div>
      </div>
    </>
  );
};
