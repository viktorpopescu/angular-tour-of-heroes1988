import {Component} from '@angular/core';
import { Hero } from "./hero";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // template:`
    //   <h1>{{title}}</h1>
    //   <h2>My favorite hero is: {{myHero}}</h2>
    //   `,
//     template: `
//         <h1>{{title}}</h1>
//         <h2>My favorite hero is: {{myHero}}</h2>
//         <p>Heroes:</p>
//         <p *ngIf="heroes.length > 3">There are many heroes! {{34+13 + summs(10,22)}}</p>
//         <ul>
//             <li *ngFor="let hero of heroes; index as i">
//                 {{ hero.name }} : {{hero.id}} : {{i}}
//             </li>
//         </ul>
//         <label>Type something:
//             <input #customerInput>{{customerInput.value}}
//         </label>
// <!--        <div>{{customerInput.value}}</div>-->
//     `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // title = 'Tour of Heroz';
    // myHero = 'Windstorm';
    heroes = [
       new Hero(1,'Windstorm'),
       new Hero(13,'Bombasto'),
       new Hero(15,'Magneta'),
       new Hero(20,'Tornado')];
    myHero = this.heroes[0].name;
    title: string;

    constructor() {
        this.title = 'Tour of Heroes';
    }

    summs(a,b): number {return a+b;}
}

