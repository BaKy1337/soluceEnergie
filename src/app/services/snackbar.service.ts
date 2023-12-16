import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message:string, type:string): void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      panelClass: type,
      duration: 6000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      data: { message: message , type: type}
    });
  }


}
