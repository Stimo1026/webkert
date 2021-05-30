import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    itemName: new FormControl('', Validators.required),
    carrier: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    estimatedDeliveryDate: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required)
  });
  constructor(private dialogRef: MatDialogRef<AddComponent>) { }
  ngOnInit(): void {
  }
  /*
  close(): void {
    if (this.form.valid){
      this.dialogRef.close(this.form.value);
    }
    this.dialogRef.close();
  }
  */
}
