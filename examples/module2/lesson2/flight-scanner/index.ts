import { ZodError } from 'zod';
import { FlightScannerFormSchema } from './models/FlightScannerForm';

const form = document.querySelector('#flight-form') as HTMLFormElement;
const errorContainer = document.querySelector('#errors') as HTMLDivElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  try {
    FlightScannerFormSchema.parse(formData);
  } catch (errors: unknown) {
    const errorItems: string[] = [];
    (errors as ZodError[]).map((error) => {
      errorItems.push(`<li>${error.message}</li>`);
    });
    errorContainer.innerHTML = `${errorItems.join('')}`;
  }
});
