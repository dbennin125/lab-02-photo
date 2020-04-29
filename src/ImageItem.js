import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <li>
                <div className ="info-container">
                    <h2>{this.props.creature.title}</h2>
                    <p className="horns">Horn Amount = {this.props.creature.horns} </p>
                    <p className="image-descprition">{this.props.creature.description}</p>
                </div>
                <div className="image-container">
                    <img 
                    src={this.props.creature.url}
                    alt={this.props.creature.url}>
                    </img>
                </div>
                
            </li>
        )
    }
}
