const STORAGE_KEY = "queda-basiliscos-sheet-v3";
const SILVER_LIMIT = 9999;
const itemCatalog = [
  { id: "facao", name: "Facão de Carcaça", type: "Arma", rarity: "Comum", icon: "🔪", art: "linear-gradient(135deg, #f5d94b, #c59f00)", description: "Lâmina pesada para abrir caminho ou gente." },
  { id: "adaga_osso", name: "Adaga de Osso", type: "Arma", rarity: "Comum", icon: "🗡️", art: "linear-gradient(135deg, #f6f0cf, #cab889)", description: "Pequena, afiada e sem piedade." },
  { id: "machado", name: "Machado de Trincheira", type: "Arma", rarity: "Incomum", icon: "🪓", art: "linear-gradient(135deg, #d98e41, #8f4314)", description: "Ferramenta e sentença num só cabo." },
  { id: "pistola", name: "Pistola Rachada", type: "Arma", rarity: "Incomum", icon: "🔫", art: "linear-gradient(135deg, #d7d7d7, #8b8b8b)", description: "Velha, suja e ainda convincente." },
  { id: "espingarda", name: "Espingarda Curta", type: "Arma", rarity: "Raro", icon: "💥", art: "linear-gradient(135deg, #f0d761, #997a00)", description: "Barulhenta e definitiva." },
  { id: "kit_medico", name: "Kit Médico", type: "Cura", rarity: "Raro", icon: "🩹", art: "linear-gradient(135deg, #fff0f0, #d65252)", description: "Bandagem, agulha e alguma esperança." },
  { id: "seringa", name: "Seringa de Estimulante", type: "Cura", rarity: "Raro", icon: "💉", art: "linear-gradient(135deg, #f0f7ff, #8aa7c0)", description: "Mantém o corpo de pé por teimosia." },
  { id: "cantil", name: "Cantil Militar", type: "Sobrevivência", rarity: "Comum", icon: "🥤", art: "linear-gradient(135deg, #f4eb9e, #8f8a37)", description: "Água salva mais que bala." },
  { id: "filtro", name: "Filtro de Água", type: "Sobrevivência", rarity: "Incomum", icon: "💧", art: "linear-gradient(135deg, #eef9ff, #6db6df)", description: "Tira parte da morte da água." },
  { id: "racoes", name: "Rações Secas", type: "Comida", rarity: "Comum", icon: "🥫", art: "linear-gradient(135deg, #fff0bc, #c78e29)", description: "Não é bom, mas funciona." },
  { id: "gasmask", name: "Máscara de Gás", type: "Proteção", rarity: "Raro", icon: "😷", art: "linear-gradient(135deg, #f2f7d6, #84915f)", description: "Filtra veneno e desespero." },
  { id: "colete", name: "Colete Remendado", type: "Proteção", rarity: "Incomum", icon: "🦺", art: "linear-gradient(135deg, #ffe6b0, #d06b1a)", description: "Proteção feita no ódio e na costura." },
  { id: "mochila", name: "Mochila de Sucata", type: "Utilitário", rarity: "Comum", icon: "🎒", art: "linear-gradient(135deg, #f3d86f, #8d5817)", description: "Cabe mais do que parece." },
  { id: "lanterna", name: "Lanterna de Dínamo", type: "Utilitário", rarity: "Comum", icon: "🔦", art: "linear-gradient(135deg, #fff8c7, #c7a100)", description: "Gire e torça por luz." },
  { id: "corda", name: "Corda de Resgate", type: "Utilitário", rarity: "Comum", icon: "🪢", art: "linear-gradient(135deg, #f7e2a6, #9f7130)", description: "Subir, descer, arrastar, prender." },
  { id: "mapa", name: "Mapa Plastificado", type: "Exploração", rarity: "Incomum", icon: "🗺️", art: "linear-gradient(135deg, #fff8de, #b4aa63)", description: "Terras ruins marcadas à unha." },
  { id: "binoculo", name: "Binóculo Estilhaçado", type: "Exploração", rarity: "Incomum", icon: "🔭", art: "linear-gradient(135deg, #f9f9f9, #8f8f8f)", description: "Uma lente boa ainda é uma lente boa." },
  { id: "granada", name: "Granada de Estilhaço", type: "Arma", rarity: "Raro", icon: "💣", art: "linear-gradient(135deg, #f5e57e, #6e6a19)", description: "Resolve um grupo de problemas de uma vez." },
  { id: "radio", name: "Rádio de Manivela", type: "Comunicação", rarity: "Incomum", icon: "📻", art: "linear-gradient(135deg, #f1e0b0, #8c5e26)", description: "Capta ruído, socorro e mentiras." },
  { id: "reliquia", name: "Relíquia do Velho Mundo", type: "Especial", rarity: "Raro", icon: "📿", art: "linear-gradient(135deg, #fff1a6, #ba8d05)", description: "Talvez ouro. Talvez maldição." },
  { id: "bateria", name: "Bateria Recuperada", type: "Energia", rarity: "Incomum", icon: "🔋", art: "linear-gradient(135deg, #f1ffcb, #7f9e22)", description: "Carga suficiente para algo importante." },
  { id: "drone", name: "Drone Desmontado", type: "Tecnologia", rarity: "Raro", icon: "🛸", art: "linear-gradient(135deg, #f2f2f2, #8b99a8)", description: "Peça por peça, talvez volte à vida." },
  { id: "isqueiro", name: "Isqueiro de Bronze", type: "Utilitário", rarity: "Comum", icon: "🔥", art: "linear-gradient(135deg, #ffe18a, #cf7b00)", description: "Fogo em formato de bolso." },
  { id: "apito", name: "Apito de Sinal", type: "Comunicação", rarity: "Comum", icon: "📯", art: "linear-gradient(135deg, #ffeab1, #d08419)", description: "Ótimo para aliados. Péssimo para discrição." },
  { id: "escudo", name: "Escudo de Placa", type: "Proteção", rarity: "Raro", icon: "🛡️", art: "linear-gradient(135deg, #fff1b7, #927f3a)", description: "Metal bruto entre você e o fim." }
];

