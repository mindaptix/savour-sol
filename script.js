const menu = [
  {
    category: "Starters",
    items: [
      ["Molten Lava Cheese Bomb", "Crispy shell bursting with gooey, rich melted cheese inside.", "349"],
      ["The Chimichanga Crunch", "Golden deep-fried tortilla stuffed with spicy chicken, truffle mushroom or veg fiesta filling.", "499 / 549"],
      ["Firestarter Chicken Bites", "Juicy chicken ignited with smoky habanero chilli and bold spices.", "399"],
      ["Nacho Royale", "Towering crispy nachos crowned with salsas, cheese and fresh toppings.", "399"],
      ["Wood Fired Garlic Bread", "Artisan bread kissed by woodfire, slathered in roasted garlic butter.", "349"],
    ],
  },
  {
    category: "Sharing Plates",
    items: [
      ["Spiced Lamb Morsels", "Tender slow-spiced minced lamb skewers with smoky, aromatic char.", "349"],
      ["Garden Lasagna Bites", "Bite-sized lasagna layered with earthy mushroom, corn and fresh spinach.", "499"],
      ["Arepa Street Sliders", "Golden deep-fried tortilla stuffed with spicy chicken, truffle mushroom or veg fiesta filling.", "499 / 549"],
      ["Crispy Tostada Stack", "Crunchy tostada piled with chicken, truffle mushroom or veg fiesta toppings and zesty lime crema.", "399"],
    ],
  },
  {
    category: "Taco Bar",
    items: [
      ["Pacific Gold Taco", "Beer-battered golden fish with slaw, chipotle mayo and fresh lime.", "549"],
      ["Smoky Asado Taco (Chicken)", "Char-grilled marinated chicken with smoky asado spices and fresh pico.", "499"],
      ["Smoky Asado Taco (Mushroom)", "Flame-kissed mushrooms in asado marinade with salsa verde and cream.", "549"],
      ["Birria Dip Taco (Lamb)", "Slow-braised lamb birria taco served with rich consomme for dipping.", "549"],
      ["Baja Sunset Taco", "Plump prawns with Baja spice, tangy slaw and zesty citrus drizzle.", "549"],
    ],
  },
  {
    category: "Dippable Sliders",
    items: [
      ["Street-Smash Chicken Sliders", "Crispy smashed chicken patty with pickles and signature house sauce.", "399"],
      ["Birria Melt Sliders (Mutton)", "Slow-cooked birria mutton piled high in a butter-toasted brioche bun.", "499"],
      ["Black Truffle Mushroom Sliders", "Earthy mushroom patty drizzled with luxurious black truffle aioli.", "399"],
      ["Dark & Smoky Bean Sliders", "Hearty spiced black bean patty with avocado crema and pickled jalapeno.", "349"],
      ["Crunch & Glory Sliders", "Buttermilk-fried crispy chicken with honey sriracha and cool coleslaw.", "399"],
    ],
  },
  {
    category: "Mac & Cheese Bar",
    items: [
      ["Four Cheese Indulgence Mac", "Creamy blend of four melted Italian cheeses in silky pasta perfection.", "499"],
      ["Blaze Mac (Chicken)", "Fiery habanero-spiced chicken folded into ultra-creamy cheese mac.", "499"],
      ["Pizza Mac Mashup", "Cheesy mac meets pepperoni pizza with oregano and marinara swirl.", "499"],
      ["Birria Mac (Lamb)", "Rich braised birria lamb stirred through velvety three-cheese macaroni.", "549"],
      ["Hot Mushroom Mac", "Sauteed mushrooms and sliced jalapenos in a bold, spicy cheese sauce.", "499"],
      ["Garlic Swirl Mac", "Roasted garlic pinwheel pasta tossed in herb-infused cream cheese sauce.", "499"],
    ],
  },
  {
    category: "Large Plates",
    items: [
      ["Adobo Soul Bowl", "Tender adobo-marinated chicken on fragrant cilantro lime rice.", "549"],
      ["Golden Parmi (Chicken)", "Pan-fried chicken breast in rich tomato sauce, topped with bubbling mozzarella.", "649"],
      ["Seaside Classic", "Beer-battered fresh fish with golden hand-cut chips and tartare sauce.", "649"],
      ["Butter-Heart Kiev", "Pan-seared chicken breast with a molten garlic herb butter centre.", "699"],
      ["Moscow Nights (Chicken)", "Tender chicken strips in rich sour cream, paprika and mushroom sauce.", "599"],
      ["Forest Stroganoff", "Wild mushrooms simmered in velvety sour cream and smoked paprika sauce.", "549"],
      ["Melanzane Royale", "Slow-roasted eggplant layered with tomato ragu and golden melted cheese.", "549"],
      ["Truffle Cloud Gnocchi", "Pillowy potato gnocchi bathed in truffle cream with sauteed wild mushrooms.", "599"],
      ["Fire & Citrus Asada (Chicken)", "Citrus-marinated grilled chicken with charred asada spice and chimichurri.", "549"],
      ["Fire & Citrus Asada (Mutton)", "Bold grilled mutton in tangy asada marinade with smoky chimichurri sauce.", "799"],
    ],
  },
  {
    category: "Pizza",
    items: [
      ["La Bella Margherita", "Classic San Marzano tomato, fresh mozzarella and fragrant basil on crisp base.", "399"],
      ["Hot Bird Pizza", "Spiced chicken, roasted peppers and chilli flakes on tangy tomato base.", "499"],
      ["The Pepperoni Royale", "Double-loaded pepperoni with stretchy mozzarella on a crispy thin crust.", "499"],
      ["Garden Bloom Pizza", "Seasonal garden vegetables with herb pesto and creamy white sauce base.", "399"],
    ],
  },
  {
    category: "Quesadillas",
    items: [
      ["Garden Melt Quesadilla", "Colourful seasonal veggies and melted cheese in a toasted flour tortilla.", "499"],
      ["Black Truffle Melt", "Wild mushrooms and truffle oil sealed in a golden, cheese-filled quesadilla.", "549"],
      ["Creamy Dreamy Chicken Melt", "Shredded chicken in herby cream cheese, grilled to golden perfection.", "579"],
      ["Paprika Bliss Quesadilla", "Smoky paprika chicken with peppers and melted cheese in a crisp wrap.", "579"],
      ["Slow & Rich Lamb Lasagna", "Layers of braised lamb ragu, bechamel and pasta baked to bubbling perfection.", "749"],
    ],
  },
  {
    category: "Burrito Bowl",
    items: [
      ["Earthy Harvest Bowl", "Seasoned mushrooms with rice, beans, salsa and lime-spiked sour cream.", "599"],
      ["Spiced Paneer Bowl", "Grilled paneer on cumin rice with roasted peppers, guac and fresh pico.", "549"],
      ["Warrior Chicken Bowl", "Grilled spiced chicken with cilantro rice, black beans, corn and chipotle crema.", "599"],
      ["Birria Fiesta Bowl", "Slow-braised birria lamb with rice, consomme broth and vibrant toppings.", "649"],
    ],
  },
  {
    category: "Beverage",
    items: [
      ["Tropical Basil Kiss", "Tangy passion fruit muddled with fresh basil and sparkling citrus water.", "249"],
      ["Minty Fresh Crush", "Fresh lime, crushed mint and soda over ice, clean, cool and refreshing.", "249"],
      ["Blush Velvet Elixir", "Silky rose, berry and lychee blend with a soft floral finish.", "249"],
      ["Green Garden Bloom", "Cucumber, green apple and mint cooler with a hint of elderflower.", "249"],
      ["Elderflower Dusk", "Floral elderflower with orange and passion fruit, fading into a sunset hue.", "249"],
      ["Cool Cucumber Fizz", "Crisp cucumber, zingy lime and sparkling water, effervescently refreshing.", "249"],
      ["Coke / Diet Coke", "Classic chilled soft drink.", "150"],
      ["Red Bull", "Chilled energy drink.", "240"],
    ],
  },
  {
    category: "Coffee",
    items: [
      ["Cranberry Cold Brew", "Smooth cold brew espresso brightened with tart cranberry and citrus.", "299"],
      ["Madrid Iced Latte", "Bold espresso over condensed milk and ice, rich, sweet and chilled.", "298"],
      ["Espresso Tonic Fizz", "Double espresso poured over sparkling tonic, bittersweet and effervescent.", "249"],
      ["Citrus Espresso Bloom", "Bright espresso with fresh orange zest oil, a floral citrus awakening.", "299"],
      ["Pure Shot Espresso", "Concentrated, velvety single-origin espresso with rich crema on top.", "199"],
      ["Velvet Cappuccino", "Balanced espresso layered with silky steamed milk and airy foam.", "249"],
      ["Silk Latte", "Smooth espresso blended with steamed whole milk, gentle and creamy.", "249"],
      ["Midnight Cold Brew", "Slow-steeped 12-hour cold brew, bold, smooth and never bitter.", "249"],
      ["Drown in Bliss Affogato", "Hot espresso shot poured over velvety vanilla gelato, hot meets cold.", "298"],
      ["Cloud Nine Frappe", "Blended iced coffee with cream, thick, frothy and irresistibly smooth.", "289"],
      ["Dark & Icy Americano", "Double espresso diluted over ice, bold, clean and powerfully refreshing.", "249"],
      ["Glacier Latte", "Chilled espresso and cold milk poured over ice, effortlessly smooth.", "248"],
      ["Caramel Dream Frappe", "Blended iced coffee swirled with buttery caramel sauce and whipped cream.", "299"],
      ["Nitro Thunder Brew", "Nitrogen-infused cold brew, cascading, creamy and silky-smooth naturally.", "349"],
    ],
  },
  {
    category: "Dessert",
    items: [
      ["Wild Berry Crush Crumble", "Warm tangy mixed berries under a buttery golden oat crumble topping.", "399"],
      ["Midnight Tiramisu", "Espresso-soaked ladyfingers layered with silky mascarpone and cocoa dust.", "399"],
    ],
  },
  {
    category: "Sheesha",
    items: [
      ["Regular PMC RPG", "Sum downer, Commisioner, Sea breezer, BMW Ice crush, Rajni gandha, Chocolate/cold coffee, Crown flavour.", "Ask"],
      ["Zafran Nawab Special", "Brain freezer, Pan + kiwi + mint, Grape + mint.", "Ask"],
      ["Special Turkish", "Double melon, Love 66, Mardella, Lady killer, Shake money.", "Ask"],
    ],
  },
];

