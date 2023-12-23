import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import * as $ from 'jquery'
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.scss']
})
export class AnalyseComponent {
  private serviceID = 'service_6j0kynv';
  private templateID = 'template_j6tfc6g';
  private publicKey = 'xlymoyHRoM-mCMQL9';


  type_demande = "autre";
  areConditionsAccepted = false;

  constructor(private snackBar: SnackbarService, public dialogRef: MatDialogRef<AnalyseComponent>) {}
  
  public sendEmail(e: Event) {
    e.preventDefault();
    if(!this.areConditionsAccepted){
      this.snackBar.openSnackBar(
        'Veuillez accepter les conditions particulières',
        'errorSnackBar'
      );
      return;
    }
    emailjs.sendForm(this.serviceID, this.templateID, e.target as HTMLFormElement, this.publicKey)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        $('#devisForm').trigger("reset");
        this.snackBar.openSnackBar(
          'Votre message à été envoyé avec succès !',
          'successSnackBar'
        );
        this.dialogRef.close([]);
        return;
      }, (error) => {
        console.log(error.text);
        this.snackBar.openSnackBar(
          "Une erreur est survenue lors de l'envoi, veuillez réessayer",
          'errorSnackBar'
        );
        return;
      });
      return;
  }

  typeDemande(e:any){
    this.typeDemande = e.value;
  }

  toggleConditions() {
    this.areConditionsAccepted = !this.areConditionsAccepted;
  }
}
