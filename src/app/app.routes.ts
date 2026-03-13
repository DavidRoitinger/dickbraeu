import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { FotosComponent } from './components/fotos-component/fotos-component';
import { BreweryComponent } from './components/brewery-component/brewery-component';
import { BeerComponent } from './components/beer-component/beer-component';
import { HistoryComponent } from './components/history-component/history-component';
import { IngredientsComponent } from './components/ingredients-component/ingredients-component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent,},
    { path: 'bier', component: BeerComponent,},
    { path: 'braeuerei', component: BreweryComponent,},
    { path: 'geschichte', component: HistoryComponent,},
    { path: 'zutaten', component: IngredientsComponent,},
    { path: 'fotos', component: FotosComponent,},
    { path: '**', redirectTo: 'home'},
];
