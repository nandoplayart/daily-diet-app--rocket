export declare global {
    namespace ReactNavigation{
     interface RootParamList{
            Home: undefined;
            Dashboard: undefined,
            Meal: {
                mode: 'new' | 'edit',
                id?: string
            },
            MealDone: {
                diet: boolean
            },
            MealDetails:{
                id:string
            }
     }   
    }
}