import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {
  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadWebsites();
  }
}
