import { makeAutoObservable } from "mobx";
import { IUser } from "../types/user";

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
    localStorage.removeItem("social");
  }
}

const userStore = new User();

export default userStore;
