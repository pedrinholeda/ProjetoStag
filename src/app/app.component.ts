import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalUsersComponent } from './modal-users/modal-users.component'
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetostag2';
  displayedColumns: string[] = ['name', 'tell', 'email', 'functions'];
  dataSource: any;
  dbName = 'users';

  constructor(public dialog: MatDialog,
    private db: AngularFireDatabase) { 
      this.dataSource = this.db.list(this.dbName)
      .snapshotChanges()
      .pipe(
        map(items =>{
          return items.map(item =>{
            return Object.assign({key: item.payload.key}, item.payload.val())
          })
        })
      )
    }

  insert(){
    const dialogRef = this.dialog.open(ModalUsersComponent, {
      width: '270x',
      data: { type : 'insert'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
      this.db.list(this.dbName).push(result);
    }
   });
  }
  edit(data){
    const dialogRef = this.dialog.open(ModalUsersComponent, {
      width: '250px',
      data : {...data,type: 'update'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
      this.db.list(this.dbName).update(data.key, result)
    }
   });
  }

  delete(key){
    this.db.list(this.dbName).remove(key);
  }
}
