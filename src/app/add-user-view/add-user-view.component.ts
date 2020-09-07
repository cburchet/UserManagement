import { Component, OnInit, Input } from '@angular/core';
import { UserDatabase } from '../user-database';

@Component({
  selector: 'app-add-user-view',
  templateUrl: './add-user-view.component.html',
  styleUrls: ['./add-user-view.component.css']
})
export class AddUserViewComponent implements OnInit {
  static chosenId : number;
  constructor() { }

  ngOnInit(): void {
  }

  public AddUser(firstName:string, lastName:string, email:string, birthday:string, employmentStatus:string, color:string) : void{
    document.getElementById('addView').style.display = 'None';
    document.getElementById('mainView').style.display = 'block';
    if (UserDatabase.addUser(firstName, lastName, email, birthday, employmentStatus, color)){
      this.ActionAlert('The addition was successful.');
    }else{
      this.ActionAlert('The addition failed.');
    }
  }

  public EditUser(firstName:string, lastName:string, birthday:string, employmentStatus:string, color:string){
    document.getElementById('addView').style.display = 'None';
    document.getElementById('mainView').style.display = 'block';
    if (UserDatabase.editUser(AddUserViewComponent.chosenId, firstName, lastName, birthday, employmentStatus, color)){
      this.ActionAlert('The edit was successful.');
    }else{
      this.ActionAlert('The edit failed.');
    }
  }

  public static setChosenUser(chosenId:number){
    this.chosenId = chosenId;
    var user = UserDatabase.getUser(chosenId);
    (<HTMLInputElement>document.getElementById('firstNameInput')).value = user.firstName;
    (<HTMLInputElement>document.getElementById('lastNameInput')).value = user.lastName;
    (<HTMLInputElement>document.getElementById('emailInput')).value = user.email;
    (<HTMLInputElement>document.getElementById('birthdayInput')).value = user.birthday;
    (<HTMLInputElement>document.getElementById('employmentInput')).value = user.employmentStatus;
    (<HTMLInputElement>document.getElementById('colorInput')).value = user.favoriteColor;
  }

  private ActionAlert(message:string){
    alert(message);
  }
}
