import GameClientPacket from "./GameClientPacket";

export default class TradeDone extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();
    const _result = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
