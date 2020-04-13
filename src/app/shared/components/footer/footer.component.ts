import { Component, OnInit, Inject} from '@angular/core';

import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertDialogComponent } from './alert-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  

  constructor(public dialog: MatDialog) {
    
  }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(AlertDialogComponent);
    
  }

}
