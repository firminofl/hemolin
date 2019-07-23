import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Messages } from 'src/app/constants';

// import { AuthenticationService } from 'app/control/authentication/authentication.service';
// import { SettingsService } from 'app/control/settings/settings.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.auth.login(this.loginForm.value).subscribe(
      (res) => {
        this.toastr.success(Messages.login_success, Messages.welcome)
        this.router.navigate(['/home']);
      },
      (err) => {
        this.toastr.error(Messages.login_invalid, Messages.login_error)
      } 
    )
  }

}
