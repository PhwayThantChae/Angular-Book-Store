import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AuthorFormComponent } from './components/author/author-form/author-form.component';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { AuthorDetailsComponent } from './components/author/author-details/author-details.component';
import { BookFormComponent } from './components/book/book-form/book-form.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { BookDetailsComponent } from './components/book/book-details/book-details.component';
import { CreateService } from './services/create.service';
import { ReadService } from './services/read.service';
import { UpdateService } from './services/update.service';
import { DeleteService } from './services/delete.service';


const appRoutes: Routes = [
  { path: '', component: MainPageComponent }
  , { path: 'book/form', component: BookFormComponent }
  , { path: 'book/:id', component: BookDetailsComponent }
  , { path: 'author/form', component: AuthorFormComponent }
  , { path: 'author/:id', component: AuthorDetailsComponent }
  , { path: 'book/form', component: BookFormComponent }
  , { path: 'book/:id', component: BookDetailsComponent }
  , { path: 'book/form', component: BookFormComponent }
  , { path: 'book/:id', component: BookDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent
    , BookListComponent
    , BookFormComponent
    , BookDetailsComponent
    , AuthorListComponent
    , AuthorFormComponent
    , AuthorDetailsComponent
    , BookListComponent
    , BookFormComponent
    , BookDetailsComponent
    , BookListComponent
    , BookFormComponent
    , BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CreateService, ReadService, UpdateService, DeleteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
