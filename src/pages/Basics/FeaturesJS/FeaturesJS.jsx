import React from 'react'
import one from "./img/1.jpg"
import one2 from "./img/2.jpg"
import one3 from "./img/3.jpg"
import one4 from "./img/4.jpg"
import one5 from "./img/5.jpg"
import one6 from "./img/6.jpg"
import one7 from "./img/7.jpg"
function FeaturesJS() {
  return (
    <div>
      <h1>JavaScript ի Նկարագրություն</h1>
      <p>
        Եկեք համառոտ կրկնենք ուսումնասիրված նյութը և Նշենք առավել "Կարևոր" կետերը
      </p>
      <h3>Կոդի կառուցվածքը</h3>
      <p>
        Հրահանգները բաժանվում են կետ ստորակետով
      </p>
      <img src={one} />
      <p>
        Որպես կանոն, տողադարձը նույնպես մեկնաբանվում է որպես բաժանարար, այդպես էլ կաշխատի:
      </p>
      <img src={one2} />
      <p>
        Սա կոչվում է այսպես ասած ավտոմատ կերպով կետ ստորակետի տեղադրում, բայց այն ոչ միշտ է աշխատում Օրինակ
      </p>
      <img src={one3} />
      <p>
        Ընդհանրապես կետ ստորակետը խորհուրդ է տրվում դնել ամեն հրահանգից հետո
        Կետ ստորակետը պարտադիր չի կոդային բլօկներից հետ այնպիսիք ինչպիսիքեն Ցիկլները
      </p>
      <img src={one4} />
      <p>
        Նույնիսկ եթե մենք դնենք ավելորդ կետ ստորակետ սխալ չենք ունենա այն ուղղակի կանտեսվի
      </p>
      <h3>Խիստ ռեժիմ</h3>
      <p>
        որպիսզի օգտագործենք JavaScript նոր հնարավորությունները բոլոր Սքրիպտները
        խորհուրդ է տրվում գրել "use strict" ի մեջ
      </p>
      <img src={one5} />
      <p>
        Այս հրամանը խորհուրդ է տրվում դնել Սքրիպտի առաջին տողում կամ ֆունկցիայի մարմի սկզբում
      </p>
      <p>
        Առանց" use strict " - ի, կոդը նույնպես գործարկվելու է, բայց որոշ հնարավորություններ կաշխատեն "համատեղելիության ռեժիմում" JavaScript լեզվի հին տարբերակների հետ: Իսկ մեզ նախընտրելի է ժամանակակից պահվածքը։
        JavaScript որոշ հրահանգներ օրինակ Կլասսները Default Միացնում են խիստ ռեժիմը
      </p>
      <h3>Փոփխականեր</h3>
      <p>
        Կարելի է հայտարարել
        <li>let </li>
        <li>const (չփոխվող)</li>
        <li>var (հին ձև)</li>
      </p>
      <p>
        Փոփխակաների անուները պետք է պարունակեն
        <li>Տառեր թվեր, բայց առաջին սիմվոլը չպետք է լինի թիվ </li>
        <li>Սիմվոլներ $ և _  </li>
        <li>Հիերոգրիֆներ այլ լեզուներվ տառեր և այլն </li>
      </p>
      <p>
        Փոփխակաները տիպավորվում են դինամիկ կերպով
        այնտեղ կարողենք պահպանել ղանկացած տիպ
      </p>
      <img src={one6} />
      <p>
        JavaScript ում գոյություն ունեն 8 տվյալների տիպեր
        <li>number - պահպավում են ամբողջ թվերը </li>
        <li>bigint - պահպավում են շատ մեծ թվային արժեքներ</li>
        <li>string - տողերի համար</li>
        <li>boolean - տրամաբանակ տիպ Իրական և կեղծ true/false</li>
        <li>null - միակ արժեքը null է որը նշանակում է դատարկ արժեք կամ արժեքը գոյություն չունի</li>
        <li>undefined -միակ արժեքը undefined, արժեքը հայտարարված չէ</li>
        <li>object symbol - ինֆորմացիայի բարդ ստրուկտուրա </li>
      </p>
      <p>
        typeof օպերատորը վերադարձնում է Փոփխականի որժեքի տիպը Բաղառությամբ երկու ձևի
      </p>
      <img src={one7} />
      <h3>Փոխազդեցություն այցելուի հետ</h3>
      <p>
        մենք գտնվում ենք Բռաուզերում և այդ իսկ պատճառով մեզ հասանելի է նրա ներկառուցված ֆունկցիաները User ի հետ աշխատանքի մտնելու համար
      </p>
      <p>
        prompt(question, [default])
        Հարց է տալիս question և վերադարձնում է այն ինչ օգտագործողը գրի կամ null եթե օգտագործողը սղմում է  «Отмена» կոճակը
      </p>
      <p>
        alert(message)
        ցույց է տալիս message տեքստը
      </p>
      <h3>Օպերատորներ</h3>
      <p>JavaScript ը ունի հետևյալ օպերատորները </p>
      <b>Մաթեմաթիկական</b>
      <p>սովորական * + - /, ինչպես նաև մնացորդից անջատումը % աստիճանի բարձրացումը **</p>
      <p>
        բինարնի պլուս ը միացնում է տողերը իսկ եթե օպեռանդներց մեկը տող է այդ պարագայւոմ մյուս օպեռանդը նույնպես տողային է 
      </p>
    </div>
  )
}

export default FeaturesJS