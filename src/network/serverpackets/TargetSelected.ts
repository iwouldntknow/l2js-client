import GameClientPacket from "./GameClientPacket";
import { GlobalEvents } from "../../mmocore/EventEmitter";

export default class TargetSelected extends GameClientPacket {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    const _objectId = this.readD();
    const _targetObjectId = this.readD();

    const char = this.Client.CreaturesList.getEntryByObjectId(_objectId);
    if (char) {
      const target = this.Client.CreaturesList.getEntryByObjectId(_targetObjectId);
      if (target) {
        char.Target = target;
      }
    }

    GlobalEvents.fire("TargetSelected", {
      objectId: _objectId,
      targetObjectId: _targetObjectId
    });

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
