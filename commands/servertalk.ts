import { Command } from ".";
import * as Core from "../core";
import Logger from "js-logger";

export class CommandServerTalk extends Command {
    public constructor(controller: Core.Controller) {
        super(controller);
    }

    public processCommand(data: FFB.Protocol.Messages.ServerTalk) {
        Logger.warn("Processing server talk command", data);
    }
}
