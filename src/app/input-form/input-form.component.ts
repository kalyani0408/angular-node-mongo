import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  Value;
  data;
  constructor(private UserService : UserService) { }

  ngOnInit() {

  }

  insertData(event) {
    console.log(event.value);
    this.Value= event.value;
    this.UserService.insertInput(this.Value)
     .subscribe(response => console.log("successfull!!!!"));
  }

  show() {
    console.log("in show");
    this.UserService.getData()
    .subscribe(response => console.log("response from service"));
  }
}
