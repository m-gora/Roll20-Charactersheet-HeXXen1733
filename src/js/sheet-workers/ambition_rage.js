on("clicked:ambition_add", () => {
  addAmbitionOrRage("ambition", "rage");
});

on("clicked:ambition_sub", () => {
  subAmbition();
});

on("clicked:rage_add", () => {
  addAmbitionOrRage("rage", "ambition");
});

on("clicked:rage_sub", () => {
  subRage();
});

var subRage = () => {
  getAttrs(["rage"], values => {
    if(values.rage > 0) {
      values.rage--;
      setAttrs(values, "silent");
    }
  });
};

var subAmbition = () => {
  getAttrs(["ambition"], values => {
    if(values.ambition > 0) {
      values.ambition--;
      setAttrs(values, "silent");
    }
  });
};

var addAmbitionOrRage = (addStat, subStat) => {
  getAttrs(["ambition", "rage"], values => {
    console.log(values);
    if(values[addStat] >= 5) {
      values[addStat] = 5;
    } else {
      values[addStat]++;
    }

    if(values[subStat] <= 0) {
      values[subStat] = 0;
    } else {
      values[subStat]--;
    }
    console.log(values);
    setAttrs(values, "silent");
  });
};
