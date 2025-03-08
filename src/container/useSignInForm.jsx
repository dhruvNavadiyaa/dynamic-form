import useForm from '../hooks/useForm'
import { signInArray } from '../description/form/signIn.description';

export default function useSignInForm(props) {

    const { formData, setFormData, handleChange, errors, validateAllFields } = useForm(signInArray);

    const handleSubmit = (e) => {

        e.preventDefault()
        if (!validateAllFields(signInArray)) return;
        if (Object.entries(errors).length > 0) return;
        
        console.log(formData);


    }

    return { formData, handleChange, errors, handleSubmit }
}
