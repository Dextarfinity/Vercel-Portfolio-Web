<template>
  <header class="fixed xl:block w-full py-4 lg:px-0 px-5 z-[999] duration-300">
    <nav class="flex justify-between items-center max-w-6xl mx-auto px-2">
      <div class="flex gap-4 items-center">
        <div>
          <h4 class="font-bold text-lg uppercase">Dex .</h4>
        </div>
      </div>
      <ul class="gap-10 md:flex hidden hover:*:text-primary *:duration-200">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li class="theme-switch">
          <i class="fa-solid fa-circle-half-stroke cursor-pointer"></i>
        </li>
      </ul>
      <div class="flex items-center gap-6">
        <a href="#contact">
          <button class="btn btn-outline">
            <i class="fa-regular fa-paper-plane"></i> Email Me
          </button>
        </a>
        <span class="theme-switch md:hidden">
          <i class="fa-solid fa-circle-half-stroke cursor-pointer"></i>
        </span>
        <span id="menubar" class="cursor-pointer md:hidden text-xl">
          <i class="fa-solid fa-bars"></i>
        </span>
      </div>
    </nav>
  </header>

  <div
    :class="[
      'transparency fixed top-5 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded shadow-lg transition-opacity duration-500',
      toastVisible ? 'opacity-100' : 'opacity-0',
      toastColor,
    ]"
    @transitionend="onTransitionEnd"
  >
    <span>{{ toastMessage }}</span>
  </div>

  <span
    id="backdrop"
    class="fixed h-screen hidden bg-black/10 backdrop-blur-sm z-[997] inset-0 w-full"
  ></span>

  <ul
    id="mobile-nav"
    class="mobile-navbar gap-10 text-xl md:hidden dark:bg-slate-800 bg-primary text-white flex-center flex-col fixed w-full h-0 overflow-hidden bottom-0 duration-200 rounded-t-3xl left-0 z-[998]"
  >
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#projects">Projects</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
    <a href="#contact">
      <button class="btn btn-outline" id="hireMe">
        <i class="fa-regular fa-paper-plane"></i> Email Me
      </button>
    </a>
  </ul>

  <!-- Home -->
  <section
    id="home"
    class="homeall min-h-screen container grid place-items-center relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-heroLight before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-heroDark"
  >
    <div
      class="w-full pt-20 grid md:grid-cols-5 h-full items-center max-w-6xl justify-around"
    >
      <div class="lg:col-span-2 sm:pl-2 md:col-span-3 md:text-left text-center">
        <div class="parent">
          <div class="lg:col-span-2 md:col-span-3 image block lg:hidden xl:hidden">
            <img src="/assets/images/background.png" alt="" />
          </div>
        </div>
        <div>
          <h5 class="font-medium text-gray-600 dark:text-gray-200 mt-5">Hello Welcome</h5>
          <h1
            class="sm:text-5xl text-4xl dark:text-white !leading-normal relative font-medium"
          >
            I'm <span class="text-primary typedText"></span> <br />
            <span class="typedTexts"></span>
          </h1>
          <button id="hireMeButton" class="btn btn-filled mt-5">
            <i class="fa-regular fa-envelope"></i> Hire Me
          </button>
          <button
            class="font-semibold dark:text-gray-200 border-b-2 border-gray-700 ml-4"
          >
            <a href="https://github.com/Dextarfinity"
              ><i class="fa-solid fa-up-right-from-square"></i> See Portfolio</a
            >
          </button>
        </div>
        <div class="md:w-96 md:ml-auto flex mt-9 gap-2 dark:text-gray-300">
          <i class="fa-solid fa-border-all mt-0.5 md:inline-block hidden"></i>
          <p class="text-xs text-balance leading-5 max-w-md px-2 mx-auto">
            Experienced frontend developer with a passion of well user-friendly website
            creation.
          </p>
        </div>
        <div
          class="flex items-center md:justify-end justify-center dark:text-gray-200 text-gray-600 gap-6 mt-9 mb-9"
        >
          <p class="text-xs">Visit my socials —</p>
          <div class="flex justify-end gap-3">
            <a href="https://github.com/Dextarfinity" class="social-icon">
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/dexter-pimentel-07302a2a7/"
              class="social-icon"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/glomer.pimentel" class="social-icon">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="parent">
        <div class="lg:col-span-2 md:col-span-3 image hidden lg:block xl:block">
          <img src="/assets/images/background.png" alt="" />
        </div>
      </div>
      <div
        class="lg:col-span-2 md:col-span-6 lg:bg-gradient-to-l md:bg-none mt-9 bg-gradient-to-l dark:from-slate-800 from-gray-100 lg:h-96 md:h-auto h-96 w-full"
      >
        <ul
          class="text-2xl data-[slot=count]:*:text-3xl data-[slot=count]:*:font-bold leading-[3.14rem] text-center pt-5 lg:block md:flex items-center justify-between"
        >
          <li data-slot="count">4+</li>
          <li>Year of <span class="text-primary">Experience</span></li>
          <br />
          <li data-slot="count">4+</li>
          <li>Completed <span class="text-primary">Projects</span></li>
          <li>
            <button
              class="btn btn-outline lg:mt-10 md:mt-0 mt-10"
              id="downloadFile"
              @click="handleDownload"
            >
              <i class="fa-solid fa-download"></i> Download CV
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- About -->
  <section id="about" class="container min-h-screen flex-center">
    <div class="">
      <div class="text-center text-balance aboutintro">
        <h3>About me</h3>
        <p class="px-2 mt-3 text-gray-500">
          I am a well-versed in HTML, CSS, and JavaScript, and some of other frameworks
          and libraries, which allows me to implement interactive features. Additionally,
          I have experienced working as a Graphic Designer such as Adobe Illustrator,
          Photoshop, Premiere and After Effects.
        </p>
      </div>
      <div
        class="max-w-2xl grid md:grid-cols-1 gap-6 px-2 sm:grid-cols-3 *:text-lg *:sm:max-w-full *:max-w-sm hover:*:brightness-90 *:mx-auto *:sm:text-left *:text-center *:hover:cursor-pointer *:shadow-sm mt-10 mx-auto *:rounded-xl *:bg-gray-100 *:dark:bg-slate-800 *:p-7 *:flex *:md:flex-row *:flex-col *:items-center *:gap-12"
      >
        <div class="about1">
          <div class="*:text-primary">
            <i class="fa-solid fa-pen-nib"></i>
            <h6 class="font-semibold whitespace-nowrap mt-3">Frontend</h6>
          </div>
          <div>
            <p class="text-xs text-gray-600 dark:text-gray-400 leading-5 text-balance">
              I am well on using HTML, CSS, Bootstrap, Tailwind, JavaScript, and Vue when
              it comes to frontend.
            </p>
          </div>
          <i class="fa-solid fa-font text-primary cursor-pointer"></i>
        </div>
        <div class="about2">
          <div class="*:text-primary">
            <i class="fa-regular fa-object-ungroup"></i>
            <h6 class="font-semibold whitespace-nowrap mt-3">Backend</h6>
          </div>
          <div>
            <p class="text-xs text-gray-600 dark:text-gray-400 leading-5 text-balance">
              I don't have much expertise on backends but I am well on using PHP, Java and
              Python when it comes to backend.
            </p>
          </div>
          <i class="fa-brands fa-squarespace cursor-pointer text-primary"></i>
        </div>
        <div class="about3">
          <div class="*:text-primary">
            <i class="fa-solid fa-chart-simple"></i>
            <h6 class="font-semibold whitespace-nowrap mt-3">Database</h6>
          </div>
          <div>
            <p class="text-xs text-gray-600 dark:text-gray-400 leading-5 text-balance">
              I don't have much expertise on databases but I am well on using Supabase and
              PostgreSQL when it comes to database systems.
            </p>
          </div>
          <i class="fa-solid fa-chart-pie text-primary cursor-pointer"></i>
        </div>
      </div>
    </div>
  </section>

  <section id="projects" class="container min-h-screen flex-center">
    <div class="text-center text-balance text-gray-800 dark:text-gray-200">
      <h3 class="projecthead">Projects</h3>
      <br />
      <br />
      <div class="project-container">
        <div
          class="project-box text-primary dark:text-white bg-white dark:bg-gray-700 project1"
        >
          <i class="fa-solid fa-briefcase text-primary dark:text-white"></i>
          <h3 class="text-gray-800 dark:text-white">Completed</h3>
          <label class="text-gray-600 dark:text-gray-300">4+ Finished Projects</label>
        </div>
        <div class="project-box bg-white dark:bg-gray-700 project2">
          <i class="fa-regular fa-user text-gray-800 dark:text-white"></i>
          <h3 class="text-gray-800 dark:text-white">Clients</h3>
          <label class="text-gray-600 dark:text-gray-300">3 Happy Clients</label>
        </div>
        <div class="project-box bg-white dark:bg-gray-700 project3">
          <i class="fa-solid fa-award text-gray-800 dark:text-white"></i>
          <h3 class="text-gray-800 dark:text-white">Experience</h3>
          <label class="text-gray-600 dark:text-gray-300"
            >Almost 4 years of field in Graphics Designer</label
          >
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section
    id="contact"
    class="container relative max-w-4xl mx-auto min-h-screen flex-center px-5"
  >
    <div class="pb-10">
      <div class="text-center contacthead">
        <h3>Contact Me</h3>
        <p class="px-2 mt-3 text-gray-500">
          Looking for a web designer to create a sleek, modern, and user-friendly site? I
          specialize in building websites that not only look great but also work
          seamlessly across all devices. Whether you need a portfolio, e-commerce, or a
          business site, I can help you create something unique that truly represents your
          brand. Feel free to get in touch to discuss your project, get a quote, or ask
          any questions! Let's make your online presence stand out.
        </p>
      </div>
      <div class="mt-12 md:relative flex flex-col gap-5 sm:max-w-full mx-auto max-w-xs">
        <div
          class="contactdiv dark:bg-slate-800 bg-slate-50 dark:text-gray-100 text-gray-800 rounded-lg shadow-xl mx-auto md:w-2/3 py-14 px-7 w-full"
        >
          <h3 class="font-semibold text-3xl">
            Send Me A <br /><span class="text-primary">Message</span>
          </h3>
          <form
            @submit.prevent="handleSubmit"
            class="flex flex-col gap-4 mt-5 md:w-2/3 w-full"
            id="contactForm"
          >
            <div>
              <label for="name" class="text-gray-700">Name</label>
              <input
                v-model="name"
                type="text"
                id="name"
                class="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label for="email" class="text-gray-700">Email Address</label>
              <input
                v-model="email"
                type="email"
                id="email"
                class="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label for="msg" class="text-gray-700">Message</label>
              <textarea
                v-model="message"
                id="msg"
                class="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn btn-filled ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
          </form>
        </div>
        <div
          class="lastpart dark:bg-gray-700 bg-white py-12 px-7 md:absolute lg:-right-9 right-28 rounded-xl shadow-xl md:w-2/5 h-5/6 top-28 w-full mx-auto"
        >
          <h3 class="font-semibold text-2xl border-b pb-4 border-gray-600">
            Find or Visit Me <span class="text-primary">.</span
            ><i class="text-primary fa-solid fa-turn-down"></i>
          </h3>
          <div class="py-4">
            <ul class="*:flex *:gap-4 *:items-center *:mt-4">
              <li>
                <i class="fa-solid fa-location-dot"></i>
                <div>
                  <h2>Butuan City, Agusan del Norte</h2>
                  <address class="text-xs">Lumina Homes, Taguibo</address>
                </div>
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>
                <p>xdfeverharsh@gmail.com</p>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>
                <p>+63 905 544 1795</p>
              </li>
            </ul>
            <div
              class="flex items-center md:justify-end justify-center dark:text-gray-200 text-gray-600 gap-6 mt-9"
            >
              <p class="text-xs">Visit my socials</p>
              <div class="flex justify-end gap-3">
                <a href="https://github.com/Dextarfinity" class="social-icon">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/dexter-pimentel-07302a2a7/"
                  class="social-icon"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/glomer.pimentel" class="social-icon">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="dark:bg-slate-700 bg-slate-100 text-center py-2">
    Copyright &copy; Glomer Pimentel - All rights reserved
    <ul class="flex-center gap-5 py-4 text-sm">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li><a href="#projects">Projects</a></li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </footer>
