import { Command } from ".";
import * as Core from "../core";
import * as ClientCommands from "../model/clientcommands";
import Logger from "js-logger";

export class CommandGameState extends Command {
    public constructor(controller: Core.Controller) {
        super(controller);
    }

    public processCommand(data: FFB.Protocol.Messages.ServerGameState) {
        Logger.debug("Processing game state command", data);

        this.controller.enqueueCommand(new ClientCommands.Initialize(data));
    }
}
