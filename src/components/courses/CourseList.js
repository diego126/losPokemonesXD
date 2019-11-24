import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  BootstrapTable,
  TableHeaderColumn,
  SearchField
} from "react-bootstrap-table";

class CourseList extends React.Component {  
  constructor(props) {
    super(props);
    this.cellButton = this.cellButton.bind(this);
    this.cellButtonDelete = this.cellButtonDelete.bind(this);
    this.onSortChange = this.onSortChange.bind(this);
  }
  cellButton(cell, row) {
    return <Link to={"/course/" + row.slug}>{row.title}</Link>;
  }
  cellButtonDelete(cell, row) {
    let me = this;
    return (
      <button
        className="btn btn-outline-danger"
        onClick={() => {
          if (window.confirm("Are you sure you wish to delete this item?"))
            me.props.onDeleteClick(row);
        }}
      >
        Delete
      </button>
    );
  }
  createCustomSearchField = props => {
    return <SearchField placeholder="Ingresar palabra clave ..." />;
  };
  onSortChange(sortName, sortOrder) {
    let me = this;
    me.props.onOrder(sortName, sortOrder);
  }
  render() {
    return (
      <div>
        <BootstrapTable
          data={this.props.courses}
          search={false}
          bodyStyle={{ lineHeight: "22px" }}
          options={{
            searchField: this.createCustomSearchField,
            noDataText: "No se encontraron resultados para la consulta",
            onSortChange: this.onSortChange,
            sortName: this.props.sortName,
            sortOrder: this.props.sortOrder,
          }}
        >
          <TableHeaderColumn dataField="id" isKey width="50">
            Id
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="id"
            dataSort
            dataFormat={this.cellButton}
            tdStyle={{ whiteSpace: "normal" }}
            width="250"
          >
            Curso
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="category"
            dataSort
            tdStyle={{ whiteSpace: "normal" }}
          >
            Category
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="ProfessorName"
            dataSort
            tdStyle={{ whiteSpace: "normal" }}
          >
            Professor
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="ProfessorName"
            dataFormat={this.cellButtonDelete}
            dataAlign="center"
          >
            Opcion
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default CourseList;
