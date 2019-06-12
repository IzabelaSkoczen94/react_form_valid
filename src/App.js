import React, {Component} from 'react';
import './App.css';


class App extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    accept: false,

    errors: {
      username: false,
      email: false,
      password: false,
      accept: false,
    }
  }

  //komunikaty
  messages = {
      username_incorect: " Nazwa musi byc dluzsza niz 10 znakow i nie moze zawierac spacji ",
      email_incorect: ' Brak @ w emailu',
      passwsord_incorect: ' Bledne haslo',
      accept_incorect: " Nie potwierdzona zgoda"
  }

  // funkcja do obslugi pol formularza
  handleChange = (e) => {
    //name - username, email, password
    const name = e.target.name;
    const type = e.target.type;

    if(type === "text" || type === "password" || type === "email"){
    //value
    const value = e.target.value;
    //do checkboxa
    this.setState({
        [name]: value
    })
  } else if(type === "checkbox") {
   const checked = e.target.checked;
   this.setState({
    [name]: checked
})
  }

}
    
  handleSubmit = (e) => {

    //domysle wysylanie
    e.preventDefault()
    console.log("dziala")
  }


  render() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="user">
          Twoje imie:
        <input type="text" id="user" name="username"
        value={this.state.username} onChange={this.handleChange}/>
        {this.state.errors.username && <span>
        {this.messages.username_incorect}</span>}

        </label>
        <label htmlFor="email">
          Twoj adres email:
        <input type="text" id="email" name="email"
        value={this.state.email} onChange={this.handleChange}/>
        {this.state.errors.email && <span>
        {this.messages.email_incorect}</span>}
        </label>
        
        <label htmlFor="password">
          Haslo:
        <input type="text" id="password" name="password"
        value={this.state.password} onChange={this.handleChange}/>
        {this.state.errors.password && <span>
        {this.messages.password_incorect}</span>}
        </label>
       
       <label htmlFor="accept">
         <input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange}/>Wyrazam zgode
         {this.state.errors.accept && <span>
        {this.messages.accept_incorect}</span>}
       </label>

       <button>Zapisz</button>
      </form>
    </div>
  );
}
}

export default App;










