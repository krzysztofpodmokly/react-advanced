import React from 'react';

// function which accepts component
const withCollapse = WrappedComponent => {
  return class WithCollapse extends React.Component {
    state = {
      isCollapsed: false
    };

    toggle = () => {
      this.setState(prevState => ({
        isCollapsed: !prevState.isCollapsed
      }));
    };

    render() {
      return (
        <WrappedComponent
          toggle={this.toggle}
          isCollapsed={this.state.isCollapsed}
        />
      );
    }
  };
};

export default withCollapse;
