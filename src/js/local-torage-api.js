export class Storage {
  constructor(storageName) {
    this.storageName = storageName;
  }
  setItem(data) {
    localStorage.setItem(JSON.stringify(data));
  }
  getItem() {
    return JSON.parse(localStorage.getItem(this.storageName));
  }
  getItem() {
    return JSON.parse(localStorage.getItem(this.storageName));
  }
}
