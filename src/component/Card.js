import Info from './Data'
import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
            <div className="card1" >
                {this.props.icon}
                    <div className="card-body">
                        <h5 className="card-title p-3">{this.props.title}</h5>
                        <p className="card-text">{this.props.text}</p>
                    </div>
            </div>
    )
  }
}

export default Card
