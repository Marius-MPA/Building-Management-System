import { Component, OnInit } from '@angular/core';

import { ResidentsService } from 'src/app/_shared/services/residents.service';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-residents-search',
  templateUrl: './residents-search.component.html',
  styleUrls: ['./residents-search.component.css']
})
export class ResidentsSearchComponent implements OnInit {

  buildingResidents$;

  public residents;

  private searchTerms = new Subject<string>();

  constructor(private residentService: ResidentsService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() : void {
    this.buildingResidents$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.residentService.searchResident(term))
    );
  }

}
