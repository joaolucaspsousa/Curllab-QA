import { faker } from "@faker-js/faker";

class userDto {
  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
    this.birthday = faker.date.past();
  }

  _getFirstName() {
    return this.firstName;
  }

  _getLastName() {
    return this.lastName;
  }

  _getEmail() {
    return this.email;
  }

  _getPassword() {
    return this.password;
  }

  _getBirthday() {
    return this.birthday;
  }

  getSimplifyUser() {
    return {
      firstName: this._getFirstName(),
      lastName: this._getLastName(),
      email: this._getEmail(),
    };
  }

  getFullUser() {
    return {
      firstName: this._getFirstName(),
      lastName: this._getLastName(),
      email: this._getEmail(),
      password: this._getPassword(),
      birthday: this._getBirthday(),
    };
  }
}

export default { userDto };
