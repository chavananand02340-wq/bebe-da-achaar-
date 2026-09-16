import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Sparkles,
  Star,
  Leaf,
  ShieldCheck,
  X,
} from "lucide-react";

const products = [
  {
    id: "aam",
    name: "Khatte Aam Ka Achaar",
    short: "Made with fresh raw mangoes & traditional masalas",
    basePrices: {
      "250g": 149,
      "500g": 269,
      "1kg": 499,
    },
    emoji: "🥭",
    type: "mango",
    label: "KHATTA • CHATPATA",
  },
  {
    id: "nimbu",
    name: "Nimbu Achaar",
    short: "Zesty lemons blended with Bebe's traditional masalas",
    basePrices: {
      "250g": 139,
      "500g": 249,
      "1kg": 459,
    },
    emoji: "🍋",
    type: "lemon",
    label: "KHATTA • ZESTY",
  },
  {
    id: "mirch",
    name: "Mirch Achaar",
    short: "Fresh green chillies with aromatic homemade spices",
    basePrices: {
      "250g": 159,
      "500g": 289,
      "1kg": 529,
    },
    emoji: "🌶️",
    type: "chilli",
    label: "TEEKHA • DESI",
  },
];

function Logo({ compact = false }) {
  return (
    <div className={`brand-logo ${compact ? "compact" : ""}`}>
      <div className="logo-avatar">👵🏻</div>
      <div className="logo-copy">
        <strong>Bebe Da</strong>
        <span>Achaar</span>
      </div>
    </div>
  );
}

function ProductVisual({ product }) {
  return (
    <div className={`product-visual ${product.type}`}>
      <div className="visual-glow" />

      <div className="spice spice-one">✦</div>
      <div className="spice spice-two">✦</div>
      <div className="spice spice-three">•</div>

      <div className="jar">
        <div className="jar-lid">
          <span>BEBE</span>
        </div>

        <div className="jar-body">
          <div className="jar-food">{product.emoji}</div>

          <div className="jar-label">
            <small>BEBE DA</small>
            <strong>ACHAAR</strong>
            <span>{product.type === "mango" ? "AAM" : product.type === "lemon" ? "NIMBU" : "MIRCH"}</span>
          </div>
        </div>
      </div>

      <div className="raw-ingredient">
        {product.type === "mango" && "🥭"}
        {product.type === "lemon" && "🍋"}
        {product.type === "chilli" && "🌶️"}
      </div>
    </div>
  );
}

function TrustIcon({ type }) {
  if (type === "fresh") return <Leaf size={18} />;
  if (type === "recipe") return <Sparkles size={18} />;
  if (type === "pure") return <ShieldCheck size={18} />;
  return <Heart size={18} />;
}