</template>

<script>
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import { downloadFile } from "./supabaseJS";
import { supabase } from "../supabaseClient"; // Import the Supabase client

export default {
  name: "App",
  data() {
    return {
      name: "", // Bound to the Name input field
      email: "", // Bound to the Email input field
      message: "", // Bound to the Message textarea field
      toastVisible: false, // Controls toast visibility
      toastMessage: "", // Message to display in the toast
      toastColor: "", // Color of the toast based on type (success/error)
    };
  },
  mounted() {
    const header = document.querySelector("header");

    const toggleClasses = (element, classes, condition) => {
      classes.forEach((className) => {
        element.classList.toggle(className, condition);
      });
    };

    window.addEventListener("scroll", () => {
      toggleClasses(
        header,
        [
          "shadow-lg",
          "dark:sm:bg-slate-900",
          "dark:bg-slate-800",
          "dark:text-white",
          "bg-white",
        ],
        window.scrollY > 0
      );
    });

    const ELE = document.documentElement;
    const mobileNav = document.getElementById("mobile-nav");
    const mobileNavItem = document.querySelectorAll("#mobile-nav li");
    const backDrop = document.getElementById("backdrop");
    const menuBar = document.querySelector("#menubar");
    const menuBarIcon = document.querySelector("#menubar i");

    // Force dark mode on page load
    ELE.classList.add("dark");
    ELE.classList.add("text-gray-200", "bg-slate-900"); // Add dark mode styles

    // Add event listener to toggle theme
    document.querySelectorAll(".theme-switch").forEach((item) =>
      item.addEventListener("click", () => {
        const isDark = ELE.classList.toggle("dark");
        // Update styles based on the current theme
        if (isDark) {
          ELE.classList.add("text-gray-200", "bg-slate-900"); // Add dark mode styles
          localStorage.setItem("theme", "dark");
        } else {
          ELE.classList.remove("text-gray-200", "bg-slate-900"); // Remove dark mode styles
          localStorage.setItem("theme", "light");
        }
      })
    );

    const options = [backDrop, menuBar, ...mobileNavItem];

    options.forEach((item) =>
      item.addEventListener("click", () => {
        mobileNav.classList.toggle("h-0");
        mobileNav.classList.toggle("h-96");
        menuBarIcon.classList.toggle("fa-xmark");
        menuBarIcon.classList.toggle("fa-bars");
        backDrop.classList.toggle("hidden");
        document.documentElement.classList.toggle("overflow-hidden");
      })
    );

    // Check local storage and set theme accordingly
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      if (savedTheme === "dark") {
        ELE.classList.add("dark");
        ELE.classList.add("text-gray-200", "bg-slate-900"); // Add dark mode styles
      } else {
        ELE.classList.remove("dark");
        ELE.classList.remove("text-gray-200", "bg-slate-900"); // Remove dark mode styles
      }
    }

    // Typed.js for typing animations
    var typingEffect1 = new Typed(".typedTexts", {
      strings: ["Video Editor", "Logo Creator", "Developer", "Web Designer", " "],
      loop: true,
      typeSpeed: 120,
      backSpeed: 80,
      backDelay: 2000,
    });

    var typingEffect2 = new Typed(".typedText", {
      strings: ["Dexter", "Glomer", "Dexter", " "],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });

    /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal("header", {});
    sr.reveal(".homeall", { delay: 100 });
    sr.reveal(".projecthead", { delay: 100 });
    sr.reveal(".contacthead", { delay: 100 });
    sr.reveal(".contactdiv", { delay: 300 });

    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about1", { delay: 200 });
    srLeft.reveal(".about3", { delay: 200 });

    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srRight.reveal(".about2", { delay: 200 });
    srRight.reveal(".project1", { delay: 400 });
    srRight.reveal(".project2", { delay: 200 });
    srRight.reveal(".project3", { delay: 50 });
    srRight.reveal(".lastpart", { delay: 100 });

    // Hire Me function
    function hireMe() {
      const email = "xdfeverharsh@gmail.com";
      const subject = "Hiring Inquiry"; // Optional: Set a default subject
      const body = "Hello, I would like to hire you for..."; // Optional: Set a default body

      // Create a Gmail URL
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Redirect to the Gmail link
      window.location.href = gmailLink;
    }

    // Attach the hireMe function to the button's onclick event
    document.getElementById("hireMeButton").onclick = hireMe;
  },
  methods: {
    showToast(message, type) {
      this.toastMessage = message;
      this.toastColor =
        type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white";
      this.toastVisible = true;

      setTimeout(() => {
        this.hideToast();
      }, 3000);
    },
    hideToast() {
      this.toastVisible = false;
    },
    async handleSubmit() {
      // Basic regex for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const nameRegex = /^[A-Za-z\s]+$/;
      const messageRegex = /^[A-Za-z\s,.\(\)!?\-]+$/;
      // Check for empty fields

      if (!nameRegex.test(this.name)) {
        this.showToast("Name can only contain letters and spaces.", "danger");
        return;
      }

      // Validate email format
      if (!emailRegex.test(this.email)) {
        this.showToast("Please enter a valid email address.", "danger");
        return;
      }

      if (!messageRegex.test(this.message)) {
        this.showToast(
          "Message can only contain letters, spaces, commas, periods, parentheses, exclamation points, question marks, and dashes.",
          "danger"
        );
        return;
      }

      if (!this.name || !this.email || !this.message) {
        this.showToast("Please fill in all the fields.", "danger");
        return;
      }

      try {
        const { data, error } = await supabase
          .from("messages")
          .insert([{ name: this.name, email: this.email, message: this.message }]);

        if (error) {
          console.error("Supabase insert error:", error);
          this.showToast(
            "An error occurred while submitting the form. Please try again.",
            "danger"
          );
          return;
        }

        this.showToast("Thank you for your message!", "success");
        this.name = "";
        this.email = "";
        this.message = "";
      } catch (error) {
        console.error("General form submission error:", error);
        this.showToast("An error occurred while submitting the form.", "danger");
      }
    },

    async handleDownload() {
      try {
        await downloadFile(); // Call the function to download the file
        this.showToast("File downloaded successfully!", "success");
      } catch (error) {
        console.error("Error downloading file:", error);
        this.showToast("Error downloading file.", "danger");
      }
    },
  },
};
</script>

<style scoped>
.transparency {
  z-index: 9999;
}
body {
  overflow-x: hidden;
}

.parent {
  display: grid;
  place-items: center;
}

.image {
  width: 280px;
  height: 280px;
  overflow: hidden; /* Ensure no overflow if cropping */
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover ensures the image covers the container while preserving aspect ratio */
  object-position: top; /* Keeps the top part visible */
}

/* Responsive Design for Mobile */
@media only screen and (max-width: 540px) {
  .image {
    width: 100%; /* Allow image to scale with screen size */
    max-width: 280px;
    height: auto; /* Maintain aspect ratio */
  }
}
</style>
