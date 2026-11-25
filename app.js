/**
 * LUMINA SKIN & BEAUTY
 * Interactive Skin Optical Analyzer & Personalized Cosmetic/Skincare Engine
 */

const SKIN_DATABASE = {
  oily: {
    label: "Oily Skin",
    title: "Oily & Shine-Prone Complexion",
    summary:
      "Characterized by overactive sebaceous glands across the T-zone and cheeks, visible pores, and a tendency for base makeup to oxidize or separate mid-day. Requires oil-free hydration and sebum-absorbing polymers.",
    metrics: {
      sebum: { label: "High", pct: 86 },
      hydration: { label: "Moderate", pct: 58 },
      reactivity: { label: "Low", pct: 26 },
    },
    priorities: [
      "Non-comedogenic, oil-free water-gel textures that balance sebum without stripping",
      "Soft-matte and natural satin finishes that resist oxidation",
      "Salicylic acid (BHA) and Niacinamide to refine pore appearance beneath makeup",
    ],
    products: [
      {
        step: "Step 01 • Primer",
        name: "Silica Blur & Mattifying Grip Primer",
        archetype: "Oil-Free Pore-Refining Gel",
        finish: "Soft-Matte",
        why: "Creates a breathable micro-mesh barrier that absorbs excess T-zone sebum while gripping foundation for 12+ hours.",
        ingredients: "Niacinamide (4%), Micro-Silica, Zinc PCA",
        howToUse: "Press a pea-sized amount strictly into the T-zone and nose wings using fingertips; skip dry perimeter areas.",
      },
      {
        step: "Step 02 • Foundation",
        name: "Weightless Serum-to-Matte Liquid Foundation",
        archetype: "Oil-Free Longwear Fluid",
        finish: "Natural Matte",
        why: "Self-setting volatile silicones evaporate on contact, leaving high-pigment coverage that never feels heavy or clogs pores.",
        ingredients: "Salicylic Acid (0.5%), Bamboo Stem Extract, Hyaluronic Acid",
        howToUse: "Apply in thin layers from the center of the face outward using a dense flat-top kabuki brush.",
      },
      {
        step: "Step 03 • Concealer",
        name: "High-Adherence Crease-Proof Matte Concealer",
        archetype: "Full-Coverage Whipped Wand",
        finish: "Velvet Matte",
        why: "Resists breaking down around oily nostrils and blemishes while neutralizing post-blemish hyperpigmentation.",
        ingredients: "Kaolin Clay, Vitamin E, Caffeine",
        howToUse: "Dot onto blemishes, wait 30 seconds for the formula to tack up, then tap edges gently with a small brush.",
      },
      {
        step: "Step 04 • Setting",
        name: "Translucent Micronized Rice & Silica Loose Powder",
        archetype: "Oil-Absorbing Veil",
        finish: "Blurred Matte",
        why: "Neutralizes midday shine without flashback or cakey buildup on textured pores.",
        ingredients: "Oryza Sativa (Rice) Starch, Silica, Allantoin",
        howToUse: "Press onto forehead, chin, and sides of nose using a velour powder puff—roll rather than swipe.",
      },
      {
        step: "Step 05 • Cheek Color",
        name: "Velvet-Powder Longwear Cheek Tint",
        archetype: "Pressed Micro-Milled Blush",
        finish: "Satin-Matte",
        why: "Powder pigments adhere seamlessly over set base makeup and resist fading when natural skin oils emerge.",
        ingredients: "Squalane-Coated Pigments, Kaolin, Rosehip Oil",
        howToUse: "Sweep high on the cheekbones toward the temples using a fluffy angled brush.",
      },
    ],
    skincare: {
      am: [
        {
          step: "01",
          title: "Purifying Gel Cleanser",
          active: "0.5% Salicylic Acid + Green Tea",
          desc: "Dissolves overnight sebum buildup without disrupting skin’s acid mantle.",
        },
        {
          step: "02",
          title: "Pore-Balancing Essence",
          active: "5% Niacinamide + Zinc",
          desc: "Regulates daytime oil production and visibly tightens pores prior to primer.",
        },
        {
          step: "03",
          title: "Oil-Free Water-Gel Moisturizer",
          active: "Multi-Weight Hyaluronic Acid",
          desc: "Delivers weightless hydration so skin does not overproduce compensatory oil.",
        },
        {
          step: "04",
          title: "Matte Fluid SPF 50+",
          active: "Silica-Infused UV Filters",
          desc: "Provides broad-spectrum sun protection while doubling as a smooth makeup grip.",
        },
      ],
      pm: [
        {
          step: "01",
          title: "Micellar Oil-Dissolving First Cleanse",
          active: "Grapeseed & Jojoba Esters",
          desc: "Breaks down waterproof longwear foundation and sunscreen cleanly.",
        },
        {
          step: "02",
          title: "Foaming Amino Acid Second Cleanse",
          active: "Cocoyl Glycinate + Panthenol",
          desc: "Removes residual impurities while keeping the skin barrier calm.",
        },
        {
          step: "03",
          title: "Clarifying BHA Exfoliant (3x/Week)",
          active: "2% Encapsulated Salicylic Acid",
          desc: "Penetrates inside pores to prevent congestion and blackheads.",
        },
        {
          step: "04",
          title: "Barrier-Repair Gel Cream",
          active: "Ceramide NP + Centella Asiatica",
          desc: "Replenishes overnight hydration with zero heavy occlusives.",
        },
      ],
    },
    masterclass: {
      howToApply: [
        {
          tag: "PREP & PLACEMENT",
          title: "The Thin-Layer Rule",
          body: "Apply foundation in sheer, buildable micro-layers rather than one thick coat. Thick layers break apart faster when mixed with natural sebum.",
        },
        {
          tag: "SETTING TECHNIQUE",
          title: "Press & Roll Powdering",
          body: "Load a triangular velour puff with translucent powder, tap off excess on the back of your hand, and press firmly into the T-zone to lock base makeup in place.",
        },
        {
          tag: "TOUCH-UP PROTOCOL",
          title: "Blot Before Powdering",
          body: "Always lift surface oil with a clean blotting paper first. Applying powder directly over wet oil creates a cakey paste.",
        },
      ],
      proTips: [
        {
          tag: "PRO TIP 01",
          title: "Eye Primer on the Nose",
          body: "For stubborn nose shine where foundation always slips off, tap a tiny dot of eyeshadow primer onto the bridge and sides of the nose before foundation.",
        },
        {
          tag: "PRO TIP 02",
          title: "Sandwich Setting Method",
          body: "Mist setting spray after primer, apply foundation, powder lightly, and mist once more to fuse powders into a natural skin-like finish.",
        },
        {
          tag: "PRO TIP 03",
          title: "Strategic Luminosity",
          body: "Keep the center of the forehead, nose, and chin matte, while placing subtle highlighter strictly on the upper cheekbones.",
        },
      ],
      avoidList: [
        {
          tag: "AVOID INGREDIENT",
          title: "Heavy Coconut Oil & Cocoa Butter",
          body: "Highly comedogenic emollients in stick foundations or balms can trigger congestion and cause pigments to slide off oily zones.",
        },
        {
          tag: "AVOID FINISH",
          title: "All-Over Dewy Glass-Skin Primers",
          body: "High-glycerin or oil-rich illuminating primers amplify shine within two hours, making oily skin appear greasy rather than radiant.",
        },
        {
          tag: "AVOID HABIT",
          title: "Over-Stripping Alcohol Toners",
          body: "Drying astringents trigger rebound sebum production, causing your skin to pump out even more oil under your makeup.",
        },
      ],
    },
  },

  dry: {
    label: "Dry Skin",
    title: "Dry & Dehydrated Complexion",
    summary:
      "Lacks natural surface lipids and intercellular moisture, often showing fine dehydration lines, flaky patches around the nose or brows, and dullness. Thrives on humectant-rich, dewy cream formulas.",
    metrics: {
      sebum: { label: "Low", pct: 22 },
      hydration: { label: "Low / Depleted", pct: 30 },
      reactivity: { label: "Moderate", pct: 48 },
    },
    priorities: [
      "Emollient, serum-infused liquid and cream textures that prevent clinging to dry flakes",
      "Luminous, dewy, and radiant finishes that mimic healthy lipid bounce",
      "Squalane, Ceramides, and Polyglutamic Acid to seal moisture under pigments",
    ],
    products: [
      {
        step: "Step 01 • Primer",
        name: "Hydro-Plumping Squalane & Peptide Dew Primer",
        archetype: "Moisture-Locking Cushion Serum",
        finish: "Radiant Dewy",
        why: "Smooths micro-flakes instantly and creates a supple, cushioned canvas so foundation glides without catching.",
        ingredients: "Olive Squalane, Polyglutamic Acid, Copper Peptides",
        howToUse: "Warm 2 pumps between palms and press onto damp moisturizer 60 seconds before foundation.",
      },
      {
        step: "Step 02 • Foundation",
        name: "Luminous Ceramide Skin-Tint Serum Foundation",
        archetype: "Hydrating Medium-Coverage Fluid",
        finish: "Glass-Skin Glow",
        why: "Suspended in a 70% skincare essence base to keep skin plump and luminous for up to 10 hours without settling into fine lines.",
        ingredients: "Ceramides NP/AP, Hyaluronic Acid, Glycerin",
        howToUse: "Bounce onto skin using a damp, plush makeup sponge to infuse extra moisture and prevent micro-exfoliation.",
      },
      {
        step: "Step 03 • Concealer",
        name: "Serum-Infused Elastic Under-Eye Brightener",
        archetype: "Hydrating Radiant Concealer",
        finish: "Luminous Satin",
        why: "Flexible polymers move with dry under-eye skin without creasing, cracking, or emphasizing texture.",
        ingredients: "Squalane, Niacinamide, Tremella Mushroom",
        howToUse: "Apply sparingly to inner and outer under-eye corners and blend with your ring finger’s natural warmth.",
      },
      {
        step: "Step 04 • Setting",
        name: "Hyaluronic Dew-Locking Micro-Mist",
        archetype: "Alcohol-Free Hydrating Setting Spray",
        finish: "Fresh Dew",
        why: "Melts powders and creams together while replacing traditional drying setting powders on dry cheeks.",
        ingredients: "Rosewater Hydrosol, Panthenol (B5), Ectoin",
        howToUse: "Hold 8 inches away and mist in an X-and-T motion; use powder only lightly under the eyes if needed.",
      },
      {
        step: "Step 05 • Cheek Color",
        name: "Balm-to-Satin Melting Cream Blush",
        archetype: "Emollient Cheek & Lip Tint",
        finish: "Lit-From-Within Glow",
        why: "Nourishing plant esters impart a juicy flush that never looks chalky or powdery on dry cheekbones.",
        ingredients: "Shea Butter Esters, Vitamin E, Jojoba Oil",
        howToUse: "Tap onto the apples of cheeks with fingertips or a stippling brush before misting.",
      },
    ],
    skincare: {
      am: [
        {
          step: "01",
          title: "Milky Non-Foaming Cream Cleanser",
          active: "Oat Lipids + Glycerin",
          desc: "Refreshes skin gently without stripping precious morning natural oils.",
        },
        {
          step: "02",
          title: "Multi-Molecular Hydrating Toner",
          active: "Polyglutamic Acid + Beta-Glucan",
          desc: "Floods dehydrated skin cells with water-binding humectants.",
        },
        {
          step: "03",
          title: "Rich Ceramide Barrier Cream",
          active: "Triple Ceramide Complex + Squalane",
          desc: "Seals in moisture and flattens flaky texture for seamless makeup application.",
        },
        {
          step: "04",
          title: "Dewy Moisturizing Sunscreen SPF 50",
          active: "Panthenol + Hydrating UV Filters",
          desc: "Protects dry skin from UV-induced barrier loss with a luminous finish.",
        },
      ],
      pm: [
        {
          step: "01",
          title: "Nourishing Cleansing Balm",
          active: "Sweet Almond & Shea Esters",
          desc: "Dissolves makeup effortlessly while conditioning dry, tight skin.",
        },
        {
          step: "02",
          title: "Gentle PHA Exfoliating Essence (2x/Week)",
          active: "3% Gluconolactone",
          desc: "Gently lifts dead, flaky skin cells without irritation while acting as a humectant.",
        },
        {
          step: "03",
          title: "Intensive Peptide Recovery Serum",
          active: "5% Panthenol + Ectoin",
          desc: "Accelerates overnight lipid synthesis and repairs micro-cracks in the barrier.",
        },
        {
          step: "04",
          title: "Overnight Lipid Sleeping Mask",
          active: "Plant Squalane + Cholesterol + Fatty Acids",
          desc: "Locks hydration into the stratum corneum until morning.",
        },
      ],
    },
    masterclass: {
      howToApply: [
        {
          tag: "TOOL SELECTION",
          title: "Damp Sponge Over Brushes",
          body: "Brush bristles can lift micro-flakes on dry skin. Always press liquid foundation and cream blush in with a damp sponge for a smooth, glass-like finish.",
        },
        {
          tag: "MINIMAL POWDER",
          title: "Pinpoint Powdering Only",
          body: "Skip all-over face powder. Use a tiny fluffy eyeshadow brush to dust translucent powder solely on the under-eye crease and smile lines.",
        },
        {
          tag: "CREAM LAYERING",
          title: "All-Cream Complexion",
          body: "Stick to cream bronzer, cream blush, and liquid highlighter so every layer shares an emollient base and melds seamlessly.",
        },
      ],
      proTips: [
        {
          tag: "PRO TIP 01",
          title: "The Facial Oil Drop Trick",
          body: "Mix half a drop of pure plant squalane into your foundation on the back of your hand during winter months for instant custom radiance.",
        },
        {
          tag: "PRO TIP 02",
          title: "Wait 3 Minutes After Moisturizer",
          body: "Allow rich barrier creams to absorb fully before applying primer so your base doesn’t pill or slide.",
        },
        {
          tag: "PRO TIP 03",
          title: "Midday Mist Revival",
          body: "If makeup starts looking tight by 3 PM, mist with an alcohol-free hydrating spray and gently press skin with clean palms.",
        },
      ],
      avoidList: [
        {
          tag: "AVOID INGREDIENT",
          title: "Denatured Alcohol (Alcohol Denat.)",
          body: "Commonly found in fast-drying matte foundations and setting sprays; rapidly evaporates surface water and worsens flaking.",
        },
        {
          tag: "AVOID FORMULA",
          title: "High-Talc & Clay Mattifiers",
          body: "Kaolin clay and heavy talc powders absorb the little lipid moisture dry skin possesses, emphasizing fine lines.",
        },
        {
          tag: "AVOID HABIT",
          title: "Buffing with Stiff Brushes",
          body: "Circular buffing motions create friction that lifts dry skin patches around the nostrils and chin.",
        },
      ],
    },
  },

  sensitive: {
    label: "Sensitive Skin",
    title: "Sensitive & Reactive Complexion",
    summary:
      "Prone to flushing, stinging, contact dermatitis, and compromised barrier function. Requires fragrance-free, hypoallergenic, minimal-ingredient mineral and soothing botanical formulations.",
    metrics: {
      sebum: { label: "Variable", pct: 44 },
      hydration: { label: "Fragile Barrier", pct: 42 },
      reactivity: { label: "High", pct: 88 },
    },
    priorities: [
      "100% fragrance-free, essential-oil-free, and denatured-alcohol-free formulations",
      "Centella Asiatica, Allantoin, and Bisabolol to visibly calm erythema (redness)",
      "Non-nano mineral pigments and gentle, low-friction application tools",
    ],
    products: [
      {
        step: "Step 01 • Primer",
        name: "Cica & Green-Mineral Redness Neutralizing Primer",
        archetype: "Hypoallergenic Barrier-Calming Balm",
        finish: "Natural Satin",
        why: "Sheer green mineral pigments neutralize facial flushing on contact while Centella repairs sensitized skin.",
        ingredients: "Centella Asiatica, Allantoin, Colloidal Oatmeal",
        howToUse: "Pat gently over flushed cheeks and nose with clean fingertips—avoid vigorous rubbing.",
      },
      {
        step: "Step 02 • Foundation",
        name: "Pure Mineral & Ectoin Soothing Skin Tint",
        archetype: "Fragrance-Free Dermatologist Fluid",
        finish: "Healthy Natural",
        why: "Formulated with fewer than 18 clean, non-irritating ingredients to provide breathable coverage without triggering flare-ups.",
        ingredients: "Zinc Oxide, Ectoin, Bisabolol",
        howToUse: "Press onto skin using a clean, ultra-soft synthetic duo-fiber brush or freshly washed sponge.",
      },
      {
        step: "Step 03 • Concealer",
        name: "Bisabolol Calm-Touch Spot & Redness Concealer",
        archetype: "Clean Hypoallergenic Stick-Cream",
        finish: "Skin-Like Satin",
        why: "Covers broken capillaries and reactive spots without bismuth oxychloride or synthetic dyes that cause itching.",
        ingredients: "Alpha-Bisabolol, Squalane, Ceramide NP",
        howToUse: "Warm product on the back of your hand first, then tap onto redness with a clean fingertip.",
      },
      {
        step: "Step 04 • Setting",
        name: "Oat-Infused Talc-Free Mineral Veil",
        archetype: "Ultra-Gentle Loose Setting Powder",
        finish: "Soft Natural",
        why: "Free from talc, fragrance, and bismuth oxychloride—sets makeup softly without stinging eyes or reactive cheeks.",
        ingredients: "Avena Sativa (Oat) Kernel Flour, Mica, Zinc Stearate",
        howToUse: "Lightly dust over the center of the face using a clean, plush synthetic brush.",
      },
      {
        step: "Step 05 • Cheek Color",
        name: "Pure Mineral Pressed Petal Blush",
        archetype: "Talc-Free & Carmine-Free Cheek Color",
        finish: "Soft Satin",
        why: "Uses purified iron oxides instead of common sensitizing dyes (like Red 40 or carmine) for irritation-free warmth.",
        ingredients: "Purified Iron Oxides, Jojoba Esters, Vitamin E",
        howToUse: "Tap lightly onto cheekbones using minimal brush pressure.",
      },
    ],
    skincare: {
      am: [
        {
          step: "01",
          title: "pH-Balanced Micellar Water or Thermal Rinse",
          active: "Thermal Spring Water + Glycerin",
          desc: "Cleanses gently without friction or surfactant irritation.",
        },
        {
          step: "02",
          title: "Calming Cica & Panthenol Serum",
          active: "Madecassoside + 5% Panthenol",
          desc: "Downregulates inflammatory redness before makeup touches the skin.",
        },
        {
          step: "03",
          title: "Hypoallergenic Barrier Lotion",
          active: "Colloidal Oatmeal + Ceramides",
          desc: "Creates a protective lipid shield between sensitive skin and cosmetics.",
        },
        {
          step: "04",
          title: "100% Mineral Zinc Sunscreen SPF 50",
          active: "Non-Nano Zinc Oxide (20%)",
          desc: "Deflects UV rays physically without chemical filter stinging.",
        },
      ],
      pm: [
        {
          step: "01",
          title: "Fragrance-Free Micellar Milk",
          active: "Poloxamer + Allantoin",
          desc: "Lifts makeup gently with zero tugging or essential oil irritation.",
        },
        {
          step: "02",
          title: "Ultra-Gentle Cream Cleanser",
          active: "Ceramides + Niacinamide (2%)",
          desc: "Rinses clean with lukewarm water while preserving skin pH (5.2).",
        },
        {
          step: "03",
          title: "Microbiome Soothing Ampoule",
          active: "Ectoin + Beta-Glucan",
          desc: "Strengthens skin resilience and reduces transepidermal water loss.",
        },
        {
          step: "04",
          title: "Cica Recovery Balm",
          active: "Centella Asiatica + Shea Butter",
          desc: "Calms overnight reactivity and restores a compromised skin barrier.",
        },
      ],
    },
    masterclass: {
      howToApply: [
        {
          tag: "LOW-FRICTION METHOD",
          title: "Pressing Over Buffing",
          body: "Mechanical friction triggers histamine release and flushing in sensitive skin. Always use gentle pressing or stippling motions instead of swiping.",
        },
        {
          tag: "HYGIENE PROTOCOL",
          title: "Weekly Tool Sanitization",
          body: "Bacteria buildup on sponges and brushes triggers reactive breakouts. Wash sponges every 2 uses and brushes weekly with fragrance-free gentle soap.",
        },
        {
          tag: "PATCH TESTING",
          title: "The 24-Hour Jawline Test",
          body: "Always test new foundations or concealers behind the ear or along the jawline for 24 hours before full-face application.",
        },
      ],
      proTips: [
        {
          tag: "PRO TIP 01",
          title: "Cool Temperature Prep",
          body: "Store your calming serum or thermal water mist in the refrigerator; cooling the skin constricts dilated capillaries before foundation.",
        },
        {
          tag: "PRO TIP 02",
          title: "Yellow-Neutral Undertone Matching",
          body: "Choose foundations with neutral-golden undertones rather than pink undertones to naturally counterbalance surface redness.",
        },
        {
          tag: "PRO TIP 03",
          title: "Minimalist Ingredient Lists",
          body: "Favor products with short INCI lists—fewer botanical extracts mean dramatically lower odds of contact sensitization.",
        },
      ],
      avoidList: [
        {
          tag: "AVOID INGREDIENT",
          title: "Synthetic Fragrance & Essential Oils",
          body: "Lavender, citrus, peppermint, and parfum are the #1 triggers of cosmetic contact dermatitis on sensitized skin.",
        },
        {
          tag: "AVOID INGREDIENT",
          title: "Bismuth Oxychloride",
          body: "A crystalline mineral shimmer used in many conventional powders that can cause intense itching and redness when skin warms up.",
        },
        {
          tag: "AVOID HABIT",
          title: "Hot Water & Abrasive Wipes",
          body: "Makeup wipes tug at fragile capillaries and leave surfactant residue behind; always remove makeup with lukewarm water and soft cloths.",
        },
      ],
    },
  },
};

