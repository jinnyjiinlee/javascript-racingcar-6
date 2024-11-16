import { MainController } from './Controller/mainController.js';

class App {
  async play() {
    const controller = new MainController();
    await controller.startProgram();
  }
}

export default App;
