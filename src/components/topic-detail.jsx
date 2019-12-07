import React, { Component } from "react";
import {Link} from 'react-router-dom'

class TopicDetail extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Este es el detalle del {this.props.match.params.id}
        <div>
          <button
            onClick={() => {
              this.props.history.goBack();
            }}
          >
            Volver
          </button>
          <button
            onClick={() => {
              this.props.history.push('/home');
            }}
          >
            Ir Home
          </button>
          <Link to="/about" >Ir about</Link>
        </div>
      </div>
    );
  }
}

export default TopicDetail;
