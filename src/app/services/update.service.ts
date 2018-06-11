import { Injectable } from '@angular/core';
import { Author } from '../models/author.model';
import { Book } from '../models/book.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UpdateService {
  public headers = new Headers({ 'Content-Type': 'application/json' });
  public options = new RequestOptions({ headers: this.headers });

  constructor(
    public route: Router,
    public router: ActivatedRoute,
    public http: Http
  ) { }
  updateAuthor(author: Author) {
    let id: string;
    this.router.queryParams.subscribe(params => {
      if (params['id']) {
        id = params['id']
      }
    });
    if (localStorage.getItem('AuthorList')) {
      let authorList = JSON.parse(localStorage.getItem('AuthorList'));
      authorList.forEach((authorObject, index) => {
        if (authorObject.id == id) {
          authorList[index] = author;
        }
      });
      localStorage.setItem('AuthorList', JSON.stringify(authorList));
    }
    // let id: string;
    //  this.router.queryParams.subscribe(params => {
    //   if (params['id']) {     
    //     id = params['id']
    //   }   
    // });   

    // console.log(id);
    // let url = '/update_author?id=' + id;

    //   this.http.put(url, author, this.options)
    //     .map((res: Response) => console.log(res.json()))
    //     .catch(error => Observable.throw(error.json().error) || 'Server Error').subscribe(res => console.log(res));;
    this.route.navigate(['/']);
    // window.location.reload();
  }
  updateBook(book: Book) {
    let id: string;
    this.router.queryParams.subscribe(params => {
      if (params['id']) {
        id = params['id']
      }
    });
    if (localStorage.getItem('BookList')) {
      let BookList = JSON.parse(localStorage.getItem('BookList'));
      BookList.forEach((bookObject, index) => {
        if (bookObject.id == id) {
         BookList[index] = book;
        }
      });
      localStorage.setItem('BookList', JSON.stringify(BookList));
    }

    // console.log(id);
    // let url = '/update_book?id=' + id;

    // this.http.put(url, book, this.options)
    //   .map((res: Response) => console.log(res.json()))
    //   .catch(error => Observable.throw(error.json().error) || 'Server Error').subscribe(res => console.log(res));;
    this.route.navigate(['/']);
    // window.location.reload();
  }
}




