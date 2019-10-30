import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'First';
  inputedValue:string;
  buttonValue: string;

  isLoginClicked = false;
  isRegisterClicked = false;

  houses = [
    {
      city: 'Lviv',
      street: 'Shevchenka',
      price: 450000

    },
    {
      city: 'Kyiv',
      street: 'Kotova',
      price: 28000

    },
    {
      city: 'Odessa',
      street: 'Derybasivska',
      price: 100000

    }
  ]





  setName(ev) {
    this.inputedValue = ev.target.value;
  }
  buttonClick() {
  this.buttonValue = this.inputedValue
  }

  showLoginForm (){
  this.isLoginClicked = !this.isLoginClicked;
  this.isRegisterClicked = false;
}
  showRegisterForm (){
    this.isRegisterClicked = !this.isRegisterClicked;
    this.isLoginClicked = false;
  }

}