const defaultCharacter = {
  name: "",
  description: "",
  className: "",
  powers: "",
  life: 10,
  lifeMax: 10,
  strength: 0,
  agility: 0,
  presence: 0,
  constitution: 0,
  omens: 0,
  silver: 0,
  foodDays: 0,
  drinkDays: 0,
  weaponPrimary: "",
  weaponPrimaryNotes: "",
  weaponSecondary: "",
  weaponSecondaryNotes: "",
  weaponHeavy: "",
  weaponHeavyNotes: "",
  durability: 0,
  photo: "",
  inventory: []
};

const fields = {
  name: document.getElementById("name"),
  description: document.getElementById("description"),
  className: document.getElementById("className"),
  powers: document.getElementById("powers"),
  life: document.getElementById("life"),
  lifeMax: document.getElementById("lifeMax"),
  strength: document.getElementById("strength"),
  agility: document.getElementById("agility"),
  presence: document.getElementById("presence"),
  constitution: document.getElementById("constitution"),
  omens: document.getElementById("omens"),
  silver: document.getElementById("silver"),
  foodDays: document.getElementById("foodDays"),
  drinkDays: document.getElementById("drinkDays"),
  weaponPrimary: document.getElementById("weaponPrimary"),
  weaponPrimaryNotes: document.getElementById("weaponPrimaryNotes"),
  weaponSecondary: document.getElementById("weaponSecondary"),
  weaponSecondaryNotes: document.getElementById("weaponSecondaryNotes"),
  weaponHeavy: document.getElementById("weaponHeavy"),
  weaponHeavyNotes: document.getElementById("weaponHeavyNotes")
};

