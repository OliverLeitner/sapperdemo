import type {IStatus} from "./istatus.interface"
import type {IUser} from "./iuser.interface"

export interface IAnimalFact {
    deleted: boolean,
    source: string,
    text: string,
    status: IStatus,
    type: string,
    updatedAt: string,
    used: boolean,
    user: IUser
    userName?: string
}
