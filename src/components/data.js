export const azukiNFTs = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  collection: 'azuki',
  image: `https://picsum.photos/800/800?random=${i}`,
  title: `Azuki #${i + 1}`,
  
  // Range attributes
  health: Math.floor(Math.random() * 100),
  strength: Math.floor(Math.random() * 100),
  speed: Math.floor(Math.random() * 100),
  stamina: Math.floor(Math.random() * 100),
  energy: Math.floor(Math.random() * 100),
  basePower: Math.floor(Math.random() * 100),
  powerRank: Math.floor(Math.random() * 1200) + 1,
  
  // Dropdown attributes
  cardRank: ['Ultimate', 'Legendary', 'Rare', 'Common'][Math.floor(Math.random() * 4)],
  gender: ['Male', 'Female'][Math.floor(Math.random() * 2)],
  family: ['Celestial Dynasty', 'Shadow Clan', 'Ancient Order'][Math.floor(Math.random() * 3)],
  type: ['Human', 'Celestial', 'Ascended Celestial'][Math.floor(Math.random() * 3)],
  status: ['Titan', 'Mortal', 'God'][Math.floor(Math.random() * 3)],
  group: ['Universal Chaos', 'Order', 'Neutral'][Math.floor(Math.random() * 3)],
  age: ['Ancient', 'Young', 'Timeless'][Math.floor(Math.random() * 3)],
  nature: ['Black Magic', 'White Magic', 'Neutral'][Math.floor(Math.random() * 3)],
  primaryWeapon: ["Death's Embrace", 'Sword of Light'][Math.floor(Math.random() * 2)],
  secondaryWeapon: ['Sword', 'Bow', 'Staff'][Math.floor(Math.random() * 3)],
  primaryAccessory: ['Amulet of Power', 'Ring of Strength'][Math.floor(Math.random() * 2)],
  universe: ['Alpha', 'Beta', 'Gamma'][Math.floor(Math.random() * 3)],
  galaxy: ['Milky Way', 'Andromeda'][Math.floor(Math.random() * 2)],
  system: ['Solar', 'Binary'][Math.floor(Math.random() * 2)],
  planet: ['Earth', 'Mars', 'Venus'][Math.floor(Math.random() * 3)],
  city: ['New York', 'Tokyo', 'London'][Math.floor(Math.random() * 3)]
}));

export const elementalNFTs = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  collection: 'elemental',
  image: `https://picsum.photos/800/800?random=${i + 100}`,
  title: `Elemental #${i + 1}`,
  
  // Range attributes
  health: Math.floor(Math.random() * 100),
  strength: Math.floor(Math.random() * 100),
  speed: Math.floor(Math.random() * 100),
  stamina: Math.floor(Math.random() * 100),
  energy: Math.floor(Math.random() * 100),
  basePower: Math.floor(Math.random() * 100),
  powerRank: Math.floor(Math.random() * 1200) + 1,
  
  // Dropdown attributes
  cardRank: ['Ultimate', 'Legendary', 'Rare', 'Common'][Math.floor(Math.random() * 4)],
  gender: ['Male', 'Female'][Math.floor(Math.random() * 2)],
  family: ['Celestial Dynasty', 'Shadow Clan', 'Ancient Order'][Math.floor(Math.random() * 3)],
  type: ['Human', 'Celestial', 'Ascended Celestial'][Math.floor(Math.random() * 3)],
  status: ['Titan', 'Mortal', 'God'][Math.floor(Math.random() * 3)],
  group: ['Universal Chaos', 'Order', 'Neutral'][Math.floor(Math.random() * 3)],
  age: ['Ancient', 'Young', 'Timeless'][Math.floor(Math.random() * 3)],
  nature: ['Black Magic', 'White Magic', 'Neutral'][Math.floor(Math.random() * 3)],
  primaryWeapon: ["Death's Embrace", 'Sword of Light'][Math.floor(Math.random() * 2)],
  secondaryWeapon: ['Sword', 'Bow', 'Staff'][Math.floor(Math.random() * 3)],
  primaryAccessory: ['Amulet of Power', 'Ring of Strength'][Math.floor(Math.random() * 2)],
  universe: ['Alpha', 'Beta', 'Gamma'][Math.floor(Math.random() * 3)],
  galaxy: ['Milky Way', 'Andromeda'][Math.floor(Math.random() * 2)],
  system: ['Solar', 'Binary'][Math.floor(Math.random() * 2)],
  planet: ['Earth', 'Mars', 'Venus'][Math.floor(Math.random() * 3)],
  city: ['New York', 'Tokyo', 'London'][Math.floor(Math.random() * 3)]
}));

export const beanzNFTs = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  collection: 'beanz',
  image: `https://picsum.photos/800/800?random=${i + 200}`,
  title: `Beanz #${i + 1}`,
  
  // Range attributes
  health: Math.floor(Math.random() * 100),
  strength: Math.floor(Math.random() * 100),
  speed: Math.floor(Math.random() * 100),
  stamina: Math.floor(Math.random() * 100),
  energy: Math.floor(Math.random() * 100),
  basePower: Math.floor(Math.random() * 100),
  powerRank: Math.floor(Math.random() * 1200) + 1,
  
  // Dropdown attributes
  cardRank: ['Ultimate', 'Legendary', 'Rare', 'Common'][Math.floor(Math.random() * 4)],
  gender: ['Male', 'Female'][Math.floor(Math.random() * 2)],
  family: ['Celestial Dynasty', 'Shadow Clan', 'Ancient Order'][Math.floor(Math.random() * 3)],
  type: ['Human', 'Celestial', 'Ascended Celestial'][Math.floor(Math.random() * 3)],
  status: ['Titan', 'Mortal', 'God'][Math.floor(Math.random() * 3)],
  group: ['Universal Chaos', 'Order', 'Neutral'][Math.floor(Math.random() * 3)],
  age: ['Ancient', 'Young', 'Timeless'][Math.floor(Math.random() * 3)],
  nature: ['Black Magic', 'White Magic', 'Neutral'][Math.floor(Math.random() * 3)],
  primaryWeapon: ["Death's Embrace", 'Sword of Light'][Math.floor(Math.random() * 2)],
  secondaryWeapon: ['Sword', 'Bow', 'Staff'][Math.floor(Math.random() * 3)],
  primaryAccessory: ['Amulet of Power', 'Ring of Strength'][Math.floor(Math.random() * 2)],
  universe: ['Alpha', 'Beta', 'Gamma'][Math.floor(Math.random() * 3)],
  galaxy: ['Milky Way', 'Andromeda'][Math.floor(Math.random() * 2)],
  system: ['Solar', 'Binary'][Math.floor(Math.random() * 2)],
  planet: ['Earth', 'Mars', 'Venus'][Math.floor(Math.random() * 3)],
  city: ['New York', 'Tokyo', 'London'][Math.floor(Math.random() * 3)]
}));

// Combine all collections into one object for easy access
export const collections = {
  azuki: azukiNFTs,
  elemental: elementalNFTs,
  beanz: beanzNFTs
};