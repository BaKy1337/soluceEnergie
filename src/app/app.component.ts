import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(){
    const bodyTag = document.body;
    if(localStorage.getItem('theme') == undefined){
      localStorage.setItem('theme', 'light');
    }else if(localStorage.getItem('theme') == 'dark'){
      bodyTag.classList.add('dark');
    }
  }
}
