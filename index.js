'use strict'
const mongoose = require('mongoose');

require('./src/models/arcaneSchema');
require('./src/models/buildSchema');
require('./src/models/customSchema');
require('./src/models/droneSchema');
require('./src/models/enemySchema');
require('./src/models/flavourSchema');
require('./src/models/fusionbundleSchema');
require('./src/models/gearSchema');
require('./src/models/keySchema');
require('./src/models/manifestSchema');
require('./src/models/partnerSchema');
require('./src/models/poeurlSchema');
require('./src/models/recipeSchema');
require('./src/models/regionSchema');
require('./src/models/releasedateSchema');
require('./src/models/relicSchema');
require('./src/models/RelicArcaneSchema');
require('./src/models/resourceSchema');
require('./src/models/rivenpriceSchema');
require('./src/models/sentinelSchema');
require('./src/models/sortierewardSchema');
require('./src/models/updateSchema');
require('./src/models/upgradeSchema');
require('./src/models/warframeSchema');
require('./src/models/weaponSchema');

const Arcane = mongoose.model("Arcane");
const Build = mongoose.model("Build");
const Custom = mongoose.model("Custom");
const Drone = mongoose.model("Drone");
const Enemy = mongoose.model("Enemy");
const Flavour = mongoose.model("Flavour");
const FusionBundle = mongoose.model("FusionBundle");
const Gear = mongoose.model("Gear");
const Key = mongoose.model("Key");
const Manifest = mongoose.model("Manifest");
const Partner = mongoose.model("Partner");
const PoeUrl = mongoose.model("PoeUrl");
const Recipe = mongoose.model("Recipe");
const Region = mongoose.model("Region");
const ReleaseDate = mongoose.model("ReleaseDate");
const Relic = mongoose.model("Relic");
const RelicArcane = mongoose.model("RelicArcane");
const Resource = mongoose.model("Resource");
const RivenPrice = mongoose.model("RivenPrice");
const Sentinel = mongoose.model("Sentinel");
const SortieReward = mongoose.model("SortieReward");
const Update = mongoose.model("Update");
const Upgrade = mongoose.model("Upgrade");
const Warframe = mongoose.model("Warframe");
const Weapon = mongoose.model("Weapon");


exports.Models = {
  arcane: Arcane,
  arcanes: Arcane,
  build: Build,
  builds: Build,
  custom: Custom,
  customs: Custom,
  drone: Drone,
  drones: Drone,
  enemy: Enemy,
  enemies: Enemy,
  flavour: Flavour,
  flavours: Flavour,
  fusionbundle: FusionBundle,
  fusionbundles: FusionBundle,
  gear: Gear,
  gears: Gear,
  key: Key,
  keys: Key,
  manifest: Manifest,
  manifests: Manifest,
  partner: Partner,
  partners: Partner,
  poeurl: PoeUrl,
  poeurls: PoeUrl,
  recipe: Recipe,
  recipes: Recipe,
  region: Region,
  regions: Region,
  releasedate: ReleaseDate,
  releasedates: ReleaseDate,
  relic: Relic,
  relics: Relic,
  relicarcane: RelicArcane,
  relicarcanes: RelicArcane,
  resource: Resource,
  resources: Resource,
  rivenprice: RivenPrice,
  rivenprices: RivenPrice,
  sentinel: Sentinel,
  sentinels: Sentinel,
  sortiereward: SortieReward,
  sortierewards: SortieReward,
  update: Update,
  updates: Update,
  upgrade: Upgrade,
  upgrades: Upgrade,
  warframe: Warframe,
  warframes: Warframe,
  weapon: Weapon,
  weapons: Weapon
}