import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRegister } from '../interface/iregister';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }

  addRegister(register:IRegister){
    this.httpClient.post<IRegister>("https://localhost:44325/api/Registers",register,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result => console.log("Done"));
    
  }
}
