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

import { Book } from '../../../models/book.model';
import { CreateService } from '../../../services/create.service';
import { ReadService } from '../../../services/read.service';
import { UpdateService } from '../../../services/update.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html'
})



export class BookFormComponent implements OnInit {

  public id: FormControl;
  public title: FormControl;
  public author_id: FormControl;
  public publication_date: FormControl;
  public stock: FormControl;
  public addBookForm: FormGroup;
  public book: Book;

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
    this.title = new FormControl('', [
      Validators.required
    ]);
    this.author_id = new FormControl('', [
      Validators.required
    ]);
    this.publication_date = new FormControl('', [
      Validators.required
    ]);
    this.stock = new FormControl('', [
      Validators.required
    ]);
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.book = this.readService.getBook(params['id']);
        this.id.setValue(this.book.id);
        this.title.setValue(this.book.title);
        this.author_id.setValue(this.book.author_id);
        this.publication_date.setValue(this.book.publication_date);
        this.stock.setValue(this.book.stock);
        // this.readService.getBook(params['id']).subscribe(res => {
        //   this.book = res;
        //   this.id.setValue(this.book.id);
        //   this.title.setValue(this.book.title);
        //   this.author_id.setValue(this.book.author_id);
        //   this.publication_date.setValue(this.book.publication_date);
        //   this.stock.setValue(this.book.stock);
        // });

      }
      else
        this.book = null;
    });

    this.buildForm();
  }

  buildForm(): void {
    this.addBookForm = this.formBuilder.group({

      id: this.id,
      title: this.title,
      author_id: this.author_id,
      publication_date: this.publication_date,
      stock: this.stock
    });
  }

  onSubmit() {
    let book: Book;

    book = new Book(

      this.id.value,
      this.title.value,
      this.author_id.value,
      this.publication_date.value,
      this.stock.value
    );

    if (this.book)
      this.updateService.updateBook(book);
    else
      this.createService.createBook(book);
  }
}





