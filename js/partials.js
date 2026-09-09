// ============================================================
// NEW RED OVEN — Shared HTML partials (navbar, footer, cart, checkout)
// Injected via document.write-free innerHTML at load for consistency.
// ============================================================

const LOGO_SRC = "images/logo.png";

function navbarHTML(active) {
  const link = (href, label, key) => `<a href="${href}" class="${active === key ? "active" : ""}">${label}</a>`;
  return `
  <nav class="navbar" id="navbar">
    <div class="container">
      <a href="index.html" class="brand">
        <img src="${LOGO_SRC}" alt="New Red Oven logo" class="brand-logo">
        <div class="brand-text">
          <span class="brand-main">New Red Oven</span>
          <span class="brand-sub">CATERERS &amp; BIRYANI CENTER</span>
        </div>
      </a>
      <div class="nav-links">
        ${link("index.html", "Home", "home")}
        ${link("menu.html", "Menu", "menu")}
        ${link("about.html", "About", "about")}
        ${link("contact.html", "Contact", "contact")}
      </div>
      <div class="nav-right">
        <button class="cart-toggle" aria-label="Open cart">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <span class="label">Order</span>
          <span class="cart-badge">0</span>
        </button>
        <button class="hamburger" id="hamburger" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>

  <div class="mobile-overlay" id="mobileOverlay"></div>
  <div class="mobile-menu" id="mobileMenu">
    <button class="mobile-menu-close" id="mobileMenuClose" aria-label="Close menu">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
    ${link("index.html", "Home", "home")}
    ${link("menu.html", "Menu", "menu")}
    ${link("about.html", "About", "about")}
    ${link("contact.html", "Contact", "contact")}
    <a href="tel:${BUSINESS.phoneTel}" style="color: var(--gold); margin-top: 20px;">${BUSINESS.phoneDisplay}</a>
  `;
}

function cartAndCheckoutHTML() {
  return `
  <div class="cart-overlay" id="cartOverlay"></div>
  <aside class="cart-drawer" id="cartDrawer" aria-label="Shopping cart">
    <div class="cart-header">
      <h3>Your Order</h3>
      <button class="cart-close" id="cartClose" aria-label="Close cart">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>
    <div class="cart-items" id="cartItemsList"></div>
    <div class="cart-empty" id="cartEmptyState">
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
      <p>Your cart is empty.<br>Browse the menu to add something delicious.</p>
      <a href="menu.html" class="btn btn-primary btn-sm">View Menu</a>
    </div>
    <div class="cart-footer" id="cartFooter" style="display:none;">
      <div class="cart-summary-row"><span>Subtotal</span><span id="cartSubtotal">Rs 0</span></div>
      <div class="cart-summary-row total"><span>Total</span><span id="cartTotal">Rs 0</span></div>
      <button class="btn btn-primary btn-block" id="checkoutBtn">Checkout</button>
      <p class="cart-cash-note">Payment: Cash only</p>
    </div>
  </aside>

  <div class="modal-overlay" id="checkoutModal">
    <div class="modal-box">
      <button class="modal-close" id="modalClose" aria-label="Close checkout">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <h3>Complete Your Order</h3>
      <p class="modal-sub">Fill in your details — we'll open WhatsApp with your order ready to send.</p>

      <div class="checkout-summary" id="checkoutSummary"></div>
      <div class="checkout-total-row"><span>Total</span><span id="checkoutTotal">Rs 0</span></div>
      <div class="checkout-cash-badge">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/></svg>
        Payment: Cash only
      </div>

      <form id="checkoutForm">
        <div class="field">
          <label for="customerName">Customer Name</label>
          <input type="text" id="customerName" required placeholder="Your full name">
        </div>
        <div class="field">
          <label for="customerPhone">Phone Number</label>
          <input type="tel" id="customerPhone" required placeholder="03XX XXXXXXX">
        </div>
        <div class="field">
          <label for="orderType">Order Type</label>
          <select id="orderType">
            <option value="Delivery">Delivery</option>
            <option value="Takeaway">Takeaway</option>
            <option value="Dine-in">Dine-in</option>
          </select>
        </div>
        <div class="field">
          <label for="locationInput" id="locationLabel">Delivery Address</label>
          <input type="text" id="locationInput" required placeholder="House / Street / Landmark, Karachi">
        </div>
        <div class="field">
          <label for="orderNotes">Additional Notes (optional)</label>
          <textarea id="orderNotes" placeholder="e.g. Less spicy, extra chutney, call when ready"></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          Send Order on WhatsApp
        </button>
      </form>
    </div>
  </div>

  <div class="toast" id="orderToast">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
    Order sent to WhatsApp — thank you!
  </div>
  `;
}

function footerHTML() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-brand">
            <img src="${LOGO_SRC}" alt="New Red Oven logo">
            <span>New Red Oven</span>
          </div>
          <p>Authentic Biryani, BBQ, Karahi and Pakistani favourites, freshly prepared in Shah Faisal Colony, Karachi.</p>
        </div>
        <div class="footer-col">
          <h5>QUICK LINKS</h5>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="menu.html">Menu</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>CONTACT</h5>
          <ul>
            <li><a href="tel:${BUSINESS.phoneTel}">${BUSINESS.phoneDisplay}</a></li>
            <li><a href="${BUSINESS.mapsUrl}" target="_blank" rel="noopener">${BUSINESS.address}</a></li>
            <li><a href="${BUSINESS.instagramUrl}" target="_blank" rel="noopener">${BUSINESS.instagram}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>HOURS &amp; SERVICES</h5>
          <ul>
            <li>${BUSINESS.hours}</li>
            <li>Delivery · Takeaway</li>
            <li>Dine-in · Outdoor Seating</li>
            <li>Cash Only</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} New Red Oven Caterers &amp; Biryani Center. All rights reserved.</span>
        <span>Karachi, Pakistan</span>
      </div>
    </div>
  </footer>
  `;
}

function injectPartials(active) {
  document.getElementById("navbarMount").innerHTML = navbarHTML(active);
  document.getElementById("footerMount").innerHTML = footerHTML();
  document.getElementById("cartMount").innerHTML = cartAndCheckoutHTML();
}
