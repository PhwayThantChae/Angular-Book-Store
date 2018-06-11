export class Book {
    
        id : number;        
        title : string;        
        author_id : number;        
        publication_date : Date;        
        stock : boolean;        
    constructor(
        
                id : number,                
                title : string,                
                author_id : number,                
                publication_date : Date,                
                stock : boolean                
    ) {
        
                this.id = id;                
                this.title = title;                
                this.author_id = author_id;                
                this.publication_date = publication_date;                
                this.stock = stock;                
    }
}