import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "b23-future-continuous",
    moduleId: "B",
    title: "Future Continuous",
    titleMm: "Future Continuous",
    level: "B1",
    minutes: 18,
    summaryLine: "အနာဂတ် အချိန်တစ်ခုတွင် ဖြစ်ပေါ်နေမည့် လုပ်ဆောင်မှုကို 'will be + verb-ing' ဖြင့် ဖော်ပြနည်း။",
    objectives: [
      "will be + -ing ပုံစံကို ဖွဲ့နိုင်မည်။",
      "Future simple နှင့် future continuous ကွာခြားချက်ကို ပြနိုင်မည်။",
      "at 8 o'clock tomorrow ကဲ့သို့ အချိန်နှင့် တွဲသုံးနိုင်မည်။",
    ],
    vocab: [
      { en: "meanwhile", mm: "ထိုအတောအတွင်း", pos: "adverb", example: "I will be studying; meanwhile, you can cook.", exampleMm: "ငါ စာကျက်နေမည်၊ ထိုအတောအတွင်း မင်း ချက်ပြုတ်နိုင်သည်။", topic: "future forms", level: "B2" },
      { en: "expect", mm: "မျှော်လင့်သည်", pos: "verb", example: "We expect to arrive at noon.", exampleMm: "မွန်းတည့်တွင် ရောက်မည်ဟု မျှော်လင့်သည်။", topic: "future forms", level: "B1" },
      { en: "rush hour", mm: "အလုပ်သွား/အလုပ်ပြန် အချိန် လူထူချိန်", pos: "noun", example: "Avoid the rush hour if you can.", exampleMm: "တတ်နိုင်လျှင် လူထူချိန်ကို ရှောင်ပါ။", topic: "future forms", level: "B2" },
    ],
    sections: [
      {
        heading: "ဖွဲ့စည်းပုံ",
        body: [
          "will be + verb-ing — 'At 9 a.m. tomorrow I will be sitting in the exam hall.' အနာဂတ် အချိန် တစ်ခုတွင် လုပ်ဆောင်မှု ဆက်လက် ဖြစ်ပေါ်နေမည်ကို ပြသည်။",
          "မေးခွန်း — 'Will you be using the car tonight?' ငြင်းပယ် — 'I won't be working tomorrow.'",
          "Future continuous ကို ယဉ်ကျေးစွာ တောင်းဆိုရာတွင်လည်း သုံးသည် — 'Will you be needing this chair?' သည် 'Do you need this chair?' ထက် ပိုနူးညံ့သည်။",
        ],
        table: {
          headers: ["ပုံစံ", "ဥပမာ", "အဓိပ္ပာယ်"],
          rows: [
            ["will be + -ing", "I will be flying at 6.", "၆ နာရီတွင် လေယာဉ်ပေါ် ရှိနေမည်"],
            ["won't be + -ing", "She won't be coming.", "သူမ လာမည် မဟုတ်ပါ"],
            ["Will … be + -ing?", "Will you be waiting?", "စောင့်နေမည်လား"],
          ],
        },
      },
      {
        heading: "ဘယ်အခါ သုံးသလဲ",
        body: [
          "အနာဂတ် အချိန် တိတိကျကျတွင် ဖြစ်ပေါ်နေမည့် လုပ်ဆောင်မှု — 'This time tomorrow we will be travelling to Taunggyi.'",
          "ပုံမှန် ဖြစ်ပျက်နေကျ အနာဂတ် အစီအစဉ် — 'I will be working from home next week.'",
          "Future simple သည် ဆုံးဖြတ်ချက်/ကတိ/ခန့်မှန်းချက်ကို ပြသည် — 'I will call you.' Future continuous သည် အချိန်တစ်ခုတွင် ဖြစ်နေမည့် အခြေအနေကို ပြသည် — 'I will be calling clients all morning.'",
        ],
      },
    ],
    examples: [
      { en: "At this time tomorrow, I will be taking my exam.", mm: "မနက်ဖြန် ဒီအချိန်တွင် ငါ စာမေးပွဲ ဖြေနေမည်။" },
      { en: "Don't call at seven — we will be having dinner.", mm: "ခုနစ်နာရီတွင် မဖုန်းဆက်ပါနှင့် — ညစာ စားနေမည်။", note: "အနာဂတ် အချိန် + လုပ်ဆောင်မှု။" },
      { en: "Will you be joining us for lunch?", mm: "နေ့လယ်စာ ကျွန်တော်တို့နှင့် လာမည်လား။", note: "ယဉ်ကျေးသော မေးခွန်း။" },
    ],
    mistakes: [
      { wrong: "I will be work tomorrow.", right: "I will be working tomorrow.", why: "be နောက်တွင် -ing လာရသည်။" },
      { wrong: "Will you be use the printer?", right: "Will you be using the printer?", why: "be + -ing ပုံစံ လိုသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "At 8 p.m. we ___ dinner.", promptMm: "ရွေးပါ။", options: ["will have", "will be having", "have had", "are have"], answer: 1, explanation: "အနာဂတ် အချိန်တွင် ဖြစ်နေမည့် လုပ်ဆောင်မှု။", topic: "future continuous" },
      { type: "fill", prompt: "This time next week I ___ be flying to Bangkok.", promptMm: "ဖြည့်ပါ။", answers: ["will"], explanation: "will be + -ing။", topic: "future continuous" },
      { type: "mcq", prompt: "Which is more polite?", promptMm: "ရွေးပါ။", options: ["Will you be using this chair?", "Use this chair?", "You use this chair now.", "Do you use this chair?"], answer: 0, explanation: "future continuous ဖြင့် နူးညံ့စွာ မေးသည်။", topic: "future continuous" },
      { type: "correct", prompt: "Correct: She will be cook at noon.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["She will be cooking at noon.", "She will be cooking at noon"], explanation: "be + -ing။", topic: "future continuous" },
    ],
    independent: [
      { type: "mcq", prompt: "Don't phone at 6 — I ___ the news.", promptMm: "ရွေးပါ။", options: ["will watch", "will be watching", "watch", "watched"], answer: 1, explanation: "ထိုအချိန်တွင် ကြည့်နေမည်။", topic: "future continuous" },
      { type: "fill", prompt: "They ___ be travelling all night.", promptMm: "ငြင်းပယ် ဖြည့်ပါ။", answers: ["won't", "will not"], explanation: "won't be + -ing။", topic: "future continuous" },
      { type: "mcq", prompt: "Choose the correct question.", promptMm: "မှန်ကန်သည့် မေးခွန်း ရွေးပါ။", options: ["Will you be coming?", "Will you coming be?", "Will be you coming?", "You will be coming?"], answer: 0, explanation: "Will + subject + be + -ing။", topic: "future continuous" },
      { type: "translate", prompt: "Translate: မနက်ဖြန် ဆယ်နာရီမှာ ငါ အစည်းအဝေး တက်နေမယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["At ten tomorrow I will be attending a meeting.", "I will be attending a meeting at ten tomorrow."], explanation: "will be + -ing + အချိန်။", topic: "future continuous" },
    ],
    review: [
      { q: "Future continuous ၏ ပုံစံ ဘာလဲ။", a: "will be + verb-ing။" },
      { q: "Future simple နှင့် ဘယ်လို ကွာသလဲ။", a: "Simple က ဆုံးဖြတ်ချက်/ကတိ၊ continuous က အချိန်တစ်ခုတွင် ဖြစ်နေမည့် လုပ်ဆောင်မှု။" },
    ],
    summary: [
      "will be + -ing ဖြင့် အနာဂတ် အချိန်တွင် ဖြစ်နေမည့် လုပ်ဆောင်မှုကို ပြသည်။",
      "မေးခွန်းတွင် Will + subject + be + -ing။",
      "ယဉ်ကျေးစွာ တောင်းဆိုရာတွင်လည်း သုံးသည်။",
    ],
    mastery: [
      "ကွက်လပ် ၁၀ ခုတွင် ၈ ခု မှန်ကန်စွာ ဖြည့်နိုင်သည်။",
      "မနက်ဖြန် အစီအစဉ်ကို ဝါကျ ၅ ခုဖြင့် ရေးနိုင်သည်။",
    ],
    topics: ["future continuous", "future forms"],
  },
  {
    id: "b24-zero-first-conditional",
    moduleId: "B",
    title: "Zero and First Conditionals",
    titleMm: "Zero နှင့် First Conditional",
    level: "B1",
    minutes: 20,
    summaryLine: "အမြဲမှန်သော အကြောင်းရင်း-အကျိုး (zero) နှင့် အနာဂတ်တွင် ဖြစ်နိုင်သော အခြေအနေ (first conditional) ကို ခွဲခြားနည်း။",
    objectives: [
      "If + present simple, present simple (zero) ကို သုံးနိုင်မည်။",
      "If + present simple, will + verb (first) ကို သုံးနိုင်မည်။",
      "unless ကို if…not နှင့် လဲလှယ်နိုင်မည်။",
    ],
    vocab: [
      { en: "unless", mm: "…မဟုတ်လျှင်", pos: "conjunction", example: "You will fail unless you study.", exampleMm: "မလေ့လာလျှင် ကျရှုံးမည်။", topic: "conditionals", level: "B1" },
      { en: "result", mm: "ရလဒ်", pos: "noun", example: "The result depends on the weather.", exampleMm: "ရလဒ်သည် ရာသီဥတုအပေါ် မူတည်သည်။", topic: "conditionals", level: "B1" },
      { en: "in case", mm: "ဖြစ်နိုင်သည့်အတွက် ကြိုတင်၍", pos: "phrase", example: "Take an umbrella in case it rains.", exampleMm: "မိုးရွာနိုင်သဖြင့် ထီးယူသွားပါ။", topic: "conditionals", level: "B1" },
    ],
    sections: [
      {
        heading: "Zero conditional — အမြဲမှန်သည်",
        body: [
          "If + present simple, present simple — 'If you heat ice, it melts.' သိပ္ပံ အမှန်တရား၊ ယေဘုယျ အလေ့အထ။",
          "If နေရာတွင် when ကို လဲလှယ်နိုင်သည် (အဓိပ္ပာယ် မပြောင်း) — 'When you heat ice, it melts.'",
          "အဓိပၸါယ်တူသော နောက်တစ်မျိုး — 'If I drink coffee late, I can't sleep.'",
        ],
        table: {
          headers: ["အမျိုးအစား", "if ဝါကျခွဲ", "အဓိက ဝါကျ", "ဥပမာ"],
          rows: [
            ["Zero", "present simple", "present simple", "If it rains, the road gets slippery."],
            ["First", "present simple", "will + verb", "If it rains, we will stay home."],
            ["First (advice)", "present simple", "imperative", "If you feel ill, see a doctor."],
            ["First (negative)", "unless + present", "will + verb", "Unless you hurry, you will be late."],
          ],
        },
      },
      {
        heading: "First conditional — အနာဂတ် ဖြစ်နိုင်ခြေ",
        body: [
          "If + present simple, will/can/may + verb — 'If you finish early, we will go out.' အနာဂတ်တွင် ဖြစ်နိုင်သည့် အခြေအနေနှင့် ရလဒ်ကို ပြသည်။",
          "အရေးကြီးချက် — if ဝါကျခွဲတွင် will ကို မသုံးပါ။ 'If it will rain' မှားသည်၊ 'If it rains' မှန်သည်။",
          "unless = if…not — 'Unless you study, you will fail.' = 'If you don't study, you will fail.'",
        ],
      },
    ],
    examples: [
      { en: "If you press this button, the machine stops.", mm: "ဒီခလုတ်ကို နှိပ်လျှင် စက်ရပ်သွားသည်။", note: "zero — အမြဲမှန်။" },
      { en: "If I have time, I will help you.", mm: "အချိန်ရှိလျှင် ကူညီမည်။" },
      { en: "Unless we leave now, we will miss the bus.", mm: "ယခု မထွက်လျှင် ဘတ်စ်ကား လွတ်သွားမည်။" },
    ],
    mistakes: [
      { wrong: "If it will rain, we will cancel.", right: "If it rains, we will cancel.", why: "if ဝါကျခွဲတွင် present simple သုံးသည်။" },
      { wrong: "Unless you don't hurry, you'll be late.", right: "Unless you hurry, you'll be late.", why: "unless တွင် ငြင်းပယ် ထပ်မထည့်ပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "If you mix red and blue, you ___ purple.", promptMm: "ရွေးပါ။", options: ["get", "will get", "got", "would get"], answer: 0, explanation: "zero conditional — အမြဲမှန်။", topic: "conditionals" },
      { type: "mcq", prompt: "If it ___ tomorrow, we will stay home.", promptMm: "ရွေးပါ။", options: ["will rain", "rains", "rained", "is raining"], answer: 1, explanation: "if ဝါကျခွဲ → present simple။", topic: "conditionals" },
      { type: "fill", prompt: "___ you apologise, she won't forgive you.", promptMm: "unless ဖြည့်ပါ။", answers: ["Unless"], explanation: "unless = if…not။", topic: "conditionals" },
      { type: "correct", prompt: "Correct: If I will see him, I will tell him.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["If I see him, I will tell him.", "If I see him, I will tell him"], explanation: "if clause တွင် will မသုံးပါ။", topic: "conditionals" },
    ],
    independent: [
      { type: "mcq", prompt: "Take a jacket ___ it gets cold.", promptMm: "ရွေးပါ။", options: ["in case", "unless", "if not", "so that"], answer: 0, explanation: "in case = ဖြစ်နိုင်သဖြင့် ကြိုတင်၍။", topic: "conditionals" },
      { type: "fill", prompt: "If you don't study, you ___ fail. (will)", promptMm: "ဖြည့်ပါ။", answers: ["will"], explanation: "first conditional ရလဒ်။", topic: "conditionals" },
      { type: "order", prompt: "Arrange the sentence.", promptMm: "စီပါ။", tokens: ["you", "If", "early", "leave", "will", "arrive", "you", "on", "time"], answer: "If you leave early you will arrive on time", explanation: "if + present, will + verb။", topic: "conditionals" },
      { type: "translate", prompt: "Translate: မိုးရွာရင် ကျွန်တော်တို့ မသွားဘူး။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["If it rains, we won't go.", "If it rains, we will not go.", "We won't go if it rains."], explanation: "if + present simple, will not။", topic: "conditionals" },
    ],
    review: [
      { q: "Zero conditional ကို ဘယ်အခါ သုံးသလဲ။", a: "သိပ္ပံအမှန်တရား၊ ယေဘုယျ အလေ့အထ ကဲ့သို့ အမြဲမှန်သော အကြောင်းရင်း-အကျိုးအတွက်။" },
      { q: "unless နှင့် if…not ကွာခြားချက် ဘာလဲ။", a: "အဓိပ္ပာယ် တူသည်။ unless ပါလျှင် not ကို ထပ်မထည့်ပါ။" },
    ],
    summary: [
      "Zero = if + present, present (အမြဲမှန်)။",
      "First = if + present, will + verb (အနာဂတ် ဖြစ်နိုင်ခြေ)။",
      "if ဝါကျခွဲတွင် will မသုံးပါ။",
    ],
    mastery: [
      "ကွက်လပ် ၁၀ ခုတွင် ၈ ခု မှန်ကန်သည်။",
      "zero/first conditional ဝါကျ ၆ ခု ကိုယ်တိုင် ရေးနိုင်သည်။",
    ],
    topics: ["conditionals", "sentence structure"],
  },
  {
    id: "b25-second-third-conditional",
    moduleId: "B",
    title: "Second and Third Conditionals",
    titleMm: "Second နှင့် Third Conditional",
    level: "B2",
    minutes: 22,
    summaryLine: "လက်တွေ့ မဖြစ်နိုင်သော/စိတ်ကူးယဉ် အခြေအနေ (second) နှင့် ပြီးခဲ့သည့် အတိတ်ကို ပြောင်းလဲ၍ မရသော အခြေအနေ (third) ကို ဖော်ပြနည်း။",
    objectives: [
      "If + past simple, would + verb ကို သုံးနိုင်မည်။",
      "If + past perfect, would have + V3 ကို သုံးနိုင်မည်။",
      "mixed conditional အခြေခံကို နားလည်မည်။",
    ],
    vocab: [
      { en: "imagine", mm: "စိတ်ကူးကြည့်သည်", pos: "verb", example: "Imagine you had one day free.", exampleMm: "တစ်ရက် အားလပ်သည်ဟု စိတ်ကူးကြည့်ပါ။", topic: "conditionals", level: "B1" },
      { en: "regret", mm: "နောင်တရသည်", pos: "verb", example: "I regret not taking that job.", exampleMm: "အဲဒီအလုပ်ကို မယူခဲ့သည်ကို နောင်တရသည်။", topic: "conditionals", level: "B2" },
      { en: "hypothetical", mm: "စိတ်ကူးယဉ်ဆန်သော", pos: "adjective", example: "This is a hypothetical situation.", exampleMm: "ဒါက စိတ်ကူးယဉ် အခြေအနေ ဖြစ်သည်။", topic: "conditionals", level: "B2" },
    ],
    sections: [
      {
        heading: "Second conditional — လက်တွေ့ မဖြစ်နိုင်/စိတ်ကူး",
        body: [
          "If + past simple, would + verb — 'If I had more money, I would travel.' ယခု အခြေအနေနှင့် ဆန့်ကျင်သည် (ငွေ အများကြီး မရှိပါ)။",
          "be ကြိယာတွင် 'were' ကို တရားဝင် စာတွင် သုံးသည် — 'If I were you, I would apply.'",
          "အကြံပြုချက်ပေးရန် သဘာဝကျသည် — 'If I were you, I would apologise.'",
        ],
        table: {
          headers: ["အမျိုးအစား", "if ဝါကျခွဲ", "အဓိက ဝါကျ", "အခြေအနေ"],
          rows: [
            ["Second", "past simple", "would + verb", "လက်တွေ့ မဖြစ်နိုင် (ယခု)"],
            ["Second (be)", "were", "would + verb", "If I were rich…"],
            ["Third", "past perfect", "would have + V3", "အတိတ်ကို ပြောင်း၍ မရ"],
            ["Mixed", "past perfect", "would + verb", "အတိတ် အကြောင်းရင်း → ယခု ရလဒ်"],
          ],
        },
      },
      {
        heading: "Third conditional — အတိတ်က နောင်တ",
        body: [
          "If + had + V3, would have + V3 — 'If I had studied harder, I would have passed.' အတိတ်တွင် မဖြစ်ခဲ့သောအရာကို ပြောင်းလဲ၍ မရကြောင်း ပြသည်။",
          "ငြင်းပယ်ပုံ — 'If she hadn't missed the bus, she wouldn't have been late.'",
          "Mixed conditional — အတိတ် အကြောင်းရင်း နှင့် ယခု ရလဒ် — 'If I had invested early, I would be wealthy now.' (အတိတ်က ရင်းနှီးခဲ့လျှင် ယခု ချမ်းသာမည်)",
        ],
      },
    ],
    examples: [
      { en: "If I spoke Japanese, I could work in Osaka.", mm: "ဂျပန်စကား ပြောနိုင်လျှင် အိုဆာကာတွင် အလုပ်လုပ်နိုင်မည်။", note: "second — ယခု မပြောနိုင်။" },
      { en: "If we had left earlier, we would have caught the train.", mm: "အစောကြီး ထွက်ခဲ့လျှင် ရထား မိမည်။", note: "third — အတိတ်။" },
      { en: "If I were you, I would tell the truth.", mm: "ငါ မင်းနေရာမှာ ဆိုလျှင် အမှန်ကို ပြောမည်။" },
    ],
    mistakes: [
      { wrong: "If I would have known, I would have helped.", right: "If I had known, I would have helped.", why: "if ဝါကျခွဲတွင် would have မသုံးပါ၊ had + V3 သုံးသည်။" },
      { wrong: "If I had money, I will buy it.", right: "If I had money, I would buy it.", why: "second conditional ရလဒ်တွင် would။" },
    ],
    guided: [
      { type: "mcq", prompt: "If I ___ taller, I would play basketball.", promptMm: "ရွေးပါ။", options: ["am", "were", "will be", "had been"], answer: 1, explanation: "second conditional — be → were။", topic: "conditionals" },
      { type: "mcq", prompt: "If they had booked earlier, they ___ a seat.", promptMm: "ရွေးပါ။", options: ["would get", "would have got", "will get", "got"], answer: 1, explanation: "third conditional → would have + V3။", topic: "conditionals" },
      { type: "fill", prompt: "If she ___ (know) the answer, she would tell us.", promptMm: "ဖြည့်ပါ။", answers: ["knew"], explanation: "second conditional → past simple။", topic: "conditionals" },
      { type: "correct", prompt: "Correct: If I would have studied, I would pass.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["If I had studied, I would have passed.", "If I had studied, I would have passed"], explanation: "third conditional ပုံစံ။", topic: "conditionals" },
    ],
    independent: [
      { type: "mcq", prompt: "If I ___ you, I would accept the offer.", promptMm: "ရွေးပါ။", options: ["am", "was", "were", "be"], answer: 2, explanation: "If I were you သည် ပုံသေ သုံးနှုန်းဖြစ်သည်။", topic: "conditionals" },
      { type: "fill", prompt: "We would have arrived on time if we ___ (not/miss) the bus.", promptMm: "ဖြည့်ပါ။", answers: ["hadn't missed", "had not missed"], explanation: "third conditional if clause → had not + V3။", topic: "conditionals" },
      { type: "mcq", prompt: "Which sentence describes an unreal past?", promptMm: "အတိတ် မဖြစ်ခဲ့သည့် အခြေအနေ ရွေးပါ။", options: ["If it rains, we'll cancel.", "If I had a car, I'd drive.", "If I had known, I'd have called.", "If you heat water, it boils."], answer: 2, explanation: "third conditional သည် အတိတ်ကို ပြန်လည် စိတ်ကူးသည်။", topic: "conditionals" },
      { type: "translate", prompt: "Translate: ငါ မင်းနေရာမှာ ဆိုရင် တောင်းပန်မယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["If I were you, I would apologise.", "If I were you, I'd apologise.", "If I were you, I would apologize."], explanation: "If I were you, I would + verb။", topic: "conditionals" },
    ],
    review: [
      { q: "Second conditional တွင် be ကို ဘယ်လို သုံးသလဲ။", a: "တရားဝင် စာတွင် were ကို သုံးသည် — If I were…။" },
      { q: "Third conditional က ဘာအကြောင်း ပြသလဲ။", a: "အတိတ်တွင် မဖြစ်ခဲ့သော အရာနှင့် ဖြစ်ခဲ့လျှင် ရမည့် ရလဒ်ကို ပြသည် (နောင်တ/ခန့်မှန်း)။" },
    ],
    summary: [
      "Second = if + past simple, would + verb (စိတ်ကူး/မဖြစ်နိုင်)။",
      "Third = if + had + V3, would have + V3 (အတိတ်)။",
      "if ဝါကျခွဲတွင် would မသုံးပါ။",
    ],
    mastery: [
      "ကွက်လပ် ၁၀ ခုတွင် ၈ ခု မှန်ကန်စွာ ဖြည့်နိုင်သည်။",
      "နောင်တ တစ်ခုကို third conditional ဖြင့် ရေးနိုင်သည်။",
    ],
    topics: ["conditionals", "hypothetical"],
  },
  {
    id: "b26-wish-if-only",
    moduleId: "B",
    title: "Wish and If Only",
    titleMm: "Wish နှင့် If Only",
    level: "B2",
    minutes: 20,
    summaryLine: "လက်ရှိ အခြေအနေ မကျေနပ်မှု၊ အတိတ် နောင်တနှင့် စိတ်အနှောင့်အယှက် ဖြစ်စေမှုတို့ကို wish/if only ဖြင့် ဖော်ပြနည်း။",
    objectives: [
      "wish + past simple ဖြင့် ယခု အခြေအနေ မကျေနပ်မှု ဖော်ပြနိုင်မည်။",
      "wish + past perfect ဖြင့် အတိတ် နောင်တ ဖော်ပြနိုင်မည်။",
      "wish + would ဖြင့် စိတ်အနှောင့်အယှက် ဖော်ပြနိုင်မည်။",
    ],
    vocab: [
      { en: "wish", mm: "ဆန္ဒရှိသည်", pos: "verb", example: "I wish I had more time.", exampleMm: "အချိန် ပိုရှိချင်သည်။", topic: "wish", level: "B1" },
      { en: "complain", mm: "ညည်းညူသည်", pos: "verb", example: "He always complains about the weather.", exampleMm: "သူက ရာသီဥတုအကြောင်း အမြဲ ညည်းညူသည်။", topic: "wish", level: "B1" },
      { en: "noisy", mm: "ဆူညံသော", pos: "adjective", example: "The neighbours are very noisy.", exampleMm: "အိမ်နီးချင်းများ အလွန် ဆူညံသည်။", topic: "wish", level: "A2" },
    ],
    sections: [
      {
        heading: "အခြေအနေ ၃ မျိုး",
        body: [
          "wish + past simple — ယခု အခြေအနေကို မကျေနပ် — 'I wish I knew the answer.' (မသိပါ)။ be သည် were ဖြစ်သည် — 'I wish I were taller.'",
          "wish + past perfect — အတိတ်ကို နောင်တရ — 'I wish I had studied harder.' (မလေ့လာခဲ့ပါ)။",
          "wish + would — တခြားသူ၏ လုပ်ဆောင်မှုကို မကျေနပ်/ပြောင်းစေလို — 'I wish you would stop shouting.' ကိုယ်တိုင် အကြောင်းတွင် would မသုံးပါ ('I wish I would…' မှားသည်)။",
        ],
        table: {
          headers: ["အခြေအနေ", "ပုံစံ", "ဥပမာ"],
          rows: [
            ["ယခု မကျေနပ်", "wish + past simple", "I wish I had a car."],
            ["အတိတ် နောင်တ", "wish + past perfect", "I wish I had left earlier."],
            ["စိတ်အနှောင့်အယှက်", "wish + would", "I wish it would stop raining."],
            ["တူညီသော", "if only", "If only I had listened."],
          ],
        },
      },
      {
        heading: "if only နှင့် သတိထားရန်",
        body: [
          "if only သည် wish နှင့် အဓိပ္ပာယ်တူပြီး ပိုအလေးပေး ဖော်ပြသည် — 'If only I had known!'",
          "wish နောက်တွင် that ထည့်နိုင်သည် — 'I wish that I had more time.'",
          "wish သည် 'ဆုတောင်းသည်' အဓိပ္ပာယ်ဖြင့် တွဲသုံးလျှင် အခြားပုံစံ — 'I wish you good luck.' (wish + somebody + noun)။",
        ],
      },
    ],
    examples: [
      { en: "I wish I could speak French.", mm: "ပြင်သစ်စကား ပြောနိုင်ချင်သည်။", note: "ယခု မပြောနိုင်။" },
      { en: "She wishes she hadn't said that.", mm: "အဲဒီလို မပြောခဲ့ချင်ပါ။", note: "အတိတ် နောင်တ။" },
      { en: "If only we had booked earlier!", mm: "အစောကြီး ကြိုတင် မှာခဲ့ရင် ကောင်းမှာ။" },
    ],
    mistakes: [
      { wrong: "I wish I would have more time.", right: "I wish I had more time.", why: "လက်ရှိ အခြေအနေအတွက် wish + past simple။" },
      { wrong: "I wish I would study harder last year.", right: "I wish I had studied harder last year.", why: "အတိတ် နောင်တအတွက် wish + past perfect။" },
    ],
    guided: [
      { type: "mcq", prompt: "I wish I ___ a better phone.", promptMm: "ရွေးပါ။", options: ["have", "had", "will have", "would have"], answer: 1, explanation: "ယခု မကျေနပ် → past simple။", topic: "wish" },
      { type: "mcq", prompt: "I wish it ___ raining.", promptMm: "ရွေးပါ။", options: ["stops", "would stop", "stopped to", "will stop"], answer: 1, explanation: "ဆက်ဖြစ်နေသည်ကို မကျေနပ် → wish + would။", topic: "wish" },
      { type: "fill", prompt: "She wishes she ___ (not/forget) his birthday.", promptMm: "ဖြည့်ပါ။", answers: ["hadn't forgotten", "had not forgotten"], explanation: "အတိတ် နောင်တ → had not + V3။", topic: "wish" },
      { type: "correct", prompt: "Correct: I wish I am taller.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I wish I were taller.", "I wish I was taller."], explanation: "wish + past simple; be → were။", topic: "wish" },
    ],
    independent: [
      { type: "mcq", prompt: "If only I ___ more carefully!", promptMm: "ရွေးပါ။", options: ["drive", "drove", "had driven", "would drive"], answer: 2, explanation: "အတိတ် နောင်တ → past perfect။", topic: "wish" },
      { type: "fill", prompt: "I wish you ___ (stop) interrupting me.", promptMm: "ဖြည့်ပါ။", answers: ["would stop"], explanation: "တခြားသူ၏ အပြုအမူ → wish + would။", topic: "wish" },
      { type: "mcq", prompt: "Which is correct?", promptMm: "မှန်ကန်သည့် ဝါကျ ရွေးပါ။", options: ["I wish I would be rich.", "I wish I were rich.", "I wish I am rich.", "I wish I will be rich."], answer: 1, explanation: "ကိုယ်တိုင် အခြေအနေ → wish + past simple။", topic: "wish" },
      { type: "translate", prompt: "Translate: အစောကြီး အိပ်ခဲ့ရင် ကောင်းမှာ။ (မအိပ်ခဲ့ဘူး)", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I wish I had gone to bed earlier.", "If only I had gone to bed earlier.", "I wish I had slept earlier."], explanation: "အတိတ် နောင်တ → wish + had + V3။", topic: "wish" },
    ],
    review: [
      { q: "wish + past simple က ဘယ်အချိန်ကို ပြသလဲ။", a: "ယခု အခြေအနေ မကျေနပ်မှုကို ပြသည်။" },
      { q: "wish + would ကို ဘယ်အခါ မသုံးသင့်သလဲ။", a: "ကိုယ်တိုင်၏ အပြုအမူအတွက် မသုံးပါ။" },
    ],
    summary: [
      "wish + past simple = ယခု မကျေနပ်။",
      "wish + past perfect = အတိတ် နောင်တ။",
      "wish + would = တခြားသူ/အခြေအနေ ပြောင်းစေလို။",
    ],
    mastery: [
      "အခြေအနေ ၃ မျိုးအတွက် ဝါကျ ၉ ခု မှန်ကန်စွာ ဖွဲ့နိုင်သည်။",
      "wish/if only ပါသော ကွက်လပ် ၁၀ ခုတွင် ၈ ခု မှန်သည်။",
    ],
    topics: ["wish", "subjunctive", "conditionals"],
  },
  {
    id: "b27-modals-of-deduction",
    moduleId: "B",
    title: "Modals of Deduction",
    titleMm: "ခန့်မှန်းခြေ ဖော်ပြသည့် Modal များ",
    level: "B2",
    minutes: 22,
    summaryLine: "must, might, could, can't ဖြင့် အထောက်အထားအပေါ် အခြေခံ၍ ခန့်မှန်းခြေ ဖော်ပြနည်း။",
    objectives: [
      "ကာလ နှစ်မျိုးအတွက် modal of deduction ဖွဲ့နိုင်မည်။",
      "သေချာမှု အဆင့်ကို ရွေးချယ်နိုင်မည်။",
      "must have / can't have ဖြင့် အတိတ် ခန့်မှန်းနိုင်မည်။",
    ],
    vocab: [
      { en: "evidence", mm: "အထောက်အထား", pos: "noun", example: "There is no evidence for that claim.", exampleMm: "ထိုအဆိုအတွက် အထောက်အထား မရှိပါ။", topic: "deduction", level: "B2" },
      { en: "definitely", mm: "သေချာစွာ", pos: "adverb", example: "She is definitely at home.", exampleMm: "သူမ သေချာစွာ အိမ်မှာ ရှိသည်။", topic: "deduction", level: "B1" },
      { en: "probably", mm: "ဖြစ်နိုင်ခြေ များသည်", pos: "adverb", example: "He is probably asleep.", exampleMm: "သူ အိပ်နေနိုင်ခြေ များသည်။", topic: "deduction", level: "A2" },
    ],
    sections: [
      {
        heading: "သေချာမှု အဆင့်",
        body: [
          "must — အထောက်အထားအရ သေချာသည် — 'The lights are on; they must be home.'",
          "might/may/could — ဖြစ်နိုင်သည် — 'She might be in a meeting.'",
          "can't — မဖြစ်နိုင်ပါ — 'He can't be at work; it's Sunday.' (couldn't လည်း သုံးနိုင်သည်)",
          "should — ဖြစ်သင့်သည်/ဖြစ်နိုင်ခြေ မြင့်သည် — 'They should be here by now.'",
        ],
        table: {
          headers: ["Modal", "သေချာမှု", "ဥပမာ"],
          rows: [
            ["must", "~၉၅% သေချာ", "You must be tired."],
            ["might / may / could", "~၅၀%", "It might rain."],
            ["can't", "~၅% (မဖြစ်နိုင်)", "That can't be true."],
            ["must have + V3", "အတိတ် သေချာ", "She must have left."],
            ["can't have + V3", "အတိတ် မဖြစ်နိုင်", "He can't have finished so fast."],
          ],
        },
      },
      {
        heading: "အတိတ် ခန့်မှန်းခြေ",
        body: [
          "modal + have + V3 — 'They must have missed the train.' (လွတ်သွားသည်ဟု သေချာသည်)။",
          "might have / may have / could have + V3 — ဖြစ်နိုင်ခဲ့သည် — 'She might have forgotten.'",
          "can't have + V3 — မဖြစ်နိုင်ခဲ့ပါ — 'You can't have seen him; he was abroad.'",
          "should have + V3 သည် မတူညီသော အဓိပ္ပာယ် — လုပ်သင့်ခဲ့သော်လည်း မလုပ်ခဲ့ခြင်း (ဝေဖန်မှု) — 'You should have told me.'",
        ],
      },
    ],
    examples: [
      { en: "The door is open — someone must have come in.", mm: "တံခါး ဖွင့်ထားသည် — တစ်ယောက်ယောက် ဝင်လာခဲ့သည်ဟု သေချာသည်။" },
      { en: "She isn't answering; she could be driving.", mm: "သူမ ဖုန်းမကိုင်ပါ — ကား မောင်းနေနိုင်သည်။" },
      { en: "This can't be the right address.", mm: "ဒါက မှန်ကန်သည့် လိပ်စာ မဖြစ်နိုင်ပါ။" },
    ],
    mistakes: [
      { wrong: "He must be not at home.", right: "He can't be at home.", why: "မဖြစ်နိုင်မှုအတွက် can't ကို သုံးသည်။" },
      { wrong: "She must has left.", right: "She must have left.", why: "modal နောက်တွင် have + V3။" },
    ],
    guided: [
      { type: "mcq", prompt: "He has three cars — he ___ be rich.", promptMm: "ရွေးပါ။", options: ["can't", "must", "might not", "shouldn't"], answer: 1, explanation: "အထောက်အထားအရ သေချာ → must။", topic: "modals of deduction" },
      { type: "mcq", prompt: "The ground is wet — it ___ last night.", promptMm: "ရွေးပါ။", options: ["must rain", "must have rained", "must be raining", "can't have rained"], answer: 1, explanation: "အတိတ် ခန့်မှန်း → must have + V3။", topic: "modals of deduction" },
      { type: "fill", prompt: "That ___ be John's car — he sold it.", promptMm: "မဖြစ်နိုင် ဖြည့်ပါ။", answers: ["can't", "cannot"], explanation: "မဖြစ်နိုင်မှု → can't။", topic: "modals of deduction" },
      { type: "correct", prompt: "Correct: She might have forget the time.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["She might have forgotten the time.", "She might have forgotten the time"], explanation: "have + V3။", topic: "modals of deduction" },
    ],
    independent: [
      { type: "mcq", prompt: "You ___ have told me earlier — I could have helped.", promptMm: "ရွေးပါ။", options: ["must", "should", "can't", "might"], answer: 1, explanation: "လုပ်သင့်ခဲ့သော် မလုပ်ခဲ့ခြင်း → should have။", topic: "modals of deduction" },
      { type: "fill", prompt: "They aren't answering — they ___ be out.", promptMm: "ဖြစ်နိုင် ဖြည့်ပါ။", answers: ["might", "may", "could"], explanation: "ဖြစ်နိုင်ခြေ → might/may/could။", topic: "modals of deduction" },
      { type: "mcq", prompt: "Which expresses the strongest certainty?", promptMm: "အသေချာဆုံး ရွေးပါ။", options: ["It might be true.", "It could be true.", "It must be true.", "It may be true."], answer: 2, explanation: "must သည် အသေချာဆုံး။", topic: "modals of deduction" },
      { type: "translate", prompt: "Translate: သူ အိပ်နေတာ ဖြစ်ရမယ် — မီးလည်း ပိတ်ထားတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["He must be asleep — the light is off.", "He must be sleeping — the lights are off."], explanation: "အထောက်အထား + must be။", topic: "modals of deduction" },
    ],
    review: [
      { q: "must နှင့် might ၏ သေချာမှု ကွာခြားချက် ဘာလဲ။", a: "must သည် အထောက်အထားအရ သေချာသည်။ might သည် ဖြစ်နိုင်ခြေ ပမာဏ သာသည်။" },
      { q: "အတိတ် ခန့်မှန်းရန် ဘယ်လို ဖွဲ့သလဲ။", a: "modal + have + V3 (must have gone, might have seen, can't have known)။" },
    ],
    summary: [
      "သေချာမှု အဆင့်အလိုက် must/might/can't ကို ရွေးသည်။",
      "အတိတ်အတွက် modal + have + V3။",
      "should have + V3 သည် ဝေဖန်မှု/နောင်တ ဖြစ်သည်။",
    ],
    mastery: [
      "ခန့်မှန်းခြေ ဝါကျ ၁၀ ခုတွင် ၈ ခု မှန်ကန်စွာ ရွေးနိုင်သည်။",
      "ဓာတ်ပုံ/အခြေအနေ တစ်ခုကို must/might/can't ဖြင့် ဝါကျ ၃ ခု ရေးနိုင်သည်။",
    ],
    topics: ["modals of deduction", "modals"],
  },
];

export const moduleBLessonsPart5: Lesson[] = buildLessons(seeds);