const sheetFields = {
  photo: document.getElementById("sheet-photo"),
  photoFallback: document.getElementById("sheet-photo-fallback"),
  name: document.getElementById("sheet-name"),
  className: document.getElementById("sheet-class"),
  description: document.getElementById("sheet-description"),
  life: document.getElementById("sheet-life"),
  silver: document.getElementById("sheet-silver"),
  omens: document.getElementById("sheet-omens"),
  foodDays: document.getElementById("sheet-foodDays"),
  drinkDays: document.getElementById("sheet-drinkDays"),
  strength: document.getElementById("sheet-strength"),
  agility: document.getElementById("sheet-agility"),
  presence: document.getElementById("sheet-presence"),
  constitution: document.getElementById("sheet-constitution"),
  powers: document.getElementById("sheet-powers"),
  weaponPrimary: document.getElementById("sheet-weapon-primary"),
  weaponSecondary: document.getElementById("sheet-weapon-secondary"),
  weaponHeavy: document.getElementById("sheet-weapon-heavy")
};

const photoInput = document.getElementById("photo");
const photoPreview = document.getElementById("photo-preview");
const photoFallback = document.getElementById("photo-fallback");
const inventoryList = document.getElementById("inventory-list");
const sheetInventory = document.getElementById("sheet-inventory");
const saveButton = document.getElementById("save-button");
const resetButton = document.getElementById("reset-button");
const openCatalogButton = document.getElementById("open-catalog-button");
const closeCatalogButton = document.getElementById("close-catalog-button");
const addItemButton = document.getElementById("add-item-button");
const itemSearch = document.getElementById("item-search");
const itemQuantity = document.getElementById("item-quantity");
const selectedItemName = document.getElementById("selected-item-name");
const itemsCatalog = document.getElementById("items-catalog");
const catalogDialog = document.getElementById("catalog-dialog");
const durabilityButtons = [...document.querySelectorAll("[data-durability]")];

let currentCharacter = loadCharacter();
let selectedItemId = null;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function normalizeNumber(value, min, max) {
  const parsed = Number.parseInt(value, 10);
  return Number.isNaN(parsed) ? min : clamp(parsed, min, max);
}

function loadCharacter() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return { ...defaultCharacter };

  try {
    const parsed = JSON.parse(stored);
    return {
      ...defaultCharacter,
      ...parsed,
      inventory: Array.isArray(parsed.inventory) ? parsed.inventory : []
    };
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return { ...defaultCharacter };
  }
}

function readFormData(photo = currentCharacter.photo) {
  return {
    ...currentCharacter,
    name: fields.name.value.trim(),
    description: fields.description.value.trim(),
    className: fields.className.value.trim(),
    powers: fields.powers.value.trim(),
    life: normalizeNumber(fields.life.value, 0, 999),
    lifeMax: normalizeNumber(fields.lifeMax.value, 1, 999),
    strength: normalizeNumber(fields.strength.value, 0, 20),
    agility: normalizeNumber(fields.agility.value, 0, 20),
    presence: normalizeNumber(fields.presence.value, 0, 20),
    constitution: normalizeNumber(fields.constitution.value, 0, 20),
    omens: normalizeNumber(fields.omens.value, 0, 99),
    silver: normalizeNumber(fields.silver.value, 0, SILVER_LIMIT),
    foodDays: normalizeNumber(fields.foodDays.value, 0, 365),
    drinkDays: normalizeNumber(fields.drinkDays.value, 0, 365),
    weaponPrimary: fields.weaponPrimary.value.trim(),
    weaponPrimaryNotes: fields.weaponPrimaryNotes.value.trim(),
    weaponSecondary: fields.weaponSecondary.value.trim(),
    weaponSecondaryNotes: fields.weaponSecondaryNotes.value.trim(),
    weaponHeavy: fields.weaponHeavy.value.trim(),
    weaponHeavyNotes: fields.weaponHeavyNotes.value.trim(),
    photo
  };
}

function fillForm(character) {
  Object.entries(fields).forEach(([key, element]) => {
    element.value = character[key] ?? "";
  });

  updatePhotoPreview(character.photo);
  renderDurability(character.durability || 0);
}

