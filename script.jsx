class Mark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:
        "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n"
    };
    this.markUp = this.markUp.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }
  markUp(value) {
    var markup = marked(value, { sanitize: true });
    return { __html: markup };
  }
  updateValue(mvalue) {
    this.setState({ value: mvalue });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <RawInput value={this.state.value} updateValue={this.updateValue} />
        </div>
        <div className="col-md-6">
          <span dangerouslySetInnerHTML={this.markUp(this.state.value)} />
        </div>
      </div>
    );
  }
}

class RawInput extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }
  update() {
    var modifiedValue = this.refs.inputValue.value;
    this.props.updateValue(modifiedValue);
  }
  render() {
    return (
      <textarea
        rows="30"
        cols='65'
        type="text"
        ref="inputValue"
        value={this.props.value}
        onChange={this.update}
      />
    );
  }
}

ReactDOM.render(<Mark />, document.getElementById("container"));
