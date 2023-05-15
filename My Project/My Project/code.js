var price = 0;
var genre;
var username;
var text;
onEvent("usernameInput", "input", function( ) {
  username = getText("usernameInput");
  updateScreen();
});
onEvent("genreInput", "change", function( ) {
  updateScreen();
});
onEvent("upbutton", "click", function( ) {
   if (price < 25) {
     price = price + 5;
   }
  setProperty("priceInput", "text", ("price " + price) + "$");
  playSound("assets/default.mp3", false);
   updateScreen();
});
onEvent("downButton", "click", function( ) {
   if (price > 0) {
     price = price - 5;
   }
  setProperty("priceInput", "text", ("price " + price) + "$");
  playSound("assets/default.mp3", false);
   updateScreen();
});
function updateScreen() {
  genre = getText("genreInput");
  if (price == 0 && genre == "Horror") {
   text = " here are horror games you can buy are YORG.io 3, Stupid Zombies, Swat vs Zombies ,TrollFace Quest: Horror 1, Slendrina Must Die: The House ";
  } else if ((price == 0 && genre == "Action")) {
   text = " here are action games you can buy are Lordz.io., Age of War, Grindcraft, Crazy Shooters 2. ";
  } else if ((price == 5 && genre == "Horror")) {
   text = " here are horror games you can buy are Babysitter bloodbath, power drill massacre, ";
  } else if ((price == 5 && genre == "Action")) {
    text = " here are action games you can buy are Bleed, Rite, Quadron, It Steals";
  } else if ((price == 10 && genre == "Horror")) {
    text = " here are horror games you can buy are shadow gadgets, First bite, Mothered";
  } else if ((price == 10 && genre == "Action")) {
    text = " here are action games you can buy are slay the princess, Fran bow, Jimmy and the pulsating mass ";
  } else if ((price == 15 && genre == "Horror")) {
    text = " here are horror games you can buy are Grapple force Rena, Operation S.T.E.E.L, Haunted ";
  } else if ((price == 15 && genre == "Action")) {
    text = " here are action games you can buy are Lego star wars, God of war, Immortal Fenyx rising ";
  } else if ((price == 20 && genre == "Horror")) {
    text = " here are horror games you can buy are Mother's embrace, S.T.A.L.K.E.R.: Shadow of Chernobyl, Outlast ";
  } else if ((price == 20 && genre == "Action")) {
    text = " here are action games you can buy are Far cry 4, Dishonored, Lego marvel super hero ";
  } else if ((price == 25 && genre == "Horror")) {
    text = " here are horror games you can buy are Calling, Five nights at Freeddy's, resident and Evil 2 ";
  } else if ((price == 25 && genre == "Action")) {
    text = " here are action games you can buy are little nightmares 2 and 4, final fantasy VII, Super Smash Bros";
  }
  setText("textArea", "Hello, " + (username + ("\n" + (text + (" for " + (price + "$"))))));
  
}
