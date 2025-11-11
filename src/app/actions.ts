'use server';

export async function submitContactForm(formData: FormData) {
  // In a real application, you would process the form data,
  // e.g., send an email, save to a database, etc.
  console.log('Form data received:');
  console.log({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Always return a success response for this example
  return { success: true, message: "Thank you for your message. We'll get back to you soon!" };
}
