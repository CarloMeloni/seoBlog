import { useState } from 'react';

const SignupComponent = () => {
    const [values, setValues] = useState({
        name: 'Carlo',
        email: "carlo@example.com",
        password: '123456',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const {
        name,
        email,
        password,
        error,
        loading,
        message,
        showForm
    } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.table({
            name,
            email,
            password,
            error,
            loading,
            message,
            showForm
        });
    };

    const handleChange = name => (e) => {
        setValues({ ...values, error: false, [name]: e.target.value })
    };

    const SignupForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input value={name} onChange={handleChange('name')} type="text" className="form-control" placeholder="Type here your name" />
                </div>
                <div className="form-group">
                    <input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="Type here your e-mail" />
                </div>
                <div className="form-group">
                    <input value={password} onChange={handleChange('password')} type="password" className="form-control" placeholder="Type here your password" />
                </div>
                <div>
                    <button className="btn btn-primary">Signup</button>
                </div>
            </form>
        );
    };

    return (
        <React.Fragment>
            {SignupForm()}
        </React.Fragment>
        
    )
}

export default SignupComponent;