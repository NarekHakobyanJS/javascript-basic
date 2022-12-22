import React from 'react';
import one from "./img/1.jpg";
import two from "./img/2.jpg";
import three from "./img/3.jpg";
import fore from "./img/4.jpg";

function Hello() {
  return (
    <div>
      <h1>Բարև աշխարհ</h1>
      <h3>Տեգ «script»</h3>
      <p>
      Ծրագիրը որը գրվածա JavaScript-ով կարղենք դնել HTML-դոկումենտի  
      ցանկացած վայրում
      օրինակ
      </p>
      <img src={one} />
      <p>
      script Թեգը իր մեջ պահում է JavaScript կոդ որը կկատարվի այն ժամանակ երբ բրաուզերը աշխատացնի այն
      </p>
      <p>
      script Թեգը ունի մի քանի ատրիբուտն էր որոնք հաճախ չեն օգտագործվում 
      </p>
      <b>ատրիբուտ type ։ script type=</b>
      <p>
      HTML ի հին ստանդարտներում  HTML, HTML4, ում պարտադիր եր այս ատրիբուտը script թեգում
      սովորաբար նրա արժեքը type="text/javascript", ներկա պահին սա արդեն պարտադիր չէ 
      HTML ի նոր ստանդարտում այս ատրիբուի գաղափարը լիովին փոխվել է 
      հիմա այն կարող է օգտագործվել javascript ի մոդուլներում
      </p>
      <b>ատրիբուտ language ։ script language=</b>
      <p>
        այս ատրիբուի արժեքը պետքա նշեր այն Ծրագրավորման լեզուն որով գրված է այդ script-ը 
        բայց քանի որ JavaScript default է այս ատրիբուտը հարկավոր չէ
      </p>
      <h3>Արտաքին script</h3>
      <p>
        Երբ JavaScript-ի կոդը մեծանում է այն կարողենք գրել առանձին ֆայլում
        այդ script ֆայլը կարողենք միացնել HTML ին src ատրիբուտի միջոցով
      </p>
      <img src={two} />
      <p>
      այստեղ /path/to/script.js ճանապարհն է ցույց տալիս դեպի այդ ֆայլը
      նաև եթե script ֆայլը գտնվում է նույն հարդության վրա ինչ HTML ֆայլը միացումը կլինի այսպես
      src="script.js" կամ src="./script.js"
      Նաև կարղենք որպես ատրիբուտ նշել URL հասցեն 
      script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"
      </p>
      <p>
        մի քանի script միացնելու համար օգտագործվում են մի քանի թեգեր
      </p>
      <img src={three} />
      <p>
        Ըդունված է որ միայն փոքր script երնեն գրվում HTML ֆայլում 
        իսկ ավելի մեծ և բարդ script երը առանձին ֆայլում առանձին ֆայլերում գրելու օգուտը նա է 
        որ բռաուզերը առանձին կքաշի այդ ֆայլը և կպահի քեշի մեջ 
      </p>
      <p>
        ուրիշ էջերը որնք նույնպես միացնում են այդ script կարողեն այն վերցնել քեշից 
        առանց ծանրաբեռնելու տրաֆիկը 
      </p>
      <p>
        եթե script ում կա src ատրիբուտը ուրեմն իրաուք չկա script ի ներսում գրել կոդ
      </p>
      <img src={fore} />
      <p>
        պետք է ընտրել կամ արտաքին script ը script src="…" կամ scriptի ներսում գրել կոդը
      </p>
    </div>
  )
}

export default Hello