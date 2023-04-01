import { MealModel } from "../repositories/models/meal";


//todo adicionar propriedade a classe abaixo para retornar todos os
//dados necessários para o relatório
export class FormatResult {
    constructor(public result:number, public formatResult:string){

    }
}

export class StatisticHelper {

    public static getPercentagemDiet = (meals:MealModel[] | undefined) =>{
       if(meals === undefined || meals?.length === 0) return new FormatResult(0,'0,00%');
        const diet = meals.filter(meal => meal.diet).length;
        const sum =meals.length;
        const result = Math.round((diet * 100 / sum));
        const formatResult =  `${result.toLocaleString('pt-br',{minimumFractionDigits: 2})}%`;
        return new FormatResult(result,formatResult);  
    }

    public static getMealsDiet = (meals:MealModel[] | undefined) =>{
        return meals?.filter(meal => meal.diet).length || 0;
    }

    public static getMealsNoDiet= (meals:MealModel[] | undefined) =>{
        return meals?.filter(meal => !meal.diet).length || 0;
    }

    public static getSequenceDiet = (meals:MealModel[] | undefined) =>{
        if(!meals) return 0;
        let sequence = 0;
        let bestSequence = 0;
        meals.forEach(meal => {
            if(meal.diet)
                sequence += 1;
            if(sequence > bestSequence)
                    bestSequence = sequence;
            if(!meal.diet)
                sequence = 0;
        });      
        return bestSequence;
    }
}