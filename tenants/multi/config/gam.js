const GAMConfiguration = require('@base-cms/marko-newsletters-gam/config');

const config = new GAMConfiguration('137873098');

config
  .setAdUnits('fm-today', [
    {
      name: 'header',
      path: 'IEN-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('id-today', [
    {
      name: 'header',
      path: 'IEN-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('impo-mag-today', [
    {
      name: 'header',
      path: 'IEN-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('manufacturing-today', [
    {
      name: 'header',
      path: 'IEN-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('newswire', [
    {
      name: 'header',
      path: 'IEN-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ])

  .setAdUnits('mbt-today', [
    {
      name: 'header',
      path: 'IEN-Newsletters-600x100',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
