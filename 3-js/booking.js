const form = document.getElementById('bookingForm');

if(form) {
    form.addEventListener('submit', function (e) { 
        e.preventDefault();

        const name = encodeURIComponent(document.getElementById('name').value);
        const email = encodeURIComponent(document.getElementById('email').value);
        const course = encodeURIComponent(document.getElementById('course').value);
        const message = encodeURIComponent(document.getElementById('message').value);

        const mailtoLink = `mailto:info@socialarttherapy.com?subject=Course Booking - ${course}&body=Name: ${name}%0AEmail: ${email}%0ACourse: ${course}%0A%0AMessage:%0A${message}`;

        window.location.href = mailtoLink;

    });
}