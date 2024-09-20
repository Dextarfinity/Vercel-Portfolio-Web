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