function updatePhotoPreview(photo) {
  if (photo) {
    photoPreview.src = photo;
    photoPreview.classList.remove("hidden");
    photoFallback.classList.add("hidden");
    sheetFields.photo.src = photo;
    sheetFields.photo.classList.remove("hidden");
    sheetFields.photoFallback.classList.add("hidden");
  } else {
    photoPreview.removeAttribute("src");
    photoPreview.classList.add("hidden");
    photoFallback.classList.remove("hidden");
    sheetFields.photo.removeAttribute("src");
    sheetFields.photo.classList.add("hidden");
    sheetFields.photoFallback.classList.remove("hidden");
  }
}

function renderDurability(value) {
  durabilityButtons.forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.durability) === value);
  });
}

function renderInventory() {
  inventoryList.innerHTML = "";
  sheetInventory.innerHTML = "";

  if (!currentCharacter.inventory.length) {
    const empty = '<div class="inventory-card"><div class="inventory-card__icon">-</div><div><strong>Nenhum item</strong><small>Abra o catálogo e adicione equipamentos.</small></div></div>';
    inventoryList.innerHTML = empty;
    sheetInventory.innerHTML = empty;
    return;
  }

  currentCharacter.inventory.forEach((entry) => {
    const item = itemCatalog.find((catalogItem) => catalogItem.id === entry.itemId);
    if (!item) return;

    const leftMarkup = `
      <div class="inventory-card__icon" style="--item-bg:${item.art}">${item.icon}</div>
      <div>
        <strong>${item.name}</strong>
        <small>${item.type} • ${item.rarity} • Quantidade: ${entry.quantity}</small>
      </div>
    `;

    const card = document.createElement("article");
    card.className = "inventory-card";
    card.innerHTML = `${leftMarkup}<button class="inventory-card__remove" type="button">Remover</button>`;
    card.querySelector(".inventory-card__remove").addEventListener("click", () => removeItem(entry.id));
    inventoryList.appendChild(card);

    const sheetCard = document.createElement("article");
    sheetCard.className = "inventory-card";
    sheetCard.innerHTML = leftMarkup;
    sheetInventory.appendChild(sheetCard);
  });
}

