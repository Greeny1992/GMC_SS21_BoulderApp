import { IColor, IDifficulty,ILocation } from "../entities/boulderDetailValues";

const _colors: IColor[]=[
    {id:1, key:2,name:'green',value:'#008000'},
    {id:2, key:3,name:'yellow',value:'#ffd700'},
    {id:3, key:4,name:'red',value:'#ff0000'},
    {id:4, key:5,name:'orange',value:'#FFA500'},
    {id:5, key:6,name:'pink',value:'#FFC0CB'},
    {id:6, key:7,name:'blue',value:'#0000ff'},
    {id:7, key:8,name:'violet',value:'##EE82EE'},
    {id:8, key:9,name:'turquoise',value:'##58bdb3'},
    {id:9, key:10,name:'white',value:'#ffffff'},
    {id:10,key:11, name:'grey',value:'#808080'},
    {id:11,key:12, name:'black',value:'#000000'}
]
export function colors(){
    return _colors
}
export function getColor(color_id:number|string):IColor{
    const id = typeof color_id === 'string'? parseInt(color_id) : color_id;
    const color = _colors.filter((color:IColor) => color.id === id )?.[0];
    return color ?? _colors[0];
}


const _difficulty :IDifficulty[] = [
    {id:1, name:'2', key:2},
    {id:2, name:'3', key:3},
    {id:3, name:'4', key:4},
    {id:4, name:'5a', key:5},
    {id:5, name:'5b', key:6},
    {id:6, name:'5c', key:7},
    {id:7, name:'6a', key:8},
    {id:8, name:'6a+', key:9},
    {id:9, name:'6b', key:10},
    {id:10, name:'6b+', key:11},
    {id:11, name:'6c', key:12},
    {id:12, name:'6c+', key:13}
   
]

export function difficulty(){
    return _difficulty
}
export function getDifficulty(difficulty_id:number|string):IDifficulty{
    const id = typeof difficulty_id === 'string'? parseInt(difficulty_id) : difficulty_id;
    const difficulty = _difficulty.filter((difficulty:IDifficulty) => difficulty.id === id )?.[0];
    return  difficulty;
}

const _location :ILocation[] = [
    {id:1,key:1, country:'Austria',region:'Styria'},
    {id:2,key:2, country:'Austria',region:'Vienna'},
    {id:3,key:3, country:'Austria',region:'Carinthia'},
    {id:4,key:4, country:'Austria',region:'Salzburg'},
    {id:4,key:5, country:'Austria',region:'Tyrolia'},
    
]

export function location(){
    return _location
}
export function getLocation(location_id:number|string):ILocation{
    const id = typeof location_id === 'string'? parseInt(location_id) : location_id;
    const location = _location.filter((location:ILocation) => location.id === id )?.[0];
    return location ?? _location[0];
}
export function regions(){
    let regions=[]
    for (let loc of location()){
        regions.push({
            id: loc.id,
            name:loc.region})
    }
    return regions
}
