export default class Team {
  constructor() {
    this.errorCode = new Map();
  }

  add(code, error) {
    this.errorCode.set(code, error);
  }

  translate(code) {
    return this.errorCode.has(code) === false ? 'Unknown error' : this.errorCode.get(code);
  }
}
