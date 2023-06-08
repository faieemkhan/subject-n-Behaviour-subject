import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';  
@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component {
  Component3Data: any = '';  
  behaviorSubject : any = '';
  constructor(private DataSharing: DataSharingService) {  
    this.DataSharing.SharingData.subscribe((res: any) => {  
      this.Component3Data = res;  
    }) 
    this.DataSharing.subject.subscribe((result : any) => {
      this.behaviorSubject = result
    }) 
  }  
  
  onSubmit(data : any) {  
    this.DataSharing.subject.next(data.value)
    this.DataSharing.SharingData.next(data.value);  
  }  
}
