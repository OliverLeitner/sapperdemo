import type {IStatus} from "../interfaces/istatus.interface"
import type {IUser} from "../interfaces/iuser.interface"

export class AnimalFact {
    constructor(
        public deleted?: boolean,
        public source?: string,
        public text?: string,
        public status?: IStatus,
        public type?: string,
        public updatedAt?: string,
        public used?: boolean,
        public user?: IUser,
        public userName?: string
    ) {}
}