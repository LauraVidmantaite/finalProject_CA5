import * as yup from 'yup';

const userBodyValidationSchema = yup.object({
  name: yup.string()
    .required('name is required'),
  surname: yup.string()
    .required('surname is required'),
  email: yup.string()
    .required('email is required')
    .email('email format is invalid'),
  dateFrom: yup.string()
    .required('dateFrom is required')
    .matches(/^(20|19)[0-9]{2}-[0-9]{2}$/g, 'datefrom must be in yyyy-mm format'),
  dateTo: yup.string()
    .required('dateTo is required')
    .matches(/^(20|19)[0-9]{2}-[0-9]{2}$/g, 'dateTo must be in yyyy-mm format')
    .test(
      'date range validation',
      'dateTo must be at least one month later',
      (dateTo, context) => {
        const dateFrom = context.parent.dateFrom
        const dateFromYear = Number(dateFrom.slice(0, 4));
        const dateToYear = Number(dateTo.slice(0, 4));
        if (dateFromYear > dateToYear) return false;
        if (dateToYear > dateFromYear) return true;
        const dateFromMonth = Number(dateFrom.slice(-2));
        const dateToMonth = Number(dateTo.slice(-2));

        return dateToMonth > dateFromMonth;
      },
    )
});

export default userBodyValidationSchema;