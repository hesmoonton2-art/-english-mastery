import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "g14-compare-contrast",
    moduleId: "G",
    title: "Writing: Compare and Contrast Essays",
    titleMm: "ရေးသားမှု — နှိုင်းယှဉ် ဆန့်ကျင်ရေး အက်ဆေး",
    level: "B2",
    minutes: 24,
    summaryLine: "block နှင့် point-by-point နည်းလမ်း ၂ မျိုးဖြင့် နှိုင်းယှဉ်အက်ဆေး ရေးပုံ။",
    objectives: ["နည်းလမ်း ၂ မျိုး ခွဲခြားနိုင်မည်။", "နှိုင်းယှဉ် စကားစု သုံးနိုင်မည်။", "အက်ဆေး ၄ ပိုဒ် ရေးနိုင်မည်။"],
    vocab: [
      { en: "whereas", mm: "…ဖြစ်သော်လည်း", pos: "conjunction", example: "City life is fast, whereas village life is slow.", exampleMm: "မြို့ဘဝ မြန်သည်၊ ရွာဘဝ နှေးသည်။", topic: "compare and contrast", level: "B2" },
      { en: "similarly", mm: "အလားတူစွာ", pos: "adverb", example: "Similarly, both plans include a budget.", exampleMm: "အလားတူစွာ အစီအစဉ် နှစ်ခုလုံးတွင် ဘတ်ဂျက် ပါဝင်သည်။", topic: "compare and contrast", level: "B2" },
      { en: "in contrast", mm: "ဆန့်ကျင်ဘက်အားဖြင့်", pos: "phrase", example: "In contrast, the second study found no effect.", exampleMm: "ဆန့်ကျင်ဘက်အားဖြင့် ဒုတိယ လေ့လာမှုက သက်ရောက်မှု မတွေ့ခဲ့ပါ။", topic: "compare and contrast", level: "B2" },
    ],
    sections: [
      {
        heading: "နည်းလမ်း ၂ မျိုး",
        body: [
          "Block method — ပထမ ပိုဒ်တွင် A အားလုံး၊ ဒုတိယ ပိုဒ်တွင် B အားလုံး၊ တတိယ ပိုဒ်တွင် နှိုင်းယှဉ်ချက်။ ရှည်သည့် ခေါင်းစဉ်အတွက် သင့်တော်သည်။",
          "Point-by-point — အချက်တစ်ခုစီအတွက် A နှင့် B ကို တွဲပြီး နှိုင်းယှဉ်သည်။ စာဖတ်သူ နှိုင်းယှဉ်ချက်ကို လိုက်ရ လွယ်သည်။",
          "အက်ဆေး ဖွဲ့စည်းပုံ — နိဒါန်း (ခေါင်းစဉ် + ရည်ရွယ်ချက်) → ကိုယ်ထည် ၂ ပိုဒ် → နိဂုံး (အဓိက ကွာခြားချက် အနှစ်ချုပ်)။",
        ],
        table: { headers: ["နည်း", "ဖွဲ့စည်းပုံ", "သင့်တော်သည့် အခြေအနေ"], rows: [["Block", "A အားလုံး → B အားလုံး", "အချက် ၃ ခုထက် နည်း"], ["Point-by-point", "အချက်တစ်ခုစီ A+B", "အချက် ၄ ခုနှင့် အထက်"], ["နိဒါန်း", "ခေါင်းစဉ် + ရည်ရွယ်", "အမြဲ"], ["နိဂုံး", "အဓိက ကွာခြားချက်", "အမြဲ"]] },
      },
      {
        heading: "နှိုင်းယှဉ် ဘာသာစကား",
        body: [
          "တူညီမှု — both, similarly, likewise, in the same way, neither…nor။ ကွာခြားမှု — whereas, while, however, in contrast, unlike, on the other hand။",
          "ကွာခြားချက်ကို ပြောရာတွင် အချက် တစ်ခုတည်းအပေါ် မှီခိုမှု မလုပ်ပါ — ဥပမာ ၂–၃ ခု ပေးသည်။",
        ],
      },
    ],
    examples: [
      { en: "Both cities have good public transport, but Bangkok's network is larger.", mm: "မြို့ နှစ်မြို့လုံးတွင် ကောင်းသည့် အများသုံး သယ်ယူပို့ဆောင်ရေး ရှိသည်၊ သို့သော် ဘန်ကောက်၏ ကွန်ရက်က ပိုကြီးသည်။" },
      { en: "Unlike online courses, classroom courses offer immediate feedback.", mm: "အွန်လိုင်း သင်တန်းများနှင့် မတူဘဲ စာသင်ခန်း သင်တန်းများက ချက်ချင်း တုံ့ပြန်ချက် ပေးသည်။" },
      { en: "Whereas the first option is cheaper, the second saves more time.", mm: "ပထမ ရွေးချယ်မှုက ပိုသက်သာသော်လည်း ဒုတိယက အချိန် ပိုသက်သာစေသည်။" },
    ],
    mistakes: [
      { wrong: "whereas ကို ဝါကျ အစတွင် comma မပါဘဲ သုံးခြင်း", right: "Whereas A is X, B is Y.", why: "whereas သည် subordinate clause ဖြစ်သည်။" },
      { wrong: "နှိုင်းယှဉ်ချက် မပါဘဲ အချက် နှစ်ခု သီးခြား ရေးခြင်း", right: "တူညီမှု/ကွာခြားမှု စကားစုဖြင့် ဆက်ပါ", why: "အက်ဆေး၏ ရည်ရွယ်ချက် ပျောက်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which shows contrast?", promptMm: "ရွေးပါ။", options: ["similarly", "likewise", "whereas", "both"], answer: 2, explanation: "whereas = ကွာခြားမှု။", topic: "compare and contrast" },
      { type: "mcq", prompt: "Point-by-point structure compares ___.", promptMm: "ရွေးပါ။", options: ["all of A then all of B", "A and B for each point", "only differences", "only similarities"], answer: 1, explanation: "အချက်တစ်ခုစီအတွက် A နှင့် B။", topic: "compare and contrast" },
      { type: "fill", prompt: "___ life is fast, whereas village life is slow.", promptMm: "ဖြည့်ပါ။", answers: ["City"], explanation: "City life is fast။", topic: "compare and contrast" },
      { type: "correct", prompt: "Correct: Both of cities are expensive.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["Both cities are expensive."], explanation: "both + noun (of မလို)။", topic: "compare and contrast" },
    ],
    independent: [
      { type: "mcq", prompt: "Which sentence is balanced?", promptMm: "ရွေးပါ။", options: ["A is better.", "Although A is cheaper, B is faster.", "B is bad.", "A and B exist."], answer: 1, explanation: "အချက် နှစ်ဖက် ပါဝင်သည်။", topic: "compare and contrast" },
      { type: "fill", prompt: "In ___, the second plan costs more.", promptMm: "ဖြည့်ပါ။", answers: ["contrast"], explanation: "in contrast။", topic: "compare and contrast" },
      { type: "order", prompt: "Arrange the sentence.", promptMm: "စီပါ။", tokens: ["Online", "courses", "are", "flexible", "whereas", "classes", "are", "fixed"], answer: "Online courses are flexible whereas classes are fixed", explanation: "whereas ဖြင့် ဆန့်ကျင်ချက်။", topic: "compare and contrast" },
      { type: "translate", prompt: "Translate: ရွာဘဝက ငြိမ်သက်တယ်၊ မြို့ဘဝက ဆူညံတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Village life is quiet, whereas city life is noisy.", "Village life is peaceful while city life is noisy."], explanation: "whereas/while။", topic: "compare and contrast" },
    ],
    review: [
      { q: "block နှင့် point-by-point ကွာခြားချက် ဘာလဲ။", a: "block = A အားလုံး ပြီး B၊ point-by-point = အချက်တစ်ခုစီ A+B။" },
      { q: "နှိုင်းယှဉ် စကားစု ၆ ခု ဘာလဲ။", a: "both, similarly, whereas, in contrast, unlike, on the other hand။" },
    ],
    summary: ["နည်းလမ်း ၂ မျိုးကို ခေါင်းစဉ်အလိုက် ရွေးသည်။", "တူညီမှု/ကွာခြားမှု စကားစု မဖြစ်မနေ လိုသည်။", "နိဂုံးတွင် အဓိက ကွာခြားချက် အနှစ်ချုပ်သည်။"],
    mastery: ["နှိုင်းယှဉ် အက်ဆေး ၄ ပိုဒ် (စကားလုံး ၂၀၀+) ရေးနိုင်သည်။", "နှိုင်းယှဉ် စကားစု ၈ ခု အသုံးချနိုင်သည်။"],
    topics: ["writing", "essay", "compare and contrast"],
  },
  {
    id: "g15-problem-solution",
    moduleId: "G",
    title: "Writing: Problem–Solution Essays",
    titleMm: "ရေးသားမှု — ပြဿနာ–ဖြေရှင်းချက် အက်ဆေး",
    level: "B2",
    minutes: 24,
    summaryLine: "ပြဿနာ တင်ပြ၊ အကြောင်းရင်း ရှင်းပြ၊ ဖြေရှင်းချက် ၂–၃ ခု ပေးသည့် အက်ဆေး ရေးပုံ။",
    objectives: ["ပြဿနာ-ဖြေရှင်းချက် ဖွဲ့စည်းပုံ ရေးနိုင်မည်။", "အကြောင်းရင်း နှင့် ဖြေရှင်းချက် တွဲဖက်နိုင်မည်။", "အဆိုပြုချက် ဘာသာစကား သုံးနိုင်မည်။"],
    vocab: [
      { en: "tackle", mm: "ဖြေရှင်းသည်", pos: "verb", example: "Governments must tackle youth unemployment.", exampleMm: "အစိုးရများက လူငယ် အလုပ်လက်မဲ့ ပြဿနာကို ဖြေရှင်းရမည်။", topic: "problem solution", level: "B2" },
      { en: "root cause", mm: "အမြစ်ရင်း အကြောင်းရင်း", pos: "noun", example: "The root cause is a lack of training.", exampleMm: "အမြစ်ရင်း အကြောင်းရင်းက သင်တန်း မရှိခြင်း ဖြစ်သည်။", topic: "problem solution", level: "B2" },
      { en: "measure", mm: "ဆောင်ရွက်ချက်", pos: "noun", example: "One practical measure is free bus passes.", exampleMm: "လက်တွေ့ ဆောင်ရွက်ချက် တစ်ခုက အခမဲ့ ဘတ်စ်ကား ကတ် ဖြစ်သည်။", topic: "problem solution", level: "B2" },
    ],
    sections: [
      {
        heading: "ဖွဲ့စည်းပုံ",
        body: [
          "နိဒါန်း — ပြဿနာကို ရှင်းရှင်း တင်ပြ + ဘာကြောင့် အရေးကြီးသည်။ ကိုယ်ထည် ၁ — အကြောင်းရင်း ၂–၃ ခု။",
          "ကိုယ်ထည် ၂ — ဖြေရှင်းချက် ၂–၃ ခု (တစ်ခုစီတွင် ဘယ်သူ လုပ်မည် + ဘယ်လို အကျိုးရှိမည်)။ နိဂုံး — အထိရောက်ဆုံး ဖြေရှင်းချက် အနှစ်ချုပ်။",
          "ဖြေရှင်းချက်တိုင်း အကြောင်းရင်းနှင့် တွဲဖက်ရသည် — ပြဿနာ 'သင်တန်း မရှိ' ဖြစ်လျှင် ဖြေရှင်းချက်က 'အခမဲ့ သင်တန်း' ဖြစ်ရမည်။",
        ],
        table: { headers: ["အပိုင်း", "ရည်ရွယ်ချက်", "စကားစု"], rows: [["ပြဿနာ", "အခြေအနေ တင်ပြ", "One of the biggest issues is…"], ["အကြောင်းရင်း", "ဘာကြောင့် ဖြစ်", "This is largely due to…"], ["ဖြေရှင်းချက်", "ဘာလုပ်သင့်", "One practical solution is to…"], ["နိဂုံး", "အနှစ်ချုပ်", "The most effective step would be…"]] },
      },
      {
        heading: "အဆိုပြုချက် ဘာသာစကား",
        body: [
          "should, could, need to, it would be advisable to, governments/schools/employers could…။ ခိုင်မာမှု အဆင့် — 'must' (အလွန်ခိုင်မာ) > 'should' > 'could' (အကြံပြု)။",
          "အကျိုးသက်ရောက်မှုကို ဖော်ပြရန် 'This would reduce…', 'As a result, …' သုံးသည်။",
        ],
      },
    ],
    examples: [
      { en: "One of the biggest issues in many cities is traffic congestion.", mm: "မြို့များစွာတွင် အကြီးမားဆုံး ပြဿနာများထဲမှ တစ်ခုက ယာဉ်ကြော ကျပ်တည်းမှု ဖြစ်သည်။" },
      { en: "This is largely due to the rapid growth in private car ownership.", mm: "ဤသည် ကိုယ်ပိုင် ကား ပိုင်ဆိုင်မှု လျင်မြန်စွာ တိုးလာခြင်းကြောင့် ဖြစ်သည်။" },
      { en: "One practical solution is to invest in reliable bus services.", mm: "လက်တွေ့ ဖြေရှင်းချက် တစ်ခုက ယုံကြည်ရသည့် ဘတ်စ်ကား ဝန်ဆောင်မှုတွင် ရင်းနှီးမြှုပ်နှံခြင်း ဖြစ်သည်။" },
    ],
    mistakes: [
      { wrong: "ဖြေရှင်းချက် နှင့် ပြဿနာ မကိုက်ညီခြင်း", right: "အကြောင်းရင်းတိုင်းအတွက် သက်ဆိုင်သည့် ဖြေရှင်းချက် ပေးပါ", why: "အကြံပြုချက် အားနည်းသွားသည်။" },
      { wrong: "ဖြေရှင်းချက်ကို ယေဘုယျ ('we must do something') ရေးခြင်း", right: "ဘယ်သူ ဘာလုပ်မည် ကို တိကျစွာ ရေးပါ", why: "လက်တွေ့ မဖြစ်နိုင်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which phrase introduces a solution?", promptMm: "ရွေးပါ။", options: ["This is due to…", "One practical solution is to…", "The problem is…", "As a result of…"], answer: 1, explanation: "solution စကားစု။", topic: "problem solution" },
      { type: "mcq", prompt: "A root cause is ___.", promptMm: "ရွေးပါ။", options: ["a result", "the main reason", "a solution", "an opinion"], answer: 1, explanation: "အမြစ်ရင်း အကြောင်းရင်း။", topic: "problem solution" },
      { type: "fill", prompt: "Governments must ___ youth unemployment. (ဖြေရှင်း)", promptMm: "ဖြည့်ပါ။", answers: ["tackle", "address"], explanation: "tackle/address။", topic: "problem solution" },
      { type: "correct", prompt: "Correct: One solution is reduce the number of cars.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["One solution is to reduce the number of cars."], explanation: "is to + verb။", topic: "problem solution" },
    ],
    independent: [
      { type: "mcq", prompt: "Which is the most concrete solution?", promptMm: "ရွေးပါ။", options: ["People should care more.", "The city could add two bus routes by 2026.", "Something must change.", "It is a big problem."], answer: 1, explanation: "တိကျပြီး တိုင်းတာနိုင်သည်။", topic: "problem solution" },
      { type: "fill", prompt: "This is largely ___ to poor planning.", promptMm: "ဖြည့်ပါ။", answers: ["due"], explanation: "due to။", topic: "problem solution" },
      { type: "mcq", prompt: "Which modal is the strongest?", promptMm: "ရွေးပါ။", options: ["could", "might", "must", "may"], answer: 2, explanation: "must = အခိုင်မာဆုံး။", topic: "problem solution" },
      { type: "translate", prompt: "Translate: ဒီပြဿနာကို ဖြေရှင်းဖို့ အစိုးရ က ရန်ပုံငွေ တိုးသင့်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["To tackle this problem, the government should increase funding.", "The government should increase funding to solve this problem."], explanation: "increase funding to solve။", topic: "problem solution" },
    ],
    review: [
      { q: "ပြဿနာ–ဖြေရှင်းချက် အက်ဆေး ဖွဲ့စည်းပုံ ဘာလဲ။", a: "ပြဿနာ → အကြောင်းရင်း → ဖြေရှင်းချက် → နိဂုံး။" },
      { q: "ဖြေရှင်းချက် ကောင်းတစ်ခု၏ လက္ခဏာ ဘာလဲ။", a: "ဘယ်သူ ဘာလုပ်မည် ကို တိကျစွာ ဖော်ပြပြီး အကြောင်းရင်းနှင့် ကိုက်ညီသည်။" },
    ],
    summary: ["ပြဿနာကို ရှင်းရှင်း တင်ပြခြင်းက အခြေခံ။", "အကြောင်းရင်း နှင့် ဖြေရှင်းချက် တွဲဖက်ရမည်။", "တိကျသည့် ဆောင်ရွက်ချက် ရေးခြင်းက အားကောင်းသည်။"],
    mastery: ["အက်ဆေး ၄ ပိုဒ် (၂၀၀+) ရေးနိုင်သည်။", "ဖြေရှင်းချက် ၃ ခုကို တိကျစွာ ဖော်ပြနိုင်သည်။"],
    topics: ["writing", "essay", "problem solution"],
  },
  {
    id: "g16-argument-essay",
    moduleId: "G",
    title: "Writing: Argument Essays",
    titleMm: "ရေးသားမှု — ငြင်းခုံ အက်ဆေး",
    level: "C1",
    minutes: 26,
    summaryLine: "ရပ်တည်ချက် တင်ပြ၊ အကြောင်းရင်း ထောက်ခံ၊ ဆန့်ကျင်ချက် ဖြေရှင်းသည့် ငြင်းခုံ အက်ဆေး ရေးပုံ။",
    objectives: ["thesis statement ရေးနိုင်မည်။", "အထောက်အထား ဖြင့် ထောက်ခံနိုင်မည်။", "ဆန့်ကျင်ချက်ကို ဖြေရှင်းနိုင်မည်။"],
    vocab: [
      { en: "thesis statement", mm: "အဓိက ရပ်တည်ချက်", pos: "noun", example: "The thesis statement appears in the introduction.", exampleMm: "အဓိက ရပ်တည်ချက်က နိဒါန်းတွင် ပါသည်။", topic: "argument essay", level: "C1" },
      { en: "counter-argument", mm: "ဆန့်ကျင်ချက်", pos: "noun", example: "Address the counter-argument fairly.", exampleMm: "ဆန့်ကျင်ချက်ကို တရားမျှတစွာ ဖြေရှင်းပါ။", topic: "argument essay", level: "C1" },
      { en: "evidence", mm: "အထောက်အထား", pos: "noun", example: "Support each reason with evidence.", exampleMm: "အကြောင်းရင်းတိုင်းကို အထောက်အထားဖြင့် ထောက်ခံပါ။", topic: "argument essay", level: "B2" },
    ],
    sections: [
      {
        heading: "ဖွဲ့စည်းပုံ ၅ ပိုဒ်",
        body: [
          "၁) နိဒါန်း — ခေါင်းစဉ် နောက်ခံ + thesis (ရပ်တည်ချက် ရှင်းရှင်း)။ ၂–၃) ကိုယ်ထည် — အကြောင်းရင်း တစ်ခုစီ (အကြောင်းရင်း → ရှင်းပြ → ဥပမာ/ဒေတာ → ပြန်ချိတ်)။",
          "၄) ဆန့်ကျင်ချက် ပိုဒ် — 'Opponents argue that… However, …' ဖြင့် တရားမျှတစွာ ဖော်ပြပြီး ဖြေရှင်းသည်။ ၅) နိဂုံး — thesis ကို ပြန်အနှစ်ချုပ် (စကားလုံးအသစ်ဖြင့်)။",
          "thesis ဥပမာ — 'This essay argues that free public transport would reduce both congestion and emissions.' အကြောင်းရင်း ၂ ခု ပါဝင်သည်။",
        ],
        table: { headers: ["ပိုဒ်", "လုပ်ဆောင်ချက်", "စကားစု"], rows: [["နိဒါန်း", "thesis", "This essay argues that…"], ["ကိုယ်ထည်", "ထောက်ခံ", "The main reason is that…"], ["ဆန့်ကျင်ချက်", "ဖြေရှင်း", "Critics claim that… However, …"], ["နိဂုံး", "အနှစ်ချုပ်", "In conclusion, …"]] },
      },
      {
        heading: "လေသံ နှင့် hedging",
        body: [
          "ခိုင်မာစွာ ဆိုသော်လည်း ကျော်လွန် မပြောပါ — 'This suggests', 'It is likely that', 'The evidence indicates' ကို သုံးသည်။",
          "'Everyone knows' ကဲ့သို့ ယေဘုယျချော်ချခြင်း ကို ရှောင်ပြီး 'Research suggests' ဖြင့် ရေးသည်။",
          "ဆန့်ကျင်ချက်ကို အားနည်းအောင် မလုပ်ပါ — အကောင်းဆုံး ပုံစံဖြင့် ဖော်ပြပြီးမှ ဖြေရှင်းသည်။",
        ],
      },
    ],
    examples: [
      { en: "This essay argues that universities should offer free mental-health support.", mm: "တက္ကသိုလ်များက စိတ်ကျန်းမာရေး အကူအညီကို အခမဲ့ ပေးသင့်သည်ဟု ဤအက်ဆေးက ဆိုသည်။" },
      { en: "Critics claim that such services are too expensive; however, early support reduces long-term costs.", mm: "ဝေဖန်သူများက ထိုဝန်ဆောင်မှုများ ငွေကုန်ကြေးကျ များသည်ဟု ဆိုသည်၊ သို့သော် စောစီးစွာ အကူအညီပေးခြင်းက ရေရှည် ကုန်ကျစရိတ်ကို လျှော့ချသည်။" },
      { en: "The evidence indicates a clear link between sleep and academic performance.", mm: "အထောက်အထားများက အိပ်စက်မှု နှင့် ပညာရေး စွမ်းဆောင်ရည် ကြား ရှင်းလင်းသည့် ဆက်စပ်မှုကို ပြသည်။" },
    ],
    mistakes: [
      { wrong: "thesis မပါဘဲ နိဒါန်း ရေးခြင်း", right: "ရပ်တည်ချက် ကို ဝါကျ တစ်ကြောင်းဖြင့် ရေးပါ", why: "အက်ဆေး၏ ဦးတည်ချက် ပျောက်သည်။" },
      { wrong: "ဆန့်ကျင်ချက်ကို အားနည်းအောင် လုပ်ပြီး ဖြေရှင်းခြင်း", right: "အားကောင်းသည့် ပုံစံဖြင့် ဖော်ပြပါ", why: "မှားယွင်းသော ငြင်းခုံမှု (straw man) ဖြစ်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "A thesis statement ___.", promptMm: "ရွေးပါ။", options: ["asks a question", "states the main position", "lists references", "gives an example"], answer: 1, explanation: "ရပ်တည်ချက် ဖော်ပြသည်။", topic: "argument essay" },
      { type: "mcq", prompt: "Which phrase introduces a counter-argument?", promptMm: "ရွေးပါ။", options: ["In addition,", "Critics claim that…", "For example,", "Therefore,"], answer: 1, explanation: "ဆန့်ကျင်ချက် စကားစု။", topic: "argument essay" },
      { type: "fill", prompt: "The ___ indicates a strong link between the two.", promptMm: "ဖြည့်ပါ။", answers: ["evidence"], explanation: "the evidence indicates။", topic: "argument essay" },
      { type: "correct", prompt: "Correct: Everyone knows that online study is better.", promptMm: "hedging ဖြင့် ပြင်ပါ။", answers: ["Research suggests that online study can be more effective.", "Many studies suggest that online study is more effective."], explanation: "ယေဘုယျချော်ချခြင်းကို ရှောင်ပါ။", topic: "argument essay" },
    ],
    independent: [
      { type: "mcq", prompt: "Where does the counter-argument usually appear?", promptMm: "ရွေးပါ။", options: ["Before the conclusion", "In the title", "Nowhere", "In every sentence"], answer: 0, explanation: "နိဂုံး မတိုင်မီ ပိုဒ်။", topic: "argument essay" },
      { type: "fill", prompt: "___ conclusion, free transport would benefit everyone.", promptMm: "ဖြည့်ပါ။", answers: ["In"], explanation: "In conclusion။", topic: "argument essay" },
      { type: "mcq", prompt: "Which is the most academic phrasing?", promptMm: "ရွေးပါ။", options: ["I think it's obviously right.", "The evidence suggests that this policy is effective.", "Everybody agrees.", "It's the best, period."], answer: 1, explanation: "hedged + evidence။", topic: "argument essay" },
      { type: "translate", prompt: "Translate: ဤအက်ဆေးက စာမေးပွဲများ လျှော့သင့်သည်ဟု ဆိုသည်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["This essay argues that there should be fewer exams.", "This essay argues that exams should be reduced."], explanation: "argue that + clause။", topic: "argument essay" },
    ],
    review: [
      { q: "ငြင်းခုံ အက်ဆေး ပိုဒ် ၅ ပိုဒ် ဘာတွေလဲ။", a: "နိဒါန်း၊ ကိုယ်ထည် ၂၊ ဆန့်ကျင်ချက်၊ နိဂုံး။" },
      { q: "hedging ဘာကြောင့် လိုသလဲ။", a: "ကျော်လွန် မပြောဘဲ ပညာရေးဆန် လေသံ ထိန်းရန်။" },
    ],
    summary: ["thesis က အက်ဆေး၏ ဦးတည်ချက် ဖြစ်သည်။", "အကြောင်းရင်းတိုင်းကို အထောက်အထားဖြင့် ထောက်ခံသည်။", "ဆန့်ကျင်ချက်ကို တရားမျှတစွာ ဖြေရှင်းသည်။"],
    mastery: ["ငြင်းခုံ အက်ဆေး ၅ ပိုဒ် (၃၀၀+) ရေးနိုင်သည်။", "thesis နှင့် counter-argument ကို ခွဲခြားစွာ ရေးနိုင်သည်။"],
    topics: ["writing", "essay", "argument"],
  },
  {
    id: "g17-paraphrasing",
    moduleId: "G",
    title: "Writing: Paraphrasing and Avoiding Plagiarism",
    titleMm: "ရေးသားမှု — ပြန်ရေးခြင်း နှင့် ခိုးယူမှု ရှောင်ခြင်း",
    level: "B2",
    minutes: 22,
    summaryLine: "ဝါကျကို အဓိပ္ပာယ်မပျက် ပြန်ရေးနည်း ၄ မျိုး နှင့် ကိုးကား မှတ်တမ်း တင်နည်း။",
    objectives: ["ပြန်ရေး နည်းလမ်း ၄ ခု သုံးနိုင်မည်။", "မူရင်း စကားလုံး မကူးဘဲ ရေးနိုင်မည်။", "ကိုးကား မှတ်တမ်း ရေးနိုင်မည်။"],
    vocab: [
      { en: "plagiarism", mm: "ခိုးယူ ရေးသားမှု", pos: "noun", example: "Copying without citation is plagiarism.", exampleMm: "ကိုးကား မပါဘဲ ကူးချခြင်းသည် ခိုးယူမှု ဖြစ်သည်။", topic: "paraphrasing", level: "B2" },
      { en: "cite", mm: "ကိုးကားသည်", pos: "verb", example: "Always cite the original author.", exampleMm: "မူရင်း စာရေးသူကို အမြဲ ကိုးကားပါ။", topic: "paraphrasing", level: "B2" },
      { en: "retain the meaning", mm: "အဓိပ္ပာယ် ထိန်းသိမ်းသည်", pos: "phrase", example: "A good paraphrase retains the meaning.", exampleMm: "ကောင်းသည့် ပြန်ရေးချက်က အဓိပ္ပာယ်ကို ထိန်းသိမ်းသည်။", topic: "paraphrasing", level: "B2" },
    ],
    sections: [
      {
        heading: "နည်းလမ်း ၄ ခု",
        body: [
          "၁) Synonym — 'important' → 'significant' (အခြေအနေနှင့် ကိုက်ညီမှ သုံးပါ)။ ၂) Word form — 'They decided' → 'Their decision'။",
          "၃) Voice — active ↔ passive ('The team completed the study' → 'The study was completed by the team')။ ၄) Clause structure — 'Because it rained, the match was cancelled' → 'The match was cancelled due to rain.'",
          "အရေးကြီးချက် — စကားလုံး အနည်းငယ် ပြောင်းရုံဖြင့် မလုံလောက်ပါ။ ဝါကျ ဖွဲ့စည်းပုံပါ ပြောင်းရသည်။ ကိုယ်ပိုင် စကားဖြင့် ပြန်ရေးပြီး ကိုးကား ထည့်သည်။",
        ],
        table: { headers: ["နည်း", "မူရင်း", "ပြန်ရေး"], rows: [["Synonym", "The results were important.", "The findings were significant."], ["Word form", "They analysed the data.", "Their analysis of the data…"], ["Voice", "Researchers collected data.", "Data were collected by researchers."], ["Clause", "Because costs rose, profits fell.", "Profits fell due to rising costs."]] },
      },
      {
        heading: "ကိုးကား မှတ်တမ်း",
        body: [
          "စာသားအတွင်း ကိုးကား — (Smith, 2023) သို့မဟုတ် 'According to Smith (2023), …'။ ကိုးကား စာရင်းတွင် စာရေးသူ၊ ခုနှစ်၊ ခေါင်းစဉ်၊ ထုတ်ဝေသူ တို့ ပါဝင်သည်။",
          "တိုက်ရိုက် ကိုးကားလျှင် quotation mark သုံးပြီး စာမျက်နှာ ဖော်ပြသည် — 'learning is social' (Lee, 2021, p. 45)။",
        ],
      },
    ],
    examples: [
      { en: "Original: Many students struggle with listening. Paraphrase: Listening is difficult for a large number of learners.", mm: "မူရင်း — ကျောင်းသား များစွာ နားထောင်မှုတွင် ခက်ခဲသည်။ ပြန်ရေး — နားထောင်မှုက သင်ယူသူ အများအပြားအတွက် ခက်ခဲသည်။" },
      { en: "Original: The government reduced spending. Paraphrase: Spending was cut by the government.", mm: "မူရင်း — အစိုးရက အသုံးစရိတ် လျှော့ချခဲ့သည်။ ပြန်ရေး — အသုံးစရိတ်ကို အစိုးရက လျှော့ချခဲ့သည်။" },
      { en: "According to UNESCO (2022), access to education improved in the region.", mm: "UNESCO (2022) အရ ဒေသတွင်း ပညာရေး လက်လှမ်းမီမှု တိုးတက်ခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "စကားလုံး ၂–၃ လုံးသာ ပြောင်းပြီး ကိုးကား မထည့်ခြင်း", right: "ဖွဲ့စည်းပုံ ပြောင်း + ကိုးကား ထည့်ပါ", why: "ခိုးယူမှု ဖြစ်နိုင်သည်။" },
      { wrong: "synonym ကို အခြေအနေ မစစ်ဘဲ သုံးခြင်း", right: "အဓိပ္ပာယ် ကိုက်ညီမှု စစ်ပါ", why: "အဓိပ္ပာယ် ပြောင်းနိုင်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which is a true paraphrase?", promptMm: "ရွေးပါ။", options: ["Copying the sentence", "Changing a few words", "Changing words and structure while keeping meaning", "Deleting the sentence"], answer: 2, explanation: "ဖွဲ့စည်းပုံပါ ပြောင်းရသည်။", topic: "paraphrasing" },
      { type: "mcq", prompt: "What must accompany a paraphrase?", promptMm: "ရွေးပါ။", options: ["A citation", "A photo", "A question", "A summary"], answer: 0, explanation: "ကိုးကား လိုသည်။", topic: "paraphrasing" },
      { type: "fill", prompt: "Profits fell due ___ rising costs.", promptMm: "ဖြည့်ပါ။", answers: ["to"], explanation: "due to။", topic: "paraphrasing" },
      { type: "correct", prompt: "Correct: According to Lee (2021) say that reading helps.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["According to Lee (2021), reading helps.", "Lee (2021) says that reading helps."], explanation: "According to + noun phrase။", topic: "paraphrasing" },
    ],
    independent: [
      { type: "mcq", prompt: "Copying without citation is ___.", promptMm: "ရွေးပါ။", options: ["paraphrasing", "plagiarism", "summarising", "quoting"], answer: 1, explanation: "plagiarism။", topic: "paraphrasing" },
      { type: "fill", prompt: "A good paraphrase ___ the meaning.", promptMm: "ဖြည့်ပါ။", answers: ["retains", "keeps"], explanation: "retains the meaning။", topic: "paraphrasing" },
      { type: "order", prompt: "Arrange the paraphrase opening.", promptMm: "စီပါ။", tokens: ["According", "to", "Smith", "2023", "listening", "is", "difficult"], answer: "According to Smith 2023 listening is difficult", explanation: "ကိုးကား ဖွင့်ဝါကျ။", topic: "paraphrasing" },
      { type: "translate", prompt: "Translate: ဒီအချက်ကို Smith (2023) က ဖော်ပြထားတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["This point is made by Smith (2023).", "Smith (2023) makes this point."], explanation: "passive/active နှစ်မျိုး။", topic: "paraphrasing" },
    ],
    review: [
      { q: "ပြန်ရေး နည်းလမ်း ၄ ခု ဘာလဲ။", a: "synonym၊ word form၊ voice၊ clause structure။" },
      { q: "ကိုးကား ဘာကြောင့် လိုသလဲ။", a: "မူရင်း စာရေးသူကို အသိအမှတ်ပြုရန်နှင့် ခိုးယူမှု ရှောင်ရန်။" },
    ],
    summary: ["ပြန်ရေးခြင်းသည် စကားလုံးသာ မဟုတ် ဖွဲ့စည်းပုံပါ ပြောင်းသည်။", "ကိုးကား မပါလျှင် ခိုးယူမှု ဖြစ်သည်။", "synonym ကို အခြေအနေနှင့် စစ်ရသည်။"],
    mastery: ["ဝါကျ ၁၀ ကြောင်းကို ကိုယ်ပိုင်စကားဖြင့် ပြန်ရေးနိုင်သည်။", "ကိုးကား မှတ်တမ်း ၃ ခု မှန်ကန်စွာ ရေးနိုင်သည်။"],
    topics: ["writing", "paraphrasing", "academic integrity"],
  },
  {
    id: "g18-punctuation-editing",
    moduleId: "G",
    title: "Writing: Punctuation and Editing",
    titleMm: "ရေးသားမှု — သတ်ပုဒ် နှင့် တည်းဖြတ်ခြင်း",
    level: "B2",
    minutes: 20,
    summaryLine: "comma, semicolon, apostrophe နှင့် ဝါကျ အမှားများကို ပြင်ဆင်သည့် တည်းဖြတ်နည်း။",
    objectives: ["သတ်ပုဒ် ၅ မျိုး မှန်ကန်စွာ သုံးနိုင်မည်။", "run-on/comma splice ကို ရှာနိုင်မည်။", "ကိုယ်ပိုင် စာကို တည်းဖြတ်နိုင်မည်။"],
    vocab: [
      { en: "comma splice", mm: "ကော်မာဖြင့် ဝါကျ ဆက်မှားခြင်း", pos: "noun", example: "A comma splice joins two full sentences with a comma.", exampleMm: "comma splice သည် ဝါကျ နှစ်ကြောင်းကို ကော်မာဖြင့် ဆက်ထားသည်။", topic: "punctuation", level: "B2" },
      { en: "apostrophe", mm: "ပုဒ်ဖြတ် (')", pos: "noun", example: "Use an apostrophe for possession.", exampleMm: "ပိုင်ဆိုင်မှုအတွက် apostrophe သုံးသည်။", topic: "punctuation", level: "B1" },
      { en: "semicolon", mm: "ပုဒ်ကြိတ် (;)", pos: "noun", example: "A semicolon joins two related clauses.", exampleMm: "semicolon သည် ဆက်စပ်နေသည့် ဝါကျ နှစ်ကြောင်းကို ဆက်သည်။", topic: "punctuation", level: "B2" },
    ],
    sections: [
      {
        heading: "သတ်ပုဒ် အဓိက ၅ မျိုး",
        body: [
          "Period (.) — ဝါကျ ပြီးဆုံး။ Comma (,) — စာရင်း၊ ဆက်စပ်စကားစု (however, for example) ပြီးနောက်။ Semicolon (;) — ဆက်စပ်နေသည့် ဝါကျ နှစ်ကြောင်း (full stop မလိုဘဲ ဆက်လိုလျှင်)။",
          "Colon (:) — ရှင်းလင်းချက်/စာရင်း မိတ်ဆက်။ Apostrophe (') — ပိုင်ဆိုင်မှု (the teacher's book) နှင့် contraction (it's = it is)။",
          "it's နှင့် its — 'it's' = it is၊ 'its' = ပိုင်ဆိုင်မှု။ ဤအမှားသည် အဖြစ်များသည်။",
        ],
        table: { headers: ["သတ်ပုဒ်", "အသုံး", "ဥပမာ"], rows: [[";", "ဆက်စပ်ဝါကျ", "It rained; we stayed home."], [":", "မိတ်ဆက်", "Two things matter: time and money."], ["'s", "ပိုင်ဆိုင်မှု", "the student's essay"], ["'", "contraction", "don't, it's"]] },
      },
      {
        heading: "တည်းဖြတ် စစ်ဆေးစာရင်း",
        body: [
          "၁) ဝါကျတိုင်းတွင် subject + verb ရှိသလား။ ၂) run-on/comma splice ရှိသလား။ ၃) တင်းမာမှု (tense) ညီညာသလား။",
          "၄) စကားလုံး ထပ်နေမှု/ချန်လှပ်မှု။ ၅) သတ်ပုဒ်။ ၆) အသံထွက်ဖတ်ကြည့်ပြီး ရှည်လွန်းသည့် ဝါကျ ခွဲသည်။",
        ],
      },
    ],
    examples: [
      { en: "It rained heavily; we stayed at home.", mm: "မိုး သည်းထန်စွာ ရွာခဲ့သည်၊ ကျွန်တော်တို့ အိမ်တွင် နေခဲ့သည်။", note: "semicolon ဖြင့် ဆက်စပ်ဝါကျ။" },
      { en: "There are two reasons: cost and time.", mm: "အကြောင်းရင်း နှစ်ခု ရှိသည် — ကုန်ကျစရိတ် နှင့် အချိန်။" },
      { en: "The company lost its licence, so it's closing.", mm: "ကုမ္ပဏီက လိုင်စင် ဆုံးရှုံးသဖြင့် ပိတ်တော့မည်။" },
    ],
    mistakes: [
      { wrong: "I like tea, I don't like coffee.", right: "I like tea, but I don't like coffee.", why: "comma splice။" },
      { wrong: "Its raining outside.", right: "It's raining outside.", why: "it's = it is။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which is correct?", promptMm: "ရွေးပါ။", options: ["I was tired, I went to bed.", "I was tired; I went to bed.", "I was tired I went to bed.", "I was tired: I went to bed."], answer: 1, explanation: "semicolon ဖြင့် ဆက်သည်။", topic: "punctuation" },
      { type: "mcq", prompt: "Choose the correct word: ___ going to rain.", promptMm: "ရွေးပါ။", options: ["Its", "It's", "Its'", "It"], answer: 1, explanation: "it's = it is။", topic: "punctuation" },
      { type: "fill", prompt: "There are three options___ tea, coffee and juice. (မိတ်ဆက်)", promptMm: "ဖြည့်ပါ။", answers: [":"], explanation: "colon ဖြင့် စာရင်း မိတ်ဆက်။", topic: "punctuation" },
      { type: "correct", prompt: "Correct: The student's books are heavy and its bag is full.", promptMm: "ပိုင်ဆိုင်မှု ပြင်ပါ။", answers: ["The student's books are heavy and their bag is full."], explanation: "လူအတွက် their သုံးသည် (သို့) his/her။", topic: "punctuation" },
    ],
    independent: [
      { type: "mcq", prompt: "Which sentence is a run-on?", promptMm: "ရွေးပါ။", options: ["I called him; he answered.", "I called him he answered.", "I called him, and he answered.", "I called him. He answered."], answer: 1, explanation: "ဆက်စပ်စကားလုံး မပါဘဲ ဝါကျ နှစ်ကြောင်း ဆက်ထားသည်။", topic: "punctuation" },
      { type: "fill", prompt: "The teacher___ office is upstairs. (ပိုင်ဆိုင်မှု)", promptMm: "ဖြည့်ပါ။", answers: ["'s"], explanation: "teacher's။", topic: "punctuation" },
      { type: "mcq", prompt: "Which needs a colon?", promptMm: "ရွေးပါ။", options: ["I bought apples, pears and grapes.", "We need two things: paper and pens.", "It rained; we stayed in.", "She left early."], answer: 1, explanation: "စာရင်း မိတ်ဆက်ရန် colon။", topic: "punctuation" },
      { type: "translate", prompt: "Translate: ငါ ပင်ပန်းတယ်၊ ဒါကြောင့် အိပ်တော့မယ်။", promptMm: "semicolon သုံးပြီး ရေးပါ။", answers: ["I am tired; I am going to bed.", "I'm tired; I'll go to bed."], explanation: "semicolon ဖြင့် ဆက်စပ်ဝါကျ။", topic: "punctuation" },
    ],
    review: [
      { q: "comma splice ဆိုတာ ဘာလဲ။", a: "ဝါကျ နှစ်ကြောင်းကို ကော်မာဖြင့် ဆက်မှားခြင်း။" },
      { q: "it's နှင့် its ကွာခြားချက် ဘာလဲ။", a: "it's = it is၊ its = ပိုင်ဆိုင်မှု။" },
    ],
    summary: ["သတ်ပုဒ်က အဓိပ္ပာယ်ကို ရှင်းစေသည်။", "comma splice/run-on ကို ရှောင်သည်။", "တည်းဖြတ်စာရင်း ၆ ချက်ဖြင့် စစ်သည်။"],
    mastery: ["အမှား ၁၀ ခုပါ စာပိုဒ်ကို ပြင်နိုင်သည်။", "ကိုယ်ပိုင်စာကို တည်းဖြတ်စာရင်းဖြင့် စစ်နိုင်သည်။"],
    topics: ["writing", "punctuation", "editing"],
  },
];

export const moduleGLessonsPart3: Lesson[] = buildLessons(seeds);
