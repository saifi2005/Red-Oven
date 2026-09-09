// ============================================================
// NEW RED OVEN — Cart engine (Vanilla JS, localStorage-backed)
// ============================================================

const CART_KEY = "redoven_cart_v1";

const Cart = {
  items: [],

  load() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      this.items = raw ? JSON.parse(raw) : [];
    } catch (e) {
      this.items = [];
    }
  },

  save() {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(this.items));
    } catch (e) { /* storage unavailable — cart still works in-session */ }
    this.renderBadge();
  },

  // key uniquely identifies an item+variant combo
  key(itemId, variantLabel) {
    return `${itemId}::${variantLabel}`;
  },

  add(item, variant, qty = 1) {
    const k = this.key(item.id, variant.label);
    const existing = this.items.find(i => i.key === k);
    if (existing) {
      existing.qty += qty;
    } else {
      this.items.push({
        key: k,
        itemId: item.id,
        name: item.name,
        variant: variant.label,
        price: variant.price,
        img: item.img,
        qty: qty,
      });
    }
    this.save();
    this.renderDrawer();
    this.bump();
  },

  increment(key) {
    const line = this.items.find(i => i.key === key);
    if (line) { line.qty += 1; this.save(); this.renderDrawer(); }
  },

  decrement(key) {
    const line = this.items.find(i => i.key === key);
    if (line) {
      line.qty -= 1;
      if (line.qty <= 0) this.items = this.items.filter(i => i.key !== key);
      this.save();
      this.renderDrawer();
    }
  },

  remove(key) {
    this.items = this.items.filter(i => i.key !== key);
    this.save();
    this.renderDrawer();
  },

  clear() {
    this.items = [];
    this.save();
    this.renderDrawer();
  },

  totalCount() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  },

  subtotal() {
    return this.items.reduce((sum, i) => sum + i.qty * i.price, 0);
  },

  renderBadge() {
    document.querySelectorAll(".cart-badge").forEach(el => {
      const count = this.totalCount();
      el.textContent = count;
      el.style.display = count > 0 ? "flex" : "none";
    });
  },

  bump() {
    document.querySelectorAll(".cart-toggle").forEach(el => {
      el.classList.remove("bump");
      void el.offsetWidth;
      el.classList.add("bump");
    });
  },

  renderDrawer() {
    const list = document.getElementById("cartItemsList");
    const emptyState = document.getElementById("cartEmptyState");
    const footer = document.getElementById("cartFooter");
    if (!list) return;

    if (this.items.length === 0) {
      list.innerHTML = "";
      if (emptyState) emptyState.style.display = "flex";
      if (footer) footer.style.display = "none";
      return;
    }

    if (emptyState) emptyState.style.display = "none";
    if (footer) footer.style.display = "block";

    list.innerHTML = this.items.map(line => `
      <div class="cart-line" data-key="${line.key}">
        <img class="cart-line-img" src="${line.img}" alt="${line.name}" loading="lazy">
        <div class="cart-line-info">
          <div class="cart-line-name">${line.name}</div>
          <div class="cart-line-variant">${line.variant}</div>
          <div class="cart-line-bottom">
            <div class="qty-control">
              <button class="qty-btn" onclick="Cart.decrement('${line.key}')" aria-label="Decrease quantity">−</button>
              <span class="qty-value">${line.qty}</span>
              <button class="qty-btn" onclick="Cart.increment('${line.key}')" aria-label="Increase quantity">+</button>
            </div>
            <div class="cart-line-price">Rs ${(line.price * line.qty).toLocaleString()}</div>
          </div>
        </div>
        <button class="cart-line-remove" onclick="Cart.remove('${line.key}')" aria-label="Remove item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
    `).join("");

    const subtotalEl = document.getElementById("cartSubtotal");
    const totalEl = document.getElementById("cartTotal");
    if (subtotalEl) subtotalEl.textContent = `Rs ${this.subtotal().toLocaleString()}`;
    if (totalEl) totalEl.textContent = `Rs ${this.subtotal().toLocaleString()}`;
  },

  buildWhatsAppMessage(customer) {
    const lines = [];
    lines.push("NEW RED OVEN ORDER");
    lines.push("");
    lines.push(`Customer Name: ${customer.name}`);
    lines.push(`Phone: ${customer.phone}`);
    lines.push(`Order Type: ${customer.orderType}`);
    lines.push("");
    if (customer.orderType === "Delivery") {
      lines.push("Address:");
      lines.push(customer.location);
    } else if (customer.orderType === "Dine-in") {
      lines.push(`Table Number: ${customer.location}`);
    } else {
      lines.push("Pickup Info:");
      lines.push(customer.location);
    }
    lines.push("");
    lines.push("ORDER ITEMS:");
    lines.push("");
    this.items.forEach(line => {
      lines.push(`${line.qty} × ${line.name} — ${line.variant}`);
      lines.push(`Rs ${(line.price * line.qty).toLocaleString()}`);
      lines.push("");
    });
    lines.push(`Subtotal:`);
    lines.push(`Rs ${this.subtotal().toLocaleString()}`);
    lines.push("");
    lines.push(`Total:`);
    lines.push(`Rs ${this.subtotal().toLocaleString()}`);
    if (customer.notes) {
      lines.push("");
      lines.push("Notes:");
      lines.push(customer.notes);
    }
    lines.push("");
    lines.push("Payment:");
    lines.push("Cash only");
    return lines.join("\n");
  },

  sendToWhatsApp(customer) {
    const msg = this.buildWhatsAppMessage(customer);
    const url = `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }
};

Cart.load();
document.addEventListener("DOMContentLoaded", () => {
  Cart.renderBadge();
  Cart.renderDrawer();
});

// ============================================================
// Drawer + Checkout modal open/close wiring
// ============================================================

function openCartDrawer() {
  document.getElementById("cartDrawer")?.classList.add("open");
  document.getElementById("cartOverlay")?.classList.add("visible");
  document.body.style.overflow = "hidden";
  Cart.renderDrawer();
}

function closeCartDrawer() {
  document.getElementById("cartDrawer")?.classList.remove("open");
  document.getElementById("cartOverlay")?.classList.remove("visible");
  document.body.style.overflow = "";
}

function openCheckoutModal() {
  if (Cart.items.length === 0) return;
  closeCartDrawer();
  const modal = document.getElementById("checkoutModal");
  if (!modal) return;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  updateCheckoutSummary();
  toggleLocationField();
}

function closeCheckoutModal() {
  document.getElementById("checkoutModal")?.classList.remove("open");
  document.body.style.overflow = "";
}

function updateCheckoutSummary() {
  const el = document.getElementById("checkoutSummary");
  if (!el) return;
  el.innerHTML = Cart.items.map(line =>
    `<div class="checkout-summary-line"><span>${line.qty} × ${line.name} (${line.variant})</span><span>Rs ${(line.price * line.qty).toLocaleString()}</span></div>`
  ).join("");
  const totalEl = document.getElementById("checkoutTotal");
  if (totalEl) totalEl.textContent = `Rs ${Cart.subtotal().toLocaleString()}`;
}

function toggleLocationField() {
  const orderType = document.getElementById("orderType")?.value;
  const label = document.getElementById("locationLabel");
  const input = document.getElementById("locationInput");
  if (!label || !input) return;
  if (orderType === "Dine-in") {
    label.textContent = "Table Number";
    input.placeholder = "e.g. Table 4";
  } else if (orderType === "Takeaway") {
    label.textContent = "Pickup Information";
    input.placeholder = "e.g. Will collect by 8 PM";
  } else {
    label.textContent = "Delivery Address";
    input.placeholder = "House / Street / Landmark, Karachi";
  }
}

function handleCheckoutSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const orderType = document.getElementById("orderType").value;
  const location = document.getElementById("locationInput").value.trim();
  const notes = document.getElementById("orderNotes").value.trim();

  if (!name || !phone || !location) return;

  Cart.sendToWhatsApp({ name, phone, orderType, location, notes });

  closeCheckoutModal();
  Cart.clear();
  document.getElementById("checkoutForm")?.reset();

  const toast = document.getElementById("orderToast");
  if (toast) {
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 4000);
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCartDrawer();
    closeCheckoutModal();
  }
});
