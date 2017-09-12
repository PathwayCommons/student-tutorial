const React = require('react');
const ReactDOM = require('react-dom');
const h = require('react-hyperscript');

class Component extends React.Component {
  constructor( props ){
    super( props );

    this.state = {
      clicks: 0
    };
  }

  click(){
    let s = this.state;

    this.setState({ clicks: s.clicks + 1 });
  }

  render(){
    let clicks = this.state.clicks;

    return h('button.component', {
      id: this.props.foo,
      onClick: event => this.click()
    }, `Hello world ${clicks}!`);
  }
}

window.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    h(Component, { foo: 'bar' }),
    // <Component foo="bar"></Component>
    document.getElementById('root')
  );
});
