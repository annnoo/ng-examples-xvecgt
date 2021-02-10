import { Component, Input } from "@angular/core";
import { MarktgruppenService } from "./marktgruppen.service";

@Component({
  selector: "hello",
  template: `
    <h3>Filter-Wert: {{ filterVal | async }}</h3>
  `,
  styles: []
})
export class HelloComponent {
  filterVal = this.service.nameFilter$;
  constructor(private service: MarktgruppenService) {}
}
