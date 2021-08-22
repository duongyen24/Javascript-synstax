/*
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
*/

//constructor function dont have function
function User(username, email){
    this.username = username;
    this.email = email;
    
}

User.prototype.login = function(){
    console.log(`${this.username} has logged in`);
    return this;
};

User.prototype.logout = function(){
    console.log(`${this.email} has logged out`);
    return this;
};

//prototype inheritance  dont have super() keyword
function Admin(username, email){
    User.call(this,username,email);
}



const user2 = new User('yen','abc@email.com');
user2.login().logout();
const user3 = new Admin('hanh','admin@email.com');
console.log(user3);