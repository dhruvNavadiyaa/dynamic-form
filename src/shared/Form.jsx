import React from 'react'
import { signInArray } from '../description/form/signIn.description'

const Form = (props) => {
    // console.log(props);

    const { formData, handleChange, errors } = props;

    return (
        <div className='space-y-3'>
            {
                signInArray.map((item, index) => {
                    if (item.type === 'text' || item.type === 'email' || item.type === 'password') return (
                        <div key={index}>
                            <input
                                type={item.type}
                                name={item.name}
                                className={item.attributes?.className}
                                value={formData[item.name]}
                                onChange={(e)=>{handleChange(e,item)}}
                                placeholder={item.attributes?.placeholder}
                            />
                            <p className='text-red-500 text-sm'>{errors[item.name]}</p>
                        </div>
                    )
                    if (item.type === 'date') return (
                        <div key={index} className=''>
                            <p>{item.labelName}</p>
                            <input
                                type={item.type}
                                name={item.name}
                                className={item?.attributes?.className}
                                value={formData[item.name]}
                                onChange={(e)=>{handleChange(e,item)}}
                                placeholder={item.attributes?.placeholder}
                            />
                            <p className='text-red-500 text-sm'>{errors[item.name]}</p>
                        </div>
                    )
                    if (item.type === "radio") {
                        return (
                            <div key={index+'radio'}>
                                <div className='flex border p-2 rounded' >
                                    <p className='me-3'>{item.labelName}</p>
                                    {
                                        item?.options?.map((i, index) => {
                                            return (
                                                <div key={index+'a'}>
                                                    <label htmlFor={i.id}>{i.labelName}</label>
                                                    <input
                                                        type="radio"
                                                        id={i.id}
                                                        value={i.value}
                                                        name={item.name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className='text-red-500 text-sm'>{errors[item.name]}</p>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Form