import React from 'react';

// function which accepts component
class Authorisation extends React.Component {
  state = {
    isAuthorised: false
  };

  toggleAuth = () => {
    this.setState(prevState => ({
      isAuthorised: !prevState.isAuthorised
    }));
  };

  render() {
    const { isAuthorised } = this.state;

    const renderProps = {
      isAuthorised,
      toggleAuth: this.toggleAuth
    };

    return this.props.render(renderProps);
  }
}

export default Authorisation;
