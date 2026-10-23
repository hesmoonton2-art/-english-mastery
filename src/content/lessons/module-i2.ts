import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "i5-study-plan",
    moduleId: "I",
    title: "Building a Self-Study Plan",
    titleMm: "ကိုယ်တိုင် လေ့လာမှု အစီအစဉ် တည်ဆောက်ခြင်း",
    level: "B1",
    minutes: 20,
    summaryLine: "ရည်မှန်းချက် သတ်မှတ်ပြီး ရက်သတ္တပတ် အစီအစဉ် ရေးဆွဲနည်း နှင့် လိုက်နာနည်း။",
    objectives: ["SMART ရည်မှန်းချက် ရေးနိုင်မည်။", "တစ်ပတ်စာ အစီအစဉ် ရေးနိုင်မည်။", "တိုးတက်မှုကို တိုင်းတာနိုင်မည်။"],
    vocab: [
      { en: "goal", mm: "ရည်မှန်းချက်", pos: "noun", example: "Set a clear goal for this month.", exampleMm: "ဤလအတွက် ရှင်းလင်းသည့် ရည်မှန်းချက် သတ်မှတ်ပါ။", topic: "study plan", level: "A2" },
      { en: "consistent", mm: "တသမတ်တည်း ဖြစ်သော", pos: "adjective", example: "Consistent practice beats long sessions.", exampleMm: "တသမတ်တည်း လေ့ကျင့်မှုက အချိန်အကြာကြီး လုပ်ခြင်းထက် ပိုကောင်းသည်။", topic: "study plan", level: "B1" },
      { en: "milestone", mm: "အဓိက မှတ်တိုင်", pos: "noun", example: "My first milestone is 50 new words.", exampleMm: "ကျွန်တော့် ပထမ မှတ်တိုင်က စကားလုံးအသစ် ၅၀ ဖြစ်သည်။", topic: "study plan", level: "B2" },
    ],
    sections: [
      {
        heading: "SMART ရည်မှန်းချက်",
        body: [
          "Specific (တိကျ) — 'improve English' မဟုတ်ဘဲ 'write a 150-word email without help'။ Measurable (တိုင်းတာ) — စကားလုံး ၅၀၊ မိနစ် ၂၀။",
          "Achievable (ဖြစ်နိုင်) — တစ်နေ့ ၁၀ မိနစ် ဖြင့် စသည်။ Relevant (သက်ဆိုင်) — ကိုယ့် ရည်ရွယ်ချက်နှင့် ကိုက်ညီသည်။ Time-bound (အချိန်) — '၄ ပတ်အတွင်း'။",
        ],
        table: { headers: ["ရည်မှန်းချက်", "မကောင်း", "ကောင်း"], rows: [["Specific", "English တိုးတက်ရမည်", "အီးမေးလ် ၁၅၀ လုံး ရေးနိုင်ရမည်"], ["Measurable", "ပိုကောင်းလာရမည်", "တစ်ပတ် စကားလုံး ၂၀ သင်မည်"], ["Time-bound", "တစ်နေ့", "၄ ပတ်အတွင်း"]] },
      },
      {
        heading: "တစ်ပတ်စာ အစီအစဉ်",
        body: [
          "တနင်္လာ — သင်ခန်းစာ ၁ ခု + စကားလုံး ၅ လုံး။ အင်္ဂါ — နားထောင်မှု ၁၀ မိနစ်။ ဗုဒ္ဓဟူး — စာပိုဒ် ၁ ပိုဒ် ရေး။ ကြာသပတေး — ပြန်လည် သုံးသပ်မှု (မှတ်စု + အမှား)။",
          "သောကြာ — စကားပြော လေ့ကျင့်ခန်း (အသံဖမ်း)။ စနေ — စမ်းသပ် မေးခွန်း ၂၀ ခု။ တနင်္ဂနွေ — အနားယူ သို့မဟုတ် ပေါ့ပါးသည့် ဖတ်ရှုမှု။",
          "တိုးတက်မှု တိုင်းတာ — ပြီးစီးသည့် သင်ခန်းစာ အရေအတွက်၊ မေးခွန်း တိကျမှု ရာခိုင်နှုန်း၊ ရေးထားသည့် စကားလုံး စုစုပေါင်း။ ဤအက်ပ်၏ ကိုယ်ပိုင် တိုးတက်မှု စာမျက်နှာတွင် ဤအချက်များကို ကြည့်နိုင်သည်။",
        ],
      },
    ],
    examples: [
      { en: "My goal is to write a 150-word email without help in four weeks.", mm: "ကျွန်တော့် ရည်မှန်းချက်က လေးပတ်အတွင်း အကူအညီမပါဘဲ စကားလုံး ၁၅၀ အီးမေးလ် ရေးနိုင်ရန် ဖြစ်သည်။" },
      { en: "I study for ten minutes every morning before work.", mm: "ကျွန်တော် မနက်တိုင်း အလုပ်မတိုင်မီ ဆယ်မိနစ် လေ့လာသည်။" },
      { en: "My first milestone is 20 new words and one lesson this week.", mm: "ဤအပတ် ပထမ မှတ်တိုင်က စကားလုံးအသစ် ၂၀ နှင့် သင်ခန်းစာ ၁ ခု ဖြစ်သည်။" },
    ],
    mistakes: [
      { wrong: "ရည်မှန်းချက် အလွန်ကြီးခြင်း", right: "အပတ်စဉ် မှတ်တိုင် ငယ်ငယ် ခွဲပါ", why: "မပြီးလျှင် စိတ်ဓာတ် ကျသည်။" },
      { wrong: "အချိန်ဇယား ရေးပြီး မလိုက်နာခြင်း", right: "တစ်နေ့ ၁၀ မိနစ်ဖြင့် စပါ", why: "သေးငယ်သည့် အလေ့အထ ရေရှည် တည်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which goal is SMART?", promptMm: "ရွေးပါ။", options: ["Learn English", "Learn 20 words a week for 4 weeks", "Be better", "Study sometimes"], answer: 1, explanation: "တိုင်းတာနိုင် + အချိန် သတ်မှတ်ထားသည်။", topic: "study plan" },
      { type: "mcq", prompt: "'Consistent' practice means ___.", promptMm: "ရွေးပါ။", options: ["doing it regularly", "doing it once", "doing it badly", "doing it rarely"], answer: 0, explanation: "ပုံမှန် လုပ်ခြင်း။", topic: "study plan" },
      { type: "fill", prompt: "My first ___ is 20 new words. (မှတ်တိုင်)", promptMm: "ဖြည့်ပါ။", answers: ["milestone"], explanation: "milestone။", topic: "study plan" },
      { type: "correct", prompt: "Correct: I will study during 10 minutes every day.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I will study for 10 minutes every day."], explanation: "for + အချိန်ကာလ။", topic: "study plan" },
    ],
    independent: [
      { type: "mcq", prompt: "What makes a goal measurable?", promptMm: "ရွေးပါ။", options: ["A number and a deadline", "A feeling", "A friend's opinion", "A long list"], answer: 0, explanation: "ဂဏန်း + အချိန်။", topic: "study plan" },
      { type: "fill", prompt: "Practise ___ every day for best results. (တသမတ်တည်း)", promptMm: "ဖြည့်ပါ။", answers: ["consistently"], explanation: "consistently။", topic: "study plan" },
      { type: "mcq", prompt: "What to do on the review day?", promptMm: "ရွေးပါ။", options: ["Nothing", "Revisit notes and mistakes", "Start a new course", "Delete progress"], answer: 1, explanation: "ပြန်လည် သုံးသပ်ခြင်း။", topic: "study plan" },
      { type: "translate", prompt: "Translate: ကျွန်တော် တစ်နေ့ ဆယ်မိနစ် လေ့လာတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I study for ten minutes every day.", "I study ten minutes a day."], explanation: "for ten minutes every day။", topic: "study plan" },
    ],
    review: [
      { q: "SMART ဆိုတာ ဘာလဲ။", a: "Specific, Measurable, Achievable, Relevant, Time-bound။" },
      { q: "တိုးတက်မှုကို ဘာတွေဖြင့် တိုင်းသလဲ။", a: "ပြီးစီးသည့် သင်ခန်းစာ၊ မေးခွန်း တိကျမှု၊ ရေးထားသည့် စကားလုံး အရေအတွက်။" },
    ],
    summary: ["ရည်မှန်းချက်ကို တိကျပြီး တိုင်းတာနိုင်အောင် ရေးသည်။", "အပတ်စဉ် အစီအစဉ်ဖြင့် လိုက်နာသည်။", "တိုးတက်မှုကို ဒေတာဖြင့် စစ်သည်။"],
    mastery: ["SMART ရည်မှန်းချက် ၃ ခု ရေးနိုင်သည်။", "တစ်ပတ်စာ အစီအစဉ် ရေးပြီး ၅ ရက် လိုက်နာနိုင်သည်။"],
    topics: ["study skills", "planning", "goal setting"],
  },
  {
    id: "i6-cefr-portfolio",
    moduleId: "I",
    title: "Building a CEFR Portfolio",
    titleMm: "CEFR အထောက်အထား စုစည်းမှု တည်ဆောက်ခြင်း",
    level: "B2",
    minutes: 22,
    summaryLine: "ကိုယ်ပိုင် စွမ်းရည် သက်သေ (အသံဖိုင်၊ စာမူ၊ မှတ်တမ်း) စုစည်းပြီး တိုးတက်မှု ပြသနည်း။",
    objectives: ["portfolio အပိုင်း ၄ ခု ဖွဲ့စည်းနိုင်မည်။", "သက်သေ အမျိုးအစား ရွေးနိုင်မည်။", "ကိုယ်ပိုင် ပရိုဖိုင် စာမျက်နှာ ရေးနိုင်မည်။"],
    vocab: [
      { en: "portfolio", mm: "အထောက်အထား စုစည်းမှု", pos: "noun", example: "A portfolio shows your progress over time.", exampleMm: "portfolio သည် အချိန်နှင့်အမျှ တိုးတက်မှုကို ပြသည်။", topic: "portfolio", level: "B2" },
      { en: "sample", mm: "နမူနာ", pos: "noun", example: "Include three writing samples.", exampleMm: "စာရေး နမူနာ သုံးခု ထည့်ပါ။", topic: "portfolio", level: "B1" },
      { en: "reflection", mm: "ပြန်လည် စဉ်းစားမှု", pos: "noun", example: "Add a short reflection after each sample.", exampleMm: "နမူနာတိုင်း ပြီးနောက် တိုတောင်းသည့် ပြန်လည် စဉ်းစားမှု ထည့်ပါ။", topic: "portfolio", level: "B2" },
    ],
    sections: [
      {
        heading: "အပိုင်း ၄ ခု",
        body: [
          "၁) ကိုယ်ပိုင် ပရိုဖိုင် — ရည်မှန်းချက်၊ လက်ရှိ အဆင့် (ကိုယ်တိုင် ခန့်မှန်း)။ ၂) စာရေး နမူနာ ၃ ခု (အစ/အလယ်/ယခု)။",
          "၃) ပြောဆို နမူနာ — အသံဖိုင် (ကိုယ်ပိုင် ဖုန်းဖြင့် ဖမ်းသည်၊ ဤအက်ပ်တွင် အသံ သိမ်းဆည်းခြင်း မရှိပါ)။ ၄) ပြန်လည် စဉ်းစားမှု — ဘာတွေ တိုးတက်ခဲ့၊ ဘာ ကျန်သေးသည်။",
          "ဤ portfolio သည် တရားဝင် လက်မှတ် မဟုတ်ပါ။ သင်တန်း/အလုပ် လျှောက်ရာတွင် ကိုယ်ပိုင် သက်သေအဖြစ် ပြသနိုင်သော်လည်း တရားဝင် အသိအမှတ်ပြုမှု မဟုတ်ကြောင်း ရှင်းပြထားသည်။",
        ],
        table: { headers: ["အပိုင်း", "ပါဝင်ရန်", "ရှောင်ရန်"], rows: [["Profile", "ရည်မှန်းချက် + လက်ရှိ အဆင့်", "အလွန်အမင်း ချီးမွမ်းခြင်း"], ["Writing", "နမူနာ ၃ ခု", "ကိုယ်တိုင် မရေးထားသည့် စာ"], ["Speaking", "အသံဖိုင် + ရက်စွဲ", "သူများ အသံ"], ["Reflection", "တိုးတက်မှု + နောက်အဆင့်", "ယေဘုယျ စကားလုံး"]] },
      },
      {
        heading: "သက်သေ ရွေးချယ်ခြင်း",
        body: [
          "အချိန်ကာလ တစ်လျှောက် တိုးတက်မှုကို ပြသည့် နမူနာများ ရွေးသည် — တူညီသည့် အလုပ် (ဥပမာ 'ကိုယ်ကို မိတ်ဆက်ခြင်း') ကို လ ၁ လ ခြားပြီး နှစ်ကြိမ် မှတ်တမ်းတင်သည်။",
          "မှားခဲ့သည့် စာမူကို မဖျက်ပါနှင့် — ဘာပြင်ခဲ့သည်ကို မှတ်ထားလျှင် တိုးတက်မှု ပိုရှင်းသည်။",
        ],
      },
    ],
    examples: [
      { en: "Speaking sample: a one-minute self-introduction recorded on 1 March.", mm: "ပြောဆို နမူနာ — မတ်လ ၁ ရက်တွင် အသံဖမ်းထားသည့် တစ်မိနစ် မိတ်ဆက်။" },
      { en: "Reflection: I now use past tenses more accurately, but I still pause a lot.", mm: "ပြန်လည် စဉ်းစားမှု — အတိတ်ကာလကို ပိုတိကျစွာ သုံးနိုင်ပြီ၊ သို့သော် ရပ်တန့်မှု များနေသေးသည်။" },
      { en: "This portfolio is personal evidence, not an official certificate.", mm: "ဤ portfolio သည် ကိုယ်ပိုင် သက်သေ ဖြစ်ပြီး တရားဝင် လက်မှတ် မဟုတ်ပါ။" },
    ],
    mistakes: [
      { wrong: "အကောင်းဆုံး နမူနာတစ်ခုတည်း ထည့်ခြင်း", right: "အချိန်ကာလ တစ်လျှောက် နမူနာများ ထည့်ပါ", why: "တိုးတက်မှု မမြင်ရပါ။" },
      { wrong: "portfolio ကို တရားဝင် လက်မှတ်ဟု ခေါ်ခြင်း", right: "ကိုယ်ပိုင် သက်သေဟု ခေါ်ပါ", why: "မှားယွင်းသည့် အခိုင်အမာ ဖြစ်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "What belongs in a portfolio?", promptMm: "ရွေးပါ။", options: ["Only your best work", "Samples over time with reflections", "Someone else's essay", "Only certificates"], answer: 1, explanation: "အချိန်ကာလ တစ်လျှောက် နမူနာ + ပြန်လည် စဉ်းစားမှု။", topic: "portfolio" },
      { type: "mcq", prompt: "A portfolio is ___.", promptMm: "ရွေးပါ။", options: ["an official certificate", "personal evidence of progress", "an exam score", "a textbook"], answer: 1, explanation: "ကိုယ်ပိုင် သက်သေ။", topic: "portfolio" },
      { type: "fill", prompt: "Add a short ___ after each sample.", promptMm: "ဖြည့်ပါ။", answers: ["reflection"], explanation: "reflection။", topic: "portfolio" },
      { type: "correct", prompt: "Correct: I have recorded my speaking sample in March.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I recorded my speaking sample in March."], explanation: "in + လ (အချိန်)။", topic: "portfolio" },
    ],
    independent: [
      { type: "mcq", prompt: "Which is the strongest evidence?", promptMm: "ရွေးပါ။", options: ["A friend's praise", "Two recordings one month apart", "A plan only", "A feeling"], answer: 1, explanation: "နှိုင်းယှဉ်နိုင်သည့် သက်သေ။", topic: "portfolio" },
      { type: "fill", prompt: "Include three writing ___ in your portfolio.", promptMm: "ဖြည့်ပါ။", answers: ["samples"], explanation: "samples။", topic: "portfolio" },
      { type: "mcq", prompt: "Why keep old drafts?", promptMm: "ရွေးပါ။", options: ["To show what you changed", "To fill space", "To copy them again", "To hide mistakes"], answer: 0, explanation: "ပြောင်းလဲမှု ပြရန်။", topic: "portfolio" },
      { type: "translate", prompt: "Translate: ဒီ portfolio က ကျွန်တော့် တိုးတက်မှုကို ပြတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["This portfolio shows my progress.", "The portfolio demonstrates my progress."], explanation: "shows/demonstrates progress။", topic: "portfolio" },
    ],
    review: [
      { q: "portfolio အပိုင်း ၄ ခု ဘာလဲ။", a: "profile, writing samples, speaking samples, reflections။" },
      { q: "ဤအက်ပ်တွင် အသံ သိမ်းဆည်းနိုင်သလား။", a: "မရပါ။ အသံဖိုင်ကို ကိုယ်ပိုင် ဖုန်းဖြင့် သိမ်းရသည်။" },
    ],
    summary: ["portfolio သည် အချိန်ကာလ တစ်လျှောက် တိုးတက်မှုကို ပြသည်။", "ပြန်လည် စဉ်းစားမှု မပါလျှင် တန်ဖိုး လျော့သည်။", "တရားဝင် လက်မှတ် မဟုတ်ပါ။"],
    mastery: ["portfolio အပိုင်း ၄ ခု ဖွဲ့စည်းနိုင်သည်။", "ပြန်လည် စဉ်းစားမှု ၃ ခု ရေးနိုင်သည်။"],
    topics: ["portfolio", "CEFR", "study skills"],
  },
  {
    id: "i7-exam-day-strategy",
    moduleId: "I",
    title: "Exam Day Strategy",
    titleMm: "စာမေးပွဲ နေ့ ဗျူဟာ",
    level: "B2",
    minutes: 20,
    summaryLine: "စာမေးပွဲ မတိုင်မီ ပြင်ဆင်မှု၊ ဖြေဆိုနေစဉ် အချိန် စီမံမှု နှင့် အမှား စီမံနည်း။",
    objectives: ["မတိုင်မီ ၂၄ နာရီ ပြင်ဆင်မှု စာရင်း သိမည်။", "အချိန် စီမံနိုင်မည်။", "ပြဿနာ ဖြစ်လျှင် ဘယ်လို ဆက်လုပ်ရမည် သိမည်။"],
    vocab: [
      { en: "stay calm", mm: "စိတ်တည်ငြိမ်စွာ နေသည်", pos: "phrase", example: "Stay calm if you miss a question.", exampleMm: "မေးခွန်း တစ်ခု လွတ်လျှင် စိတ်တည်ငြိမ်စွာ နေပါ။", topic: "exam day", level: "B1" },
      { en: "move on", mm: "ဆက်လုပ်သည်", pos: "phrasal verb", example: "If you get stuck, move on.", exampleMm: "ပိတ်မိလျှင် ဆက်လုပ်ပါ။", topic: "exam day", level: "B2" },
      { en: "check your answers", mm: "အဖြေများကို ပြန်စစ်သည်", pos: "phrase", example: "Leave five minutes to check your answers.", exampleMm: "အဖြေ ပြန်စစ်ရန် ငါးမိနစ် ချန်ထားပါ။", topic: "exam day", level: "B1" },
    ],
    sections: [
      {
        heading: "မတိုင်မီ ၂၄ နာရီ",
        body: [
          "အထောက်အထား (ID၊ ခွင့်ပြုစာ) နှင့် ခဲတံ၊ ဘောပင်၊ ရေ ကို ကြိုတင် ပြင်ဆင်သည်။ နေရာနှင့် အချိန်ကို အတည်ပြုသည်။",
          "ယနေ့ အသစ် မလေ့လာပါနှင့် — မှတ်စုနှင့် အမှား စာရင်းကို ပြန်ကြည့်ရုံသာ။ အိပ်ချိန် ၇–၈ နာရီ ရအောင် အိပ်သည်။",
        ],
        table: { headers: ["အချိန်", "လုပ်ဆောင်ချက်", "ရှောင်ရန်"], rows: [["တစ်ရက်အလို", "ID/ပစ္စည်း ပြင်", "အသစ် မလေ့လာ"], ["မနက်", "အစာ စား", "အစာ မစားဘဲ မထွက်"], ["မိနစ် ၁၀ ကြို", "နေရာ ရောက်", "နောက်ကျ မလာ"], ["ဖြေဆိုစဉ်", "အချိန် ခွဲ", "မေးခွန်း တစ်ခုတည်း မြုပ်မနေ"]] },
      },
      {
        heading: "ဖြေဆိုနေစဉ်",
        body: [
          "မေးခွန်း အားလုံးကို အရင် ကြည့်ပြီး အချိန် ခွဲသည် — ဥပမာ ၆၀ မိနစ်တွင် စာသား ၃ ပုဒ် ဖြစ်လျှင် ၂၀ မိနစ်စီ။",
          "ပိတ်မိလျှင် မေးခွန်းကို မှတ်ထားပြီး ဆက်လုပ်သည်။ နောက်ဆုံး ၅ မိနစ်တွင် အဖြေ မဖြည့်ရသေးသည့် နေရာ ရှိမရှိ စစ်သည်။",
          "ပြဿနာ ဖြစ်လျှင် (ကျန်းမာရေး၊ ပစ္စည်း ပျက်စီး) ကိုယ်တိုင် မဖြေရှင်းဘဲ ကြီးကြပ်သူကို ချက်ချင်း အသိပေးသည်။",
        ],
      },
    ],
    examples: [
      { en: "I'll divide the 60 minutes into three 20-minute sections.", mm: "၆၀ မိနစ်ကို ၂၀ မိနစ် သုံးပိုင်း ခွဲပါမည်။" },
      { en: "If I get stuck, I mark the question and move on.", mm: "ပိတ်မိလျှင် မေးခွန်းကို မှတ်ပြီး ဆက်လုပ်ပါမည်။" },
      { en: "I will leave five minutes to check that no answer is blank.", mm: "အဖြေ မဖြည့်ရသေးသည့် နေရာ မရှိကြောင်း စစ်ရန် ငါးမိနစ် ချန်ထားမည်။" },
    ],
    mistakes: [
      { wrong: "မေးခွန်း တစ်ခုတွင် အချိန် အလွန်ကုန်ခြင်း", right: "မှတ်ပြီး ဆက်လုပ်ပါ", why: "နောက်မေးခွန်းများ လွတ်နိုင်သည်။" },
      { wrong: "စာမေးပွဲ မတိုင်မီ ညတွင် အသစ် လေ့လာခြင်း", right: "ပြန်လည် သုံးသပ်ရုံသာ", why: "ပင်ပန်းပြီး မှတ်မိမှု ကျသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "You are stuck on question 5. What should you do?", promptMm: "ရွေးပါ။", options: ["Stay until you solve it", "Mark it and move on", "Leave the exam", "Ask a friend"], answer: 1, explanation: "အချိန် မကုန်စေရန် ဆက်လုပ်သည်။", topic: "exam day" },
      { type: "mcq", prompt: "What should you do the night before?", promptMm: "ရွေးပါ။", options: ["Learn new grammar", "Review notes and sleep", "Study all night", "Take a new mock"], answer: 1, explanation: "ပြန်ကြည့်ပြီး အိပ်သည်။", topic: "exam day" },
      { type: "fill", prompt: "Leave five minutes to ___ your answers.", promptMm: "ဖြည့်ပါ။", answers: ["check"], explanation: "check your answers။", topic: "exam day" },
      { type: "correct", prompt: "Correct: I will arrive to the exam at 10 minutes early.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I will arrive at the exam 10 minutes early.", "I will arrive 10 minutes early."], explanation: "arrive at + နေရာ။", topic: "exam day" },
    ],
    independent: [
      { type: "mcq", prompt: "How much time to leave for checking?", promptMm: "ရွေးပါ။", options: ["0 minutes", "About 5 minutes", "30 minutes", "The whole exam"], answer: 1, explanation: "၅ မိနစ်ခန့်။", topic: "exam day" },
      { type: "fill", prompt: "Stay ___ and keep breathing slowly.", promptMm: "ဖြည့်ပါ။", answers: ["calm"], explanation: "stay calm။", topic: "exam day" },
      { type: "mcq", prompt: "If there is a problem during the exam, you should ___.", promptMm: "ရွေးပါ။", options: ["keep quiet", "tell the invigilator", "leave", "copy answers"], answer: 1, explanation: "ကြီးကြပ်သူကို အသိပေးသည်။", topic: "exam day" },
      { type: "translate", prompt: "Translate: ပိတ်မိရင် မေးခွန်းကို မှတ်ပြီး ဆက်လုပ်ပါ။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["If you get stuck, mark the question and move on.", "When you get stuck, note the question and continue."], explanation: "if + imperative။", topic: "exam day" },
    ],
    review: [
      { q: "မတိုင်မီ ညတွင် ဘာလုပ်သလဲ။", a: "မှတ်စု/အမှား ပြန်ကြည့်ပြီး စောစော အိပ်သည်။" },
      { q: "ပိတ်မိသည့် မေးခွန်းကို ဘယ်လို ကိုင်တွယ်သလဲ။", a: "မှတ်ထားပြီး ဆက်လုပ်ကာ နောက်ဆုံး ပြန်ကြည့်သည်။" },
    ],
    summary: ["ပစ္စည်း နှင့် အချိန် ကို ကြိုတင် ပြင်ဆင်သည်။", "အချိန် ခွဲပြီး ပိတ်မိလျှင် ဆက်လုပ်သည်။", "နောက်ဆုံး မိနစ်များတွင် အဖြေ ပြန်စစ်သည်။"],
    mastery: ["စာမေးပွဲ အစီအစဉ် ၁ ခု ရေးနိုင်သည်။", "အချိန် ခွဲဝေမှု တွက်နိုင်သည်။"],
    topics: ["exam strategy", "study skills", "IELTS"],
  },
];

export const moduleILessonsPart2: Lesson[] = buildLessons(seeds);
