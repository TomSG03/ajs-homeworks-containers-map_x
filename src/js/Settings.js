export default class Settings {
  constructor() {
    this.setDef = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
    this.setUser = new Map();
  }

  get settings() {
    return new Map([...this.setDef, ...this.setUser]);
  }
}
