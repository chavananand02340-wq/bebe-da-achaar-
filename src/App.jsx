import { useState } from "react";
import {
  ArrowRight,
  Check,
  Heart,
  Instagram,
  Leaf,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const WHATSAPP =
  "https://wa.me/918595119741?text=Hi%20Bebe%20Da%20Achaar!%20%F0%9F%8C%B6%20I%20would%20like%20to%20order%20some%20homemade%20achaar.";

function BebeLogo({ small = false }) {
  return (
    <div className={`brand-logo ${small ? "small" : ""}`}>
      <div className="bebe-avatar">👵🏻</div>
      <div className="brand-name">
        <strong>Bebe Da</strong>
        <strong>Achaar</strong>
      </div>
    </div>
  );
}

function AcharJar({ large = false }) {
  return (
    <div className={`jar-scene ${large ? "large" : ""}`}>
      <div className="leaf leaf-a">🌿</div>
      <div className="leaf leaf-b">🌿</div>

      <div className="mango mango-one">🥭</div>
      <div className="mango mango-two">🥭</div>

      <div className="jar-shadow" />

      <div className="achar-jar">
        <div className="jar-lid">
          <span />
        </div>

        <div className="jar-glass">
          <div className="pickle-layer one" />
          <div className="pickle-layer two" />
          <div className="pickle-layer three" />

          <div className="jar-label">
            <div className="label-bebe">👵🏻</div>
            <strong>Bebe Da</strong>
            <strong>Achaar</strong>
            <small>Homemade • Since forever</small>
          </div>
        </div>
      </div>

      <div className="spice-bowl">🌶️</div>
      <div className="mustard-seeds">•••</div>
    </div>
  );
}

function ThaliVisual() {
  return (
    <div className="thali-visual">
      <div className="wood-background" />

      <div className="thali">
        <div className="roti">🫓</div>
        <div className="dal">🥣</div>
        <div className="sabzi">🥗</div>
        <div className="rice">🍚</div>

        <div className="missing-achaar">
          <span>ACHAR?</span>
          <small>Missing piece!</small>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);

  const close = () => setMenu(false);

  return (
    <div className="app">

      {/* NAVBAR */}

      <header className="navbar">
        <a href="#home" onClick={close}>
          <BebeLogo small />
        </a>

        <nav className={menu ? "nav-menu open" : "nav-menu"}>
          <a href="#home" onClick={close}>Home</a>
          <a href="#achaar" onClick={close}>Our Achaar</a>
          <a href="#story" onClick={close}>Bebe Ki Kahani</a>
          <a href="#why" onClick={close}>Why Bebe</a>
          <a href="#contact" onClick={close}>Contact</a>

          <a
            className="nav-order"
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            onClick={close}
          >
            <MessageCircle size={16} />
            Order on WhatsApp
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenu(!menu)}
          aria-label="Menu"
        >
          {menu ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>


      {/* HERO */}

      <section className="hero" id="home">

        <div className="hero-pattern pattern-one">🌿</div>
        <div className="hero-pattern pattern-two">✦</div>

        <div className="hero-copy">

          <span className="eyebrow">
            FROM BEBE'S KITCHEN <Heart size={12} fill="currentColor" />
          </span>

          <div className="hero-brand">
            <BebeLogo />
          </div>

          <h1>
            Ghar ka Swaad,
            <br />
            <em>Bebe ke Saath</em>
          </h1>

          <p className="hero-description">
            Asli Homemade Achaar
            <span>•</span>
            No Preservatives
            <span>•</span>
            Made in Small Batches
          </p>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="gold-button"
          >
            <MessageCircle size={18} />
            Order Now on WhatsApp
          </a>

          <span className="seasonal">
            ✦ Limited Seasonal Batches ✦
          </span>

          <p className="hero-line">
            Ek baar khaoge, ghar yaad aa jayega.
          </p>

        </div>

        <div className="hero-visual">
          <AcharJar large />

          <div className="homemade-badge">
            <strong>100%</strong>
            <span>Homemade</span>
            <Heart size={13} fill="currentColor" />
          </div>
        </div>

      </section>


      {/* TRUST */}

      <section className="trust-bar">

        <div>
          <Leaf />
          <strong>Fresh Aam</strong>
          <span>Fresh raw mangoes</span>
        </div>

        <div>
          <Sparkles />
          <strong>Traditional</strong>
          <span>Recipes passed down</span>
        </div>

        <div>
          <ShieldCheck />
          <strong>No Preservatives</strong>
          <span>Nothing unnecessary</span>
        </div>

        <div>
          <Heart />
          <strong>Homemade</strong>
          <span>Small-batch love</span>
        </div>

      </section>


      {/* FEATURED */}

      <section className="featured section" id="achaar">

        <div className="featured-visual">
          <AcharJar />

          <div className="fresh-batch">
            FRESH
            <br />
            BATCH
          </div>
        </div>

        <div className="featured-copy">

          <span className="eyebrow terracotta">
            BEBE'S FAVOURITE
          </span>

          <h2>
            Khatte Aam Ka
            <br />
            <em>Achaar is Back!</em> 🥭
          </h2>

          <p className="big-copy">
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

          <div className="ingredients">
            <span>🥭 Fresh Mangoes</span>
            <span>🌶️ Hand-blended Masalas</span>
            <span>❤️ Small Batch</span>
          </div>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="green-button"
          >
            Order Khatta Aam
            <ArrowRight size={18} />
          </a>

          <small>Seasonal batch • Limited jars available</small>

        </div>

      </section>


      {/* STORY */}

      <section className="story section" id="story">

        <div className="story-copy">

          <span className="eyebrow terracotta">
            A LITTLE BIT OF HOME
          </span>

          <h2>
            Sab kuch hai…
            <br />
            <em>bas achar nahi hai.</em>
          </h2>

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
            Kyunki kuch swaad sirf khaane ke nahi hote.
            Woh bachpan yaad dilate hain. ❤️
          </p>

          <div className="bebe-quote">
            <em>“Ek chamach aur?”</em>
            <span>— Bebe</span>
          </div>

        </div>

        <ThaliVisual />

      </section>


      {/* WHY */}

      <section className="why section" id="why">

        <div className="why-intro">

          <span className="eyebrow light">
            WHY BEBE DA ACHAAR
          </span>

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

        <div className="benefits">

          <article>
            <div className="benefit-icon">👵🏻</div>
            <small>01</small>
            <h3>Traditional Family Recipes</h3>
            <p>
              Purani ghar ki recipes,
              generations se sambhali hui.
            </p>
          </article>

          <article>
            <div className="benefit-icon">🌿</div>
            <small>02</small>
            <h3>Pure Ingredients Only</h3>
            <p>
              Jo Bebe apni rasoi mein use karein,
              wahi humare achar mein jaaye.
            </p>
          </article>

          <article>
            <div className="benefit-icon">❤️</div>
            <small>03</small>
            <h3>Made with Bebe's Love</h3>
            <p>
              Machine-made nahi.
              Har batch mein ghar wali feeling.
            </p>
          </article>

          <article>
            <div className="benefit-icon">🏺</div>
            <small>04</small>
            <h3>Hygienic Small Batches</h3>
            <p>
              Chhote batches mein carefully
              prepared, packed & ready for your table.
            </p>
          </article>

        </div>

      </section>


      {/* SOCIAL CTA */}

      <section className="social section">

        <div className="spoon-visual">
          <div className="spoon">🥄</div>
          <div className="spoon-pickle">🫙</div>
          <div className="roti-back">🫓</div>
        </div>

        <div className="social-copy">

          <Heart
            className="red-heart"
            size={22}
            fill="currentColor"
          />

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
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="gold-button"
          >
            <MessageCircle size={18} />
            Order on WhatsApp
          </a>

          <strong className="phone">
            +91 85951 19741
          </strong>

          <a
            href="https://instagram.com/bebe_da_achaar"
            target="_blank"
            rel="noreferrer"
            className="instagram"
          >
            <Instagram size={18} />
            @bebe_da_achaar
          </a>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="final-cta" id="contact">

        <div className="final-brand">
          <BebeLogo />
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
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="gold-button"
        >
          WhatsApp Bebe
          <ArrowRight size={18} />
        </a>

      </section>


      {/* FOOTER */}

      <footer className="footer">

        <BebeLogo />

        <p className="tagline">
          Wrapped in Tradition.
        </p>

        <div className="footer-links">

          <a href={WHATSAPP}>
            <MessageCircle size={15} />
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
            <Instagram size={15} />
            @bebe_da_achaar
          </a>

        </div>

        <div className="copyright">
          © 2026 Bebe Da Achaar
          <span>•</span>
          Made with love, one batch at a time.
        </div>

      </footer>


      {/* MOBILE STICKY CTA */}

      <div className="sticky-order">

        <div>
          <span>🥭</span>
          <div>
            <strong>Ready for some ghar ka swaad?</strong>
            <small>Fresh seasonal batches</small>
          </div>
        </div>

        <a
          href={WHATSAPP}
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
