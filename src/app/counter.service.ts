export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log("A-I",this.activeToInactiveCounter);
  }

  incrementInActiveToActive() {
    this.inactiveToActiveCounter++;
    console.log("I-A",this.inactiveToActiveCounter);
  }
}
