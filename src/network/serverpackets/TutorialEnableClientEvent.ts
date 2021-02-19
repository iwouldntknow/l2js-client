import GameClientPacket from "./GameClientPacket";

export default class TutorialEnableClientEvent extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _notifications = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
