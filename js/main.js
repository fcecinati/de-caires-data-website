/* Opotus: navigation, contact links, contact form */

/* ---- Contact details (single source of truth for the whole site) ----
   PLACEHOLDER values: replace with the real Opotus email, LinkedIn URL
   and WhatsApp number when Francesca confirms them. The WhatsApp number
   must be digits only, with country code, no plus sign or spaces. */
var OPOTUS_CONTACT = {
  email: 'hello@opotus.example',        /* PLACEHOLDER */
  linkedin: 'https://www.linkedin.com/', /* PLACEHOLDER */
  whatsapp: '000000000000'               /* PLACEHOLDER */
};

(function () {
  'use strict';

  /* ---- Fixed nav: background on scroll ---- */
  var nav = document.getElementById('nav');

  function updateNav() {
    if (window.scrollY > 24) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ---- Mobile menu toggle ---- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('nav--open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    links.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        nav.classList.remove('nav--open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- Wire contact links from OPOTUS_CONTACT ---- */
  document.querySelectorAll('[data-contact]').forEach(function (el) {
    var kind = el.getAttribute('data-contact');
    if (kind === 'email') {
      el.href = 'mailto:' + OPOTUS_CONTACT.email;
    } else if (kind === 'linkedin') {
      el.href = OPOTUS_CONTACT.linkedin;
    } else if (kind === 'whatsapp') {
      el.href = 'https://wa.me/' + OPOTUS_CONTACT.whatsapp;
    }
  });

  /* ---- Contact form: build a pre-filled email or WhatsApp message ---- */
  var form = document.getElementById('contactForm');

  if (form) {
    var topicLabels = {
      consulting: 'Data science and AI consulting',
      water: 'Data science for the water industry',
      digital: 'A website or marketing project',
      other: 'General enquiry'
    };

    function buildMessage() {
      var name = document.getElementById('formName').value.trim();
      var topic = document.getElementById('formTopic').value;
      var message = document.getElementById('formMessage').value.trim();

      var lines = [];
      lines.push('Hello Opotus,');
      lines.push('');
      if (message) {
        lines.push(message);
        lines.push('');
      }
      if (name) {
        lines.push(name);
      }

      return {
        subject: 'Enquiry: ' + (topicLabels[topic] || 'General enquiry'),
        body: lines.join('\n')
      };
    }

    document.getElementById('sendEmail').addEventListener('click', function () {
      var msg = buildMessage();
      window.location.href = 'mailto:' + OPOTUS_CONTACT.email +
        '?subject=' + encodeURIComponent(msg.subject) +
        '&body=' + encodeURIComponent(msg.body);
    });

    document.getElementById('sendWhatsApp').addEventListener('click', function () {
      var msg = buildMessage();
      window.open(
        'https://wa.me/' + OPOTUS_CONTACT.whatsapp +
        '?text=' + encodeURIComponent(msg.subject + '\n\n' + msg.body),
        '_blank',
        'noopener'
      );
    });
  }
})();
