// ============================================================
// NEW RED OVEN — Shared UI behaviour (navbar, mobile menu, reveal)
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll state
  const navbar = document.getElementById("navbar");
  const onScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 40) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile menu
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileOverlay = document.getElementById("mobileOverlay");

  function openMobileMenu() {
    hamburger?.classList.add("open");
    mobileMenu?.classList.add("open");
    mobileOverlay?.classList.add("visible");
    document.body.style.overflow = "hidden";
  }
  function closeMobileMenu() {
    hamburger?.classList.remove("open");
    mobileMenu?.classList.remove("open");
    mobileOverlay?.classList.remove("visible");
    document.body.style.overflow = "";
  }
  hamburger?.addEventListener("click", () => {
    hamburger.classList.contains("open") ? closeMobileMenu() : openMobileMenu();
  });
  mobileOverlay?.addEventListener("click", closeMobileMenu);
  document.getElementById("mobileMenuClose")?.addEventListener("click", closeMobileMenu);
  mobileMenu?.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMobileMenu));

  // Scroll reveal
  const revealEls = document.querySelectorAll(".reveal-up, .dish-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view", "reveal");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revealEls.forEach(el => observer.observe(el));

  // Cart / checkout wiring (present on every page)
  document.querySelectorAll(".cart-toggle").forEach(btn => btn.addEventListener("click", openCartDrawer));
  document.getElementById("cartClose")?.addEventListener("click", closeCartDrawer);
  document.getElementById("cartOverlay")?.addEventListener("click", closeCartDrawer);
  document.getElementById("checkoutBtn")?.addEventListener("click", openCheckoutModal);
  document.getElementById("modalClose")?.addEventListener("click", closeCheckoutModal);
  document.getElementById("checkoutForm")?.addEventListener("submit", handleCheckoutSubmit);
  document.getElementById("orderType")?.addEventListener("change", toggleLocationField);
});

// Renders a dish card's HTML given an item object
function renderDishCard(item) {
  const hasMultiple = item.variants.length > 1;
  const selectId = `sel-${item.id}`;

  let priceBlock;
  if (hasMultiple) {
    priceBlock = `
      <div class="variant-select-wrap">
        <select class="variant-select" id="${selectId}">
          ${item.variants.map((v, i) => `<option value="${i}">${v.label} — Rs ${v.price.toLocaleString()}</option>`).join("")}
        </select>
      </div>`;
  } else {
    priceBlock = `<div class="dish-single-price">Rs ${item.variants[0].price.toLocaleString()}</div>`;
  }

  return `
    <article class="dish-card">
      <div class="dish-media">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        <span class="dish-category-tag">${item.categoryLabel || ""}</span>
      </div>
      <div class="dish-body">
        <h3 class="dish-name">${item.name}</h3>
        <p class="dish-desc">${item.desc}</p>
        ${priceBlock}
        <button class="add-to-order-btn" onclick="handleAddToOrder('${item.id}', '${selectId}', this)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 5v14M5 12h14"/></svg>
          Add to Order
        </button>
      </div>
    </article>
  `;
}

function handleAddToOrder(itemId, selectId, btnEl) {
  const item = findItemById(itemId);
  if (!item) return;
  let variant = item.variants[0];
  const sel = document.getElementById(selectId);
  if (sel) variant = item.variants[parseInt(sel.value, 10)];

  Cart.add(item, variant, 1);

  btnEl.classList.add("added");
  const original = btnEl.innerHTML;
  btnEl.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg> Added`;
  setTimeout(() => {
    btnEl.classList.remove("added");
    btnEl.innerHTML = original;
  }, 1200);
}
