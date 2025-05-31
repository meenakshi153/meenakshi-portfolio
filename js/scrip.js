
  // Initialize EmailJS
  
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm('service_pc2qc09', 'template_plo98kd', this)
      .then(function(response) {
          console.log("SUCCESS!", response.status, response.text);
          
          // Show toast
          const toast = document.getElementById("toast");
          toast.classList.remove("hidden");
          toast.classList.add("opacity-100");

          // Hide after 3 seconds
          setTimeout(() => {
            toast.classList.remove("opacity-100");
            toast.classList.add("opacity-0");
            setTimeout(() => toast.classList.add("hidden"), 300);
          }, 3000);

          // Optional: Clear form
          document.getElementById("contact-form").reset();
      }, function(error) {
          console.error("FAILED...", error);
          alert("There was an error sending the message. Please try again later.");
      });
});



        // Mobile Menu Elements
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenuCloseButton = document.getElementById('mobile-menu-close-button');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        const heroImageContainer = document.getElementById('hero-image-display-area'); // Get hero image container

        function openMobileMenu() {
            if (mobileMenu) {
                mobileMenu.classList.remove('-translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                document.body.style.overflow = 'hidden'; // Prevent background scroll
                if (heroImageContainer) {
                    heroImageContainer.classList.add('hidden'); // Hide hero image container
                }
            }
        }

        function closeMobileMenu() {
            if (mobileMenu) {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('-translate-x-full');
                document.body.style.overflow = ''; // Restore background scroll
                if (heroImageContainer) {
                    heroImageContainer.classList.remove('hidden'); // Show hero image container
                }
            }
        }

        // Smooth scrolling for all anchor links starting with #
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault(); 
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }

                if (mobileMenu && mobileMenu.classList.contains('translate-x-0')) {
                    if (this.classList.contains('mobile-nav-link') || this.closest('#mobile-menu')) {
                         closeMobileMenu();
                    }
                }
            });
        });

        // Event Listeners for Mobile Menu
        if (mobileMenuButton && mobileMenuCloseButton && mobileMenuOverlay && mobileMenu) {
            mobileMenuButton.addEventListener('click', openMobileMenu);
            mobileMenuCloseButton.addEventListener('click', closeMobileMenu);
            mobileMenuOverlay.addEventListener('click', closeMobileMenu);
        }

        // About section tabs (your existing script)
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname) { 
            for (let tablink of tablinks) { 
                tablink.classList.remove("active-link");
            }
            for (let tabcontent of tabcontents) { 
                tabcontent.classList.remove("active-tab");
            }
            if (event && event.currentTarget) {
                event.currentTarget.classList.add("active-link");
            }
            const tabContentElement = document.getElementById(tabname);
            if (tabContentElement) {
                 tabContentElement.classList.add("active-tab");
            }
        }

        //draggable whatup icons
        let isDragging = false;
            let offsetX, offsetY;
            const whatsappIcon = document.getElementById('whatsappIcon');

            whatsappIcon.addEventListener('mousedown', (e) => {
                isDragging = true;
                offsetX = e.clientX - whatsappIcon.getBoundingClientRect().left;
                offsetY = e.clientY - whatsappIcon.getBoundingClientRect().top;
                whatsappIcon.style.cursor = 'grabbing';
            });

            document.addEventListener('mousemove', (e) => {
                if (isDragging) {
                    const x = e.clientX - offsetX;
                    const y = e.clientY - offsetY;
                    whatsappIcon.style.left = `${x}px`;
                    whatsappIcon.style.top = `${y}px`;
                }
            });

            document.addEventListener('mouseup', () => {
                isDragging = false;
                whatsappIcon.style.cursor = 'grab';
            });

            //link overlay of my work
        
    document.querySelectorAll('[data-overlay]').forEach(card => {
        card.addEventListener('click', () => {
            // Toggle the class on tap/click
            card.classList.toggle('show-overlay');
        });
    });
    //al chat]
    

    




    