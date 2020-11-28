import { User } from 'src/app/user/user.class';
import { Requestline } from './requestline.class';

export class Request {
    id: number = 0;
    description: string = "";
    justification: string = "";
    rejectionreason: string = "";
    deliverymode: string = "";
    status: string = "NEW";
    total: number = 0;

    userid: number = 0;
    user: User = null;
    requestLines: Requestline = null;
    
    
    constructor () {
    
    }
    } 