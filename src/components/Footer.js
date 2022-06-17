import React, { Component } from 'react'
import map from './img/map.png';
import VK  from './img/VK.svg';
import Yan from './img/Yandex.svg'
import './map.css'

export default class Footer extends Component {
  render() {
    return (
      <div>
          <footer>
            <div>
                <p id='Zhuk'>ZhukTattoo</p>
            </div>
            <div id='links'>
                <a href='https://vk.com/b_e_y_n'><img src={VK}/></a><p>vk.com/zhuk_tattoo_tut</p>
                <a href="https://clck.ru/DYoi3"><img src={Yan}/></a><p>yandex.ru/zhuk_tattoo</p>
            </div>
        </footer>
      </div>
    )
  }
}
