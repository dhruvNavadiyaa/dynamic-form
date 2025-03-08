import { useState } from 'react'

export default function useForm() {

  // const [email, password, gender] = props;  

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

  const validateFields = (name, value, item) => {
    if (!value) {
      setErrors({
        ...errors,
        [name]: item?.required?.defaultMsg
      })

    } else if (item?.patterns && !item?.patterns?.regex.test(value)) {
      console.log('pattern error')
      setErrors({
        ...errors,
        [name]: item?.patterns?.error
      })
    } else {
      const newErrors = errors
      delete newErrors[name];
      setErrors(newErrors)
    }

  }

  const validateAllFields = (fields) => {
    let err = {}
    fields?.forEach(element => {
      const fieldname = element.name
      if (!formData[fieldname]) {
        err = {
          ...err,
          [fieldname]: element?.required?.defaultMsg
        }
      } else {
        const newErrors = errors
        delete newErrors[fieldname];
        setErrors(newErrors)
      }
    });
    setErrors(err)
    // console.log(Object.entries(err).length)
    return Object.entries(err).length === 0 ? true : false;
  }

  return { formData, setFormData, handleChange, errors, validateAllFields }
}
