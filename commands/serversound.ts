import { Command } from ".";
import * as Core from "../core";
import Logger from "js-logger";

export class CommandServerSound extends Command {
    public constructor(controller: Core.Controller) {
        super(controller);
    }

    public processCommand(data: FFB.Protocol.Messages.ServerSound) {
        Logger.debug("Processing server sound command", data);
        
        this.controller.SoundEngine.play(data.sound);
    }
}
