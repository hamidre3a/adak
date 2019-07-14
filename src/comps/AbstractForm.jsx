import React from 'react';


class AbstractForm extends React.Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });
  commonProps = name => ({
    name, onChange: this.handleChange
  });
}

export default AbstractForm;
