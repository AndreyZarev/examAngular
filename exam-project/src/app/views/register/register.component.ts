import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgModel, NgForm } from '@angular/forms';
import { validateEmail } from 'src/app/shared/utils/email-validator';
import {passMatch} from 'src/app/shared/utils/pass-match'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private userService: UserService,
    private router: Router,
   

  ) {}
  

 
  register(form: NgForm): void {

    // console.log(form.value);

    if (form.invalid) {
      alert('Your form is invalid, please follow the text below the fields.')
      return;
    }

    try {
      const { email, password,rePassword } = form.value
      debugger
      this.userService.register(email, password).subscribe(() => {
        // localStorage.setItem("user", email)
        this.router.navigate(['/home']);
      });


    } catch (err) {
      console.log(err);
    }

  }

}

 



 

//   register(): void {
//     if (this.form.invalid) {
//       return alert('Invalid form');
//     }

//     const {
    
//       email,
     
//        password, 
//        rePassword ,
//     } = this.form.value;


//     this.userService
//       .register( email!, password!)
//       .subscribe(() => {
//         this.router.navigate(['/home']);
//       });
//   }
// }


//   clicked: boolean = true;
//   registerButton() {

//     this.clicked = !this.clicked
//     return this.clicked;
//   }


//   register(): void {
   
//     try {
//       this.userService.register()
//       this.userService.login()


//     } catch (err) {
//       console.log(err);
//     }
//     this.router.navigate(['/home'])

//   }
// }
