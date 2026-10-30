// Fusion Food Family Lab - Complete Dataset (100% Vegetarian Cuisines & Indian Adaptations)

export const FUSION_DISHES = [
  {
    "id": "nikkei-ceviche",
    "name": "Nikkei Mushroom Ceviche",
    "originalName": "Nikkei Ceviche",
    "origin": "Japanese-Peruvian",
    "prepTime": "15 mins",
    "cookTime": "0 mins",
    "totalTime": "15 mins",
    "servings": "2 servings",
    "difficulty": "Beginner",
    "allergens": {
      "contains": [
        "Soy",
        "Gluten (in standard soy sauce)"
      ],
      "mayContain": [
        "Sesame"
      ],
      "warning": "Commercial soy sauce dashi contains wheat gluten and fermented soy. Cross-contact warning for kitchens handling peanuts or tree nuts.",
      "swaps": "Use coconut aminos or gluten-free tamari for 100% soy-free and wheat-free preparation."
    },
    "pronunciationIPA": "/ni.kei seˈβi.ʧe/",
    "phonetic": "nee-kay seh-VEE-cheh",
    "syllables": [
      "nee",
      "kay",
      "seh",
      "VEE",
      "cheh"
    ],
    "audioText": "Nikkei Ceviche",
    "description": "A vibrant cross between Japanese sashimi artistry and Peruvian citrus-marinated raw flavors, adapted with tender king oyster mushrooms and hearts of palm.",
    "availability": "Emerging / Niche",
    "availabilityClass": "niche",
    "metros": [
      "Mumbai",
      "Delhi-NCR",
      "Goa",
      "Bengaluru"
    ],
    "cultureStory": "Born in Peru when Japanese immigrants (*Nikkei*) combined their reverence for raw seafood and dashi with Peruvian limes, ají peppers, and sweet potatoes.",
    "originalIngredients": [
      "Raw ocean fish cubes (200g)",
      "Dashi broth (50ml)",
      "Yuzu/lime juice (30ml)",
      "Red onions (1/2 sliced)",
      "Ají amarillo (2 pods)",
      "Cancha toasted corn nuts (50g)"
    ],
    "indianSubstitutes": [
      {
        "original": "Ocean fish",
        "originalQty": "200g",
        "substitute": "King Oyster Mushrooms or Tender Hearts of Palm",
        "substituteQty": "200g",
        "why": "Provides dense, chewy, absorbent texture that mimics cured sashimi",
        "culinaryNote": "Absorbs citrus cure evenly without turning mushy"
      },
      {
        "original": "Ají Amarillo chili",
        "originalQty": "2 pods",
        "substitute": "Yellow Bhavnagri chili + pinch of turmeric & drop of honey",
        "substituteQty": "2 chilies",
        "why": "Matches the mild heat and bright fruity notes",
        "culinaryNote": "Mild 1,000 SHU heat with aromatic sweetness"
      },
      {
        "original": "Cancha (Andean corn)",
        "originalQty": "50g",
        "substitute": "Crispy Roasted Salted Chana or puffed Makhanas",
        "substituteQty": "50g",
        "why": "Delivers the signature satisfying crunchy contrast",
        "culinaryNote": "Stays crunchy even in citrus juice"
      },
      {
        "original": "Yuzu juice",
        "originalQty": "30ml",
        "substitute": "Gondhoraj lime or sweet Mosambi + fresh lemon juice",
        "substituteQty": "30ml",
        "why": "Captures the floral, highly aromatic citrus perfume",
        "culinaryNote": "Gondhoraj adds floral terpene notes identical to Japanese yuzu"
      }
    ],
    "recipeSteps": [
      {
        "step": 1,
        "title": "Citrus Cure Bath",
        "text": "Whisk lime juice, grated ginger, and a dash of soy dashi to create vegetarian Leche de Tigre.",
        "kidSafe": true
      },
      {
        "step": 2,
        "title": "Slice the Plant Protein",
        "text": "Carefully cube king oyster mushrooms and soak them in warm salted water for 3 minutes.",
        "kidSafe": false
      },
      {
        "step": 3,
        "title": "Infuse & Marinate",
        "text": "Toss sliced red onions, yellow chili paste, and mushrooms into the cold citrus bath for 6 minutes.",
        "kidSafe": true
      },
      {
        "step": 4,
        "title": "Plate with Texture",
        "text": "Arrange over boiled sweet potato puree and garnish with roasted chana and fresh cilantro.",
        "kidSafe": true
      }
    ],
    "pantryItems": [
      {
        "name": "King Oyster Mushrooms",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2a8 8 0 0 0-8 8c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4a8 8 0 0 0-8-8z\" fill=\"rgba(245,158,11,0.2)\"/><path d=\"M10 14v7a2 2 0 0 0 4 0v-7\"/><circle cx=\"9\" cy=\"8\" r=\"1\" fill=\"currentColor\"/><circle cx=\"15\" cy=\"8\" r=\"1\" fill=\"currentColor\"/></svg>"
      },
      {
        "name": "Fresh Lime Juice",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"12\" rx=\"9\" ry=\"6\" transform=\"rotate(-45 12 12)\" fill=\"rgba(245,158,11,0.2)\"/><path d=\"M4 4l2 2m14 14l2 2\"/></svg>"
      },
      {
        "name": "Grated Ginger & Garlic",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2v4m-6 6c0 5 2.7 9 6 9s6-4 6-9a6 6 0 0 0-12 0z\" fill=\"rgba(245,158,11,0.15)\"/><path d=\"M12 6c-2 3-3 6-3 9m3-9c2 3 3 6 3 9\"/></svg>"
      },
      {
        "name": "Yellow Bhavnagri Chili",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M16 3c-1 3-3 4-6 5-4 1-6 4-6 7a7 7 0 0 0 13 4c3-3 3-8 1-12z\" fill=\"rgba(224,90,71,0.2)\"/><path d=\"M16 3l3-2\"/></svg>"
      },
      {
        "name": "Roasted Salted Chana",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M8 4a4 4 0 0 0-1 7.8 4.5 4.5 0 0 0 0 8.4A4 4 0 0 0 14 19a4.5 4.5 0 0 0 0-8.4A4 4 0 0 0 8 4z\" fill=\"rgba(245,158,11,0.2)\"/></svg>"
      },
      {
        "name": "Sweet Potato Puree",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"5\" transform=\"rotate(-30 12 12)\" fill=\"rgba(224,90,71,0.2)\"/><path d=\"M5 14s2-1 4-1m6 1s2-1 4-1\"/></svg>"
      },
      {
        "name": "Fish Sauce",
        "isCorrect": false,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 12c4-6 10-6 16 0-6 6-12 6-16 0z\" fill=\"rgba(42,157,143,0.2)\"/><circle cx=\"7\" cy=\"12\" r=\"1\" fill=\"currentColor\"/><path d=\"M20 12l3-3v6l-3-3z\"/></svg>",
        "distractorReason": "Not vegetarian! We use soy-mushroom dashi instead."
      },
      {
        "name": "Raw Chicken Slices",
        "isCorrect": false,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"4\" y=\"5\" width=\"16\" height=\"14\" rx=\"3\" fill=\"rgba(245,158,11,0.2)\"/><line x1=\"8\" y1=\"5\" x2=\"8\" y2=\"19\"/><line x1=\"16\" y1=\"5\" x2=\"16\" y2=\"19\"/></svg>",
        "distractorReason": "Wrong cuisine and unsafe to eat raw!"
      },
      {
        "name": "Tomato Ketchup",
        "isCorrect": false,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"13\" r=\"8\" fill=\"rgba(224,90,71,0.2)\"/><path d=\"M12 5V2m-3 3c1.5-1 4.5-1 6 0m-5 1l2-2 2 2\"/></svg>",
        "distractorReason": "Too sweet and unnatural for Nikkei Leche de Tigre!"
      }
    ],
    "scienceNote": "Citrus acid (citric acid, pH ~2.2) breaks down the mushroom cell walls slightly and causes proteins to firm up, creating a tender yet bouncy chew without heating!"
  },
  {
    "id": "tofu-tiradito",
    "name": "King Oyster & Tofu Tiradito",
    "originalName": "Tiradito",
    "origin": "Japanese-Peruvian",
    "prepTime": "12 mins",
    "cookTime": "3 mins",
    "totalTime": "15 mins",
    "servings": "2 servings",
    "difficulty": "Beginner",
    "allergens": {
      "contains": [
        "Soy",
        "Sesame"
      ],
      "mayContain": [
        "Gluten"
      ],
      "warning": "Tofu is a concentrated soy product. Toasted sesame oil is a known allergen. Cross-contact warning for kitchens handling peanuts or nuts.",
      "swaps": "Swap tofu with poached king oyster coins for 100% soy-free. Use extra virgin olive oil or cold-pressed mustard oil in place of sesame oil."
    },
    "pronunciationIPA": "/ti.ɾaˈði.to/",
    "phonetic": "tee-rah-DEE-toh",
    "syllables": [
      "tee",
      "rah",
      "DEE",
      "toh"
    ],
    "audioText": "Tiradito",
    "description": "Delicate carpaccio-thin slices draped in a zesty, creamy ají amarillo sauce. Unlike ceviche, tiradito is sliced into strips and sauced immediately before serving.",
    "availability": "Emerging / Niche",
    "availabilityClass": "niche",
    "metros": [
      "Mumbai",
      "Delhi-NCR",
      "Bengaluru"
    ],
    "cultureStory": "Pioneered in Lima fine dining, Tiradito highlights Japanese sashimi knife skills combined with Peruvian tiger milk and spicy emulsion.",
    "originalIngredients": [
      "Sashimi fish carpaccio (180g)",
      "Leche de tigre (60ml)",
      "Ají amarillo paste (2 tbsp)",
      "Soy sauce (1 tsp)",
      "Sesame oil (1 tsp)",
      "Microgreens (10g)"
    ],
    "indianSubstitutes": [
      {
        "original": "Sashimi fish",
        "originalQty": "180g",
        "substitute": "Firm Silken Tofu or poached King Oyster coins",
        "substituteQty": "180g",
        "why": "Gives silky, melt-in-mouth carpaccio ribbons",
        "culinaryNote": "Poaching for 90 seconds creates glistening tender sheets"
      },
      {
        "original": "Ají amarillo paste",
        "originalQty": "2 tbsp",
        "substitute": "Blanched yellow bell pepper + 1 fiery green chili puree",
        "substituteQty": "2 tbsp",
        "why": "Recreates the golden-orange velvety emulsion",
        "culinaryNote": "Provides velvety natural pectin emulsion"
      },
      {
        "original": "Microgreens",
        "originalQty": "10g",
        "substitute": "Fresh tender methi leaves or baby coriander sprigs",
        "substituteQty": "10g",
        "why": "Local aromatic peppery freshness",
        "culinaryNote": "Mild bitterness balances zesty sauce"
      }
    ],
    "recipeSteps": [
      {
        "step": 1,
        "title": "Precision Slicing",
        "text": "Slice pressed firm tofu or poached king oyster mushroom stems into paper-thin 2mm ribbons.",
        "kidSafe": false
      },
      {
        "step": 2,
        "title": "Whisk the Golden Tiger Milk",
        "text": "Blend yellow pepper paste, lime juice, ginger juice, sesame oil, and sea salt until emulsified.",
        "kidSafe": true
      },
      {
        "step": 3,
        "title": "The Draped Presentation",
        "text": "Layer the ribbons in an overlapping fan on a chilled ceramic platter.",
        "kidSafe": true
      },
      {
        "step": 4,
        "title": "Sauce and Garnish",
        "text": "Spoon the sauce generously right over the slices; dot with toasted sesame seeds and baby coriander.",
        "kidSafe": true
      }
    ],
    "pantryItems": [
      {
        "name": "Silken Firm Tofu",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M3 13l5-7h11l2 7v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5z\" fill=\"rgba(245,158,11,0.2)\"/><path d=\"M8 6v7\"/></svg>"
      },
      {
        "name": "Yellow Bell Pepper Puree",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2v3m-5 3c-2 2-2 9 0 12 1.5 2 4.5 2 5 2s3.5 0 5-2c2-3 2-10 0-12-1.5-1.5-4-1.5-5 0-1-1.5-3.5-1.5-5 0z\" fill=\"rgba(16,185,129,0.2)\"/></svg>"
      },
      {
        "name": "Toasted Sesame Oil",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M3 11h18a8 8 0 0 1-16 0z\" fill=\"rgba(42,157,143,0.2)\"/><path d=\"M8 7c0-2 2-3 2-3m4 3c0-2 2-3 2-3\"/></svg>"
      },
      {
        "name": "Fresh Lime & Ginger",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"12\" rx=\"9\" ry=\"6\" transform=\"rotate(-45 12 12)\" fill=\"rgba(245,158,11,0.2)\"/><path d=\"M4 4l2 2m14 14l2 2\"/></svg>"
      },
      {
        "name": "Baby Coriander Garnish",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M2 22s5-1 9-5 5-9 5-9-1 5-5 9-9 5-9 5z\" fill=\"rgba(16,185,129,0.2)\"/><path d=\"M11 13l7-7\"/></svg>"
      },
      {
        "name": "Mayonnaise",
        "isCorrect": false,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"4\" y=\"6\" width=\"16\" height=\"12\" rx=\"2\" fill=\"rgba(255,255,255,0.2)\"/><line x1=\"4\" y1=\"12\" x2=\"20\" y2=\"12\"/><line x1=\"12\" y1=\"6\" x2=\"12\" y2=\"18\"/></svg>",
        "distractorReason": "Traditional Leche de Tigre uses lime emulsion, not heavy egg mayo!"
      },
      {
        "name": "Tamarind Chutney",
        "isCorrect": false,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M7 8h10v10a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V8z\" fill=\"rgba(245,158,11,0.2)\"/><path d=\"M5 8h14M8 5h8M10 2h4\"/></svg>",
        "distractorReason": "Belongs to chaat, too heavy for delicate tiradito!"
      }
    ],
    "scienceNote": "Tiradito sauces rely on mechanical emulsion: vigorous whisking drops of sesame oil into acidic lime juice creates microscopic droplets that stay suspended!"
  },
  {
    "id": "paneer-tacos",
    "name": "Smoky Paneer Tikka Tacos",
    "originalName": "Tandoori Tikka Tacos",
    "origin": "Tex-Mex & Indian",
    "prepTime": "15 mins",
    "cookTime": "10 mins",
    "totalTime": "25 mins",
    "servings": "3-4 servings",
    "difficulty": "Beginner",
    "allergens": {
      "contains": [
        "Dairy / Milk (Paneer, Curd, Butter)",
        "Gluten (if using wheat tortillas)"
      ],
      "mayContain": [
        "Mustard"
      ],
      "warning": "Contains cow/buffalo milk dairy. Verify packaged taco shells for 100% gluten-free corn if celiac/gluten-intolerant.",
      "swaps": "Use smoked firm tofu or soya chaap for dairy-free. Use 100% corn tortillas or Makki di Roti for gluten-free."
    },
    "pronunciationIPA": "/pəˈniːr ˈtɪk.ɑː ˈtɑː.koʊz/",
    "phonetic": "puh-neer tik-ah tah-kohz",
    "syllables": [
      "puh",
      "neer",
      "tik",
      "kah",
      "tah",
      "kohz"
    ],
    "audioText": "Paneer Tikka Tacos",
    "description": "Charred, tandoori-spiced paneer cubes folded into crisp or soft tortillas, drizzled with velvety makhani sauce and pickled sirka onions.",
    "availability": "Moderate to High",
    "availabilityClass": "high",
    "metros": [
      "Mumbai",
      "Delhi-NCR",
      "Bengaluru",
      "Hyderabad",
      "Pune"
    ],
    "cultureStory": "Born in modern Indian-American gastropubs and food trucks, merging the beloved Delhi tandoor with vibrant Mexican street tacos.",
    "originalIngredients": [
      "Tacos (6 shells)",
      "Charred malai paneer cubes (250g)",
      "Makhani gravy (100ml)",
      "Pickled red onions (50g)",
      "Cilantro (10g)",
      "Sour cream (100ml)"
    ],
    "indianSubstitutes": [
      {
        "original": "Chicken tikka",
        "originalQty": "250g",
        "substitute": "Charred Malai Paneer or Smoked Soya Chaap",
        "substituteQty": "250g",
        "why": "Absorbs the tandoori marinade beautifully and provides juicy bites",
        "culinaryNote": "Tawa char creates authentic tandoor smokiness"
      },
      {
        "original": "Mexican Sour Cream (Crema)",
        "originalQty": "100ml",
        "substitute": "Whisked Hung Curd (Chakka) with lemon & pinch of salt",
        "substituteQty": "100ml",
        "why": "Delivers the exact creamy tanginess with lower calories",
        "culinaryNote": "High protein, smooth velvety pipeable consistency"
      },
      {
        "original": "Corn Tortilla",
        "originalQty": "6 shells",
        "substitute": "Makki di Roti (fine grind) or mini roomali roti",
        "substituteQty": "6 small rotis",
        "why": "Heritage Indian corn bread that acts identically to artisan masa tortillas",
        "culinaryNote": "Warm roasted corn aroma pairs naturally with spices"
      }
    ],
    "recipeSteps": [
      {
        "step": 1,
        "title": "Tandoori Marinade",
        "text": "Toss paneer cubes in mustard oil, Kashmiri degi mirch, hung curd, and roasted besan.",
        "kidSafe": true
      },
      {
        "step": 2,
        "title": "Char & Sizzle",
        "text": "Sear the paneer on a cast-iron tawa until smoky grill marks form.",
        "kidSafe": false
      },
      {
        "step": 3,
        "title": "Simmer Makhani Glaze",
        "text": "Cook tomato-butter reduction with crushed kasuri methi and green cardamom powder.",
        "kidSafe": false
      },
      {
        "step": 4,
        "title": "Taco Assembly",
        "text": "Warm the tortillas, pile on smoked paneer, drizzle makhani gravy, sirka onion, and hung curd crema.",
        "kidSafe": true
      }
    ],
    "pantryItems": [
      {
        "name": "Malai Paneer Cubes",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"3 17 21 17 21 11 3 14 3 17\" fill=\"rgba(245,158,11,0.2)\"/><path d=\"M21 11l-9-7L3 14\"/><circle cx=\"10\" cy=\"14\" r=\"1\" fill=\"currentColor\"/><circle cx=\"15\" cy=\"13\" r=\"1.5\" fill=\"currentColor\"/></svg>"
      },
      {
        "name": "Corn or Flour Tortillas",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"12\" rx=\"9\" ry=\"7\" fill=\"rgba(245,158,11,0.2)\"/><circle cx=\"9\" cy=\"11\" r=\"1\" fill=\"currentColor\"/><circle cx=\"14\" cy=\"10\" r=\"1\" fill=\"currentColor\"/><circle cx=\"12\" cy=\"14\" r=\"1\" fill=\"currentColor\"/></svg>"
      },
      {
        "name": "Makhani Tomato Glaze",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 11h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6z\" fill=\"rgba(224,90,71,0.2)\"/><path d=\"M2 11h20M7 8a4 4 0 0 1 4-4 4 4 0 0 1 4 4\"/></svg>"
      },
      {
        "name": "Sirka Pickled Onions",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2v3m-5 4c-2 2-2 7 0 10 1.5 2 4.5 3 5 3s3.5-1 5-3c2-3 2-8 0-10-1.5-2-4-2-5-2s-3.5 0-5 2z\" fill=\"rgba(224,90,71,0.15)\"/><path d=\"M12 6c-2 3-2 7 0 12m0-12c2 3 2 7 0 12\"/></svg>"
      },
      {
        "name": "Hung Curd Crema",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M7 4h10l-2 16H9L7 4z\" fill=\"rgba(255,255,255,0.15)\"/><path d=\"M6 8h12\"/></svg>"
      },
      {
        "name": "Kasuri Methi",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M2 22s5-1 9-5 5-9 5-9-1 5-5 9-9 5-9 5z\" fill=\"rgba(16,185,129,0.2)\"/><path d=\"M11 13l7-7\"/></svg>"
      },
      {
        "name": "Blue Cheese",
        "isCorrect": false,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"3 17 21 17 21 11 3 14 3 17\" fill=\"rgba(245,158,11,0.2)\"/><path d=\"M21 11l-9-7L3 14\"/><circle cx=\"10\" cy=\"14\" r=\"1\" fill=\"currentColor\"/><circle cx=\"15\" cy=\"13\" r=\"1.5\" fill=\"currentColor\"/></svg>",
        "distractorReason": "Too pungent, overpowers the delicate tandoori spices!"
      },
      {
        "name": "Pineapple Jam",
        "isCorrect": false,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"14\" rx=\"6\" ry=\"8\" fill=\"rgba(245,158,11,0.2)\"/><path d=\"M12 6c-2-3 0-4 0-4s2 1 0 4m-3 0c-3-2-2-4-2-4s3 1 2 4m6 0c3-2 2-4 2-4s-3 1-2 4\"/></svg>",
        "distractorReason": "Far too sugary for a savory Mexican-Indian taco!"
      }
    ],
    "scienceNote": "The Maillard Reaction occurs between amino acids in paneer and natural milk sugars under high tawa heat (above 140°C), generating over 100 new aroma compounds!"
  },
  {
    "id": "paneer-quesadilla",
    "name": "Paneer Tikka Quesadilla",
    "originalName": "Paneer Tikka Quesadilla",
    "origin": "Tex-Mex & Indian",
    "prepTime": "10 mins",
    "cookTime": "10 mins",
    "totalTime": "20 mins",
    "servings": "2 servings",
    "difficulty": "Beginner",
    "allergens": {
      "contains": [
        "Dairy / Milk (Mozzarella, Paneer)",
        "Gluten (Flour tortillas)"
      ],
      "mayContain": [
        "Mustard"
      ],
      "warning": "Contains cow milk mozzarella and refined wheat flour. Check processed cheese labels for sodium caseinate.",
      "swaps": "Use vegan meltable shreds for dairy-free. Use 100% whole-wheat chapati or corn tortillas for gluten-free."
    },
    "pronunciationIPA": "/pəˈniːr ˈtɪk.ɑː ˌkeɪ.səˈdiː.jə/",
    "phonetic": "puh-neer tik-ah kay-suh-dee-yuh",
    "syllables": [
      "puh",
      "neer",
      "tik",
      "ah",
      "kay",
      "suh",
      "DEE",
      "yuh"
    ],
    "audioText": "Paneer Tikka Quesadilla",
    "description": "A crisp, golden toasted flour tortilla loaded with molten mozzarella, spiced marinated paneer, crunchy bell peppers, and zingy mint chutney.",
    "availability": "Moderate",
    "availabilityClass": "moderate",
    "metros": [
      "Metros & Tier-2 Urban Cafes",
      "Mumbai",
      "Pune",
      "Jaipur",
      "Ahmedabad"
    ],
    "cultureStory": "A cafe classic across India that marries the cheesy comfort of Mexican quesadillas with the street-style punch of Punjabi paneer tikka.",
    "originalIngredients": [
      "Flour tortillas (2 large)",
      "Paneer tikka (150g)",
      "Monterey Jack/Mozzarella (150g)",
      "Onions & Capsicum (1/2 cup)",
      "Mint-coriander chutney (3 tbsp)"
    ],
    "indianSubstitutes": [
      {
        "original": "Monterey Jack cheese",
        "originalQty": "150g",
        "substitute": "Amul Mozzarella blend or processed cheese + mild gouda",
        "substituteQty": "150g",
        "why": "Yields the ultimate gooey cheese pull beloved by kids",
        "culinaryNote": "Melts at 55°C creating stretchy elastic bonds"
      },
      {
        "original": "Flour tortilla",
        "originalQty": "2 large",
        "substitute": "Soft whole wheat phulka or thin paratha",
        "substituteQty": "2 pieces",
        "why": "Crisps up delightfully with a brush of butter or ghee",
        "culinaryNote": "Wholesome fiber with authentic flaky crispness"
      }
    ],
    "recipeSteps": [
      {
        "step": 1,
        "title": "Chutney Base Layer",
        "text": "Spread a thin layer of spicy-sweet mint-coriander chutney over one half of a soft tortilla.",
        "kidSafe": true
      },
      {
        "step": 2,
        "title": "Stuff with Goodness",
        "text": "Heap spiced paneer crumbles, diced bell peppers, red onions, and shredded mozzarella.",
        "kidSafe": true
      },
      {
        "step": 3,
        "title": "Fold and Toast",
        "text": "Fold over into a half-moon; grill in a buttered pan on medium heat until golden and crispy.",
        "kidSafe": false
      },
      {
        "step": 4,
        "title": "Slice & Dip",
        "text": "Cut into triangles with a pizza wheel and serve with salsa and roasted cumin curd.",
        "kidSafe": true
      }
    ],
    "pantryItems": [
      {
        "name": "Flour Tortilla or Paratha",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"12\" rx=\"9\" ry=\"7\" fill=\"rgba(245,158,11,0.2)\"/><circle cx=\"9\" cy=\"11\" r=\"1\" fill=\"currentColor\"/><circle cx=\"14\" cy=\"10\" r=\"1\" fill=\"currentColor\"/><circle cx=\"12\" cy=\"14\" r=\"1\" fill=\"currentColor\"/></svg>"
      },
      {
        "name": "Spiced Paneer Crumbles",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"3 17 21 17 21 11 3 14 3 17\" fill=\"rgba(245,158,11,0.2)\"/><path d=\"M21 11l-9-7L3 14\"/><circle cx=\"10\" cy=\"14\" r=\"1\" fill=\"currentColor\"/><circle cx=\"15\" cy=\"13\" r=\"1.5\" fill=\"currentColor\"/></svg>"
      },
      {
        "name": "Mozzarella Cheese",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"3 17 21 17 21 11 3 14 3 17\" fill=\"rgba(245,158,11,0.2)\"/><path d=\"M21 11l-9-7L3 14\"/><circle cx=\"10\" cy=\"14\" r=\"1\" fill=\"currentColor\"/><circle cx=\"15\" cy=\"13\" r=\"1.5\" fill=\"currentColor\"/></svg>"
      },
      {
        "name": "Bell Peppers & Onions",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2v3m-5 3c-2 2-2 9 0 12 1.5 2 4.5 2 5 2s3.5 0 5-2c2-3 2-10 0-12-1.5-1.5-4-1.5-5 0-1-1.5-3.5-1.5-5 0z\" fill=\"rgba(16,185,129,0.2)\"/></svg>"
      },
      {
        "name": "Mint-Coriander Chutney",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M11 20A7 7 0 0 1 4 13C4 6 12 3 20 3c0 8-3 17-9 17z\" fill=\"rgba(16,185,129,0.2)\"/><path d=\"M4 13c5 0 9-3 11-7\"/></svg>"
      },
      {
        "name": "Chocolate Spread",
        "isCorrect": false,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" fill=\"rgba(120,53,15,0.2)\"/><line x1=\"4\" y1=\"12\" x2=\"20\" y2=\"12\"/><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"20\"/></svg>",
        "distractorReason": "Yum on toast, but disastrous in a savory spiced tikka quesadilla!"
      },
      {
        "name": "Boiled Egg Slices",
        "isCorrect": false,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"4\" y=\"6\" width=\"16\" height=\"12\" rx=\"2\" fill=\"rgba(255,255,255,0.2)\"/><line x1=\"4\" y1=\"12\" x2=\"20\" y2=\"12\"/><line x1=\"12\" y1=\"6\" x2=\"12\" y2=\"18\"/></svg>",
        "distractorReason": "Not in a vegetarian paneer quesadilla!"
      }
    ],
    "scienceNote": "Cheese melting is a phase change: milk fat liquefies at ~30°C, and the casein protein network loosens at ~55°C, creating stretchable elastic strands."
  },
  {
    "id": "makhani-pasta",
    "name": "Creamy Makhani Penne Pasta",
    "originalName": "Makhani Pasta",
    "origin": "Ital-Indian",
    "prepTime": "10 mins",
    "cookTime": "15 mins",
    "totalTime": "25 mins",
    "servings": "3 servings",
    "difficulty": "Intermediate",
    "allergens": {
      "contains": [
        "Dairy / Milk (Butter, Cream, Paneer)",
        "Gluten (Durum Wheat Pasta)",
        "Tree Nuts (Cashews)"
      ],
      "mayContain": [
        "Soy"
      ],
      "warning": "Contains tree nuts (cashew nut paste), dairy cream, and durum wheat semolina. Strict caution for individuals with nut allergies.",
      "swaps": "Substitute cashews with peeled melon seeds (magaz) or sunflower seeds for 100% nut-free. Use gluten-free chickpea or corn pasta."
    },
    "pronunciationIPA": "/mʌk.n.iː ˈpɑː.stə/",
    "phonetic": "muk-nee pah-stuh",
    "syllables": [
      "muk",
      "nee",
      "PAH",
      "stuh"
    ],
    "audioText": "Makhani Pasta",
    "description": "Italian tubular penne cooked al dente, smothered in a rich, buttery San Marzano or Desi tomato sauce infused with cream, kasuri methi, and paneer cubes.",
    "availability": "High",
    "availabilityClass": "high",
    "metros": [
      "Pan-India",
      "Every modern cafe and family diner"
    ],
    "cultureStory": "First created by creative home cooks in Delhi and Mumbai who loved pasta but craved the soul-satisfying depth of North Indian makhani gravy.",
    "originalIngredients": [
      "Penne or fusilli (250g)",
      "Tomato-butter gravy (200ml)",
      "Heavy cream (50ml)",
      "Kasuri methi (1 tbsp)",
      "Paneer cubes (100g)",
      "Parmesan (40g)"
    ],
    "indianSubstitutes": [
      {
        "original": "San Marzano tomatoes",
        "originalQty": "400g",
        "substitute": "Ripe Desi Plum Tomatoes boiled with cashews and Kashmiri chilies",
        "substituteQty": "400g",
        "why": "Creates a deep natural ruby-red sauce without synthetic colors",
        "culinaryNote": "Natural sweetness balances high tomato acidity"
      },
      {
        "original": "Parmesan cheese",
        "originalQty": "40g",
        "substitute": "Amul aged cheese or finely grated paneer with nutritional yeast",
        "substituteQty": "40g",
        "why": "Provides savory umami depth",
        "culinaryNote": "Nutritional yeast delivers vegetarian glutamates"
      }
    ],
    "recipeSteps": [
      {
        "step": 1,
        "title": "Boil Pasta Al Dente",
        "text": "Boil penne in well-salted water for 9 minutes until firm to the bite; reserve 1/2 cup pasta water.",
        "kidSafe": false
      },
      {
        "step": 2,
        "title": "Simmer Tomato-Cashew Gravy",
        "text": "Puree cooked tomatoes with soaked cashews; simmer with butter, garlic, and cardamom.",
        "kidSafe": false
      },
      {
        "step": 3,
        "title": "Emulsify with Cream & Fenugreek",
        "text": "Swirl in heavy cream and rub dried kasuri methi between palms to release aromatic oils.",
        "kidSafe": true
      },
      {
        "step": 4,
        "title": "Toss & Marry",
        "text": "Toss the drained penne and golden paneer cubes into the sauce until every ridge is coated.",
        "kidSafe": true
      }
    ],
    "pantryItems": [
      {
        "name": "Penne Pasta",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M3 12h18M5 12c0 5 3 8 7 8s7-3 7-8M8 6v6m4-8v8m4-6v6\" fill=\"rgba(245,158,11,0.2)\"/></svg>"
      },
      {
        "name": "Tomato-Cashew Gravy",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"6\" y=\"5\" width=\"12\" height=\"15\" rx=\"2\" fill=\"rgba(224,90,71,0.2)\"/><ellipse cx=\"12\" cy=\"5\" rx=\"6\" ry=\"2\"/><ellipse cx=\"12\" cy=\"20\" rx=\"6\" ry=\"2\"/></svg>"
      },
      {
        "name": "White Butter & Cream",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M3 13l5-7h11l2 7v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5z\" fill=\"rgba(245,158,11,0.2)\"/><path d=\"M8 6v7\"/></svg>"
      },
      {
        "name": "Kasuri Methi",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M2 22s5-1 9-5 5-9 5-9-1 5-5 9-9 5-9 5z\" fill=\"rgba(16,185,129,0.2)\"/><path d=\"M11 13l7-7\"/></svg>"
      },
      {
        "name": "Paneer Cubes",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"3 17 21 17 21 11 3 14 3 17\" fill=\"rgba(245,158,11,0.2)\"/><path d=\"M21 11l-9-7L3 14\"/><circle cx=\"10\" cy=\"14\" r=\"1\" fill=\"currentColor\"/><circle cx=\"15\" cy=\"13\" r=\"1.5\" fill=\"currentColor\"/></svg>"
      },
      {
        "name": "Wasabi Paste",
        "isCorrect": false,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"13\" r=\"8\" fill=\"rgba(16,185,129,0.2)\"/><path d=\"M12 5c-3 3-3 8 0 16m-4-12c2 2 3 6 2 10m6-10c-2 2-3 6-2 10\"/></svg>",
        "distractorReason": "Fiery Japanese horseradish clashes with warm creamy makhani!"
      },
      {
        "name": "Anchovy Paste",
        "isCorrect": false,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 12c4-6 10-6 16 0-6 6-12 6-16 0z\" fill=\"rgba(42,157,143,0.2)\"/><circle cx=\"7\" cy=\"12\" r=\"1\" fill=\"currentColor\"/><path d=\"M20 12l3-3v6l-3-3z\"/></svg>",
        "distractorReason": "Definitely not vegetarian!"
      }
    ],
    "scienceNote": "Cashews contain natural starch and fatty acids that act as a plant-based emulsifier, preventing the tomato acids from curdling the dairy cream!"
  },
  {
    "id": "naan-pizza",
    "name": "Charred Naan Pizza (Naanza)",
    "originalName": "Naan Pizza / Naanza",
    "origin": "Ital-Indian",
    "prepTime": "10 mins",
    "cookTime": "12 mins",
    "totalTime": "22 mins",
    "servings": "2-3 servings",
    "difficulty": "Beginner",
    "allergens": {
      "contains": [
        "Dairy / Milk (Mozzarella, Butter, Naan yogurt)",
        "Gluten (Maida Naan)"
      ],
      "mayContain": [
        "Sesame (Naan seed topping)"
      ],
      "warning": "Traditional naan is leavened refined wheat flour with yogurt and milk. High gluten and dairy profile.",
      "swaps": "Use gluten-free oat-flour flatbread. Use plant-based meltable shreds for dairy-free cheese pull."
    },
    "pronunciationIPA": "/nɑːn ˈpiːt.sə/ - /nɑːn.zɑː/",
    "phonetic": "nahn peet-suh / nahn-zah",
    "syllables": [
      "nahn",
      "ZAH"
    ],
    "audioText": "Naanza",
    "description": "A blistered tandoori garlic naan turns into an artisan pizza base, crowned with spicy tikka sauce, diced veggies, paneer, and bubbly mozzarella.",
    "availability": "High",
    "availabilityClass": "high",
    "metros": [
      "Nationwide",
      "Pizzerias, gastro-cafes, food stalls"
    ],
    "cultureStory": "A culinary match made in heaven: both tandoors and wood-fired pizza ovens cook at 450°C, producing pillowy bread with blistered air pockets.",
    "originalIngredients": [
      "Tandoori naan base (1 large)",
      "Mozzarella cheese (120g)",
      "Spiced tomato sauce (60ml)",
      "Onion & capsicum (1/2 cup)",
      "Paneer or corn (60g)",
      "Oregano (1 tsp)"
    ],
    "indianSubstitutes": [
      {
        "original": "Pizza dough",
        "originalQty": "1 ball (200g)",
        "substitute": "Freshly baked Garlic-Butter Tandoori Naan or Stuffed Kulcha",
        "substituteQty": "1 large naan",
        "why": "Saves hours of dough proofing while providing unbeatable smoky blistered flavor",
        "culinaryNote": "Tandoori blistered crust withstands sauce without sogging"
      },
      {
        "original": "Pizza herb seasoning",
        "originalQty": "1 tsp",
        "substitute": "Dry roasted oregano + crushed kasuri methi & chili flakes",
        "substituteQty": "1 tsp",
        "why": "Gives the distinctive Indo-Italian aroma",
        "culinaryNote": "Kasuri methi essential oils volatilize under pizza heat"
      }
    ],
    "recipeSteps": [
      {
        "step": 1,
        "title": "Crisp the Naan Base",
        "text": "Pre-bake the naan in a tawa or hot oven for 2 minutes so the crust stays crunchy under toppings.",
        "kidSafe": false
      },
      {
        "step": 2,
        "title": "Spread Spiced Marinara",
        "text": "Slather a blend of Italian marinara and Punjabi tikka masala sauce edge to edge.",
        "kidSafe": true
      },
      {
        "step": 3,
        "title": "Decorate with Veggie Confetti",
        "text": "Scatter capsicum strips, red onions, sweet corn kernels, and paneer cubes.",
        "kidSafe": true
      },
      {
        "step": 4,
        "title": "Bake to Molten Perfection",
        "text": "Bake at 220°C for 7 minutes until the mozzarella bubbles with golden spots.",
        "kidSafe": false
      }
    ],
    "pantryItems": [
      {
        "name": "Garlic Butter Naan",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><ellipse cx=\"12\" cy=\"12\" rx=\"9\" ry=\"7\" fill=\"rgba(245,158,11,0.2)\"/><circle cx=\"9\" cy=\"11\" r=\"1\" fill=\"currentColor\"/><circle cx=\"14\" cy=\"10\" r=\"1\" fill=\"currentColor\"/><circle cx=\"12\" cy=\"14\" r=\"1\" fill=\"currentColor\"/></svg>"
      },
      {
        "name": "Spicy Tikka Marinara",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"13\" r=\"8\" fill=\"rgba(224,90,71,0.2)\"/><path d=\"M12 5V2m-3 3c1.5-1 4.5-1 6 0m-5 1l2-2 2 2\"/></svg>"
      },
      {
        "name": "Mozzarella Cheese",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"3 17 21 17 21 11 3 14 3 17\" fill=\"rgba(245,158,11,0.2)\"/><path d=\"M21 11l-9-7L3 14\"/><circle cx=\"10\" cy=\"14\" r=\"1\" fill=\"currentColor\"/><circle cx=\"15\" cy=\"13\" r=\"1.5\" fill=\"currentColor\"/></svg>"
      },
      {
        "name": "Crisp Bell Peppers & Corn",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M8 18c-3-3-4-8-2-12 4 1 7 4 9 8 1 3 0 6-2 7l-5-3z\" fill=\"rgba(245,158,11,0.2)\"/><path d=\"M5 21l4-4\"/></svg>"
      },
      {
        "name": "Kasuri Methi & Oregano",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M2 22s5-1 9-5 5-9 5-9-1 5-5 9-9 5-9 5z\" fill=\"rgba(16,185,129,0.2)\"/><path d=\"M11 13l7-7\"/></svg>"
      },
      {
        "name": "Marshmallows",
        "isCorrect": false,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"5\" fill=\"rgba(245,158,11,0.2)\"/><path d=\"M7 12L2 9v6l5-3zm10 0l5-3v6l-5-3z\"/></svg>",
        "distractorReason": "Sweet s’mores do not belong on a spicy savory Naanza!"
      },
      {
        "name": "Gelatin Powder",
        "isCorrect": false,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 18h16l-2-9H6l-2 9z\" fill=\"rgba(245,158,11,0.2)\"/><ellipse cx=\"12\" cy=\"9\" rx=\"6\" ry=\"2\"/><circle cx=\"12\" cy=\"6\" r=\"1.5\" fill=\"var(--primary, #E05A47)\"/></svg>",
        "distractorReason": "Not food for pizza and definitely not vegetarian!"
      }
    ],
    "scienceNote": "High heat triggers rapid carbon dioxide expansion inside the naan pockets, lifting the crust while the mozzarella forms a protective vapor barrier that keeps the dough crispy!"
  },
  {
    "id": "gulab-jamun-cheesecake",
    "name": "Eggless Gulab Jamun Cheesecake",
    "originalName": "Gulab Jamun Cheesecake",
    "origin": "Indo-French / Euro-Asian",
    "prepTime": "20 mins",
    "cookTime": "35 mins",
    "totalTime": "55 mins",
    "servings": "6-8 servings",
    "difficulty": "Intermediate",
    "allergens": {
      "contains": [
        "Dairy / Milk (Cream cheese, Mawa, Condensed milk)",
        "Gluten (Biscuits, Mawa binder)"
      ],
      "mayContain": [
        "Tree Nuts (Pistachio, Almond garnish)"
      ],
      "warning": "Mawa khoya and cream cheese provide heavy dairy density. Slivered nuts on garnish pose an allergen risk.",
      "swaps": "Omit pistachio nut garnish. Use gluten-free digestive biscuits and plant-based condensed milk."
    },
    "pronunciationIPA": "/ɡuːˈlɑːb ˈdʒɑː.mʊn ˈtʃiːz.keɪk/",
    "phonetic": "goo-lahb jah-moon cheez-kayk",
    "syllables": [
      "goo",
      "lahb",
      "jah",
      "moon",
      "cheez",
      "kayk"
    ],
    "audioText": "Gulab Jamun Cheesecake",
    "description": "Silky cardamom and saffron-infused cream cheese custard layered over a crumbly biscuit crust, concealing soft baby gulab jamuns inside each slice.",
    "availability": "Moderate to High",
    "availabilityClass": "high",
    "metros": [
      "Nationwide",
      "Patisseries, wedding banquets, boutique cafes"
    ],
    "cultureStory": "Invented by progressive Indian pastry chefs wanting to reinvent festive mithai for modern global dessert lovers.",
    "originalIngredients": [
      "Cream cheese (250g)",
      "Graham cracker crust (150g)",
      "Gulab jamun balls (12 baby jamuns)",
      "Cardamom (1/2 tsp)",
      "Saffron (pinch)",
      "Pistachios (20g)"
    ],
    "indianSubstitutes": [
      {
        "original": "Graham crackers",
        "originalQty": "150g",
        "substitute": "Nutri-Choice Digestive Biscuits or Marie Gold + melted Amul butter",
        "substituteQty": "150g",
        "why": "Provides the iconic nutty, toasted crunch base",
        "culinaryNote": "Whole wheat crumb absorbs butter without getting soggy"
      },
      {
        "original": "Sour cream / eggs in custard",
        "originalQty": "2 eggs + 100g sour cream",
        "substitute": "Hung Greek yogurt + condensed milk + cornstarch",
        "substituteQty": "150g hung curd + 100g condensed milk",
        "why": "Creates a rich, set, eggless cheesecake custard with clean dairy tang",
        "culinaryNote": "Cornstarch gelatinizes at 75°C to set custard without egg albumin"
      },
      {
        "original": "Vanilla extract",
        "originalQty": "1 tsp",
        "substitute": "Crushed green cardamom seeds, saffron strands, and rose water",
        "substituteQty": "1/2 tsp cardamom + pinch saffron",
        "why": "Authentic royal Shahi Indian aromatics",
        "culinaryNote": "Cardamonin and safranal provide deep warm festive perfumes"
      }
    ],
    "recipeSteps": [
      {
        "step": 1,
        "title": "Crush the Crust",
        "text": "Crush digestive biscuits with a rolling pin and stir in melted butter; press firmly into a springform pan.",
        "kidSafe": true
      },
      {
        "step": 2,
        "title": "Whip Eggless Custard",
        "text": "Whisk cream cheese, hung curd, condensed milk, saffron-infused milk, and cardamom powder.",
        "kidSafe": true
      },
      {
        "step": 3,
        "title": "The Jamun Treasure",
        "text": "Drain syrup from baby gulab jamuns and nestle them evenly across the biscuit base.",
        "kidSafe": true
      },
      {
        "step": 4,
        "title": "Pour & Chill",
        "text": "Pour the golden custard over the jamuns; chill overnight or bake gently in a water bath.",
        "kidSafe": false
      }
    ],
    "pantryItems": [
      {
        "name": "Digestive Biscuits & Butter",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"rgba(245,158,11,0.2)\"/><circle cx=\"9\" cy=\"9\" r=\"1\" fill=\"currentColor\"/><circle cx=\"15\" cy=\"10\" r=\"1\" fill=\"currentColor\"/><circle cx=\"11\" cy=\"15\" r=\"1\" fill=\"currentColor\"/></svg>"
      },
      {
        "name": "Cream Cheese & Hung Curd",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M3 11h18a8 8 0 0 1-16 0z\" fill=\"rgba(42,157,143,0.2)\"/><path d=\"M8 7c0-2 2-3 2-3m4 3c0-2 2-3 2-3\"/></svg>"
      },
      {
        "name": "Baby Gulab Jamuns",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"rgba(120,53,15,0.25)\"/><circle cx=\"9\" cy=\"10\" r=\"1\" fill=\"currentColor\"/><circle cx=\"14\" cy=\"11\" r=\"1\" fill=\"currentColor\"/><circle cx=\"11\" cy=\"14\" r=\"1\" fill=\"currentColor\"/></svg>"
      },
      {
        "name": "Saffron & Green Cardamom",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"3\" fill=\"rgba(245,158,11,0.3)\"/><path d=\"M12 2a4 4 0 0 1 0 7 4 4 0 0 1 0-7zm0 13a4 4 0 0 1 0 7 4 4 0 0 1 0-7zm-7-3a4 4 0 0 1 7 0 4 4 0 0 1-7 0zm13 0a4 4 0 0 1 7 0 4 4 0 0 1-7 0z\"/></svg>"
      },
      {
        "name": "Slivered Pistachios",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M8 4a4 4 0 0 0-1 7.8 4.5 4.5 0 0 0 0 8.4A4 4 0 0 0 14 19a4.5 4.5 0 0 0 0-8.4A4 4 0 0 0 8 4z\" fill=\"rgba(245,158,11,0.2)\"/></svg>"
      },
      {
        "name": "Wasabi Peas",
        "isCorrect": false,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"8\" fill=\"rgba(16,185,129,0.3)\"/><circle cx=\"10\" cy=\"10\" r=\"2\" fill=\"#10B981\"/></svg>",
        "distractorReason": "Spicy wasabi ruins a delicate saffron dessert!"
      },
      {
        "name": "Beef Gelatin",
        "isCorrect": false,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M6 5c4-3 12-2 14 3s-2 11-7 12-10-2-10-8 1-5 3-7z\" fill=\"rgba(224,90,71,0.2)\"/><circle cx=\"12\" cy=\"11\" r=\"2\" fill=\"currentColor\"/></svg>",
        "distractorReason": "Non-vegetarian! We use natural cornstarch or agar-agar."
      }
    ],
    "scienceNote": "The sugar syrup in gulab jamun has high osmotic pressure; soaking or draining properly prevents the jamun from leaking excess water into the cheesecake cream, keeping the custard silky!"
  },
  {
    "id": "curry-ramen",
    "name": "Spiced Veggie Curry Ramen",
    "originalName": "Curry Ramen",
    "origin": "Indo-Japanese",
    "prepTime": "15 mins",
    "cookTime": "15 mins",
    "totalTime": "30 mins",
    "servings": "2 servings",
    "difficulty": "Intermediate",
    "allergens": {
      "contains": [
        "Gluten (Wheat noodles)",
        "Soy (Dashi glaze, Tofu)"
      ],
      "mayContain": [
        "Sesame",
        "Mustard (Curry paste blend)"
      ],
      "warning": "Wheat alkaline ramen noodles contain gluten. Soy sauce and tofu contain soy. Check packaged curry pastes for shrimp paste (our recipe is 100% veg).",
      "swaps": "Use 100% buckwheat soba or brown rice noodles for gluten-free. Use coconut aminos for soy-free."
    },
    "pronunciationIPA": "/ˈkʌr.i ˈrɑː.mən/",
    "phonetic": "kuh-ree RAH-men",
    "syllables": [
      "kuh",
      "ree",
      "RAH",
      "men"
    ],
    "audioText": "Curry Ramen",
    "description": "Springy alkaline wheat noodles immersed in a golden coconut-curry dashi broth, topped with charred bok choy, crispy spiced tofu, and sweet corn.",
    "availability": "Emerging / Niche",
    "availabilityClass": "niche",
    "metros": [
      "Delhi-NCR",
      "Mumbai",
      "Bengaluru"
    ],
    "cultureStory": "A collision of Hokkaido Japanese winter ramen with coastal South Indian curry spices and coconut milk.",
    "originalIngredients": [
      "Ramen noodles (180g)",
      "Curry paste (2 tbsp)",
      "Kombu dashi (500ml)",
      "Pork/Chicken broth (500ml)",
      "Chashu (100g)"
    ],
    "indianSubstitutes": [
      {
        "original": "Meat broth",
        "originalQty": "500ml",
        "substitute": "Kombu + roasted onion, garlic & shiitake vegetable broth",
        "substituteQty": "500ml",
        "why": "Produces rich savory umami without animal products",
        "culinaryNote": "Shiitake mushrooms provide natural guanylate umami synergy"
      },
      {
        "original": "Chashu meat",
        "originalQty": "100g",
        "substitute": "Soy-glazed crispy paneer or charred smoked tofu slices",
        "substituteQty": "100g",
        "why": "Tender interior with deeply caramelized exterior",
        "culinaryNote": "Smoked tofu absorbs curry broth like a sponge"
      },
      {
        "original": "Japanese curry roux",
        "originalQty": "2 cubes (40g)",
        "substitute": "Turmeric, coriander, cumin, ginger paste, and coconut milk reduction",
        "substituteQty": "3 tbsp blend",
        "why": "Warmer, fragrant, and familiar to Indian palates",
        "culinaryNote": "Curcumin from turmeric provides vibrant golden glow"
      }
    ],
    "recipeSteps": [
      {
        "step": 1,
        "title": "Simmer Umami Broth",
        "text": "Boil vegetable stock with charred onions, ginger, turmeric, cumin, and coconut milk for 20 minutes.",
        "kidSafe": false
      },
      {
        "step": 2,
        "title": "Cook Alkaline Noodles",
        "text": "Boil ramen noodles for 2.5 minutes until springy; drain and rinse with cold water.",
        "kidSafe": false
      },
      {
        "step": 3,
        "title": "Sear Tofu Topping",
        "text": "Pan-sear pressed tofu with a dash of soy sauce and tandoori chili crisp until crisp.",
        "kidSafe": false
      },
      {
        "step": 4,
        "title": "Assemble the Ramen Bowl",
        "text": "Fold noodles in deep bowl, pour steaming curry broth, and arrange tofu, corn, and nori.",
        "kidSafe": true
      }
    ],
    "pantryItems": [
      {
        "name": "Ramen Wheat Noodles",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 11h16a8 8 0 0 1-16 0z\" fill=\"rgba(245,158,11,0.2)\"/><path d=\"M7 6l13-3M7 8l13-3M6 11v-2\"/></svg>"
      },
      {
        "name": "Coconut-Curry Umami Broth",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"rgba(120,53,15,0.2)\"/><circle cx=\"9\" cy=\"10\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"14\" cy=\"9\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"12\" cy=\"14\" r=\"1.5\" fill=\"currentColor\"/></svg>"
      },
      {
        "name": "Crispy Seared Tofu / Paneer",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M3 13l5-7h11l2 7v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5z\" fill=\"rgba(245,158,11,0.2)\"/><path d=\"M8 6v7\"/></svg>"
      },
      {
        "name": "Sweet Corn & Bok Choy",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"13\" r=\"8\" fill=\"rgba(16,185,129,0.2)\"/><path d=\"M12 5c-3 3-3 8 0 16m-4-12c2 2 3 6 2 10m6-10c-2 2-3 6-2 10\"/></svg>"
      },
      {
        "name": "Tandoori Chili Crisp",
        "isCorrect": true,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M16 3c-1 3-3 4-6 5-4 1-6 4-6 7a7 7 0 0 0 13 4c3-3 3-8 1-12z\" fill=\"rgba(224,90,71,0.2)\"/><path d=\"M16 3l3-2\"/></svg>"
      },
      {
        "name": "Fish Stock Powder",
        "isCorrect": false,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 12c4-6 10-6 16 0-6 6-12 6-16 0z\" fill=\"rgba(42,157,143,0.2)\"/><circle cx=\"7\" cy=\"12\" r=\"1\" fill=\"currentColor\"/><path d=\"M20 12l3-3v6l-3-3z\"/></svg>",
        "distractorReason": "Contains non-veg fish extracts! We use shiitake kombu stock."
      },
      {
        "name": "Maple Syrup",
        "isCorrect": false,
        "emoji": "<svg viewBox=\"0 0 24 24\" class=\"fusion-icon ing-icon\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 2l2 4 4-1-2 4 4 2-3 3 1 4-5-2-4 6-1-6-5 2 1-4-3-3 4-2-2-4 4 1 2-4z\" fill=\"rgba(224,90,71,0.2)\"/><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"23\"/></svg>",
        "distractorReason": "Too sugary for a savory Japanese-Indian curry ramen!"
      }
    ],
    "scienceNote": "Ramen noodles contain kansui (alkaline salts: sodium carbonate) which raises pH, giving noodles their yellow hue, firm chew, and resistance to getting soggy in hot broth!"
  }
];

