import { makeAutoObservable } from "mobx";

export interface IUser {
  email: string;
  name: string;
  password: string;
  roles: string[];
  __v: number;
  _id: string;
}

class User {
  users: IUser = {
    email: "",
    name: "",
    password: "",
    roles: [],
    __v: 0,
    _id: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  addUser(user: IUser) {
    this.users = this.users = user;
    localStorage.setItem("user", JSON.stringify(user));
  }

  removeUser() {
    localStorage.removeItem("user");
  }
}

const userStore = new User();

export default userStore;
