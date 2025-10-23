/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { SerieService } from './serie.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { App } from '../app';
import { Serie } from './serie.model';

describe('Service: Serie', () => {
 beforeEach(() => {
    TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [App, SerieService]
   });
 });

 it('should ...', inject([SerieService], (service: SerieService) => {
   expect(service).toBeTruthy();
 }));
});