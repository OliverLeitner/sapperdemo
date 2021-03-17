import axios, { AxiosResponse } from "axios"
import {AnimalFact} from "../models/catfact.model"

export class FetchData extends AnimalFact {
    protected _animalData: AnimalFact[] = []
    constructor(
        public url: string = ""
    ) {
        super();
    }

    public get animalData(): AnimalFact[] {
        return <AnimalFact[]>(this._animalData ?? [])
    }

    public async fetchAnimalFacts(): Promise<AnimalFact[]>  {
        let animalPromise = <AxiosResponse>await axios.get(this.url);
        this._animalData = <AnimalFact[]>(<AxiosResponse<AnimalFact[]>>animalPromise).data;
        return await this._animalData
    }
}