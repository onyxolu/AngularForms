import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = '';

  constructor( private http: HttpClient) { }
  
  postUserSettingsForm(userSettings: UserSettings): Observable<UserSettings> {
    return of(userSettings)
  }

}
