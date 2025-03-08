import { useState } from 'react'

export default function useForm() {

  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})

  const handleChange = (e, item) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    validateFields(name, value, item);
  }

  const validate = (name, value, item) => {
    let err = {}
    if (!value) {
      err = {
        ...err,
        [name]: item?.required?.defaultMsg
      }
    } else if (item?.patterns && !item?.patterns?.regex.test(value)) {
      console.log('pattern error')
      err = {
        ...err,
        [name]: item?.patterns?.error
      }
    } else {
      err = { ...err, [name]: '' }
    }
    return err
  }

  const validateFields = (name, value, item) => {
    const err = validate(name, value, item);
    setErrors({...err})
  }

  const validateAllFields = (fields) => {
    let err = {}
    fields?.forEach(element => {
      const fieldname = element.name;
      const newErr = validate(fieldname, formData[fieldname], element);
      err = { ...err, ...newErr };
    });
    setErrors({...err})
    return Object.values(err).every((item) => item === "")
  }

  const submitConditions = (signInArray) => {
    if (validateAllFields(signInArray) && Object.values(errors).every((item) => item === "")) return true;
  }

  return { formData, setFormData, handleChange, errors, submitConditions }
}
