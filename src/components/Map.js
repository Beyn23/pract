import React, { Component } from 'react'
import './map.css'
import map from './img/map.png';
import VK  from './img/VK.svg';
import Yan from './img/Yandex.svg'

export default class Map extends Component {
  render() {
    return (
      <div>
        <section id='contact'>
            <h2>Контакты</h2>
            <div className='line'></div>
            <div id='address'>
                <p>Россия, Москва,  ул.Живописная, 35 |    8(560)347-26-29 |      </p>
                <div>
                    <a href='https://vk.com/b_e_y_n'><img src={VK}/></a>
                    <a href="https://clck.ru/DYoi3"><img src={Yan}/></a>
                </div>
            </div>
        </section>
        <section id='map'>
            <img src={map}/>
        </section>
      </div>
    )
  }
}
