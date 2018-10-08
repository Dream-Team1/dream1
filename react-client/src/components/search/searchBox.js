import React, { Component } from 'react';
import {form,FormGroup,FormControl} from "react-bootstrap";


class Search extends Component {
  render() {
    return (
      <form>
        <FormGroup>
        <FormControl type="text" placeholder="Normal text" />
        </FormGroup>
      </form>


    )
  }
};

export default Search;
