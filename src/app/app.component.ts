import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentServiceService } from './enrollment-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-forms';
  topics = ['Angular','React','Vue'];
  userModel = new User('','name@gmail.com',1234567890,'default','morning',true);
  errorMsg='';

  constructor(private enrollmentService: EnrollmentServiceService){}

  public topicHasError=true;
  validateTopic(value:any){
    if(value === 'default'){
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
  }

  submitEnrollment(){
    console.log(this.userModel);
    this.enrollmentService.submitEnrollment(this.userModel)
    .subscribe(
      success=> console.log('success ',success),
      error=> this.errorMsg=error.statusText
    );
  }

}
