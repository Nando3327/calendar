import {Injectable} from '@angular/core';
import {Labels} from './labels';


@Injectable()
export class LabelsService {

  labels = Labels;

  constructor() {
  }

  getLabels() {
    return this.labels;
  }
}
