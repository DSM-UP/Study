const email = null; // 이런 ...

try {
  const validatedEmail = validateEmail(email);
  if (validatedEmail instanceof Error) {
    console.error(`Error: ${validatedEmail.message}`);
  } else {
    console.log(`Valid email: ${validatedEmail}`);
  }
} catch (err) {
  console.error(`Error: ${err.message}`);
}
