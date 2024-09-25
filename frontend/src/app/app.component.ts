import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from "@angular/flex-layout";
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    RouterLink,
    FlexLayoutModule,
    StoreModule,
    CommonModule,
    
],
templateUrl: './app.component.html',
styleUrl: './app.component.css',
/*
providers: [
  provideState({ key: 'myVariable', reducer: myVariableReducer })
],
*/
  //providers: [provideStore({ myVariable: myVariableReducer })],  
 
})
export class AppComponent implements OnInit{

  data: any;
  errorMessage: string | null = null;

  constructor() {}

  ngOnInit(): void {




  }

  livello_ufficio = 0;


Goto_SediCentrali() {
this.livello_ufficio = 1;
}

Goto_SediTerritoriali() {
this.livello_ufficio = 2; 
}


}

