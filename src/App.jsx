import {
  ArrowRight,
  Check,
  ChevronDown,
  Instagram,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Heart,
  Leaf,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

const WHATSAPP_NUMBER = "918595119741";

const whatsappMessage = encodeURIComponent(
  "Hi Bebe Da Achaar! ❤️ I would like to order some homemade achaar."
);

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Bebe Da Achaar" />
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#featured" onClick={closeMenu}>Our Achaar</a>
          <a href="#story" onClick={closeMenu}>Bebe Ki Kahani</a>
          <a href="#why" onClick={closeMenu}>Why Bebe</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="menu-order"
            onClick={closeMenu}
          >
            Order on WhatsApp
            <ArrowRight size={17} />
          </a>
        </nav>
      </header>


      {/* ================= HERO ================= */}

      <main>

        <section className="hero" id="home">

          <div className="leaf-pattern leaf-one">✦</div>
          <div className="leaf-pattern leaf-two">❋</div>
          <div className="leaf-pattern leaf-three">✦</div>

          <div className="hero-content">

            <span className="eyebrow">
              FROM BEBE'S KITCHEN <span>♥</span>
            </span>

            <div className="hero-logo">
              <img
                src="/logo.png"
                alt="Bebe Da Achaar logo"
              />
            </div>

            <h1>
              Ghar ka Swaad,
              <br />
              <em>Bebe ke Saath</em>
            </h1>

            <p className="hero-subtitle">
              Asli Homemade Achaar
              <span>•</span>
              No Preservatives
              <span>•</span>
              Made in Small Batches
            </p>

            <div className="hero-actions">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                <MessageCircle size={19} />
                Order Now on WhatsApp
              </a>

              <span className="seasonal">
                Limited Seasonal Batches
              </span>

            </div>

            <p className="hero-bottom-line">
              Ek baar khaoge, ghar yaad aa jayega.
            </p>

          </div>

          <div className="hero-product">
            <div className="product-glow"></div>

            <img
              src="/images/achar-lifestyle.jpg"
              alt="Homemade Bebe Da Achaar"
            />

            <div className="floating-badge">
              <Heart size={15} fill="currentColor" />
              <span>100% Homemade</span>
            </div>
          </div>

          <a href="#trust" className="scroll-hint">
            <span>Scroll to taste</span>
            <ChevronDown size={17} />
          </a>

        </section>


        {/* ================= TRUST ================= */}

        <section className="trust" id="trust">

          <div className="trust-item">
            <div className="trust-icon">
              <Leaf size={20} />
            </div>
            <strong>Fresh Aam</strong>
            <span>Fresh raw mangoes</span>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              <Sparkles size={20} />
            </div>
            <strong>Traditional</strong>
            <span>Recipes passed down</span>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              <ShieldCheck size={20} />
            </div>
            <strong>No Preservatives</strong>
            <span>Nothing unnecessary</span>
          </div>

          <div className="trust-item">
            <div className="trust-icon">
              <Heart size={20} />
            </div>
            <strong>Homemade</strong>
            <span>Small-batch love</span>
          </div>

        </section>


        {/* ================= FEATURED PRODUCT ================= */}

        <section className="featured section" id="featured">

          <div className="section-label">
            BEBE'S FAVOURITE
          </div>

          <div className="featured-heading">
            <h2>
              Khatte Aam Ka
              <br />
              <em>Achaar is Back!</em> 🥭
            </h2>
          </div>

          <div className="featured-image">

            <div className="image-decoration"></div>

            <img
              src="/images/khatte-aam.jpg"
              alt="Khatte Aam Ka Achaar"
            />

            <span className="batch-tag">
              FRESH BATCH
            </span>

          </div>

          <div className="featured-copy">

            <p className="lead-copy">
              Kachche aam, ghar ke masale aur Bebe ka
              wohi purana tareeka.
            </p>

            <p>
              Khatta, teekha, chatpata — bilkul waise hi
              jaise ghar mein banta tha. Har batch chhota
              hai, taaki har jar mein freshness aur woh
              <strong> asli ghar ka swaad </strong>
              bana rahe.
            </p>

            <div className="ingredient-row">

              <span>
                <b>🥭</b>
                Fresh Mangoes
              </span>

              <span>
                <b>🌶️</b>
                Hand-blended
              </span>

              <span>
                <b>❤️</b>
                Small Batch
              </span>

            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              Order Khatta Aam
              <ArrowRight size={18} />
            </a>

            <small>
              Seasonal batch • Limited jars available
            </small>

          </div>

        </section>


        {/* ================= STORY ================= */}

        <section className="story section" id="story">

          <div className="story-copy">

            <div className="section-label">
              A LITTLE BIT OF HOME
            </div>

            <h2>
              Sab kuch hai…
              <br />
              <em>bas achar nahi hai.</em>
            </h2>

            <div className="story-text">

              <p>
                Dal garam hai.
                <br />
                Roti fresh hai.
                <br />
                Ghar ki khushboo bhi wahi hai.
              </p>

              <p>
                Bas ek cheez missing hai —
                <strong> Bebe ka achar.</strong>
              </p>

              <p>
                Kyunki kuch swaad sirf khaane ke nahi
                hote. Woh bachpan yaad dilate hain.
                ❤️
              </p>

            </div>

            <div className="bebe-note">
              <span>“Ek chamach aur?”</span>
              <small>— Bebe</small>
            </div>

          </div>

          <div className="story-image">

            <img
              src="/images/thali-achaar.jpg"
              alt="Traditional Indian thali with homemade achaar"
            />

            <div className="missing-achaar">
              <span>ACHAR?</span>
              <small>Missing piece!</small>
            </div>

          </div>

        </section>


        {/* ================= WHY BEBE ================= */}

        <section className="why section" id="why">

          <div className="why-heading">

            <div className="section-label light">
              WHY BEBE DA ACHAAR
            </div>

            <h2>
              Har jar mein
              <br />
              <em>kuch khaas hai.</em>
            </h2>

            <p>
              Simple ingredients. Purani recipes.
              Bebe ka pyaar.
            </p>

          </div>


          <div className="benefit-grid">

            <article className="benefit-card">

              <div className="benefit-icon">
                <span>👵</span>
              </div>

              <span className="card-number">01</span>

              <h3>
                Traditional Family Recipes
              </h3>

              <p>
                Purani ghar ki recipes,
                generations se sambhali hui.
              </p>

            </article>


            <article className="benefit-card">

              <div className="benefit-icon">
                <span>🌿</span>
              </div>

              <span className="card-number">02</span>

              <h3>
                Pure Ingredients Only
              </h3>

              <p>
                Jo Bebe apni rasoi mein use karein,
                wahi humare achar mein jaaye.
              </p>

            </article>


            <article className="benefit-card">

              <div className="benefit-icon">
                <span>❤️</span>
              </div>

              <span className="card-number">03</span>

              <h3>
                Made with Bebe's Love
              </h3>

              <p>
                Machine-made nahi.
                Har batch mein ghar wali feeling.
              </p>

            </article>


            <article className="benefit-card">

              <div className="benefit-icon">
                <span>🏺</span>
              </div>

              <span className="card-number">04</span>

              <h3>
                Hygienic Small Batches
              </h3>

              <p>
                Chhote batches mein carefully
                prepared, packed & ready for your table.
              </p>

            </article>

          </div>

        </section>


        {/* ================= SOCIAL CTA ================= */}

        <section className="social-cta section">

          <div className="social-image">

            <img
              src="/images/achar-lifestyle.jpg"
              alt="Fresh homemade mango achaar"
            />

          </div>

          <div className="social-content">

            <div className="mini-heart">
              ♥
            </div>

            <h2>
              Taste the tradition.
              <br />
              <em>Taste the memories.</em>
            </h2>

            <p>
              Aaj apni plate ko woh missing piece
              de do. 🥭❤️
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              <MessageCircle size={19} />
              Order on WhatsApp
            </a>

            <span className="phone-number">
              +91 85951 19741
            </span>

            <a
              href="https://instagram.com/bebe_da_achaar"
              target="_blank"
              rel="noreferrer"
              className="instagram-link"
            >
              <Instagram size={19} />
              @bebe_da_achaar
            </a>

          </div>

        </section>


        {/* ================= FINAL CTA ================= */}

        <section className="final-cta" id="contact">

          <div className="final-inner">

            <div className="final-logo">
              <img
                src="/logo.png"
                alt="Bebe Da Achaar"
              />
            </div>

            <span className="eyebrow light">
              ONE LAST THING...
            </span>

            <h2>
              Achar toh ghar ka
              <br />
              <em>hi hona chahiye.</em>
            </h2>

            <p>
              Fresh batch ka wait mat karo.
              <br />
              Bebe ko WhatsApp karo. ❤️
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="gold-button"
            >
              WhatsApp Bebe
              <ArrowRight size={18} />
            </a>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-logo">
          <img
            src="/logo.png"
            alt="Bebe Da Achaar"
          />
        </div>

        <p className="footer-tagline">
          Wrapped in Tradition.
        </p>

        <div className="footer-details">

          <a href={whatsappUrl}>
            <MessageCircle size={16} />
            +91 85951 19741
          </a>

          <a href="https://bebedaachaar.in">
            bebedaachaar.in
          </a>

          <a
            href="https://instagram.com/bebe_da_achaar"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={16} />
            @bebe_da_achaar
          </a>

        </div>

        <div className="footer-bottom">
          © 2026 Bebe Da Achaar
          <span>•</span>
          Made with love, one batch at a time.
        </div>

      </footer>


      {/* ================= STICKY MOBILE CTA ================= */}

      <div className="sticky-order">

        <div>
          <span>🥭</span>
          <div>
            <strong>Ready for some ghar ka swaad?</strong>
            <small>Fresh batches available</small>
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          Order
        </a>

      </div>

    </div>
  );
}

export default App;
