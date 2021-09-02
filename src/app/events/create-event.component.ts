import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared/index";

@Component({
  templateUrl: 'create-event.component.html',
  styles: [`
    em { float:right; color: tomato; padding-left: 10px; }
  `]
})

export class CreateEventComponent {
  newEvent: any
  isDirty:boolean = true
  constructor(private router: Router, private eventService:EventService) {}

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues)
    this.isDirty = false
    this.router.navigate(['/events'])
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}