/* Application State */
let currentSkin = "oily";
let currentTime = "am";
let currentGuide = "howToApply";
let mediaStream = null;
let activeSourceType = null; // "camera" | "image"

/* DOM Elements */
const cameraFeed = document.getElementById("cameraFeed");
const uploadedPreview = document.getElementById("uploadedPreview");
const analysisCanvas = document.getElementById("analysisCanvas");
const cameraPlaceholder = document.getElementById("cameraPlaceholder");
const scanOverlay = document.getElementById("scanOverlay");
const laserLine = document.getElementById("laserLine");
const scanStatusPill = document.getElementById("scanStatusPill");
const cameraErrorMsg = document.getElementById("cameraErrorMsg");

const startCameraBtn = document.getElementById("startCameraBtn");
const photoUploadInput = document.getElementById("photoUploadInput");
const captureScanBtn = document.getElementById("captureScanBtn");
const stopCameraBtn = document.getElementById("stopCameraBtn");

const skinTabBtns = document.querySelectorAll(".tab-btn");
const routineBtns = document.querySelectorAll(".routine-btn");
const guideTabs = document.querySelectorAll(".guide-tab");

/* ==========================================================================
   1. CAMERA & ON-DEVICE OPTICAL PIXEL ANALYZER (WITH FULL FALLBACKS)
   ========================================================================== */

