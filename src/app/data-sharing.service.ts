import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';  
@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  SharingData = new Subject();  
  subject =new BehaviorSubject('');
  constructor() { } 
}
