import { Component, OnInit } from '@angular/core';
import { UserDatabase } from '../user-database';
import { AddUserViewComponent } from '../add-user-view/add-user-view.component';

@Component({
  selector: 'app-main-view, .mainComponent',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  public users;
  editedUser : number;
  constructor() { }

  ngOnInit(): void {
    this.users = UserDatabase.users;
  }

  public onClickMe(index: number) :void{
    UserDatabase.delete(index);
    this.ActionAlert('The user was deleted.');
  }

  public AddUser(id:number, editing:boolean) : void{
    document.getElementById('mainView').style.display = 'None';
    document.getElementById('addView').style.display = 'block';
    if (editing){
      document.getElementById('addButton').style.display = 'None';
      document.getElementById('editButton').style.display = 'Block';
      document.getElementById('emailInput').setAttribute('disabled', 'true');
      AddUserViewComponent.setChosenUser(id);
    }else{
      document.getElementById('editButton').style.display = 'None';
      document.getElementById('addButton').style.display = 'Block';
      document.getElementById('emailInput').removeAttribute('disabled');
    }
  }

  public refreshUsers(){
    this.users = UserDatabase.users;
  }

  private ActionAlert(message:string){
    alert(message);
  }
}
