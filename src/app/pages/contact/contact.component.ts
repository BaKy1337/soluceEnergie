import { Component } from '@angular/core';
import { SnackbarService } from 'src/app/services/snackbar.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  lname = '';
  fname = '';
  phone = '';
  email = '';
  message = '';

  private serviceID = 'service_6j0kynv';
  private templateID = 'template_53or91r';
  private publicKey = 'xlymoyHRoM-mCMQL9';

  areConditionsAccepted = false;

  constructor(private snackBar: SnackbarService) {}

  sendForm() {
    if (
      this.lname == '' ||
      this.fname == '' ||
      this.email == '' ||
      this.message == ''
    ) {
      this.snackBar.openSnackBar(
        'Veuillez remplir les champs obligatoires',
        'errorSnackBar'
      );
      return;
    }
    if (!this.areConditionsAccepted) {
      this.snackBar.openSnackBar(
        'Veuillez accepter les conditions particulières',
        'errorSnackBar'
      );
      return;
    }

    
    let templateParams = {
      message: this.message,
      nom: this.lname,
      prenom: this.fname,
      email: this.email,
      phone: this.phone == '' ? 'Non renseigné':this.phone,
    };

    emailjs.send(this.serviceID, this.templateID, templateParams, this.publicKey).then(
       (response) => {
        this.snackBar.openSnackBar(
          'Envoyé avec succès !',
          'successSnackBar'
        );
      },
       (error) => {
        this.snackBar.openSnackBar(
          "Erreur lors de l'envoi, veuillez réessayer",
          'errorSnackBar'
        );
      }
    );

    (<HTMLInputElement>document.getElementById('lname')).value = '';
    (<HTMLInputElement>document.getElementById('fname')).value = '';
    (<HTMLInputElement>document.getElementById('phone')).value = '';
    (<HTMLInputElement>document.getElementById('email')).value = '';
    (<HTMLInputElement>document.getElementById('message')).value = '';
    return;
  }

  public sendEmail(e: Event) {
    e.preventDefault();
  }

  fillForm(type: any, value: any) {
    switch (type) {
      case 'lname':
        this.lname = value;
        break;
      case 'fname':
        this.fname = value;
        break;
      case 'phone':
        this.phone = value;
        break;
      case 'email':
        this.email = value;
        break;
      case 'message':
        this.message = value;
        break;
      default:
        break;
    }
  }
  toggleConditions() {
    this.areConditionsAccepted = !this.areConditionsAccepted;
  }
}
