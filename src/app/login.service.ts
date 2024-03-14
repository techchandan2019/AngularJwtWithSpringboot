import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:4042/JpaSecurity/test"

  constructor(private httpClient:HttpClient) { }

  generateToken(credential:any){
    return this.httpClient.post(`${this.url}/authenticate`,credential);
  }

  loginUser(token:string){
    localStorage.setItem("token",token);
    return true;
  }
  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined || token=="" || token==null)
      return false;
    else
      return true;
  }
  logout(){
    localStorage.removeItem("token");
    return true;
  }
  getToken(){
    return localStorage.getItem("token");
  }
}
