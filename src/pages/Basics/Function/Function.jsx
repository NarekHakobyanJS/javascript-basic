import React from 'react'
import one from "./img/1.jpg"
import two from "./img/2.jpg"
import three from "./img/3.jpg"
import fore from "./img/4.jpg"
import fife from "./img/5.jpg"
import sex from "./img/6.jpg"
import seven from "./img/7.jpg"
import enee from "./img/8.jpg"
import nane from "./img/9.jpg"
import ten from "./img/10.jpg"
import one1 from "./img/11.jpg"
import one2 from "./img/12.jpg"
import one3 from "./img/13.jpg"
import one4 from "./img/14.jpg"
import one5 from "./img/15.jpg"
import one6 from "./img/16.jpg"
import one7 from "./img/17.jpg"
import one8 from "./img/18.jpg"
import one9 from "./img/19.jpg"
import one10 from "./img/20.jpg"
import one11 from "./img/21.jpg"
import one12 from "./img/22.jpg"
import one13 from "./img/23.jpg"
import one14 from "./img/24.jpg"
import one15 from "./img/25.jpg"

function Function() {
  return (
    <div>
      <h1>Ֆունկցիաներ</h1>
      <p>
        Ընդանրապես մեզ պետք է հաճախ կատարել նույն գործողությունը
        մեր ծրագրի տարբեր հատվածներում
      </p>
      <p>
        Օրինակ, դուք պետք է գեղեցիկ կերպով ցուցադրեք հաղորդագրություն այցելուին ողջունելիս, երբ այցելուն լքում է կայքը կամ որևէ այլ տեղ:
      </p>
      <p>
        որպիսզի կատարենք նույն գործողությունը կոդի տարբեր հատվածներում Օգտագործում ենք Ֆունկցիան
        Ֆունկցիան համարվում է ծրագրի հիմնական կառուցող բլօկներից մեկը
      </p>
      <p>
        Բռաուզերում ներկառուցված ֆունկիցաիների օրինակներ մենք արդեն տեսելենք alert(message), prompt(message, default) և confirm(question). Բայց նաև կարողենք ստեղծել ինքներս Ֆունկցիա .
      </p>
      <h3>Ֆունկցիայի հայտարաում</h3>
      <p>
        Ֆունկցիա ստեղծելու համար մենք օգտագործում ենք ֆունկցաիյի հայտարարաման սինտաքսը
        Օրինկաը ֆունկցիայի հայտարարման
      </p>
      <img src={one} />
      <p>
        Սկզբում գրվում է function հատուկ բառը որից հետո ֆունկցիայի անունը Հետո կլոր փակագծերի մեջ գրվում է պարամետրները տվյալ ֆունկցիայի որոնք բաժանվում են ստորակետով
        վերևում գրված օրինակում պարամետր չկա , և հետո ֆունկցայի կոդը որը նաև անվանվում է Ֆունկցիայի մարմին որը գրվում է ձևավոր փակագծերի մեջ
      </p>
      <img src={two} />
      <p>
        մեր նոր ստեղծված Ֆունկցիան կարող է կանչվել իր անունով showMessage()
      </p>
      <img src={three} />
      <p>
        showMessage() կանչը կաշխատացնի ֆունկցիայի կոդը
        այստեղ մենք կտենենք երկու նամակ

        Այս օրինակը լավ ընդգծում է ֆունկցիայի գաղափարը որը նախատեսված է
        կոդի կրկնումը կրճատելու համար
      </p>
      <h3>Լօկալ փոփոխականեր </h3>
      <p>
        փոփոխակաները որոնք հայտարարված են ֆունկցիայի մարմնում տեսանելի են  միայն այդ ֆունկցիայի մարմնում

      </p>
      <img src={fore} />
      <h3>
        Գլոբալ փոփոխականեր
      </h3>
      <p>
        Ֆունկցիաները հասանելիություն ունեն նաև իրենցից դուրս գտնվող փոփոխականերին
      </p>
      <img src={fife} />
      <p>
        Ֆունկցիաները հասանելիություն ունեն նաև իրենցից դուրս գտնվող փոփոխականերին և կարողեն փոխել նրանց արժեքը
        օրինակ
      </p>
      <img src={sex} />
      <p>
        Գլոբալ փոփոխակաները օգտագործում են այն ժամանակ երբ ֆունկցիայի մարմնում նման անունով փոփոխական հայտարարված չէ

        եթե միաժամանակ փոփոխականը հայտարարվում է ֆունկցիայի ներսում ապա այն փագում է գլոբալ փոփոխականին
        Օրինակ ներքևի կոդում ֆունկցիան օգտագործում է իր լօկալ փոփոխականը userName ը Գլոբալ փոփոխականը կանտեսվի
      </p>
      <img src={seven} />
      <h3>Գլոբալ փոփոխականեր</h3>
      <p>
        փոփոխակաները որոնք հայտարարված են ֆունկցիայից դուրս կոչվում են Գլոբալ փոփոխականեր
        Գլոբալ փոփոխակաները տեսանելի են ցանկացած ֆունկցիայի մարմնում եթե իհարկ է նույն անունով լոկալ փոփոխականը չի ծածկում նրանց
        Ցանկալի է Մինիմումի հասցնել այդ գլոբալ փոփոխակաները
      </p>
      <h3>Արգումենտներ</h3>
      <p>
        մենք կարողենք ֆունկցիային փոփանցել ցանկացած ինֆորմացիա օգտագործելով արգումենտները
        օրինակ ներքևի կոդում ֆունկցիային փոխանցում ենք երկու արգումենտ from և text անունով
      </p>
      <img src={enee} />
      <p>
        երբ ֆունկցիան կանչվում է (*) և (**) այս տողերում նրան փոխանցված արժեքները կլոնավորվում են լօկալ փոփոխակաների մեջ from և text հետո նրանք օգտագործվում են ֆունկցիայի մարմնում
        Ահա ևս մեկ օրինակ մենք ունենք from անունով փոփոխականը և մենք նրան փոխանցում ենք ֆունկցիային Ուշադրություն դարձրեք այն փաստին որ ֆունցիան from ի արժեքը փոխում է Բայց այդ փոփոխությունը տեսանելի չե դրսից
        ֆունկցիան միշտ ստանում է արժեքի կլոնը
      </p>
      <img src={nane} />
      <p>
        արժեքները որը փոխանցվում է որպես պարամետր ֆունցիային նույնպես անվանվոըմ են արգումենտներ
      </p>
      <ul>
        այլ կերպ ասած
        <li>Պարամետրը - դա փոփոխական է որը գրված է փակագծերի մեջ ֆունկցիայի հայտարարման պահին</li>
        <li>Արգումետ - դա արժեքն է որը փոխանցվում է ֆունցիայի կանչի ժամանակ</li>
      </ul>
      <p>
        Մենք հայտարարում ենք ֆունկցիան պարամետրներով հետո կանչում ենք նրան փոխանցելով արգումենտերը
        Նայելով վերևում գրված կոդը կարելի է ասել որ showMessage ֆունկցիան հայտարարվում է երկու պարամետրներով հետո կանրժչվում է այն երկու արգումնետներով
      </p>
      <h3>Default արժեքներ</h3>
      <p>
        Եթե Ֆունկցիայի կանչի ժամանակ արգումենտ չենք փոխանցել ֆունկցիային այդ դեպքում նրա արժեքը դառնում է undefined
        օրինակ վերևում նշված ֆունկցիան showMessage(from, text) կարողե կանչվի միայն մի արգումենտով
      </p>
      <img src={ten} />
      <p>
        Սա չի հանգեցնի սխալի , ֆունկցիայի նման կանչը կտա "*Аня*: undefined"
        կանչի ժամանակ պարամետր text չի փոխանցվել այդ իսկ պատճառով text պարամետրին վերագրվում է undefined արժեքը  text === undefined

        եթե մենք ցանկանում ենք Default արժեք տալ text ին այն պետք է գրենք = նշանից հետո
        Օրինակը ներքևում
      </p>
      <img src={one1} />
      <p>
        հիմա եթե պարամետր text ին չի փոխանցվել նրա արժեքը կլինի "текст не добавлен"
        ներկա պահին "текст не добавлен" ընդամենը տող է բայց նրա փոխարեն կարողե լինել ցանակցած տիպի բարդ արտահայտություն
      </p>
      <img src={one2} />
      <p>
        Default պարամետրի հաշվարկ
        JavaScript-ում default պարամետրերը գնահատվում են ամեն անգամ, երբ ֆունկցիան կանչվում է առանց համապատասխան պարամետրի:

        Վերևի օրինակում AnotherFunction()-ն ընդհանրապես չի կանչվի, եթե նշված է տեքստի պարամետրը:

        Մյուս կողմից, ֆունկցիան ինքնուրույն կկանչվի ամեն անգամ, երբ բացակայում է տեքստը:
      </p>
      <h3>
        Default պարամետրի ձևը JavaScript ի հին վերսիաներում
      </h3>
      <p>
        JavaScript ի հին վերսիաներում Default պարամետրը ֆունկցիայի գույություն չուներ ,
        այդ իսկ պատճառով գոյություն ունեն նրա ալտերնատիվ ձևերը որը կարելի հանդիպես հին Սկրիպտներում

        օրինակ ներքևի կոդում undefined ի ստուգում իրակականցնելը
      </p>
      <img src={one3} />
      <p>
        կամ այսպես || կամ օպերատորի օգնությամբ
      </p>
      <img src={one4} />
      <h3>
        Ալտերնատիվ Default պարամետրները
      </h3>
      <p>
        Երեմն նաև պետք  Default պարամետրները  փոխանցել ոչ թե ֆունկցիայի հայտարարաման պահին այլ ավելի ուշ
        օրինակ ֆունկցաիյի կատարման պահին մենք կարողենք ստուգում իրականացնել պարամետրը undefined ի նկատմամաբ
      </p>
      <img src={one5} />
      <p>
        ժամանակակից բրուզերներում JavaScript դվիժոկը կարող է օգտագործ էլ ?? null միաձուլման օպերատորը
        որը ավելի լավ կլինի օգտագործել քանի որ շատ կեղծ արժեքներ ինչպիսիքեն օրինակ 0 ն այն կնկալի նորմալ
      </p>
      <img src={one6} />
      <h3>Արժեքի վերադարձը</h3>
      <p>
        Ֆունկցիան կարող է վերադարձն էլ արժեք
        որը կփոփանցի նրան կանչողին
        այս օրինակում մենք տեսնում ենք երկու փոփոխակաների գումարման արդյունքի վերադարձը
      </p>
      <img src={one7} />
      <p>
        return հրամանը կարող է լինել ցանկացած վայրում ֆունկցիայի մարմնում
        և երբ կոդը հասնում է այդ տողին որտեղ գրված է return հրամանը Ֆունկցիայի աշխատանքը դադարեցվում է և վերադարձնում է արժեքը այն մասում որտեղ կատարվել է այդ ֆունկցիայի կանչը

      </p>
      <p>
        return կանչը կարող է լինել մի քանի հատ
      </p>
      <img src={one8} />
      <p>
        Կարելի է նաև return գրել առանց արժքի դա կհանգեցնի
        նույնպես ֆունկցիայի դադարեցմանը
      </p>
      <img src={one9} />
      <p>
        Վերևում գրված կոդում եթե checkAge(age) վերադարձնում է false
        showMovie ֆունկցիան չի աշխատացնի alert ֆունցիան
      </p>
      <h3>Ֆունկցիայի արդյունքը կարող է լինել return ով և առանց նրա - undefined </h3>
      <p>
        եթե ֆունկցիան արժեք չի վերադարձնում դա նույն է թե նա կվերադարձնի undefined
      </p>
      <img src={one10} />
      <p>
        return առանց որև է արժեքի հավասարազոր է return undefined:
      </p>
      <img src={one11} />
      <h3>Երբեք տողադարձ չդնեք return ի և իր վերադարձրված արժեքի միջև</h3>
      <p>
        Երկար արտահայտության դիմաց կարող է գայթակղիչ լինել այն դնել մի քանի առանձին տողերի վրա, օրինակ՝
      </p>
      <img src={one12} />
      <p>
        Այս կոդը չի աշխատի քանի որ JavaScript ի ինտերպրետատորը return ից հետո դնում է կետ ստորակետ
        նրա համար այս կոդը կլինի այսպես
      </p>
      <img src={one13} />
      <p>
        այս դեպքում սա դառնում է դատարկ return
        եթե մենք ուզում ենք վերադարձրած արտահայտությունը լինի մի քանի տող պետք է այն սկսել նույն տողից ինչ որ return ը
        Կամ կարողենք այնտեղ տեղադրել բացվող փակագիծ օրինակը ներքևում
      </p>
      <img src={one14} />
      <p>
        և հիմա ամենինչ կաշխատի այնպես ինչպես պետք է
      </p>
      <h3>Ֆունկցիայի անունի ընտրությունը</h3>
      <p>
        Ֆունկցիան դա գործողություն է այդ իսկ պաճառով արժի նրա անունը դնել որպես Բայ,
        այն պետք է լինի կարճ ճիշտ և նկարագրի այդ ֆունկցիան, որպիսզի ծրագրավորողը կարդա կոդը և հասկանա թե ինչ է անում այդ ֆունկցիան
      </p>
      <p>
        Ընդունված է օգտագործ էլ բանավոր նախածանցներ որոնք նկարագրում են գործողություները որը ֆունկցիան պետք է կատարի որից հետո գնում է պարզաբանում
        Սովորաբար Ծրագրավորողները համաձայնվում են այս մոտեցմանը
      </p>
      <p>
        Սովորաբար ֆունկցիան որը սկսվում է "show" բառով նշանակում է ինչ որ բան ցույց տալ
      </p>
      <p>
        օրինակներ
        Ֆունկցիաները որոնք սկսվում են ․․․
        <li>"get…" - վերադարձնում են արժեք</li>
        <li>"calc…" - ինչ որ բանեն հաշվում </li>
        <li>"create…" - ինչ որ բան են ստեղծում </li>
        <li>"check…" - ինչ որ բան են ստուգում և վերադարձնում Բուլիան արժեք</li>
      </p>
      <p>
        նման օրինակների անուները
      </p>
      <img src={one15} />
      <p>
        նախածանցի շնորհիվ առաջին հայցքից ֆունկցիայի անունը կարող է հուշել  թե ինչ է անում նա
      </p>
      <h3>Մի ֆունկցիա մի գործողություն</h3>
      <p>
        Ֆունկցիան պետք է անի այն ինչ ասում է նրա անունը և դա պետք է լինի մի գործողություն
      </p>
      <p>
        երկու կապ չունեցող գործողություններ կանխատեսվում է որ պետք է լինեն երկու ֆունկցիայում եթե նույնիսկ նրանք կանչվում են միաժամանակ
        այդ պարագայում մենք կարողենք ստեղծ էլ երրորդ ֆունկցիան որը կկանչի այդ եկու ֆունկցիաներին
      </p>
      <p>
        մի քանի օրինակներ որը խախտում է այս կանոնը
      </p>
      <p>
        getAge - վատ ընտրություն կլինի, եթե գործառույթը Alert-ը դուրս բերի տարիքի հետ (պետք է միայն վերադարձնի այն)
      </p>
      <p>
        createForm – վատ ընտրություն կլինի, եթե գործառույթը փոփոխի փաստաթուղթը ՝ դրան ձև ավելացնելով (պետք է միայն ձև ստեղծի և վերադարձնի այն):
      </p>
      <p>
        Ֆունկցիայի անունը նաև պետք է լինի կարճ
      </p>
    </div>
  )
}

export default Function