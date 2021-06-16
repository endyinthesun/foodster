import { makeObservable, observable, action } from "mobx";
class Others {
  modalVisible = false;

  constructor() {
    makeObservable(this, {
      modalVisible: observable,
      toggleModalVisible: action,
    });
  }

  toggleModalVisible() {
    this.modalVisible = !this.modalVisible;
  }
}

export default new Others();
