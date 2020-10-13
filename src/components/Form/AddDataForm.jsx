import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const AddDataSchema = Yup.object().shape({
  name: Yup.string().required(),
  age: Yup.string().required(),
  occupation: Yup.string().required(),
  favoriteDish: Yup.string().required(),
  favoriteVacationSpot: Yup.string().required(),
  favoriteDestination: Yup.string().required()
});

const AddDataForm = ({ setShowForm, addRow }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          age: '',
          occupation: '',
          favoriteDish: '',
          favoriteVacationSpot: '',
          favoriteDestination: ''
        }}
        validationSchema={AddDataSchema}
        onSubmit={(values) => {
          addRow(values);
          setShowForm(false);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <h3>Add new data below!</h3>
            <Field placeholder="Name?" id="name" name="name" /><br/>
            {errors.name && touched.name ? <div>{errors.name}</div> : null}

            <Field placeholder="Age?" id="age" name="age" /><br/>
            {errors.age && touched.age ? <div>{errors.age}</div> : null}

            <Field placeholder="Occupation?" id="occupation" name="occupation" /><br/>
            {errors.occupation && touched.occupation ? <div>{errors.occupation}</div> : null}

            <Field placeholder="Favorite Dish?" id="favoriteDish" name="favoriteDish" /><br/>
            {errors.favoriteDish && touched.favoriteDish ? <div>{errors.favoriteDish}</div> : null}

            <Field placeholder="Favorite Vacation Spot?" id="favoriteVacationSpot" name="favoriteVacationSpot" /><br/>
            {errors.favoriteVacationSpot && touched.favoriteVacationSpot ? <div>{errors.favoriteVacationSpot}</div> : null}

            <Field placeholder="Favorite Destination?" id="favoriteDestination" name="favoriteDestination" /><br/>
            {errors.favoriteDestination && touched.favoriteDestination ? <div>{errors.favoriteDestination}</div> : null}

            <button type="submit" disabled={isSubmitting}>Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddDataForm;