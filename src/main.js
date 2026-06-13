import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './output.css'

createApp(App).mount('#app')

const assetBase = `${import.meta.env.BASE_URL}assets/`
// updates

// Download CV Button
document.getElementById("downloadButton").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = `${assetBase}Cover%20Letter%20Glomer%20Celestino.pdf`;
  link.download = "Cover-Letter_Glomer-Celestino.pdf";
  link.click();
});

// Download Resume Button
document.getElementById("downloadResumeButton").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = `${assetBase}Celestino%2C%20Glomer%20Pimentel%20-%20Resume.pdf`;
  link.download = "Celestino, Glomer Pimentel - Resume.pdf";
  link.click();
});