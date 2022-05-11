import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Parking {
    @Field((type) => String)
    reserverEmail?: string;
    
    @Field((type) => Date)
    reservationDate?: Date;

    @Field((type) => String)
    visitorEmail?: string;

    @Field((type) => String)
    parkingNumber: number;

}

