import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "h5-critical-reading",
    moduleId: "H",
    title: "Critical Reading: Evaluating Arguments",
    titleMm: "ဝေဖန်ဖတ်ရှုမှု — ငြင်းခုံမှုများကို အကဲဖြတ်ခြင်း",
    level: "C1",
    minutes: 24,
    summaryLine: "ငြင်းခုံမှုတစ်ခု၏ အဆို၊ အထောက်အထား နှင့် ယုတ္တိ အားနည်းချက်များကို စိစစ်နည်း။",
    objectives: ["အဆို နှင့် အထောက်အထား ခွဲခြားနိုင်မည်။", "ယုတ္တိ မှား ၃ မျိုး ဖော်ပြနိုင်မည်။", "ခိုင်မာမှုကို အကဲဖြတ်နိုင်မည်။"],
    vocab: [
      { en: "assumption", mm: "ယူဆချက်", pos: "noun", example: "The argument rests on a weak assumption.", exampleMm: "ငြင်းခုံမှုသည် အားနည်းသည့် ယူဆချက်အပေါ် အခြေခံသည်။", topic: "critical reading", level: "C1" },
      { en: "generalisation", mm: "ယေဘုယျချော်ချခြင်း", pos: "noun", example: "That is a sweeping generalisation.", exampleMm: "ထိုသည် ကျယ်ပြန့်လွန်းသည့် ယေဘုယျချော်ချခြင်း ဖြစ်သည်။", topic: "critical reading", level: "C1" },
      { en: "correlation", mm: "ဆက်စပ်မှု", pos: "noun", example: "Correlation does not prove causation.", exampleMm: "ဆက်စပ်မှုက အကြောင်းရင်းကို မသက်သေပါ။", topic: "critical reading", level: "C1" },
    ],
    sections: [
      {
        heading: "အကဲဖြတ် မေးခွန်း ၄ ခု",
        body: [
          "၁) အဆို (claim) က ဘာလဲ။ ၂) အထောက်အထား (evidence) က ဘာလဲ — ဒေတာ၊ ကျွမ်းကျင်သူ၊ ဥပမာ သို့မဟုတ် ထင်မြင်ချက်သာ လား။",
          "၃) ယူဆချက် (assumption) က ဘာလဲ — မပြောဘဲ ယူထားသည့် အချက်။ ၄) ဆန့်ကျင်ချက် ကို ဖြေရှင်းသလား။",
          "အထောက်အထား အမျိုးအစား — စစ်တမ်း၊ စမ်းသပ်မှု၊ ကိန်းဂဏန်း၊ ကျွမ်းကျင်သူ အမြင်၊ ကိုယ်ပိုင် အတွေ့အကြုံ။ အားလုံးတွင် ကန့်သတ်ချက် ရှိသည်။",
        ],
        table: { headers: ["ယုတ္တိ မှား", "ဖော်ပြချက်", "ဥပမာ"], rows: [["hasty generalisation", "နမူနာ ငယ်မှ ယေဘုယျချ", "သူငယ်ချင်း ၂ ဦး ဆိုတာနဲ့ လူတိုင်း ဆိုသည်"], ["false cause", "ဆက်စပ်မှုကို အကြောင်းရင်းဟု ယူ", "ရေခဲမုန့် ရောင်းတာ တက်လို့ နစ်မြုပ်မှု တက်"], ["appeal to authority", "ကျွမ်းကျင်သူ ဆိုတာနဲ့ မှန်သည်ဟု ယူ", "နာမည်ကြီး ဆရာဝန် ဆိုလို့"], ["straw man", "ဆန့်ကျင်ချက်ကို အားနည်းအောင် လုပ်", "သူတို့ ပြောတာ မဟုတ်တာကို ဖြေချ"]] },
      },
      {
        heading: "လေ့ကျင့်နည်း",
        body: [
          "စာသားကို ဖတ်ရင်း ကော်လံ ၃ ခု (အဆို / အထောက်အထား / မေးခွန်း) ဖြင့် မှတ်စု ရေးသည်။",
          "'The data suggest' နှင့် 'The data prove' ကွာခြားချက်ကို သတိထားသည် — ဒုတိယက ခိုင်မာလွန်းသည်။",
        ],
      },
    ],
    examples: [
      { en: "Claim: Online learning is ineffective. Evidence: One student failed after a month.", mm: "အဆို — အွန်လိုင်း သင်ယူမှု မထိရောက်ဘူး။ အထောက်အထား — ကျောင်းသား တစ်ဦး တစ်လအကြာ ကျခဲ့သည်။", note: "hasty generalisation။" },
      { en: "Ice-cream sales and drowning rates both rise in summer, but ice cream does not cause drowning.", mm: "နွေရာသီတွင် ရေခဲမုန့် ရောင်းအား နှင့် နစ်မြုပ်မှု နှစ်ခုလုံး တက်သည်၊ သို့သော် ရေခဲမုန့်က နစ်မြုပ်မှုကို မဖြစ်စေပါ။", note: "false cause။" },
      { en: "The study included only 15 participants, so the results should be treated with caution.", mm: "လေ့လာမှုတွင် ပါဝင်သူ ၁၅ ဦးသာ ပါဝင်သဖြင့် ရလဒ်များကို သတိထားသင့်သည်။" },
    ],
    mistakes: [
      { wrong: "အထောက်အထား မစစ်ဘဲ အဆို လက်ခံခြင်း", right: "နမူနာ ပမာဏ နှင့် ရင်းမြစ် စစ်ပါ", why: "အားနည်းသည့် အထောက်အထား ဖြစ်နိုင်သည်။" },
      { wrong: "ဝေဖန်ချက်တွင် ကိုယ်ပိုင် ထင်မြင်ချက်သာ ရေးခြင်း", right: "စာသား အထောက်အထား ကိုးကားပါ", why: "အကဲဖြတ်ချက် ခိုင်မာရန်။" },
    ],
    guided: [
      { type: "mcq", prompt: "\"Two of my friends hated it, so everyone will.\" This is ___.", promptMm: "ရွေးပါ။", options: ["a strong study", "a hasty generalisation", "a correlation", "a counter-argument"], answer: 1, explanation: "နမူနာ ၂ ဦးမှ ယေဘုယျချခြင်း။", topic: "critical reading" },
      { type: "mcq", prompt: "\"A famous actor says this diet works.\" This is ___.", promptMm: "ရွေးပါ။", options: ["appeal to authority", "false cause", "data", "a survey"], answer: 0, explanation: "ကျွမ်းကျင်မှု မရှိသည့် ပုဂ္ဂိုလ်ကို ကိုးကားခြင်း။", topic: "critical reading" },
      { type: "fill", prompt: "Correlation does not prove ___.", promptMm: "ဖြည့်ပါ။", answers: ["causation", "cause"], explanation: "correlation ≠ causation။", topic: "critical reading" },
      { type: "correct", prompt: "Correct: The data proves that all students cheat.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The data suggest that some students cheat.", "The data show that some students cheat."], explanation: "ခိုင်မာလွန်းသည့် ချက်ကို လျှော့ပါ။", topic: "critical reading" },
    ],
    independent: [
      { type: "mcq", prompt: "An assumption is ___.", promptMm: "ရွေးပါ။", options: ["stated evidence", "something accepted without proof", "a conclusion", "a citation"], answer: 1, explanation: "မသက်သေဘဲ ယူထားသည့် အချက်။", topic: "critical reading" },
      { type: "fill", prompt: "The argument rests on a weak ___.", promptMm: "ဖြည့်ပါ။", answers: ["assumption"], explanation: "weak assumption။", topic: "critical reading" },
      { type: "mcq", prompt: "Which is strongest evidence?", promptMm: "ရွေးပါ။", options: ["My cousin said so.", "A national survey of 5,000 people.", "A popular blog post.", "A comment online."], answer: 1, explanation: "နမူနာ ကြီး စစ်တမ်း။", topic: "critical reading" },
      { type: "translate", prompt: "Translate: ဒီအထောက်အထားက လုံလောက်မှု မရှိဘူး။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["This evidence is insufficient.", "The evidence is not sufficient."], explanation: "insufficient / not sufficient။", topic: "critical reading" },
    ],
    review: [
      { q: "အကဲဖြတ် မေးခွန်း ၄ ခု ဘာလဲ။", a: "အဆို၊ အထောက်အထား၊ ယူဆချက်၊ ဆန့်ကျင်ချက် ဖြေရှင်းမှု။" },
      { q: "false cause ဆိုတာ ဘာလဲ။", a: "ဆက်စပ်မှုကို အကြောင်းရင်းအဖြစ် မှားယွင်း ယူခြင်း။" },
    ],
    summary: ["အဆို နှင့် အထောက်အထား ခွဲခြားဖတ်သည်။", "ယုတ္တိ မှား ၄ မျိုး မှတ်မိသည်။", "အထောက်အထား အားနည်းလျှင် ကောက်ချက် မလက်ခံပါ။"],
    mastery: ["စာသား ၁ ခုတွင် ယုတ္တိ မှား ၃ ခု ဖော်ပြနိုင်သည်။", "အကဲဖြတ်ချက် (စကားလုံး ၁၅၀) ရေးနိုင်သည်။"],
    topics: ["critical thinking", "reading", "argument"],
  },
  {
    id: "h6-presentation-language",
    moduleId: "H",
    title: "Presentation Language: Signposting and Emphasis",
    titleMm: "တင်ဆက်မှု ဘာသာစကား — လမ်းညွှန်ခြင်း နှင့် အလေးပေးခြင်း",
    level: "C1",
    minutes: 22,
    summaryLine: "တင်ဆက်မှုတွင် အပိုင်းများ လမ်းညွှန်၊ အလေးပေး နှင့် နိဂုံးချုပ်သည့် ဘာသာစကား။",
    objectives: ["signpost စကားစု ၁၀ ခု သုံးနိုင်မည်။", "အလေးပေး ဖော်ပြချက် ရေးနိုင်မည်။", "မိနစ် ၃ တင်ဆက်မှု ဖွဲ့စည်းနိုင်မည်။"],
    vocab: [
      { en: "turn to", mm: "ကူးပြောင်းသည်", pos: "phrasal verb", example: "Let me turn to the second point.", exampleMm: "ဒုတိယ အချက်သို့ ကူးပြောင်းပါရစေ။", topic: "presentation", level: "B2" },
      { en: "highlight", mm: "အလေးပေးဖော်ပြသည်", pos: "verb", example: "I would like to highlight two risks.", exampleMm: "အန္တရာယ် နှစ်ခုကို အလေးပေး ဖော်ပြလိုပါသည်။", topic: "presentation", level: "B2" },
      { en: "to sum up", mm: "အနှစ်ချုပ်ရန်", pos: "phrase", example: "To sum up, the plan is realistic.", exampleMm: "အနှစ်ချုပ်ရန် အစီအစဉ်က လက်တွေ့ကျသည်။", topic: "presentation", level: "B2" },
    ],
    sections: [
      {
        heading: "Signpost စကားစုများ",
        body: [
          "အစ — 'Good morning, everyone. Today I'm going to talk about…'။ အစီအစဉ် — 'I'll cover three areas: first…, second…, and finally…'။",
          "ကူးပြောင်း — 'Let me turn to…', 'Moving on to…', 'This brings me to…'။ ဥပမာ — 'For instance…', 'Take, for example…'။ နိဂုံး — 'To sum up…', 'In conclusion…', 'Thank you — I'm happy to take questions.'",
          "အလေးပေး — 'What really matters here is…', 'The key point is…', 'I'd like to stress that…'။ ပြောရာတွင် ခဏ ရပ်ခြင်း နှင့် ဖိသံ က အလေးပေး ဖြစ်စေသည်။",
        ],
        table: { headers: ["လုပ်ဆောင်ချက်", "စကားစု", "မရှောင်ရ"], rows: [["အစ", "Today I'm going to talk about…", "Okay, um, so…"], ["အစီအစဉ်", "I'll cover three areas.", "I have many things."], ["ကူးပြောင်း", "Moving on to…", "Next thing…"], ["နိဂုံး", "To sum up, …", "That's it."]] },
      },
      {
        heading: "ဖွဲ့စည်းပုံ (မိနစ် ၃)",
        body: [
          "မိနစ် ၀–၀.၅ — မိတ်ဆက် + ရည်ရွယ်ချက်။ မိနစ် ၀.၅–၂ — အချက် ၂–၃ (တစ်ခုစီ ၄၀ စက္ကန့်)။ မိနစ် ၂–၂.၅ — ဥပမာ/ဒေတာ။ မိနစ် ၂.၅–၃ — အနှစ်ချုပ် + မေးခွန်း။",
          "စလိုက် (slide) တစ်ခုတွင် စကားလုံး ၆ လုံးခန့်သာ ထားပြီး ပြောသည့် စကားက အဓိက ဖြစ်သည်။",
        ],
      },
    ],
    examples: [
      { en: "Today I'm going to talk about three ways to improve our delivery times.", mm: "ယနေ့ ကျွန်တော် ပို့ဆောင်ချိန် တိုးတက်စေမည့် နည်းလမ်း သုံးခုအကြောင်း ပြောပါမည်။" },
      { en: "This brings me to the second point: cost.", mm: "ဒုတိယ အချက် — ကုန်ကျစရိတ်သို့ ရောက်လာပါပြီ။" },
      { en: "To sum up, we should start with a small pilot.", mm: "အနှစ်ချုပ်ရန် ကျွန်တော်တို့ စမ်းသပ် အစီအစဉ် ငယ်ဖြင့် စတင်သင့်သည်။" },
    ],
    mistakes: [
      { wrong: "အပိုင်းတိုင်းကို 'and then, and then' ဖြင့် ဆက်ခြင်း", right: "signpost စကားစု ကွဲပြားစွာ သုံးပါ", why: "နားထောင်သူ လိုက်ရ လွယ်စေရန်။" },
      { wrong: "အလေးပေး စကားလုံး မပါဘဲ အချက်အားလုံး တူတူပြောခြင်း", right: "'The key point is…' ဖြင့် အဓိကအချက် ခွဲပါ", why: "နားထောင်သူ အဓိကအချက် မှတ်မိရန်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which phrase moves to a new section?", promptMm: "ရွေးပါ။", options: ["To sum up", "Moving on to", "For instance", "Thank you"], answer: 1, explanation: "ကူးပြောင်း စကားစု။", topic: "presentation" },
      { type: "mcq", prompt: "Which phrase emphasises?", promptMm: "ရွေးပါ။", options: ["The key point is…", "By the way…", "Anyway…", "Sort of…"], answer: 0, explanation: "အလေးပေး စကားစု။", topic: "presentation" },
      { type: "fill", prompt: "To ___ up, the results were positive.", promptMm: "ဖြည့်ပါ။", answers: ["sum"], explanation: "to sum up။", topic: "presentation" },
      { type: "correct", prompt: "Correct: I will talk you about our new plan.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I will talk to you about our new plan.", "I will talk about our new plan."], explanation: "talk to someone about something။", topic: "presentation" },
    ],
    independent: [
      { type: "mcq", prompt: "Best opening for a formal talk?", promptMm: "ရွေးပါ။", options: ["So, yeah, hi.", "Good morning, everyone. Today I'm going to talk about…", "Hello, listen.", "Okay, whatever."], answer: 1, explanation: "တရားဝင် ဖွင့်ဝါကျ။", topic: "presentation" },
      { type: "fill", prompt: "This brings me ___ the second point.", promptMm: "ဖြည့်ပါ။", answers: ["to"], explanation: "brings me to။", topic: "presentation" },
      { type: "order", prompt: "Arrange the sentence.", promptMm: "စီပါ။", tokens: ["I", "would", "like", "to", "highlight", "two", "risks"], answer: "I would like to highlight two risks", explanation: "အလေးပေး ဖော်ပြချက်။", topic: "presentation" },
      { type: "translate", prompt: "Translate: နောက်အချက်ကို ကူးပါမယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Let me turn to the next point.", "Moving on to the next point."], explanation: "turn to / move on to။", topic: "presentation" },
    ],
    review: [
      { q: "signpost စကားစု ဘာကြောင့် လိုသလဲ။", a: "နားထောင်သူ အပိုင်းများကို လိုက်ရ လွယ်စေရန်။" },
      { q: "မိနစ် ၃ တင်ဆက်မှု အချိန် ခွဲဝေမှု ဘာလဲ။", a: "မိတ်ဆက် ၃၀ စက္ကန့်၊ အချက် ၂–၃၊ အနှစ်ချုပ် ၃၀ စက္ကန့်။" },
    ],
    summary: ["signpost ဖြင့် အပိုင်းများ ခွဲသည်။", "အလေးပေး စကားစုဖြင့် အဓိကအချက် ပြသည်။", "အချိန် ခွဲဝေမှု ရှိရမည်။"],
    mastery: ["မိနစ် ၃ တင်ဆက်မှု ကိုယ်တိုင် ရေးပြီး ပြောနိုင်သည်။", "signpost စကားစု ၁၀ ခု သုံးနိုင်သည်။"],
    topics: ["speaking", "presentation", "signposting"],
  },
  {
    id: "h7-advanced-idioms",
    moduleId: "H",
    title: "Advanced Idioms and Fixed Expressions",
    titleMm: "အဆင့်မြင့် သွယ်ဝိုက်စကား နှင့် အသုံးအနှုန်းများ",
    level: "C1",
    minutes: 22,
    summaryLine: "အဓိပ္ပာယ်ကို တိုက်ရိုက် မဖော်ပြသည့် idiom များကို မှန်ကန်စွာ နားလည် သုံးနည်း။",
    objectives: ["idiom ၁၀ ခု အဓိပ္ပာယ် ဖော်ပြနိုင်မည်။", "idiom ကို သင့်တော်သည့် အခြေအနေတွင် သုံးနိုင်မည်။", "idiom နှင့် တိုက်ရိုက် အနက်ကို ခွဲခြားနိုင်မည်။"],
    vocab: [
      { en: "break the ice", mm: "စကားစ ရန် အနှောင့်အယှက် ဖြေလျော့သည်", pos: "idiom", example: "He told a joke to break the ice.", exampleMm: "စကားစ ရလွယ်စေရန် သူ ဟာသ တစ်ခု ပြောခဲ့သည်။", topic: "idioms", level: "B2" },
      { en: "get the hang of", mm: "ကျွမ်းကျင်လာသည်", pos: "idiom", example: "You'll get the hang of it soon.", exampleMm: "မကြာမီ ကျွမ်းကျင်လာပါမည်။", topic: "idioms", level: "B2" },
      { en: "cut corners", mm: "အရည်အသွေး လျှော့ချပြီး လုပ်သည်", pos: "idiom", example: "Don't cut corners on safety.", exampleMm: "ဘေးကင်းရေးတွင် အရည်အသွေး မလျှော့ပါနှင့်။", topic: "idioms", level: "C1" },
    ],
    sections: [
      {
        heading: "အသုံးများသည့် idiom များ",
        body: [
          "break the ice — စကားစ ရလွယ်စေသည်။ get the hang of — ကျွမ်းကျင်လာသည်။ cut corners — အရည်အသွေး လျှော့သည်။",
          "on the same page — သဘောတူညီသည်။ in the long run — ရေရှည်တွင်။ under the weather — နေမကောင်း။ hit the books — စာကျက်သည်။",
          "a blessing in disguise — ကံကောင်းသည့် အဖြစ်အပျက်။ cost an arm and a leg — အလွန်စျေးကြီးသည်။ let the cat out of the bag — လျှို့ဝှက်ချက် ဖော်သည်။",
        ],
        table: { headers: ["Idiom", "အဓိပ္ပာယ်", "မသုံးသင့်သည့် နေရာ"], rows: [["break the ice", "စကားစ ရန်ကူညီ", "တရားဝင် အစီရင်ခံစာ"], ["cut corners", "အရည်အသွေး လျှော့", "တရားဝင် စာတမ်း"], ["in the long run", "ရေရှည်", "အခြေအနေ မလိုက်"], ["under the weather", "နေမကောင်း", "ဆေးစစ်ချက်"]] },
      },
      {
        heading: "အသုံးပြုရာတွင် သတိထားရန်",
        body: [
          "idiom သည် စကားပြောတွင် သဘာဝကျပြီး တရားဝင် စာတွင် များသောအားဖြင့် မသုံးပါ။ ဘာသာပြန်ရာတွင် တိုက်ရိုက် မဘာသာပြန်ပါနှင့်။",
          "idiom ၏ ဝါကျဖွဲ့စည်းပုံ ပြောင်းလျှင် မှားနိုင်သည် — 'break the ice' ကို 'break ice' ဟု မရေးပါ။ အခြေအနေနှင့် ကိုက်ညီမှုကို ဦးစွာ စစ်သည်။",
        ],
      },
    ],
    examples: [
      { en: "She told a funny story to break the ice at the meeting.", mm: "အစည်းအဝေးတွင် စကားစ ရလွယ်စေရန် သူမ ရယ်စရာ ဇာတ်လမ်း ပြောခဲ့သည်။" },
      { en: "The repairs were expensive, but in the long run they will save money.", mm: "ပြုပြင်မှု ကုန်ကျစရိတ် များခဲ့သည်၊ သို့သော် ရေရှည်တွင် ငွေ သက်သာစေမည်။" },
      { en: "He was under the weather, so he missed the class.", mm: "သူ နေမကောင်းသဖြင့် အတန်း လွတ်ခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "idiom ကို စာလုံးအတိုင်း ဘာသာပြန်ခြင်း", right: "အဓိပ္ပာယ်ကို ဘာသာပြန်ပါ", why: "အဓိပ္ပာယ် လွဲနိုင်သည်။" },
      { wrong: "တရားဝင် စာတွင် idiom အများကြီး သုံးခြင်း", right: "လေသံနှင့် ကိုက်ညီအောင် ရွေးပါ", why: "မသင့်လျော်သည့် လေသံ ဖြစ်နိုင်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "\"Cut corners\" means ___.", promptMm: "ရွေးပါ။", options: ["work faster and better", "do something cheaply and badly", "take a shortcut home", "cut paper"], answer: 1, explanation: "အရည်အသွေး လျှော့ခြင်း။", topic: "idioms" },
      { type: "mcq", prompt: "\"Under the weather\" means ___.", promptMm: "ရွေးပါ။", options: ["outside", "sick", "happy", "late"], answer: 1, explanation: "နေမကောင်း။", topic: "idioms" },
      { type: "fill", prompt: "Let's make sure we're on the same ___.", promptMm: "ဖြည့်ပါ။", answers: ["page"], explanation: "on the same page။", topic: "idioms" },
      { type: "correct", prompt: "Correct: The trip cost me arm and leg.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The trip cost me an arm and a leg."], explanation: "an arm and a leg။", topic: "idioms" },
    ],
    independent: [
      { type: "mcq", prompt: "\"A blessing in disguise\" is ___.", promptMm: "ရွေးပါ။", options: ["a bad thing that turns out good", "a hidden gift", "a religious event", "a mistake"], answer: 0, explanation: "ကံကောင်းသည့် အဖြစ်အပျက်။", topic: "idioms" },
      { type: "fill", prompt: "It took me a week to get the ___ of the software.", promptMm: "ဖြည့်ပါ။", answers: ["hang"], explanation: "get the hang of။", topic: "idioms" },
      { type: "mcq", prompt: "Which idiom fits an exam context?", promptMm: "ရွေးပါ။", options: ["hit the books", "under the weather", "break the ice", "cost an arm and a leg"], answer: 0, explanation: "စာကျက်ခြင်း။", topic: "idioms" },
      { type: "translate", prompt: "Translate: ရေရှည်မှာ အချိန် သက်သာလိမ့်မယ်။", promptMm: "idiom သုံးပြီး အင်္ဂလိပ်လို ရေးပါ။", answers: ["In the long run, it will save time.", "It will save time in the long run."], explanation: "in the long run။", topic: "idioms" },
    ],
    review: [
      { q: "idiom ကို တရားဝင် စာတွင် သုံးသင့်သလား။", a: "များသောအားဖြင့် မသုံးသင့်ပါ။" },
      { q: "idiom ဘာသာပြန်ရာတွင် ဘာလုပ်သင့်သလဲ။", a: "စာလုံးအတိုင်း မဟုတ်ဘဲ အဓိပ္ပာယ်ကို ပြန်ပေးသည်။" },
    ],
    summary: ["idiom သည် အဓိပ္ပာယ် တိုက်ရိုက် မဟုတ်ပါ။", "အခြေအနေ နှင့် လေသံ ကိုက်ညီမှု စစ်သည်။", "ဝါကျဖွဲ့စည်းပုံ မပြောင်းရ။"],
    mastery: ["idiom ၁၀ ခု အဓိပ္ပာယ် ဖြေနိုင်သည်။", "idiom ၅ ခုကို သင့်တော်သည့် ဝါကျတွင် သုံးနိုင်သည်။"],
    topics: ["vocabulary", "idioms", "C1"],
  },
  {
    id: "h8-nominalisation",
    moduleId: "H",
    title: "Nominalisation for Academic Style",
    titleMm: "ပညာရေးဆန် စတိုင်အတွက် နာမ်ပြောင်းခြင်း",
    level: "C1",
    minutes: 22,
    summaryLine: "ကြိယာ/နာမဝိသေသနကို နာမ်အဖြစ် ပြောင်းခြင်းဖြင့် တရားဝင် ပညာရေးဆန် ဝါကျ ရေးနည်း။",
    objectives: ["nominalisation ဆိုသည်ကို ရှင်းပြနိုင်မည်။", "ဝါကျ ၁၀ ကြောင်း နာမ်ပြောင်းနိုင်မည်။", "အလွန်အကျွံ မသုံးရန် သိမည်။"],
    vocab: [
      { en: "nominalisation", mm: "ကြိယာကို နာမ်အဖြစ် ပြောင်းခြင်း", pos: "noun", example: "Nominalisation makes writing more formal.", exampleMm: "နာမ်ပြောင်းခြင်းက စာကို ပိုတရားဝင် ဖြစ်စေသည်။", topic: "academic style", level: "C1" },
      { en: "analysis", mm: "ခွဲခြမ်းစိတ်ဖြာမှု", pos: "noun", example: "Their analysis revealed a clear trend.", exampleMm: "သူတို့၏ ခွဲခြမ်းစိတ်ဖြာမှုက ရှင်းလင်းသည့် လမ်းကြောင်း ဖော်ပြခဲ့သည်။", topic: "academic style", level: "B2" },
      { en: "implementation", mm: "အကောင်အထည်ဖော်မှု", pos: "noun", example: "Implementation of the plan began in May.", exampleMm: "အစီအစဉ် အကောင်အထည်ဖော်မှုက မေလတွင် စတင်ခဲ့သည်။", topic: "academic style", level: "C1" },
    ],
    sections: [
      {
        heading: "ပြောင်းနည်း",
        body: [
          "ကြိယာ → နာမ် — decide → decision, analyse → analysis, implement → implementation, fail → failure, grow → growth။",
          "နာမဝိသေသန → နာမ် — difficult → difficulty, accurate → accuracy, important → importance။",
          "ဝါကျ ပြောင်းပုံ — 'The team analysed the data and found that costs were rising.' → 'The team's analysis of the data revealed rising costs.'",
        ],
        table: { headers: ["ကြိယာ", "နာမ်", "ဥပမာ"], rows: [["decide", "decision", "The decision was made."], ["apply", "application", "The application was rejected."], ["fail", "failure", "The failure was costly."], ["improve", "improvement", "A slight improvement was seen."]] },
      },
      {
        heading: "အန္တရာယ်",
        body: [
          "nominalisation က ဝါကျကို တိုစေပြီး တရားဝင် ဖြစ်စေသည်၊ သို့သော် အလွန်အကျွံ သုံးလျှင် ဖတ်ရ ခက်ပြီး လုပ်ဆောင်သူ (agent) ပျောက်သွားသည်။",
          "'The implementation of the policy by the department resulted in a reduction in complaints' ထက် 'The department implemented the policy, which reduced complaints' က ပိုရှင်းသည်။",
        ],
      },
    ],
    examples: [
      { en: "They decided to postpone the launch. → Their decision to postpone the launch was unexpected.", mm: "သူတို့ စတင်ရန် ရွှေ့ဆိုင်းရန် ဆုံးဖြတ်ခဲ့သည်။ → ရွှေ့ဆိုင်းရန် သူတို့၏ ဆုံးဖြတ်ချက်က မမျှော်လင့်ခဲ့ပါ။" },
      { en: "Costs increased rapidly. → The rapid increase in costs concerned managers.", mm: "ကုန်ကျစရိတ် လျင်မြန်စွာ တိုးလာသည်။ → ကုန်ကျစရိတ် လျင်မြန်စွာ တိုးလာမှုက မန်နေဂျာများကို စိုးရိမ်စေခဲ့သည်။" },
      { en: "The study analysed the results carefully. → The study's careful analysis of the results was praised.", mm: "လေ့လာမှုက ရလဒ်များကို ဂရုတစိုက် ခွဲခြမ်းစိတ်ဖြာခဲ့သည်။ → ရလဒ်များကို ဂရုတစိုက် ခွဲခြမ်းစိတ်ဖြာမှုကို ချီးမွမ်းခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "nominalisation အလွန်အကျွံ သုံးခြင်း", right: "ဝါကျ ၁ ကြောင်းလျှင် နာမ် ၁ ခုခန့်သာ", why: "ဖတ်ရ ခက်လာသည်။" },
      { wrong: "လုပ်ဆောင်သူ မပါဘဲ ရေးခြင်း", right: "လိုအပ်လျှင် by-phrase ဖြင့် ဖော်ပြပါ", why: "တာဝန်ရှိသူ ပျောက်သွားနိုင်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "The noun form of 'decide' is ___.", promptMm: "ရွေးပါ။", options: ["deciding", "decision", "decisive", "decided"], answer: 1, explanation: "decision။", topic: "academic style" },
      { type: "mcq", prompt: "Which is nominalised?", promptMm: "ရွေးပါ။", options: ["They improved the system.", "The improvement of the system was significant.", "The system got better.", "They made it better."], answer: 1, explanation: "improvement (နာမ်)။", topic: "academic style" },
      { type: "fill", prompt: "The ___ of the plan took three months. (implement)", promptMm: "ဖြည့်ပါ။", answers: ["implementation"], explanation: "implementation။", topic: "academic style" },
      { type: "correct", prompt: "Correct: Their analyse of the data was careful.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["Their analysis of the data was careful."], explanation: "analyse (verb) → analysis (noun)။", topic: "academic style" },
    ],
    independent: [
      { type: "mcq", prompt: "The noun form of 'fail' is ___.", promptMm: "ရွေးပါ။", options: ["failure", "failing", "failed", "failment"], answer: 0, explanation: "failure။", topic: "academic style" },
      { type: "fill", prompt: "The ___ in costs worried managers. (increase)", promptMm: "ဖြည့်ပါ။", answers: ["increase"], explanation: "increase (နာမ်အဖြစ်)။", topic: "academic style" },
      { type: "mcq", prompt: "Which sentence is clearer?", promptMm: "ရွေးပါ။", options: ["The implementation of the policy by the team resulted in a reduction in errors.", "The team implemented the policy, which reduced errors.", "Policy implementation error reduction occurred.", "Errors were reduced by implementation."], answer: 1, explanation: "လုပ်ဆောင်သူ ပါပြီး ရှင်းသည်။", topic: "academic style" },
      { type: "translate", prompt: "Translate: စနစ် တိုးတက်မှုက ထင်ရှားသည်။", promptMm: "nominalisation ဖြင့် အင်္ဂလိပ်လို ရေးပါ။", answers: ["The improvement in the system is significant.", "The improvement of the system was significant."], explanation: "improvement in/of။", topic: "academic style" },
    ],
    review: [
      { q: "nominalisation ဆိုတာ ဘာလဲ။", a: "ကြိယာ/နာမဝိသေသနကို နာမ်အဖြစ် ပြောင်းခြင်း။" },
      { q: "အလွန်အကျွံ သုံးလျှင် ဘာဖြစ်သလဲ။", a: "ဝါကျ ဖတ်ရ ခက်ပြီး လုပ်ဆောင်သူ ပျောက်သည်။" },
    ],
    summary: ["nominalisation က စတိုင်ကို တရားဝင် ဖြစ်စေသည်။", "အတိုင်းအတာ ရှိရမည်။", "လုပ်ဆောင်သူ ပါဝင်မှု စစ်သည်။"],
    mastery: ["ဝါကျ ၁၀ ကြောင်း nominalise လုပ်နိုင်သည်။", "တရားဝင် စာပိုဒ် ၁ ပိုဒ် ရေးနိုင်သည်။"],
    topics: ["writing", "academic style", "grammar"],
  },
  {
    id: "h9-hedging",
    moduleId: "H",
    title: "Hedging and Certainty",
    titleMm: "ခန့်မှန်းဖော်ပြခြင်း နှင့် သေချာမှု အဆင့်",
    level: "C1",
    minutes: 22,
    summaryLine: "အဆိုကို ခိုင်မာမှု အဆင့်အလိုက် ဖော်ပြခြင်း (hedging) နှင့် ပညာရေးဆန် လေသံ။",
    objectives: ["ခိုင်မာမှု အဆင့် ၃ ခု ခွဲခြားနိုင်မည်။", "hedging စကားလုံး ၁၀ ခု သုံးနိုင်မည်။", "အဆိုကို သင့်တော်စွာ လျော့ပြောနိုင်မည်။"],
    vocab: [
      { en: "tend to", mm: "များသောအားဖြင့် …လေ့ရှိသည်", pos: "phrase", example: "Learners tend to avoid long sentences.", exampleMm: "သင်ယူသူများ ရှည်သည့် ဝါကျကို ရှောင်လေ့ ရှိသည်။", topic: "hedging", level: "B2" },
      { en: "it appears that", mm: "…သလို ထင်ရသည်", pos: "phrase", example: "It appears that the trend is slowing.", exampleMm: "လမ်းကြောင်း နှေးလာသလို ထင်ရသည်။", topic: "hedging", level: "C1" },
      { en: "to some extent", mm: "အတိုင်းအတာ တစ်ခုအထိ", pos: "phrase", example: "The claim is true to some extent.", exampleMm: "အဆိုက အတိုင်းအတာ တစ်ခုအထိ မှန်သည်။", topic: "hedging", level: "C1" },
    ],
    sections: [
      {
        heading: "ခိုင်မာမှု အဆင့် ၃ ခု",
        body: [
          "ခိုင်မာ — 'This proves that…', 'The data clearly show that…' (အထောက်အထား အလွန်ခိုင်လျှင် သာ)။",
          "အလယ်အလတ် — 'The data suggest that…', 'It is likely that…', 'This indicates that…'။ အနည်းငယ် — 'It may be that…', 'This could partly explain…', 'It appears that…'။",
          "ပညာရေးဆန် စာတွင် အလယ်အလတ်/အနည်းငယ် ကို ပိုသုံးသည်။ ခိုင်မာလွန်းသည့် အဆိုသည် အားနည်းသည့် အထောက်အထားနှင့် တွဲလျှင် မယုံကြည်ရ ဖြစ်သည်။",
        ],
        table: { headers: ["အဆင့်", "စကားလုံး", "ဥပမာ"], rows: [["ခိုင်မာ", "proves, clearly shows", "The data clearly show…"], ["အလယ်", "suggests, indicates, likely", "The data suggest…"], ["အနည်းငယ်", "may, might, appears, possibly", "It may be that…"], ["ကန့်သတ်", "to some extent, in most cases", "This is true to some extent."]] },
      },
      {
        heading: "အသုံးချပုံ",
        body: [
          "အထောက်အထား နည်းလျှင် လျော့ပြောသည် — 'Only 12 people were surveyed, so the results may not apply widely.'",
          "ခိုင်မာမှု လျှော့ခြင်းက အားနည်းမှု မဟုတ်ပါ။ သတိထားမှုကို ပြသည့် ပညာရေးဆန် အလေ့အထ ဖြစ်သည်။",
        ],
      },
    ],
    examples: [
      { en: "The data suggest that sleep affects memory.", mm: "ဒေတာများက အိပ်စက်မှုသည် မှတ်ဉာဏ်အပေါ် သက်ရောက်သည်ဟု ထောက်ပြသည်။", note: "အလယ်အလတ် ခိုင်မာမှု။" },
      { en: "It appears that the trend has slowed since 2022.", mm: "၂၀၂၂ နောက်ပိုင်း လမ်းကြောင်း နှေးလာသလို ထင်ရသည်။", note: "အနည်းငယ် ခိုင်မာမှု။" },
      { en: "The results may not apply to rural schools.", mm: "ရလဒ်များသည် ကျေးလက် ကျောင်းများအတွက် အကျုံး မဝင်နိုင်ပါ။", note: "ကန့်သတ်ချက်။" },
    ],
    mistakes: [
      { wrong: "နမူနာ ၁၀ ဦးဖြင့် 'proves' သုံးခြင်း", right: "'suggests/may indicate' သုံးပါ", why: "အထောက်အထား မလုံလောက်။" },
      { wrong: "hedging အလွန်များလွှမ်းခြင်း", right: "ဝါကျတစ်ကြောင်းလျှင် ၁ ခုခန့်သာ", why: "အဆို မရှင်းတော့ပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which is the most cautious?", promptMm: "ရွေးပါ။", options: ["This proves…", "This shows…", "This may indicate…", "This clearly demonstrates…"], answer: 2, explanation: "may indicate = အနည်းငယ် ခိုင်မာမှု။", topic: "hedging" },
      { type: "mcq", prompt: "Which word hedges a claim?", promptMm: "ရွေးပါ။", options: ["always", "never", "tend to", "definitely"], answer: 2, explanation: "tend to = လေ့ရှိသည်။", topic: "hedging" },
      { type: "fill", prompt: "The claim is true ___ some extent.", promptMm: "ဖြည့်ပါ။", answers: ["to"], explanation: "to some extent။", topic: "hedging" },
      { type: "correct", prompt: "Correct: This proves that all students need more sleep.", promptMm: "လျော့ပြောပါ။", answers: ["This suggests that many students may need more sleep."], explanation: "proves → suggests; all → many; may ထည့်။", topic: "hedging" },
    ],
    independent: [
      { type: "mcq", prompt: "'It is likely that' expresses ___.", promptMm: "ရွေးပါ။", options: ["certainty", "probability", "impossibility", "an order"], answer: 1, explanation: "ဖြစ်နိုင်ခြေ။", topic: "hedging" },
      { type: "fill", prompt: "Learners ___ to avoid long sentences.", promptMm: "ဖြည့်ပါ။", answers: ["tend"], explanation: "tend to။", topic: "hedging" },
      { type: "mcq", prompt: "Too much hedging makes writing ___.", promptMm: "ရွေးပါ။", options: ["clearer", "vague", "shorter", "formal"], answer: 1, explanation: "မရှင်းတော့ပါ။", topic: "hedging" },
      { type: "translate", prompt: "Translate: ဒီရလဒ်တွေက ကျေးလက်ကျောင်းတွေအတွက် အကျုံးမဝင်နိုင်ဘူး။", promptMm: "cautious လေသံဖြင့် ရေးပါ။", answers: ["These results may not apply to rural schools.", "The results might not apply to rural schools."], explanation: "may not apply to။", topic: "hedging" },
    ],
    review: [
      { q: "ခိုင်မာမှု အဆင့် ၃ ခု ဘာလဲ။", a: "ခိုင်မာ (proves)၊ အလယ် (suggests)၊ အနည်းငယ် (may/appears)။" },
      { q: "hedging ဘာကြောင့် လိုသလဲ။", a: "အထောက်အထား နှင့် ကိုက်ညီအောင် ဆိုရန်နှင့် သတိထားမှု ပြရန်။" },
    ],
    summary: ["အဆိုကို အထောက်အထား နှင့် ကိုက်ညီအောင် လျော့ပြောသည်။", "hedging သည် ပညာရေးဆန် အလေ့အထ။", "အလွန်များလွှမ်းလျှင် မရှင်းတော့ပါ။"],
    mastery: ["ခိုင်မာလွန်းသည့် ဝါကျ ၁၀ ကြောင်း လျော့ပြောနိုင်သည်။", "အထောက်အထား အလိုက် ခိုင်မာမှု အဆင့် ရွေးနိုင်သည်။"],
    topics: ["writing", "academic style", "hedging"],
  },
];

export const moduleHLessonsPart2: Lesson[] = buildLessons(seeds);