export const CULINARY_SCIENCE_TOPICS = [
  {
    id: 'acid-curing',
    title: 'Citrus Acid Denaturation',
    shortName: 'Acid Curing',
    icon: 'Acid',
    dish: 'Nikkei Mushroom Ceviche',
    color: '#E05A47',
    summary: 'How citrus juice "cooks" ingredients without fire!',
    explanation: 'Lime juice has a very low pH (~2.2). When mixed with proteins (or mushrooms), the strong hydrogen ions unravel and restructure delicate protein bonds (denaturation). In mushrooms, it softens rigid chitin cell walls while keeping the texture juicy and firm, absorbing maximum umami flavor!',
    funFact: 'In Peru, the citrus-spice marinade is nicknamed "Leche de Tigre" (Tiger’s Milk) because it was believed to give you the fierce energy of a tiger!',
    question: {
      text: 'Why does citrus juice change the texture of foods in ceviche without using an oven or fire?',
      options: [
        'High heat from friction when stirring',
        'Acid unravels protein structures (denaturation)',
        'Sugar caramelizes at room temperature',
        'Salt absorbs all the liquid instantly'
      ],
      correctIndex: 1,
      explanation: 'Citric acid lowers the pH, causing proteins to denature and firm up just like heating does!'
    }
  },
  {
    id: 'maillard-reaction',
    title: 'The Maillard Reaction',
    shortName: 'Maillard Browning',
    icon: 'Heat',
    dish: 'Charred Naan Pizza & Tikka Tacos',
    color: '#D97706',
    summary: 'The chemical secret behind golden tandoori crusts!',
    explanation: 'When foods reach temperatures above 140°C (284°F), reducing sugars react with amino acids in proteins. This reaction creates hundreds of new flavor compounds called melanoidins, giving roasted naan, charred paneer, and toasted crusts their irresistible smoky, nutty aroma.',
    funFact: 'Louis-Camille Maillard discovered this reaction in 1912 while trying to synthesize biological proteins, never realizing it would explain why toast smells heavenly!',
    question: {
      text: 'What minimum temperature is typically required for the flavorful Maillard reaction to take place?',
      options: ['Around 50°C', 'Around 100°C', 'Around 140°C (284°F)', 'Over 500°C'],
      correctIndex: 2,
      explanation: 'The Maillard reaction begins rapidly around 140°C–165°C when water has mostly evaporated from the food’s surface!'
    }
  },
  {
    id: 'emulsification',
    title: 'Molecular Emulsification',
    shortName: 'Cream Emulsions',
    icon: 'Emulsion',
    dish: 'Creamy Makhani Pasta & Tiradito',
    color: '#059669',
    summary: 'How oil, butter, and acidic tomatoes stay smoothly united!',
    explanation: 'Oil and water naturally repel each other. To make a velvety makhani sauce, we need emulsifiers: molecules with one water-loving end (hydrophilic) and one oil-loving end (lipophilic). Cashew nut paste contains natural plant lecithins that wrap around butter fats, preventing the sauce from splitting or curdling.',
    funFact: 'Traditional Indian halwais and modern chefs both grind cashews and cream to create micro-droplets that bounce light, giving makhani sauce its glowing orange sheen!',
    question: {
      text: 'What ingredient in authentic Makhani gravy acts as a natural emulsifier to stop cream from splitting?',
      options: ['Ground cashew nut paste', 'White vinegar', 'Pure water', 'Raw whole cumin seeds'],
      correctIndex: 0,
      explanation: 'Cashews provide natural proteins, fats, and lecithins that form a bridge between water-based tomato puree and fatty dairy butter!'
    }
  },
  {
    id: 'osmosis-mithai',
    title: 'Osmosis & Sugar Gradients',
    shortName: 'Osmosis in Desserts',
    icon: 'Caramel',
    dish: 'Gulab Jamun Cheesecake',
    color: '#8B5CF6',
    summary: 'Why gulab jamun syrup must be balanced inside cheesecake custard!',
    explanation: 'Osmosis is the movement of water from an area of low solute concentration to high solute concentration across a semi-permeable boundary. If gulab jamuns retain too much thin syrup, water leaks into the cheesecake cream, making it soggy. Draining them creates an equilibrium where moisture stays locked inside.',
    funFact: 'Gulab Jamuns are deep fried at low temperatures (150°C) so steam escapes gradually, leaving tiny sponge pores ready to soak up cardamom sugar syrup!',
    question: {
      text: 'What would happen if you put soaking-wet gulab jamuns directly into cheesecake custard without draining?',
      options: [
        'Water moves out by osmosis, making the custard runny',
        'The cheesecake crust turns into rock candy',
        'The cream cheese curdles into butter immediately',
        'Nothing happens at all'
      ],
      correctIndex: 0,
      explanation: 'Excess free water dilutes the delicate eggless custard matrix, preventing a firm, clean cheesecake slice!'
    }
  },
  {
    id: 'alkaline-noodles',
    title: 'Alkaline Starch Chemistry',
    shortName: 'Alkaline Noodles',
    icon: 'Starch',
    dish: 'Spiced Veggie Curry Ramen',
    color: '#2563EB',
    summary: 'Why ramen noodles stay chewy in steaming hot curry broth!',
    explanation: 'Regular pasta gets mushy if kept in hot soup. Ramen noodles are made with kansui (alkaline mineral water containing potassium and sodium carbonates). The alkaline pH (around 9.0) changes the gluten protein network, making it tighter, springier, and resistant to water penetration, while turning the dough vibrant yellow.',
    funFact: 'Legend says Mongolian well water was naturally alkaline from mineral springs, and bakers discovered dough kneaded with this water made extraordinary noodles!',
    question: {
      text: 'What makes ramen noodles stay springy and chewy inside hot broth unlike normal pasta?',
      options: [
        'They are coated in candle wax',
        'Kansui (alkaline salts) strengthens the gluten structure',
        'They are deep-fried three times',
        'They are made without any flour'
      ],
      correctIndex: 1,
      explanation: 'Alkaline kansui elevates the dough pH, which strengthens gluten bonds and imparts the distinct bouncy ramen chew!'
    }
  },
  {
    id: 'spice-volatiles',
    title: 'Fat-Soluble Spice Volatiles',
    shortName: 'Spice Chemistry',
    icon: 'Spice',
    dish: 'Tandoori Tikka Tacos & Quesadillas',
    color: '#DC2626',
    summary: 'Why tempering spices in hot mustard oil or ghee unlocks explosive flavor!',
    explanation: 'Essential flavor compounds like capsaicin in chilies, curcumin in turmeric, and eugenol in cloves are hydrophobic (fat-soluble). When bloomed in hot oil (tadka) or yogurt marinades, the warm lipids dissolve these molecules and coat your tongue evenly, prolonging the taste experience.',
    funFact: 'Drinking water won’t cool down chili heat because capsaicin is fat-soluble! Drinking whole milk, lassi, or hung curd instantly binds to capsaicin and washes it away.',
    question: {
      text: 'Why are Indian whole spices first bloomed in hot oil or ghee before adding other ingredients?',
      options: [
        'To burn off the calories',
        'Flavor compounds are fat-soluble and dissolve into the oil',
        'To make the pan colder',
        'To turn the spices into sugar'
      ],
      correctIndex: 1,
      explanation: 'Key aromatic molecules in spices dissolve in warm fats, spreading their fragrance and flavor throughout the entire dish!'
    }
  }
];

