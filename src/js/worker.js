
let baseStats = ["kkr", "ath", "ges", "sin", "wis", "wil"];
let skills = ["acrobatics", "perception", "identify", "first_aid", "sleight_of_hands",
              "mind", "craft", "stealth", "people", "speech", "flex", "reflex", "ride",
              "imperviousness", "knowledge"];
let weapons = ["weapon_fist_skill", "weapon_dagger_skill", "weapon_fencing_skill",
               "weapon_swords_skill", "weapon_saber_skill", "weapon_saber_mounted_skill",
               "weapon_bludgeoning_skill", "weapon_polearms_skill", "weapon_polearms_vs_m_skill",
               "weapon_lance_skill", "weapon_lance_mounted_skill", "weapon_sling_skill",
               "weapon_pistol_skill", "weapon_crossbow_skill", "weapon_musket_skill",
               "weapon_dodge_skill", "weapon_shield_skill"];

on(baseStats.map(stat => "change:" + stat).join(" "), () => {
  updateBaseStats();
  updateSkills();
  updateAttacks();
});

on(skills.map(skill => "change:" + skill).join(" "), () => {
  updateSkills();
});

on(weapons.map(weapon => "change:" + weapon).join(" "), () => {
  updateAttacks();
});

on("change:armor change:para_damage", () => {
  updateAp();
});

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
  getAttrs(baseStats, (values) => {
    setAttrs({
      coups_max: values.ath,
      ideas_max: values.wis,
      hp_max: sumArgs(values.kkr, values.wil, 7),
      init: sumArgs(values.sin, values.ges),
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
    console.log(values);
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
      knowledge_sum: sumArgs(values.knowledge, values.wis)
    });
  });
};

var sumArgs = (...args) => {
  return args.reduce((a, b) => {
      let aInt = parseInt(a) || 0;
      let bInt = parseInt(b) || 0;
      return aInt + bInt;
  });
};
