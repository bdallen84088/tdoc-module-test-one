import { Injectable } from '@angular/core';
import { Severity } from './severity.enum';

@Injectable()
export class tdocTestOneService {
    private source: string;
    private severity: Severity;
    private message: string;
    private timestamp: Date;

    constructor() {
        this.source = '';
        this.severity = 1;
        this.message = '';
        this.timestamp = new Date();

    }

    /**
     * Use to create a log item in the application console.
     * @param source
     * @param severity
     * @param message
     */
    log(source: string, severity: Severity, message: string) {
        this.source = source;
        this.severity = severity;
        this.message = message;
        this.timestamp = new Date();
        const msg = `${this.message}`;

        console.log(`${this.severity} from ${this.source}: ${msg} (${this.timestamp})`);
    }
}
