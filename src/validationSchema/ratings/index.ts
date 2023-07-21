import * as yup from 'yup';

export const ratingValidationSchema = yup.object().shape({
  score: yup.number().integer().required(),
  project_id: yup.string().nullable(),
  supplier_id: yup.string().nullable(),
});
