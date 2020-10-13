import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";

const UpdateDataSchema = Yup.object().shape({
  name: Yup.string().required(),
  age: Yup.string().required(),
  occupation: Yup.string().required(),
  favoriteDish: Yup.string().required(),
  favoriteVacationSpot: Yup.string().required(),
  favoriteDestination: Yup.string().required()
});

const UpdateDataForm = ({ setShowUpdateForm, rowData, updateRow }) => {
  const { name, age, occupation, favoriteDish, favoriteVacationSpot, favoriteDestination, id } = rowData;
  const history = useHistory();

  return (
    <div>
      <Formik
        initialValues={{
          name,
          age,
          occupation,
          favoriteDish,
          favoriteVacationSpot,
          favoriteDestination
        }}
        validationSchema={UpdateDataSchema}
        onSubmit={(values) => {
          values = { id, ...values };
          updateRow(values);
          history.push('/');
        }}
      >
        {({ errors, touched, isSubmitting, values, handleChange }) => (
          <Form>
            <h3>Add new data below!</h3>
            <Field placeholder="Name?" id="name" name="name" value={values.name} onChange={handleChange('name')} /><br/>
            {errors.name && touched.name ? <div>{errors.name}</div> : null}

            <Field placeholder="Age?" id="age" name="age" value={values.age} onChange={handleChange('age')} /><br/>
            {errors.age && touched.age ? <div>{errors.age}</div> : null}

            <Field placeholder="Occupation?" id="occupation" name="occupation" value={values.occupation} onChange={handleChange('occupation')} /><br/>
            {errors.occupation && touched.occupation ? <div>{errors.occupation}</div> : null}

            <Field placeholder="Favorite Dish?" id="favoriteDish" name="favoriteDish" value={values.favoriteDish} onChange={handleChange('favoriteDish')} /><br/>
            {errors.favoriteDish && touched.favoriteDish ? <div>{errors.favoriteDish}</div> : null}

            <Field placeholder="Favorite Vacation Spot?" id="favoriteVacationSpot" name="favoriteVacationSpot" value={values.favoriteVacationSpot} onChange={handleChange('favoriteVacationSpot')} /><br/>
            {errors.favoriteVacationSpot && touched.favoriteVacationSpot ? <div>{errors.favoriteVacationSpot}</div> : null}

            <Field placeholder="Favorite Destination?" id="favoriteDestination" name="favoriteDestination" value={values.favoriteDestination} onChange={handleChange('favoriteDestination')}/><br/>
            {errors.favoriteDestination && touched.favoriteDestination ? <div>{errors.favoriteDestination}</div> : null}

            <button type="submit" disabled={isSubmitting}>Update</button>
            <button type="button" onClick={() => setShowUpdateForm(false)}>Cancel</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateDataForm;