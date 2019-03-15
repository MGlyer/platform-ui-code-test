import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  showSaved: boolean = false;

  public selectedProviders = [
    {
      id: '4',
      name: 'Sally',
      address: '733 Saint Nicholas',
      phone: '9495552930'
    }
  ];
  public unselectedProviders = [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    }
  ];

  sortProviders(list) {
    list.sort((prov1, prov2) => {
      return Number(prov1.id) - Number(prov2.id)
    })
  }

  toggleProviderPage() {
    this.showSaved = !this.showSaved
  }

  switchProvider(id, from, to) {
    from.forEach((provider, i) => {
      if (provider.id === id) {
        let prov = from[i]
        to.push(prov)
        from.splice(i, 1)
        this.sortProviders(to)
      }
    })
  }

  addToSaved(e) {
    let targetId: string = e.target.parentNode.id
    this.switchProvider(targetId, this.unselectedProviders, this.selectedProviders)
  }

  removeFromSaved(e) {
    let targetId: string = e.target.id
    this.switchProvider(targetId, this.selectedProviders, this.unselectedProviders)
  }

  constructor() {}

  ngOnInit() {}

}
