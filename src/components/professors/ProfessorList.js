import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfessorList = ({ professors, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Nombres</th>
        <th>Grado académico</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {professors.map(professor => {
        return (
          <tr key={professor.id}>
            <td>
              <Link to={"/professor/" + professor.slug}>{professor.name}</Link>
            </td>
            <td>{professor.grado}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(professor)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

ProfessorList.propTypes = {
  professors: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default ProfessorList;
