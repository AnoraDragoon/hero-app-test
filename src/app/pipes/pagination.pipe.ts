import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

    transform(values: unknown[], ...args: number[]): unknown {
        return values.slice(args[0], args[1]);
    }

}
