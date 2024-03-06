import React from 'react';
import ReactDOM from 'react-dom/client';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

let root = ReactDOM.createRoot(document.getElementById('nav'));
root.render(<Navbar />);

export default Navbar;