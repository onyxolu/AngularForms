import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

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

  constructor() { }

  ngOnInit() {
  }

}
