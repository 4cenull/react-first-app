import React from 'react';

//制御されたコンポーネント
//Reactでは、stateを"信頼できる唯一の情報源"とする
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    alert('A name was submitted: ' + this.state.value);
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="submit" />
    </form>
    );
  }
}

export { NameForm };