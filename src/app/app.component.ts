import {Component} from '@angular/core';
import {LabelsService} from './labels/labels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calendar';
  labels: any;
  months: any;
  selectedMonth: string;
  loadFilters = false;

  constructor(Labels: LabelsService) {
    this.labels = Labels.getLabels();
    this.months = [{
      id: 1,
      value: 'January'
    }, {
      id: 2,
      value: 'Febrary'
    }];
    this.selectedMonth = this.months[0].id;
  }

  drawCalendar(): void {
    this.loadFilters = true;
    if (this.selectedMonth === 'undefiend') {
      return;
    }
    console.log(this.selectedMonth);
  }
}
