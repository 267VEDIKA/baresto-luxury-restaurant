// ===== AUTOMATIC ROTATION BACKGROUND SLIDER =====
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideRotationIntervalTime = 6000; // Rotates frames every 6 seconds smoothly

function advanceAutomatedSlider() {
    if (slides.length <= 1) return;

    // Fade out current section frame
    slides[currentSlideIndex].classList.remove('active');

    // Compute next slice index boundary bounds
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;

    // Bring into view next sequence index target
    slides[currentSlideIndex].classList.add('active');
}

// Start cyclical automation on browser readiness loop
setInterval(advanceAutomatedSlider, slideRotationIntervalTime);


// ===== RESERVATION MODAL CONTROLS =====
function toggleModal(event) {
    if (event) event.preventDefault();
    
    const overlay = document.getElementById('bookingOverlay');
    const modal = document.getElementById('bookingModal');
    
    overlay.classList.toggle('active');
    modal.classList.toggle('active');
}

function confirmBooking(event) {
    event.preventDefault();
    alert("✨ Reservation requested successfully! Our concierge desk will contact you via SMS details shortly.");
    toggleModal();
}


// ===== DYNAMIC LIGHTBOX IMAGE PREVIEW VIEWER =====
function openLightbox(imageSrc, title, description) {
    const lightbox = document.getElementById('lightbox');
    
    document.getElementById('lightbox-img').src = imageSrc;
    document.getElementById('lightbox-title').innerText = title;
    document.getElementById('lightbox-desc').innerText = description;
    
    lightbox.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}


// ===== STICKY HEADER VISUAL INTERACTION HANDLER =====
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.style.padding = '5px 0';
        header.style.background = 'rgba(11, 12, 16, 0.95)';
        header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
        header.style.padding = '15px 40px';
        header.style.background = 'rgba(11, 12, 16, 0.75)';
        header.style.boxShadow = 'none';
    }
});