import {useForm} from "react-hook-form"

interface FormInputs {
    firstName: string;
    lastName: string;
    age: number
}

export function Express(){
    const {register, handleSubmit} = useForm<FormInputs>();

    const onSubmit = (data: any) => {
        console.log(data);

        fetch("http://localhost:8080/").then(res => res.json()).then(res => console.log(res))
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstName">First Name:</label>
                <input id="firstName" {...register("firstName")} type="text" />
                <br />

                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" {...register("lastName")} type="text" />
                <br />

                <label htmlFor="age">Age:</label>
                <input id="age" {...register("age")} type="number" />
                <br />
                
                <input type="submit" />
            </form>
        </div>
    )
}