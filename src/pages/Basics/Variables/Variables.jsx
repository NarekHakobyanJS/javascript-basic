import React from 'react'
import one from "./img/1.jpg"
import two from "./img/2.jpg"
import three from "./img/3.jpg"
import fore from "./img/4.jpg"
import faife from "./img/5.jpg"
import sex from "./img/6.jpg"
import seven from "./img/7.jpg"
import eane from "./img/8.jpg"
import nine from "./img/9.jpg"
import then from "./img/10.jpg"
import one1 from "./img/11.jpg"
import one2 from "./img/12.jpg"
import one3 from "./img/13.jpg"
import one4 from "./img/14.jpg"
import one5 from "./img/15.jpg"
import one6 from "./img/16.jpg"
import one7 from "./img/17.jpg"
import one8 from "./img/18.jpg"
import one9 from "./img/19.jpg"
import hello1 from "./img/hello1.jpg"
import hello2 from "./img/hello2.jpg"

function Variables() {
  return (
    <div>
        <h1>Փոփոխականներ</h1>
        <p>JavaScript 
            ծրագրում մենք հաճախ առնչվում ենք ինֆորմացիայի հետ, օրինակ
            1․ ինտերնետ խանութում - ինֆորմացիան պարունակում է վաճառվող ապրանքի մասին տվյալներ
            2․ Չատ - ինֆորմացիան պարունակում է օգտագործողների տվյալներ և այլն
        </p>
        <p>
            Փոփոխականները օգտագործվում են այդ ինֆորմացիան պահպանելու նպատակով
        </p>
        <h3>Փոփոխականներ</h3>
        <p>
            Փոփոխականները դրանք հստակ անուն ունեցող միջավայրեն ինֆորմացիայի պահելու նպատակով։ 
            մենք կարողենք օգտագործել Փոփոխականներ մարդկանց անուն կամ ցանակացած այլ տվյալ պահպանելու համար
        </p>
        <p>
            Փոփոխականներ ստեղծելու համար JavaScript ում օգտագործվումա let հատուկ բառը
        </p>
        <p>
            ներգևում ցուցադրված օրինակում ստեղվումա կամ հայտարարվումա փոփխական message անունով
        </p>
        <img src={one} />
        <p>
            հիմա կարողենք այնտեղ տեղադրել կամ վերագրել ինֆորմացիա օգտագործելով հավասարության նշանը =:
        </p>
        <img src={two} />
        <p>
            Այս տողը պահպանում է հիշողության մեջ և մենք կարողենք հասանելիություն ստանալ նրան օգտագործելով փոփխականի անունը 
        </p>
        <img src={three} />
        <p>
            ավելի հարմար է փոփխականի հայտարարվումաը և նրա վերագրումը գրել մեկ տողում

        </p>
        <img src={fore} />
        <p>
            Մենք նաև կաողենք հայտարարել մի քանի Փոփոխականներ մեկ տողում
        </p>
        <img src={faife} />
        <p>
            Նման մոտեցումը կարող թվալ կարՃ բայց մենք խորհուրդենք տալիս չօգտագործել նման գրելաձև
            կոդի ավելի հեշտ ընթերնելիուրյան համար ամեն նոր փոփխականը հայտարարեք նոր տողից
        </p>
        <img src={sex} />
        <p>
            Փոփոխականներ կարելի գրել նաև այսպես
        </p>
        <img src={seven} />
        <p>
            կամ նույնիսկ ստորակետը դնելով տողի սկսզբում
        </p>
        <img src={eane} />
        <p>
            Այս բոլոր օրինակները աշխատում են նույն կերպ
        </p>
        <p>
            JavaScripti հին կոդերում մենք կարողենք նաև հանդիպել ուրիշ հատուկ բառի փոփխական հայտարարելու համար var-ին  let ի փոխարեն 
        </p>
        <img src={nine} />
        <p>
           var հատուկ բառը գրեթե նույն ֆունկցիան է կատարում ինչ let-ը նա նույնպես հատարում է փոփխական բայց միքիչ ուրիշ կերպ 
           Հնացած ձևով
           var ի և let ի մեջ կան տարբերություններ բայց այդ մասին կխոսենք ավելի ուշ 
        </p>
        <h3>Օրինակ կյանքից</h3>
        <p>մենք հեշտությամբ կհասկանանք փոփխականի գաղափարը եթե նրան պատկերացնենք ինչպես արկղ որը ունի հատուկ անուն</p>
        <p>օրինակ message փոփխականը կարողենք պատկերացնել ինչպես արկղ որի անունը "message" և նրա արժեքը "Hello!" նրա ներսում </p>
        <img src={hello1} />
        <p>
            մենք կարողենք դնել ցանակացած արժեք արկղի մեջ
            ինչպես նաև փոխել այն ինչքան որ կցանկանաք
        </p>
        <img src={then} />
        <p>
            Արժեքի փոփխման դեպքում հին արժեքը ջնձվում է փոփխականից
        </p>
        <img src={hello2} />
        <p>
            Մենք կարողենք նաև հայտարարել երկու փոփխական և պատճենել նրանցից մեկ արժեքը մյուսի մեջ
        </p>
        <img src={one1} />
        <h3>Կրկնակի հայտարարումը փոփխականի կհանգեցնի սխալի </h3>
        <p>
            Փոփոխականը կարելի հայտարարել միայն մեկ անգամ
            կրկնակի հայտարարումը նույն անունով փոփխականի կհանգեցնի սխալի 
        </p>
        <img src={one2} />
        <p>
            դրա համար փոփխականը հայտարարվում է մեկ անգամ և արդեն օգտագործվում է առանց let բառը գրելու
        </p>
        <h3>Փոփոխականների անվվանումները</h3>
        <p>
        JavaScript-ում կա 2 սահմանափակումներ փոփխականի անուների համար
        1․ Փոփոխականների անվվանումները պետք է պարունակեն միայն տառեր թվեր և սիմվոլներ $ կամ _
        2․  Փոփոխականների անվվանումի առաջին սիմվոլը չպետք է լինի թիվ
        </p>
        <img src={one3} />
        <p>
            եթե փոփխականի անունը պարունակում է մի քանի բառ ընդունված է այն գրել cameCase ով
            այսինքն ամեն հաջորդ բառը սկսվում է մեծատառով օրինակ myVeryLongName
        </p>
        <p>
            հետքրքիր է նաև այն որ '$' և '_' նշաները նույնպես համարվումեն փոփխականի անուն սրանք սովորական սիմվոլներ են ինչպես թվերը և տառերը

        </p>
        <p>
            այս ձևը հասանելի է
        </p>
        <img src={one4} />
        <p>
           փոփխականի սխալ հակտարարման ձևը 
        </p>
        <img src={one5} />
        <h3>APPLE և apple համրվում են տարբեր փոփխականեր</h3>
        <h3>Փոփոխականները կարողենք հայտարարրել նաև ուրիշ լեզուներով նույնիսկ Հիերոգլիֆներով</h3>
        <p>բայց խորհուրդ է տրվում օգտագործել միայն Անգլերեն լեզուն</p>
        <h3>Զբաղված բառեր </h3>
        <p>
            գոյություն ունեն Զբաղված բառեր որոնք չի կարելի օգտագործել որպես փոփխականի անվանում 
            քանի որ այդ բառերը օգտագործումա հենց լեզուն
            օրինակ ։ let var class return function և այլն
        </p>
        <h3>փոփխականի ստեղծումը առանց use strict ի </h3>
        <p>
            Սովորաբար մենք պետքե հայտարարենք փոփխականը մինչ նրան օգտագործելը 
            բայց նախկինում մենք կարողեինք հայտարարել փոփխական առանց let բառը օգտագործելու
            միանգամից գրելով անունը և արժեքը օրինակ number = 5
            այս մոտեցումը հիամյել կաշխատի բայց երբ միացնենք  use strict այս գրելաձը կհանգեցնի սխալի
        </p>
        <img src={one6} />
        <img src={one7} />
        <h3>Հաստատուներ</h3>
        <p>որպիսզի հայտարաենք չփոխվող փոփխականեր այսինք հաստատուններ let ի փոխաևրեն գրեք const բառը</p>
        <img src={one8} />
        <p>փոփխականեր որոնք հայտարարված են const հատուկ բառի օգնությամբ կոչվում են հաստատուններ, նրանց հայտարարելուց հետո չենք կարող փոխել նրանց արժեքը, նման փորձը կհանգեցնի սխալի</p>
        <img src={one9} />
        <p>եթե համոզվածեք որ փոփխականը երբեք չի փոի իռ արժեքը այն հայտարաեք const ով</p>
        <p>կա ընդունված գրելաձը որ գրվում է մեծատառով և կոդի վերևում</p>
        <h3>Մտածեք փոփխակաների ճիշտ անվանումներ</h3>
        <p>փոփխականեր անունը պետք է լինի խելամիտ և հեշտ ընթերնելի</p>
    </div>
  )
}

export default Variables