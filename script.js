// Dr. Felpa - Unidad de Cuidados Afectivos

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Form Submission Handling
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get data
            const name = document.getElementById('name').value;
            const toyName = document.getElementById('toy-name').value;
            const symptom = document.getElementById('symptom').options[document.getElementById('symptom').selectedIndex].text;
            const date = document.getElementById('date').value;
            const notes = document.getElementById('notes').value;
            
            // Format WhatsApp Message
            const phoneNumber = "51963109248";
            const message = `*Nueva Consulta - Dr. Felpa*%0A%0A` +
                            `*Nombre:* ${name}%0A` +
                            `*Paciente:* ${toyName}%0A` +
                            `*Tratamiento/Síntoma:* ${symptom}%0A` +
                            `*Fecha sugerida:* ${date}%0A` +
                            `*Notas:* ${notes || 'Sin notas adicionales'}`;

            // Redirect to WhatsApp
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
            
            // Use location.href for better compatibility on mobile browsers
            window.location.href = whatsappUrl;
            
            // Optional: reset form after a short delay
            setTimeout(() => {
                bookingForm.reset();
            }, 1000);
        });
    }

    // 3. Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply reveal styles and observe
    const reveals = document.querySelectorAll('.service-card, .about-content, .booking-container, .testimonial-card, .hero-content, .hero-image-wrapper');
    reveals.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(el);
    });

    // 4. Navbar styling on scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '0.8rem 8%';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            nav.style.padding = '1.2rem 8%';
            nav.style.boxShadow = 'none';
            nav.style.background = 'rgba(255, 255, 255, 0.8)';
        }
    });
});