async function startCamera() {
  cameraErrorMsg.textContent = "";

  // Check if browser supports mediaDevices
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    cameraErrorMsg.textContent =
      "Live webcam API requires localhost or HTTPS. Use 'Take / Upload Photo' next to this button, or run via a local server.";
    return;
  }

  try {
    // Request front camera first, fallback to any available video device
    try {
      mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });
    } catch (constraintErr) {
      mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
    }

    uploadedPreview.hidden = true;
    cameraFeed.hidden = false;
    cameraFeed.srcObject = mediaStream;

    // Ensure video metadata loads and playback explicitly starts
    await new Promise((resolve) => {
      cameraFeed.onloadedmetadata = () => {
        cameraFeed.play().then(resolve).catch(resolve);
      };
    });

    activeSourceType = "camera";
    cameraPlaceholder.hidden = true;
    scanOverlay.hidden = false;
    captureScanBtn.disabled = false;
    stopCameraBtn.hidden = false;
    scanStatusPill.textContent = "Camera active — center your face & click Analyze";
  } catch (err) {
    let reason = "Camera access was blocked or no webcam was detected.";
    if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError") {
      reason = "Camera permission denied in browser settings. Allow camera access in your address bar or use 'Take / Upload Photo'.";
    } else if (err.name === "NotFoundError" || err.name === "DevicesNotFoundError") {
      reason = "No camera hardware found on this device. Please use 'Take / Upload Photo' instead.";
    } else if (err.name === "NotReadableError") {
      reason = "Camera is currently in use by another application (Zoom/Teams/etc.). Close it and retry.";
    } else if (window.location.protocol === "file:") {
      reason = "Browsers block live webcam on file:// URLs. Open via localhost/HTTPS or click 'Take / Upload Photo'.";
    }
    cameraErrorMsg.textContent = reason;
  }
}

function handlePhotoUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  stopCamera(false);
  cameraErrorMsg.textContent = "";

  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedPreview.onload = () => {
      cameraFeed.hidden = true;
      uploadedPreview.hidden = false;
      activeSourceType = "image";
      cameraPlaceholder.hidden = true;
      scanOverlay.hidden = false;
      captureScanBtn.disabled = false;
      stopCameraBtn.hidden = false;
      scanStatusPill.textContent = "Photo loaded — click 'Capture & Analyze Skin'";
    };
    uploadedPreview.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function stopCamera(resetUI = true) {
  if (mediaStream) {
    mediaStream.getTracks().forEach((track) => track.stop());
    mediaStream = null;
  }
  cameraFeed.srcObject = null;

  if (resetUI) {
    activeSourceType = null;
    uploadedPreview.hidden = true;
    uploadedPreview.src = "";
    photoUploadInput.value = "";
    cameraFeed.hidden = false;
    cameraPlaceholder.hidden = false;
    scanOverlay.hidden = true;
    laserLine.classList.remove("scanning");
    captureScanBtn.disabled = true;
    stopCameraBtn.hidden = true;
  }
}

function analyzeSkinFromSource() {
  if (!activeSourceType) return;

  captureScanBtn.disabled = true;
  laserLine.classList.add("scanning");
  scanStatusPill.textContent = "Scanning surface luminosity & vascular tone...";

  setTimeout(() => {
    const ctx = analysisCanvas.getContext("2d", { willReadFrequently: true });
    const w = analysisCanvas.width;
    const h = analysisCanvas.height;

    if (activeSourceType === "camera") {
      ctx.drawImage(cameraFeed, 0, 0, w, h);
    } else {
      ctx.drawImage(uploadedPreview, 0, 0, w, h);
    }

    // Sample central face region (reticle area)
    const startX = Math.floor(w * 0.3);
    const startY = Math.floor(h * 0.22);
    const sampleW = Math.floor(w * 0.4);
    const sampleH = Math.floor(h * 0.52);

    const imgData = ctx.getImageData(startX, startY, sampleW, sampleH).data;

    let totalBrightness = 0;
    let specularHighlights = 0;
    let rednessScore = 0;
    let pixelCount = 0;

    for (let i = 0; i < imgData.length; i += 16) {
      const r = imgData[i];
      const g = imgData[i + 1];
      const b = imgData[i + 2];

      const brightness = (r + g + b) / 3;
      totalBrightness += brightness;

      // Specular reflection indicator (T-zone shine)
      if (brightness > 210 && r > 200 && g > 190) {
        specularHighlights++;
      }

      // Redness excess relative to green/blue channels
      const redExcess = r - (g + b) / 2;
      if (redExcess > 28) {
        rednessScore += redExcess;
      }

      pixelCount++;
    }

    const avgBrightness = totalBrightness / pixelCount;
    const shineRatio = specularHighlights / pixelCount;
    const avgRedness = rednessScore / pixelCount;

    let detectedSkin = "oily";
    if (avgRedness > 14) {
      detectedSkin = "sensitive";
    } else if (shineRatio > 0.14 || avgBrightness > 168) {
      detectedSkin = "oily";
    } else {
      detectedSkin = "dry";
    }

    laserLine.classList.remove("scanning");
    captureScanBtn.disabled = false;
    scanStatusPill.textContent = `Optical match complete: ${SKIN_DATABASE[detectedSkin].label}`;

    selectSkinProfile(detectedSkin, true);
  }, 1600);
}

