import React from 'react'
import one from "./img/1.jpg"
import two from "./img/2.jpg"
import three from "./img/3.jpg"
import fore from "./img/4.jpg"
import fife from "./img/5.jpg"
import sex from "./img/6.jpg"
import seven from "./img/7.jpg"
import ene from "./img/8.jpg"

function ComparisonOperators() {
    return (
        <div>
            <h1>Համեմատության օպերատորներ</h1>
            <p>
                շատ համեմատության օպերատորներ մեզ հայտնի են դպրոցից
                JavaScript ում նրանք գրվում են այսպես

            </p>
            <ul>
                <li>Շատ/Քիչ  a  b, a  b </li>
                <li>Շատ/Քիչ կամ Հավասար  a = b, a = b </li>
                <li>Հավասար է a == b ուշադրություն դարձրեք որ համեմատության համար օգտագործվում է երկու հավասարի նշանը
                    իսկ a = b նշանակում է վերագրում
                </li>
                <li>Հավասար չէ JavaScript ում գրվում է a != b.</li>
            </ul>
            <h3>Համմեատության արդյունքը իրենից իերկայացնում է Լօգիկական տիպ </h3>
            <p>Բոլոր համեմատման օպերատորները վերադարձնում են Լօգիկական տիպ</p>
            <ul>
                <li>true - Նշանակում է այո ճիշտ իրական</li>
                <li>false - Նշանակում է ոչ սուտ սխալ անիրական </li>
            </ul>
            <p>
                օրինակ
            </p>
            <img src={one} />
            <p>
                Համեմատության արդյունքը կարողենք վերագրել փոփխականին այնպես ինչպես մնացած արժեքները
            </p>
            <img src={two} />
            <h3>Տողերի համեմատություն</h3>
            <p>
                Որոշելու համար, թե արդյոք մի տողը մյուսից մեծ է, JavaScript-ն օգտագործում է «այբբենական» կամ «բառագիտական» կարգը։
            </p>
            <p>Այլ կերպ ասած, տողերը համեմատվում են նիշ առ նիշ:</p>

            <img src={three} />
            <p>
                տողերի համեմատման ալգորիթմը բավականին հեշտե
            </p>
            <p>1. Առաջինը համեմատվում են տողի առաջին սիմվոլնեը</p>
            <p>2. Եթե առաջին սիմվոլը առաջին տողի մեծ կամ փոքր է քան առաջին սիմվոլը երկրերդ տողի ուրեմն առաջին տողը մեծ կամ փոքր է համեմատությունը ավարտվում է</p>
            <p>3. Եթե առաջին սիմվոլները հավասար են այդ դեպքում համեմատվում են տողերի երկրորդ սիմվոլները </p>
            <p>4․ Համեմատությունը շարունակվում է այնքան ժամանակ, մինչև տողերից մեկն ավարտվի։ </p>
            <p>5. Եթե ​​երկու տողերն էլ ավարտվում են միաժամանակ, ուրեմն նրանք հավասար են։ Հակառակ դեպքում, երկար տողը համարվում է ավելի մեծ:</p>
            <p>
                Վերոնշյալ օրինակներում «Я» & «A» համեմատությունը կավարտվի առաջին քայլում, մինչդեռ «Коты» և «Кода» տողերը կհամեմատվեն նիշ առ նիշ.
            </p>
            <p>К равна К</p>
            <p>о равна о</p>
            <p>т больше, чем д. На этом сравнение заканчивается. Первая строка больше.</p>

            <h3>Օգտագործվում է Unicode կոդավորումը, այլ ոչ թե իրական այբուբենը</h3>
            <p>
                Վերոնշյալ համեմատության ալգորիթմը նման է բառարաններում և հեռախոսային գրքերում օգտագործվող ալգորիթմին, սակայն դրանց միջև կան տարբերություններ:
            </p>
            <p>
                Օրինակ, JavaScript-ում գործը կարևոր է: Մեծատառ «Ա»-ն հավասար չէ փոքրատառ «ա»-ին: Ո՞րն է ավելի շատ: Փոքրատառ «ա». Ինչո՞ւ։ Քանի որ փոքրատառերն ունեն ավելի մեծ կոդ ներքին կոդավորման աղյուսակում, որն օգտագործում է JavaScript-ը (Յունիկոդ): Լարերի ներքին ներկայացման և դրանց ազդեցության մասին մենք ավելի շատ կխոսենք «Strings» գլխում:
            </p>
            <h3>Տարբեր տիպերի համամտությունը</h3>
            <p>
                Տարբեր տիպերի համամտությունը ժամանակ  JavaScript ը բոլոր տիպերը վերածում է թվի
            </p>
            <img src={fore} />
            <p>
                Լօգիկական արժեքները true դառնում է 1 իսկ false դառնում է 0
            </p>
            <img src={fife} />
            <h3>զվարճալի հետևանք</h3>
            <p>Երկու արժեքները հավասար են</p>
            <p>Նրանցից մեկը true է ինչպես լօգիական արժեք իսկ մյուսը false </p>
            <img src={sex} />
            <p>
                JavaScript-ի տեսանկյունից արդյունքը սպասելի է։ Հավասարությունը փոխակերպում է արժեքները՝ օգտագործելով թվային փոխարկում, այնպես որ «0»-ը դառնում է 0: Մինչդեռ Բուլյանով բացահայտ փոխարկումն օգտագործում է կանոնների այլ շարք:
            </p>
            <h3>Խիստ հավասարում </h3>
            <p>Օգտագործելով սովորական համամտումը == կարող է առաջացնել խնդիրներ Օրինակ նա չի տարբերում 0 ն false ից </p>
            <p>Սա տեղի է ունենում նրա համար քանի որ օպերանդները տարբեր տիպերի վերածվում են թվի == օպերատորը օգատագործելու դեպքում
                և դրա համար դատարկ տողը և false դառնումեն 0
            </p>
            <b>Խիստ հավասարումը === ստուգումը իրականցանու է առանց տիպերը փոխելու </b>
            <p>Այլ կերպ ասած եթե a և b ունեն տարբեր տիպեր ապա ստուգումը a === b միանգամից կվերադարձնի false առանց փորձելու նրանց տիպերը փոխել  </p>
            <p>Նաև կա անհավասարության != և Խիստ անհավասարության !== օպերատորները </p>
            <h3>null և undefined համեմատությունը </h3>
            <p>null և undefined համեմատությունը ուրրիշ արժեքների հետ յուրահատուկ է </p>
            <p>Խիստ հավասարման ժամանակ ===</p>
            <p>Այս արժեքները տարբեր են ինչպես նաև տարբեր են նրանց տիպերը </p>
            <p> null === undefined // false</p>
            <p>սովորական համամատման ժամանակ ==</p>
            <p>Այս արժեքները հավասարեն իրար և հավասար չեն մնացած այլ արժեքներին Սա հատուկ լեզվի կանոն է </p>
            <p>null == undefined // true</p>
            <p>Երբ օգտագործվում են Մաթեմաթիկական օպերատորները </p>
            <p>null/undefined վերեն ածվում թվի null ը դառնում է 0 իսկ undefined NaN</p>
            <h3>Տարորինակ արդյունք երբ համեմատվում են null և 0</h3>
            <img src={seven} />
            <p>
                Մաթեմաթիկական տեսանկյունից սա տարորինակ է Վերջին համամտման արդյունքը ասում է որ  null ը մեծ կամ հավասար է 0 ին
                բայց վերևում համատության արդյունքերը վերադարձնումեն false
            </p>
            <p>
                Պատճառը նա է որ համեմատումը == և քիչ կամ շատ օպերատորները աշխատում են տարբեր ձև
                Համեմատումը null դարձնում է թիվ սարքելով նրան 0
                այդ իսկ Պատճառով 3 ռդ արտահայտությունը իրական է իսկ մնացած երկուսը անիրական
            </p>
            <p>
                Մյուս կողմից ոչ խիստ == դեպքում undefined և null գործում է հատուկ կանոներ
                այդ արժեքները ոչնչի չեն վարածվում նրանք հավասարեն իրար ու էլ ոչինչի հավասար չեն
                այդ Պատճառով null == 0 վերադարձնում է false
            </p>
            <h3>Չհամեմատվող արժեքը undefined</h3>
            <p>
                undefined ը չի համեմատվում ոչինչի հետ
            </p>
            <img src={ene} />
            <p>
                Ինչու է undefined և 0 ի համատումը միշտ false
            </p>
            <p>
                (1) և (2) համեմատություննորը վերադարձնում են false քանի որ undefined վերածվում է NaN ի իսկ
                NaN ը հատուկ թվային արժեք է որը վերադարձնում է false ցանկացած համեմատման ժամանակ
            </p>
            <p>
                Հետագա խնդիրներից խուսափելու համար undefined/null ը աշխատեք չհամամտել իրար հետ
                մի համամտեք այն փոփխակաները որոնք կարողեն ստանալ null/undefined ավելացրեք նրանց ստուգումեր
            </p>
        </div>
    )
}

export default ComparisonOperators