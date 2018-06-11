import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReadService } from '../../../services/read.service';
import { Author } from '../../../models/author.model';
import { Book } from '../../../models/book.model';
@Component({
    selector: 'app-author-details',
    templateUrl: './author-details.component.html'
})

export class AuthorDetailsComponent implements OnInit {
    public author: Author;
    public books: Book[] = [];

    constructor(
        public route: ActivatedRoute,
        public readService: ReadService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {

            this.author = this.readService.getAuthor(params['id']);
            this.readService.getBooks().forEach(book => {
                if(book.author_id == this.author.id) {
                    this.books.push(book);
                }
            })

            // this.readService.getAuthor(params['id']).subscribe(res => {
            //     this.author = res;
            //     this.readService.getBooks().subscribe(res => {
            //         res.forEach(element => {
            //             if (element.author_id == this.author.id)
            //                 this.books.push(element);
            //         });
            //     });
            //     this.readService.getBooks().subscribe(res => {
            //         res.forEach(element => {
            //             if (element.author_id == this.author.id)
            //                 this.books.push(element);
            //         });
            //     });
            // });
        });
    }
}