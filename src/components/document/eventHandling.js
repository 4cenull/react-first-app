import React from 'react';

//イベント処理
//form 要素のデフォルト動作停止
//eは合成(synthetic)イベント
function Form(props) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <div className={props.space}>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
//on/off toggle
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    //JSではクラスのメソッドはデフォルトでバインドされないので、
    //( handleClick() {} )で書くときに、
    //<button onClick={this.handleClick}>としたい時はバインドする必要がある。
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <div className={this.props.space}>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    )
  }
}

export { Form, Toggle };