function App() {
  const [cart, setCart] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState(
    Object.fromEntries(products.map((product) => [product.id, "250g"]))
  );
  const [quantities, setQuantities] = useState(
    Object.fromEntries(products.map((product) => [product.id, 1]))
  );
  const [cartOpen, setCartOpen] = useState(false);

  const updateSize = (productId, size) => {
    setSelectedSizes((current) => ({
      ...current,
      [productId]: size,
    }));
  };

  const updateQuantity = (productId, amount) => {
    setQuantities((current) => ({
      ...current,
      [productId]: Math.max(1, current[productId] + amount),
    }));
  };

  const addToCart = (product) => {
    const size = selectedSizes[product.id];
    const quantity = quantities[product.id];
    const price = product.basePrices[size];

    setCart((current) => {
      const existingIndex = current.findIndex(
        (item) => item.id === product.id && item.size === size
      );

      if (existingIndex !== -1) {
        return current.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          size,
          price,
          quantity,
          emoji: product.emoji,
        },
      ];
    });
  };

  const changeCartQuantity = (index, amount) => {
    setCart((current) =>
      current
        .map((item, itemIndex) =>
          itemIndex === index
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const cartTotal = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    [cart]
  );

  const scrollToShop = () => {
    document.getElementById("shop")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="site-shell">
      {/* HEADER */}
      <header className="mobile-header">
        <a href="#home" aria-label="Bebe Da Achaar home">
          <Logo compact />
        </a>

        <button
          className="header-cart"
          onClick={() => setCartOpen(true)}
          aria-label="Open cart"
        >
          <ShoppingBag size={21} />
          {cartCount > 0 && <span>{cartCount}</span>}
        </button>
      </header>

      {/* HERO */}
      <main>
        <section className="hero" id="home">
          <div className="hero-image">
            <div className="hero-overlay" />

            <div className="hero-scene">
              <div className="hero-jar hero-jar-back">
                <span>🥭</span>
              </div>

              <div className="hero-jar hero-jar-main">
                <div className="hero-lid">BEBE</div>
                <div className="hero-label">
                  <small>BEBE DA</small>
                  <strong>ACHAAR</strong>
                  <span>KHATTE AAM</span>
                </div>
              </div>

              <div className="hero-mango">🥭</div>
              <div className="hero-chilli">🌶️</div>
              <div className="hero-spice-bowl">✦</div>
              <div className="hero-spice-bowl second">✦</div>
            </div>
          </div>

          <div className="hero-content">
            <span className="eyebrow">FROM BEBE'S KITCHEN</span>

            <h1>
              Ghar ka Swaad,
              <br />
              <em>Bebe ke Saath</em>
            </h1>

            <p>
              Asli Homemade Achaar • No Preservatives • Made in Small Batches
            </p>

            <button className="primary-button hero-button" onClick={scrollToShop}>
              Shop Now
              <ArrowRight size={19} />
            </button>

            <div className="season-note">
              <span>✦</span>
              Limited Seasonal Batches
              <span>✦</span>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="trust-strip">
          {[
            ["fresh", "Fresh Ingredients"],
            ["recipe", "Traditional Recipe"],
            ["pure", "No Preservatives"],
            ["batch", "Small Batch Made"],
          ].map(([type, text]) => (
            <div className="trust-item" key={text}>
              <div className="trust-icon">
                <TrustIcon type={type} />
              </div>
              <span>{text}</span>
            </div>
          ))}
        </section>

        {/* SHOP */}
        <section className="shop-section section" id="shop">
          <div className="section-heading">
            <span className="eyebrow">STRAIGHT FROM BEBE'S KITCHEN</span>
            <h2>Our Homemade <em>Achaar</em></h2>
            <p>
              Har jar mein fresh ingredients, purani recipe aur wohi ghar wala
              swaad.
            </p>
          </div>

          <div className="product-list">
            {products.map((product, productIndex) => {
              const size = selectedSizes[product.id];
              const quantity = quantities[product.id];
              const price = product.basePrices[size];

              return (
                <article className="product-card" key={product.id}>
                  <div className="product-number">
                    0{productIndex + 1}
                  </div>

                  <ProductVisual product={product} />

                  <div className="product-content">
                    <div className="product-tag">{product.label}</div>

                    <h3>{product.name}</h3>

                    <p>{product.short}</p>

                    <div className="rating-row">
                      <div className="stars">
                        <Star size={13} fill="currentColor" />
                        <Star size={13} fill="currentColor" />
                        <Star size={13} fill="currentColor" />
                        <Star size={13} fill="currentColor" />
                        <Star size={13} fill="currentColor" />
                      </div>
                      <span>Homemade favourite</span>
                    </div>

                    <div className="size-block">
                      <div className="option-title">
                        <span>Choose size</span>
                        <strong>{size}</strong>
                      </div>

                      <div className="size-selector">
                        {["250g", "500g", "1kg"].map((option) => (
                          <button
                            key={option}
                            className={size === option ? "active" : ""}
                            onClick={() => updateSize(product.id, option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="product-bottom">
                      <div className="price">
                        <small>₹</small>
                        {price}
                      </div>

                      <div className="quantity-selector">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          aria-label={`Decrease ${product.name} quantity`}
                        >
                          <Minus size={15} />
                        </button>

                        <span>{quantity}</span>

                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          aria-label={`Increase ${product.name} quantity`}
                        >
                          <Plus size={15} />
                        </button>
                      </div>
                    </div>

                    <button
                      className="add-button"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* WHY BEBE */}
        <section className="why-section section" id="about">
          <div className="section-heading">
            <span className="eyebrow">WHY BEBE DA ACHAAR</span>
            <h2>Har jar mein <em>kuch khaas</em> hai.</h2>
            <p>
              Simple ingredients. Purani recipes. Bebe ka pyaar.
            </p>
          </div>

          <div className="benefits">
            <article className="benefit-card">
              <div className="benefit-icon">🌿</div>
              <span>01</span>
              <h3>Traditional Family Recipes</h3>
              <p>
                Woh recipes jo saalon se ghar mein banti aa rahi hain.
              </p>
            </article>

            <article className="benefit-card">
              <div className="benefit-icon">✨</div>
              <span>02</span>
              <h3>Pure & Hygienic</h3>
              <p>
                Carefully selected ingredients, clean preparation and no
                unnecessary preservatives.
              </p>
            </article>

            <article className="benefit-card">
              <div className="benefit-icon">❤️</div>
              <span>03</span>
              <h3>Made with Bebe's Love</h3>
              <p>
                Har batch mein woh warmth jo sirf ghar ke khaane mein milti
                hai.
              </p>
            </article>
          </div>
        </section>

        {/* EMOTIONAL BANNER */}
        <section className="emotional-banner">
          <div className="emotional-pattern">🥭 &nbsp; ✦ &nbsp; 🌶️</div>

          <span className="eyebrow">THE MISSING PIECE</span>

          <h2>
            Sab kuch hai…
            <br />
            <em>bas achar nahi hai.</em>
          </h2>

          <p>
            Dal garam hai. Roti fresh hai. Ghar ki khushboo bhi wahi hai.
            <br />
            Bas ek spoon Bebe ka achar aur chahiye.
          </p>

          <button className="outline-button" onClick={scrollToShop}>
            Find Your Achaar
            <ArrowRight size={18} />
          </button>
        </section>

        {/* FOOTER */}
        <footer className="footer" id="contact">
          <div className="footer-brand">
            <Logo />
            <p>Wrapped in Tradition.</p>
          </div>

          <div className="footer-links">
            <a href="#shop">Shop</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Bebe Da Achaar</span>
            <span>Made with ❤️ &amp; tradition</span>
          </div>
        </footer>
      </main>

      {/* STICKY CART BAR */}
      {cartCount > 0 && (
        <div className="sticky-cart">
          <div className="sticky-cart-info">
            <div className="sticky-cart-icon">
              <ShoppingBag size={19} />
              <span>{cartCount}</span>
            </div>

            <div>
              <small>{cartCount === 1 ? "1 item" : `${cartCount} items`}</small>
              <strong>₹{cartTotal}</strong>
            </div>
          </div>

          <button onClick={() => setCartOpen(true)}>
            Go to Cart
            <ArrowRight size={17} />
          </button>
        </div>
      )}

      {/* CART DRAWER */}
      {cartOpen && (
        <div className="cart-overlay" onClick={() => setCartOpen(false)}>
          <aside
            className="cart-drawer"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="cart-header">
              <div>
                <span className="eyebrow">YOUR ORDER</span>
                <h2>Your Cart</h2>
              </div>

              <button
                className="close-cart"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                <X size={21} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <div className="empty-cart-icon">🥭</div>
                <h3>Your cart is waiting.</h3>
                <p>Pick your favourite achaar and bring ghar ka swaad home.</p>
                <button
                  className="primary-button"
                  onClick={() => {
                    setCartOpen(false);
                    scrollToShop();
                  }}
                >
                  Shop Achaar
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item, index) => (
                    <div className="cart-item" key={`${item.id}-${item.size}`}>
                      <div className="cart-item-visual">
                        {item.emoji}
                      </div>

                      <div className="cart-item-details">
                        <h3>{item.name}</h3>
                        <span>{item.size}</span>

                        <div className="cart-item-bottom">
                          <strong>₹{item.price * item.quantity}</strong>

                          <div className="mini-quantity">
                            <button onClick={() => changeCartQuantity(index, -1)}>
                              <Minus size={12} />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => changeCartQuantity(index, 1)}>
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div>
                    <span>Subtotal</span>
                    <strong>₹{cartTotal}</strong>
                  </div>

                  <div>
                    <span>Delivery</span>
                    <span className="delivery-note">Calculated at checkout</span>
                  </div>

                  <button className="checkout-button">
                    Proceed to Checkout
                    <ArrowRight size={18} />
                  </button>

                  <small className="checkout-note">
                    Secure checkout • Freshly packed with care
                  </small>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}

export default App;
