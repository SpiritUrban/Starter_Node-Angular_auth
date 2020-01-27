import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service'
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.sass']
})
export class RegComponent implements OnInit {

  profileForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    console.log(this.api.test())
  }

  async onSubmit() {
    try {
      const userData = this.profileForm.value;
      const fromServer: any = await this.api.register(userData);
      console.log(fromServer)
    } catch (error) {
      console.warn(error);
    }
  }

}
