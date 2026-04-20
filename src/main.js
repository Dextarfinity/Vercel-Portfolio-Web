import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './output.css'

createApp(App).mount('#app')


// Download CV Button
document.getElementById("downloadButton").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "assets/Cover Letter Glomer Celestino.pdf";
  link.download = "Cover Letter Glomer Celestino.pdf";
  link.click();
});

// Download Resume Button
document.getElementById("downloadResumeButton").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "assets/Celestino, Glomer Pimentel - Resume.pdf";
  link.download = "Celestino, Glomer Pimentel - Resume.pdf";
  link.click();
});