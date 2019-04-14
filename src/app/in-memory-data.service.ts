import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from './hero';


@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
    createDb() {
        const heroes = [
            { id: 11, name: 'Mr. hNice'},
            { id: 12, name: 'hNarco' },
            { id: 13, name: 'hBombasto' },
            { id: 14, name: 'hCeleritas' },
            { id: 15, name: 'hMagneta' },
            { id: 16, name: 'hRubberMan' },
            { id: 17, name: 'hDynama' },
            { id: 18, name: 'hDr IQ' },
            { id: 19, name: 'hMagma' },
            { id: 20, name: 'hTornado' }
        ];
        return {heroes};
    }

    genId(heroes: Hero[]): number {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id))+1:11;
    }

    constructor() {
    }
}
