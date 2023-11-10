import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isSolutionsVisible = false;
  isLeGroupeVisible = false;
  isIsolationVisible = false;
  isChauffageVisible = false;
  isECSVisible = false;
  isMenuOpened = false;
  darkMode = localStorage.getItem('theme') == 'light' ? false:true;

  toggleMenu(){
    this.isMenuOpened = !this.isMenuOpened;
  }

  toggleTheme(){
     if(localStorage.getItem('theme') == 'light'){
      localStorage.setItem('theme', 'dark');
      this.darkMode = true;
     }else{
      localStorage.setItem('theme', 'light');
      this.darkMode = false;
     }
     console.log(localStorage.getItem('theme'));
     console.log(this.darkMode);
     
     
  }
}
