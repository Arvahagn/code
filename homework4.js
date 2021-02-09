// ...1 Գրել կոդ , որը կստուգի մուտքագրված է արդյոք թիվ և եթե թիվ է այդ թվից քառակուսի արմատ կհանի:
let mutq = +prompt('Is number', 1);
if(typeof(mutq) === 'number'){
    alert(Math.sqrt(mutq))
}




// ...2 Պատահական 5 թիվ գեներացնել 0-10 տիրույթում  այնպես որ , 0-5 տիրույթի թվերը կլորանան դեպի վերև իսկ 5-10 տիրույթի թվերը դեպի ներքև
// և արտածել պատահական թիվը և կլորացած թիվը :
for(let i = 0; i<5; i++){
    let random = Math.random() * 10;
    if(random < 5){
        alert(random)
        alert(Math.ceil(random))
    } if(random > 5){
        alert(random);
        alert(Math.floor(random))
    }
}

// ...3 Գրել ֆունկցիա, որը տրված բառի վերջին տառը կդարձնի մեծատառ:
function upper(str){
    let str1 = '';
    for(let i = 0; i< str.length-1; i++){
        str1 = str1.concat(str[i]) 
    } str1 = str1.concat(str[str.length-1].toUpperCase());
    alert(str1)
}



// ...4 Գրել Ֆունկցիա, որ մուտքագրված բառից կարտածի միայն զույգ ինդեքս ունեցող տառերը: Օրինակ barev կդառնա brv
function even(str){
    let str1 = '';
    for(let i = 0; i<str.length; i++){
        if(i%2 === 0){
            str1 = str1.concat(str[i])
        }
    } return str1;
}



// ...5 Գրել ծրագիր , որը Prompt պատուհանի title-ում կգեներացնի 5 նշանոց կոդ տառերից և 
// թվերից կազմված և եթե այցելուն ճիշտ հավաքի այդ կոդը prompt պատուհանում և հաստատի ապա alert անի ճիշտ է, այլապես alert անի սխալ է:
function random(num){
    let someText = 'asdhbkcascviAKeGRkvWEcCF';
    let testText = '';
    for(let i = 0; i<num; i++){
debugger;
        let index = someText.length-1-i;
        testText+= someText[index];
    } return testText;
}

let finalText = random(5)
let entered = prompt('Enter true code' + ' ' + finalText);
if(finalText === entered){
    alert('true')
} else{
alert('false')
};