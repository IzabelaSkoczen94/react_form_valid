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

  // funkcja do obslugi pól formularza
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

    //-----------------
    const validation = this.formValidation()
    //-----------------
    console.log(validation)

    //funkcja zwracjąca odpowiedz czy pozytywna czy negatywna
    if(validation.correct) {
      //wyzerowanie
      this.setState({
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
      })
    } else {
      this.setState({
        errors: {
          username: true,
          email: true,
          password: true,
          accept: true,
      }
      })
      console.log("Formularz wysłany")
    }
  }

  formValidation = () => {
    //do zmiennych przypisuje bo chce te dane później przetwarzać
    let username = false;
    let email = false;
    let password = false;
    let accept = false;
    //czy formularz jest ok
    let correct = false;

    //username
    //index Of 1 lub -1 zwraca (gdy nie ma spacji -1, gdy sa jakies znaki albo spacja od 1 w gore)
    if(this.state.username.length > 10 && this.state.username.indexOf(' ') === -1)
    {
      username = true
    }

    //email (indexOf gdy -1  to znaczy ze nie ma
    if(this.state.email.indexOf('@') !== -1 && this.state.username.indexOf(' ') === -1)
    {
      email = true
    }

    //password
    if(this.state.password.length === 8) {
      password = true
    }

    //accept
    if(this.state.accept) {
        accept = true
    }

    //correct 
    if(username && email  && password && accept)
    {
      correct = true
    }

    return ({

      errors: {
        username, email, correct, accept, password
    }
    })

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










