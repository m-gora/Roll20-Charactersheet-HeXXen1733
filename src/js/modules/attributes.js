'use strict';

const baseStats = ["kkr", "ath", "ges", "sin", "wis", "wil"];

const bonusStats = ["bonus_init", "bonus_hp", "bonus_coups", "bonus_ideas"];

const skills = ["acrobatics", "perception", "identify", "first_aid", "sleight_of_hands",
              "mind", "craft", "stealth", "people", "speech", "flex", "reflex", "ride",
              "imperviousness", "knowledge", "witchcraft"];

const weapons = ["weapon_fist_skill", "weapon_dagger_skill", "weapon_fencing_skill",
               "weapon_swords_skill", "weapon_saber_skill", "weapon_saber_mounted_skill",
               "weapon_bludgeoning_skill", "weapon_polearms_skill", "weapon_polearms_vs_m_skill",
               "weapon_lance_skill", "weapon_lance_mounted_skill", "weapon_sling_skill",
               "weapon_pistol_skill", "weapon_crossbow_skill", "weapon_musket_skill",
               "weapon_dodge_skill", "weapon_shield_skill"];

const resources = ["ambition", "blessings", "corruption", "rage"];

export { baseStats, bonusStats, skills, weapons, resources }
