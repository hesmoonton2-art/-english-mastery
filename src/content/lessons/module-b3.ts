import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "b13-present-perfect-continuous",
    moduleId: "B",
    title: "Present Perfect Continuous",
    titleMm: "Present Perfect Continuous",
    level: "B1",
    minutes: 22,
    summaryLine:
      "အတိတ်တွင် စတင်ပြီး ယခုအထိ ဆက်လက်ဖြစ်ပေါ်နေသော လုပ်ဆောင်မှုကို 'have/has been + verb-ing' ဖြင့် ဖော်ပြနည်း။",
    objectives: [
      "have been doing ပုံစံကို မှန်ကန်စွာ ဖွဲ့နိုင်မည်။",
      "Present perfect simple နှင့် continuous ကွာခြားချက်ကို ရှင်းပြနိုင်မည်။",
      "for/since ကို မှန်ကန်စွာ တွဲသုံးနိုင်မည်။",
    ],
    vocab: [
      { en: "for", mm: "(ကာလ) ကြာမြင့်စွာ", ipa: "fɔː", pos: "preposition", example: "I have been waiting for two hours.", exampleMm: "နှစ်နာရီကြာအောင် စောင့်နေခဲ့သည်။", topic: "present perfect", level: "B1" },
      { en: "since", mm: "(အချိန်မှ) စ၍", ipa: "sɪns", pos: "preposition", example: "She has been working here since 2022.", exampleMm: "သူမ ၂၀၂၂ မှစ၍ ဤနေရာတွင် အလုပ်လုပ်နေသည်။", topic: "present perfect", level: "B1" },
      { en: "recently", mm: "မကြာသေးမီက", ipa: "ˈriːsntli", pos: "adverb", example: "He has been studying a lot recently.", exampleMm: "သူ မကြာသေးမီက စာများစွာ လေ့လာနေခဲ့သည်။", topic: "present perfect", level: "B1" },
    ],
    sections: [
      {
        heading: "ဖွဲ့စည်းပုံ",
        body: [
          "အပြုသဘော — subject + have/has + been + verb-ing။ 'I have been reading.' 'She has been reading.'",
          "မေးခွန်း — Have/Has + subject + been + verb-ing? 'Have you been working?' ငြင်းပယ် — have/has not been + verb-ing။",
          "ဤကာလသည် လုပ်ဆောင်မှု၏ ရလဒ်ထက် ကြာချိန်/ဆက်လက်ဖြစ်ပေါ်မှုကို အလေးပေးသည်။ 'I have painted the wall.' (ပြီးသွားပြီ) နှင့် 'I have been painting the wall.' (ဆက်လုပ်နေဆဲ/မကြာသေးမီက လုပ်ခဲ့သည်) ကွာခြားသည်။",
        ],
        table: {
          headers: ["ကာလ", "အဓိကအချက်", "ဥပမာ"],
          rows: [
            ["Present perfect simple", "ရလဒ်/ပြီးစီးမှု", "I have read the book."],
            ["Present perfect continuous", "ကြာချိန်/ဆက်လက်မှု", "I have been reading all morning."],
          ],
        },
      },
      {
        heading: "for နှင့် since",
        body: [
          "'for' သည် ကာလ အရှည်ကို ပြသည် — for two hours, for three years, for a long time။",
          "'since' သည် စတင်သည့် အမှတ်ကို ပြသည် — since Monday, since 2020, since I left school။",
          "ကြိယာ အချို့ (know, believe, own) သည် ဤကာလတွင် -ing မယူပါ။ 'I have been knowing him' မှားသည်၊ 'I have known him for years.' မှန်သည်။",
        ],
      },
    ],
    examples: [
      { en: "I have been learning English for three years.", mm: "အင်္ဂလိပ်ကို သုံးနှစ်ကြာ လေ့လာနေခဲ့သည်။" },
      { en: "It has been raining since morning.", mm: "မနက်ကတည်းက မိုးရွာနေသည်။" },
      { en: "Have you been waiting long?", mm: "ကြာကြာ စောင့်နေခဲ့သလား။", note: "long = a long time ၏ စကားပြော ပုံစံ။" },
    ],
    mistakes: [
      { wrong: "I am waiting for two hours.", right: "I have been waiting for two hours.", why: "ကာလ တစ်ခုကို ဖော်ပြလျှင် present perfect continuous ကို သုံးသည်။" },
      { wrong: "She has been working here since three years.", right: "She has been working here for three years.", why: "ကာလ အရှည်အတွက် for၊ စတင်သည့် အမှတ်အတွက် since။" },
    ],
    guided: [
      { type: "mcq", prompt: "They ___ football since 4 p.m.", promptMm: "ကာလ ရွေးပါ။", options: ["play", "are playing", "have been playing", "played"], answer: 2, explanation: "since 4 p.m. → present perfect continuous။", topic: "present perfect continuous" },
      { type: "fill", prompt: "I have ___ studying all day.", promptMm: "အကူကြိယာ ဖြည့်ပါ။", answers: ["been"], explanation: "have been + -ing။", topic: "present perfect continuous" },
      { type: "mcq", prompt: "Which is correct?", promptMm: "မှန်ကန်သည့် ဝါကျ ရွေးပါ။", options: ["She has been knowing him for years.", "She has known him for years.", "She is knowing him for years.", "She knows him since years."], answer: 1, explanation: "know သည် -ing မယူပါ။", topic: "present perfect continuous" },
      { type: "fill", prompt: "He has been living here ___ 2019.", promptMm: "for/since ဖြည့်ပါ။", answers: ["since"], explanation: "အချိန်အမှတ် → since။", topic: "present perfect continuous" },
    ],
    independent: [
      { type: "order", prompt: "Arrange the sentence.", promptMm: "စီပါ။", tokens: ["been", "have", "I", "waiting", "for", "an", "hour"], answer: "I have been waiting for an hour", explanation: "ကတ္တား + have been + -ing + for + ကာလ။", topic: "present perfect continuous" },
      { type: "mcq", prompt: "Your eyes are red. ___ you ___?", promptMm: "ရွေးပါ။", options: ["Have / been crying", "Are / crying", "Did / cry", "Have / cried"], answer: 0, explanation: "ယခုအခြေအနေ၏ အကြောင်းရင်းကို ပြသည့် ကာလ။", topic: "present perfect continuous" },
      { type: "correct", prompt: "Correct: How long you have been working here?", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["How long have you been working here?", "How long have you been working here"], explanation: "မေးခွန်းတွင် have ကို ကတ္တား ရှေ့ထားသည်။", topic: "present perfect continuous" },
      { type: "translate", prompt: "Translate: ငါ မနက်ကတည်းက ဒီစာအုပ်ကို ဖတ်နေတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I have been reading this book since this morning.", "I have been reading this book since morning."], explanation: "have been + -ing + since + အချိန်အမှတ်။", topic: "present perfect continuous" },
    ],
    review: [
      { q: "for နှင့် since ကို ဘယ်လို ခွဲမလဲ။", a: "for = ကာလ အရှည် (for two hours)၊ since = စတင်သည့် အမှတ် (since Monday/2019)။" },
      { q: "ဤကာလတွင် -ing မယူသည့် ကြိယာ ဥပမာ ပေးပါ။", a: "know, believe, belong, own ကဲ့သို့ state verb များသည် -ing မယူပါ။" },
    ],
    summary: [
      "have/has been + verb-ing သည် အတိတ်မှ ယခုအထိ ဆက်လက်ဖြစ်ပေါ်နေမှုကို ပြသည်။",
      "for = ကာလ၊ since = အချိန်အမှတ်။",
      "ရလဒ်ကို အလေးပေးလိုလျှင် present perfect simple ကို သုံးသည်။",
    ],
    mastery: [
      "for/since ပါသော ဝါကျ ၈ ခုတွင် ၇ ခု မှန်ကန်စွာ ဖွဲ့နိုင်သည်။",
      "simple နှင့် continuous ကွာခြားချက်ကို ဥပမာဖြင့် ရှင်းပြနိုင်သည်။",
    ],
    topics: ["present perfect continuous", "present perfect", "tenses"],
  },
  {
    id: "b14-past-continuous",
    moduleId: "B",
    title: "Past Continuous and Past Perfect",
    titleMm: "Past Continuous နှင့် Past Perfect",
    level: "B1",
    minutes: 22,
    summaryLine:
      "အတိတ်တွင် ဖြစ်နေဆဲ အခြေအနေ (was/were doing) နှင့် အတိတ်မတိုင်မီ ပြီးခဲ့သည့် လုပ်ဆောင်မှု (had done) ကို ခွဲခြားနည်း။",
    objectives: [
      "Past continuous ကို while/when နှင့် တွဲသုံးနိုင်မည်။",
      "Past perfect ဖြင့် အစဉ်လိုက် ဖြစ်ရပ်များကို ဖော်ပြနိုင်မည်။",
      "ကာလ နှစ်ခုကို မှန်ကန်စွာ ရွေးနိုင်မည်။",
    ],
    vocab: [
      { en: "meanwhile", mm: "တစ်ချိန်တည်းတွင်", ipa: "ˈmiːnwaɪl", pos: "adverb", example: "I was cooking; meanwhile, she was studying.", exampleMm: "ငါ ချက်ပြုတ်နေစဉ် သူမ စာလုပ်နေသည်။", topic: "tenses", level: "B1" },
      { en: "already", mm: "ပြီးသား", ipa: "ɔːlˈredi", pos: "adverb", example: "When I arrived, the film had already started.", exampleMm: "ငါရောက်တော့ ဇာတ်ကား စပြီးသား ဖြစ်နေပြီ။", topic: "tenses", level: "B1" },
      { en: "by the time", mm: "…အချိန်ရောက်တော့", ipa: "baɪ ðə taɪm", pos: "phrase", example: "By the time we got there, the shop had closed.", exampleMm: "ကျွန်တော်တို့ ရောက်တော့ ဆိုင် ပိတ်သွားပြီ။", topic: "tenses", level: "B1" },
    ],
    sections: [
      {
        heading: "Past continuous",
        body: [
          "အတိတ်တွင် အချိန်တစ်ခုအတွင်း ဖြစ်နေဆဲ အခြေအနေကို ပြသည် — was/were + verb-ing။ 'At 8 p.m. I was cooking dinner.'",
          "when + past simple သည် အနှောင့်အယှက် ဖြစ်စေသည့် ဖြစ်ရပ်ကို ပြသည် — 'I was cooking when the phone rang.' while နောက်တွင် ဆက်လက်ဖြစ်နေသည့် လုပ်ဆောင်မှု လာသည် — 'While I was cooking, the phone rang.'",
          "အတိတ်တွင် ရှည်လျားသော နောက်ခံ အခြေအနေကို ဖော်ပြရာတွင်လည်း သုံးသည် — 'The sun was shining and the birds were singing.'",
        ],
      },
      {
        heading: "Past perfect",
        body: [
          "အတိတ် ဖြစ်ရပ် တစ်ခု မတိုင်မီက ပြီးခဲ့သည့် လုပ်ဆောင်မှုအတွက် had + past participle ကို သုံးသည် — 'When I arrived, she had left.' (သူမ ထွက်သွားပြီးမှ ငါရောက်သည်)။",
          "ဖြစ်ရပ် အစဉ်ကို ရှင်းလင်းစေရန် by the time, before, after, already, never စသည်နှင့် တွဲသုံးလေ့ ရှိသည်။",
          "ဖြစ်ရပ်များကို အစဉ်လိုက် ပြောလျှင် past simple နှစ်ခုကို သုံးနိုင်သည် — 'She left, then I arrived.' past perfect သည် အစဉ်ကို ပြောင်းပြန် ပြောသည့်အခါ အထူး အသုံးဝင်သည်။",
        ],
        table: {
          headers: ["ကာလ", "အသုံး", "ဥပမာ"],
          rows: [
            ["Past continuous", "အတိတ်တွင် ဖြစ်နေဆဲ", "I was reading at 9 p.m."],
            ["Past simple", "ပြီးစီးသော ဖြစ်ရပ်", "I read a chapter."],
            ["Past perfect", "အတိတ်မတိုင်မီ ပြီးခဲ့", "I had read the book before the film."],
          ],
        },
      },
    ],
    examples: [
      { en: "They were watching TV when the power went off.", mm: "မီးပျက်သွားတော့ သူတို့ တီဗီ ကြည့်နေခဲ့သည်။" },
      { en: "By the time he called, I had finished my homework.", mm: "သူ ဖုန်းဆက်တော့ ငါ အိမ်စာ ပြီးသွားပြီ။" },
      { en: "She had never seen the sea before that trip.", mm: "အဲဒီ ခရီးမတိုင်မီ သူမ ပင်လယ်ကို တစ်ခါမှ မမြင်ဖူးခဲ့ပါ။" },
    ],
    mistakes: [
      { wrong: "When I arrived, she already left.", right: "When I arrived, she had already left.", why: "အတိတ်မတိုင်မီ ပြီးခဲ့သည့် လုပ်ဆောင်မှုအတွက် had + V3။" },
      { wrong: "While I cooked, the phone rang.", right: "While I was cooking, the phone rang.", why: "while နောက်တွင် ဆက်လက်ဖြစ်နေသည့် လုပ်ဆောင်မှု → past continuous။" },
    ],
    guided: [
      { type: "mcq", prompt: "I ___ dinner when she called.", promptMm: "ကာလ ရွေးပါ။", options: ["cook", "cooked", "was cooking", "had cooked"], answer: 2, explanation: "ဖုန်းဆက်ချိန်တွင် ချက်ပြုတ်နေဆဲ → past continuous။", topic: "past continuous" },
      { type: "fill", prompt: "The train ___ already left when we arrived.", promptMm: "had/was ဖြည့်ပါ။", answers: ["had"], explanation: "အတိတ်မတိုင်မီ → had left။", topic: "past perfect" },
      { type: "mcq", prompt: "Choose the sentence with past perfect.", promptMm: "past perfect ပါသည့် ဝါကျ ရွေးပါ။", options: ["She was sleeping.", "She has slept.", "She had slept before I came.", "She sleeps early."], answer: 2, explanation: "had + V3 ပါသည်။", topic: "past perfect" },
      { type: "order", prompt: "Arrange the sentence.", promptMm: "စီပါ။", tokens: ["was", "It", "when", "raining", "we", "left"], answer: "It was raining when we left", explanation: "past continuous + when + past simple။", topic: "past continuous" },
    ],
    independent: [
      { type: "mcq", prompt: "By the time we arrived, the concert ___ .", promptMm: "ရွေးပါ။", options: ["starts", "started", "had started", "was starting"], answer: 2, explanation: "ရောက်ချိန်တွင် စပြီးသား → past perfect။", topic: "past perfect" },
      { type: "fill", prompt: "While she ___ (read), her brother was playing games.", promptMm: "ကာလ ဖြည့်ပါ။", answers: ["was reading"], explanation: "while + past continuous။", topic: "past continuous" },
      { type: "correct", prompt: "Correct: He had went home before I arrived.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["He had gone home before I arrived.", "He had gone home before I arrived"], explanation: "had + past participle (gone)။", topic: "past perfect" },
      { type: "translate", prompt: "Translate: ငါ ရောက်တော့ သူတို့ ထမင်း စားပြီးသား ဖြစ်နေပြီ။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["When I arrived, they had already eaten.", "When I arrived, they had already had dinner."], explanation: "had already + V3။", topic: "past perfect" },
    ],
    review: [
      { q: "when နှင့် while ကို ဘယ်လို ခွဲသုံးမလဲ။", a: "when + past simple (အနှောင့်အယှက် ဖြစ်ရပ်)၊ while + past continuous (ဆက်လက်ဖြစ်နေသည့် လုပ်ဆောင်မှု)။" },
      { q: "past perfect ကို ဘယ်အခါ လိုအပ်သလဲ။", a: "အတိတ် ဖြစ်ရပ် နှစ်ခု၏ အစဉ်ကို ရှင်းလင်းစေလိုသည့်အခါ (အထူးသဖြင့် အစဉ် ပြောင်းပြန် ပြောလျှင်)။" },
    ],
    summary: [
      "Past continuous = အတိတ်တွင် ဖြစ်နေဆဲ အခြေအနေ။",
      "Past perfect = အတိတ် ဖြစ်ရပ် မတိုင်မီ ပြီးခဲ့သည့် လုပ်ဆောင်မှု။",
      "when/while, by the time, already တို့ဖြင့် အစဉ်ကို ရှင်းလင်းစေသည်။",
    ],
    mastery: [
      "ကာလ ရွေးချယ်သည့် ကွက်လပ် ၁၀ ခုတွင် ၈ ခု မှန်ကန်သည်။",
      "အတိတ် ဖြစ်ရပ် သုံးခုပါသော ဇာတ်လမ်းတို ၅ ကြောင်း ရေးနိုင်သည်။",
    ],
    topics: ["past continuous", "past perfect", "tenses"],
  },
  {
    id: "b15-future-perfect",
    moduleId: "B",
    title: "Future Perfect Fundamentals",
    titleMm: "Future Perfect အခြေခံ",
    level: "B2",
    minutes: 20,
    summaryLine:
      "အနာဂတ် အချိန် တစ်ခုတွင် ပြီးစီးနေလိမ့်မည့် လုပ်ဆောင်မှုကို 'will have + past participle' ဖြင့် ဖော်ပြနည်း။",
    objectives: [
      "will have + V3 ဖွဲ့စည်းပုံကို သိမည်။",
      "by + အချိန် နှင့် မှန်ကန်စွာ တွဲသုံးနိုင်မည်။",
      "future simple နှင့် ကွာခြားချက်ကို ရှင်းပြနိုင်မည်။",
    ],
    vocab: [
      { en: "by", mm: "…အချိန်အမီ", ipa: "baɪ", pos: "preposition", example: "I will have finished by Friday.", exampleMm: "သောကြာနေ့ အမီ ပြီးပြီ ဖြစ်လိမ့်မည်။", topic: "future forms", level: "B2" },
      { en: "deadline", mm: "နောက်ဆုံး သတ်မှတ်ရက်", ipa: "ˈdedlaɪn", pos: "noun", example: "We will have submitted the report before the deadline.", exampleMm: "နောက်ဆုံးရက် မတိုင်မီ အစီရင်ခံစာ တင်ပြီးပြီ ဖြစ်လိမ့်မည်။", topic: "future forms", level: "B2" },
      { en: "complete", mm: "ပြီးစီးသည်", ipa: "kəmˈpliːt", pos: "verb", example: "By next year, she will have completed the course.", exampleMm: "လာမည့်နှစ်တွင် သူမ သင်တန်း ပြီးစီးပြီး ဖြစ်လိမ့်မည်။", topic: "future forms", level: "B2" },
    ],
    sections: [
      {
        heading: "ဖွဲ့စည်းပုံ နှင့် အဓိပ္ပာယ်",
        body: [
          "will have + past participle ဖြင့် ဖွဲ့သည် — 'By 2030, I will have worked here for ten years.'",
          "ဤကာလသည် အနာဂတ် အချိန် တစ်ခုကို ရှေးချက်ထားပြီး ထိုအချိန်တွင် လုပ်ဆောင်မှု ပြီးစီးနေလိမ့်မည်ဟု ပြသည်။ 'by the time', 'by then', 'before' နှင့် တွဲသုံးလေ့ ရှိသည်။",
          "ငြင်းပယ် — will not have + V3။ မေးခွန်း — Will + subject + have + V3? 'Will you have finished by six?'",
        ],
        table: {
          headers: ["ဝါကျ", "အဓိပ္ပာယ်"],
          rows: [
            ["I will finish the report tomorrow.", "မနက်ဖြန် ပြီးမည်။"],
            ["I will have finished the report by tomorrow.", "မနက်ဖြန် အမီ ပြီးပြီး ဖြစ်မည်။"],
            ["Will they have arrived by noon?", "မွန်းတည့် အမီ ရောက်ပြီး ဖြစ်မည်လား။"],
          ],
        },
      },
      {
        heading: "ဘယ်အခါ သုံးသင့်သလဲ",
        body: [
          "စီမံကိန်း အချိန်ဇယား ရေးဆွဲရာတွင် အသုံးဝင်သည် — 'By the end of this phase, we will have tested every lesson.'",
          "ရိုးရှင်းသော အနာဂတ် ဖြစ်ရပ်အတွက် future simple (will do) ကို သုံးသည်။ future perfect ကို 'ထိုအချိန်တွင် ပြီးနေမည်' ဟု အလေးပေးလိုသည့်အခါသာ သုံးသည်။",
          "စကားပြောတွင် ဤကာလသည် ပုံမှန် မကြာခဏ မပေါ်ပါ။ စာရေးသားမှုနှင့် အစီရင်ခံစာများတွင် ပိုတွေ့ရသည်။",
        ],
      },
    ],
    examples: [
      { en: "By the end of this year, I will have read twelve books.", mm: "ဒီနှစ်ကုန်တော့ စာအုပ် ၁၂ အုပ် ဖတ်ပြီး ဖြစ်လိမ့်မည်။" },
      { en: "They will not have finished the bridge by December.", mm: "ဒီဇင်ဘာ အမီ တံတား ပြီးပြီး ဖြစ်မည် မဟုတ်ပါ။" },
      { en: "Will she have arrived by the time we get there?", mm: "ကျွန်တော်တို့ ရောက်ချိန်တွင် သူမ ရောက်ပြီး ဖြစ်မည်လား။" },
    ],
    mistakes: [
      { wrong: "I will have finish it by Friday.", right: "I will have finished it by Friday.", why: "have နောက်တွင် past participle (V3) လိုသည်။" },
      { wrong: "By next week, I will finish the course.", right: "By next week, I will have finished the course.", why: "'by + အနာဂတ်အချိန်' နှင့် ပြီးစီးမှု ဖော်ပြလျှင် future perfect ကို သုံးသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "By 8 p.m., we ___ dinner.", promptMm: "ကာလ ရွေးပါ။", options: ["will have", "will have eaten", "have eaten", "eat"], answer: 1, explanation: "by + အနာဂတ်အချိန် + ပြီးစီးမှု → will have eaten။", topic: "future perfect" },
      { type: "fill", prompt: "They will ___ completed the project by June.", promptMm: "အကူကြိယာ ဖြည့်ပါ။", answers: ["have"], explanation: "will have + V3။", topic: "future perfect" },
      { type: "mcq", prompt: "Which is correct?", promptMm: "မှန်ကန်သည့် ဝါကျ ရွေးပါ။", options: ["She will has finished.", "She will have finished.", "She will have finish.", "She will finished."], answer: 1, explanation: "will have + V3။", topic: "future perfect" },
      { type: "correct", prompt: "Correct: By next month, I will wrote the essay.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["By next month, I will have written the essay.", "By next month, I will have written the essay"], explanation: "will have + written။", topic: "future perfect" },
    ],
    independent: [
      { type: "mcq", prompt: "Don't worry — we ___ everything by the time you arrive.", promptMm: "ရွေးပါ။", options: ["prepare", "will prepare", "will have prepared", "have prepared"], answer: 2, explanation: "ရောက်ချိန်တွင် ပြီးနေမည် → future perfect။", topic: "future perfect" },
      { type: "fill", prompt: "Will you ___ finished the book by Monday?", promptMm: "ဖြည့်ပါ။", answers: ["have"], explanation: "Will + subject + have + V3။", topic: "future perfect" },
      { type: "order", prompt: "Arrange the sentence.", promptMm: "စီပါ။", tokens: ["have", "will", "We", "this", "finished", "by", "Friday"], answer: "We will have finished this by Friday", explanation: "ကတ္တား + will have + V3 + by + အချိန်။", topic: "future perfect" },
      { type: "translate", prompt: "Translate: နှစ်ကုန်တော့ သူ သင်တန်းတွေ အားလုံး ပြီးပြီး ဖြစ်လိမ့်မည်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["By the end of the year, he will have completed all the courses.", "By the end of the year he will have finished all the courses."], explanation: "by the end of the year + will have + V3။", topic: "future perfect" },
    ],
    review: [
      { q: "future perfect ဖွဲ့စည်းပုံ ဘာလဲ။", a: "will have + past participle (V3) ဖြစ်သည်။" },
      { q: "future simple နှင့် ကွာခြားချက် ဘာလဲ။", a: "future simple သည် ဖြစ်ရပ်ကို ပြသည် (I will finish)။ future perfect သည် သတ်မှတ်အချိန်တွင် ပြီးစီးနေမှုကို ပြသည် (I will have finished by then)။" },
    ],
    summary: [
      "will have + V3 သည် အနာဂတ် အချိန်တစ်ခုတွင် ပြီးစီးနေမှုကို ပြသည်။",
      "by, by the time, before နှင့် တွဲသုံးလေ့ ရှိသည်။",
      "ငြင်းပယ်တွင် will not have + V3 ကို သုံးသည်။",
    ],
    mastery: [
      "future perfect ပါသော ဝါကျ ၈ ခုတွင် ၇ ခု မှန်ကန်စွာ ဖွဲ့နိုင်သည်။",
      "အချိန်ဇယား ဖော်ပြချက် ၅ ကြောင်း ရေးနိုင်သည်။",
    ],
    topics: ["future forms", "future perfect", "tenses"],
  },
  {
    id: "b16-reported-speech",
    moduleId: "B",
    title: "Direct and Indirect Speech",
    titleMm: "တိုက်ရိုက်/သွယ်ဝိုက် ပြောဆိုမှု",
    level: "B2",
    minutes: 24,
    summaryLine:
      "တိုက်ရိုက် ပြောဆိုချက်ကို သွယ်ဝိုက် ပြောဆိုချက်အဖြစ် ပြောင်းရာတွင် ကာလ၊ နာမ်စား နှင့် အချိန် ဖော်ပြချက်များ ပြောင်းလဲပုံ။",
    objectives: [
      "ကာလ တစ်ဆင့် ဆုတ်ခြင်း (backshift) ကို နားလည်မည်။",
      "နာမ်စားနှင့် အချိန်/နေရာ ဖော်ပြချက်များကို မှန်ကန်စွာ ပြောင်းနိုင်မည်။",
      "say နှင့် tell ၏ ကွာခြားချက်ကို သိမည်။",
    ],
    vocab: [
      { en: "report", mm: "ပြောဆိုချက် ပြန်ကြားသည်", ipa: "rɪˈpɔːt", pos: "verb", example: "She reported that the meeting had been cancelled.", exampleMm: "အစည်းအဝေး ပယ်ဖျက်ခဲ့သည်ဟု သူမ ပြောသည်။", topic: "reported speech", level: "B2" },
      { en: "claim", mm: "ဆိုသည် (သံသယ အနုစိတ်)", ipa: "kleɪm", pos: "verb", example: "He claimed he had never seen the document.", exampleMm: "အဲဒီစာရွက်ကို တစ်ခါမှ မမြင်ဖူးဟု သူ ဆိုသည်။", topic: "reported speech", level: "B2" },
      { en: "admit", mm: "ဝန်ခံသည်", ipa: "ədˈmɪt", pos: "verb", example: "She admitted that she had made a mistake.", exampleMm: "အမှား လုပ်မိသည်ဟု သူမ ဝန်ခံသည်။", topic: "reported speech", level: "B2" },
    ],
    sections: [
      {
        heading: "ကာလ တစ်ဆင့် ဆုတ်ခြင်း",
        body: [
          "ပြောသူက past tense ဖြင့် ပြန်ကြားလျှင် ကာလသည် အတိတ်သို့ တစ်ဆင့် ဆုတ်သည် — present simple → past simple၊ present continuous → past continuous၊ past simple → past perfect၊ will → would၊ can → could။",
          "အချိန် ဖော်ပြချက်များလည်း ပြောင်းသည် — now → then၊ today → that day၊ tomorrow → the next day၊ yesterday → the day before၊ here → there၊ this → that။",
          "ပြောဆိုချက် သည် ယခုတိုင် မှန်နေလျှင် ကာလ မဆုတ်ဘဲ ထားနိုင်သည် — 'She said she is a doctor.' (သူမ အခုတိုင် ဆရာဝန် ဖြစ်နေသည်)။",
        ],
        table: {
          headers: ["တိုက်ရိုက်", "သွယ်ဝိုက်"],
          rows: [
            ["\"I am tired.\"", "She said she was tired."],
            ["\"I will call you.\"", "He said he would call me."],
            ["\"I saw her yesterday.\"", "He said he had seen her the day before."],
            ["\"Can you help?\"", "She asked if I could help."],
          ],
        },
      },
      {
        heading: "say နှင့် tell",
        body: [
          "'say' သည် လူတစ်ဦးကို တိုက်ရိုက် မလိုအပ်ပါ — 'She said (that) she was busy.' 'tell' တွင် လူတစ်ဦး လိုအပ်သည် — 'She told me (that) she was busy.'",
          "'tell somebody to do' ဖြင့် အမိန့်ကို ပြန်ကြားသည် — '\"Close the door.\" → He told me to close the door.'",
          "မေးခွန်းကို ပြန်ကြားလျှင် if/whether (Yes/No မေးခွန်း) သို့မဟုတ် Wh- စကားလုံး ဖြင့် ဖွဲ့ပြီး ကြိယာ အစီအစဉ်ကို ပြောင်းသည် — 'She asked where I lived.'",
        ],
      },
    ],
    examples: [
      { en: "\"I have finished the report,\" she said. → She said she had finished the report.", mm: "အစီရင်ခံစာ ပြီးပြီဟု သူမ ပြောခဲ့သည်။" },
      { en: "He told me he would arrive at seven.", mm: "ခုနစ်နာရီတွင် ရောက်မည်ဟု သူ ပြောခဲ့သည်။" },
      { en: "They asked whether I had seen the notice.", mm: "အသိပေးစာ မြင်ခဲ့သလား သူတို့ မေးခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "She said me she was tired.", right: "She told me she was tired.", why: "လူတစ်ဦး ပါလျှင် tell ကို သုံးသည်။" },
      { wrong: "He said he will come.", right: "He said he would come.", why: "past ဖြင့် ပြန်ကြားလျှင် will → would။" },
    ],
    guided: [
      { type: "mcq", prompt: "Direct: \"I am hungry.\" — Reported: He said he ___ hungry.", promptMm: "ကာလ ရွေးပါ။", options: ["is", "was", "has been", "will be"], answer: 1, explanation: "present → past ဆုတ်သည်။", topic: "reported speech" },
      { type: "mcq", prompt: "She ___ me to wait outside.", promptMm: "say/tell ရွေးပါ။", options: ["said", "told", "spoke", "asked to"], answer: 1, explanation: "told + somebody + to do။", topic: "reported speech" },
      { type: "fill", prompt: "\"I will help you.\" → He said he ___ help me.", promptMm: "ဖြည့်ပါ။", answers: ["would"], explanation: "will → would။", topic: "reported speech" },
      { type: "correct", prompt: "Correct: She asked me where did I live.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["She asked me where I lived.", "She asked me where I lived"], explanation: "သွယ်ဝိုက် မေးခွန်းတွင် ကြိယာ အစီအစဉ် ပုံမှန်ဖြစ်သည်။", topic: "reported speech" },
    ],
    independent: [
      { type: "mcq", prompt: "Direct: \"I saw him yesterday.\" — Reported: She said she ___ him the day before.", promptMm: "ရွေးပါ။", options: ["saw", "had seen", "has seen", "sees"], answer: 1, explanation: "past simple → past perfect။", topic: "reported speech" },
      { type: "fill", prompt: "\"Do you like tea?\" → She asked ___ I liked tea.", promptMm: "if/whether ဖြည့်ပါ။", answers: ["if", "whether"], explanation: "Yes/No မေးခွန်း → if/whether။", topic: "reported speech" },
      { type: "order", prompt: "Arrange the sentence.", promptMm: "စီပါ။", tokens: ["told", "He", "to", "me", "wait"], answer: "He told me to wait", explanation: "tell + somebody + to + verb။", topic: "reported speech" },
      { type: "translate", prompt: "Translate: သူက မနက်ဖြန် လာမယ်လို့ ပြောတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["He said he would come tomorrow.", "He said that he would come the next day.", "He said he would come the next day."], explanation: "said + (that) + would come။", topic: "reported speech" },
    ],
    review: [
      { q: "say နှင့် tell ကွာခြားချက် ဘာလဲ။", a: "say တွင် လူတစ်ဦး မလိုအပ် (say that…)၊ tell တွင် လိုအပ် (tell somebody that/to)။" },
      { q: "ကာလ ဘယ်အခါ မဆုတ်ဘဲ ထားနိုင်သလဲ။", a: "ပြောဆိုချက် ယခုတိုင် မှန်နေလျှင် သို့မဟုတ် ပြန်ကြားသူက present tense ဖြင့် ပြောလျှင် မဆုတ်ဘဲ ထားနိုင်သည်။" },
    ],
    summary: [
      "past ဖြင့် ပြန်ကြားလျှင် ကာလသည် အတိတ်သို့ တစ်ဆင့် ဆုတ်သည်။",
      "နာမ်စား၊ အချိန်၊ နေရာ ဖော်ပြချက်များ ပါ ပြောင်းရသည်။",
      "မေးခွန်းကို if/whether သို့မဟုတ် Wh- ဖြင့် ပြန်ကြားပြီး ကြိယာ အစီအစဉ် ပုံမှန် ဖြစ်ရသည်။",
    ],
    mastery: [
      "တိုက်ရိုက် ပြောဆိုချက် ၁၀ ခုကို သွယ်ဝိုက် ပြောဆိုချက်အဖြစ် ၈ ခု ပြောင်းနိုင်သည်။",
      "say/tell/ask ကို မှန်ကန်စွာ ရွေးသည့် ဝါကျ ၅ ခု ရေးနိုင်သည်။",
    ],
    topics: ["reported speech", "tenses", "indirect questions"],
  },
  {
    id: "b17-gerunds-infinitives",
    moduleId: "B",
    title: "Gerunds and Infinitives in Depth",
    titleMm: "Gerund နှင့် Infinitive အသေးစိတ်",
    level: "B1",
    minutes: 22,
    summaryLine:
      "ကြိယာ နောက်တွင် -ing လား to + verb လား ဆိုသည့် ရွေးချယ်မှုကို စနစ်တကျ ခွဲခြားပြီး အဓိပ္ပာယ် ကွာခြားသည့် ကြိယာများကို လေ့လာသည်။",
    objectives: [
      "-ing နှင့် to-infinitive လိုသည့် ကြိယာများကို ခွဲခြားနိုင်မည်။",
      "remember/stop/try ကဲ့သို့ ကြိယာများ၏ အဓိပ္ပာယ် ကွာခြားမှုကို ရှင်းပြနိုင်မည်။",
      "ဝိဘတာ နောက်တွင် -ing သုံးပုံကို သိမည်။",
    ],
    vocab: [
      { en: "avoid", mm: "ရှောင်ကြဉ်သည်", ipa: "əˈvɔɪd", pos: "verb", example: "Avoid eating too much sugar.", exampleMm: "သကြား အလွန်အကျွံ စားခြင်းကို ရှောင်ပါ။", topic: "gerunds and infinitives", level: "B1" },
      { en: "decide", mm: "ဆုံးဖြတ်သည်", ipa: "dɪˈsaɪd", pos: "verb", example: "She decided to study abroad.", exampleMm: "သူမ ပြည်ပတွင် ပညာသင်ရန် ဆုံးဖြတ်ခဲ့သည်။", topic: "gerunds and infinitives", level: "B1" },
      { en: "suggest", mm: "အကြံပြုသည်", ipa: "səˈdʒest", pos: "verb", example: "He suggested taking a break.", exampleMm: "အနားယူရန် သူ အကြံပြုခဲ့သည်။", topic: "gerunds and infinitives", level: "B1" },
    ],
    sections: [
      {
        heading: "ကြိယာ အလိုက် ရွေးချယ်မှု",
        body: [
          "-ing လိုသည့် ကြိယာများ — enjoy, avoid, suggest, mind, finish, keep, practise, consider, recommend။ 'I enjoy reading.'",
          "to + verb လိုသည့် ကြိယာများ — decide, hope, plan, want, need, promise, agree, refuse, manage, offer။ 'We decided to leave.'",
          "နှစ်မျိုးလုံး ရသည့် ကြိယာများ — like, love, hate, start, begin, continue။ အဓိပ္ပာယ် သိပ်မကွာပါ။ 'I like reading.' ≈ 'I like to read.'",
        ],
        table: {
          headers: ["ကြိယာ", "ပုံစံ", "ဥပမာ"],
          rows: [
            ["enjoy", "-ing", "I enjoy swimming."],
            ["want", "to + verb", "I want to swim."],
            ["stop", "နှစ်မျိုး (အဓိပ္ပာယ် ကွာ)", "stop smoking / stop to smoke"],
            ["look forward to", "-ing", "I look forward to meeting you."],
          ],
        },
      },
      {
        heading: "အဓိပ္ပာယ် ကွာခြားသည့် ကြိယာများ",
        body: [
          "'stop doing' = လုပ်ဆောင်မှုကို ရပ်သည် — 'He stopped smoking.' (ဆေးလိပ် မသောက်တော့ပါ)။ 'stop to do' = ရပ်ပြီး အခြားအရာ လုပ်သည် — 'He stopped to smoke.' (ရပ်ပြီး ဆေးလိပ် သောက်သည်)။",
          "'remember doing' = လုပ်ခဲ့သည်ကို မှတ်မိသည် — 'I remember locking the door.' 'remember to do' = လုပ်ရန် မမေ့ပါ — 'Remember to lock the door.'",
          "ဝိဘတာ (preposition) နောက်တွင် အမြဲ -ing လာသည် — 'good at painting', 'interested in learning', 'instead of going'။",
        ],
      },
    ],
    examples: [
      { en: "I avoid driving in the city centre.", mm: "မြို့လယ်တွင် ကားမောင်းခြင်းကို ရှောင်သည်။" },
      { en: "They promised to send the file today.", mm: "ဒီနေ့ ဖိုင် ပို့မည်ဟု သူတို့ ကတိပြုခဲ့သည်။" },
      { en: "She is interested in learning Japanese.", mm: "သူမ ဂျပန်ဘာသာ သင်ယူရန် စိတ်ဝင်စားသည်။", note: "ဝိဘတာ in နောက်တွင် -ing။" },
    ],
    mistakes: [
      { wrong: "I enjoy to read books.", right: "I enjoy reading books.", why: "enjoy သည် -ing လိုသည်။" },
      { wrong: "She suggested to take a break.", right: "She suggested taking a break.", why: "suggest သည် -ing လိုသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "I want ___ a new language.", promptMm: "ပုံစံ ရွေးပါ။", options: ["learning", "to learn", "learn", "learned"], answer: 1, explanation: "want + to + verb။", topic: "gerunds and infinitives" },
      { type: "mcq", prompt: "He finished ___ the report.", promptMm: "ပုံစံ ရွေးပါ။", options: ["to write", "writing", "write", "wrote"], answer: 1, explanation: "finish + -ing။", topic: "gerunds and infinitives" },
      { type: "fill", prompt: "I look forward to ___ (meet) you.", promptMm: "-ing ဖြည့်ပါ။", answers: ["meeting"], explanation: "look forward to + -ing။", topic: "gerunds and infinitives" },
      { type: "correct", prompt: "Correct: She is good at to cook.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["She is good at cooking.", "She is good at cooking"], explanation: "ဝိဘတာ နောက်တွင် -ing။", topic: "gerunds and infinitives" },
    ],
    independent: [
      { type: "mcq", prompt: "Remember ___ the lights before you leave.", promptMm: "အဓိပ္ပာယ် ရွေးပါ။", options: ["turning off", "to turn off", "turn off", "turned off"], answer: 1, explanation: "မမေ့ဘဲ လုပ်ရန် → remember to do။", topic: "gerunds and infinitives" },
      { type: "fill", prompt: "They decided ___ (move) to Mandalay.", promptMm: "ဖြည့်ပါ။", answers: ["to move"], explanation: "decide + to + verb။", topic: "gerunds and infinitives" },
      { type: "mcq", prompt: "He stopped ___ two years ago.", promptMm: "အဓိပ္ပာယ် ရွေးပါ။", options: ["to smoke", "smoking", "smoke", "smoked"], answer: 1, explanation: "ဆေးလိပ် မသောက်တော့ခြင်း → stop smoking။", topic: "gerunds and infinitives" },
      { type: "translate", prompt: "Translate: သူ အင်္ဂလိပ် သင်ယူခြင်းကို နှစ်သက်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["He enjoys learning English.", "She enjoys learning English.", "He likes learning English."], explanation: "enjoy + -ing။", topic: "gerunds and infinitives" },
    ],
    review: [
      { q: "enjoy, avoid, suggest နောက်တွင် ဘာ လိုသလဲ။", a: "-ing (gerund) လိုသည်။" },
      { q: "remember to do နှင့် remember doing ကွာခြားချက် ဘာလဲ။", a: "remember to do = လုပ်ရန် မမေ့ပါ။ remember doing = လုပ်ခဲ့သည်ကို မှတ်မိသည်။" },
    ],
    summary: [
      "ကြိယာ တစ်ခုစီတွင် -ing သို့မဟုတ် to-infinitive လိုသည်ကို မှတ်ထားရသည်။",
      "ဝိဘတာ နောက်တွင် အမြဲ -ing လာသည်။",
      "stop/remember/try တို့သည် ပုံစံအလိုက် အဓိပ္ပာယ် ကွာခြားသည်။",
    ],
    mastery: [
      "ကြိယာ ၁၅ ခုအတွက် မှန်ကန်သော ပုံစံကို ၁၂ ခု ရွေးနိုင်သည်။",
      "အဓိပ္ပာယ် ကွာခြားသည့် ဝါကျ ၄ စုံ ရေးနိုင်သည်။",
    ],
    topics: ["gerunds and infinitives", "verb patterns"],
  },
];

export const moduleBLessonsPart3: Lesson[] = buildLessons(seeds);
