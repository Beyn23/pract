import React, { Component } from 'react'
import './masters.css'
import { Link } from 'react-router-dom'

export default class Masters extends Component {
  constructor(props){
    super(props);

    this.state={
      masters:[]
    };
  }
  componentDidMount(){
    fetch("http://localhost/zhuk_tattoo/?masters").then(r => r.json())
    .then(res=>{
      this.setState({
        masters:res
      });
    });
  }
  render() {
    return (
      <div>
        <section id='masters'>
            <h1>Наши мастера</h1>
            <div id='master_table'>
               {
                 this.state.masters.map((el,i)=> <div key={i}>
                 <div className='circle'>
                   <img src={el.photo} alt='master' />
                   <div className='info'>
                     <Link to='/Petr'><p>Подробнее</p></Link>
                   </div>
                 </div>
                 <h2>{el.fio}</h2>
                 <p>Тату-мастер</p>
               </div>)
               }
            </div>
        </section>
      </div>
    )
  }
}
