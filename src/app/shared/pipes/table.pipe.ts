import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';
import { DateDisplayPipe } from './time-utils.pipe';

@Pipe({
  name: 'tableColumnDisplay',
  pure: true
})
export class TableColumnDisplayPipe implements PipeTransform {

  @memo()
  transform(value: string): any {
    let res: string = value;

    switch(value) {
      case "name": {
        res = "Name";
        break;
      }
      case "example": {
        res = "Example";
        break;
      }
      case "company": {
        res = "Siling Institution";
        break;
      }
      case "date": {
        res = "Entry Date";
        break;
      }
      case "gain": {
        res = "Gain By";
        break;
      }
      case "loss": {
        res = "Loss By";
        break;
      }
      case "balance": {
        res = "Current Balance";
        break;
      }
    }
    return res;
  }

}

@Pipe({
  name: 'tableDataDisplay',
  pure: true
})
export class TableDataDisplayPipe implements PipeTransform {

  constructor(private dp: DateDisplayPipe) {
  }

  transform(value: any, colId: string): any {
    let res: any = value;

    switch(colId) {
      case "time": {
        res = this.dp.transform(res, "HMS");
        break;
      }
    }
    return res;
  }

}


