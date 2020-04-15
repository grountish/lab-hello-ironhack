import React, { Component } from "react";
import "./App.css";

const Container = () => {
  return (
    <div className="container">
      <header>
        <img
          className="header-img-size"
          src="./images/ironhack-logo.svg"
          alt="Ironhack Logo" />
        <img className="header-img-size2" src="./images/menu-top.svg" alt="Menu Logo" />
      </header>

      <div>
        <h1>
          Say hello to
                    <br />
                    ReactJS
                </h1>
        <p>
          You will learn a Frontend
                    <br />
                    framework from scratch, to
                    <br />
                    become a Ninja Developer.
                </p>
        <div className="space">
          <a href="#" id="btn">Awesome! </a>
        </div>
      </div>
    </div>
  )
}

const Card = (props) => {
  return (
    <div className={'Card'}>
      <img src={props.icon} />
      <h3>{props.title}</h3>
      <h4>{props.text}</h4>
    </div>
  )

}
class App extends Component {
  render() {
    return (

      <div className="App">
        <Container />
        <section className={'icons'}>
          <Card icon={'./images/icon1.png'} title={'Declarative'} text={'React makes it painless to create interactive UIs.'} />
          <Card icon={'./images/icon2.png'} title={'Components'} text={'Build encapsulated component that manange their state'} />
          <Card icon={'./images/icon3.png'} title={'Single Way'} text={'React makes it painless to create interactive UIs.'} />
          <Card icon={'./images/icon4.png'} title={'JSX'} text={'React makes it painless to create interactive UIs.'} />
        </section>
      </div>
    );
  }
}

export default App;