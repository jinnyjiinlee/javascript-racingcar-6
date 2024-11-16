import { Input } from '../View/inputViews.js';

export class MainController {
  async startProgram() {
    new Input().getCarNamesInput();
  }
}
