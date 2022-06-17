import React, { Component } from 'react'
import './services.css'

export default class Services extends Component {
  render(){
    return(
      <div className='services'>
          <h1>Услуги</h1>
          <section className='services_table'>
            <div id='tattoo_back'><p>Татуировка</p></div>
            <div id='deltattoo_back'><p>Удаление тату</p></div>
            <div id='piecring_back'><p>Пирсинг</p></div>
            <div id='sketch_back'><p>Разработка эскизов</p></div>
          </section>
      </div>
    )
  }
}
