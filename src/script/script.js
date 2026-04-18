

      
      // 1. Dynamic Pricing Logic
      const courseSelect = document.getElementById("courseSelect");
      const priceDisplay = document.getElementById("priceDisplay");

      courseSelect.addEventListener("change", (e) => {
        priceDisplay.textContent = `$${e.target.value}`;
      });

      // 2. Form Validation Logic
      const enrollForm = document.getElementById("enrollForm");

      enrollForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById("fullName");
        const email = document.getElementById("email");
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");

        // Simple Validation
        if (name.value.length < 2) {
          nameError.classList.remove("hidden");
          isValid = false;
        } else {
          nameError.classList.add("hidden");
        }

        if (!email.value.includes("@")) {
          emailError.classList.remove("hidden");
          isValid = false;
        } else {
          emailError.classList.add("hidden");
        }

        if (isValid && courseSelect.value) {
          alert(`Success! Enrolled in course for $${courseSelect.value}`);
        }
      });

      function updatePrice(select) {
        const price = select.value;
        const courseName =
          select.options[select.selectedIndex].getAttribute("data-name");

        document.getElementById("display-price").innerText = "$" + price;
        document.getElementById("display-course").innerText = courseName;
      }