import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RiTShirt2Line } from "react-icons/ri";
import "../../styles/add-players.scss";
import { addTeam } from "../../store/actions/team";

export default function AddPlayers(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const [fields, setfields] = useState([
    { name: "", dob: "", position: "", number: "" },
    { name: "", dob: "", position: "", number: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...location?.state, players: [...fields] };
    dispatch(addTeam({ data, history: props.history }));
  };

  const handleRemove = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setfields([...newFields]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...fields];
    list[index][name] = value;
    setfields([...list]);
  };

  const handleAddField = (e) => {
    e.preventDefault();
    setfields([...fields, { name: "", dob: "", position: "", number: "" }]);
  };

  useEffect(() => {
    console.log(fields);
  }, [fields]);

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
                <Field
                  key={index}
                  data={data}
                  index={index}
                  handleChange={handleChange}
                  handleRemove={handleRemove}
                />
              );
            })}

            <div className="row pl-0 mt-3">
              <div className="col-lg-2 pl-0">
                <button
                  className="btn form-control primary-btn"
                  onClick={handleSubmit}
                >
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

const Field = ({ index, data, handleChange, handleRemove }) => {
  return (
    <>
      <div className="form-row">
        {/* <div className="form-group col">
          <label>Player Image</label>
          <input
            className="form-control"
            type="file"
            name="name"
            placeholder="Obi Femi"
            onChange={(e) => handleChange(e, index)}
          />
        </div> */}

        <div className="form-group col">
          <label>Full Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={(e) => handleChange(e, index)}
            placeholder="Obi Femi"
          />
        </div>
        <div className="form-group col">
          <label>Date Of Birth</label>
          <input
            className="form-control"
            type="date"
            name="dob"
            placeholder="18"
            onChange={(e) => handleChange(e, index)}
          />
        </div>
        <div className="form-group col">
          <label>Position</label>
          <input
            className="form-control"
            type="text"
            name="position"
            placeholder="Forward"
            onChange={(e) => handleChange(e, index)}
          />
        </div>
        <div className="form-group col">
          <label>Shirt Number</label>
          <input
            className="form-control"
            type="number"
            name="number"
            placeholder="20"
            onChange={(e) => handleChange(e, index)}
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
