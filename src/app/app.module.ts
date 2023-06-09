import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentComponent } from './content/content.component';
import { TitleComponent } from './title/title.component';
import { DescriptionComponent } from './description/description.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ResourcesComponent } from './resources/resources.component';
import { ListComponent } from './list/list.component';
import { ProblemComponent } from './problem/problem.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContentButtonComponent } from './content-button/content-button.component';
import { ListRawComponent } from './list-raw/list-raw.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
      ContentComponent,
    TitleComponent,
    DescriptionComponent,
    NavbarComponent,
    ToolbarComponent,
    ResourcesComponent,
    ListComponent,
    ProblemComponent,
    NotFoundComponent,
    ContentButtonComponent,
    ListRawComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
