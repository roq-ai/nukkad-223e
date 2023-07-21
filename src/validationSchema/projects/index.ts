import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  status: yup.string().required(),
  vendor_id: yup.string().nullable(),
  supplier_id: yup.string().nullable(),
});
