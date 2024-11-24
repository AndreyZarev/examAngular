import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ValidatorsDirective } from 'src/app/shared/validators/validators.directive';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) { }

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


    const { email, password } = form.value
    debugger
    this.userService.login(email, password).subscribe({
      next: (response) => {
        // Save the access token
        localStorage.setItem('accessToken', response.accessToken);
        console.log('Access token saved:', response.accessToken);

        // Navigate to home
        this.router.navigate(['/home']);
      },
      error: (e) => alert('Incorrect email or password!')
    });



  }





}
//peter@abv.bg : 123456