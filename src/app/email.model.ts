export class EmailModel { 
    constructor(public sender_email: string,
    public recipent_email: string,
    public subject: string,
    public body: string,
    public desc:string ) {}  
}