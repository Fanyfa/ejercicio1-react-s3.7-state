import React from 'react';
import './OnionHater.css';

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeColor: ''
    }
    this.hater = this.hater.bind(this);
  }


    hater(event) {
      const textito = event.target.value.toLowerCase();
      if (textito.includes('cebolla')) {
        //alert('No me gusta la cebolla');
        this.setState({
          changeColor: 'hate-onion'
        });
      } else {
        this.setState({
          changeColor: ''
        })
      }
    }

  render() {
    return (
      <div className={`background ${this.state.changeColor}`}>
        <textarea onKeyUp={this.hater}></textarea>
      </div>
     );
    }
  }

export default OnionHater;