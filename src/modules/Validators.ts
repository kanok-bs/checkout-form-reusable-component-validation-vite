export default function useValidators() {
    const isEmpty = (fieldName:any, fieldValue:any) => {
     return !fieldValue ? "The " + fieldName + " field is required" : "";
    }
    const minLength = (fieldName:any, fieldValue:any, min:any) => {
         return fieldValue.length < min ? `The ${fieldName} field must be atleast ${min} characters long` : "";
   }
   const isEmail = (fieldName:any, fieldValue:any) => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(fieldValue) ? "The input is not a valid " + fieldName + " address" : "";
    }
    const isNum = (fieldName:any, fieldValue:any) => {
        let isNum = /^\d+$/.test(fieldValue);
        return !isNum ? "The " + fieldName + " field only have numbers" : "";
    }
   return {isEmpty, minLength, isEmail, isNum}
 }