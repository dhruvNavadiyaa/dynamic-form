import useForm from '../hooks/useForm'
import { signInArray } from '../description/form/signIn.description';

export default function useSignInForm(props) {

    const { formData, handleChange, errors, submitConditions } = useForm(signInArray);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (submitConditions(signInArray)){
            console.log(formData);
        }
    }
    return { formData, handleChange, errors, handleSubmit }
}
