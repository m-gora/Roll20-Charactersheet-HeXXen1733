'use strict';

var migrate = (migrations, attributes) => {
  getAttrs(attributes, (values) => {
    console.log("migrating character sheet...");

    if(values.sheet_version === undefined) {
      values.sheet_version = "v0.0.0";
    }

    let lastIndex = migrations.findIndex((migration) => migration.key === values.sheet_version);
    let migrationsToPerform = migrations.slice(lastIndex + 1);

    migrationsToPerform.forEach((migration) => {
      console.log("performing migration to version " + migration.key);
      console.log(migration);
      migration.method(values);
    });

    setAttrs({
      "sheet_version": migrationsToPerform.pop().key
    });
  });
};

export { migrate }
