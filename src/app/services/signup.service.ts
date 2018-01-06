import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {BaseService} from "./base.service";
import {Status} from "../classes/status";
import {SignUp} from "../classes/signup";

@Injectable()
export class SignUpService extends BaseService {
	constructor(protected http: Http) {
		super(http);
	}

	private signUpUrl = "api/sign-up/";

	createSignUp(signUp:SignUp) : Observable<Status> {
		return(this.http.post(this.signUpUrl, signUp)
			.map(this.extractMessage)
			.catch(this.handleError));
	}
}