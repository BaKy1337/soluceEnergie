import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RGPDComponent } from '../rgpd/rgpd.component';
import { MentionsLegalesComponent } from '../mentions-legales/mentions-legales.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(public dialog: MatDialog) {}

  openRGPD() {
    this.dialog.open(RGPDComponent, {
      panelClass: 'supportComponent'
    });
  }
  openMentions(){
    this.dialog.open(MentionsLegalesComponent, {
      panelClass: 'supportComponent'
    });
  }
}
