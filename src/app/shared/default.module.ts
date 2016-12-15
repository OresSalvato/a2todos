import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';

import {TranslateLoader,  TranslateStaticLoader,TranslateService,TranslateModule,  MissingTranslationHandler} from 'ng2-translate/ng2-translate';
/**
 * Use this place to define and provide global
 * components, directives, pipes and services
 * that are used througt all app
 */

// lang selecor
import { LangSelectorComponent } from './lang-selector/lang-selector.component';


export class MyMissingTranslationHandler implements MissingTranslationHandler {
    handle(key: string) {
        console.log('Missing translation :: ', key);
        return key;
    }
}

@NgModule({
    imports: [
        BrowserModule, 
        MaterialModule.forRoot(),
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/translations', '.json'),
            deps: [Http]
        })]
})
export class DefaultModule { }
