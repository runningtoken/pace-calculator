// @flow

const keyMap = array =>
  array.reduce((map, item) => {
    map[item.join('|')] = item;
    return map;
  }, {});

export default keyMap([
  // Men
  ['marathon', '2:00:25', 'Mens Marathon Breaking2 Eliud Kipchoge'],
  ['marathon', '2:02:57', 'Mens WR Marathon Dennis Kipruto Kimetto'],
  ['half-marathon', '58:23', 'Mens WR Half marathon Zersenay Tadese'],
  ['10000', '26:17.53', 'Mens WR 10,000 m Kenenisa Bekele'],
  ['5000', '12:37.35', 'Mens WR 5000 m Kenenisa Bekele'],
  ['3000', '7:53.63', 'Mens WR 3000 m steeplechase Saif Saaeed Shaheen'],
  ['3000', '7:20.67', 'Mens WR 3000 m Daniel Komen'],
  ['mile', '3:43.13', 'Mens WR Mile Hicham El Guerrouj'],
  ['1500', '3:26.00', 'Mens WR 1500 m Hicham El Guerrouj'],
  ['800', '1:40.91', 'Mens WR 800 m David Rudisha'],
  ['400', '46.78', 'Mens WR 400 m hurdles Kevin Young'],
  ['400', '43.03', 'Mens WR 400 m Wayde van Niekerk'],
  ['200', '19.19', 'Mens WR 200 m Usain Bolt'],
  ['110', '12.80', 'Mens WR 110 m hurdles Aries Meritt'],
  ['100', '9.58', 'Mens WR 100 m Usain Bolt'],
  // Women
  ['marathon', '2:15:25', 'Womens WR Marathon Paula Radcliffe (Mx)'],
  [
    'half-marathon',
    '1:04:51',
    'Womens WR Half marathon Joyciline Jepkosgei (Mx)'
  ],
  ['10000', '29:17.45', 'Womens WR 10,000 m Almaz Ayana'],
  ['5000', '14:11.15', 'Womens WR 5000 m Tirunesh Dibaba'],
  ['3000', '8:44.32', 'Womens WR 3000 m steeplechase Beatrice Chepkoech'],
  ['3000', '8:06.11', 'Womens WR 3000 m Wang Junxia'],
  ['mile', '4:12.56', 'Womens WR Mile Svetlana Masterkova'],
  ['1500', '3:50.07', 'Womens WR 1500 m Genzebe Dibaba'],
  ['800', '1:53.28', 'Womens WR 800 m Jarmila Kratochvílová'],
  ['400', '42.34', 'Womens WR 400 m hurdles Yuliya Pechonkina'],
  ['400', '47.60', 'Womens WR 400 m Marita Koch'],
  ['200', '21.34', 'Womens WR 200 m Florence Griffith Joyner'],
  ['100', '12.20', 'Womens WR 100 m hurdles Kendra Harrison'],
  ['100', '10.49', 'Womens WR 100 m Florence Griffith Joyner']
]);
