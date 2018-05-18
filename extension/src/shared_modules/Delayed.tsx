import * as React from "react";

class Delayed extends React.Component<{ delay: number }, any> {
  constructor(props) {
    super(props);
    this.state = {shown: false};
  }

  componentDidMount() {
    setTimeout(() => this.setState({shown: true}), this.props.delay);
  }

  render() {
    return this.state.shown && this.props.children;
  }
}

export default Delayed;
