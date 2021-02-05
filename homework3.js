// ...1 Գրել ֆունկցիա, որը կհաշվի երկու թվերի տարբերության թշվանշանների քանակը(միշտ տարբերությունը դրական թիվ լինի)
function countOfNumber(a, b){
    let difference = 0
    if(a>b){
        difference = a-b;
     } else{difference = b-a}
     let str = difference.toString();
     return str.length;
}



// ...2 Գրել ֆունկցիաներ, որոնցից առաջինը կստուգի արդյոք  մուտքագրված թիվը 25-65 հատվածում է թե ոչ, իսկ երկրորդը կստուգի թիվը պարզ է թե ոչ, պարզ են այն թվերը , 
//որոնք իրենց կամ մեկի վրա են բաժանվում: Գրել կոդ որ կկանչի այս երկու ֆունկցիաներին մուտքագրված թվի համար, եթե երկու պայմաններին  էլ 
//բավարարի թող արտածի <<ճիշտ է>> բառը, իսկ եթե գոնե մեկին չի բավարարում արտածի սխալ է բառը:
function f(num){
    if(verify(num) === true && simple(num) === false){
        alert('Ճիշտ է')
    } else{
        alert('Սխալ է')
    }

    function verify(num){
     if(num>25 && num< 65){
         return true
     } else {
         return false
        }
 }

    function simple(num){
    let isSimple = true;
    for(let i = 2; i<=num/2; i++){
        if(num%i === 0){
            isSimple = false;
            break;
        } 
    }
        return isSimple;
}
}


// ...3 Գրել ֆունկցիա , որը կստուգի արդյուք  օբյեկտը դատարակ է թե ոչ:
function check(obj){
    for(let key in obj){
        if(key === undefined){
            return 'datark'
        } else{
            return 'datark che'
        }
    }
    }




// ...4 Կա օբեկտ  box անունով, որը ունի   հատկություններ big 250 արժեքով, middle 400 արժեքով  և small 350 աժեքով:
// Գրել ֆունկցիա որը կհաշվի այս հատկությունների աժեքների գումարը:
let obj = {
    big: 250,
    middle: 400,
    small: 350
}

function sumOfValues(obj){
    let sum = 0;
    for(let values in obj){
        sum = Object.values(obj);
        delete Object.values(obj);
    }
    let suma = 0;
    for(let i = 0; i<sum.length; i++){
        suma+=sum[i];
    }
    return suma;
}




// ...5 Ստեղծեք մարդ օբյեկտ: Այն պետք է ունենա անուն, ազգանուն, սեռ և տարիք հատկությունները: Ստեղծեք մեթոդ, որը կախված նրանից թե տվյալ մարդը ինչ սեռի 
// ներկայացուցիչ է և որ տարիքային խմբին է պատկանում թող արտածի համապատասխան թեքստը:

//  ➢ Եթե նա կին է  
//    o մեծ  63-ից, ապա արտածում է ՙՙնա տատիկ է՞՞: 
//    o Եթե 17-63 տարեկան է, ապա արտածում է ՙՙնա աշխատող է՞՞:
//    o Եթե 0-17, ապա  արտածում է ՙՙնա փոքր աղջիկ է՞՞: 
//  ➢ Եթե նա տղամարդ է 
//    o մեծ 65-ից, ապա արտածում է  ՞՞նա պապիկ է՞՞:
//    o Եթե 17-65 տարեկան է, ապա արտածում է  ՞՞նա աշխատող է՞՞: 
//    o Եթե 0-17, ապա  արտածում է ՞՞նա փոքր տղա է՞՞: 

//  Մինչև այս մեթոդը կանչելը այցելուն կարող է prompt-ով փոխել  սեռը և տարիքը կամ թողնել նույնը, որից հետո կիմանա իր կարգավիճակը:

let people = {
    name: 'Vahagn',
    surname: 'Stepanyan',
    sex: 'man',
    age: 23
}
function decide(obj){
    if(obj.sex === 'woman'){
        if(obj.age > 63){
            alert('Նա տատիկ է')
        } else if(obj.age > 17 && obj.age < 63){
            alert('Նա աշխատող է')
        } else if(obj.age < 17){
            alert('Նա փոքր աղջիկ է')
        } 
    } if(obj.sex === 'man'){
        if(obj.age > 65){
            alert('Նա պապիկ է')
        } else if(obj.age > 17 && obj.age < 65){
            alert('Նա աշխատող է')
        } else if(obj.age < 17){
            alert('Նա փոքր տղա է')
        } 
    } 
    return;
}