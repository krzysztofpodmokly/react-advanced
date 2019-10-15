import React from 'react';

// function which accepts component
const withCollapse = WrappedComponent => {
  return class WithCollapse extends React.Component {
    state = {
      isCollapsed: true
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
          {...this.props}
        />
      );
    }
  };
};

export default withCollapse;
