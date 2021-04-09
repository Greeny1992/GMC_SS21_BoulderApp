export interface IBoulder{
    id:string;
    title:string;
    color: string,
    difficulty: number,
    img:string,
    created:Date 
}

const BOULDER_DATA :IBoulder[]= [
  {
    id: 'bd7acbea-c1bdf1-46c2-aesdd5-3ad53abb28ba',
    title: 'Blauer Fels',
    color: 'blue',
    difficulty: 3,
    img:'https://42796r1ctbz645bo223zkcdl-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/rock-379491_960_720-744x532.jpg',
    created: new Date()
  },
  {
    id: 'bd7acbea-c1b1-4as6c2-aeasdfd5-3ad53abb28ba',
    title: 'Harter Brocken',
    color: 'green',
    difficulty: 5,
    img:'https://static.bergzeit.de/out/pictures-imago/master/magazin_prod/9e/1b/201806bouldern-magic-wood-riverbed-christof-rauch.jpg',
    created: new Date()
  },
  {
    id: 'bd7acbea-c1b1-46c2-aedasdfasa5-3ad53abb28ba',
    title: 'Firestone',
    color: 'red',
    difficulty: 7,
    img:'https://kletterblock.de/wp-content/uploads/2018/10/2018_10_03_11_24_29_Microsoft_Edge.jpg',
    created: new Date()
  },
];
export default BOULDER_DATA;