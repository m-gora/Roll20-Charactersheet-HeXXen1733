'use strict';

import { baseStats, skills, weapons } from './attributes.js'
import { sumArgs } from './utils.js'

var updateAp = () => {
  getAttrs(["armor", "para_damage"], (values) => {
    let armor = parseInt(values.armor) * (-1);
    let paraDamage = parseInt(values.para_damage) * (-1);
    setAttrs({
      ap_max: Math.max(sumArgs(6, armor, paraDamage), 0)
    });
  });
};

var updateBaseStats = () => {
  let updateStats = baseStats;
  updateStats.push("imperviousness");
  updateStats.push("reflex");
  updateStats.push("bonus_hp");
  updateStats.push("bonus_init");
  updateStats.push("bonus_coups");
  updateStats.push("bonus_ideas");

  getAttrs(updateStats, (values) => {
    setAttrs({
      coups_max: sumArgs(values.ath, values.bonus_coups),
      ideas_max: sumArgs(values.wis, values.bonus_ideas),
      hp_max: sumArgs(values.kkr, values.wil, values.imperviousness, values.bonus_hp, 7),
      init: sumArgs(values.sin, values.ges, values.reflex, values.bonus_init),
    });
  });
};

var updateAttacks = () => {
  getAttrs(baseStats.concat(weapons), (values) => {
    setAttrs({
      weapon_fist_sum: sumArgs(values.weapon_fist_skill, values.ath),
      weapon_dagger_sum: sumArgs(values.weapon_dagger_skill, values.ges),
      weapon_fencing_sum: sumArgs(values.weapon_fencing_skill, values.ath),
      weapon_swords_sum: sumArgs(values.weapon_swords_skill, values.kkr),
      weapon_saber_sum: sumArgs(values.weapon_saber_skill, values.kkr),
      weapon_saber_mounted_sum: sumArgs(values.weapon_saber_mounted_skill, values.kkr),
      weapon_bludgeoning_sum: sumArgs(values.weapon_bludgeoning_skill, values.kkr),
      weapon_polearms_sum: sumArgs(values.weapon_polearms_skill, values.kkr),
      weapon_polearms_vs_m_sum: sumArgs(values.weapon_polearms_vs_m_skill, values.kkr),
      weapon_lance_sum: sumArgs(values.weapon_lance_skill, values.kkr),
      weapon_lance_mounted_sum: sumArgs(values.weapon_lance_mounted_skill, values.kkr),
      weapon_sling_sum: sumArgs(values.weapon_sling_skill, values.ges),
      weapon_pistol_sum: sumArgs(values.weapon_pistol_skill, values.sin),
      weapon_crossbow_sum: sumArgs(values.weapon_crossbow_skill, values.sin),
      weapon_musket_sum: sumArgs(values.weapon_musket_skill, values.sin),
      weapon_dodge_sum: sumArgs(values.weapon_dodge_skill, values.ath),
      weapon_shield_sum: sumArgs(values.weapon_shield_skill, values.kkr),
    });
  });
};

var updateSkills = () => {
  getAttrs(baseStats.concat(skills), (values) => {
    setAttrs({
      acrobatics_sum: sumArgs(values.acrobatics, values.ath),
      perception_sum: sumArgs(values.perception,values.sin),
      identify_sum: sumArgs(values.identify, values.sin),
      first_aid_sum: sumArgs(values.first_aid, values.wis),
      sleight_of_hands_sum: sumArgs(values.sleight_of_hands, values.ges),
      mind_sum: sumArgs(values.mind, values.wil),
      craft_sum: sumArgs(values.craft, values.ges),
      stealth_sum: sumArgs(values.stealth, values.ath),
      people_sum: sumArgs(values.people, values.wis),
      speech_sum: sumArgs(values.speech, values.wil),
      flex_sum: sumArgs(values.flex, values.kkr),
      reflex_sum: sumArgs(values.reflex, values.sin),
      ride_sum: sumArgs(values.ride, values.ath),
      imperviousness_sum: sumArgs(values.imperviousness, values.kkr),
      knowledge_sum: sumArgs(values.knowledge, values.wis),
      witchcraft_sum: sumArgs(values.witchcraft, values.wis)
    });
  });
};

export { updateAp, updateBaseStats, updateAttacks, updateSkills }
