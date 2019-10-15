import React from 'react';

// function which accepts component
const withAuth = WrappedComponent => {
  return class WithAuth extends React.Component {
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
      return (
        <WrappedComponent
          toggleAuth={this.toggleAuth}
          isAuthorised={isAuthorised}
          {...this.props}
        />
      );
    }
  };
};

export default withAuth;
