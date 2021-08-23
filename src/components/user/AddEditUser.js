import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Modal, Button, FormSelect } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';

import { fetchOrganisations, fetchCountries } from '../../actions';


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  roles: Yup.string()
    .required('Required'),
  organisation: Yup.string()
    .required('Required')
  
});




const AddEditUser = (props) => {
  const [field, setField] = useState([]);
  console.log('props: ',props);

  useEffect(() => {
    props.fetchOrganisations(props.organisations);
    props.fetchCountries(props.countries);
  }, [])

  return(
    <Modal show={props.show} onHide={props.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Add New User</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      
    <Formik
      initialValues={{
        name: '',
        email: '',
        lastName: '',
        
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
    {({ errors, touched }) => (
      <Form>
        <div className="form-group">
          <label htmlFor="name">First Name</label>
          <Field id="name" name="name" placeholder="Helen" className="form-control" />
          {errors.name && touched.name ? (
             <div className="error">{errors.name}</div>
           ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="helen@gmail.com"
            type="email"
            className="form-control"
          />
          {errors.email && touched.email ? <div  className="error">{errors.email}</div> : null}
        </div>

        <div className="form-group">
          <label htmlFor="roles">Roles</label>
          <FormSelect size="lg" id="roles"
            name="roles">
            <option value="0">Owner</option>
            <option value="1">Other</option>
          </FormSelect>
          {errors.roles && touched.roles ? (
             <div className="error">{errors.roles}</div>
           ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="organisation">Organisation</label>
          <Field id="organisation" name="organisation" placeholder="Premium Meat Co." className="form-control" />
          {errors.name && touched.name ? (
             <div className="error">{errors.name}</div>
           ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="organisationFeatures">Organisation Features</label>
          <Select 
            id="organisationFeatures"
            name="organisationFeatures"
            isMulti
            options={props.organisations} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <FormSelect size="lg" id="country"
            name="country">
            <option value="1">Australia</option>
            <option value="2">American</option>
            <option value="3">New Zealand</option>
            <option value="4">Viet Nam</option>
          </FormSelect>
          {errors.country && touched.country ? (
             <div className="error">{errors.country}</div>
           ) : null}
        </div>
        
        
        <div className="cta">
          <Button type="submit">Submit</Button>
        </div>
        
      </Form>
    )}
      
    </Formik>
    </Modal.Body>
  </Modal>
  )
}

const mapStateToProps = (state) => {
  return { 
    organisations: state.organisationsReducer.organisations,
    countries: state.countriesReducer.countries
  };
};

export default connect(
  mapStateToProps,
  { fetchOrganisations, fetchCountries }
)(AddEditUser);