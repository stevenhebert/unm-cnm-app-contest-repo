import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Status} from "../classes/status";
import {SignOutService} from "../services/signout.service";
import {SignInService} from "../services/signin.service";
import {CookieService} from "ng2-cookies";

@Component({
	selector: "user-nav",
	templateUrl: "./templates/user-nav.html"
})

export class UserNavComponent {

	status: Status = null;

	constructor(private SignOutService: SignOutService, private SignInService: SignInService, private  router: Router, private cookieService: CookieService){}

	isSignedIn = false;

	ngOnChanges(): void{
		this.isSignedIn = this.SignInService.isSignedIn;
	}

	signOut() : void {
		this.SignOutService.getSignOut()
			.subscribe(status => {
				this.status = status;

				if(status.status === 200) {
					this.router.navigate(["signout"]);
					this.SignInService.isSignedIn = false;
					this.cookieService.deleteAll();
					location.reload();
				}
			});
	}
}