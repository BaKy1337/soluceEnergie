import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RGPDComponent } from '../rgpd/rgpd.component';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { MentionsLegalesComponent } from '../mentions-legales/mentions-legales.component';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { retry } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  private serviceID = 'service_6j0kynv';
  private templateID = 'template_j6tfc6g';
  private publicKey = 'xlymoyHRoM-mCMQL9';

  constructor(public dialog: MatDialog, private snackBar: SnackbarService) {}

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

  validateEmail(email:any) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  public sendEmail(e: string) {
    if(this.validateEmail(e) == undefined || this.validateEmail(e) == null){
      this.snackBar.openSnackBar(
        "Veuillez entrer une adresse email valide",
        'errorSnackBar'
      );
      return;
    }
    // revoir cette section pour envoyer l'info
    this.snackBar.openSnackBar(
      'Vous faites désormais partie de notre équipe !',
      'successSnackBar'
    );

    
    return;
  }
}
