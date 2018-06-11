import { Injectable } from '@angular/core';
import { Author } from '../models/author.model';
import { Book } from '../models/book.model';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CreateService {
  public headers = new Headers({ 'Content-Type': 'application/json' });
  public options = new RequestOptions({ headers: this.headers });

  constructor(
    public router: Router,
    public http: Http
  ) { }

  createAuthor(Author) {
    if (localStorage.getItem('AuthorList')) {
      let authorArrayList = [];
      authorArrayList = JSON.parse(localStorage.getItem('AuthorList'));
      authorArrayList.push(Author);
      localStorage.setItem('AuthorList', JSON.stringify(authorArrayList));
    }
    else {
      let authorArrayList = [];
      authorArrayList.push(Author);
      localStorage.setItem('AuthorList', JSON.stringify(authorArrayList));
    }

    this.router.navigate(['/']);
    window.location.reload();
    // let url = '/post_author';

    // this.http.post(url, Author, this.options)
    //   .map((res: Response) => console.log(res.json()))
    //   .catch(error => Observable.throw(error.json().error) || 'Server Error').subscribe(res => console.log(res));;
    // this.router.navigate(['/']);
    // window.location.reload();
  }


  createBook(Book) {

    if (localStorage.getItem('BookList')) {
      let bookArrayList = [];
      bookArrayList = JSON.parse(localStorage.getItem('BookList'));
      bookArrayList.push(Book);
      localStorage.setItem('BookList', JSON.stringify(bookArrayList));
    }
    else {
      let bookArrayList = [];
      bookArrayList.push(Book);
      localStorage.setItem('BookList', JSON.stringify(bookArrayList));
    }

    this.router.navigate(['/']);
    // console.log(Book);

    // let url = '/post_book';

    // this.http.post(url, Book, this.options)
    //   .map((res: Response) => console.log(res.json()))
    //   .catch(error => Observable.throw(error.json().error) || 'Server Error').subscribe(res => console.log(res));;
    // window.location.reload();
  }

}