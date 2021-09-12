import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { AuthService } from './auth.service'
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service'

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float:right; color: tomato; padding-left: 10px; }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm?:FormGroup

  constructor(private authService:AuthService, 
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
      console.log(this.toastr.success('hey'))
  }

  ngOnInit() {
    const firstName = new FormControl(this.authService.currentUser?.firstName)
    const lastName = new FormControl(this.authService.currentUser?.lastName)
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }
}
