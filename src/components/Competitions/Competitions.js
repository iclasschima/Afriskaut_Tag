/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Table from "./Table";
import "../../styles/competition.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompetitions } from "../../store/actions/competition";

export default function Teams() {
  const history = useHistory();

  const { competitions } = useSelector((state) => state.competition);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompetitions());
  }, []);

  return (
    <div className="competitions container-fluid">
      <div className="row my-4">
        <div className="col-12 d-flex align-items-center justify-content-between">
          <p className="header">
            <i className="mdi mdi-trophy-outline mr-2" />
            Competitions
          </p>

          <button
            className="btn btn-xs primary-btn ml-auto"
            onClick={() => history.push("/add-competition")}
          >
            <i className="mdi mdi-plus mr-1" />
            Create Competition
          </button>
        </div>
      </div>
      <div className=" inner-content-wrapper py-4 px-3">
        <Table competitions={competitions || []} />
      </div>
    </div>
  );
}
