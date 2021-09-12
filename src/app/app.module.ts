import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,

  EventListResolver,
  CreateSessionComponent,
  UpvoteComponent,
  DurationPipe,
  SessionListComponent,
  EventResolver,
} from './events/index'
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

declare let toastr:Toastr;

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    UpvoteComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    EventService, 
    { provide: TOASTR_TOKEN, useValue: toastr },
    EventResolver,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }

  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent ) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
