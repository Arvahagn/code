// ...1 Տրված  են իրարից տարբեր 𝑎,𝑏,𝑐 և 𝑑 թվերը: Կազմել ծրագիր, որը կարտածի տրված թվերից մեծագույնի արժեքը:  
function max(a, b, c, d){
    if(a>b && a>c && a>d){
        return a;
    } if(b>a && b>c && b>d){
        return b;
    } if(c>a && c>b && c>d){
        return c;
    } else{
        return d;
    }
}

// ...2 For ցիկլի  միջոցով արտածել 1-ից 100 հատվածի թվերը, բացառությամբ 8 և 9 վրա բաժանվողների: Թող ցիկլը ընդհատվի  
//երբ հանդիպի միաժամանակ և 6 և 7 վրա բաժանվող թվի: 
function oneToMax(num){
    for(let i = 0; i<num; i++){
        if(i%8 === 0 || i%9 === 0){
            continue;
        } if(i%6===0 && i%7 === 0){
            break;
        } alert (i);
    }
    }


// ...3 Քանի որ JavaScript-ում շաբաթվա օրերը համարակալված են 0-6 թվերով,  switch միջոցով ստանալ ծրագիր, որ այդ միջակայքում 
//մուտքագրված թվի համար կարտածի շաբաթվա տվյալ օրվա տառային տարբերակը: Իսկ եթե թիվը այդ միջակայքից  դուրս է արտածի Error:
switch(week)
    {
        case 0: 
            alert("Monday");
            break;
        case 1: 
            alert("Tuesday");
            break;
        case 2: 
            alert("Wednesday");
            break;
        case 3: 
            alert("Thursday");
            break;
        case 4: 
            alert("Friday");
            break;
        case 5: 
            alert("Saturday");
            break;
        case 6: 
            alert("Sunday");
            break;
        default: 
            alert("Error");
    }

