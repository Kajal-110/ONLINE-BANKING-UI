import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IRegister } from 'src/app/interface/iregister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstname:FormControl=new FormControl("");
  lastname:FormControl=new FormControl("");
  email:FormControl=new FormControl("");
  mobilenumber:FormControl=new FormControl("");
  gender:FormControl=new FormControl("");
  password:FormControl=new FormControl("");
  repassword:FormControl=new FormControl("");

  constructor( private registerservices:RegisterService) { }

  ngOnInit(): void {
  }

  saveData(){
    let register:IRegister = {
      firstname:this.firstname.value,
      lastname:this.lastname.value,
      email:this.email.value,
      mobilenumber:this.mobilenumber.value,
      gender:this.gender.value,
      password:this.password.value,
      repassword:this.repassword.value
    };
    this.registerservices.addRegister(register);
  }

}
