import React, { Component } from 'react'
import './gallery.css';


  // render() {
  // return <div>
  // <button onClick=()=>{
  //    setShow(‘tattoo’)
  // }>тату</button>
  // <button onClick=()=>{
  //    setShow(‘piercing’)
  // }>пирс</button>
  // <div className=’gallery’>
  //  {this.data[this.show]
  //        .map((el, i) => <img src={el} alt=’photo’ key={i} />)
  // }
  // </div>
  // }
export default class Gallery extends Component {
  constructor() {
  this.data = {
     tattoo: [1,2,3],
     piercing: [4,5,6]
  }
  this.show = "tattoo";
  }

  setShow(what){
     this.show = what;
  }

  render() {
    return (
      <div className='body_gallery'>
        <section className='effect'>
          <div className='button_gallery'>
            <button onClick={this.setShow('tattoo')}>Татуировка</button>
            <button onClick={this.setShow('piercing')}>Пирсинг</button>
          </div>
          <div className='gallery'>
          {this.data[this.show]
            .map((el, i) => <img src={el} alt='photo' key={i} />)}
          </div>
        </section>
      </div>
    )
  }
}
