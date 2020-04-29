import React, { Component } from 'react'
import HEADER from './Header.js'
import ImageItem from './ImageItem.js'
import imageData from './data.js';
import './App.css'
 

// const images = {
//   horns: 2,
//   title: 'more',
//   url: 'randomwebsite',
//   description:'word'
// }

export default class App extends Component {
  state = { selected: null };

  handleChange = (e) => {
    this.setState ({ selected: e.target.value });
  }

  render() {
    return (
      <div>
        <header className="newHeader">
         <HEADER />
        </header>

      <main className="main">
        <section className="keyword" onChange={this.handleChange}>
          <select>

          <option className="form-drop" value="" defaultValue>
            Horned Foes by species!
          </option>
          <option value="narwhal">Narwhals</option>
          <option value="rhino">Rhinos</option>
          <option value="unicorn">Unicorn</option>
          <option value="unilego">The Mythical Unilego</option>
          <option value="triceratops">Triceratops</option>
          <option value="markhor">Markhors</option>
          <option value="mouflon">Mouflons</option>
          <option value="addax">Addax</option>
          <option value="chameleon">Chameleons</option>
          <option value="lizard">Lizards</option>
          <option value="dragon">Smaug the infinite</option>
        </select>

        </section>


      </main> 
      
      <section className="list-section">

      <ul className="keyword">
        {
          imageData
          .filter(creature => {
            if(!this.state.selected) return true
            //if nothing is selected the entire array should show
            return creature.keyword === this.state.selected
            //otherwise filter by keyword into new array(with.map) by what is selected in from
          })
          
          .map(whatever => {
            return<ImageItem creature={whatever} />
            
          }) 
        }
      </ul>
        </section>

      </div>
    )
  }
}
