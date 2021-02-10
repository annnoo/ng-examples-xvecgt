import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { map, withLatestFrom } from "rxjs/operators";

@Injectable()
export class MarktgruppenService {
  // intern gehaltene Subjects
  private allMarktgruppen = new BehaviorSubject<MarketGroupView[]>(initGruppen);
  private nameFilter = new BehaviorSubject<string>("");

  // Observable für den Zugriff nach außen
  nameFilter$ = this.nameFilter.asObservable();
  allGruppen$ = this.allMarktgruppen.asObservable();

  // Observable für die Gefilterten Gruppen
  filteredMarktgruppen$ = this.nameFilter.pipe(
    withLatestFrom(this.allMarktgruppen),
    map(([name, groups]: [string, MarketGroupView[]]) => {
      if (name === "") return groups;
      return groups.filter(i => i.groupName.includes(name));
    })
  );

  filterGruppe(name: string) {
    this.nameFilter.next(name);
  }
}

interface MarketGroupView {
  groupName: string;
  id: number;
}

const initGruppen: MarketGroupView[] = [
  {
    groupName: "Test 1",
    id: 0
  },
  {
    groupName: "Test 2",
    id: 1
  },
  {
    groupName: "REWE 1",
    id: 2
  },
  {
    groupName: "Beispiel 2",
    id: 0
  }
];