/* ==========================================================================
   2. DYNAMIC UI RENDERING
   ========================================================================== */

function selectSkinProfile(skinKey, fromCamera = false) {
  currentSkin = skinKey;
  const data = SKIN_DATABASE[skinKey];

  skinTabBtns.forEach((btn) => {
    const isActive = btn.dataset.skin === skinKey;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive);
  });

  document.getElementById("diagnosisBadge").textContent = fromCamera
    ? "OPTICAL SCAN MATCH"
    : "PROFILE SELECTED";
  document.getElementById("confidenceText").textContent = fromCamera
    ? "Calibrated via Optical Luminosity & Tone"
    : "Curated Dermatological Match";

  document.getElementById("skinTitle").textContent = data.title;
  document.getElementById("skinSummary").textContent = data.summary;

  document.getElementById("sebumVal").textContent = data.metrics.sebum.label;
  document.getElementById("sebumBar").style.width = `${data.metrics.sebum.pct}%`;

  document.getElementById("hydrationVal").textContent = data.metrics.hydration.label;
  document.getElementById("hydrationBar").style.width = `${data.metrics.hydration.pct}%`;

  document.getElementById("reactivityVal").textContent = data.metrics.reactivity.label;
  document.getElementById("reactivityBar").style.width = `${data.metrics.reactivity.pct}%`;

  const priorityList = document.getElementById("priorityList");
  priorityList.innerHTML = data.priorities.map((item) => `<li>${item}</li>`).join("");

  renderWardrobe();
  renderSkincare();
  renderMasterclass();
}

