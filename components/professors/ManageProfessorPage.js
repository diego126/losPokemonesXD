import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProfessors, saveProfessor } from "../../redux/actions/professorActions";
import PropTypes from "prop-types";
import ProfessorForm from "./ProfessorForm";
import { newProfessor } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

export function ManageProfessorPage({
  professors,
  getProfessors,
  saveProfessor,
  history,
  ...props
}) {
  const [professor, setProfessor] = useState({ ...props.professor });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (professors.length === 0) {
      getProfessors().catch(error => {
        alert("Loading professors failed" + error);
      });
    } else {
      setProfessor({ ...props.professor });
    }
  }, [props.professor]);


  function handleChange(event) {
    const {name,value}=event.target;        
    setProfessor(prevProfessor => ({
      ...prevProfessor,
      [name]: name === "professorId" ? parseInt(value, 10) : value
    }));
  }

  function formIsValid() {
    const { name, grado } = professor;
    const errors = {};

    if (!name) errors.title = "Name is required.";
    if (!grado) errors.title = "Grado is required.";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveProfessor(professor)
      .then(() => {
        toast.success("Professor saved.");
        history.push("/professors");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return professors.length === 0 ? (
    <Spinner />
  ) : (
      <ProfessorForm
        professor={professor}
        errors={errors}
        onChange={handleChange}
        onSave={handleSave}
        saving={saving}
      />
    );
}

  ManageProfessorPage.propTypes = {
  professor: PropTypes.object.isRequired,
  professors: PropTypes.array.isRequired,
  getProfessors: PropTypes.func.isRequired,
  saveProfessor: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getProfessorBySlug(professors, slug) {
  return professors.find(professor => professor.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const professor =
    slug && state.professors.length > 0
      ? getProfessorBySlug(state.professors, slug)
      : newProfessor;
  return {
    professor,
    professors: state.professors
  };
}

const mapDispatchToProps = {
  getProfessors,
  saveProfessor
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageProfessorPage);
