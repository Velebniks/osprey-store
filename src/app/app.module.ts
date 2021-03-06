import { DataService } from './data.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { BackpacksComponent } from './backpacks/backpacks.component';
import { CartComponent } from './cart/cart.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

const appRoutes: Routes = [
  { path: 'backpacks', component: BackpacksComponent },
  { path: 'cart',      component: CartComponent },
  { path: '',
    redirectTo: '/backpacks',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BackpacksComponent,
    CartComponent,
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }