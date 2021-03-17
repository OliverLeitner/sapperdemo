import type {IName} from "./iname.interface"
import type {IGoogle} from "./igoogle.interface"

export interface IUser {
    _id: string,
    email: string,
    name: IName,
    isAdmin: boolean,
    google: IGoogle
}
