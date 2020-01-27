import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  profileForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    // email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  
  async onSubmit() {
    try {
      const userData = this.profileForm.value;
      const fromServer: any = await this.api.login(userData);
      alert(fromServer.msg)
      if(fromServer.ok) this.router.navigateByUrl('/');
      console.log(fromServer)
    } catch (error) {
      console.warn(error);
    }
  }



}