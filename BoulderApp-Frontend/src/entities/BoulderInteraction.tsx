interface IBoulderInteraction {
    boulder_id:string,   
    user_id:string, 
    title: string,
    comment:string,
    icon: string,
    created: Date,
}

const BOULDER_INTERACTION_DATA:IBoulderInteraction[] = [
    {
    boulder_id:'bd7acdd5-3ad53abb28ba',   
    user_id:'', 
    title: 'Great Boulder',
    comment:'',
    icon: 'hand-rock-o',
    created: new Date(),
  },
  {
    boulder_id:'bd7acdd5-3ad53abb28ba',
    user_id:'', 
    title: 'What a rook',
    comment:'',
    icon: 'dumbbell',
    created: new Date(),
  },
  {
    boulder_id:'bea-c1b1-4as6c2-aeasdfd5-3ad53abb28ba',
    user_id:'', 
    title: 'So cute',
    comment:'',
    icon: 'dog',
    created: new Date(),
  },
  
  {
    boulder_id:'bea-c1b1-4as6c2-aeasdfd5-3ad53abb28ba',
    user_id:'', 
    title: 'Yes I did it',
    comment:'',
    icon: 'flag-checkered',
    created: new Date(),
  }
]

const getCurrentBoulderInteraction=(boulder_id:string, user_id:string) : IBoulderInteraction[]=>{
    return BOULDER_INTERACTION_DATA.filter(interaction => interaction.boulder_id === boulder_id && interaction.user_id=== user_id )
}
export default getCurrentBoulderInteraction;