const categoryChips = document.querySelector("#categoryChips");
const menuList = document.querySelector("#menuList");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");

let activeCategory = "All";

const categoryIcons = {
  All: "✦",
  Starters: "🍽",
  "Sharing Plates": "🥘",
  "Taco Bar": "🌮",
  "Dippable Sliders": "🍔",
  "Mac & Cheese Bar": "🧀",
  "Large Plates": "🍲",
  Pizza: "🍕",
  Quesadillas: "🌯",
  "Burrito Bowl": "🥣",
  Beverage: "🥤",
  Coffee: "☕",
  Dessert: "🍰",
  Sheesha: "💨",
};

function formatPrice(price) {
  return price === "Ask" ? "Ask" : `₹${price}`;
}

function getFilteredMenu() {
  const term = searchInput.value.trim().toLowerCase();

  return menu
    .filter((section) => activeCategory === "All" || section.category === activeCategory)
    .map((section) => {
      const items = section.items.filter(([name, desc]) => {
        const haystack = `${section.category} ${name} ${desc}`.toLowerCase();
        return haystack.includes(term);
      });
      return { ...section, items };
    })
    .filter((section) => section.items.length > 0);
}

function renderCategories() {
  const categories = ["All", ...menu.map((section) => section.category)];
  categoryChips.innerHTML = categories
    .map(
      (category) => `
        <button class="chip ${category === activeCategory ? "active" : ""}" data-category="${category}">
          <span class="chip-icon" aria-hidden="true">${categoryIcons[category] || "•"}</span>
          <span>${category}</span>
        </button>
      `
    )
    .join("");
}

function renderMenu() {
  const filtered = getFilteredMenu();
  const totalItems = filtered.reduce((sum, section) => sum + section.items.length, 0);

  resultCount.textContent = `${totalItems} item${totalItems === 1 ? "" : "s"} shown`;

  if (totalItems === 0) {
    menuList.innerHTML = `<div class="empty-state">No items match your search.</div>`;
    return;
  }

  menuList.innerHTML = filtered
    .map(
      (section) => `
        <article class="category-section" data-category="${section.category}">
          <h2 class="category-title">${section.category}</h2>
          <div class="items">
            ${section.items
              .map(
                ([name, desc, price]) => `
                  <div class="menu-item">
                    <h3 class="item-name">${name}</h3>
                    <p class="item-desc">${desc}</p>
                    <div class="price">${formatPrice(price)}</div>
                  </div>
                `
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

categoryChips.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategories();
  renderMenu();
});

searchInput.addEventListener("input", renderMenu);

renderCategories();
renderMenu();
