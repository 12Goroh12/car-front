import { makeAutoObservable } from "mobx";

class Cars {
  popup: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  togglePopup() {
    this.popup = !this.popup;
  }

  hidePopup() {
    this.popup = false;
  }
}

const carStore = new Cars();

export default carStore;
