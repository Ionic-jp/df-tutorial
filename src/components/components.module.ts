import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WpHeadComponent } from './wp-head/wp-head';
@NgModule({
	declarations: [WpHeadComponent],
	imports: [],
	exports: [WpHeadComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
