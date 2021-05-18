'use strict';

import { baseStats, skills, weapons, resources } from './attributes.js'
import { migrate } from './migration-engine.js'

let attributes = baseStats.concat(skills, weapons, resources, "sheet_version");

// migration steps
var migrate100 = (values) => {
  console.log(values);
  setAttrs({
    "para_damage": 0,
    "malus_damage": 0,
    "ext_damage": 0,
    "int_damage": 0
  });
};

var migrate103 = (values) => {
  setAttrs({
    "hp_max": values.kkr + values.wil + values.imperviousness + values.bonus_hp + 7,
    "init": values.sin + values.ges + values.reflex,
    "blessings_max": 5
  });
};

// migration binding
let migrations = [{
  "key": "v0.0.0",
  "method": (values ) => console.log(values)
}, {
  "key": "v1.0.0",
  "method": migrate100,

}, {
  "key": "v1.0.3",
  "method": migrate103
}];

var runMigrations = () => {
  migrate(migrations, attributes);
};

export { runMigrations }
