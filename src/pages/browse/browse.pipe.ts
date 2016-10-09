import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterCategory'})
export class FilterCategoryPipe implements PipeTransform {
  transform(value: any, category: string): number {
    return value.filter(product => {
       if (category.length < 1) return product;
      return product.category == category;
    })
  }
}
