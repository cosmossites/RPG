const STORAGE_KEY = "queda-dos-basiliscos-ficha-v2";
const SILVER_LIMIT = 9999;

const itemCatalog = [
  { id: "facao", name: "Facão de Carcaça", type: "Arma", rarity: "Comum", icon: "🔪", art: "linear-gradient(135deg, #705044, #2a1c16)", description: "Lâmina pesada para mato, carne e combate curto." },
  { id: "adaga_osso", name: "Adaga de Osso", type: "Arma", rarity: "Comum", icon: "🗡️", art: "linear-gradient(135deg, #8b7f6c, #3c3329)", description: "Pequena, discreta e cruelmente eficiente." },
  { id: "machado", name: "Machado de Trincheira", type: "Arma", rarity: "Incomum", icon: "🪓", art: "linear-gradient(135deg, #7f533d, #261710)", description: "Parte ferramenta, parte sentença final." },
  { id: "pistola", name: "Pistola Rachada", type: "Arma", rarity: "Incomum", icon: "🔫", art: "linear-gradient(135deg, #6c625e, #1f1b19)", description: "Velha, mas ainda fala alto." },
  { id: "espingarda", name: "Espingarda de Cano Curto", type: "Arma", rarity: "Raro", icon: "💥", art: "linear-gradient(135deg, #8d5f42, #20140f)", description: "Brutal a curta distância." },
  { id: "municao", name: "Munição Improvisada", type: "Munição", rarity: "Comum", icon: "📦", art: "linear-gradient(135deg, #9b7a49, #342615)", description: "Cartuchos reaproveitados, nem sempre confiáveis." },
  { id: "filtro", name: "Filtro de Água", type: "Sobrevivência", rarity: "Incomum", icon: "💧", art: "linear-gradient(135deg, #497b93, #15232a)", description: "Purifica o suficiente para mais um dia." },
  { id: "cantil", name: "Cantil Militar", type: "Sobrevivência", rarity: "Comum", icon: "🥤", art: "linear-gradient(135deg, #6c7e55, #1f2619)", description: "Amassado, resistente e sempre útil." },
  { id: "racoes", name: "Rações Secas", type: "Comida", rarity: "Comum", icon: "🥫", art: "linear-gradient(135deg, #8e6b3f, #2f2113)", description: "Não é boa, mas mantém você em pé." },
  { id: "kit_medico", name: "Kit Médico de Campo", type: "Cura", rarity: "Raro", icon: "🩹", art: "linear-gradient(135deg, #a65f56, #301412)", description: "Bandagens, antisséptico e esperança." },
  { id: "seringa", name: "Seringa de Estimulante", type: "Cura", rarity: "Raro", icon: "💉", art: "linear-gradient(135deg, #88a6aa, #233135)", description: "Faz o corpo continuar, mesmo quando devia parar." },
  { id: "gasmask", name: "Máscara de Gás", type: "Proteção", rarity: "Raro", icon: "😷", art: "linear-gradient(135deg, #76856d, #1f241c)", description: "Protege contra poeira tóxica e vapores ruins." },
  { id: "colete", name: "Colete Remendado", type: "Proteção", rarity: "Incomum", icon: "🦺", art: "linear-gradient(135deg, #c17847, #392117)", description: "Nada elegante, mas segura impacto." },
  { id: "mochila", name: "Mochila de Sucata", type: "Utilitário", rarity: "Comum", icon: "🎒", art: "linear-gradient(135deg, #6d4f39, #22170f)", description: "Cheia de bolsos e costuras tortas." },
  { id: "lanterna", name: "Lanterna de Dínamo", type: "Utilitário", rarity: "Comum", icon: "🔦", art: "linear-gradient(135deg, #8c8352, #282412)", description: "Gire, reze e ela volta a acender." },
  { id: "corda", name: "Corda de Resgate", type: "Utilitário", rarity: "Comum", icon: "🪢", art: "linear-gradient(135deg, #8c6d47, #352513)", description: "Subir, descer, puxar e amarrar." },
  { id: "binoculo", name: "Binóculo Estilhaçado", type: "Exploração", rarity: "Incomum", icon: "🔭", art: "linear-gradient(135deg, #5f655f, #171b17)", description: "Uma lente trinca, a outra ainda serve." },
  { id: "mapa", name: "Mapa Plastificado", type: "Exploração", rarity: "Incomum", icon: "🗺️", art: "linear-gradient(135deg, #7a6c45, #211b10)", description: "Velho mundo marcado com sangue novo." },
  { id: "isqueiro", name: "Isqueiro de Bronze", type: "Utilitário", rarity: "Comum", icon: "🔥", art: "linear-gradient(135deg, #a66c45, #31170d)", description: "Pequeno milagre portátil." },
  { id: "armadilha", name: "Armadilha de Mandíbula", type: "Caça", rarity: "Incomum", icon: "🪤", art: "linear-gradient(135deg, #73706e, #231f1d)", description: "Fecha rápido. Às vezes até demais." },
  { id: "petroleo", name: "Frasco de Petróleo", type: "Combustível", rarity: "Comum", icon: "🛢️", art: "linear-gradient(135deg, #474747, #101010)", description: "Serve para fogo, motor ou ameaça." },
  { id: "granada", name: "Granada de Estilhaço", type: "Arma", rarity: "Raro", icon: "💣", art: "linear-gradient(135deg, #6c7753, #1a1f13)", description: "Pequena esfera de péssimas intenções." },
  { id: "radio", name: "Rádio de Manivela", type: "Comunicação", rarity: "Incomum", icon: "📻", art: "linear-gradient(135deg, #7e6254, #241714)", description: "Capta ruído, mentiras e às vezes socorro." },
  { id: "ferramentas", name: "Estojo de Ferramentas", type: "Utilitário", rarity: "Incomum", icon: "🧰", art: "linear-gradient(135deg, #b66d45, #34190f)", description: "Parafusos, chaves e improviso." },
  { id: "veneno", name: "Frasco de Veneno", type: "Especial", rarity: "Raro", icon: "☠️", art: "linear-gradient(135deg, #7c8b5c, #1f2416)", description: "Não cheire. Não prove. Não confie." },
  { id: "reliquia", name: "Relíquia do Velho Mundo", type: "Especial", rarity: "Raro", icon: "📿", art: "linear-gradient(135deg, #9f8152, #2c1f13)", description: "Talvez valha fortuna. Talvez atraia morte." },
  { id: "bateria", name: "Bateria Recuperada", type: "Energia", rarity: "Incomum", icon: "🔋", art: "linear-gradient(135deg, #6f8a46, #1b250d)", description: "Carga instável, mas preciosa." },
  { id: "drone", name: "Drone Desmontado", type: "Tecnologia", rarity: "Raro", icon: "🛸", art: "linear-gradient(135deg, #73808d, #202831)", description: "Talvez volte a voar com carinho e peças." },
  { id: "livro", name: "Manual de Campo", type: "Conhecimento", rarity: "Comum", icon: "📘", art: "linear-gradient(135deg, #5373a1, #182130)", description: "Técnicas de sobrevivência em páginas gastas." },
  { id: "amulet", name: "Amuleto Rachado", type: "Especial", rarity: "Incomum", icon: "🧿", art: "linear-gradient(135deg, #4e7f93, #14232b)", description: "Alguns juram que segura presságios ruins." },
  { id: "corrente", name: "Corrente de Ferro", type: "Utilitário", rarity: "Comum", icon: "⛓️", art: "linear-gradient(135deg, #767676, #202020)", description: "Prender, arrastar, travar ou assustar." },
  { id: "goggles", name: "Óculos de Tempestade", type: "Proteção", rarity: "Incomum", icon: "🥽", art: "linear-gradient(135deg, #7c6e43, #2b2312)", description: "Visão útil contra areia e detritos." },
  { id: "escudo", name: "Escudo de Placa", type: "Proteção", rarity: "Raro", icon: "🛡️", art: "linear-gradient(135deg, #8b7758, #251f16)", description: "Improvisado com metal industrial." },
  { id: "apito", name: "Apito de Sinal", type: "Comunicação", rarity: "Comum", icon: "📯", art: "linear-gradient(135deg, #c28041, #31180d)", description: "Útil para aliados e péssimo para discrição." },
  { id: "gancho", name: "Gancho de Escalada", type: "Exploração", rarity: "Incomum", icon: "🪝", art: "linear-gradient(135deg, #8a7869, #2c241e)", description: "Paredes viram sugestões." },
  { id: "semente", name: "Sementes Raras", type: "Comida", rarity: "Raro", icon: "🌾", art: "linear-gradient(135deg, #a49a53, #322f10)", description: "Vida futura em um pacote pequeno." }
];

