export default class Team {
  constructor() {
    this.errorCode = new Map();
    this.init();
  }

  init() {
    this.add(255, 'Ok');
    this.add(13, 'App error');
  }

  add(code, error) {
    this.errorCode.set(code, error);
  }

  translate(code) {
    return this.errorCode.has(code) === false ? 'Unknown error' : this.errorCode.get(code);
  }
}
