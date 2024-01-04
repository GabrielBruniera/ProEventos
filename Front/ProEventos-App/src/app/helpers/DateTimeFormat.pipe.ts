import { Constants } from './../util/constants';
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'DateFormatPipe',
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(new Date());
    return super.transform(value, Constants.DATE_TIME_FMT);
  }
}
