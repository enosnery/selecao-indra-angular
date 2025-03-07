import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { UserComponent } from './user/user.component';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ImportComponent } from './import/import.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { TableListComponent } from './table-list/table-list.component';
import {MatTableModule} from '@angular/material/table';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: 'import', component: ImportComponent },
  { path: 'table', component: TableListComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' }];

@NgModule({
  declarations: [
    AppComponent,
    CustomHeaderComponent,
    UserComponent,
    UserDetailComponent,
    ImportComponent,
    TableListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
