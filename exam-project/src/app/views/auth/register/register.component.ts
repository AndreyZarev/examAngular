import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service-api/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgModel, NgForm } from '@angular/forms';
import { validateEmail } from 'src/app/shared/utils/email-validator';
import { passMatch } from 'src/app/shared/utils/pass-match'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private userService: UserService,
    private router: Router,


  ) { }



  register(form: NgForm): void {

    // console.log(form.value);

    if (form.invalid) {
      alert('Your form is invalid, please follow the text below the fields.')
      return;
    }

    const { email, password, rePassword } = form.value
    debugger
    this.userService.register(email, password).subscribe({
      error: (e) => alert("You have already been registered!"),
      next: (response) => {
        localStorage.setItem('accessToken', response.accessToken);

        this.router.navigate(['/home']);
      }

    }
    )








  }

}







