import {Pipe, PipeTransform  } from '@angular/core';
@Pipe({name : 'managersearch'})

export class ManagerSearch{
      transform(items:any[], args: any):any{
      args = args.toUpperCase();
    return items.filter(prd => prd.Name.toUpperCase().indexOf(args) !== -1 ||prd.Description.toUpperCase().indexOf(args) !== -1 );
  }
}