import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ReadService } from '../../../services/read.service';
import { DeleteService } from '../../../services/delete.service';
import { Author } from '../../../models/author.model';

@Component({
    selector: 'app-author-list',
    templateUrl: './author-list.component.html'
})

export class AuthorListComponent implements OnInit {
    @Input() public authors: Author[];

    constructor(
        public router: Router,
        public readService: ReadService,
        public deleteService: DeleteService
    ) { }

    ngOnInit() {   
    }
    
    updateAuthor(id) {
        this.router.navigate(['/author/form'], {
            queryParams:
                {
                    id: id
                }
        });
    }

    deleteAuthor(id) {
        this.authors = this.deleteService.deleteAuthor(id);
    }
}

