import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "i1-cefr-self-assessment",
    moduleId: "I",
    title: "How CEFR Works and How to Self-Assess",
    titleMm: "CEFR နှင့် ကိုယ်တိုင် အကဲဖြတ်နည်း",
    level: "B1",
    minutes: 20,
    summaryLine: "CEFR အဆင့် ၆ ဆင့်၏ အဓိပ္ပာယ် နှင့် 'can-do' ဖော်ပြချက်ဖြင့် ကိုယ်တိုင် အကဲဖြတ်နည်း။",
    objectives: ["CEFR အဆင့် ၆ ဆင့် ဖော်ပြနိုင်မည်။", "'can-do' ဖော်ပြချက်ဖြင့် ကိုယ်ကို အကဲဖြတ်နိုင်မည်။", "တရားဝင် လက်မှတ် မဟုတ်ကြောင်း နားလည်မည်။"],
    vocab: [
      { en: "CEFR", mm: "ဥရောပ ဘာသာစကား အဆင့်သတ်မှတ်ချက်", pos: "noun", example: "The CEFR describes six levels.", exampleMm: "CEFR သည် အဆင့် ၆ ဆင့်ကို ဖော်ပြသည်။", topic: "CEFR", level: "B1" },
      { en: "can-do statement", mm: "လုပ်နိုင်သည့် စွမ်းရည် ဖော်ပြချက်", pos: "noun", example: "A can-do statement describes what you can do.", exampleMm: "can-do ဖော်ပြချက်က ဘာလုပ်နိုင်သည်ကို ဖော်ပြသည်။", topic: "CEFR", level: "B1" },
      { en: "self-assessment", mm: "ကိုယ်တိုင် အကဲဖြတ်ခြင်း", pos: "noun", example: "Self-assessment is not a certificate.", exampleMm: "ကိုယ်တိုင် အကဲဖြတ်ခြင်းသည် လက်မှတ် မဟုတ်ပါ။", topic: "CEFR", level: "B1" },
    ],
    sections: [
      {
        heading: "အဆင့် ၆ ဆင့်",
        body: [
          "A1 — ရိုးရှင်းသည့် စကားစု နှင့် မိတ်ဆက်။ A2 — နေ့စဉ် လုပ်ငန်း၊ ရိုးရှင်းသည့် စကားပြော။ B1 — ရင်းနှီးသည့် အကြောင်းအရာ၊ ခရီး၊ အတွေ့အကြုံ ဖော်ပြနိုင်သည်။",
          "B2 — ရှင်းလင်းစွာ ဆွေးနွေးနိုင်၊ စာတို ရေးနိုင်။ C1 — ရှည်လျားသည့် စာ၊ ပညာရေး/လုပ်ငန်း အကြောင်းအရာ ကျွမ်းကျင်စွာ ကိုင်တွယ်နိုင်။ C2 — နီးပါး မိခင်ဘာသာစကားအဆင့်။",
          "ဤအက်ပ်ရှိ ခန့်မှန်းချက်များ (placement test ကဲ့သို့) သည် တရားဝင် လက်မှတ် မဟုတ်ပါ။ ကိုယ်တိုင် လေ့လာမှု လမ်းညွှန်ရန်သာ ဖြစ်သည်။",
        ],
        table: { headers: ["အဆင့်", "နားထောင်/ဖတ်", "ပြော/ရေး"], rows: [["A2", "ရိုးရှင်းသည့် စာ", "တိုတောင်းသည့် စကားစု"], ["B1", "နေ့စဉ် အကြောင်းအရာ", "အတွေ့အကြုံ ဖော်ပြ"], ["B2", "အဓိကအချက် နှင့် အသေးစိတ်", "ဆွေးနွေး၊ စာတို"], ["C1", "ရှည်လျား/ရှုပ်ထွေးသည့် စာ", "ပညာရေးဆန် ရေး"]] },
      },
      {
        heading: "can-do ဖြင့် အကဲဖြတ်ခြင်း",
        body: [
          "'Can you introduce yourself in 30 seconds?' ဟု မေးပြီး ကိုယ်တိုင် စမ်းသည်။ ၃ ကြိမ်အတွင်း လုပ်နိုင်လျှင် ထို စွမ်းရည် ရှိသည်ဟု မှတ်သည်။",
          "အကဲဖြတ်ရာတွင် သက်သေ လိုသည် — အသံဖမ်းထားသည့် ဖိုင် (ကိုယ်ပိုင် ဖုန်းဖြင့်)၊ ရေးထားသည့် စာမူ၊ ဖြေဆိုခဲ့သည့် မေးခွန်း ရလဒ်။ ခံစားချက်ဖြင့် မခန့်မှန်းပါ။",
        ],
      },
    ],
    examples: [
      { en: "B1: I can describe my last holiday and give simple reasons.", mm: "B1 — ကျွန်တော့် နောက်ဆုံး အားလပ်ရက် အကြောင်း ရှင်းပြပြီး ရိုးရှင်းသည့် အကြောင်းပြချက် ပေးနိုင်သည်။" },
      { en: "B2: I can take part in a discussion and explain my opinion clearly.", mm: "B2 — ဆွေးနွေးမှုတွင် ပါဝင်ပြီး အမြင်ကို ရှင်းလင်းစွာ ရှင်းပြနိုင်သည်။" },
      { en: "This estimate is based on 20 questions, so it is not an official result.", mm: "ဤခန့်မှန်းချက်က မေးခွန်း ၂၀ ခုအပေါ် အခြေခံသဖြင့် တရားဝင် ရလဒ် မဟုတ်ပါ။" },
    ],
    mistakes: [
      { wrong: "အက်ပ်၏ ခန့်မှန်းချက်ကို တရားဝင် လက်မှတ်အဖြစ် ယူခြင်း", right: "ခန့်မှန်းချက်သာ ဖြစ်ကြောင်း နားလည်ပါ", why: "တရားဝင် အသိအမှတ်ပြု မဟုတ်ပါ။" },
      { wrong: "သက်သေ မရှိဘဲ အဆင့် တင်ခြင်း", right: "အသံဖိုင်/စာမူ သက်သေ ထားပါ", why: "ကိုယ်တိုင် လှည့်စားမှု ဖြစ်နိုင်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "How many CEFR levels are there?", promptMm: "ရွေးပါ။", options: ["3", "4", "6", "8"], answer: 2, explanation: "A1–C2 = ၆ ဆင့်။", topic: "CEFR" },
      { type: "mcq", prompt: "A 'can-do statement' describes ___.", promptMm: "ရွေးပါ။", options: ["a grammar rule", "what a learner can do", "an exam score", "a word list"], answer: 1, explanation: "လုပ်နိုင်သည့် စွမ်းရည်။", topic: "CEFR" },
      { type: "fill", prompt: "The app's CEFR estimate is not an ___ certificate.", promptMm: "ဖြည့်ပါ။", answers: ["official"], explanation: "official certificate။", topic: "CEFR" },
      { type: "correct", prompt: "Correct: I am agree that B2 is higher than B1.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I agree that B2 is higher than B1."], explanation: "agree သည် ကြိယာ။", topic: "CEFR" },
    ],
    independent: [
      { type: "mcq", prompt: "Which is a self-assessment tool?", promptMm: "ရွေးပါ။", options: ["A can-do checklist", "A passport", "A university degree", "A visa"], answer: 0, explanation: "can-do စာရင်း။", topic: "CEFR" },
      { type: "fill", prompt: "___-assessment helps you plan your study.", promptMm: "ဖြည့်ပါ။", answers: ["Self"], explanation: "self-assessment။", topic: "CEFR" },
      { type: "mcq", prompt: "Best evidence of speaking progress?", promptMm: "ရွေးပါ။", options: ["A feeling", "A recording from two months ago and today", "A friend's guess", "A dream"], answer: 1, explanation: "နှိုင်းယှဉ်နိုင်သည့် သက်သေ။", topic: "CEFR" },
      { type: "translate", prompt: "Translate: ဒီရလဒ်က တရားဝင် မဟုတ်ပါဘူး။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["This result is not official.", "The result is unofficial."], explanation: "not official / unofficial။", topic: "CEFR" },
    ],
    review: [
      { q: "CEFR အဆင့် ၆ ဆင့် ဘာလဲ။", a: "A1, A2, B1, B2, C1, C2။" },
      { q: "ဤအက်ပ်၏ ခန့်မှန်းချက် တရားဝင် လား။", a: "မဟုတ်ပါ။ ကိုယ်တိုင် လေ့လာရန် ခန့်မှန်းချက်သာ။" },
    ],
    summary: ["CEFR သည် စွမ်းရည် ၆ ဆင့် ဖော်ပြသည်။", "can-do ဖော်ပြချက်ဖြင့် ကိုယ်တိုင် စမ်းနိုင်သည်။", "အက်ပ်၏ ရလဒ်သည် တရားဝင် မဟုတ်ပါ။"],
    mastery: ["အဆင့် ၆ ဆင့်၏ ကွာခြားချက် ဖော်ပြနိုင်သည်။", "can-do ၁၀ ချက်ဖြင့် ကိုယ်တိုင် အကဲဖြတ်နိုင်သည်။"],
    topics: ["CEFR", "study skills", "assessment"],
  },
  {
    id: "i2-ielts-overview",
    moduleId: "I",
    title: "IELTS Format and Band Descriptors",
    titleMm: "IELTS ဖော်မတ် နှင့် band စံနှုန်း",
    level: "B2",
    minutes: 22,
    summaryLine: "IELTS Academic ၏ အပိုင်း ၄ ခု၊ အချိန် နှင့် band စံနှုန်း အခြေခံ။",
    objectives: ["အပိုင်း ၄ ခု နှင့် အချိန် ဖော်ပြနိုင်မည်။", "band ၉ ဆင့်၏ အဓိပ္ပာယ် သိမည်။", "ရမှတ် တွက်နည်း အခြေခံ နားလည်မည်။"],
    vocab: [
      { en: "band score", mm: "IELTS အမှတ် အဆင့်", pos: "noun", example: "The band score ranges from 1 to 9.", exampleMm: "band အမှတ်က ၁ မှ ၉ အထိ ရှိသည်။", topic: "IELTS", level: "B2" },
      { en: "task response", mm: "မေးခွန်း ဖြေဆိုမှု ပြည့်စုံမှု", pos: "noun", example: "Task response is one writing criterion.", exampleMm: "Task response သည် စာရေး စံနှုန်း တစ်ခု ဖြစ်သည်။", topic: "IELTS", level: "C1" },
      { en: "coherence", mm: "ဆက်စပ် ညီညွတ်မှု", pos: "noun", example: "Coherence and cohesion is scored separately.", exampleMm: "Coherence and cohesion ကို သီးခြား အမှတ်ပေးသည်။", topic: "IELTS", level: "C1" },
    ],
    sections: [
      {
        heading: "အပိုင်း ၄ ခု",
        body: [
          "Listening — မိနစ် ၃၀ + လွှဲပြောင်းချိန် ၁၀၊ မေးခွန်း ၄၀။ Reading — မိနစ် ၆၀၊ မေးခွန်း ၄၀၊ စာသား ၃ ပုဒ်။",
          "Writing — မိနစ် ၆၀၊ Task 1 (အနည်းဆုံး စကားလုံး ၁၅၀) နှင့် Task 2 (၂၅၀)။ Speaking — မိနစ် ၁၁–၁၄၊ အပိုင်း ၃ ခု (မိတ်ဆက်၊ cue card၊ ဆွေးနွေးမှု)။",
          "band အမှတ်က ၁–၉ ဖြစ်ပြီး ၀.၅ အဆင့် ရှိသည်။ စာရေး/ပြောဆို တွင် စံနှုန်း ၄ ခု (task response/achievement, coherence & cohesion, lexical resource, grammatical range & accuracy) ဖြင့် အမှတ်ပေးသည်။",
        ],
        table: { headers: ["အပိုင်း", "အချိန်", "မေးခွန်း"], rows: [["Listening", "၃၀ မိနစ်", "၄၀"], ["Reading", "၆၀ မိနစ်", "၄၀"], ["Writing", "၆၀ မိနစ်", "Task 2 ခု"], ["Speaking", "၁၁–၁၄ မိနစ်", "အပိုင်း ၃ ခု"]] },
      },
      {
        heading: "ရမှတ် နှင့် ကန့်သတ်ချက်",
        body: [
          "band တစ်ခုစီသည် စွမ်းရည် ဖော်ပြချက် ရှိသည် — ဥပမာ band 6 = 'competent user'။ တိကျသည့် ဖော်ပြချက်ကို တရားဝင် band descriptor တွင် ကြည့်ရသည်။",
          "ဤအက်ပ်ရှိ IELTS လေ့ကျင့်ခန်းများသည် ဖော်မတ်ကို နားလည်ရန် ကူညီသည်၊ တရားဝင် band အမှတ် မပေးပါ။ စာရေး/ပြောဆို ကို အလိုအလျောက် အကဲဖြတ်ခြင်း မရှိပါ။",
        ],
      },
    ],
    examples: [
      { en: "Listening has 40 questions and takes about 30 minutes.", mm: "Listening တွင် မေးခွန်း ၄၀ ခု ရှိပြီး ၃၀ မိနစ်ခန့် ကြာသည်။" },
      { en: "In Writing Task 2 you should write at least 250 words.", mm: "Writing Task 2 တွင် အနည်းဆုံး စကားလုံး ၂၅၀ ရေးသင့်သည်။" },
      { en: "The app's IELTS practice does not give an official band score.", mm: "ဤအက်ပ်၏ IELTS လေ့ကျင့်ခန်းသည် တရားဝင် band အမှတ် မပေးပါ။" },
    ],
    mistakes: [
      { wrong: "Task 1 တွင် ကိုယ်ပိုင် အမြင် ထည့်ခြင်း", right: "ဒေတာ/ဇယားကို ဖော်ပြရုံသာ", why: "Task 1 က ဖော်ပြချက် ဖြစ်သည်။" },
      { wrong: "band အမှတ်ကို ကိုယ်တိုင် တွက်ပြီး တရားဝင်ဟု ယူခြင်း", right: "ခန့်မှန်းချက်သာ ဖြစ်ကြောင်း သိပါ", why: "အကဲဖြတ်သူ လိုသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "How many questions are in IELTS Reading?", promptMm: "ရွေးပါ။", options: ["20", "30", "40", "50"], answer: 2, explanation: "မေးခွန်း ၄၀။", topic: "IELTS" },
      { type: "mcq", prompt: "Which is NOT a writing criterion?", promptMm: "ရွေးပါ။", options: ["task response", "coherence and cohesion", "grammatical range", "handwriting speed"], answer: 3, explanation: "လက်ရေး အမြန်နှုန်း မပါ။", topic: "IELTS" },
      { type: "fill", prompt: "Writing Task 2 needs at least 250 ___.", promptMm: "ဖြည့်ပါ။", answers: ["words"], explanation: "words။", topic: "IELTS" },
      { type: "correct", prompt: "Correct: The band score range from 1 to 9.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The band score ranges from 1 to 9."], explanation: "score → ranges။", topic: "IELTS" },
    ],
    independent: [
      { type: "mcq", prompt: "How long is IELTS Speaking?", promptMm: "ရွေးပါ။", options: ["5 minutes", "11–14 minutes", "30 minutes", "60 minutes"], answer: 1, explanation: "၁၁–၁၄ မိနစ်။", topic: "IELTS" },
      { type: "fill", prompt: "IELTS writing has two ___: Task 1 and Task 2.", promptMm: "ဖြည့်ပါ။", answers: ["tasks"], explanation: "tasks။", topic: "IELTS" },
      { type: "mcq", prompt: "What is Task 1 usually about?", promptMm: "ရွေးပါ။", options: ["An opinion essay", "Describing a chart or process", "A letter to a friend", "A poem"], answer: 1, explanation: "ဇယား/လုပ်ငန်းစဉ် ဖော်ပြချက်။", topic: "IELTS" },
      { type: "translate", prompt: "Translate: IELTS ကို အပိုင်း ၄ ခု ရှိတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["IELTS has four sections.", "There are four sections in IELTS."], explanation: "has four sections။", topic: "IELTS" },
    ],
    review: [
      { q: "IELTS အပိုင်း ၄ ခု နှင့် အချိန် ဘာလဲ။", a: "Listening ၃၀၊ Reading ၆၀၊ Writing ၆၀၊ Speaking ၁၁–၁၄ မိနစ်။" },
      { q: "ဤအက်ပ်က band အမှတ် ပေးသလား။", a: "မပေးပါ။ ဖော်မတ် လေ့ကျင့်ရန်သာ။" },
    ],
    summary: ["အပိုင်း ၄ ခု၏ အချိန် နှင့် မေးခွန်း ပမာဏ ကွဲပြားသည်။", "band အမှတ်က ၁–၉ ဖြစ်သည်။", "အက်ပ်၏ လေ့ကျင့်ခန်းသည် တရားဝင် အမှတ် မဟုတ်ပါ။"],
    mastery: ["အပိုင်း ၄ ခု၏ အချိန်/မေးခွန်း ဖြေနိုင်သည်။", "စာရေး စံနှုန်း ၄ ခု ဖော်ပြနိုင်သည်။"],
    topics: ["IELTS", "exam strategy", "assessment"],
  },
  {
    id: "i3-academic-study-skills",
    moduleId: "I",
    title: "Academic Study Skills",
    titleMm: "ပညာရေး လေ့လာမှု ကျွမ်းကျင်မှုများ",
    level: "B2",
    minutes: 22,
    summaryLine: "မှတ်စု ရေးခြင်း၊ အချိန် စီမံခြင်း၊ စာဖတ်ခြင်း နှင့် ပြန်လည် သုံးသပ်ခြင်း ကျွမ်းကျင်မှုများ။",
    objectives: ["မှတ်စု ရေးနည်း ၃ မျိုး သုံးနိုင်မည်။", "အချိန်ဇယား ရေးနိုင်မည်။", "ပြန်လည် သုံးသပ်မှု (review) စီစဉ်နိုင်မည်။"],
    vocab: [
      { en: "spaced repetition", mm: "အချိန်ခြားပြီး ပြန်လုပ်ခြင်း", pos: "noun", example: "Spaced repetition improves long-term memory.", exampleMm: "အချိန်ခြားပြီး ပြန်လုပ်ခြင်းက ရေရှည် မှတ်ဉာဏ်ကို တိုးစေသည်။", topic: "study skills", level: "B2" },
      { en: "active recall", mm: "ကိုယ်တိုင် ပြန်လည် ဆွဲထုတ်ခြင်း", pos: "noun", example: "Active recall means testing yourself.", exampleMm: "active recall သည် ကိုယ်ကို စမ်းသပ်ခြင်း ဖြစ်သည်။", topic: "study skills", level: "B2" },
      { en: "distraction", mm: "အာရုံ လွဲစေမှု", pos: "noun", example: "Remove distractions while studying.", exampleMm: "စာလုပ်နေစဉ် အာရုံလွဲစေမှုကို ဖယ်ရှားပါ။", topic: "study skills", level: "B1" },
    ],
    sections: [
      {
        heading: "မှတ်စု ရေးနည်း ၃ မျိုး",
        body: [
          "Outline — ခေါင်းစဉ်ငယ် နှင့် အချက်များ။ Cornell — မှတ်စု / အဓိကအချက် / အနှစ်ချုပ် ကော်လံ ၃ ခု။ Mind map — အလယ်တွင် အဓိကအကြောင်းအရာ၊ ပတ်ပတ်လည်တွင် ဆက်စပ်အချက်။",
          "မှတ်စုတွင် ကိုယ်ပိုင် စကားဖြင့် ရေးခြင်းက နားလည်မှုကို စမ်းသည်။ စာအုပ်မှ အတိအကျ ကူးချခြင်းက မကူညီပါ။",
        ],
        table: { headers: ["နည်း", "သင့်တော်သည့် အခြေအနေ", "အားသာချက်"], rows: [["Outline", "ဟောပြောချက်", "အစီအစဉ် ရှင်း"], ["Cornell", "စာအုပ်/ဟောပြော", "မေးခွန်း ပြန်ထုတ်လွယ်"], ["Mind map", "ဆက်စပ်မှု များ", "ခြုံငုံ မြင်ရလွယ်"]] },
      },
      {
        heading: "အချိန် နှင့် ပြန်လည် သုံးသပ်မှု",
        body: [
          "Pomodoro — မိနစ် ၂၅ အာရုံစိုက်ပြီး ၅ မိနစ် အနားယူ။ အနားယူချိန်တွင် ဖုန်း မကြည့်ပါ။",
          "spaced repetition — ဒီနေ့ သင်ပြီး ၁ ရက်၊ ၃ ရက်၊ ၇ ရက် အတွင်း ပြန်လုပ်သည်။ active recall — စာအုပ် မကြည့်ဘဲ အချက် ပြန်ပြောခြင်း။",
        ],
      },
    ],
    examples: [
      { en: "I study for 25 minutes, then take a five-minute break.", mm: "ကျွန်တော် ၂၅ မိနစ် လေ့လာပြီး ၅ မိနစ် အနားယူသည်။" },
      { en: "I review new words after one day, three days and one week.", mm: "စကားလုံးအသစ်များကို တစ်ရက်၊ သုံးရက် နှင့် တစ်ပတ်အကြာတွင် ပြန်လုပ်သည်။" },
      { en: "Testing myself showed that I had forgotten half the list.", mm: "ကိုယ်ကို စမ်းသပ်ကြည့်တော့ စာရင်း၏ တစ်ဝက်ကို မေ့နေကြောင်း တွေ့ရသည်။" },
    ],
    mistakes: [
      { wrong: "ဖုန်းနှင့် အတူ လေ့လာခြင်း", right: "ဖုန်းကို အခြားအခန်းတွင် ထားပါ", why: "အာရုံ လွဲစေမှု လျော့သည်။" },
      { wrong: "တစ်ကြိမ်တည်း အချိန်အကြာကြီး လေ့လာခြင်း", right: "အပိုင်းခွဲပြီး အနားယူပါ", why: "ပင်ပန်းလျှင် မှတ်မိမှု ကျသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Spaced repetition means ___.", promptMm: "ရွေးပါ။", options: ["studying once for hours", "reviewing at increasing intervals", "reading aloud", "copying the book"], answer: 1, explanation: "အချိန်ခြားပြီး ပြန်လုပ်ခြင်း။", topic: "study skills" },
      { type: "mcq", prompt: "Cornell notes use ___.", promptMm: "ရွေးပါ။", options: ["one column", "three sections", "no headings", "only drawings"], answer: 1, explanation: "မှတ်စု/အဓိက/အနှစ်ချုပ်။", topic: "study skills" },
      { type: "fill", prompt: "Remove ___ while you study. (အာရုံလွဲစေမှု)", promptMm: "ဖြည့်ပါ။", answers: ["distractions"], explanation: "distractions။", topic: "study skills" },
      { type: "correct", prompt: "Correct: I study during 25 minutes.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I study for 25 minutes."], explanation: "for + အချိန်ကာလ။", topic: "study skills" },
    ],
    independent: [
      { type: "mcq", prompt: "Active recall is ___.", promptMm: "ရွေးပါ။", options: ["reading again", "testing yourself without notes", "highlighting", "listening to music"], answer: 1, explanation: "ကိုယ်တိုင် ပြန်ဆွဲထုတ်ခြင်း။", topic: "study skills" },
      { type: "fill", prompt: "A mind ___ shows connections between ideas.", promptMm: "ဖြည့်ပါ။", answers: ["map"], explanation: "mind map။", topic: "study skills" },
      { type: "mcq", prompt: "Which is the best review schedule?", promptMm: "ရွေးပါ။", options: ["Once, then never", "Day 1, day 3, day 7", "Only before the exam", "Every hour for a week"], answer: 1, explanation: "spaced repetition။", topic: "study skills" },
      { type: "translate", prompt: "Translate: ကျွန်တော် စကားလုံးအသစ်တွေကို တစ်ပတ်တစ်ခါ ပြန်လုပ်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I review new words once a week.", "I review new vocabulary once a week."], explanation: "review + once a week။", topic: "study skills" },
    ],
    review: [
      { q: "မှတ်စု ရေးနည်း ၃ မျိုး ဘာလဲ။", a: "outline, Cornell, mind map။" },
      { q: "spaced repetition ဘယ်လို လုပ်သလဲ။", a: "၁၊ ၃၊ ၇ ရက် အတွင်း ပြန်လုပ်သည်။" },
    ],
    summary: ["မှတ်စုကို ကိုယ်ပိုင်စကားဖြင့် ရေးသည်။", "အချိန်ကို အပိုင်းခွဲပြီး အနားယူသည်။", "ပြန်လည် သုံးသပ်မှုကို အချိန်ခြားပြီး စီစဉ်သည်။"],
    mastery: ["မှတ်စု နည်း ၃ မျိုး အသုံးချနိုင်သည်။", "၂ ပတ် အချိန်ဇယား ရေးနိုင်သည်။"],
    topics: ["study skills", "productivity", "learning"],
  },
  {
    id: "i4-integrated-mock",
    moduleId: "I",
    title: "Integrated Practice: Running Your Own Mock Test",
    titleMm: "စုပေါင်း လေ့ကျင့်မှု — ကိုယ်တိုင် စမ်းသပ် စာမေးပွဲ ကျင်းပခြင်း",
    level: "B2",
    minutes: 24,
    summaryLine: "အက်ပ်ရှိ လေ့ကျင့်ခန်းများကို အသုံးပြုပြီး အချိန်သတ်မှတ်ကာ စုပေါင်း လေ့ကျင့်မှု ပြုလုပ်နည်း။",
    objectives: ["စမ်းသပ် စာမေးပွဲ အစီအစဉ် ရေးနိုင်မည်။", "အချိန် သတ်မှတ်နည်း သိမည်။", "ရလဒ်ကို မှန်ကန်စွာ သုံးသပ်နိုင်မည်။"],
    vocab: [
      { en: "mock test", mm: "စမ်းသပ် စာမေးပွဲ", pos: "noun", example: "Take a mock test under timed conditions.", exampleMm: "အချိန်သတ်မှတ်ချက်ဖြင့် စမ်းသပ် စာမေးပွဲ ဖြေပါ။", topic: "mock test", level: "B2" },
      { en: "timed condition", mm: "အချိန် သတ်မှတ်ထားသည့် အခြေအနေ", pos: "noun", example: "Practise under timed conditions.", exampleMm: "အချိန် သတ်မှတ်ထားသည့် အခြေအနေတွင် လေ့ကျင့်ပါ။", topic: "mock test", level: "C1" },
      { en: "review", mm: "ပြန်လည် သုံးသပ်ခြင်း", pos: "verb/noun", example: "Review every wrong answer.", exampleMm: "မှားသည့် အဖြေတိုင်းကို ပြန်လည် သုံးသပ်ပါ။", topic: "mock test", level: "B1" },
    ],
    sections: [
      {
        heading: "၅ အဆင့် အစီအစဉ်",
        body: [
          "၁) အပိုင်း ရွေးချယ်ခြင်း — အက်ပ်၏ quizzes/practice စာမျက်နှာမှ မေးခွန်းအစုကို ရွေးသည်။ ၂) အချိန် သတ်မှတ်ခြင်း — မေးခွန်း ၂၀ အတွက် မိနစ် ၂၀ ကဲ့သို့ သတ်မှတ်သည်။",
          "၃) ဖုန်း/အနှောင့်အယှက် ပိတ်ခြင်း။ ၄) ဖြေဆိုပြီး အမှတ်ကို မှတ်တမ်းတင်ခြင်း။ ၅) အမှား တစ်ခုစီကို ဘာကြောင့် မှားသည်ကို ရေးပြီး သက်ဆိုင်ရာ သင်ခန်းစာ ပြန်ဖတ်သည်။",
          "ဤအက်ပ်သည် စာမေးပွဲကို အလိုအလျောက် အချိန်တို/စောင့်ကြည့် မပေးပါ။ အချိန်ကို ကိုယ်တိုင် စောင့်ကြည့်ရသည်။ ရမှတ်သည် ကိုယ်ဖြေသည့် မေးခွန်းများအပေါ် အခြေခံသည်။",
        ],
        table: { headers: ["အဆင့်", "လုပ်ဆောင်ချက်", "အချိန်"], rows: [["၁", "မေးခွန်း ရွေး", "၅ မိနစ်"], ["၂", "အချိန် သတ်မှတ်", "၁ မိနစ်"], ["၃", "အနှောင့်အယှက် ပိတ်", "၁ မိနစ်"], ["၄", "ဖြေဆို", "၂၀ မိနစ်"], ["၅", "ပြန်လည် သုံးသပ်", "၁၀ မိနစ်"]] },
      },
      {
        heading: "ရလဒ် သုံးသပ်ခြင်း",
        body: [
          "အမှား အမျိုးအစားကို ခွဲသည် — စကားလုံး မသိခြင်း၊ မေးခွန်း မဖတ်ခြင်း၊ အချိန် မလုံခြင်း၊ ဂရုမစိုက်မှု။ အမျိုးအစားအလိုက် နောက်တစ်ကြိမ် အာရုံစိုက်စရာ ကွာခြားသည်။",
          "တစ်ကြိမ် ရမှတ်ကို အတက်အကျ မဟုတ်ဘဲ လမ်းကြောင်း (၃ ကြိမ် ပျမ်းမျှ) အဖြစ် ကြည့်သည်။ နှိုင်းယှဉ်ရန် ရက်စွဲ နှင့် အမှတ် မှတ်တမ်းတင်ထားသည်။",
        ],
      },
    ],
    examples: [
      { en: "I answered 20 questions in 20 minutes and scored 14.", mm: "မေးခွန်း ၂၀ ခုကို ၂၀ မိနစ်အတွင်း ဖြေပြီး ၁၄ မှတ် ရခဲ့သည်။" },
      { en: "Four mistakes were vocabulary problems, so I added those words to my word bank.", mm: "အမှား ၄ ခုက စကားလုံး ပြဿနာ ဖြစ်သဖြင့် ထိုစကားလုံးများကို ကျွန်တော့် စကားလုံး ဘဏ်တွင် ထည့်ခဲ့သည်။" },
      { en: "My last three scores were 12, 14 and 16, so the trend is upward.", mm: "နောက်ဆုံး သုံးကြိမ် အမှတ်က ၁၂၊ ၁၄၊ ၁၆ ဖြစ်သဖြင့် လမ်းကြောင်း တက်နေသည်။" },
    ],
    mistakes: [
      { wrong: "အချိန် မသတ်မှတ်ဘဲ ဖြေခြင်း", right: "တိကျသည့် အချိန် သတ်မှတ်ပါ", why: "စာမေးပွဲ အခြေအနေ မတူပါ။" },
      { wrong: "ရမှတ်သာ ကြည့်ပြီး အမှား မပြန်စစ်ခြင်း", right: "အမှား တစ်ခုစီကို ခွဲခြမ်းစိတ်ဖြာပါ", why: "တိုးတက်မှု မရှိနိုင်ပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "What should you do before starting?", promptMm: "ရွေးပါ။", options: ["Set a time limit", "Check social media", "Call a friend", "Read the answers"], answer: 0, explanation: "အချိန် သတ်မှတ်ခြင်း။", topic: "mock test" },
      { type: "mcq", prompt: "Which is a useful review step?", promptMm: "ရွေးပါ။", options: ["Delete the result", "Group your mistakes by type", "Ignore errors", "Only note the score"], answer: 1, explanation: "အမှား အမျိုးအစား ခွဲခြမ်းစိတ်ဖြာခြင်း။", topic: "mock test" },
      { type: "fill", prompt: "Practise under timed ___.", promptMm: "ဖြည့်ပါ။", answers: ["conditions"], explanation: "timed conditions။", topic: "mock test" },
      { type: "correct", prompt: "Correct: I answered 20 questions on 20 minutes.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I answered 20 questions in 20 minutes."], explanation: "in + အချိန်ကာလ (ပြီးစီးရန်)။", topic: "mock test" },
    ],
    independent: [
      { type: "mcq", prompt: "Why record three scores?", promptMm: "ရွေးပါ။", options: ["To see the trend", "To fill space", "To copy friends", "To avoid review"], answer: 0, explanation: "လမ်းကြောင်း ကြည့်ရန်။", topic: "mock test" },
      { type: "fill", prompt: "___ every wrong answer and find the cause.", promptMm: "ဖြည့်ပါ။", answers: ["Review", "Check"], explanation: "review သည် ဤနေရာတွင် သင့်တော်သည်။", topic: "mock test" },
      { type: "mcq", prompt: "A timing problem means ___.", promptMm: "ရွေးပါ။", options: ["you did not finish in time", "you spelled words wrong", "you guessed", "you were absent"], answer: 0, explanation: "အချိန် မလုံခြင်း။", topic: "mock test" },
      { type: "translate", prompt: "Translate: မေးခွန်း ၂၀ ကို နှစ်ဆယ် မိနစ်အတွင်း ဖြေပါ။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Answer 20 questions in 20 minutes.", "Complete 20 questions in 20 minutes."], explanation: "in + အချိန်။", topic: "mock test" },
    ],
    review: [
      { q: "စမ်းသပ် စာမေးပွဲ အဆင့် ၅ ခု ဘာလဲ။", a: "မေးခွန်း ရွေး၊ အချိန် သတ်မှတ်၊ အနှောင့်အယှက် ပိတ်၊ ဖြေ၊ သုံးသပ်။" },
      { q: "အမှား ဘယ်လို ခွဲသလဲ။", a: "စကားလုံး၊ မေးခွန်း ဖတ်မှု၊ အချိန်၊ ဂရုမစိုက်မှု။" },
    ],
    summary: ["အချိန် သတ်မှတ်ခြင်းက စာမေးပွဲ အခြေအနေ ဖန်တီးသည်။", "အမှား ခွဲခြမ်းစိတ်ဖြာမှုက တိုးတက်မှု ဖြစ်စေသည်။", "ရမှတ်ကို လမ်းကြောင်းအနေဖြင့် ကြည့်သည်။"],
    mastery: ["စမ်းသပ် စာမေးပွဲ ၁ ကြိမ် အပြည့်အစုံ လုပ်နိုင်သည်။", "အမှား ၁၀ ခုကို အမျိုးအစား ခွဲနိုင်သည်။"],
    topics: ["exam strategy", "mock test", "study skills"],
  },
];

export const moduleILessons: Lesson[] = buildLessons(seeds);
