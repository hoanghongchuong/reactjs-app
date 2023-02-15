import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import './Login.scss';
import { useFormik } from 'formik';

const onSubmit = async (values, actions) => {
    // console.log({ values });
    // console.log({ actions });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

function Login() {
    const initialValues = { email: '', password: '' };
    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit,
    });

    console.log(isSubmitting);
    return (
        <div className='login'>
            <div className='card-login'>
                <div className='left'>

                </div>
                <div className='right'>
                    <form onSubmit={handleSubmit}>
                        <h1 className='title'>Sign in</h1>
                        <div className='form-group mb-3'>
                            <label>Email</label>
                            <input
                                type='text'
                                name='email'
                                placeholder='Email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.email && touched.email ? "input-error form-control" : "form-control"}
                            />
                            {errors.email && touched.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className='form-group'>
                            <label>Password</label>
                            <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.password && touched.password ? "input-error form-control" : "form-control"}
                            />
                            {errors.password && touched.password && <p className="error">{errors.password}</p>}
                        </div>
                        <p className='forgot-password mt-1'><Link to='/'>Forgot Password?</Link></p>
                        <div className='mt-2'>
                            <button className='btn btn-login' type='submit' disabled={isSubmitting}>Login</button>
                        </div>

                        <div className='link-signup text-center mt-2'>
                            Don’t have an account? <Link to='/'>Sign Up</Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Login;
