import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Author } from '../models/author.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ReadService {

  public headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token'
  });
  public options = new RequestOptions({ headers: this.headers });

  constructor(
    public http: Http
  ) { }
  getAuthors() {
    if (localStorage.getItem('AuthorList')) {
      return JSON.parse(localStorage.getItem('AuthorList'));
    }
    else {
      return null;
    }
    // let url = '/author_list';
    // return this.http.get(url)
    //   .map(res => res.json())
    //   .catch(error => Observable.throw(error.json().error || 'Server Error'));
  }
  getAuthor(id) {
    if (localStorage.getItem('AuthorList')) {
      let author: Author;
      let authorList: Author[] = JSON.parse(localStorage.getItem('AuthorList'));
      authorList.forEach(index => {
        if (index.id == id) {
          author = index;
        }
      });

      return author;
    }
    // let url = '/author_show?id='+id;
    //   return this.http.get(url)
    //     .map(res => res.json())
    //     .catch(error => Observable.throw(error.json().error || 'Server Error'));
  }
  getBooks() {
    if (localStorage.getItem('BookList')) {
      return JSON.parse(localStorage.getItem('BookList'));
    }
    else {
      return null;
    }
    // let url = '/book_list';
    // return this.http.get(url)
    //   .map(res => res.json())
    //   .catch(error => Observable.throw(error.json().error || 'Server Error'));
  }
  getBook(id) {
    if (localStorage.getItem('BookList')) {
      let book: Book;
      let bookList: Book[] = JSON.parse(localStorage.getItem('BookList'));
      bookList.forEach(index => {
        if (index.id == id) {
          book = index;
        }
      });

      return book;
    }
    //   let url = '/book_show?id=' + id;
    //   return this.http.get(url)
    //     .map(res => res.json())
    //     .catch(error => Observable.throw(error.json().error || 'Server Error'));
    // }
  }
}
