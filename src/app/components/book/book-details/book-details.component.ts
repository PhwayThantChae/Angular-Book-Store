import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReadService } from '../../../services/read.service';
import { Book } from '../../../models/book.model';
@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html'
})

export class BookDetailsComponent implements OnInit {
    public book: Book;

    constructor(
        public route: ActivatedRoute,
        public readService: ReadService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.book = this.readService.getBook(params['id']);
            // this.readService.getBook(params['id']).subscribe(res =>  {
            //     this.book = res;
            // });
        });
    }
}