const pages = [...document.querySelectorAll(".page")];
const navButtons = [...document.querySelectorAll("[data-page-target]")];
const jumpButtons = [...document.querySelectorAll("[data-go-page]")];
const catalogContainer = document.getElementById("items-catalog");
const inventoryList = document.getElementById("inventory-list");
const sheetInventory = document.getElementById("sheet-inventory");
const selectedItemName = document.getElementById("selected-item-name");
const addItemButton = document.getElementById("add-item-button");
const itemSearch = document.getElementById("item-search");
const itemQuantity = document.getElementById("item-quantity");
const saveButton = document.getElementById("save-button");
const newSheetButton = document.getElementById("new-sheet-button");
const photoInput = document.getElementById("photo");
const introPhotoPreview = document.getElementById("intro-photo-preview");
const introPhotoFallback = document.getElementById("intro-photo-fallback");
const introNamePreview = document.getElementById("intro-name-preview");
const introDescriptionPreview = document.getElementById("intro-description-preview");
const finalSheet = document.getElementById("final-sheet");
const sheetEmpty = document.getElementById("sheet-empty");

const fields = {
  name: document.getElementById("name"),
  description: document.getElementById("description"),
  strength: document.getElementById("strength"),
  agility: document.getElementById("agility"),
  perception: document.getElementById("perception"),
  constitution: document.getElementById("constitution"),
  life: document.getElementById("life"),
  silver: document.getElementById("silver"),
  omens: document.getElementById("omens"),
  foodDays: document.getElementById("foodDays"),
  drinkDays: document.getElementById("drinkDays")
};

