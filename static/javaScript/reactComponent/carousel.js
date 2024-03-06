import React from 'react';
import ReactDOM from 'react-dom/client';

class Carousel extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

let root = ReactDOM.createRoot(document.getElementById('nav'));
root.render(<Carousel />);
export default Carousel;