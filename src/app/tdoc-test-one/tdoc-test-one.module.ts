import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { tdocTestOneConfig } from './tdoc-test-one.config';

@NgModule({
    exports: [],
    imports: [
        CommonModule
    ],
    declarations: []
})
export class TdocTestOneModule {
    /**
     * A static method to provide configuration to the [SimpleLoggerModule].
     * @param config Use the [SimpleLoggerConfig] to provide configuration
     * information to the module.
     */
    static forRoot(config: tdocTestOneConfig) {
        return {
            ngModule: TdocTestOneModule,
            providers: [{provide: tdocTestOneConfig, useValue: config}]
        };
    }

}
