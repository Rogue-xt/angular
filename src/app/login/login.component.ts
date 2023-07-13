import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="Happy banking with us"
  acno:any=""
  pdata="enter ac no"
  pwd: any;
  login(a:any,b:any){
    this.acno=a.value
    this.pwd=b.value
    console.log(this.acno);
    console.log(this.pwd);
    
    alert("login clicked")
  }
 acnochange(event:any){
  console.log(event.target.value);
  
 }
}
