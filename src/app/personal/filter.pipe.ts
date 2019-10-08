import { Pipe, PipeTransform } from '@angular/core';
import {ICity} from './uciCityDataSet';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {

    /*
    export interface ICity {
    name: string;
    value: string;
    stateId: string;
  }
    */

    /*transform(items: any[], searchText: string): any[] {
        if (!items) { return []; }
        if (!searchText) { return items; }

        //searchText = searchText.toLowerCase();
        searchText = searchText.toLowerCase();


        return items.filter( it => {
            //return it == ''
            console.log("AQUI MI IT : " + it);
            return it.toLowerCase().includes(searchText);
        });
    }*/

    transform(
        ciudades: ICity[],
        nameSearch?: string,
        valueSearch?: string,
        stateIdSearch?: string): ICity[] {

        if (!ciudades) { return []; }
        if (!nameSearch) { return ciudades; }
        if (!stateIdSearch) { return ciudades; }
        nameSearch = nameSearch.toLocaleLowerCase();
        stateIdSearch = stateIdSearch.toLocaleLowerCase();

        // tslint:disable-next-line:no-debugger
        debugger;
        ciudades = [...ciudades.filter( ciudad => ciudad.stateId.toLocaleLowerCase().includes(stateIdSearch))];
        return ciudades;
    }
}
