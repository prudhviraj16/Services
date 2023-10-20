import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private service : ServicesService){

  }
  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked(){
    console.log("object1");
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    console.log("object2");
    this.selectedTab = 'admin';
  }

  onSubscribe(){
    this.service.onSubscribe()
  }
}
