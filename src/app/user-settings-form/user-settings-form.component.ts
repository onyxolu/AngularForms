import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { DataService } from '../data/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  Originalusersettings: UserSettings = {
    email: 'ogundareolumide@gmail.com',
    checkbox: true,
    radio: 'Light',
    select: 'Monthly',
    textarea: 'Hi',
  }

  usersettings: UserSettings = {...this.Originalusersettings};

  constructor(private dataservice: DataService) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this.dataservice.postUserSettingsForm(this.usersettings).subscribe(
      result => console.log('success: ', result),
      error => console.log('eror: ', error)
      
    )
  }


}
