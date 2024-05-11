import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateEmail } from 'src/app/shared/utils/email-validator';
import {passMatch} from 'src/app/shared/utils/pass-match'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
   

  ) {}
  form: FormGroup = {} as FormGroup;
ngOnInit(): void {
  //ccsdzxzx
  this.form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required,  ]],
  
   tel: ['', [Validators.required, Validators.minLength(7)]],
     passGroup: this.fb.group(
      {
        password: ['', [Validators.required]],
        rePassword: ['', [Validators.required]],
      },
      {
        validators: [passMatch('password', 'rePassword')],
      }
    ),
  });
}

 

  get passGroup() {
    debugger
    return this.form.get('passGroup');
  }


 

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const {
      name,
      email,
      tel,
       password, 
       rePassword ,
    } = this.form.value;

console.log(password);

    this.userService
      .register(name!, email!, tel!, password!, rePassword!)
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }
}

//   constructor(private userService: UserService, private router: Router) { }


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
