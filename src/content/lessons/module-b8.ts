import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "b38-articles-advanced",
    moduleId: "B",
    title: "Articles: Advanced Rules",
    titleMm: "Article အဆင့်မြင့် စည်းမျဉ်းများ",
    level: "C1",
    minutes: 20,
    summaryLine: "a/an, the နှင့် article မပါသည့် အခြေအနေများကို ရေတွက်နိုင်/မနိုင် နှင့် သတ်မှတ်ပြီး/မပြီး ခွဲခြားခြင်းဖြင့် ရွေးချယ်နည်း။",
    objectives: ["countable နှင့် uncountable တွင် article ရွေးနိုင်မည်။", "the ကို မဖြစ်မနေ သုံးရသည့်/မသုံးရသည့် နေရာများ သိမည်။", "zero article (article မပါခြင်း) ကို ရှင်းပြနိုင်မည်။"],
    vocab: [
      { en: "uncountable", mm: "ရေတွက်၍ မရသော", pos: "adjective", example: "Water is an uncountable noun.", exampleMm: "Water သည် ရေတွက်၍ မရသော နာမ် ဖြစ်သည်။", topic: "articles", level: "B2" },
      { en: "specific", mm: "တိကျသော", pos: "adjective", example: "Use 'the' for a specific item.", exampleMm: "တိကျသော အရာအတွက် the ကို သုံးပါ။", topic: "articles", level: "B2" },
      { en: "generic", mm: "ယေဘုယျ", pos: "adjective", example: "Use no article for generic plurals.", exampleMm: "ယေဘုယျ အများကိန်းအတွက် article မသုံးပါ။", topic: "articles", level: "C1" },
    ],
    sections: [
      {
        heading: "a/an နှင့် the ရွေးချယ်ခြင်း",
        body: [
          "a/an သည် ရေတွက်နိုင်သော အနည်းကိန်း နှင့် ပထမဆုံး တွေ့ခြင်း (သို့) ယေဘုယျ တစ်ခုကို ပြသည် — 'I saw a dog in the garden.'",
          "the သည် ပြောသူ/နားထောင်သူ နှစ်ဦးလုံး သိပြီးသား (သို့) တစ်ခုတည်းသော အရာကို ပြသည် — 'The dog was barking all night.'",
          "စကားလုံး အသံဖြင့် ရွေးရသည် — a university (ယူ-), a European, an hour (အ-), an honest man, an MP။",
        ],
        table: { headers: ["အခြေအနေ", "ရွေးချယ်မှု", "ဥပမာ"], rows: [["ပထမ တွေ့ခြင်း (အနည်းကိန်း)", "a/an", "She bought a car."], ["သိပြီးသား/တစ်ခုတည်း", "the", "The car is red."], ["ရေတွက်မရ ယေဘုယျ", "article မပါ", "Water boils at 100°C."], ["တစ်ခုတည်းသော သဘာဝအရာ", "the", "the sun, the internet"], ["အများကိန်း ယေဘုယျ", "article မပါ", "Cats are independent."]] },
      },
      {
        heading: "မသုံးသင့်သည့် နေရာများ",
        body: [
          "ဘာသာစကား၊ ဘာသာရေး၊ နေ့လယ်စာ၊ အားကစား၊ ပညာရေးဘာသာရပ် စသည့် ယေဘုယျ အသုံးများတွင် article မပါ — 'She speaks Japanese.' 'I play tennis.' 'He studies economics.'",
          "နိုင်ငံ၊ မြို့၊ တိုက်ကြီး အမည်များ — 'Myanmar, Thailand, Asia' (သို့သော် 'the Philippines', 'the Netherlands', 'the USA' ကဲ့သို့ ခြွင်းချက် ရှိသည်)။",
          "ရေတွက်မရ နာမ်များ (advice, information, furniture, news, luggage) တွင် a/an မသုံးပါ — 'a piece of advice' ကဲ့သို့ သုံးရသည်။",
        ],
      },
    ],
    examples: [
      { en: "He is an honest person and a university lecturer.", mm: "သူက ရိုးသားသူ တစ်ဦး ဖြစ်ပြီး တက္ကသိုလ် ကထိက တစ်ဦး ဖြစ်သည်။", note: "အသံအပေါ် မူတည်သည်။" },
      { en: "The information you sent was useful.", mm: "မင်း ပို့သည့် အချက်အလက်သည် အသုံးဝင်သည်။", note: "information တွင် the သုံးနိုင်သည်၊ a မသုံးပါ။" },
      { en: "I go to school by bus every morning.", mm: "မနက်တိုင်း ကျောင်းကို ဘတ်စ်ကားဖြင့် သွားသည်။" },
    ],
    mistakes: [
      { wrong: "She gave me an advice.", right: "She gave me some advice.", why: "advice သည် ရေတွက်မရသဖြင့် a မသုံးပါ။" },
      { wrong: "I play the tennis.", right: "I play tennis.", why: "အားကစား ယေဘုယျအမည်တွင် article မပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "He is ___ engineer.", promptMm: "ရွေးပါ။", options: ["a", "an", "the", "—"], answer: 1, explanation: "engineer သည် သရသံ ဖြင့် စသည် → an။", topic: "articles" },
      { type: "mcq", prompt: "___ sun rises in ___ east.", promptMm: "ရွေးပါ။", options: ["The / the", "A / the", "The / an", "— / the"], answer: 0, explanation: "တစ်ခုတည်းသော/သတ်မှတ်ထားသော အရာ → the။", topic: "articles" },
      { type: "fill", prompt: "I need ___ information about the course.", promptMm: "ဖြည့်ပါ။", answers: ["some"], explanation: "ရေတွက်မရ → some/the (a မသုံး)။", topic: "articles" },
      { type: "correct", prompt: "Correct: He is a honest man.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["He is an honest man."], explanation: "honest သည် သရသံ ဖြင့် စသည်။", topic: "articles" },
    ],
    independent: [
      { type: "mcq", prompt: "We had ___ lunch at ___ restaurant near the station.", promptMm: "ရွေးပါ။", options: ["— / a", "a / a", "the / a", "— / —"], answer: 0, explanation: "အစားအစာ ယေဘုယျ → article မပါ၊ ရှာဖွေ တွေ့သည့် ဆိုင်တစ်ခု → a။", topic: "articles" },
      { type: "fill", prompt: "She studies ___ economics at university.", promptMm: "ဖြည့်ပါ။", answers: ["—"], explanation: "ဘာသာရပ် ယေဘုယျ → article မပါ။", topic: "articles" },
      { type: "mcq", prompt: "Which sentence is correct?", promptMm: "မှန်ကန်သည့် ဝါကျ ရွေးပါ။", options: ["I bought a furniture.", "I bought some furnitures.", "I bought some furniture.", "I bought the furniture of a shop."], answer: 2, explanation: "furniture သည် ရေတွက်မရ။", topic: "articles" },
      { type: "translate", prompt: "Translate: ငါ သူ့ကို မနေ့က စာအုပ်တစ်အုပ် ပေးခဲ့တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I gave him a book yesterday.", "Yesterday I gave him a book."], explanation: "ပထမ တွေ့သည့် အနည်းကိန်း → a။", topic: "articles" },
    ],
    review: [
      { q: "a/an ကို ဘယ်အခြေခံဖြင့် ရွေးသလဲ။", a: "စာလုံး မဟုတ်ဘဲ ပထမ အသံဖြင့် ရွေးသည် — a university, an hour။" },
      { q: "ရေတွက်မရ နာမ်တွင် ပမာဏ ဘယ်လို ပြသလဲ။", a: "some/any, a piece of, an item of ကဲ့သို့ ပမာဏ စကားလုံး သုံးသည်။" },
    ],
    summary: ["a/an = အနည်းကိန်း ပထမ တွေ့ခြင်း။", "the = သိပြီးသား/တစ်ခုတည်း။", "ယေဘုယျ အများကိန်း၊ ရေတွက်မရ၊ ဘာသာရပ်/အားကစားတွင် article မပါ။"],
    mastery: ["ကွက်လပ် ၁၂ ခုတွင် ၁၀ ခု မှန်ကန်စွာ ရွေးနိုင်သည်။", "article မှားသော ဝါကျ ၅ ခုကို ပြင်နိုင်သည်။"],
    topics: ["articles", "advanced grammar"],
  },
  {
    id: "b39-prepositions-advanced",
    moduleId: "B",
    title: "Prepositions: Advanced Patterns",
    titleMm: "ဝိဘတ် အဆင့်မြင့် ပုံစံများ",
    level: "B2",
    minutes: 22,
    summaryLine: "အချိန်/နေရာ ဝိဘတာများ၊ နာမ်/နာမဝိသေသန နှင့် တွဲသည့် ဝိဘတာများ နှင့် ပုံသေတွဲဖက်မှု (collocation) များကို လေ့လာသည်။",
    objectives: ["in/on/at ကို အချိန်၊ နေရာ အတွက် တိကျစွာ ရွေးနိုင်မည်။", "dependent preposition (depend on, interested in) ကို သိမည်။", "by/with/in ကဲ့သို့ နည်းလမ်း ဝိဘတာ သုံးနိုင်မည်။"],
    vocab: [
      { en: "depend on", mm: "…အပေါ် မူတည်သည်", pos: "verb + prep", example: "It depends on the weather.", exampleMm: "ရာသီဥတုအပေါ် မူတည်သည်။", topic: "prepositions", level: "B1" },
      { en: "interested in", mm: "…ကို စိတ်ဝင်စားသည်", pos: "adjective + prep", example: "She is interested in history.", exampleMm: "သူမ သမိုင်းကို စိတ်ဝင်စားသည်။", topic: "prepositions", level: "A2" },
      { en: "in charge of", mm: "…ကို တာဝန်ယူထားသည်", pos: "phrase", example: "He is in charge of the project.", exampleMm: "သူ ပရောဂျက်ကို တာဝန်ယူထားသည်။", topic: "prepositions", level: "B2" },
    ],
    sections: [
      {
        heading: "အချိန်နှင့် နေရာ",
        body: [
          "အချိန် — at + နာရီ/အချိန်တိတိ (at 7 p.m.), on + ရက်/ရက်စွဲ (on Monday, on 5 May), in + လ/နှစ်/ကာလ (in June, in 2024, in the morning)။",
          "နေရာ — at + အမှတ်/နေရာ တိတိ (at the bus stop), on + မျက်နှာပြင် (on the table, on the wall), in + အတွင်း (in the box, in Yangon)။",
          "ခြွင်းချက် — at night, at the weekend (BrE) / on the weekend (AmE), in the morning/afternoon/evening, on time (= အချိန်မှန်) vs in time (= မနောက်ကျဘဲ)။",
        ],
        table: { headers: ["အမျိုးအစား", "ဝိဘတာ", "ဥပမာ"], rows: [["အချိန်တိတိ", "at", "at noon, at 6 o'clock"], ["ရက်", "on", "on Friday, on my birthday"], ["လ/နှစ်", "in", "in April, in 2025"], ["အတွင်းပိုင်း", "in", "in the drawer"], ["မျက်နှာပြင်", "on", "on the floor"], ["နေရာတိတိ", "at", "at the corner"]] },
      },
      {
        heading: "ပုံသေ တွဲဖက်မှုများ",
        body: [
          "ကြိယာ + ဝိဘတာ — depend on, listen to, wait for, look for, apply for, belong to, apologise for, insist on, succeed in, prevent from။",
          "နာမဝိသေသန + ဝိဘတာ — interested in, good at, afraid of, proud of, responsible for, similar to, different from, keen on။",
          "နာမ် + ဝိဘတာ — reason for, solution to, increase in, advantage of, attitude towards, effect on။",
          "ဤတွဲဖက်မှုများကို အလွတ်ကျက်ရသည် — မြန်မာစကားမှ တိုက်ရိုက် ဘာသာပြန်၍ မရပါ။",
        ],
      },
    ],
    examples: [
      { en: "The meeting is on Monday at nine in the morning.", mm: "အစည်းအဝေးက တနင်္လာနေ့ မနက် ကိုးနာရီတွင် ဖြစ်သည်။" },
      { en: "She is responsible for the marketing budget.", mm: "သူမ စျေးကွက် ဘတ်ဂျက်အတွက် တာဝန်ရှိသည်။" },
      { en: "We succeeded in finishing the project on time.", mm: "ပရောဂျက်ကို အချိန်မှန် ပြီးစီးအောင် အောင်မြင်ခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "It depends of the weather.", right: "It depends on the weather.", why: "depend နှင့် on တွဲသည်။" },
      { wrong: "I will meet you in Monday.", right: "I will meet you on Monday.", why: "ရက်စွဲ → on။" },
    ],
    guided: [
      { type: "mcq", prompt: "The class starts ___ 9 o'clock.", promptMm: "ရွေးပါ။", options: ["in", "on", "at", "for"], answer: 2, explanation: "နာရီ တိတိ → at။", topic: "prepositions" },
      { type: "mcq", prompt: "I'm looking forward ___ seeing you.", promptMm: "ရွေးပါ။", options: ["to", "for", "at", "on"], answer: 0, explanation: "look forward to + -ing။", topic: "prepositions" },
      { type: "fill", prompt: "She is very good ___ maths.", promptMm: "ဖြည့်ပါ။", answers: ["at"], explanation: "good at + ကျွမ်းကျင်မှုနယ်ပယ် — she is good at maths။", topic: "prepositions" },
      { type: "correct", prompt: "Correct: We arrived to the airport late.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["We arrived at the airport late."], explanation: "arrive at + နေရာ (arrive in + မြို့/နိုင်ငံ)။", topic: "prepositions" },
    ],
    independent: [
      { type: "mcq", prompt: "There is an increase ___ demand.", promptMm: "ရွေးပါ။", options: ["of", "in", "for", "to"], answer: 1, explanation: "increase in + နာမ်။", topic: "prepositions" },
      { type: "fill", prompt: "He apologised ___ being late.", promptMm: "ဖြည့်ပါ။", answers: ["for"], explanation: "apologise for။", topic: "prepositions" },
      { type: "mcq", prompt: "We arrived ___ time for the train.", promptMm: "ရွေးပါ။", options: ["on", "in", "at", "by"], answer: 1, explanation: "in time = မနောက်ကျဘဲ။", topic: "prepositions" },
      { type: "translate", prompt: "Translate: ဒါက ရာသီဥတုပေါ် မူတည်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["It depends on the weather.", "That depends on the weather."], explanation: "depend on။", topic: "prepositions" },
    ],
    review: [
      { q: "on time နှင့် in time ကွာခြားချက် ဘာလဲ။", a: "on time = သတ်မှတ်ချိန် အတိအကျ၊ in time = မနောက်ကျဘဲ အချိန်မီ။" },
      { q: "arrive နှင့် တွဲသည့် ဝိဘတာ ဘာလဲ။", a: "နေရာငယ်အတွက် at၊ မြို့/နိုင်ငံအတွက် in။" },
    ],
    summary: ["အချိန် — at/on/in ကို တိကျမှုအလိုက် ရွေးသည်။", "ကြိယာ/နာမဝိသေသန + ဝိဘတာ သည် ပုံသေ တွဲဖက်မှု။", "in time နှင့် on time ကွာခြားသည်။"],
    mastery: ["ဝိဘတ် ကွက်လပ် ၁၂ ခုတွင် ၁၀ ခု မှန်ကန်သည်။", "ပုံသေ တွဲဖက်မှု ၁၅ ခုကို ဝါကျထဲတွင် သုံးနိုင်သည်။"],
    topics: ["prepositions", "collocations", "grammar"],
  },
  {
    id: "b40-grammar-review",
    moduleId: "B",
    title: "Module B Grammar Review",
    titleMm: "Module B သဒ္ဒါ ပြန်လည် လေ့ကျင့်ခန်း",
    level: "B2",
    minutes: 28,
    summaryLine: "Module B တွင် သင်ယူခဲ့သည့် ကာလ၊ modal၊ passive၊ relative clause၊ conditional နှင့် word order များကို ပေါင်းစပ် လေ့ကျင့်သည်။",
    objectives: ["ကာလ ရွေးချယ်မှုကို မှန်ကန်စွာ ပြုလုပ်နိုင်မည်။", "ဝါကျ ဖွဲ့စည်းမှု အမှားများကို ရှာဖွေ ပြင်နိုင်မည်။", "အဆင့်မြင့် ဝါကျများကို ကိုယ်တိုင် ရေးနိုင်မည်။"],
    vocab: [
      { en: "accurate", mm: "တိကျသော", pos: "adjective", example: "Accurate grammar makes writing clearer.", exampleMm: "တိကျသော သဒ္ဒါက စာကို ပိုရှင်းစေသည်။", topic: "grammar review", level: "B2" },
      { en: "structure", mm: "ဖွဲ့စည်းပုံ", pos: "noun", example: "Check the sentence structure.", exampleMm: "ဝါကျ ဖွဲ့စည်းပုံကို စစ်ပါ။", topic: "grammar review", level: "B2" },
      { en: "revise", mm: "ပြန်လည် လေ့လာသည်", pos: "verb", example: "Revise the tenses before the test.", exampleMm: "စာမေးပွဲ မတိုင်မီ ကာလများကို ပြန်လည် လေ့လာပါ။", topic: "grammar review", level: "B1" },
    ],
    sections: [
      {
        heading: "အဓိက ခေါင်းစဉ် ပြန်လည် သုံးသပ်ချက်",
        body: [
          "ကာလ — present perfect (ယခုနှင့် ချိတ်ဆက်)၊ past simple (ပြီးစီး)၊ future continuous (အနာဂတ် အချိန်တွင် ဖြစ်နေမည်)၊ future perfect (အနာဂတ် အချိန်တွင် ပြီးစီးမည်)။",
          "Modal — deduction (must/might/can't)၊ obligation (must/have to/should)၊ permission (can/may)။ Passive — be + V3၊ ကာလအလိုက် be ပြောင်း။",
          "ဝါကျ ဖွဲ့စည်းမှု — relative clause (who/which/whose/where)၊ participle clause၊ inversion၊ question tag၊ comparative။",
        ],
        table: { headers: ["ခေါင်းစဉ်", "အဓိက စည်းမျဉ်း", "သတိထားရန်"], rows: [["Present perfect", "have/has + V3", "yesterday နှင့် မတွဲ"], ["Passive", "be + V3", "V3 ဖြစ်ရမည်"], ["Conditionals", "if + present/past/past perfect", "if clause တွင် will/would မသုံး"], ["Relative clause", "who/which/that", "non-defining တွင် that မသုံး"], ["Inversion", "negative adverb + auxiliary + subject", "do/does/did ထည့်ရန်"]] },
      },
      {
        heading: "စစ်ဆေးရန် အဆင့်များ",
        body: [
          "၁။ ကြိယာ၏ အချိန် (time marker) ကို ရှာပါ — yesterday, since, by next year, now။",
          "၂။ ကတ္တား နှင့် ကြိယာ ကိုက်ညီမှုကို စစ်ပါ — he goes, they go။",
          "၃။ ဝါကျခွဲ တစ်ခုစီတွင် ကတ္တား + ကြိယာ ပြည့်စုံမှုကို စစ်ပါ။ ထို့နောက် ဝိဘတာ၊ article နှင့် word order ကို စစ်ပါ။",
        ],
      },
    ],
    examples: [
      { en: "By the end of next month, we will have completed the course.", mm: "လာမည့်လ ကုန်တွင် သင်တန်းကို ပြီးစီးထားမည်။", note: "future perfect။" },
      { en: "The report, which was written in a hurry, contained several errors.", mm: "အလျင်အမြန် ရေးထားသည့် အစီရင်ခံစာတွင် အမှား အတော်များများ ပါသည်။", note: "non-defining passive။" },
      { en: "Had I known earlier, I would have applied.", mm: "အစောကြီး သိခဲ့လျှင် လျှောက်ထားမည်။", note: "inverted third conditional။" },
    ],
    mistakes: [
      { wrong: "She has went to the market.", right: "She has gone to the market.", why: "present perfect တွင် V3။" },
      { wrong: "If I would know, I would tell you.", right: "If I knew, I would tell you.", why: "if clause တွင် would မသုံး။" },
    ],
    guided: [
      { type: "mcq", prompt: "By 2030, scientists ___ a cure.", promptMm: "ရွေးပါ။", options: ["will find", "will have found", "found", "have found"], answer: 1, explanation: "future perfect — အချိန်တစ်ခုတွင် ပြီးစီးမည်။", topic: "grammar review" },
      { type: "mcq", prompt: "The letter ___ yesterday.", promptMm: "ရွေးပါ။", options: ["sent", "was sent", "has sent", "is send"], answer: 1, explanation: "past passive။", topic: "grammar review" },
      { type: "fill", prompt: "Neither of the answers ___ correct. (be)", promptMm: "ဖြည့်ပါ။", answers: ["is"], explanation: "neither of + plural noun သည် အနည်းကိန်း ကြိယာ ယူသည် (တရားဝင်)။", topic: "grammar review" },
      { type: "correct", prompt: "Correct: Hardly I had arrived when it started raining.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["Hardly had I arrived when it started raining."], explanation: "hardly + auxiliary + subject။", topic: "grammar review" },
    ],
    independent: [
      { type: "mcq", prompt: "The man ___ car was stolen called the police.", promptMm: "ရွေးပါ။", options: ["who", "which", "whose", "whom"], answer: 2, explanation: "ပိုင်ဆိုင်မှု → whose။", topic: "grammar review" },
      { type: "fill", prompt: "She suggested ___ (take) the earlier train.", promptMm: "ဖြည့်ပါ။", answers: ["taking"], explanation: "suggest + -ing။", topic: "grammar review" },
      { type: "order", prompt: "Arrange the sentence.", promptMm: "စီပါ။", tokens: ["had", "If", "I", "known", "would", "have", "I", "told", "you"], answer: "If I had known I would have told you", explanation: "third conditional ပုံစံ။", topic: "grammar review" },
      { type: "translate", prompt: "Translate: ဒီစာအုပ်ကို ငါဖတ်ပြီးပြီ၊ အရမ်းကောင်းတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I have read this book and it is very good.", "I've read this book; it's really good."], explanation: "present perfect + ယခု အမြင်။", topic: "grammar review" },
    ],
    review: [
      { q: "ကာလ ရွေးချယ်ရာတွင် ပထမဆုံး ဘာကို ရှာသလဲ။", a: "အချိန် ဖော်ပြချက် (time marker) ကို ရှာသည်။" },
      { q: "အမှား ရှာရာတွင် ဘယ်အစီအစဉ်ဖြင့် စစ်သလဲ။", a: "ကာလ → ကတ္တား-ကြိယာ ကိုက်ညီမှု → ဝါကျခွဲ ပြည့်စုံမှု → ဝိဘတာ/article/word order။" },
    ],
    summary: ["Module B သည် ကာလ၊ modal၊ passive၊ clause နှင့် word order ကို အဓိက ထားသည်။", "အမှား ရှာရာတွင် အစီအစဉ်တကျ စစ်ခြင်းက ထိရောက်သည်။", "အဆင့်မြင့် ဝါကျများကို ကိုယ်တိုင် ရေးခြင်းဖြင့် ခိုင်မာစေသည်။"],
    mastery: ["စစ်ဆေးမှု ကွက်လပ် ၁၀ ခုတွင် ၈ ခု မှန်ကန်သည်။", "Module B ခေါင်းစဉ် ၃ ခုကို ဥပမာဖြင့် ရှင်းပြနိုင်သည်။"],
    topics: ["grammar review", "tenses", "sentence structure"],
  },
];

export const moduleBLessonsPart8: Lesson[] = buildLessons(seeds);
