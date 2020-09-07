import { User, EmploymentStatus } from './user';

export class UserDatabase {
    static index = 4;
    /*public static users = [
        new User(1, 'Cody', 'Burchett', 'test@email.com', '9/8/94', EmploymentStatus.FullTime, 'blue'),
        new User(2, 'Joe', 'Jangle', 'test2@email.com', '1/4/88', EmploymentStatus.FullTime, 'green'),
        new User(3, 'Bob', 'Biscuit', 'test3@email.com', '3/28/99', EmploymentStatus.PartTime, ''),
        new User(4, 'Steve', 'Showever', 'test4@email.com', '6/1/77', EmploymentStatus.PartTime, 'red')
      ];*/

      public static users = [
        new User(1, 'Cody', 'Burchett', 'test@email.com', '9/8/94', 'FullTime', 'blue'),
        new User(2, 'Joe', 'Jangle', 'test2@email.com', '1/4/88', 'FullTime', 'green'),
        new User(3, 'Bob', 'Biscuit', 'test3@email.com', '3/28/99', 'PartTime', ''),
        new User(4, 'Steve', 'Showever', 'test4@email.com', '6/1/77', 'PartTime', 'red')
      ];


    //delete specific user from the database
    public static delete(id:number) :void{
        for(var i = 0; i < this.users.length; i++){
            if (this.users[i]._id == id){
                this.users.splice(i, 1);
                break;
            }
        }
    }

    public static addUser(firstName:string, lastName:string, email:string, birthday:string, employmentStatus:string, color:string){
        //todo: add parameters for creation of user, check that all are present except for optional color, then create
        if (firstName != '' && lastName != '' && email != '' && birthday != '' && employmentStatus != ''){
            this.users.push(new User(++UserDatabase.index, firstName, lastName, email, birthday, employmentStatus, color));
            return true;
        }
        else{
            return false;
        }
    }

    public static editUser(id:number, firstName:string, lastName:string, birthday:string, employmentStatus:string, color:string){
        for (var i = 0; i < UserDatabase.users.length; i++){
            if (UserDatabase.users[i]._id == id){
                if (firstName != '' && lastName != '' && birthday != '' && employmentStatus != ''){
                    UserDatabase.users[i].firstName = firstName;
                    UserDatabase.users[i].lastName = lastName;
                    UserDatabase.users[i].birthday = birthday;
                    UserDatabase.users[i].employmentStatus = employmentStatus;
                    UserDatabase.users[i].favoriteColor = color;
                    return true;
                }
                else{
                    return false
                }
            }
        }
    }

    public static getUser(id:number){
        for (var i = 0; i < UserDatabase.users.length; i++){
            if (UserDatabase.users[i]._id == id){
                return UserDatabase.users[i];
            }
        }
    }

}
