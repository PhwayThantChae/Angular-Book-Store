import { Component, OnInit } from '@angular/core';
import { ReadService } from '../../services/read.service';
import { Book } from '../../models/book.model';
import { Author } from '../../models/author.model';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {
  public books: Book[];
  public authors: Author[];

  constructor(
    public readService: ReadService
  ) { }

  ngOnInit() {
    this.authors = this.readService.getAuthors();
    this.books = this.readService.getBooks();
    
    // this.readService.getBooks().subscribe(res => {
    //   this.books = res;
    // });
    //     this.readService.getAuthors().subscribe(res=>{
    //   this.authors = res;
    // });

  }

}
