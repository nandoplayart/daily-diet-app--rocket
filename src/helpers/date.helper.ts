import moment from "moment";


export class DateHelper {

    public static isValidDate = (date:string) => {
        if(date === undefined || date.length < 10) return true;
        const day = parseInt(date.substring(0,2));
        const month = parseInt(date.substring(3,5));
        const year = parseInt(date.substring(6,10));
        if(year < 1900) return false;
        const result = moment([year, month -1,day]).format();
        return result !== 'Invalid date'; 
      }
    
      public static isValidTime = (time:string) =>{
        if(time === undefined || time.length < 5) return true;
        const hours = parseInt(time.substring(0,2));
        const minutes = parseInt(time.substring(3,5));
        if(hours > 23 || minutes > 59) return false;
        return true;
      }

      public static getFormateDate = (date:string)=>{
        const day = date.substring(0,2);
        const month = date.substring(3,5);
        const year = date.substring(6,10);
        return `${day}-${month}-${year}`;
      }

      public static getFormateDateDisplayList = (date:string)=>{
        const day = date.substring(0,2);
        const month = date.substring(3,5);
        const year = date.substring(8,10);
        return `${day}.${month}.${year}`;
      }

    public static getFormateDateDisplay = (date:string)=>{
      const day = date.substring(0,2);
      const month = date.substring(3,5);
      const year = date.substring(6,10);
      return `${day}.${month}.${year}`;
  }

    public static getRevertFormateDate = (date:string)=>{
      const day = date.substring(0,2);
      const month = date.substring(3,5);
      const year = date.substring(6,10);
      return `${day}/${month}/${year}`;
  }

}