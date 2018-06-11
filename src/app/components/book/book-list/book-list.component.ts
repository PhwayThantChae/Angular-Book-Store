import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ReadService } from '../../../services/read.service';
import { DeleteService } from '../../../services/delete.service';
import { Book } from '../../../models/book.model';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html'
})

export class BookListComponent implements OnInit {
    @Input() public books: Book[];

    constructor(
        public router: Router,
        public readService: ReadService,
        public deleteService: DeleteService
    ) { }

    ngOnInit() {
    }

    updateBook(id) {
        this.router.navigate(['/book/form'], {
            queryParams:
                {
                    id: id
                }
        })
    }

    deleteBook(id) {
        this.books = this.deleteService.deleteBook(id);
    }
}

