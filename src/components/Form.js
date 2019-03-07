import React from 'react';
import TextInput from './TextInput';
import { Formik } from 'formik';  
import * as Yup from 'yup';
import { Animated } from 'react-animated-css';

const Form = props =>(
      <Animated
        animationInDelay={100}
        animationIn='fadeIn'
        animationOut='fadeOut'
        isVisible>
        <div className='b b-c p-a700'>
          <Formik
            initialValues={{
              City: '',
              Country: '',
            }}
            validationSchema={Yup.object().shape({
              City: Yup.string()
                .required('Your First Name Is Required!')
                .min(2, 'Your First Name Needs To Be Valid'),
              County: Yup.string()
                .required('Your Last Name Is Required!')
                .min(2, 'Your Last Name Needs To Be Valid'),
            })}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                console.log({ values, actions });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 4000);
            }}
            render={({
              isSubmitting,
              handleSubmit,
              values,
              handleChange,
              errors,
              touched,
              handleBlur,
              dirty,
              handleReset,
            }) => (
              <Animated
                animationInDelay={100}
                animationIn='fadeIn'
                animationOut='fadeOut'
                isVisible>
                <form action='/form' method='post'  onSubmit={props.getWeather}>
                  <div className='g'>
                    <div className='g--6 m-b300'>
                      <TextInput
                        title='City'
                        name='City'
                        placeholder='City'
                        value={values.City}
                        onChange={handleChange}
                        error={touched.City && errors.City}
                        onBlur={handleBlur}
                        required
                      />
                    </div>

                    <div className='g--6 m-b300'>
                      <TextInput
                        title='Country'
                        name='Country'
                        placeholder='Country'
                        value={values.Country}
                        onChange={handleChange}
                        error={touched.Country && errors.Country}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                  </div>

                  <div className='b'>
                    <div className='m-v400 m-h200'>
                      <button
                        disabled={!dirty || isSubmitting}
                        style={{"marginBottom" : "10em"}}
                        onClick={handleReset}
                        type='submit'
                        className='btn btn--c btn--br'>
                        Send Weather
                      </button>
                    </div>
                  </div>
                </form>
              </Animated>
            )}
          />
        </div>
      </Animated>
    );

export default Form;