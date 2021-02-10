import { Component, Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { withLatestFrom } from "rxjs/operator/withLatestFrom";
import { MarktgruppenService } from "./marktgruppen.service";

@Component({
  selector: "my-app",
  //  templateUrl: './app.component.html',
  template: `
    <div *ngFor="let g of (gruppen$ | async); index as i">
      <h1>{{ g.groupName }}: {{ g.id }}</h1>
    </div>

    <input (change)="filterGruppen($event)" />

    <hello></hello>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  gruppen$ = this.service.filteredMarktgruppen$;

  constructor(private service: MarktgruppenService) {}
  filterGruppen(event) {
    this.service.filterGruppe(event.target.value);
  }
}
