import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnalyseComponent } from 'src/app/components/analyse/analyse.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public dialog: MatDialog){}
  openAnalyse(){
    this.dialog.open(AnalyseComponent, {
      minWidth: '80%',
      panelClass: 'AnalyseComponent'
    });
  }
}
