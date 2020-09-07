export class User {
    public _id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public birthday: string;
    public employmentStatus: string;
    public favoriteColor: string;

    constructor(id: number, firstName: string, lastName: string,
        email: string, birthday: string, employmentStatus: string, favoriteColor: string) {
        this._id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthday = birthday;
        this.employmentStatus = employmentStatus;
        this.favoriteColor = favoriteColor;
    }
}

export enum EmploymentStatus {
    FullTime ='Full Time',
    PartTime = 'Part Time'
}