const sheetFields = {
  photo: document.getElementById("sheet-photo"),
  photoFallback: document.getElementById("sheet-photo-fallback"),
  name: document.getElementById("sheet-name"),
  description: document.getElementById("sheet-description"),
  life: document.getElementById("sheet-life"),
  silver: document.getElementById("sheet-silver"),
  omens: document.getElementById("sheet-omens"),
  foodDays: document.getElementById("sheet-foodDays"),
  drinkDays: document.getElementById("sheet-drinkDays"),
  strength: document.getElementById("sheet-strength"),
  agility: document.getElementById("sheet-agility"),
  perception: document.getElementById("sheet-perception"),
  constitution: document.getElementById("sheet-constitution")
};

const defaultCharacter = {
  name: "",
  description: "",
  photo: "",
  strength: 0,
  agility: 0,
  perception: 0,
  constitution: 0,
  life: 10,
  silver: 0,
  omens: 0,
  foodDays: 0,
  drinkDays: 0,
  inventory: []
};

let currentCharacter = loadCharacter();
let selectedItemId = null;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function normalizeNumber(value, min, max) {
  const parsed = Number.parseInt(value, 10);
  return Number.isNaN(parsed) ? min : clamp(parsed, min, max);
}

function showPage(pageId) {
  pages.forEach((page) => page.classList.toggle("active", page.id === pageId));
  navButtons.forEach((button) => button.classList.toggle("active", button.dataset.pageTarget === pageId));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function fillForm(character) {
  fields.name.value = character.name;
  fields.description.value = character.description;
  fields.strength.value = character.strength;
  fields.agility.value = character.agility;
  fields.perception.value = character.perception;
  fields.constitution.value = character.constitution;
  fields.life.value = character.life;
  fields.silver.value = character.silver;
  fields.omens.value = character.omens;
  fields.foodDays.value = character.foodDays;
  fields.drinkDays.value = character.drinkDays;
  updateIntroPreview(character);
}

function readFormData(photo = currentCharacter.photo) {
  return {
    ...currentCharacter,
    name: fields.name.value.trim(),
    description: fields.description.value.trim(),
    strength: normalizeNumber(fields.strength.value, 0, 20),
    agility: normalizeNumber(fields.agility.value, 0, 20),
    perception: normalizeNumber(fields.perception.value, 0, 20),
    constitution: normalizeNumber(fields.constitution.value, 0, 20),
    life: normalizeNumber(fields.life.value, 0, 999),
    silver: normalizeNumber(fields.silver.value, 0, SILVER_LIMIT),
    omens: normalizeNumber(fields.omens.value, 0, 99),
    foodDays: normalizeNumber(fields.foodDays.value, 0, 365),
    drinkDays: normalizeNumber(fields.drinkDays.value, 0, 365),
    photo
  };
}

function updateIntroPreview(character) {
  introNamePreview.textContent = character.name || "Seu personagem ainda não tem nome";
  introDescriptionPreview.textContent = character.description || "A descrição aparecerá aqui assim que você começar a preencher.";

  if (character.photo) {
    introPhotoPreview.src = character.photo;
    introPhotoPreview.classList.remove("hidden");
    introPhotoFallback.classList.add("hidden");
  } else {
    introPhotoPreview.removeAttribute("src");
    introPhotoPreview.classList.add("hidden");
    introPhotoFallback.classList.remove("hidden");
  }
}

function saveCharacter(character) {
  currentCharacter = character;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(character));
  renderFinalSheet();
  renderInventory();
  updateIntroPreview(character);
}

