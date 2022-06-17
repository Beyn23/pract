import React, { Component } from 'react'
import './FAQ.css'

import color1 from './img/FAQ/c1.png'
import color2 from './img/FAQ/c2.png'
import color3 from './img/FAQ/c3.png'


export default class FAQ extends Component {
  render() {
    return (
      <div>
          <section className='FAQ' id='FAQ'>
            <div className='block'>
                <img src={color1} className='color'/>
                <p>Как<br/>подготовиться<br/> к сеансу</p>
            </div>
            <div className='block'>
                <img src={color2} className='color'/>
                <p>Что писать<br/> тату-мастеру?</p>
            </div>
            <div className='block'>
                <img src={color3} className='color'/>
                <p>Способ ухода за<br/> татуировкой</p>
            </div>
          </section>
      </div>
    )
  }
}
