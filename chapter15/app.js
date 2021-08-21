class User{
    //constructor(){
    //    this.username = 'yen'; //this binds value of this function to new object
    //}

    constructor(username, age){
        this.username = username;
        this.age = age;
    }
}

const user1 = new User();

const user2 = new User('yen',24);
const user3 = new User ('hanh',24);


console.log(user2,user3);