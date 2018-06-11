import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Author } from '../../../models/author.model';
import { CreateService } from '../../../services/create.service';
import { ReadService } from '../../../services/read.service';
import { UpdateService } from '../../../services/update.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html'
})



export class AuthorFormComponent implements OnInit {

  public id: FormControl;
  public name: FormControl;
  public email: FormControl;
  public addAuthorForm: FormGroup;
  public author: Author;

  constructor(
    public route: ActivatedRoute,
    public formBuilder: FormBuilder,
    public createService: CreateService,
    public updateService: UpdateService,
    public readService: ReadService
  ) { }

  ngOnInit() {

    this.id = new FormControl('', [
      Validators.required
    ]);
    this.name = new FormControl('', [
      Validators.required
    ]);
    this.email = new FormControl('', [
      Validators.required
    ]);
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.author = this.readService.getAuthor(params['id']);
        console.log(this.author, 'author in author form');
        this.id.setValue(this.author.id);
        this.name.setValue(this.author.name);
        this.email.setValue(this.author.email);
        // .subscribe(res => {
        //   this.author = res;
        //   this.id.setValue(this.author.id);
        //   this.name.setValue(this.author.name);
        //   this.email.setValue(this.author.email);
        // });

      }
      else
        this.author = null;
    });

    this.buildForm();
  }

  buildForm(): void {
    this.addAuthorForm = this.formBuilder.group({

      id: this.id,
      name: this.name,
      email: this.email
    });
  }

  onSubmit() {
    let author: Author;

    author = new Author(
      this.id.value,
      this.name.value,
      this.email.value
    );

    if (this.author)
      this.updateService.updateAuthor(author);
    else
      this.createService.createAuthor(author);
  }
}





