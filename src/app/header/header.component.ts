import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isShow:string="none";
  showpopup(){
    if(this.isShow=="none"){
      this.isShow="block";
    }
    else{
      this.isShow="none";
    }
  }


  ClickedOut(event:any) {
    if(event.target.className === "option-type active primary-cta md-f700") {
      console.log(event.target.className);
            this.isShow = "none";
    }
    else{
      this.isShow="none"
    }
 }
}