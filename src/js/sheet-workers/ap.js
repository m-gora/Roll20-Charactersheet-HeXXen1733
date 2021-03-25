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
