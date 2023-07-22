const books=[
  {
  ISBN:"12345Book",
  title:"Tesla",
  pubDate:"2021-08-05",
  language:"en",
  numPage:"250",
  publication:[1],
  category:['tech','space','education'],
}
]

const author=[
  {id:1,
  author:"MEHAK",
  book:["12345Book","secretbook"],},
  {id:2,
   author:"MEH",
   book:["12345Book"],}
]

const publication=[
  {
  id:1,
  author:"writex",
  book:["12345Book"],
},
  {
  id:2,
  author:"writex2",
  book:[],
}
]

module.exports={books , author , publication};
