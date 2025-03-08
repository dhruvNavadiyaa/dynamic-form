import { type } from "@testing-library/user-event/dist/type";

export const signInArray = [
    {
        name: "email",
        type: "email",
        required: {
            isRequired: true,
            defaultMsg: "Please enter Email.",
        },
        attributes: {
            name: "email",
            id: "email",
            placeholder: "Enter email",
            className: "p-2 border w-full rounded",
        },
        labelName: "Email",
        wrapElement: {},
        patterns:
        {
            regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            error: "This email is invalid. Make sure it’s written like example@email.com",
        },

    },
    {
        name: "password",
        type: "password",
        required: {
            isRequired: true,
            defaultMsg: "Please enter Password.",
        },
        attributes: {
            name: "password",
            id: "password",
            className: "p-2 border w-full rounded",
            placeholder: "Password",
        },
        labelName: "Password",
    },
    {
        name: "gender",
        type: "radio",
        labelName: "Gender",
        required: {
            isRequired: true,
            defaultMsg: "Please select gender.",
        },
        options: [
            { id: "male", className: "", value: 'male', labelName: 'male' },
            { id: "female", className: "", value: 'female', labelName: 'female' },
        ],
    },
    {
        name:'date',
        type:'date',
        labelName:'Date of birth',
        required:{
            isRequired: true,
            defaultMsg: "Please enter DOB",
        },
        attributes:{
            name:"dob",
            id:'dob',
            placeholder:"Enter date!",
            className:'p-2 border w-full rounded'
        },
        patterns:{
            regex: /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
            error: "Please enter valid Date",   
        }
    }
]

