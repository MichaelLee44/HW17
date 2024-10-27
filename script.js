/*
Michael Kellems
CIT 215
Prof. Kane
Date 10/27/24
*/

let chocs = [
  {
    chocName: "Plain Milk",
    description: "Smooth milk chocolate",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream",
    img: "assets/plain_milk.jpg",
    switched: false
  },
  {
    chocName: "Plain Dark",
    description: "Dark chocolate",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream",
    img: "assets/plain_dark.jpg",
    switched: false
  },
  {
    chocName: "Bailey's Cup",
    description: "Dark chocolate with Bailey's Cream Filling",
    calories: 100,
    ingredients: "Cocoa butter, Milk, Cream, baileys",
    img: "assets/baileys_cup.jpg",
    switched: false
  },
  {
    chocName: "Cappuccino Cup",
    description: "Dark chocolatewith Cappuccino style cream filling",
    calories: 120,
    ingredients: "Cocoa butter, Milk, Cream, Cappuccino fondant",
    img: "assets/cappuccino_cup.jpg",
    switched: false
  },
  {
    chocName: "Nutter Butter",
    description: "Dark chocolate with peanut butter",
    calories: 190,
    ingredients: "Cocoa butter, Milk, Cream, peanut butter",
    img: "assets/nutter_butter.jpg",
    switched: false
  },
  {
    chocName: "Orange Fondant",
    description: "Dark chocolate folded with orange fondant",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, orange peel, orange fondant",
    img: "assets/orange_fondant.jpg",
    switched: false
  },
  {
    chocName: "Pistachio Cup",
    description: "Dark chocolate with nuggets of pistachio",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, chunks of pistachio nut",
    img: "assets/pistachio_diamond.jpg",
    switched: false
  },
  {
    chocName: "Rum Barrel",
    description: "Dark chocolate with a decadent rum filling",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, rum paste and rum flavourings",
    img: "assets/rum_barrel.jpg",
    switched: false
  },
  {
    chocName: "Toffee Crunch",
    description: "Dark chocolate with brittle toffee candy",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, toffee",
    img: "assets/toffee_crunch.jpg",
    switched: false
  },
  {
    chocName: "Plain Supreme",
    description: "Dark chocolate with slivers of milk chocolate",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream",
    img: "assets/plain_hybrid.jpg",
    switched: false
  },
];

function prizeChocolate(){
  $('.card').css("background-color", "white")
  let randomnum = Math.floor(Math.random()*10)+1
  $('#card'+randomnum).css("background-color", "yellow")
  let prizenum = Math.floor(Math.random()*50)+1
  alert("Your prize code is " + prizenum + ". Present it to the cashier to redeem it for a free sample of the highlighted chocolate below.")
}

function determineOpacity(item){

}

function toggleFaqSheet(sheet){
  if(chocs[sheet-1]["switched"] == false){
    $(`.faqsheet${sheet}`).css("opacity", "1")
    chocs[sheet-1]["switched"] = true
  } else{
    $(`.faqsheet${sheet}`).css("opacity", "0")
    chocs[sheet-1]["switched"] = false
  }
}