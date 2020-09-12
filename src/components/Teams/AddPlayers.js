import React, { useState, useEffect } from "react";
import { RiTShirt2Line } from "react-icons/ri";
import TextField from "@material-ui/core/TextField";
import "../../styles/add-players.scss";

export default function AddPlayers() {
  const [fields, setfields] = useState([
    { player_name: "", age: "", position: "", number: "" },
    { player_name: "", age: "", position: "", number: "" },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...fields];
    list[index][name] = value;
    setfields(list);
  };

  const handleAddField = (e) => {
    e.preventDefault()
    setfields([...fields,  { player_name: "", age: "", position: "", number: "" }])
  }

  useEffect(() => {
    console.log(fields);
  }, [fields]);

  return (
    <div className="container-fluid add-players">
      <div className="row">
        <div className="col-12">
          <p className="header">
            <RiTShirt2Line /> Add Players
          </p>
        </div>
      </div>
      <div className="row justify-content-center mt-1">
        <div className="col-11">
          <form>
            {fields.map((data, index) => {
              return (
                <Field data={data} index={index} handleChange={handleChange} />
              );
            })}

            <div className="row pl-0 mt-3">
              <div className="col-3 pl-0">
                <button className="btn form-control primary-btn">
                  Submit Players
                </button>
              </div>
              <div className="col-3 pl-0">
                <button className="btn form-control primary-btn" onClick={handleAddField}>
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

const Field = ({ index, data, handleChange }) => {
  return (
    <div className="form-group row my-2">
      <div className="col">
        <TextField
          label="Player Name"
          name="player_name"
          value={data.player_name}
          size="small"
          variant="outlined"
          onChange={(e) => handleChange(e, index)}
        />
      </div>

      <div className="col">
        <TextField
          label="Age"
          name="age"
          value={data.age}
          type="number"
          size="small"
          variant="outlined"
          onChange={(e) => handleChange(e, index)}
        />
      </div>

      <div className="col">
        <TextField
          label="Position"
          name="position"
          value={data.position}
          size="small"
          variant="outlined"
          onChange={(e) => handleChange(e, index)}
        />
      </div>
      <div className="col">
        <TextField
          label="Shirt Number"
          name="number"
          value={data.number}
          type="number"
          size="small"
          variant="outlined"
          onChange={(e) => handleChange(e, index)}
        />
      </div>
    </div>
  );
};
