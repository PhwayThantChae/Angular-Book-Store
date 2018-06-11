import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from '../models/author.model';
import { Book } from '../models/book.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DeleteService {
  public headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token'
  });
  public options = new RequestOptions({ headers: this.headers });

  constructor(
    public http: Http,
    public router: Router
  ) { }

  deleteAuthor(id) {
    if (localStorage.getItem('AuthorList')) {
      let authorList: Author[] = JSON.parse(localStorage.getItem('AuthorList'));
      authorList.forEach((author, index) => {
        if (author.id == id) {
          authorList.splice(index, 1);
          localStorage.setItem('AuthorList', JSON.stringify(authorList));
        }
      });
      return authorList;
    }
    // let url = '/delete_author?id=' + id;
    // this.http.delete(url).subscribe(res=>console.log('delete result',res));
    // window.location.reload();
    // this.router.navigate(['/']);
  }
  deleteBook(id) {

    if (localStorage.getItem('BookList')) {
      let bookList: Book[] = JSON.parse(localStorage.getItem('BookList'));
      bookList.forEach((author, index) => {
        if (author.id == id) {
          bookList.splice(index, 1);
          localStorage.setItem('BookList', JSON.stringify(bookList));
        }
      });
      return bookList;
      // let url = '/delete_book?id=' + id;
      // this.http.delete(url).subscribe(res=>console.log('delete result',res));
      // window.location.reload();
      // this.router.navigate(['/']);
    }

  }

}

