import React from "react";
import { connect } from "react-redux";
import * as ProfessorActions from "../../redux/actions/professorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ProfessorList from "./ProfessorList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class ProfessorsPage extends React.Component {
  state = {
    redirectToAddProfessorPage: false
  };

  componentDidMount() {
    const { professors, actions } = this.props;

    if (professors.length === 0) {
      actions.getProfessors().catch(error => {
        alert("Loading professors failed" + error);
      });
    }
  }

  handleDeleteProfessor = async professor => {
    toast.success("Professor deleted");
    try {
      await this.props.actions.deleteProfessor(professor);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

  handleBuscarFiltro = () => {
    var valorBuscar=document.getElementById("BuscarText").value;
    if(valorBuscar=="")
    {
      alert("ingrese el profesor a buscar");
      return;
    }
    //alert("hola "+valorBuscar);
    this.props.actions.getProfessorsFilter(valorBuscar);
    //this.props.actions.getCourses();
  };

  handleTodosProfesores = () => {
    
    //alert("hola "+valorBuscar);
    this.props.actions.getProfessors();
    //this.props.actions.getCourses();
  };

  render() {
    return (
      <>
        {this.state.redirectToAddProfessorPage && <Redirect to="/professor" />}
        <h2>Professors</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
            <>
              <button
                style={{ marginBottom: 20 }}
                className="btn btn-primary add-course"
                onClick={() => this.setState({ redirectToAddProfessorPage: true })}
              >
                Add Professors
            </button>

            <input id="BuscarText" className="form-control" type="text" placeholder="Profesor a buscar"></input>
            <button className="btn btn-outline-success my-2 my-sm-0 mr-md-3" onClick={this.handleBuscarFiltro}>Buscar</button>
            <button className="btn btn-outline-success my-2 my-sm-0 mr-md-3" type="submit" onClick={this.handleTodosProfesores}>Todos los profesores</button>

              <ProfessorList
                onDeleteClick={this.handleDeleteProfessor}
                professors={this.props.professors}
              />
            </>
          )}
      </>
    );
  }
}

ProfessorsPage.propTypes = {
  professors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    professors: state.professors,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProfessors: bindActionCreators(ProfessorActions.getProfessors, dispatch),
      deleteProfessor: bindActionCreators(ProfessorActions.deleteProfessor, dispatch),
      getProfessorsFilter: bindActionCreators(ProfessorActions.getProfessorsFilter, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfessorsPage);
