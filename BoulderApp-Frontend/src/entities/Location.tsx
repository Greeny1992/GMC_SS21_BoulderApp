interface ILocation {
    id:string,
    country:string,
    region:string,
    city:string
}

const LOCATION_DATA : ILocation[] =[

    {
        id:'-1',
        country:'Undefined',
        region:'Undefined',
        city:'Undefined'
    },
    {
        id:'1',
        country:'Austria',
        region:'Styria',
        city:'Graz'
    },
    {
        id:'2',
        country:'Austria',
        region:'Styria',
        city:'Deutschlandsberg'
    },
    {
        id:'3',
        country:'Austria',
        region:'Carinthia',
        city:'Wolfsberg'
    }
]

const getLocation = (id:string):ILocation =>
{
    return LOCATION_DATA.filter((location:ILocation) => location.id ===id)?.[0] ?? LOCATION_DATA[0];
}
export default getLocation