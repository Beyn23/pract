import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import './Account.css'


export default class Personal_Account extends Component {
  render() {
    return (
      <div className='per_acc'>
        <Header/>
        <section>

          <article id='menu_account'>
            <button>Записи</button>
            <button>Расписание</button>
            <button>Галерея</button>
          </article>

          <article>

          </article>
        </section>
        <Footer/>
      </div>
    )
  }
}
