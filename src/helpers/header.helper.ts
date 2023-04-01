export class HeaderHelper {

    public static getTitleDescription = (mode:string)=>{
        switch (mode) {
          case 'new':
            return 'Nova refeição'
          case 'edit':
            return 'Editar refeição'
          case 'delete':
            return 'Refeição'
        }

        return '';
    } 
}