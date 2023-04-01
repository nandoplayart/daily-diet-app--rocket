

export class MealModel {

    id: string;

    constructor(
    public name: string,    
    public date:string,
    public time: string,
    public description: string,
    public diet: boolean){
        this.id = '';
    }
}

