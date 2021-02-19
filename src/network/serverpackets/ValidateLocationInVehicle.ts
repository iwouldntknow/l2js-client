import GameClientPacket from "./GameClientPacket";

export default class ValidateLocationInVehicle extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _charObjId = this.readD();
    const _vehicleObjId = this.readD();

    const [_x, _y, _z] = this.readLoc();
    const _heading = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
