import React from 'react';
import { useForm } from 'react-hook-form';
import FormError from './FormError';

// eslint-disable-next-line
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginForm = ({onSubmit}) => {
 
    const { register, handleSubmit, errors } = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2> Login </h2>
            <div className="form-group">
                <div className='form-input'>
                    <label htmlFor="email"> Mail: </label>
                    <input
                        ref={register({
                            required: 'Ingrese el mail', 
                            pattern: {value: EMAIL_PATTERN, message: 'Formato de mail invalido!'}})}          
                        name="email"
                        type="email"
                        className="form-control"
                        id="email" 
                    />
                </div>
                <FormError errors={errors} name="email">
                    {(message) => <p>{message}</p>}
                </FormError>
            </div>
            
            <div className="form-group">
             <div className='form-input'>
                    <label htmlFor="password"> Contraseña: </label>
                    <input 
                        ref={
                            register({
                            required: "Ingrese la contraseña.", 
                            minLength: {value: 8, message: 'La contraseña debe tener al menos 8 caracteres.'}})
                        }      
                        name="password"
                        type="password"
                        className="form-control"
                        id="password"
                    />
                </div>
                <FormError errors={errors} name="password">
                    {(message) => <p>{message}</p>}
                </FormError>
            </div>

            <div className="form-group">
                <div className='forms-checkbox'>
                    <label htmlFor="keepOnline"> Mantenerse conectado </label>
                    <input      
                        ref={register()}
                        name="keepOnline"
                        type="checkbox"
                        className="form-control"
                        id="keepOnline"
                    />
                </div>
            </div>
            <a href='/techs-listing'>
              <button type="submit" className="btn"> Ingresar </button>
            </a>
        </form>
    )
}

export default LoginForm; 