export const TRIVIA_QUESTIONS = [
  {
    id: 'q1',
    dishId: 'nikkei-ceviche',
    dishName: 'Nikkei Cuisine',
    question: 'Nikkei cuisine is a world-famous culinary fusion between which two coastal cultures?',
    options: [
      'Japan & Peru',
      'Italy & Mexico',
      'India & Thailand',
      'Spain & Vietnam'
    ],
    correctIndex: 0,
    parentHint: 'Think about Tokyo sushi masters meeting Lima fishermen in South America!',
    explanation: 'Nikkei was pioneered when Japanese immigrants moved to Peru in the late 19th century, blending sashimi techniques with Peruvian citrus and chilies.',
    badge: 'Nikkei Explorer'
  },
  {
    id: 'q2',
    dishId: 'nikkei-ceviche',
    dishName: 'Nikkei Mushroom Ceviche',
    question: 'When replicating Nikkei Ceviche with vegetarian ingredients in an Indian home kitchen, what makes the best plant-based substitute for raw fish?',
    options: [
      'Mashed boiled potatoes',
      'King Oyster Mushrooms or Tender Hearts of Palm',
      'Raw chopped cabbage',
      'Crushed cornflakes'
    ],
    correctIndex: 1,
    parentHint: 'Look for something with a dense, bouncy texture that absorbs tangy lime marinade without disintegrating!',
    explanation: 'King oyster mushroom stems and hearts of palm possess a tender, fibrous chew that absorbs citrus leche de tigre like fine sashimi.',
    badge: 'Shroom Alchemist'
  },
  {
    id: 'q3',
    dishId: 'tofu-tiradito',
    dishName: 'Tiradito vs Ceviche',
    question: 'How is a Peruvian Tiradito prepared differently from a classic Ceviche?',
    options: [
      'Tiradito is deep-fried in boiling ghee for 10 minutes',
      'Tiradito is sliced into delicate ribbons and sauced immediately before serving without raw onions',
      'Tiradito is always served frozen like ice cream',
      'Tiradito contains no citrus juice whatsoever'
    ],
    correctIndex: 1,
    parentHint: 'Think of Japanese sashimi knife cuts: thin carpaccio strips drizzled right at the dining table!',
    explanation: 'Unlike ceviche (where ingredients soak in citrus for several minutes with onions), tiradito is thinly sliced like sashimi and lightly dressed right before eating.',
    badge: 'Sashimi Maestro'
  },
  {
    id: 'q4',
    dishId: 'paneer-tacos',
    dishName: 'Paneer Tikka Tacos',
    question: 'Which Indian flatbread made from coarse corn flour shares the exact heritage and texture of Mexican corn tortillas?',
    options: [
      'Bhatura',
      'Makki di Roti',
      'Rumali Roti',
      'Lachha Paratha'
    ],
    correctIndex: 1,
    parentHint: 'A winter favorite in Punjab, famously paired with Sarson da Saag!',
    explanation: 'Makki di Roti is kneaded from stone-ground cornmeal (maize), virtually identical to Mexican masa harina used for corn tortillas!',
    badge: 'Maize Master'
  },
  {
    id: 'q5',
    dishId: 'makhani-pasta',
    dishName: 'Makhani Penne Pasta',
    question: 'What aromatic dried herb is hand-rubbed over Makhani pasta to give it that unmistakable North Indian restaurant scent?',
    options: [
      'Dried Oregano',
      'Kasuri Methi (Fenugreek leaves)',
      'Dried Rosemary',
      'Mint flakes'
    ],
    correctIndex: 1,
    parentHint: 'It has a slightly bitter, sweet maple-like fragrance and is crushed between your palms!',
    explanation: 'Kasuri Methi releases volatile aromatic oils rich in sotolon when crushed between warm palms, defining authentic makhani dishes.',
    badge: 'Herb Connoisseur'
  },
  {
    id: 'q6',
    dishId: 'naan-pizza',
    dishName: 'Naanza (Naan Pizza)',
    question: 'Why are authentic clay tandoors and Italian wood-fired pizza ovens considered culinary cousins?',
    options: [
      'They were both invented in Antarctica',
      'Both reach scorching heat (400°C–480°C) that flash-bakes dough with blistered crusts in minutes',
      'Both require electric micro-heaters',
      'Both can only cook boiled vegetables'
    ],
    correctIndex: 1,
    parentHint: 'Both rely on extreme radiant heat and refractory clay or stone floors!',
    explanation: 'Both traditional tandoors and wood-fired pizza ovens operate above 400°C, producing intense heat that toasts sugars and blisters dough in under 3 minutes.',
    badge: 'Tandoor Wizard'
  },
  {
    id: 'q7',
    dishId: 'gulab-jamun-cheesecake',
    dishName: 'Gulab Jamun Cheesecake',
    question: 'What classic Indian biscuit is most frequently crushed with butter to create an eggless cheesecake crust across bakeries in India?',
    options: [
      'Bourbon Cream',
      'Digestive Biscuits or Marie Gold',
      'Chili Krackjack',
      'Sweet Coconut Cookies'
    ],
    correctIndex: 1,
    parentHint: 'A tea-time pantry staple with a toasted wheat flavor and low sugar content!',
    explanation: 'Digestive and Marie biscuits provide a mild, whole-wheat crumb that balances the sweetness of condensed milk and gulab jamun.',
    badge: 'Pastry Virtuoso'
  },
  {
    id: 'q8',
    dishId: 'curry-ramen',
    dishName: 'Spiced Veggie Curry Ramen',
    question: 'What special alkaline mineral water ingredient gives Japanese ramen noodles their yellow color and springy, bouncy chew?',
    options: [
      'Sparkling soda water',
      'Kansui (alkaline salt solution)',
      'Sugarcane juice',
      'Rosewater'
    ],
    correctIndex: 1,
    parentHint: 'It sounds like a Japanese word and contains potassium/sodium carbonate!',
    explanation: 'Kansui is an alkaline mineral solution that alters wheat gluten, giving ramen its signature yellow tint, elasticity, and chewiness.',
    badge: 'Noodle Artisan'
  },
  {
    id: 'q9',
    dishId: 'nikkei-ceviche',
    dishName: 'Indian Availability Matrix',
    question: 'According to culinary food guides, which category describes the availability of Japanese-Peruvian Nikkei cuisine in India?',
    options: [
      'Found at every roadside chai stall in small villages',
      'Emerging / Niche (luxury dining & fine lounges in Mumbai, Delhi-NCR, Goa, Bengaluru)',
      'Available in every school cafeteria',
      'Completely banned and impossible to find'
    ],
    correctIndex: 1,
    parentHint: 'It is a recent trend seen mostly in upscale metropolitan restaurants and boutique hotels!',
    explanation: 'Nikkei is an emerging luxury trend in India, featured in high-end venues like Koishii at St. Regis Mumbai and metro culinary hubs.',
    badge: 'Gastro Cartographer'
  },
  {
    id: 'q10',
    dishId: 'paneer-tacos',
    dishName: 'Food Science & Heat',
    question: 'Why does paneer retain its shape when grilled on a tawa for tacos, while mozzarella cheese melts into a puddle?',
    options: [
      'Paneer is made from acid-coagulated protein that cannot melt, while mozzarella has an elastic rennet-set casein network',
      'Paneer is frozen with liquid nitrogen',
      'Mozzarella is made entirely of water',
      'Paneer contains no milk proteins'
    ],
    correctIndex: 0,
    parentHint: 'Remember how paneer is made at home with lemon juice vs fermented aged cheeses!',
    explanation: 'Acid-set cheeses like paneer and queso blanco have tightly clustered proteins that don’t melt when heated, making them ideal for searing and grilling!',
    badge: 'Protein Chemist'
  }
];

