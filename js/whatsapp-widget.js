/**
 * WhatsApp Chat Widget
 * Floating button with interactive chat popup
 */
(function () {
  'use strict';

  var PHONE = '256700474721';
  var DEFAULT_MSG = 'Hi Hellen Creations! I\'d like to know more about your products.';

  // Build widget HTML
  var html = '' +
    '<div id="wa-widget">' +
      '<div id="wa-chat-box">' +
        '<div class="wa-header">' +
          '<div class="wa-header-avatar">' +
            '<img src="img/tp-logo-hc.png" alt="HC" onerror="this.outerHTML=\'<span class=wa-avatar-fallback>HC</span>\'">' +
          '</div>' +
          '<div class="wa-header-info">' +
            '<strong>Hellen Creations</strong>' +
            '<span>Usually replies within an hour</span>' +
          '</div>' +
          '<button id="wa-close" aria-label="Close chat">&times;</button>' +
        '</div>' +
        '<div class="wa-body">' +
          '<div class="wa-bubble">' +
            'Hi there! <span class="wa-wave">&#128075;</span><br>' +
            'Welcome to Hellen Creations. How can we help you today?' +
          '</div>' +
          '<div class="wa-options">' +
            '<button class="wa-option" data-msg="Hi! I\'d like to order a product.">Order a product</button>' +
            '<button class="wa-option" data-msg="Hi! I\'m interested in a custom order.">Custom order</button>' +
            '<button class="wa-option" data-msg="Hi! I\'d like to learn about your NGO programs.">NGO programs</button>' +
            '<button class="wa-option" data-msg="Hi! I want to partner with Hellen Creations.">Partnership</button>' +
          '</div>' +
        '</div>' +
        '<div class="wa-footer">' +
          '<input type="text" id="wa-input" placeholder="Type a message..." autocomplete="off">' +
          '<button id="wa-send" aria-label="Send message">' +
            '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="#fff" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>' +
          '</button>' +
        '</div>' +
      '</div>' +
      '<button id="wa-fab" aria-label="Chat on WhatsApp">' +
        '<svg viewBox="0 0 32 32" width="28" height="28"><path fill="#fff" d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.132 6.744 3.052 9.38L1.056 31.4l6.226-1.96a15.907 15.907 0 008.722 2.564C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.31 22.612c-.39 1.1-1.932 2.014-3.164 2.28-.844.18-1.946.324-5.66-1.216-4.748-1.968-7.806-6.78-8.04-7.094-.226-.314-1.892-2.52-1.892-4.808s1.196-3.412 1.62-3.878c.39-.428 1.026-.642 1.636-.642.198 0 .376.02.536.036.424.018.636.044.916.71.348.832 1.196 2.916 1.3 3.13.106.214.212.5.072.796-.13.304-.244.44-.458.692-.214.25-.418.442-.632.712-.196.236-.418.488-.172.912.244.424 1.09 1.796 2.34 2.91 1.61 1.434 2.964 1.88 3.388 2.086.424.214.672.178.916-.106.254-.296 1.078-1.252 1.364-1.684.286-.424.57-.354.96-.214.39.142 2.476 1.168 2.9 1.38.424.214.706.322.812.498.104.178.104 1.028-.286 2.13z"/></svg>' +
        '<span id="wa-badge">1</span>' +
      '</button>' +
    '</div>';

  // Inject into page
  var wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper.firstChild);

  // Elements
  var fab = document.getElementById('wa-fab');
  var chatBox = document.getElementById('wa-chat-box');
  var closeBtn = document.getElementById('wa-close');
  var input = document.getElementById('wa-input');
  var sendBtn = document.getElementById('wa-send');
  var badge = document.getElementById('wa-badge');
  var options = document.querySelectorAll('.wa-option');

  var isOpen = false;

  function openChat() {
    chatBox.classList.add('wa-open');
    fab.classList.add('wa-active');
    badge.style.display = 'none';
    isOpen = true;
    input.focus();
  }

  function closeChat() {
    chatBox.classList.remove('wa-open');
    fab.classList.remove('wa-active');
    isOpen = false;
  }

  function sendToWhatsApp(msg) {
    var url = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(msg || DEFAULT_MSG);
    window.open(url, '_blank');
  }

  fab.addEventListener('click', function () {
    if (isOpen) closeChat();
    else openChat();
  });

  closeBtn.addEventListener('click', closeChat);

  sendBtn.addEventListener('click', function () {
    var msg = input.value.trim();
    if (msg) sendToWhatsApp(msg);
    else sendToWhatsApp(DEFAULT_MSG);
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendBtn.click();
    }
  });

  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function () {
      sendToWhatsApp(this.getAttribute('data-msg'));
    });
  }

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (isOpen && !document.getElementById('wa-widget').contains(e.target)) {
      closeChat();
    }
  });

})();
