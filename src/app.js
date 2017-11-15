import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Top</Link></li>
            <li><Link to="/about">このサイトについて</Link></li>
            <li><Link to="/contact">お問い合わせ</Link></li>
          </ul>
          <Route exact path="/" component={TopPage}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </BrowserRouter>
    )
  }
}

class TopPage extends React.Component{
  render(){
    return (
      <h1>トップページです！ようこそ！</h1>
    )
  }
}

class About extends React.Component{
  render(){
    return (
      <h1>このサイトについてです！読んで！</h1>
    )
  }
}

class Contact extends React.Component{
  render(){
    return (
      <h1>お問い合わせです！問い合わせて！</h1>
    )
  }
}

// const TopPage = props => {
//   return (
//     <h1>トップページです！ようこそ！</h1>
//   )
// }
//
// const About = props => {
//   return (
//     <h1>このサイトについてです！読んで！</h1>
//   )
// }
//
// const Contact = props => {
//   return (
//     <h1>お問い合わせです！問い合わせて！</h1>
//   )
// }

render(
  <App />,
  document.getElementById('app')
)
