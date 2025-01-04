


const features__section__rightBlock = document.querySelector(".features__section__rightBlock");

const features__section__rightBlockLink = document.querySelectorAll(".features__section__rightBlockLink");

// данные типо из бд
let masFuaturesText = {
    0:"20+ Use Case-based App Pages",
    1:"100+ Components and Widgets",
    2:"Useful Chart Libraries",
    3:"AngularJS Version Included",
    4:"Built on Bootstrap 3",
    5:"Fully Responsive",
    6:"Valid HTML5 + CSS3",
    7:"Free Updates & Support + Documentation",
}

// let masFuaturesImages = {
//     0:"../images/feature-1.png",
//     1:"../images/feature-2.png",
//     2:"../images/feature-3.png",
//     3:"../images/feature-4.png",
//     4:"../images/feature-5.png",
//     5:"../images/feature-6.png",
//     6:"../images/feature-7.png",
//     7:"../images/feature-8.png",
// }

function changeFeatureLink () {
    let keysmasText = Object.keys(masFuaturesText);
    let masHTML = [];
    let b = 0;
    for (let i of keysmasText) {
        masHTML[b] = "<li><a \" class=\"features__section__rightBlockLink\">" + masFuaturesText[i] + "</a></li>";
        b++;
    }
    features__section__rightBlock.innerHTML = masHTML.join("\n");
}

changeFeatureLink();