'use strict';

var addResource = (resource, max) => {
  return Math.min(resource + 1, max);
};

var subResource = (resource, min) => {
  return Math.max(resource - 1, min);
};

var addCorruption = () => {
  getAttrs(["blessings", "corruption", "wil"], values => {
    var corruption = addResource(values.corruption, values.wil);
    var blessings = values.blessings;
    if(values.blessings >= 5 - values.corruption) {
      blessings = subResource(values.blessings, 0);
    }
    setAttrs({
      "blessings": blessings,
      "corruption": corruption
    });
  });
};

var addBlessings = () => {
  getAttrs(["blessings", "corruption", "rage"], values => {
    var rage = values.rage;
    var blessings = values.blessings;
    if(values.rage > 0) {
      rage = subResource(values.rage, 0);
    } else {
      blessings = addResource(values.blessings, 5 - values.corruption);
    }
    setAttrs({
      "blessings": blessings,
      "rage": rage
    });
  });
};

var addRage = () => {
  getAttrs(["blessings", "rage"], values => {
    var blessings = values.blessings;
    var rage = values.rage;
    if(values.blessings > 0) {
      blessings = subResource(values.blessings, 0);
    } else {
      rage = addResource(values.rage, 5);
    }
    setAttrs({
      "blessings": blessings,
      "rage": rage
    });
  });
};

var addAmbition = () => {
  getAttrs(["ambition"], values => {
    setAttrs({
      "ambition": addResource(values.ambition, 5)
    });
  });
};

var subAmbition = () => {
  getAttrs(["ambition"], values => {
    setAttrs({
      "ambition": subResource(values.ambition, 0)
    });
  });
};

var subBlessings = () => {
  getAttrs(["blessings"], values => {
    setAttrs({
      "blessings": subResource(values.blessings, 0)
    });
  });
};

var subCorruption = () => {
  getAttrs(["corruption"], values => {
    setAttrs({
      "corruption": subResource(values.corruption, 0)
    });
  });
};

var subRage = () => {
  getAttrs(["rage"], values => {
    setAttrs({
      "rage": subResource(values.rage, 0)
    });
  });
};

export { addAmbition, addBlessings, addCorruption, addRage, subAmbition, subBlessings, subCorruption, subRage, addResource, subResource }
