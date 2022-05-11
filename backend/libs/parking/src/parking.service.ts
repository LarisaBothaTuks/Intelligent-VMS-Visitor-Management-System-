import { Injectable } from '@nestjs/common';
import { CommandBus } from "@nestjs/cqrs";
import { Visitor } from "../../visitor/src/schema/visitor.schema";
import { Invite } from "../../visitor-invite/src/schema/invite.schema";
import { ReserveParkingCommand } from './commands/impl/reserveParking.command';

@Injectable()
export class ParkingService {
    constructor(private commandBus: CommandBus) {}

    async reserveParking(visitor: Visitor, invite: Invite){
        this.commandBus.execute(
            //TODO (LARISA) user specify specific parking close to his apartment

            //TODO (LARISA) get next avail parking
            
            new ReserveParkingCommand(visitor.visitorID,invite.inviteDate,0)
        );

        return "here";
    }

    async freeParking(info: Invite | Visitor){
       /* this.commandBus.execute(
            
        )*/
    }

    async assignParking(info: Invite | Visitor){
        /* this.commandBus.execute(
            
         )*/
     }
}

