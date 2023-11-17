import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  toggleMenu(){
    this.isMenuOpened = !this.isMenuOpened;
  }

  toggleTheme(){
    const bodyTag = document.body;
     if(localStorage.getItem('theme') == 'light'){
      bodyTag.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      this.darkMode = true;
     }else{
      bodyTag.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      this.darkMode = false;
     }
  }
}