export const INDIA_METROS_DATA = [
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    tagline: 'India’s Capital of Experiential Fusion Dining',
    x: 194,
    y: 412,
    famousHubs: 'Bandra, Lower Parel, Colaba, BKC',
    topMarket: 'Crawford Market (exotic herbs, yuzu, imported sauces)',
    dishesAvailable: [
      { name: 'Nikkei Mushroom Ceviche & Tiradito', level: 'Emerging / Niche (Koishii at St. Regis, Dashanzi)' },
      { name: 'Butter Paneer & Tandoori Tacos', level: 'High (Modern gastropubs across Bandra & Lower Parel)' },
      { name: 'Makhani Penne & Naanza', level: 'High (Universal cafe favorite across city)' },
      { name: 'Gulab Jamun Cheesecake', level: 'High (Boutique patisseries, Theobroma, weddings)' },
      { name: 'Spiced Veggie Curry Ramen', level: 'Emerging / Niche (Koko, Izumi, Mizu)' }
    ],
    questTip: 'Head to Mumbai’s Crawford Market to hunt for genuine Bhavnagri peppers, Peruvian yellow paste alternatives, and fresh dashi kombu!'
  },
  {
    id: 'delhi-ncr',
    name: 'Delhi-NCR',
    state: 'National Capital Region',
    tagline: 'The Birthplace of Butter Gravy & Tandoor Innovation',
    x: 236,
    y: 195,
    famousHubs: 'Connaught Place, CyberHub Gurgaon, GK-2, Khan Market',
    topMarket: 'INA Market (Delhi’s premier international food bazaar)',
    dishesAvailable: [
      { name: 'Butter Paneer Tacos & Quesadillas', level: 'High (Every modern brewery and food truck)' },
      { name: 'Makhani Pasta', level: 'High (Origin hub of makhani tomato-cashew sauces)' },
      { name: 'Naanza (Naan Pizza)', level: 'High (Tandoor ovens meeting woodfire pizza menus)' },
      { name: 'Gulab Jamun Cheesecake', level: 'High (Modern mithai boutiques and festive banquets)' },
      { name: 'Nikkei Ceviche & Ramen', level: 'Emerging / Niche (Fine dining hubs in Chanakyapuri & Aerocity)' }
    ],
    questTip: 'INA Market in South Delhi stocks fresh imported mushrooms, lotus roots, dried nori, and authentic masa harina!'
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    tagline: 'Microbrewery Innovations & Global Comfort Fusions',
    x: 262,
    y: 552,
    famousHubs: 'Indiranagar, Koramangala, Lavelle Road, Whitefield',
    topMarket: 'Russell Market (Shivajinagar) & gourmet organic marts',
    dishesAvailable: [
      { name: 'Curry Ramen & Tofu Tiradito', level: 'Moderate (Specialty Asian restaurants and brewpubs)' },
      { name: 'Tandoori Paneer Tacos & Sliders', level: 'High (Craft breweries in Indiranagar & Koramangala)' },
      { name: 'Gulab Jamun Cheesecake & Tres Leches', level: 'High (Artisanal bakeries & dessert lounges)' },
      { name: 'Makhani Fusilli & Naanza', level: 'High (Urban bistros and casual tech dining)' }
    ],
    questTip: 'Bengaluru’s Russell market and gourmet stores offer fresh local microgreens, organic tofu, and king oyster mushrooms from Ooty!'
  },
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    tagline: 'Coastal Haven of Bohemian & Global Flavors',
    x: 216,
    y: 492,
    famousHubs: 'Assagao, Anjuna, Panaji, Morjim',
    topMarket: 'Mapusa Friday Market (sun-dried chilies, local vinegars)',
    dishesAvailable: [
      { name: 'Nikkei Ceviche & Plant Tiradito', level: 'Moderate (Boutique beach clubs & garden bistros in Assagao)' },
      { name: 'Indo-Mexican Quesadillas', level: 'High (Shacks and bohemian cafes)' },
      { name: 'Gulab Jamun Cheesecake', level: 'Moderate to High (Artisanal bakeries)' }
    ],
    questTip: 'Goa’s Portuguese heritage gives local markets incredible artisanal breads (Poi), toddy vinegar, and smoked spices!'
  },
  {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    tagline: 'Youthful Gastronomy & Student-Led Fusion Cafes',
    x: 224,
    y: 428,
    famousHubs: 'Koregaon Park, FC Road, Baner, Viman Nagar',
    topMarket: 'Mandai & Camp Wholesale Bazaar',
    dishesAvailable: [
      { name: 'Paneer Tikka Quesadilla & Tacos', level: 'High (Rooftop lounges and campus bistros)' },
      { name: 'Makhani Pasta & Naanza', level: 'High (Bustling cafes in Koregaon Park & Baner)' },
      { name: 'Gulab Jamun Cheesecake', level: 'Moderate (Specialty bakeries and dessert bars)' }
    ],
    questTip: 'Visit Pune’s Koregaon Park lanes to sample trendy Indo-Italian Naanza creations!'
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    tagline: 'Royal Nizami Spices Meet Global Street Food',
    x: 292,
    y: 450,
    famousHubs: 'Jubilee Hills, Banjara Hills, Gachibowli, Hitec City',
    topMarket: 'Begum Bazaar & Moazzam Jahi Market',
    dishesAvailable: [
      { name: 'Spicy Paneer Tikka Tacos', level: 'High (Gastropubs in Jubilee Hills)' },
      { name: 'Naanza & Makhani Pasta', level: 'High (Casual dining in Hitec City & Banjara Hills)' },
      { name: 'Gulab Jamun & Shahi Tukda Cheesecake', level: 'High (Festive confectioneries and luxury dining)' }
    ],
    questTip: 'Hyderabad’s Begum Bazaar is a treasure trove for whole green cardamom, saffron, and stone flowers (kalpasi)!'
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    tagline: 'Colonial Confectionery & Sweet-Savory Umami Alchemy',
    x: 416,
    y: 338,
    famousHubs: 'Park Street, Salt Lake, Ballygunge, New Market',
    topMarket: 'New Market (Sir Stuart Hogg Market) & Gariahat',
    dishesAvailable: [
      { name: 'Gulab Jamun & Sandesh Cheesecake', level: 'High (Artisanal patisseries on Park Street)' },
      { name: 'Makhani Penne & Rolls', level: 'High (Heritage cafes & fusion roll kiosks)' },
      { name: 'Spiced Veggie Curry Ramen', level: 'Emerging / Niche (Southern Avenue Asian bistros)' },
      { name: 'Nikkei Tofu Tiradito', level: 'Emerging (Modern fusion dining in Salt Lake)' }
    ],
    questTip: 'New Market in Central Kolkata is world-famous for Bandel cheese, nolen gur (date palm jaggery), and freshly ground mustard kashundi!'
  }
];

