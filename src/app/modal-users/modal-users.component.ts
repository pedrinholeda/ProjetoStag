import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-users',
  templateUrl: './modal-users.component.html',
  styleUrls: ['./modal-users.component.css']
})
export class ModalUsersComponent{

  public modalData = {name: null, value: null, type : 'insert'}
  title = 'Cadastrar Usuario'
  constructor(
    public dialogRef: MatDialogRef<ModalUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      Object.assign(this.modalData,data);
      this.title = (this.modalData.type == 'insert') ? 'Cadastrar Usuario' : 'Editar Usuario';
    }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
