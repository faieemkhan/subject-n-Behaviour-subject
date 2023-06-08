import { Component } from '@angular/core';
import { DataSharingService } from './data-sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'subject-n-Behaviour-subject';
  constructor(private behaviorSubject : DataSharingService){
    this.behaviorSubject.subject.next('aaa');
  }
}
