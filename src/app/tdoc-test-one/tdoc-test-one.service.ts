import { Injectable } from '@angular/core';
import { Severity } from './severity.enum';
import { tdocTestOneConfig } from './tdoc-test-one.config';

@Injectable()
export class tdocTestOneService {
    private source: string;
    private severity: Severity;
    private message: string;
    private timestamp: Date;
    private applicationName: string;

    constructor(private config: tdocTestOneConfig) {
        this.source = '';
        this.severity = 1;
        this.message = '';
        this.timestamp = new Date();
        this.applicationName = 'No Name';

        if (config) {
            this.applicationName = config.applicationName;
        }

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
