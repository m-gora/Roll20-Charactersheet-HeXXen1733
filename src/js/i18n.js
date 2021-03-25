// This code translates sections of the character sheets that is dynamically generated
// e.g. Query macros.

on("sheet:opened", translateRollQueries);

var translateRollQueries = () => {
  console.log("translating...");
  var none = getTranslationByKey("none-u");
  var difficulty = getTranslationByKey("difficulty-u");
  var relief = getTranslationByKey("relief-u");

  setAttrs({
    "i18n_helper_none": none,
    "i18n_helper_difficulty": difficulty,
    "i18n_helper_relief": relief
  });
};
