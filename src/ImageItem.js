import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <li>
                <div className ="info-container">
                    <h2>{this.props.creature.title}</h2>
                    <p className="horns">Horn Amount = {this.props.creature.horns} </p>
                </div>
                <div className="image">
                    <img 
                    src={this.props.creature.url}
                    alt={this.props.creature.url}>
                    </img>
                </div>
                    <p className="image-descprition">{this.props.creature.description}</p>
                
            </li>
        )
    }
}
