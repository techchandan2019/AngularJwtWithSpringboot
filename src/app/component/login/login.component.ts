import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential={
    usn:"",
    pwd:""
  }
  constructor(private service:LoginService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.credential.usn!="" && this.credential.pwd!=""){

      
      this.service.generateToken(this.credential).subscribe((response:any)=>{
        console.log(response.accessToken);
        console.log(response.tokenId);
        this.service.loginUser(response.accessToken);
        window.location.href="/dashboard"
      },(error:any)=>{
        console.log(error);
      });
    }else{
      console.log("cannot pass null value");
    }
   
  }

}
