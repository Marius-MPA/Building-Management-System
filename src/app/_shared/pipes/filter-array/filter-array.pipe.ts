import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {

  transform(value: any, term, key): any {
    if(!value || !Array.isArray(value)){
      return value;
    }
    
    const searchTerm = term.toString().toLowerCase();

    return value.filter((item)=>{
      return  item[key].toString().toLowerCase().includes(searchTerm);
      
    } );
  }

}
