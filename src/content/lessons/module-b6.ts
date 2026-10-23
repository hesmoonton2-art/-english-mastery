import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const s = (x: LessonSeed) => x;

const seeds: LessonSeed[] = [
  s({
    id: "b28-modals-of-obligation",
    moduleId: "B",
    title: "Modals of Obligation and Permission",
    titleMm: "တာဝန် နှင့် ခွင့်ပြုချက် ဖော်ပြသည့် Modal",
    level: "B1",
    minutes: 20,
    summaryLine: "must, have to, should, can, may, need to ဖြင့် တာဝန်၊ ခွင့်ပြုချက်၊ တားမြစ်ချက် နှင့် အကြံပြုချက်ကို ကွာခြားစွာ ဖော်ပြနည်း။",
    objectives: ["must/have to ကွာခြားချက် ရှင်းပြနိုင်မည်။", "mustn't နှင့် don't have to ကို ခွဲခြားနိုင်မည်။", "ခွင့်ပြုချက် တောင်းခံ/ပေးရာတွင် can/may သုံးနိုင်မည်။"],
    vocab: [
      { en: "obligation", mm: "တာဝန်/ဖြစ်မနေ လုပ်ရမှု", pos: "noun", example: "Paying tax is a legal obligation.", exampleMm: "အခွန်ဆောင်ခြင်းသည် ဥပဒေအရ တာဝန် ဖြစ်သည်။", topic: "modals", level: "B2" },
      { en: "permission", mm: "ခွင့်ပြုချက်", pos: "noun", example: "You need permission to leave early.", exampleMm: "စောထွက်ရန် ခွင့်ပြုချက် လိုသည်။", topic: "modals", level: "B1" },
      { en: "forbidden", mm: "တားမြစ်ထားသော", pos: "adjective", example: "Smoking is forbidden here.", exampleMm: "ဤနေရာတွင် ဆေးလိပ်သောက်ခြင်း တားမြစ်ထားသည်။", topic: "modals", level: "B2" },
    ],
    sections: [
      {
        heading: "တာဝန် ဖော်ပြချက်",
        body: [
          "must — ပြောသူကိုယ်တိုင် အလေးအနက် ထားသည် — 'You must wear a helmet.'",
          "have to — ပြင်ပ စည်းမျဉ်း/အခြေအနေကြောင့် — 'I have to wear a uniform at work.'",
          "should/ought to — အကြံပြုချက် (မလုပ်လည်း ပြစ်ဒဏ် မရှိ) — 'You should rest.'",
        ],
        table: { headers: ["အဓိပ္ပာယ်", "ပုံစံ", "ဥပမာ"], rows: [["ဖြစ်မနေ", "must / have to", "You must stop."], ["မလုပ်ရ", "mustn't", "You mustn't smoke here."], ["မလိုအပ်", "don't have to", "You don't have to come."], ["ခွင့်ပြု", "can / may", "You may sit down."], ["အကြံပြု", "should", "You should see a doctor."]] },
      },
      {
        heading: "အလွယ်တကူ မှားတတ်သည့် နေရာများ",
        body: [
          "mustn't = မလုပ်ရ (တားမြစ်)။ don't have to = မလိုအပ် (လုပ်လည်း ရ)။ 'You mustn't pay' (မပေးရ) နှင့် 'You don't have to pay' (မပေးလည်း ရ) လုံးဝ ကွာသည်။",
          "must သည် တာဝန် အတိတ်/အနာဂတ် အတွက် ပုံစံ မရှိသလောက် ဖြစ်သဖြင့် had to / will have to ကို သုံးသည် — 'I had to work late yesterday.'",
          "မေးခွန်းတွင် 'Do I have to…?' ကို ပိုသုံးသည်။ 'Must I…?' သည် တရားဝင် လေသံ ဖြစ်သည်။",
        ],
      },
    ],
    examples: [
      { en: "Passengers must fasten their seat belts.", mm: "ခရီးသည်များ ခါးပတ် ပတ်ရမည်။" },
      { en: "You don't have to pay — it's free.", mm: "ပေးရန် မလိုပါ — အခမဲ့ ဖြစ်သည်။" },
      { en: "May I ask a question?", mm: "မေးခွန်း တစ်ခု မေးခွင့် ရပါသလား။", note: "may သည် ယဉ်ကျေးသည်။" },
    ],
    mistakes: [
      { wrong: "You mustn't come if you're busy.", right: "You don't have to come if you're busy.", why: "မလိုအပ်ခြင်းကို ဆိုလိုလျှင် don't have to။" },
      { wrong: "I musted go yesterday.", right: "I had to go yesterday.", why: "must တွင် past ပုံစံ မရှိပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "It's a rule: students ___ wear an ID card.", promptMm: "ရွေးပါ။", options: ["might", "must", "could", "would"], answer: 1, explanation: "စည်းမျဉ်း → must/have to။", topic: "modals of obligation" },
      { type: "mcq", prompt: "You ___ bring food — lunch is provided.", promptMm: "ရွေးပါ။", options: ["mustn't", "don't have to", "can't", "shouldn't"], answer: 1, explanation: "မလိုအပ် → don't have to။", topic: "modals of obligation" },
      { type: "fill", prompt: "I ___ to work last Saturday.", promptMm: "အတိတ် ဖြည့်ပါ။", answers: ["had"], explanation: "have to ၏ အတိတ် → had to။", topic: "modals of obligation" },
      { type: "correct", prompt: "Correct: You mustn't to smoke.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["You mustn't smoke.", "You must not smoke."], explanation: "modal နောက်တွင် to မလိုပါ။", topic: "modals of obligation" },
    ],
    independent: [
      { type: "mcq", prompt: "___ I use your phone, please?", promptMm: "ရွေးပါ။", options: ["Must", "May", "Should", "Ought"], answer: 1, explanation: "ခွင့်တောင်းရန် may/can။", topic: "modals of obligation" },
      { type: "fill", prompt: "Visitors ___ not feed the animals. (တားမြစ်)", promptMm: "ဖြည့်ပါ။", answers: ["must"], explanation: "must not = တားမြစ်။", topic: "modals of obligation" },
      { type: "mcq", prompt: "Tomorrow you ___ get up early — the train leaves at six.", promptMm: "ရွေးပါ။", options: ["will have to", "must have", "had to", "would have to"], answer: 0, explanation: "အနာဂတ် တာဝန် → will have to။", topic: "modals of obligation" },
      { type: "translate", prompt: "Translate: မင်း ဒီနေ့ လာရန် မလိုပါဘူး။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["You don't have to come today.", "You do not have to come today.", "You needn't come today."], explanation: "မလိုအပ် → don't have to။", topic: "modals of obligation" },
    ],
    review: [
      { q: "mustn't နှင့် don't have to ကွာခြားချက် ဘာလဲ။", a: "mustn't = မလုပ်ရ (တားမြစ်)။ don't have to = မလိုအပ်။" },
      { q: "must ၏ အတိတ်ကို ဘယ်လို ပြောသလဲ။", a: "had to ကို သုံးသည်။" },
    ],
    summary: ["must/have to သည် ဖြစ်မနေ တာဝန်ကို ပြသည်။", "mustn't နှင့် don't have to ကွဲပြားသည်။", "can/may ဖြင့် ခွင့်ပြုချက် တောင်း/ပေးသည်။"],
    mastery: ["ကွက်လပ် ၁၀ ခုတွင် ၉ ခု မှန်ကန်သည်။", "ကျောင်း/အလုပ်ခွင် စည်းမျဉ်း ၆ ခုကို modal ဖြင့် ရေးနိုင်သည်။"],
    topics: ["modals of obligation", "modals"],
  }),
  s({
    id: "b29-passive-tenses",
    moduleId: "B",
    title: "Passive Voice Across Tenses",
    titleMm: "ကာလအလိုက် Passive Voice",
    level: "B2",
    minutes: 24,
    summaryLine: "be + V3 ကို ကာလ အမျိုးမျိုးတွင် ပြောင်းလဲ၍ အရေးကြီးသည့် အရာ သို့မဟုတ် လုပ်ဆောင်သူ မသိသည့်အခါ သုံးနည်း။",
    objectives: ["ကာလ ၆ မျိုးတွင် passive ဖွဲ့နိုင်မည်။", "active နှင့် passive ကို ရည်ရွယ်ချက်အလိုက် ရွေးနိုင်မည်။", "by + agent ကို ဘယ်အခါ ထည့်ရမည် သိမည်။"],
    vocab: [
      { en: "conduct", mm: "ပြုလုပ်သည် (သုတေသန)", pos: "verb", example: "The study was conducted in 2024.", exampleMm: "သုတေသနကို ၂၀၂၄ တွင် ပြုလုပ်ခဲ့သည်။", topic: "passive", level: "B2" },
      { en: "publish", mm: "ထုတ်ဝေသည်", pos: "verb", example: "The report will be published soon.", exampleMm: "အစီရင်ခံစာကို မကြာမီ ထုတ်ဝေမည်။", topic: "passive", level: "B2" },
      { en: "agent", mm: "လုပ်ဆောင်သူ", pos: "noun", example: "The agent is unknown.", exampleMm: "လုပ်ဆောင်သူကို မသိပါ။", topic: "passive", level: "B2" },
    ],
    sections: [
      {
        heading: "ကာလအလိုက် ပုံစံ",
        body: [
          "Passive သည် အမြဲ 'be + past participle' ဖြစ်ပြီး be ၏ ကာလ ပြောင်းလဲသည်။",
          "Present simple: 'Letters are delivered daily.' Present continuous: 'The road is being repaired.' Present perfect: 'The forms have been sent.'",
          "Past simple: 'The bridge was built in 1990.' Past perfect: 'The email had been sent before noon.' Future: 'The results will be announced tomorrow.' Modal: 'This must be checked.'",
        ],
        table: { headers: ["ကာလ", "ပုံစံ", "ဥပမာ"], rows: [["Present simple", "am/is/are + V3", "Rice is grown here."], ["Past simple", "was/were + V3", "The letter was posted."], ["Present perfect", "has/have been + V3", "It has been fixed."], ["Future", "will be + V3", "It will be tested."], ["Modal", "modal + be + V3", "It should be cleaned."]] },
      },
      {
        heading: "ဘယ်အခါ passive သုံးသလဲ",
        body: [
          "လုပ်ဆောင်သူ မသိ/မအရေးကြီးသည့်အခါ — 'My bike was stolen.'",
          "လုပ်ဆောင်ခံရသည့် အရာကို အလေးပေးလိုသည့်အခါ — 'The vaccine was developed in record time.'",
          "သိပ္ပံ/ပညာရေး စာတမ်းများတွင် ဓမ္မဓိဋ္ဌာန်ကျစေရန် — 'Samples were collected daily.'",
          "by + agent ကို လုပ်ဆောင်သူ အရေးကြီးလျှင်သာ ထည့်သည် — 'The novel was written by Orwell.'",
        ],
      },
    ],
    examples: [
      { en: "The road is being repaired this week.", mm: "ဒီအပတ် လမ်းကို ပြုပြင်နေသည်။" },
      { en: "Three new schools have been opened.", mm: "ကျောင်းအသစ် သုံးခု ဖွင့်ပြီးပါပြီ။" },
      { en: "The decision will be made by the committee.", mm: "ဆုံးဖြတ်ချက်ကို ကော်မတီက ချမည်။", note: "agent အရေးကြီးသဖြင့် by ထည့်သည်။" },
    ],
    mistakes: [
      { wrong: "The letter was wrote yesterday.", right: "The letter was written yesterday.", why: "passive တွင် V3 လိုသည်။" },
      { wrong: "The house is build in 1990.", right: "The house was built in 1990.", why: "အတိတ် → was + V3။" },
    ],
    guided: [
      { type: "mcq", prompt: "English ___ all over the world.", promptMm: "ရွေးပါ။", options: ["speaks", "is spoken", "is speaking", "has spoken"], answer: 1, explanation: "present simple passive။", topic: "passive voice" },
      { type: "mcq", prompt: "The report ___ yesterday.", promptMm: "ရွေးပါ။", options: ["publishes", "was published", "is publishing", "has publish"], answer: 1, explanation: "past simple passive။", topic: "passive voice" },
      { type: "fill", prompt: "The room ___ being cleaned right now.", promptMm: "ဖြည့်ပါ။", answers: ["is"], explanation: "present continuous passive → is being + V3။", topic: "passive voice" },
      { type: "correct", prompt: "Correct: The form must signed today.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The form must be signed today.", "The form must be signed today"], explanation: "modal + be + V3။", topic: "passive voice" },
    ],
    independent: [
      { type: "mcq", prompt: "By next month, the bridge ___.", promptMm: "ရွေးပါ။", options: ["will complete", "will be completed", "is completing", "has completed"], answer: 1, explanation: "future passive → will be + V3။", topic: "passive voice" },
      { type: "fill", prompt: "The letters have already ___ sent.", promptMm: "ဖြည့်ပါ။", answers: ["been"], explanation: "have been + V3။", topic: "passive voice" },
      { type: "mcq", prompt: "Choose the best passive version of 'They gave him a medal.'", promptMm: "ရွေးပါ။", options: ["He was given a medal.", "He gave a medal.", "A medal was gave to him.", "He is given a medal."], answer: 0, explanation: "past simple passive, indirect object ကို ကတ္တားအဖြစ်။", topic: "passive voice" },
      { type: "translate", prompt: "Translate: ဒီဆေးရုံကို ၁၉၈၀ မှာ တည်ဆောက်ခဲ့တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["This hospital was built in 1980.", "The hospital was built in 1980."], explanation: "was + V3 + အချိန်။", topic: "passive voice" },
    ],
    review: [
      { q: "Passive ၏ အခြေခံ ပုံစံ ဘာလဲ။", a: "be + past participle (V3)။" },
      { q: "by + agent ကို ဘယ်အခါ ထည့်သလဲ။", a: "လုပ်ဆောင်သူ အရေးကြီး/မသိမဖြစ် ဖြစ်သည့်အခါ။" },
    ],
    summary: ["Passive = be + V3။", "be ၏ ကာလ ပြောင်းလဲခြင်းဖြင့် ကာလ အားလုံးကို ဖွဲ့နိုင်သည်။", "ဓမ္မဓိဋ္ဌာန်ကျသော စာများတွင် အသုံးများသည်။"],
    mastery: ["ကာလ ၆ မျိုးတွင် passive ဝါကျ ၁၂ ခု မှန်ကန်စွာ ရေးနိုင်သည်။", "active ဝါကျ ၈ ခုကို passive သို့ ပြောင်းနိုင်သည်။"],
    topics: ["passive voice", "tenses"],
  }),
  s({
    id: "b30-causatives",
    moduleId: "B",
    title: "Causatives: Have and Get Something Done",
    titleMm: "အခြားသူအား လုပ်ခိုင်းခြင်း (Causative)",
    level: "B2",
    minutes: 20,
    summaryLine: "ကိုယ်တိုင် မလုပ်ဘဲ အခြားသူအား လုပ်ခိုင်းသည့် အခြေအနေကို have/get + object + V3 ဖြင့် ဖော်ပြနည်း။",
    objectives: ["have/get something done ကို ဖွဲ့နိုင်မည်။", "causative နှင့် ရိုးရိုး ဝါကျ ကွာခြားချက် ပြနိုင်မည်။", "get someone to do ကို သုံးနိုင်မည်။"],
    vocab: [
      { en: "repair", mm: "ပြုပြင်သည်", pos: "verb", example: "I had my phone repaired.", exampleMm: "ဖုန်းကို ပြုပြင်ခဲ့သည်။", topic: "causatives", level: "B1" },
      { en: "arrange", mm: "စီစဉ်သည်", pos: "verb", example: "We arranged for a driver to meet you.", exampleMm: "မင်းကို ကြိုရန် ယာဉ်မောင်း စီစဉ်ထားသည်။", topic: "causatives", level: "B1" },
      { en: "deliver", mm: "ပို့ဆောင်သည်", pos: "verb", example: "They delivered the sofa on Monday.", exampleMm: "ဆိုဖာကို တနင်္လာနေ့ ပို့ပေးခဲ့သည်။", topic: "causatives", level: "B1" },
    ],
    sections: [
      {
        heading: "have / get + object + V3",
        body: [
          "'I had my hair cut.' ဟု ဆိုလျှင် ကိုယ်တိုင် မညှပ်ဘဲ ဆံပင်ညှပ်ဆရာကို ညှပ်ခိုင်းခဲ့သည်။ ပုံစံ — have + object + past participle။",
          "get ကို စကားပြောတွင် ပိုသုံးသည် — 'I got my car washed.'",
          "ကာလ ပြောင်းလဲသည် — 'She is having her house painted.' / 'We had the roof fixed.' / 'You should get that checked.'",
        ],
        table: { headers: ["ပုံစံ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["have + obj + V3", "လုပ်ခိုင်းသည်", "I had my watch repaired."], ["get + obj + V3", "လုပ်ခိုင်းသည် (စကားပြော)", "He got his hair cut."], ["get + sb + to + verb", "တစ်ဦးကို လုပ်ခိုင်း", "I got him to help me."], ["have + sb + verb", "တစ်ဦးကို လုပ်ခိုင်း", "I had the plumber check it."]] },
      },
      {
        heading: "အဓိပ္ပာယ် ကွဲပြားမှု",
        body: [
          "'I cut my hair.' = ကိုယ်တိုင် ညှပ်သည်။ 'I had my hair cut.' = အခြားသူကို ညှပ်ခိုင်းသည်။",
          "မလိုလားဘဲ ဖြစ်သွားသည့် အခြေအနေကိုလည်း ပြသည် — 'He had his bag stolen.' (အိတ် ခိုးခံရသည်)",
          "'have someone do' နှင့် 'get someone to do' သည် တူညီသည် — 'I had the mechanic look at it.' / 'I got the mechanic to look at it.'",
        ],
      },
    ],
    examples: [
      { en: "We are having the kitchen redecorated.", mm: "မီးဖိုချောင်ကို ပြင်ဆင်ခိုင်းနေသည်။" },
      { en: "I need to get my passport renewed.", mm: "ပတ်စ်ပို့ သက်တမ်းတိုးခိုင်းရန် လိုသည်။" },
      { en: "She had her bike stolen last week.", mm: "ပြီးခဲ့သည့် အပတ်တွင် သူမ စက်ဘီး ခိုးခံခဲ့ရသည်။", note: "မလိုလားဘဲ ဖြစ်သွားခြင်း။" },
    ],
    mistakes: [
      { wrong: "I had repaired my car.", right: "I had my car repaired.", why: "အစီအစဉ် မှားနေသည် — have + object + V3။" },
      { wrong: "I got him help me.", right: "I got him to help me.", why: "get + person + to + verb။" },
    ],
    guided: [
      { type: "mcq", prompt: "I ___ my hair cut yesterday.", promptMm: "ရွေးပါ။", options: ["had", "have", "did", "made"], answer: 0, explanation: "past causative → had + obj + V3။", topic: "causatives" },
      { type: "mcq", prompt: "She is ___ her dress cleaned.", promptMm: "ရွေးပါ။", options: ["have", "having", "has", "had"], answer: 1, explanation: "present continuous causative။", topic: "causatives" },
      { type: "fill", prompt: "We got the window ___ (fix) last week.", promptMm: "V3 ဖြည့်ပါ။", answers: ["fixed"], explanation: "get + obj + V3။", topic: "causatives" },
      { type: "correct", prompt: "Correct: I had cut my hair at the salon.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I had my hair cut at the salon.", "I had my hair cut at the salon"], explanation: "causative ပုံစံ လိုသည်။", topic: "causatives" },
    ],
    independent: [
      { type: "mcq", prompt: "They ___ their house painted last month.", promptMm: "ရွေးပါ။", options: ["have had", "have", "has", "having"], answer: 0, explanation: "present perfect causative → have had + obj + V3။", topic: "causatives" },
      { type: "fill", prompt: "I will get someone ___ (check) the wiring.", promptMm: "ဖြည့်ပါ။", answers: ["to check"], explanation: "get + someone + to + verb။", topic: "causatives" },
      { type: "mcq", prompt: "Which means 'someone else took my photo'?", promptMm: "ရွေးပါ။", options: ["I took my photo.", "I had my photo taken.", "I was taken my photo.", "My photo took."], answer: 1, explanation: "had + obj + V3။", topic: "causatives" },
      { type: "translate", prompt: "Translate: ငါ ကားကို ဆေးထိုးခိုင်းမယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I will get my car washed.", "I will have my car washed.", "I'm going to have my car washed."], explanation: "get/have + obj + V3။", topic: "causatives" },
    ],
    review: [
      { q: "have something done က ဘာအဓိပ္ပာယ် လဲ။", a: "ကိုယ်တိုင် မလုပ်ဘဲ အခြားသူအား လုပ်ခိုင်းခြင်း (သို့) မလိုလားဘဲ ဖြစ်သွားခြင်း။" },
      { q: "get + person နောက်တွင် ဘာလာသလဲ။", a: "to + verb — get someone to do။" },
    ],
    summary: ["have/get + object + V3 ဖြင့် လုပ်ခိုင်းမှု ဖော်ပြသည်။", "get + person + to + verb ဖြင့် တစ်ဦးကို ခိုင်းသည်။", "မလိုလားဘဲ ဖြစ်သွားမှုကိုလည်း ဤပုံစံဖြင့် ပြသည်။"],
    mastery: ["causative ဝါကျ ၁၀ ခု မှန်ကန်စွာ ဖွဲ့နိုင်သည်။", "have/get ပုံစံ ၂ မျိုး ကွာခြားချက် ရှင်းပြနိုင်သည်။"],
    topics: ["causatives", "verbs"],
  }),
  s({
    id: "b31-reported-questions",
    moduleId: "B",
    title: "Reported Questions and Requests",
    titleMm: "သွယ်ဝိုက် မေးခွန်း နှင့် တောင်းဆိုမှု",
    level: "B2",
    minutes: 22,
    summaryLine: "တိုက်ရိုက် မေးခွန်းနှင့် တောင်းဆိုမှုကို သွယ်ဝိုက် ပုံစံသို့ ပြောင်းရာတွင် စကားလုံး အစီအစဉ်နှင့် ကာလ ပြောင်းလဲမှုကို လေ့လာသည်။",
    objectives: ["reported question တွင် စကားလုံး အစီအစဉ် မှန်ကန်စွာ ရေးနိုင်မည်။", "yes/no နှင့် wh- မေးခွန်း ကွာခြားချက် သိမည်။", "ask/tell + object + to + verb ဖြင့် တောင်းဆိုမှု ပြန်ပြောနိုင်မည်။"],
    vocab: [
      { en: "inquire", mm: "မေးမြန်းသည် (တရားဝင်)", pos: "verb", example: "She inquired about the price.", exampleMm: "သူမ စျေးနှုန်း အကြောင်း မေးမြန်းခဲ့သည်။", topic: "reported speech", level: "B2" },
      { en: "request", mm: "တောင်းဆိုမှု", pos: "noun", example: "He made a polite request.", exampleMm: "သူ ယဉ်ကျေးသော တောင်းဆိုမှု ပြုခဲ့သည်။", topic: "reported speech", level: "B2" },
      { en: "wonder", mm: "သိလိုသည်/တွေးမိသည်", pos: "verb", example: "I wonder if you could help.", exampleMm: "မင်း ကူညီနိုင်မလား သိချင်သည်။", topic: "reported speech", level: "B2" },
    ],
    sections: [
      {
        heading: "reported question",
        body: [
          "တိုက်ရိုက် — 'Where do you live?' သွယ်ဝိုက် — 'She asked where I lived.' မေးခွန်း စကားလုံး အစီအစဉ် (verb + subject) ပြန်လည် မသုံးပါ၊ ဝါကျ ပုံစံ (subject + verb) ဖြစ်သည်။",
          "yes/no မေးခွန်းတွင် if သို့မဟုတ် whether ကို ထည့်သည် — 'He asked if I was ready.'",
          "ကာလ ပြောင်းလဲမှု — present → past, will → would, can → could။ သို့သော် အမှန်တရား/ယခုတိုင် မှန်နေသည့် အရာတွင် ကာလ မပြောင်းလဲနိုင်ပါ — 'She said she is a nurse.'",
        ],
        table: { headers: ["တိုက်ရိုက်", "သွယ်ဝိုက်", "မှတ်ချက်"], rows: [["Where is it?", "He asked where it was.", "verb နောက်သို့"], ["Do you like tea?", "She asked if I liked tea.", "if/whether ထည့်"], ["What time is it?", "He asked what time it was.", "ကာလ ပြောင်း"], ["Can you help?", "She asked if I could help.", "can → could"]] },
      },
      {
        heading: "reported requests and commands",
        body: [
          "တောင်းဆိုမှု — ask/tell + object + to + verb — 'She asked me to wait.' 'He told us to be quiet.'",
          "ငြင်းပယ် — tell/ask + object + not + to + verb — 'They told me not to touch it.'",
          "အကြံပြုမှု — suggest + -ing / suggest that + subject + verb — 'She suggested taking a taxi.' ('suggest me to take' မှားသည်)",
        ],
      },
    ],
    examples: [
      { en: "He asked me where I had bought my laptop.", mm: "ငါ့လက်ပ်တော့ ဘယ်မှာ ဝယ်ခဲ့သည်ကို သူ မေးခဲ့သည်။" },
      { en: "She asked whether the shop was still open.", mm: "ဆိုင်က ဖွင့်နေသေးသလား သူမ မေးခဲ့သည်။" },
      { en: "The teacher told us not to copy the answers.", mm: "အဖြေများ မကူးရန် ဆရာမ ပြောခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "He asked me where did I live.", right: "He asked me where I lived.", why: "သွယ်ဝိုက်မေးခွန်းတွင် did မသုံးပါ၊ ဝါကျအစီအစဉ်။" },
      { wrong: "She suggested me to rest.", right: "She suggested that I rest / She suggested resting.", why: "suggest တွင် to-infinitive မတွဲပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "She asked ___ I had finished.", promptMm: "ရွေးပါ။", options: ["if", "that", "what", "which"], answer: 0, explanation: "yes/no မေးခွန်း → if/whether။", topic: "reported speech" },
      { type: "mcq", prompt: "He asked me where I ___ from.", promptMm: "ရွေးပါ။", options: ["come", "came", "do come", "have coming"], answer: 1, explanation: "ကာလ ပြောင်း → came။", topic: "reported speech" },
      { type: "fill", prompt: "They told us ___ be late.", promptMm: "ငြင်းပယ် ဖြည့်ပါ။", answers: ["not to"], explanation: "tell + object + not + to + verb။", topic: "reported speech" },
      { type: "correct", prompt: "Correct: She asked what time was it.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["She asked what time it was.", "She asked what time it was"], explanation: "သွယ်ဝိုက်တွင် subject + verb။", topic: "reported speech" },
    ],
    independent: [
      { type: "mcq", prompt: "The doctor asked if I ___ any pain.", promptMm: "ရွေးပါ။", options: ["have", "had", "am having", "will have"], answer: 1, explanation: "ကာလ ပြောင်း → had။", topic: "reported speech" },
      { type: "fill", prompt: "He asked me ___ close the door. (တောင်းဆိုမှု)", promptMm: "ဖြည့်ပါ။", answers: ["to"], explanation: "ask + object + to + verb။", topic: "reported speech" },
      { type: "order", prompt: "Arrange the reported question.", promptMm: "စီပါ။", tokens: ["where", "asked", "she", "was", "the", "station"], answer: "She asked where the station was", explanation: "asked + wh + subject + verb။", topic: "reported speech" },
      { type: "translate", prompt: "Translate: သူက ငါ့ကို စောင့်ဖို့ ပြောခဲ့တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["He told me to wait.", "He asked me to wait."], explanation: "tell/ask + object + to + verb။", topic: "reported speech" },
    ],
    review: [
      { q: "reported question တွင် ဘာကြောင့် did မသုံးသလဲ။", a: "မေးခွန်း အစီအစဉ်ကို ဖယ်၍ ဝါကျ အစီအစဉ် ပြန်လည် သုံးသဖြင့်။" },
      { q: "suggest နောက်တွင် ဘယ်လို ဖွဲ့သလဲ။", a: "suggest + -ing သို့မဟုတ် suggest that + subject + verb။" },
    ],
    summary: ["reported question တွင် subject + verb အစီအစဉ် သုံးသည်။", "yes/no မေးခွန်းတွင် if/whether ထည့်သည်။", "တောင်းဆိုမှုကို ask/tell + object + (not) to + verb ဖြင့် ပြန်ပြောသည်။"],
    mastery: ["တိုက်ရိုက် မေးခွန်း ၈ ခုကို သွယ်ဝိုက် ပြောင်းနိုင်သည်။", "တောင်းဆိုမှု ၅ ခုကို ပြန်ပြောနိုင်သည်။"],
    topics: ["reported speech", "reported questions"],
  }),
  s({
    id: "b32-non-defining-relative",
    moduleId: "B",
    title: "Non-defining Relative Clauses",
    titleMm: "အပိုဆောင်း အချက်အလက် ပေးသည့် Relative Clause",
    level: "B2",
    minutes: 20,
    summaryLine: "အပိုဆောင်း အချက်အလက် ပေးသည့် relative clause တွင် comma သုံးပုံနှင့် that ကို မသုံးရသည့် အကြောင်းကို လေ့လာသည်။",
    objectives: ["defining နှင့် non-defining ကို ခွဲခြားနိုင်မည်။", "comma မှန်ကန်စွာ ထည့်နိုင်မည်။", "which ဖြင့် ဝါကျ တစ်ခုလုံးကို ရည်ညွှန်းနိုင်မည်။"],
    vocab: [
      { en: "additional", mm: "အပိုဆောင်း", pos: "adjective", example: "This is additional information.", exampleMm: "ဤသည် အပိုဆောင်း အချက်အလက် ဖြစ်သည်။", topic: "relative clauses", level: "B2" },
      { en: "essential", mm: "မရှိမဖြစ်", pos: "adjective", example: "The comma is not essential here.", exampleMm: "ဤနေရာတွင် comma မရှိမဖြစ် မဟုတ်ပါ။", topic: "relative clauses", level: "B2" },
      { en: "refer", mm: "ရည်ညွှန်းသည်", pos: "verb", example: "Which refers to the whole clause.", exampleMm: "which သည် ဝါကျ တစ်ခုလုံးကို ရည်ညွှန်းသည်။", topic: "relative clauses", level: "B2" },
    ],
    sections: [
      {
        heading: "ကွာခြားချက်",
        body: [
          "Defining clause သည် မည်သူ/မည်သည့်အရာကို ဆိုလိုသည်ကို သတ်မှတ်ပေးသည်၊ မပါလျှင် အဓိပ္ပာယ် ပျက်သွားသည် — 'The students who failed must retake the test.'",
          "Non-defining clause သည် အပိုဆောင်း အချက်အလက်သာ ဖြစ်သည်၊ ဖယ်လျှင်လည်း ဝါကျ အဓိပ္ပာယ် မပျက် — 'My sister, who lives in Japan, is a teacher.' comma နှစ်ခု ဖြင့် ခြားရသည်။",
          "Non-defining တွင် that ကို မသုံးပါ — 'The book, that I bought, is good.' မှားသည်။ who/which ကို သုံးသည်။",
        ],
        table: { headers: ["အမျိုးအစား", "comma", "that", "ဥပမာ"], rows: [["Defining", "မပါ", "သုံးနိုင်", "The man who called is my uncle."], ["Non-defining", "ပါ", "မသုံး", "My uncle, who called, is a doctor."], ["Whole clause", "ပါ", "မသုံး", "He was late, which annoyed us."]] },
      },
      {
        heading: "which ဖြင့် ဝါကျ တစ်ခုလုံးကို ရည်ညွှန်းခြင်း",
        body: [
          "'He passed the exam, which surprised everyone.' — which သည် ရှေ့ဝါကျ တစ်ခုလုံးကို ရည်ညွှန်းသည်။ ဤအသုံးတွင် comma မဖြစ်မနေ လိုသည်။",
          "'whose' ကို non-defining တွင်လည်း သုံးနိုင်သည် — 'Mr. Hla, whose son studies abroad, is a doctor.'",
          "Non-defining clause ကို ဝါကျ အလယ်တွင် ထည့်လျှင် comma နှစ်ခု လိုသည် — 'My car, which is ten years old, still runs well.'",
        ],
      },
    ],
    examples: [
      { en: "Yangon, which was once the capital, is still the largest city.", mm: "တစ်ချိန်က မြို့တော် ဖြစ်ခဲ့သည့် ရန်ကုန်သည် ယခုတိုင် အကြီးဆုံး မြို့ ဖြစ်သည်။" },
      { en: "My teacher, who has taught for twenty years, is retiring.", mm: "နှစ်နှစ်ဆယ် သင်ကြားခဲ့သည့် ကျွန်တော့်ဆရာမ အငြိမ်းစား ယူတော့မည်။" },
      { en: "The train was delayed, which made me miss the meeting.", mm: "ရထား နောက်ကျသဖြင့် အစည်းအဝေး လွတ်သွားသည်။", note: "which = ဝါကျ တစ်ခုလုံး။" },
    ],
    mistakes: [
      { wrong: "My brother, that lives in Bago, is an engineer.", right: "My brother, who lives in Bago, is an engineer.", why: "non-defining တွင် that မသုံးပါ။" },
      { wrong: "My mother who is a nurse works at the hospital.", right: "My mother, who is a nurse, works at the hospital.", why: "အပိုဆောင်း အချက်အလက် ဖြစ်လျှင် comma လိုသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "The Nile, ___ is in Africa, is the longest river.", promptMm: "ရွေးပါ။", options: ["that", "which", "who", "whose"], answer: 1, explanation: "non-defining + အရာ → which။", topic: "relative clauses" },
      { type: "mcq", prompt: "She passed the test, ___ surprised us.", promptMm: "ရွေးပါ။", options: ["that", "which", "what", "who"], answer: 1, explanation: "ဝါကျ တစ်ခုလုံးကို ရည်ညွှန်းသည်။", topic: "relative clauses" },
      { type: "fill", prompt: "Mr. Aung, ___ daughter is my classmate, is a pilot.", promptMm: "ဖြည့်ပါ။", answers: ["whose"], explanation: "ပိုင်ဆိုင်မှု → whose။", topic: "relative clauses" },
      { type: "correct", prompt: "Correct: My house that is very old needs repairs.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["My house, which is very old, needs repairs."], explanation: "non-defining တွင် which + comma။", topic: "relative clauses" },
    ],
    independent: [
      { type: "mcq", prompt: "Which sentence needs commas?", promptMm: "comma လိုသည့် ဝါကျ ရွေးပါ။", options: ["The man who called was polite.", "My father who is a doctor works here.", "Students who study hard pass.", "The book that I read was good."], answer: 1, explanation: "အပိုဆောင်း အချက်အလက် ဖြစ်သည်။", topic: "relative clauses" },
      { type: "fill", prompt: "Bagan, ___ attracts many tourists, is in Mandalay Region.", promptMm: "ဖြည့်ပါ။", answers: ["which"], explanation: "နေရာ + non-defining → which။", topic: "relative clauses" },
      { type: "mcq", prompt: "He arrived late, ___ annoyed the manager.", promptMm: "ရွေးပါ။", options: ["that", "which", "who", "where"], answer: 1, explanation: "ဝါကျ တစ်ခုလုံး → which။", topic: "relative clauses" },
      { type: "translate", prompt: "Translate: ငါ့အစ်ကို (ဂျပန်မှာ နေတယ်) က အင်ဂျင်နီယာ ဖြစ်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["My brother, who lives in Japan, is an engineer.", "My older brother, who lives in Japan, is an engineer."], explanation: "comma + who + ကြိယာ + comma။", topic: "relative clauses" },
    ],
    review: [
      { q: "Non-defining clause တွင် that ကို သုံးနိုင်သလား။", a: "မသုံးနိုင်ပါ။ who/which ကို သုံးရသည်။" },
      { q: "ဝါကျ တစ်ခုလုံးကို ရည်ညွှန်းရန် ဘယ်စကားလုံး သုံးသလဲ။", a: "comma + which ကို သုံးသည်။" },
    ],
    summary: ["Defining clause သည် မရှိမဖြစ်၊ comma မပါ။", "Non-defining clause သည် အပိုဆောင်း၊ comma ပါ။", "that ကို non-defining တွင် မသုံးပါ။"],
    mastery: ["ဝါကျ ၁၀ ခုတွင် comma နှင့် pronoun ကို ၈ ခု မှန်ကန်စွာ ရွေးနိုင်သည်။", "ကိုယ်တိုင် non-defining clause ပါသော ဝါကျ ၅ ခု ရေးနိုင်သည်။"],
    topics: ["relative clauses", "punctuation"],
  }),
];

export const moduleBLessonsPart6: Lesson[] = buildLessons(seeds);
