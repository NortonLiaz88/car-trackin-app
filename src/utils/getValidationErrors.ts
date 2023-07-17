import {ValidationError} from 'yup';

export default function getValidationErros(
  err: ValidationError,
): Record<string, string> {
  const validationErrors: Record<string, string> = {};

  err.inner.forEach(error => {
    validationErrors[error.path ?? ''] = error.message;
  });

  return validationErrors;
}