function renderWardrobe() {
  const data = SKIN_DATABASE[currentSkin];
  document.getElementById("wardrobeHeading").textContent = `Recommended Makeup Wardrobe: ${data.label}`;
  document.getElementById("wardrobeSkinLabel").textContent = data.label;

  const grid = document.getElementById("productGrid");
  grid.innerHTML = data.products
    .map(
      (prod) => `
      <article class="product-card">
        <div>
          <div class="product-step">
            <span class="step-badge">${prod.step}</span>
            <span class="finish-tag">${prod.finish}</span>
          </div>
          <h3>${prod.name}</h3>
          <div class="product-archetype">${prod.archetype}</div>
          <p class="product-why">${prod.why}</p>
        </div>
        <div>
          <div class="ingredient-box">
            <strong>Hero Actives</strong>
            ${prod.ingredients}
          </div>
          <div class="usage-tip">
            <span>How to Apply:</span> ${prod.howToUse}
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

function renderSkincare() {
  const data = SKIN_DATABASE[currentSkin];
  document.getElementById("skincareHeading").textContent = `Skincare Ritual for ${data.label}`;

  const steps = data.skincare[currentTime];
  const timeline = document.getElementById("skincareTimeline");

  timeline.innerHTML = steps
    .map(
      (item) => `
      <div class="step-card">
        <div class="step-number">${item.step}</div>
        <h4>${item.title}</h4>
        <span class="step-active">${item.active}</span>
        <p>${item.desc}</p>
      </div>
    `
    )
    .join("");
}

function renderMasterclass() {
  const data = SKIN_DATABASE[currentSkin];
  document.getElementById("masterclassHeading").textContent = `Artistry Masterclass: ${data.label}`;

  const items = data.masterclass[currentGuide];
  const panel = document.getElementById("guidePanel");

  panel.innerHTML = items
    .map(
      (item) => `
      <div class="guide-item">
        <div class="guide-item-num">${item.tag}</div>
        <h4>${item.title}</h4>
        <p>${item.body}</p>
      </div>
    `
    )
    .join("");
}

/* ==========================================================================
   3. EVENT LISTENERS & INITIALIZATION
   ========================================================================== */

startCameraBtn.addEventListener("click", startCamera);
photoUploadInput.addEventListener("change", handlePhotoUpload);
stopCameraBtn.addEventListener("click", () => stopCamera(true));
captureScanBtn.addEventListener("click", analyzeSkinFromSource);

skinTabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectSkinProfile(btn.dataset.skin, false);
  });
});

routineBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    routineBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentTime = btn.dataset.time;
    renderSkincare();
  });
});

guideTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    guideTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    currentGuide = tab.dataset.guide;
    renderMasterclass();
  });
});

// Initialize default view on page load
selectSkinProfile("oily", false);
