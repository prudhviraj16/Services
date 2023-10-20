import { Injectable, EventEmitter } from '@angular/core';
import { User } from './header/Models/User';
import { LoggerService } from './logger.service';


@Injectable()
export class UserService{

    constructor(private logService : LoggerService){

    }

    users: User[] = [
        new User('Steve Smith', 'Male', 'Monthly', 'Active'),
        new User('Mery Jane', 'Female', 'Yearly', 'Inactive'), 
        new User('Mark Tyler', 'Male', 'Quaterly', 'Active') 
    ];


    GetAllUsers(){
        return this.users;
    }

    CreateUser(name: string, gender: string, subType: string, status: string){
        let user = new User(name, gender, subType, status);
        this.users.push(user);
        this.logService.LogMessage(name,status)
    }
}