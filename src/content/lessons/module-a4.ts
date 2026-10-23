import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "a22-prepositions-basics",
    moduleId: "A",
    title: "Basic Prepositions",
    titleMm: "ဝိဘတ် အခြေခံ",
    level: "A2",
    minutes: 18,
    summaryLine:
      "in, on, at, under, between စသည့် နေရာ ဝိဘတ်များကို ပုံဆောင်စိတ်ကူးဖြင့် မှတ်သားပြီး ဝါကျများတွင် မှန်ကန်စွာ သုံးနည်း။",
    objectives: [
      "နေရာ ဝိဘတ် ၈ မျိုးကို မှန်ကန်စွာ သုံးနိုင်မည်။",
      "in/on/at ၏ ကွာခြားချက်ကို ရှင်းပြနိုင်မည်။",
      "ဝိဘတ် အမှားများကို ပြင်နိုင်မည်။",
    ],
    vocab: [
      { en: "between", mm: "အကြား (နှစ်ခုကြား)", ipa: "bɪˈtwiːn", pos: "preposition", example: "The bank is between the school and the market.", exampleMm: "ဘဏ်သည် ကျောင်းနှင့် ဈေး အကြား ရှိသည်။", topic: "prepositions", level: "A2" },
      { en: "opposite", mm: "ဆန့်ကျင်ဘက် (မျက်နှာချင်းဆိုင်)", ipa: "ˈɒpəzɪt", pos: "preposition", example: "The café is opposite the hospital.", exampleMm: "ကော်ဖီဆိုင်က ဆေးရုံနှင့် မျက်နှာချင်းဆိုင် ရှိသည်။", topic: "prepositions", level: "A2" },
      { en: "next to", mm: "ဘေးတွင်", ipa: "nekst tuː", pos: "preposition", example: "She sat next to me.", exampleMm: "သူမ ငါ့ဘေးတွင် ထိုင်ခဲ့သည်။", topic: "prepositions", level: "A2" },
      { en: "inside", mm: "အတွင်းတွင်", ipa: "ɪnˈsaɪd", pos: "preposition", example: "The keys are inside the bag.", exampleMm: "သော့များက အိတ်ထဲတွင် ရှိသည်။", topic: "prepositions", level: "A2" },
    ],
    sections: [
      {
        heading: "နေရာ ဝိဘတ်များ",
        body: [
          "in သည် ပုံး/အခန်း/မြို့/နိုင်ငံ ကဲ့သို့ အတွင်းပိုင်း ရှိသည့် နေရာအတွက် သုံးသည် — in the box, in the room, in Yangon, in Myanmar။",
          "on သည် မျက်နှာပြင် ပေါ်တွင် ရှိခြင်းအတွက် သုံးသည် — on the table, on the wall, on the floor။ လမ်း အမည်များတွင်လည်း on ကို သုံးသည် — on Bogyoke Road။",
          "at သည် တိကျသော အမှတ်/နေရာအတွက် သုံးသည် — at the door, at the bus stop, at home, at work, at the corner။",
        ],
        table: {
          headers: ["ဝိဘတ်", "အဓိပ္ပာယ်", "ဥပမာ"],
          rows: [
            ["under", "အောက်တွင်", "under the chair"],
            ["above / over", "အပေါ်တွင်", "above the clouds"],
            ["behind", "နောက်တွင်", "behind the house"],
            ["in front of", "ရှေ့တွင်", "in front of the school"],
            ["between", "နှစ်ခုကြား", "between two shops"],
            ["among", "အများကြား", "among friends"],
          ],
        },
      },
      {
        heading: "in the morning နှင့် at night",
        body: [
          "အချိန် ဝိဘတ်များတွင် ခြွင်းချက် အနည်းငယ် ရှိသည် — in the morning, in the afternoon, in the evening သို့သော် at night။",
          "အိမ်၊ အလုပ်၊ ကျောင်း ကဲ့သို့ နေ့စဉ် သွားလေ့ရှိသည့် နေရာများတွင် article မပါဘဲ at/in ကို သုံးသည် — at home, at work, at school, in bed။",
          "ရွေ့လျားမှု ပြသည့် ဝိဘတ်များမှာ to (သို့), from (မှ), into (ထဲသို့), out of (အပြင်သို့), through (ဖြတ်၍) ဖြစ်သည်။",
        ],
      },
    ],
    examples: [
      { en: "The cat is under the table.", mm: "ကြောင်က စားပွဲ အောက်တွင် ရှိသည်။" },
      { en: "My office is on the third floor.", mm: "ငါ့ရုံးက တတိယထပ်တွင် ရှိသည်။" },
      { en: "We met at the bus stop in front of the market.", mm: "ဈေးရှေ့ ဘတ်စ်ကားမှတ်တိုင်တွင် တွေ့ခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "I am in home.", right: "I am at home.", why: "at home သည် ပုံသေ အသုံးအနှုန်း ဖြစ်သည်။" },
      { wrong: "The book is in the table.", right: "The book is on the table.", why: "စားပွဲမျက်နှာပြင် ပေါ်တွင် ရှိသဖြင့် on။" },
    ],
    guided: [
      { type: "mcq", prompt: "The pen is ___ the box.", promptMm: "ဝိဘတ် ရွေးပါ။", options: ["in", "on", "at", "to"], answer: 0, explanation: "အတွင်းပိုင်း → in။", topic: "prepositions" },
      { type: "mcq", prompt: "I will meet you ___ the cinema.", promptMm: "ဝိဘတ် ရွေးပါ။", options: ["in", "on", "at", "under"], answer: 2, explanation: "တိကျသော နေရာ → at။", topic: "prepositions" },
      { type: "fill", prompt: "The pharmacy is ___ the bank and the school.", promptMm: "ဝိဘတ် ဖြည့်ပါ။", answers: ["between"], explanation: "နှစ်ခုကြား → between။", topic: "prepositions" },
      { type: "order", prompt: "Arrange the sentence.", promptMm: "စီပါ။", tokens: ["is", "The", "next", "shop", "to", "the", "station"], answer: "The shop is next to the station", explanation: "next to + နေရာ။", topic: "prepositions" },
    ],
    independent: [
      { type: "mcq", prompt: "She arrived ___ the airport at six.", promptMm: "ဝိဘတ် ရွေးပါ။", options: ["at", "in", "on", "to"], answer: 0, explanation: "အမှတ်/နေရာ → at the airport။", topic: "prepositions" },
      { type: "fill", prompt: "The cat jumped ___ the box. (အထဲသို့)", promptMm: "ဝိဘတ် ဖြည့်ပါ။", answers: ["into"], explanation: "ရွေ့လျားမှု → into။", topic: "prepositions" },
      { type: "correct", prompt: "Correct: I will see you in Monday.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I will see you on Monday.", "I will see you on Monday"], explanation: "ရက်အတွက် on။", topic: "prepositions" },
      { type: "translate", prompt: "Translate: ကျွန်တော့်အိမ်က စာသင်ကျောင်းနဲ့ မျက်နှာချင်းဆိုင်ပါ။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["My house is opposite the school.", "My home is opposite the school.", "My house is across from the school."], explanation: "opposite + နေရာ။", topic: "prepositions" },
    ],
    review: [
      { q: "in, on, at ကို နေရာအတွက် ဘယ်လို ခွဲမလဲ။", a: "in = အတွင်းပိုင်း (in the room)၊ on = မျက်နှာပြင် (on the table)၊ at = တိကျသော အမှတ် (at the door)။" },
      { q: "အချိန် ဝိဘတ် ခြွင်းချက် ဥပမာ ပေးပါ။", a: "in the morning/afternoon/evening သို့သော် at night။" },
    ],
    summary: [
      "in/on/at သည် အတွင်းပိုင်း/မျက်နှာပြင်/တိကျသော အမှတ် ကို ကိုယ်စားပြုသည်။",
      "at home, at work, at school ကဲ့သို့ ပုံသေ အသုံးအနှုန်းများ ရှိသည်။",
      "ရွေ့လျားမှုအတွက် to, into, out of, through ကို သုံးသည်။",
    ],
    mastery: [
      "ဝိဘတ် ကွက်လပ် ၁၀ ခုတွင် ၈ ခု မှန်ကန်စွာ ဖြည့်နိုင်သည်။",
      "မိမိ ပတ်ဝန်းကျင်အကြောင်း ဝိဘတ် ပါသော ဝါကျ ၅ ခု ရေးနိုင်သည်။",
    ],
    topics: ["prepositions", "prepositions of place"],
  },
  {
    id: "a23-adjectives-basics",
    moduleId: "A",
    title: "Adjectives and Word Order",
    titleMm: "နာမဝိသေသန နှင့် အစဉ်",
    level: "A2",
    minutes: 18,
    summaryLine:
      "နာမဝိသေသနများကို နာမ်ရှေ့တွင် မည်သည့် အစဉ်အတိုင်း ထားရသည်ကို လေ့လာပြီး ဖော်ပြချက် ဝါကျများ ဖွဲ့နည်း။",
    objectives: [
      "နာမဝိသေသန အစဉ် (opinion–size–age–colour) ကို သိမည်။",
      "be ကြိယာ နောက်တွင် နာမဝိသေသန သုံးနိုင်မည်။",
      "-ed နှင့် -ing နာမဝိသေသန ကွာခြားချက်ကို နားလည်မည်။",
    ],
    vocab: [
      { en: "comfortable", mm: "သက်တောင့်သက်သာ ရှိသော", ipa: "ˈkʌmftəbl", pos: "adjective", example: "This chair is very comfortable.", exampleMm: "ဒီကုလားထိုင်က အလွန် သက်တောင့်သက်သာ ရှိသည်။", topic: "adjectives", level: "A2" },
      { en: "crowded", mm: "လူထူထပ်သော", ipa: "ˈkraʊdɪd", pos: "adjective", example: "The market is crowded on Sundays.", exampleMm: "တနင်္ဂနွေနေ့များတွင် ဈေးက လူထူသည်။", topic: "adjectives", level: "A2" },
      { en: "boring", mm: "ငြီးငွေ့ဖွယ်", ipa: "ˈbɔːrɪŋ", pos: "adjective", example: "The film was boring.", exampleMm: "ဇာတ်ကားက ငြီးငွေ့ဖွယ် ကောင်းသည်။", topic: "adjectives", level: "A2" },
      { en: "bored", mm: "ငြီးငွေ့နေသော (ကိုယ်တိုင်)", ipa: "bɔːd", pos: "adjective", example: "The children were bored.", exampleMm: "ကလေးများ ငြီးငွေ့နေခဲ့သည်။", topic: "adjectives", level: "B1" },
    ],
    sections: [
      {
        heading: "နာမဝိသေသန အစဉ်",
        body: [
          "နာမဝိသေသန နှစ်ခုထက် ပိုတွဲသည့်အခါ အစဉ်သည် အရေးကြီးသည်။ ပုံမှန် အစဉ်မှာ opinion (ထင်မြင်ချက်) → size (အရွယ်) → age (အသက်/သက်တမ်း) → shape (ပုံသဏ္ဌာန်) → colour (အရောင်) → origin (ဇာစ်မြစ်) → material (ပစ္စည်း) → purpose (ရည်ရွယ်ချက်) ဖြစ်သည်။",
          "'a beautiful small old wooden table' ဟု ပြောသည်။ 'a wooden old small beautiful table' သည် မှားသည်။ နေ့စဉ် စကားတွင် နာမဝိသေသန နှစ်ခု သုံးခုထက် ပိုတွဲခြင်း ရှားသည်။",
          "နာမဝိသေသနသည် ကတ္တားနေရာတွင်လည်း ရပ်နိုင်သည် — 'The soup is hot.' ဤအခါ be, look, feel, seem, taste ကဲ့သို့ ကြိယာများ နောက်တွင် လာသည်။",
        ],
        table: {
          headers: ["အစဉ်", "အမျိုးအစား", "ဥပမာ"],
          rows: [
            ["1", "opinion", "lovely, terrible"],
            ["2", "size", "big, tiny"],
            ["3", "age", "new, old"],
            ["4", "colour", "red, black"],
            ["5", "material", "wooden, cotton"],
          ],
        },
      },
      {
        heading: "-ed နှင့် -ing",
        body: [
          "-ing နာမဝိသေသနသည် အရာ/အခြေအနေ၏ သဘောကို ပြသည် — 'The film is boring.' (ဇာတ်ကားက ငြီးငွေ့ဖွယ်)။",
          "-ed နာမဝိသေသနသည် လူ၏ ခံစားချက်ကို ပြသည် — 'I am bored.' (ငါ ငြီးငွေ့နေသည်)။ ထို့ကြောင့် 'I am boring.' သည် 'ငါဟာ ငြီးငွေ့ဖွယ် လူ' ဟု အဓိပ္ပာယ်ထွက်သည်။",
          "အလားတူ အတွဲများ — interesting/interested, exciting/excited, tiring/tired, confusing/confused။",
        ],
      },
    ],
    examples: [
      { en: "She bought a lovely little old cottage.", mm: "သူမ ချစ်စရာကောင်းပြီး သေးငယ်သော အိမ်ဟောင်းလေး တစ်လုံး ဝယ်ခဲ့သည်။" },
      { en: "The exam was difficult, so the students were worried.", mm: "စာမေးပွဲက ခက်ခဲသဖြင့် ကျောင်းသားများ စိုးရိမ်နေခဲ့သည်။" },
      { en: "I am interested in history, but the lecture was boring.", mm: "သမိုင်းကို စိတ်ဝင်စားသည်၊ သို့သော် ဟောပြောချက်က ငြီးငွေ့ဖွယ် ကောင်းသည်။" },
    ],
    mistakes: [
      { wrong: "I am boring in this class.", right: "I am bored in this class.", why: "လူ၏ ခံစားချက်အတွက် -ed ကို သုံးသည်။" },
      { wrong: "a red big car", right: "a big red car", why: "အရွယ်သည် အရောင် ရှေ့တွင် လာသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Choose the correct order.", promptMm: "မှန်ကန်သည့် အစဉ် ရွေးပါ။", options: ["a small black bag", "a black small bag", "a bag small black", "small a black bag"], answer: 0, explanation: "size → colour → နာမ်။", topic: "adjectives" },
      { type: "mcq", prompt: "The lesson was ___ , so I fell asleep.", promptMm: "ရွေးပါ။", options: ["bored", "boring", "bore", "boringly"], answer: 1, explanation: "အရာ၏ သဘော → -ing။", topic: "adjectives" },
      { type: "fill", prompt: "I was ___ in the film. (interest)", promptMm: "မှန်ကန်သည့် ပုံစံ ဖြည့်ပါ။", answers: ["interested"], explanation: "လူ၏ ခံစားချက် → interested။", topic: "adjectives" },
      { type: "correct", prompt: "Correct: She has a beautiful long dress red.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["She has a beautiful long red dress.", "She has a beautiful long red dress"], explanation: "opinion → size → colour → နာမ်။", topic: "adjectives" },
    ],
    independent: [
      { type: "mcq", prompt: "The news was very ___ .", promptMm: "ရွေးပါ။", options: ["surprised", "surprising", "surprise", "surprises"], answer: 1, explanation: "အရာ/သတင်း၏ သဘော → surprising။", topic: "adjectives" },
      { type: "fill", prompt: "My brother felt ___ after the long walk. (tire)", promptMm: "-ed/-ing ဖြည့်ပါ။", answers: ["tired"], explanation: "လူ၏ ခံစားချက် → tired။", topic: "adjectives" },
      { type: "order", prompt: "Arrange the words.", promptMm: "စီပါ။", tokens: ["an", "we", "old", "house", "bought"], answer: "we bought an old house", explanation: "an + age + နာမ်။", topic: "adjectives" },
      { type: "translate", prompt: "Translate: ဒီအခန်းက သန့်ရှင်းပြီး လင်းလက်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["This room is clean and bright.", "The room is clean and bright.", "This room is clean and bright"], explanation: "be + နာမဝိသေသန နှစ်ခု။", topic: "adjectives" },
    ],
    review: [
      { q: "နာမဝိသေသန အစဉ်ကို အတိုချုံး ပြောပါ။", a: "opinion → size → age → shape → colour → origin → material → purpose ဖြစ်သည်။" },
      { q: "-ed နှင့် -ing ကို ဘယ်လို ခွဲမလဲ။", a: "-ing သည် အရာ၏ သဘောကို ပြသည် (boring film)။ -ed သည် လူ၏ ခံစားချက်ကို ပြသည် (bored student)။" },
    ],
    summary: [
      "နာမဝိသေသန အစဉ်သည် opinion → size → age → colour → material ဖြစ်သည်။",
      "be/look/feel နောက်တွင် နာမဝိသေသန ရပ်နိုင်သည်။",
      "-ing = အရာ၏ သဘော၊ -ed = လူ၏ ခံစားချက်။",
    ],
    mastery: [
      "နာမဝိသေသန နှစ်ခု တွဲသည့် ဝါကျ ၈ ခုတွင် ၇ ခု အစဉ်မှန်ကန်သည်။",
      "-ed/-ing ကို မှန်ကန်စွာ ရွေးသည့် ဝါကျ ၆ ခု ရေးနိုင်သည်။",
    ],
    topics: ["adjectives", "word order", "participles"],
  },
  {
    id: "a24-adverbs-of-frequency",
    moduleId: "A",
    title: "Adverbs of Frequency",
    titleMm: "ဖြစ်ခြင်း အကြိမ်အရေအတွက် ကြိယာဝိသေသန",
    level: "A2",
    minutes: 15,
    summaryLine:
      "always, usually, often, sometimes, never စသည့် ကြိယာဝိသေသနများ၏ နေရာနှင့် အသုံးကို လေ့ကျင့်သည်။",
    objectives: [
      "အကြိမ်အရေအတွက် ကြိယာဝိသေသန ၆ မျိုးကို အစဉ်လိုက် သိမည်။",
      "ဝါကျအတွင်း ၎င်းတို့၏ နေရာကို မှန်ကန်စွာ ထားနိုင်မည်။",
      "အလေ့အထ အကြောင်း ပြောနိုင်မည်။",
    ],
    vocab: [
      { en: "always", mm: "အမြဲ", ipa: "ˈɔːlweɪz", pos: "adverb", example: "She always arrives on time.", exampleMm: "သူမ အမြဲ အချိန်မှီ ရောက်သည်။", topic: "adverbs", level: "A1" },
      { en: "usually", mm: "များသောအားဖြင့်", ipa: "ˈjuːʒuəli", pos: "adverb", example: "I usually walk to work.", exampleMm: "ကျွန်တော် များသောအားဖြင့် အလုပ်သို့ လမ်းလျှောက် သွားသည်။", topic: "adverbs", level: "A1" },
      { en: "sometimes", mm: "တစ်ခါတစ်ရံ", ipa: "ˈsʌmtaɪmz", pos: "adverb", example: "We sometimes eat out on Fridays.", exampleMm: "သောကြာနေ့များတွင် တစ်ခါတစ်ရံ အပြင် ထွက်စားသည်။", topic: "adverbs", level: "A1" },
      { en: "rarely", mm: "ရှားရှားပါးပါး", ipa: "ˈreəli", pos: "adverb", example: "He rarely watches television.", exampleMm: "သူ ရုပ်မြင်သံကြား ရှားရှားပါးပါး ကြည့်သည်။", topic: "adverbs", level: "A2" },
    ],
    sections: [
      {
        heading: "အကြိမ်အရေအတွက် အစဉ်",
        body: [
          "always (၁၀၀%) → usually (၉၀%) → often (၇၀%) → sometimes (၅၀%) → rarely/seldom (၁၀%) → never (၀%) ဟု အကြိမ်အရေအတွက် နည်းလာသည်။",
          "ဤရာခိုင်နှုန်းများသည် ခန့်မှန်း ဖော်ပြချက်များသာ ဖြစ်သည်။ စကားပြောတွင် 'usually' နှင့် 'often' ကို တစ်ခါတစ်ရံ ရောနှော သုံးတတ်သည်။",
          "'every day', 'once a week', 'twice a month' ကဲ့သို့ အချိန် ဖော်ပြချက်များသည် ဝါကျ အဆုံးတွင် လာသည် — 'I go to the gym twice a week.'",
        ],
        table: {
          headers: ["ကြိယာဝိသေသန", "ခန့်မှန်း အကြိမ်", "ဥပမာ"],
          rows: [
            ["always", "100%", "She is always kind."],
            ["usually", "90%", "I usually get up at six."],
            ["often", "70%", "We often study together."],
            ["sometimes", "50%", "He sometimes forgets his keys."],
            ["never", "0%", "They never eat meat."],
          ],
        },
      },
      {
        heading: "ဝါကျအတွင်း နေရာ",
        body: [
          "Action ကြိယာ ပါသော ဝါကျတွင် ကြိယာဝိသေသနသည် ကြိယာ ရှေ့တွင် လာသည် — 'I often read at night.'",
          "be ကြိယာ ပါသော ဝါကျတွင် be နောက်တွင် လာသည် — 'She is always late.'",
          "အကူကြိယာ ပါလျှင် အကူကြိယာနှင့် ကြိယာ အဓိက အကြားတွင် ထားသည် — 'I have never been to Japan.' ('I never have been' သည် ပိုအလေးပေး ပြောသည့် ပုံစံ)",
        ],
      },
    ],
    examples: [
      { en: "I always drink water with my meals.", mm: "အစားအစာနှင့်အတူ အမြဲ ရေသောက်သည်။" },
      { en: "She is usually the first person to arrive.", mm: "သူမသည် များသောအားဖြင့် ပထမဆုံး ရောက်သူ ဖြစ်သည်။" },
      { en: "We have never visited that museum.", mm: "ကျွန်တော်တို့ အဲဒီပြတိုက်ကို တစ်ခါမှ မသွားဖူးပါ။" },
    ],
    mistakes: [
      { wrong: "I go always to school by bus.", right: "I always go to school by bus.", why: "Action ကြိယာ ရှေ့တွင် ကြိယာဝိသေသန ထားသည်။" },
      { wrong: "She late is always.", right: "She is always late.", why: "be ကြိယာ နောက်တွင် ထားသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Choose the correct sentence.", promptMm: "မှန်ကန်သည့် ဝါကျ ရွေးပါ။", options: ["He always is tired.", "He is always tired.", "He tired always is.", "Always he is tired."], answer: 1, explanation: "be ကြိယာ နောက်တွင် always။", topic: "adverbs of frequency" },
      { type: "mcq", prompt: "Which is the strongest frequency?", promptMm: "အများဆုံး အကြိမ် ရွေးပါ။", options: ["sometimes", "often", "always", "rarely"], answer: 2, explanation: "always = 100%။", topic: "adverbs of frequency" },
      { type: "fill", prompt: "I ___ (negative) eat fast food. (0%)", promptMm: "0% အတွက် ကြိယာဝိသေသန ဖြည့်ပါ။", answers: ["never"], explanation: "0% → never။", topic: "adverbs of frequency" },
      { type: "order", prompt: "Arrange the sentence.", promptMm: "စီပါ။", tokens: ["usually", "We", "dinner", "have", "at", "seven"], answer: "We usually have dinner at seven", explanation: "ကတ္တား + ကြိယာဝိသေသန + ကြိယာ။", topic: "adverbs of frequency" },
    ],
    independent: [
      { type: "mcq", prompt: "I have ___ been to London.", promptMm: "ရွေးပါ။", options: ["never", "always", "usually", "sometimes"], answer: 0, explanation: "have + never + been။", topic: "adverbs of frequency" },
      { type: "fill", prompt: "She ___ goes to the market on Saturdays. (90%)", promptMm: "ကြိယာဝိသေသန ဖြည့်ပါ။", answers: ["usually"], explanation: "90% → usually။", topic: "adverbs of frequency" },
      { type: "correct", prompt: "Correct: They often are busy.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["They are often busy.", "They are often busy"], explanation: "be ကြိယာ နောက်တွင် often။", topic: "adverbs of frequency" },
      { type: "translate", prompt: "Translate: ကျွန်တော် တစ်ခါတစ်ရံ မနက်စာ မစားဘူး။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I sometimes don't eat breakfast.", "Sometimes I don't eat breakfast.", "I sometimes skip breakfast."], explanation: "sometimes + ငြင်းပယ်ဝါကျ။", topic: "adverbs of frequency" },
    ],
    review: [
      { q: "be ကြိယာ ပါလျှင် ကြိယာဝိသေသန ဘယ်မှာ ထားသလဲ။", a: "be ကြိယာ နောက်တွင် ထားသည် — She is always late." },
      { q: "အကူကြိယာ ပါလျှင် ဘယ်မှာ ထားသလဲ။", a: "အကူကြိယာနှင့် ကြိယာ အဓိက အကြားတွင် ထားသည် — I have never been there." },
    ],
    summary: [
      "always → never အစဉ်ဖြင့် အကြိမ်အရေအတွက် နည်းလာသည်။",
      "Action ကြိယာ ရှေ့၊ be ကြိယာ နောက်တွင် ထားသည်။",
      "once a week, twice a month ကဲ့သို့ ဖော်ပြချက်များသည် ဝါကျ အဆုံးတွင် လာသည်။",
    ],
    mastery: [
      "ကြိယာဝိသေသန ၆ မျိုးကို အစဉ်လိုက် စီနိုင်သည်။",
      "ကြိယာဝိသေသန ပါသော ဝါကျ ၈ ခုတွင် ၇ ခု နေရာမှန်ကန်သည်။",
    ],
    topics: ["adverbs", "adverbs of frequency", "present simple"],
  },
];

export const moduleALessonsPart4: Lesson[] = buildLessons(seeds);
