function Person(name){
  this.fullNameArr = name.split(" ");
  this.firstName = this.fullNameArr[0];
  this.lastName = this.fullNameArr[1];
}

Person.prototype = {
  getFirstName: function(){
    return this.firstName;
  },
  getLastName: function(){
    return this.lastName;
  },
  getFullName: function(){
    return this.fullNameArr.join(" ");
  },
  setFirstName: function(first){
    this.firstName = first;
    this.fullNameArr[0] = first;
  },
  setLastName: function(last){
    this.lastName = last;
    this.fullNameArr[1] = last;
  },
  setFullName: function(full){
    this.fullNameArr = full.split(" ");
  }
}

var bob = new Person('Chandler Bing');
bob.getFirstName();
bob.setFirstName("Haskell");