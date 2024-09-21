import { supabase } from '../supabaseClient'; // Ensure you import supabase client

export async function downloadFile() {
  const bucketName = 'cv-portfolio'; // Replace with your bucket name
  const filePath = 'Cover-Letter-for-Personal-Website.pdf'; // Replace with the path to the file in the bucket

  const { data, error } = await supabase.storage.from(bucketName).download(filePath);

  if (error) {
    console.error('Error downloading file:', error.message);
    return;
  }

  // Create a URL for the file
  const url = URL.createObjectURL(data);

  // Create a download link
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Cover-Letter-for-Personal-Website.pdf'; // Replace with the desired file name for downloading
  document.body.appendChild(a);
  a.click();

  // Clean up
  URL.revokeObjectURL(url);
  document.body.removeChild(a);
}


export async function handleSubmit() {
  // Basic regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[A-Za-z\s]+$/;
  const messageRegex = /^[A-Za-z\s,.\(\)!?\-]+$/;
  // Check for empty fields
  
  if (!nameRegex.test(this.name)) {
    this.showToast('Name can only contain letters and spaces.', 'danger');
    return;
  }

  // Validate email format
  if (!emailRegex.test(this.email)) {
    this.showToast('Please enter a valid email address.', 'danger');
    return;
  }

  if (!messageRegex.test(this.message)) {
    this.showToast('Message can only contain letters, spaces, commas, periods, parentheses, exclamation points, question marks, and dashes.', 'danger');
    return;
  }

  if (!this.name || !this.email || !this.message) {
    this.showToast('Please fill in all the fields.', 'danger');
    return;
  }

  try {
    const { data, error } = await supabase
      .from('messages')
      .insert([{ name: this.name, email: this.email, message: this.message }]);

    if (error) {
      console.error('Supabase insert error:', error);
      this.showToast('An error occurred while submitting the form. Please try again.', 'danger');
      return;
    }

    this.showToast('Thank you for your message!', 'success');
    this.name = '';
    this.email = '';
    this.message = '';
  } catch (error) {
    console.error('General form submission error:', error);
    this.showToast('An error occurred while submitting the form.', 'danger');
  }
}