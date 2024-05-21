/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// allNFTs will store all the Objects of NFTs 
let allNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,value,color) {
    let _id = new Date().getTime() + "" + allNFTs.length;
    allNFTs.push({_id,name,value,color});
    console.log("Your NFT is Listed Successfully. Your NFT_ID is "+ _id + ".\n");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let nftObj of allNFTs){
        console.log("NFT_ID --> " + nftObj._id);
        console.log("NFT_Name --> " + nftObj.name);
        console.log("NFT_Value --> " + nftObj.value);
        console.log("NFT_Color --> " + nftObj.color);
        console.log("-------------------------------------");
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number of NFTs we have minted is " + allNFTs.length);
}



// call your functions below this line
mintNFT("Nitin",299,"Green");
mintNFT("Manish",399,"Blue");
mintNFT("Harish",499,"Orange");
mintNFT("Kamlesh",599,"Yellow");
listNFTs();
getTotalSupply();