function loadCharacter() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return { ...defaultCharacter };
  }

  try {
    const parsed = JSON.parse(stored);
    return { ...defaultCharacter, ...parsed, inventory: Array.isArray(parsed.inventory) ? parsed.inventory : [] };
  } catch (error) {
    localStorage.removeItem(STORAGE_KEY);
    return { ...defaultCharacter };
  }
}

function resetCharacter() {
  currentCharacter = { ...defaultCharacter };
  selectedItemId = null;
  localStorage.removeItem(STORAGE_KEY);
  photoInput.value = "";
  itemQuantity.value = 1;
  itemSearch.value = "";
  selectedItemName.textContent = "Nenhum item selecionado";
  fillForm(currentCharacter);
  renderCatalog();
  renderInventory();
  renderFinalSheet();
  showPage("page-intro");
}

function renderCatalog(filter = itemSearch.value.trim().toLowerCase()) {
  const filteredItems = itemCatalog.filter((item) => {
    if (!filter) return true;
    const haystack = `${item.name} ${item.type} ${item.rarity} ${item.description}`.toLowerCase();
    return haystack.includes(filter);
  });

  catalogContainer.innerHTML = "";

  filteredItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = `catalog-card${selectedItemId === item.id ? " selected" : ""}`;

    card.innerHTML = `
      <div class="catalog-card__art" style="--item-bg:${item.art}">
        <span>${item.icon}</span>
      </div>
      <div class="catalog-card__body">
        <div>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>
        <div class="catalog-card__meta">
          <span>${item.type}</span>
          <span>${item.rarity}</span>
        </div>
        <button class="catalog-card__button" type="button">Selecionar</button>
      </div>
    `;

    card.querySelector(".catalog-card__button").addEventListener("click", () => {
      selectedItemId = item.id;
      selectedItemName.textContent = item.name;
      renderCatalog();
    });

    catalogContainer.appendChild(card);
  });

  if (!filteredItems.length) {
    catalogContainer.innerHTML = `<div class="panel panel--empty"><p>Nenhum item encontrado nessa busca.</p></div>`;
  }
}

function renderInventory() {
  const inventory = currentCharacter.inventory || [];
  inventoryList.innerHTML = "";
  sheetInventory.innerHTML = "";

  if (!inventory.length) {
    inventoryList.innerHTML = `<div class="panel panel--empty"><p>Nenhum item adicionado ainda.</p></div>`;
    sheetInventory.innerHTML = `<div class="panel panel--empty"><p>Nenhum item na ficha.</p></div>`;
    return;
  }

  inventory.forEach((entry) => {
    const item = itemCatalog.find((catalogItem) => catalogItem.id === entry.itemId);
    if (!item) return;

    const itemMarkup = `
      <div class="inventory-card__icon" style="--item-bg:${item.art}">${item.icon}</div>
      <div>
        <h4>${item.name}</h4>
        <div class="inventory-meta">${item.type} • ${item.rarity} • Quantidade: ${entry.quantity}</div>
      </div>
    `;

    const inventoryCard = document.createElement("article");
    inventoryCard.className = "inventory-card";
    inventoryCard.innerHTML = `${itemMarkup}<button class="inventory-card__remove" type="button">Remover</button>`;
    inventoryCard.querySelector(".inventory-card__remove").addEventListener("click", () => {
      currentCharacter.inventory = currentCharacter.inventory.filter((inventoryItem) => inventoryItem.id !== entry.id);
      saveCharacter(readFormData(currentCharacter.photo));
    });
    inventoryList.appendChild(inventoryCard);

    const sheetCard = document.createElement("article");
    sheetCard.className = "inventory-card";
    sheetCard.innerHTML = itemMarkup;
    sheetInventory.appendChild(sheetCard);
  });
}

