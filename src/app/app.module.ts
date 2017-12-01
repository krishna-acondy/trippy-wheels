import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Route } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';
import { Parallax, ParallaxConfig } from 'ngx-parallax';

import { AppComponent } from './app.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { HeaderComponent } from './shared/header/header.component';

export const routes: Route[] = [
  {path: 'home', component: AppComponent},
  {path: 'contact', component: AppComponent},
  {path: 'about', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    Parallax
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
