import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
   
    var username=f.value.username;
    var password=f.value.password;
    console.log(`onSubmit: ${username}, ${password}`);  // { first: '', last: '' }
    console.log(f);

    var result = this.Auth.login(username, password);
    if(result.isSuccess) {
      this.router.navigate(['admin']);
    }
    else {
      window.alert(result.message);
    }
    // create/update/delete method to save form values
    // route redirect to main page here...
   }

}
