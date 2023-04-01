import uuid from 'react-native-uuid';
import { DateHelper } from '../../helpers/date.helper';
import { MealModel } from "../models/meal";
import { IStorage,Storage } from '../storage';


export interface IMealRepository{
    create(meal:MealModel): Promise<MealModel>;
    update(meal:MealModel): Promise<MealModel>;
    find(id:string): Promise<MealModel | undefined>;
    delete(id:string): Promise<void>;

    list(date:string): Promise<MealModel[]>;
    listAll(): Promise<MealModel[]>;
}

export class MealRepository implements IMealRepository {
    private _key:string = '@daily-diet:mealsx1';
    private readonly _storage:IStorage ;

    constructor(){
        this._storage = new Storage();
    }

    public async create(meal:MealModel): Promise<MealModel>{
        let meals: MealModel[] = [];
        meal.id = uuid.v4().toString();
        const content = await this._storage.get(this._key);
        if(content){
            meals = JSON.parse(content) as MealModel[];
        }
        meals.push(meal);
        await this._storage.save(this._key, JSON.stringify(meals));
        return meal;
    }

    public async update(meal:MealModel): Promise<MealModel>{
        let meals: MealModel[] = [];
        const content = await this._storage.get(this._key);
        if(content){
            meals = JSON.parse(content) as MealModel[];
            const index = meals.findIndex(x=> x.id === meal.id);
            meals[index] = meal;
            await this._storage.save(this._key, JSON.stringify(meals));
        }        
        return meal;
    }

    public async find(id:string): Promise<MealModel | undefined>{
        let meal: MealModel | undefined;
        const content = await this._storage.get(this._key);
        if(content){
            const meals = JSON.parse(content) as MealModel[];
            meal = meals.find(x=>  x.id === id);
        }
        return meal;
    }

    public async delete(id:string): Promise<void>{
        let meals: MealModel[] = [];
        const content = await this._storage.get(this._key);
        if(content){
            meals = JSON.parse(content) as MealModel[];
            const UpdatedMeals = meals.filter(x=> x.id !== id);
            await this._storage.save(this._key, JSON.stringify(UpdatedMeals));
        }        
    }
       

    public async listAll(): Promise<MealModel[]>{
        let meals: MealModel[] = [];
        const content = await this._storage.get(this._key);
        if(content){
            meals = JSON.parse(content) as MealModel[];
        }
        return meals;
    }

    public async list(date:string): Promise<MealModel[]>{
        let meals: MealModel[] = [];
        const content = await this._storage.get(this._key);
        if(content){
            meals = JSON.parse(content) as MealModel[];
            meals = meals.filter(x=>  DateHelper.getFormateDate(x.date) === date);
        }
        return meals;
    }
}

