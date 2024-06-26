import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router,) { }

  clicked: boolean = true;
  loginButton() {

    this.clicked = !this.clicked
    return this.clicked;
  }


  login(form: NgForm): void {

    // console.log(form.value);

    if (form.invalid) {
      alert('Your form is invalid, please follow the text below the fields.')
      return;
    }

    try {
      const { email, password } = form.value
      debugger
      this.userService.login(email, password).subscribe(() => {
        this.router.navigate(['/home']);
      });


    } catch (err) {
      console.log(err);
    }

  }
}
// login(form: NgForm) {
//   if (form.invalid) {
//     return;
//   }

//   const { email, password } = form.value;

//   
// }