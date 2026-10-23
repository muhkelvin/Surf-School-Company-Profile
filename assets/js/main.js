/**
 * Kala Surf Co. — Global Client Scripts
 * Lightweight, vanilla JavaScript for accessible UI enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuButton = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        menuButton.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
        menuButton.focus();
      }
    });
  }

  // 2. Gallery Filter Tabs (on gallery.html)
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');

        // Update active button state
        filterBtns.forEach(b => {
          b.classList.remove('bg-deep-tide', 'text-salt-white');
          b.classList.add('bg-white', 'text-deep-tide', 'hover:bg-warm-sand/30');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('bg-deep-tide', 'text-salt-white');
        btn.classList.remove('bg-white', 'hover:bg-warm-sand/30');
        btn.setAttribute('aria-pressed', 'true');

        // Filter items with gentle opacity transition
        galleryItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.96)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  // 3. Accessible FAQ Accordions (on contact.html or lessons.html)
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      const answer = document.getElementById(toggle.getAttribute('aria-controls'));
      const icon = toggle.querySelector('.faq-icon');

      toggle.setAttribute('aria-expanded', !isExpanded);
      if (answer) {
        answer.classList.toggle('hidden');
      }
      if (icon) {
        icon.classList.toggle('rotate-180');
      }
    });
  });

  // 4. Contact Form WhatsApp Inquiry Builder
  const inquiryForm = document.getElementById('whatsapp-inquiry-form');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inquiry-name')?.value.trim() || 'Tamu';
      const lessonType = document.getElementById('inquiry-lesson')?.value || 'Beginner Surf Lesson';
      const participants = document.getElementById('inquiry-participants')?.value || '1';
      const date = document.getElementById('inquiry-date')?.value || 'Segera';
      const note = document.getElementById('inquiry-note')?.value.trim() || '-';

      const message = `Halo Kala Surf Co., saya ${name}.\n\nSaya ingin menanyakan reservasi surfing lesson:\n- Program: ${lessonType}\n- Jumlah Peserta: ${participants} orang\n- Perkiraan Tanggal: ${date}\n- Catatan: ${note}\n\nApakah masih tersedia jadwal yang cocok? Terima kasih!`;
      
      const encodedMsg = encodeURIComponent(message);
      const waUrl = `https://wa.me/6281234567890?text=${encodedMsg}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }
});
