'use server';

export const submitForm = (prevState: string | null, form: FormData) => {
  console.log('Server action. Data:', form.get('title'));
  return form.get('title')?.toString() || '';
};
