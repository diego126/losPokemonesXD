import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
//import SelectInput from "../common/SelectInput";

const ProfessorForm = ({
  professor,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{professor.id ? "Edit" : "Add"} Professor</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="name"
        label="Name"
        value={professor.name}
        onChange={onChange}
        error={errors.name}
      />
 
      <TextInput
        name="grado"
        label="Grado"
        value={professor.grado}
        onChange={onChange}
        error={errors.grado}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

ProfessorForm.propTypes = {
  professor: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default ProfessorForm;