function renderFinalSheet() {
  const hasCharacter = Boolean(currentCharacter.name);
  finalSheet.classList.toggle("hidden", !hasCharacter);
  sheetEmpty.classList.toggle("hidden", hasCharacter);

  if (!hasCharacter) {
    return;
  }

  sheetFields.name.textContent = currentCharacter.name;
  sheetFields.description.textContent = currentCharacter.description || "Sem descrição cadastrada.";
  sheetFields.life.textContent = currentCharacter.life;
  sheetFields.silver.textContent = currentCharacter.silver;
  sheetFields.omens.textContent = currentCharacter.omens;
  sheetFields.foodDays.textContent = currentCharacter.foodDays;
  sheetFields.drinkDays.textContent = currentCharacter.drinkDays;
  sheetFields.strength.textContent = currentCharacter.strength;
  sheetFields.agility.textContent = currentCharacter.agility;
  sheetFields.perception.textContent = currentCharacter.perception;
  sheetFields.constitution.textContent = currentCharacter.constitution;

  if (currentCharacter.photo) {
    sheetFields.photo.src = currentCharacter.photo;
    sheetFields.photo.classList.remove("hidden");
    sheetFields.photoFallback.classList.add("hidden");
  } else {
    sheetFields.photo.removeAttribute("src");
    sheetFields.photo.classList.add("hidden");
    sheetFields.photoFallback.classList.remove("hidden");
  }
}

function handleSave() {
  const persist = (photo) => {
    const character = readFormData(photo);
    if (!character.name) {
      showPage("page-intro");
      fields.name.focus();
      return;
    }
    saveCharacter(character);
    showPage("page-sheet");
  };

  const file = photoInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => persist(String(reader.result));
    reader.readAsDataURL(file);
    return;
  }

  persist(currentCharacter.photo || "");
}

function addSelectedItem() {
  if (!selectedItemId) {
    return;
  }

  const quantity = normalizeNumber(itemQuantity.value, 1, 99);
  const inventory = [...currentCharacter.inventory];
  const existing = inventory.find((entry) => entry.itemId === selectedItemId);

  if (existing) {
    existing.quantity = clamp(existing.quantity + quantity, 1, 999);
  } else {
    inventory.push({
      id: `${selectedItemId}-${Date.now()}`,
      itemId: selectedItemId,
      quantity
    });
  }

  saveCharacter({ ...readFormData(currentCharacter.photo), inventory });
  itemQuantity.value = 1;
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => showPage(button.dataset.pageTarget));
});

function attachJumpHandlers() {
  document.querySelectorAll("[data-go-page]").forEach((button) => {
    button.addEventListener("click", () => showPage(button.dataset.goPage));
  });
}

[fields.name, fields.description].forEach((field) => {
  field.addEventListener("input", () => {
    updateIntroPreview(readFormData(currentCharacter.photo));
  });
});

photoInput.addEventListener("change", () => {
  const file = photoInput.files[0];
  if (!file) {
    updateIntroPreview(readFormData(""));
    return;
  }

  const reader = new FileReader();
  reader.onload = () => updateIntroPreview(readFormData(String(reader.result)));
  reader.readAsDataURL(file);
});

itemSearch.addEventListener("input", () => renderCatalog());
addItemButton.addEventListener("click", addSelectedItem);
saveButton.addEventListener("click", handleSave);
newSheetButton.addEventListener("click", resetCharacter);

function attachResourceHandlers() {
  document.querySelectorAll("[data-adjust]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!currentCharacter.name) {
        return;
      }

      const field = button.dataset.adjust;
      const change = Number.parseInt(button.dataset.change, 10);
      const limits = {
        life: [0, 999],
        silver: [0, SILVER_LIMIT],
        omens: [0, 99],
        foodDays: [0, 365],
        drinkDays: [0, 365]
      };

      const [min, max] = limits[field];
      const nextValue = clamp(currentCharacter[field] + change, min, max);
      const nextCharacter = { ...currentCharacter, [field]: nextValue };
      currentCharacter = nextCharacter;
      fillForm(nextCharacter);
      saveCharacter(nextCharacter);
    });
  });
}

fillForm(currentCharacter);
renderCatalog();
renderInventory();
renderFinalSheet();
attachJumpHandlers();
attachResourceHandlers();