function renderCatalog(filter = itemSearch.value.trim().toLowerCase()) {
  const filtered = itemCatalog.filter((item) => {
    if (!filter) return true;
    return `${item.name} ${item.type} ${item.rarity} ${item.description}`.toLowerCase().includes(filter);
  });

  itemsCatalog.innerHTML = "";

  filtered.forEach((item) => {
    const card = document.createElement("article");
    card.className = `catalog-card${item.id === selectedItemId ? " selected" : ""}`;
    card.innerHTML = `
      <div class="catalog-card__art" style="--item-bg:${item.art}">${item.icon}</div>
      <h3>${item.name}</h3>
      <small>${item.type} • ${item.rarity}</small>
      <p>${item.description}</p>
      <button type="button">Selecionar</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      selectedItemId = item.id;
      selectedItemName.textContent = item.name;
      renderCatalog();
    });

    itemsCatalog.appendChild(card);
  });
}

function renderSheet() {
  sheetFields.name.textContent = currentCharacter.name || "Sem nome";
  sheetFields.className.textContent = currentCharacter.className || "Sem classe definida";
  sheetFields.description.textContent = currentCharacter.description || "Sem descrição cadastrada.";
  sheetFields.life.textContent = currentCharacter.life;
  sheetFields.silver.textContent = currentCharacter.silver;
  sheetFields.omens.textContent = currentCharacter.omens;
  sheetFields.foodDays.textContent = currentCharacter.foodDays;
  sheetFields.drinkDays.textContent = currentCharacter.drinkDays;
  sheetFields.strength.textContent = currentCharacter.strength;
  sheetFields.agility.textContent = currentCharacter.agility;
  sheetFields.presence.textContent = currentCharacter.presence;
  sheetFields.constitution.textContent = currentCharacter.constitution;
  sheetFields.powers.textContent = currentCharacter.powers || "Sem anotações.";
  sheetFields.weaponPrimary.textContent = currentCharacter.weaponPrimary || "-";
  sheetFields.weaponSecondary.textContent = currentCharacter.weaponSecondary || "-";
  sheetFields.weaponHeavy.textContent = currentCharacter.weaponHeavy || "-";
  updatePhotoPreview(currentCharacter.photo);
  renderInventory();
  renderDurability(currentCharacter.durability || 0);
}

function saveCharacter(character) {
  currentCharacter = character;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(character));
  renderSheet();
}

function persistCurrentForm() {
  const file = photoInput.files[0];
  const finalize = (photo) => {
    const character = readFormData(photo);
    if (!character.name) {
      fields.name.focus();
      return;
    }
    if (character.life > character.lifeMax) {
      character.life = character.lifeMax;
      fields.life.value = character.lifeMax;
    }
    saveCharacter(character);
  };

  if (file) {
    const reader = new FileReader();
    reader.onload = () => finalize(String(reader.result));
    reader.readAsDataURL(file);
    return;
  }

  finalize(currentCharacter.photo || "");
}

function resetCharacter() {
  currentCharacter = { ...defaultCharacter };
  selectedItemId = null;
  localStorage.removeItem(STORAGE_KEY);
  photoInput.value = "";
  itemSearch.value = "";
  itemQuantity.value = 1;
  selectedItemName.textContent = "Nenhum item selecionado";
  fillForm(currentCharacter);
  renderCatalog();
  renderSheet();
}

function removeItem(id) {
  currentCharacter.inventory = currentCharacter.inventory.filter((item) => item.id !== id);
  saveCharacter(readFormData(currentCharacter.photo));
}

function addSelectedItem() {
  if (!selectedItemId) return;

  const quantity = normalizeNumber(itemQuantity.value, 1, 99);
  const inventory = [...currentCharacter.inventory];
  const existing = inventory.find((entry) => entry.itemId === selectedItemId);

  if (existing) {
    existing.quantity = clamp(existing.quantity + quantity, 1, 999);
  } else {
    inventory.push({ id: `${selectedItemId}-${Date.now()}`, itemId: selectedItemId, quantity });
  }

  saveCharacter({ ...readFormData(currentCharacter.photo), inventory });
  itemQuantity.value = 1;
}

saveButton.addEventListener("click", persistCurrentForm);
resetButton.addEventListener("click", resetCharacter);
openCatalogButton.addEventListener("click", () => catalogDialog.showModal());
closeCatalogButton.addEventListener("click", () => catalogDialog.close());
addItemButton.addEventListener("click", addSelectedItem);
itemSearch.addEventListener("input", () => renderCatalog());
photoInput.addEventListener("change", () => {
  const file = photoInput.files[0];
  if (!file) {
    updatePhotoPreview(currentCharacter.photo || "");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => updatePhotoPreview(String(reader.result));
  reader.readAsDataURL(file);
});

durabilityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentCharacter.durability = Number(button.dataset.durability);
    renderDurability(currentCharacter.durability);
    saveCharacter(readFormData(currentCharacter.photo));
  });
});

document.querySelectorAll("[data-adjust]").forEach((button) => {
  button.addEventListener("click", () => {
    const field = button.dataset.adjust;
    const change = Number(button.dataset.change);
    const limits = {
      life: [0, currentCharacter.lifeMax || 999],
      silver: [0, SILVER_LIMIT],
      omens: [0, 99],
      foodDays: [0, 365],
      drinkDays: [0, 365]
    };

    const [min, max] = limits[field];
    const nextCharacter = { ...currentCharacter, [field]: clamp(currentCharacter[field] + change, min, max) };
    fillForm(nextCharacter);
    saveCharacter(nextCharacter);
  });
});

fillForm(currentCharacter);
renderCatalog();
renderSheet();
