import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    public print(message) {
        try {
            console.log(message);

        } catch (error) {
            
        }
    }
}