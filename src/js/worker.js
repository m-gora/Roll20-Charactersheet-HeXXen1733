'use strict';

import { baseStats, bonusStats, skills, weapons } from './modules/attributes.js'
import { runMigrations } from './modules/migrations.js'
import * as resource from './modules/resources.js'
import { updateAp, updateSkills, updateAttacks, updateBaseStats } from './modules/abilities.js'

on("sheet:opened", runMigrations);

var baseStatsListener = baseStats.concat(bonusStats).map(stat => "change:" + stat).join(" ");
on(baseStatsListener, () => {
  updateBaseStats();
  updateSkills();
  updateAttacks();
});

on(skills.map(skill => "change:" + skill).join(" "), () => {
  updateSkills();
  updateBaseStats();
});

on(weapons.map(weapon => "change:" + weapon).join(" "), updateAttacks);
on("change:armor change:para_damage", updateAp);
on("change:bonus_hp change:bonus_init", updateBaseStats);

// click handlers for resources
on("clicked:ambition_add", resource.addAmbition);
on("clicked:ambition_sub", resource.subAmbition);
on("clicked:blessings_add", resource.addBlessings);
on("clicked:blessings_sub", resource.subBlessings);
on("clicked:corruption_add", resource.addCorruption);
on("clicked:corruption_sub", resource.subCorruption);
on("clicked:rage_add", resource.addRage);
on("clicked:rage_sub", resource.subRage);
