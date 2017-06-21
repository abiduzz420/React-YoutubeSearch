import React, { Component } from 'react';
import { FormControl, InputGroup, Glyphicon, FormGroup } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onInputChange = event => {
    this.setState({
      term: event.target.value
    });
    this.props.onSearchTermChange(event.target.value);
  };

  render() {
    return (
      <FormGroup className="search-bar">
        <InputGroup>
          <FormControl
            placeholder="Enter something here..."
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <InputGroup.Addon>
            <Glyphicon glyph="search" />
          </InputGroup.Addon>
        </InputGroup>
      </FormGroup>
    );
  }
}

export default SearchBar;
