import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { ModalUsersComponent } from './modal-users/modal-users.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


 
@NgModule({
  declarations: [
    AppComponent,
    ModalUsersComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    AngularFireModule.initializeApp({ /*  importações para usar o fire base*/
    apiKey: "AIzaSyCi4kNBVMBq-_P8soERRM0OGkkKtXzGMXY",
    authDomain: "newprojetostag.firebaseapp.com",
    databaseURL: "https://newprojetostag.firebaseio.com",
    projectId: "newprojetostag",
    storageBucket: "",
    messagingSenderId: "637576752493",
    appId: "1:637576752493:web:7fd174d1fdc09421"
    }),
    AngularFireDatabaseModule

  ],
  entryComponents: [ /* faz com que um componente possa sobrepor outro */
    ModalUsersComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
