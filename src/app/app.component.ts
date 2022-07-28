import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent //implements OnInit
{
  
  title = 'template-project';
  months = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];
  enabled = false;
  c = 1;

  /*ngOnInit(): void {
    setInterval(()=>{
      this.enabled = !this.enabled;
    }
    ,1000);
  }*/
  clicked(){
    this.enabled = !this.enabled;
  }
}
