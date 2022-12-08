let user = {
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  }
}

user.fullName = "John Smith";

console.log(user.firstName); // John
console.log(user.lastName); // Smith
console.log(user.fullName); // John Smith