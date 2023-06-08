import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';  
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {
  Component1Data: any = '';  
  
  constructor(private dataSharing: DataSharingService) {  
    this.dataSharing.SharingData.subscribe((res: any) => {  
      this.Component1Data = res;  
    })  
  }  
  
  onSubmit(data : any) {  
    this.dataSharing.SharingData.next(data.value);  
  }  
}
