import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
    name: string;
    email: string;
    mobile: string;
  }

@Component({
    selector: 'billing-model',
    templateUrl: 'billing-model.component.html',
  })
  export class BillingModelComponent {
  
    constructor(
      public dialogRef: MatDialogRef<BillingModelComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }