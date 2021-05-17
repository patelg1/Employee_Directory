import React, { Component } from "react";
import Search from "../Search";
import Table from "../Table";
import API from "../../utils/API";

class Container extends Component {
  state = {
    search: "",
    employees: [],
    employeesFiltered: [],
    tableSort: "ascend",
  };

  sortByName = () => {
    const { tableSort } = this.state;
    if (tableSort === "ascend") {
      this.state.employeesFiltered.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      this.setState({ tableSort: "descend" });
    }
    if (tableSort === "descend") {
      this.state.employeesFiltered.sort((a, b) =>
        a.name.first < b.name.first ? 1 : -1
      );
      this.setState({ tableSort: "ascend" });
    }
  };

  componentDidMount() {
    API.getEmployeeList().then((response) => {
      this.setState({
        employees: response.data.results,
        employeesFiltered: response.data.results,
      });
    });
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ search: value });
    this.employeeFilter(value);
    console.log(this.state.search);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  employeeFilter = (input) => {
    this.setState({
      employeesFiltered: this.state.employees.filter((employee) => {
        return employee.name.first
          .toUpperCase()
          .concat(" ", employee.name.last.toUpperCase().includes(input));
      }),
    });
    console.log(this.state.employeesFiltered);
  };

  render() {
    return (
      <div>
        <Search
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <Table
          state={this.state}
          employeeFilter={this.employeesFiltered}
          sortByName={this.sortByName}
        />
      </div>
    );
  }
}

export default Container;
