
let groupImages = new Array();
for (let index = 0; index < 20; index++) {
    groupImages[index] = new Image();
}
groupImages[0].src = "../assets/images/group/Arr.png"
groupImages[1].src = "../assets/images/group/Chefsgrupp-Tot.png"
groupImages[2].src = "../assets/images/group/Direqtionen.png"
groupImages[3].src = "../assets/images/group/missing.png"
groupImages[4].src = "../assets/images/group/missing.png"
groupImages[5].src = "../assets/images/group/koren.png"
groupImages[6].src = "../assets/images/group/bygg.png"
groupImages[7].src = "../assets/images/group/dans.png"
groupImages[8].src = "../assets/images/group/requisita.png"
groupImages[9].src = "../assets/images/group/fotofilm.png"
groupImages[10].src = "../assets/images/group/kostym.png"
groupImages[11].src = "../assets/images/group/lyrique.png"
groupImages[12].src = "../assets/images/group/LOL.png"
groupImages[13].src = "../assets/images/group/Arr.png"
groupImages[14].src = "../assets/images/group/Orqester.png"
groupImages[15].src = "../assets/images/group/manus.png"
groupImages[16].src = "../assets/images/group/Smink_Hår.png"
groupImages[17].src = "../assets/images/group/grafik.png"
groupImages[18].src = "../assets/images/group/webb.png"
groupImages[19].src = "../assets/images/group/spexm.png"


export const groups = [{ "groupName":"Squådis" , "pictureName":groupImages[0]}, 
{ "groupName":"Chefsgruppen" , "pictureName": groupImages[1]}, 
{ "groupName":"Dirrarna" , "pictureName": groupImages[2]}, 
{ "groupName":"Ekonomi" , "pictureName": groupImages[3]}, 
{ "groupName":"Synk" , "pictureName": groupImages[4]}, 
{ "groupName":"Kören" , "pictureName": groupImages[5]}, 
{ "groupName":"Bygg" , "pictureName": groupImages[6]}, 
{ "groupName":"Dans" , "pictureName": groupImages[7]}, 
{ "groupName":"Requisita" , "pictureName": groupImages[8]}, 
{ "groupName":"Fotofilm" , "pictureName": groupImages[9]}, 
{ "groupName":"Kostym" , "pictureName": groupImages[10]}, 
{ "groupName":"Lyrique" , "pictureName": groupImages[11]}, 
{ "groupName":"Ljud & ljus", "pictureName": groupImages[12]}, 
{ "groupName":"Arr" , "pictureName": groupImages[13]}, 
{ "groupName":"Orquestern" , "pictureName": groupImages[14]}, 
{ "groupName":"Manus" , "pictureName": groupImages[15]}, 
{ "groupName":"Sminq" , "pictureName": groupImages[16]}, 
{ "groupName":"Grafik" , "pictureName": groupImages[17]}, 
{ "groupName":"Webb" , "pictureName": groupImages[18]}, 
{ "groupName":"Spexm" , "pictureName": groupImages[19]}];

export function printJason(){
    console.log("Printar fanskapet");
    console.log(groups);
}


export default {printJason, groups};