export const CHEF_RANKS = [
  { level: 1, title: 'Kitchen Apprentice', minXP: 0, maxXP: 250, badge: 'Kitchen Apprentice', icon: 'CookingPot', perks: 'Mastering kitchen knife safety and basic spices.' },
  { level: 2, title: 'Spice Explorer', minXP: 251, maxXP: 600, badge: 'Spice Explorer', icon: 'Flame', perks: 'Unlocked Indian bazaar spice substitution secrets.' },
  { level: 3, title: 'Street Food Alchemist', minXP: 601, maxXP: 1100, badge: 'Street Food Alchemist', icon: 'Sparkles', perks: 'Mastered fusion tacos, quesadillas, and quick naanzas.' },
  { level: 4, title: 'Fusion Sous Chef', minXP: 1101, maxXP: 1700, badge: 'Fusion Sous Chef', icon: 'Award', perks: 'Conquered food science emulsions and acid curing.' },
  { level: 5, title: 'Executive Fusion Master', minXP: 1701, maxXP: 2500, badge: 'Executive Fusion Master', icon: 'Crown', perks: 'Fluent in Nikkei ceviches, tiraditos, and ramen broths.' },
  { level: 6, title: 'Michelin Star Sorcerer', minXP: 2501, maxXP: 99999, badge: 'Michelin Star Sorcerer', icon: 'Zap', perks: 'Ultimate family fusion legend! Zero culinary secrets left.' }
];
