import { reactive } from "vue";
import useValidators from './validators'
const { isEmpty, minLength } = useValidators();
const errors = reactive({} as any);
export default function useFormValidation() {
    const validateNameField = (fieldName:any, fieldValue:any) => {
        errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : minLength(fieldName, fieldValue, 8)
     }
    const validateEmailField = (fieldName:any, fieldValue:any) => {
        errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : isEmail(fieldName, fieldValue)
    }
    return { errors, validateNameField, validateEmailField }
}