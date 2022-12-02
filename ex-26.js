// 26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

let alien_color = "yellow";
if(alien_color=="green"){
    console.log("player just earned 5 points for shooting the alien")
}else{
    console.log("player just earned 10 points for shooting the alien")
}

// 2nd version that runs if block
if(alien_color=="yellow"){
    console.log("player just earned 5 points for shooting the alien")
}else{
    console.log("player just earned 10 points for shooting the alien")
}

// 3rd version that runs else block
if(alien_color=="red"){
    console.log("player just earned 5 points for shooting the alien")
}else{
    console.log("player just earned 10 points for shooting the alien")
}
