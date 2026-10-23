import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "h15-style-voice",
    moduleId: "H",
    title: "Style and Voice: Making Writing Your Own",
    titleMm: "စတိုင် နှင့် ကိုယ်ပိုင် အသံ — စာကို ကိုယ်ပိုင်ဖြစ်စေရန်",
    level: "C1",
    minutes: 22,
    summaryLine: "ဝါကျ အရှည် ကွဲပြားမှု၊ စကားလုံး ရွေးချယ်မှု နှင့် ကိုယ်ပိုင် အသံ ဖန်တီးနည်း။",
    objectives: ["စတိုင် လက္ခဏာ ၄ ခု ဖော်ပြနိုင်မည်။", "ဝါကျ အရှည် ကွဲပြားအောင် ပြင်နိုင်မည်။", "ကိုယ်ပိုင် အသံဖြင့် စာပိုဒ် ရေးနိုင်မည်။"],
    vocab: [
      { en: "voice", mm: "စာရေးသူ၏ ကိုယ်ပိုင် အသံ", pos: "noun", example: "Her voice is clear and direct.", exampleMm: "သူမ၏ အသံက ရှင်းပြီး တိုက်ရိုက်ဖြစ်သည်။", topic: "style", level: "C1" },
      { en: "concise", mm: "တိုတောင်းပြတ်သားသော", pos: "adjective", example: "Keep the summary concise.", exampleMm: "အနှစ်ချုပ်ကို တိုတောင်းပြတ်သားစွာ ထားပါ။", topic: "style", level: "B2" },
      { en: "repetitive", mm: "ထပ်ခါတလဲလဲ ဖြစ်သော", pos: "adjective", example: "The paragraph is repetitive.", exampleMm: "စာပိုဒ်က ထပ်ခါတလဲလဲ ဖြစ်နေသည်။", topic: "style", level: "B2" },
    ],
    sections: [
      {
        heading: "စတိုင် လက္ခဏာ ၄ ခု",
        body: [
          "၁) ဝါကျ အရှည် — တို နှင့် ရှည် ရောထားခြင်းက စာကို စည်းချက်ရှိစေသည်။ ၂) စကားလုံး ရွေးချယ်မှု — ရိုးရိုး/ပညာရေးဆန်/စကားပြောဆန်။",
          "၃) ကြိယာ အားကောင်းမှု — 'make a decision' ထက် 'decide' က ပိုတိုသည်။ ၄) အသံ — တက်ကြွ (active) သို့မဟုတ် ဖော်ပြချက်ဆန် (passive)။",
          "ကိုယ်ပိုင် အသံ ဆိုသည်မှာ စကားလုံး ထူးဆန်းစွာ သုံးခြင်း မဟုတ်ပါ။ ကိုယ်ပိုင် အတွေ့အကြုံ၊ တိကျသည့် ဥပမာ နှင့် ရှင်းလင်းသည့် ရပ်တည်ချက် ဖြစ်သည်။",
        ],
        table: { headers: ["အားနည်းသည့် စတိုင်", "ပိုကောင်းသည့် စတိုင်", "အကြောင်းရင်း"], rows: [["It is important to note that…", "Importantly, …", "တိုသည်"], ["makes an improvement", "improves", "ကြိယာ အားကောင်း"], ["very very good", "excellent", "ထပ်နေမှု ဖယ်"], ["There are many factors that…", "Several factors…", "တိုက်ရိုက်"]] },
      },
      {
        heading: "တည်းဖြတ်ခြင်း",
        body: [
          "စကားလုံး ၁၀% ဖြတ်ကြည့်ပါ — များသောအားဖြင့် ပိုရှင်းလာသည်။ 'in order to' → 'to', 'due to the fact that' → 'because'။",
          "ဝါကျ ၅ ကြောင်း ဆက်တိုက် တူညီသည့် အရှည်ဖြင့် ရေးထားလျှင် တစ်ကြောင်းကို ခွဲပြီး တစ်ကြောင်းကို ပေါင်းသည်။",
        ],
      },
    ],
    examples: [
      { en: "Weak: It is important to note that the results were very very good. → Strong: The results were excellent.", mm: "အားနည်း — … အလွန်အလွန် ကောင်းသည်။ ကောင်း — ရလဒ်များ ထူးချွန်သည်။" },
      { en: "Weak: We made a decision to postpone. → Strong: We decided to postpone.", mm: "အားနည်း — ဆုံးဖြတ်ချက် ချခဲ့သည်။ ကောင်း — ရွှေ့ရန် ဆုံးဖြတ်ခဲ့သည်။" },
      { en: "Short sentences create pace. Longer ones, which add detail and rhythm, slow the reader down.", mm: "ဝါကျ တိုများက အရှိန်ကို ဖန်တီးသည်။ အသေးစိတ် နှင့် စည်းချက် ထည့်သည့် ရှည်သည့် ဝါကျများက ဖတ်သူကို နှေးစေသည်။" },
    ],
    mistakes: [
      { wrong: "ပညာရေးဆန် ဖြစ်ရန် စကားလုံး ရှည်ရှည်များ ထပ်ခြင်း", right: "ရှင်းလင်းမှုကို ဦးစားပေးပါ", why: "ရှည်လွန်းလျှင် ဖတ်ရ ခက်သည်။" },
      { wrong: "ဝါကျတိုင်း တူညီအရှည်", right: "တို/ရှည် ရောပါ", why: "စည်းချက် မရှိလျှင် ပျင်းစရာ။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which is more concise?", promptMm: "ရွေးပါ။", options: ["due to the fact that", "because", "in view of the fact that", "on account of the fact that"], answer: 1, explanation: "because က အတိုဆုံး။", topic: "style" },
      { type: "mcq", prompt: "A strong verb replaces ___.", promptMm: "ရွေးပါ။", options: ["a noun phrase", "a weak verb + noun", "an adjective", "a preposition"], answer: 1, explanation: "make a decision → decide။", topic: "style" },
      { type: "fill", prompt: "Keep the summary ___; three sentences are enough. (ပြတ်သား)", promptMm: "ဖြည့်ပါ။", answers: ["concise"], explanation: "concise။", topic: "style" },
      { type: "correct", prompt: "Correct: We made a decision to change the plan.", promptMm: "ပိုတိုအောင် ပြင်ပါ။", answers: ["We decided to change the plan."], explanation: "decide = make a decision။", topic: "style" },
    ],
    independent: [
      { type: "mcq", prompt: "Which avoids repetition?", promptMm: "ရွေးပါ။", options: ["very very important", "extremely important", "important important", "so so important"], answer: 1, explanation: "ထပ်နေမှု ဖယ်ထားသည်။", topic: "style" },
      { type: "fill", prompt: "The paragraph is ___ because it repeats the same idea. (ထပ်နေ)", promptMm: "ဖြည့်ပါ။", answers: ["repetitive"], explanation: "repetitive။", topic: "style" },
      { type: "mcq", prompt: "Which sentence creates pace?", promptMm: "ရွေးပါ။", options: ["A long sentence with many clauses and details.", "Stop. Think. Write.", "There are many factors that…", "It is important to note…"], answer: 1, explanation: "ဝါကျ တိုများ။", topic: "style" },
      { type: "translate", prompt: "Translate: ကျွန်တော်တို့ ရွှေ့ရန် ဆုံးဖြတ်ခဲ့တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["We decided to postpone.", "We decided to move it."], explanation: "decide to + verb။", topic: "style" },
    ],
    review: [
      { q: "စတိုင် လက္ခဏာ ၄ ခု ဘာလဲ။", a: "ဝါကျ အရှည်၊ စကားလုံး ရွေးချယ်မှု၊ ကြိယာ အားကောင်းမှု၊ အသံ။" },
      { q: "ကိုယ်ပိုင် အသံ ဘယ်လို ဖန်တီးသလဲ။", a: "ကိုယ်ပိုင် အတွေ့အကြုံ၊ တိကျသည့် ဥပမာ၊ ရှင်းလင်းသည့် ရပ်တည်ချက်ဖြင့်။" },
    ],
    summary: ["ဝါကျ အရှည် ကွဲပြားမှုက စည်းချက် ဖန်တီးသည်။", "ကြိယာ အားကောင်းသည့် စကားလုံး ရွေးသည်။", "ရှင်းလင်းမှုက ပညာရေးဆန် ဖြစ်ခြင်းထက် အရေးကြီးသည်။"],
    mastery: ["စာပိုဒ် ၁ ပိုဒ်ကို စတိုင် ၂ မျိုးဖြင့် ပြန်ရေးနိုင်သည်။", "စကားလုံး ၁၀% ဖြတ်ပြီး အဓိပ္ပာယ် မပျက်စေနိုင်သည်။"],
    topics: ["writing", "style", "editing"],
  },
  {
    id: "h16-advanced-editing",
    moduleId: "H",
    title: "Advanced Editing: Style, Accuracy and Flow",
    titleMm: "အဆင့်မြင့် တည်းဖြတ်ခြင်း — စတိုင်၊ တိကျမှု နှင့် စီးဆင်းမှု",
    level: "C1",
    minutes: 24,
    summaryLine: "အဆင့်မြင့် တည်းဖြတ်မှု — ဖွဲ့စည်းပုံ၊ စီးဆင်းမှု၊ စတိုင် နှင့် အမှား စစ်ဆေးခြင်း။",
    objectives: ["တည်းဖြတ် အဆင့် ၃ ခု ခွဲခြားနိုင်မည်။", "စီးဆင်းမှု ပြဿနာ ၅ မျိုး ရှာနိုင်မည်။", "ကိုယ်ပိုင်စာကို အဆင့်ဆင့် ပြင်နိုင်မည်။"],
    vocab: [
      { en: "flow", mm: "စီးဆင်းမှု", pos: "noun", example: "The paragraph lacks flow.", exampleMm: "စာပိုဒ်တွင် စီးဆင်းမှု မရှိပါ။", topic: "editing", level: "B2" },
      { en: "redundant", mm: "ပိုလျှံသော", pos: "adjective", example: "Delete redundant words.", exampleMm: "ပိုလျှံသော စကားလုံးများကို ဖျက်ပါ။", topic: "editing", level: "C1" },
      { en: "consistency", mm: "တသမတ်တည်း ဖြစ်မှု", pos: "noun", example: "Check consistency in spelling.", exampleMm: "စာလုံးပေါင်း တသမတ်တည်း ဖြစ်မှုကို စစ်ပါ။", topic: "editing", level: "C1" },
    ],
    sections: [
      {
        heading: "အဆင့် ၃ ခု",
        body: [
          "၁) structural editing — အစီအစဉ်၊ စာပိုဒ် ခွဲမှု၊ အဓိကအချက် ရှင်းမှု။ ၂) line editing — ဝါကျ စီးဆင်းမှု၊ စကားလုံး ရွေးချယ်မှု၊ ထပ်နေမှု။",
          "၃) proofreading — စာလုံးပေါင်း၊ သတ်ပုဒ်၊ ကာလ၊ အမည် စာလုံး ကြီး/ငယ်။ အဆင့်တိုင်းကို သီးခြား လုပ်သည်။",
          "တစ်ခါတည်း အားလုံး ပြင်ရန် ကြိုးစားလျှင် များသောအားဖြင့် တစ်ခုခု လွတ်သွားသည်။",
        ],
        table: { headers: ["အဆင့်", "အာရုံစိုက်ရန်", "ဥပမာ ပြဿနာ"], rows: [["structural", "အစီအစဉ်/အဓိကအချက်", "အချက် နှစ်ခု တစ်ပိုဒ်တည်း"], ["line", "စီးဆင်းမှု/ထပ်နေမှု", "ဝါကျ ရှည်လွန်း"], ["proofreading", "သတ်ပုဒ်/စာလုံးပေါင်း", "recieve → receive"]] },
      },
      {
        heading: "စီးဆင်းမှု ပြဿနာ ၅ မျိုး",
        body: [
          "၁) ရှည်လွန်းသည့် ဝါကျ။ ၂) ဆက်စပ်စကားလုံး မပါဘဲ ခုန်ကူးခြင်း။ ၃) ထပ်နေသည့် စကားလုံး။ ၄) အချိန်/ကာလ မညီညာမှု။ ၅) နာမ်စား မရှင်းလင်းမှု။",
          "ပြင်နည်း — ဝါကျ ခွဲခြင်း၊ ဆက်စပ်စကားလုံး ထည့်ခြင်း၊ ထပ်နေသည့် စကားလုံး ဖျက်ခြင်း၊ ကာလ ညှိခြင်း၊ နာမ် ပြန်ရေးခြင်း။",
        ],
      },
    ],
    examples: [
      { en: "Before: The report which was written by the team and which was published last week and which was about costs was very long.", mm: "မပြင်မီ — အလွန်ရှည်သည့် ဝါကျ။" },
      { en: "After: The team's report on costs, published last week, was very long.", mm: "ပြင်ပြီး — ကုန်ကျစရိတ်အကြောင်း အဖွဲ့၏ အစီရင်ခံစာက အလွန်ရှည်သည်။" },
      { en: "Before: In my opinion, I think it is probably maybe possible. → After: It may be possible.", mm: "မပြင်မီ — ထပ်နေသည့် ခန့်မှန်းချက်များ။ ပြင်ပြီး — ဖြစ်နိုင်သည်။" },
    ],
    mistakes: [
      { wrong: "အဆင့် အားလုံးကို တစ်ခါတည်း စစ်ခြင်း", right: "အဆင့် ၃ ခု ခွဲပြီး စစ်ပါ", why: "အမှား လွတ်နိုင်သည်။" },
      { wrong: "ကိုယ်တိုင် ရေးပြီးချင်း အတည်ပြုခြင်း", right: "အချိန်ခြားပြီး ပြန်ဖတ်ပါ", why: "မျက်စိ ကျင့်သားနေသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which stage fixes paragraph order?", promptMm: "ရွေးပါ။", options: ["proofreading", "structural editing", "line editing", "spell check"], answer: 1, explanation: "ဖွဲ့စည်းပုံ အဆင့်။", topic: "editing" },
      { type: "mcq", prompt: "Which word is redundant in 'free gift'?", promptMm: "ရွေးပါ။", options: ["free", "gift", "both fit", "neither"], answer: 0, explanation: "gift သည် အခမဲ့ ဖြစ်လေ့ ရှိသည်။", topic: "editing" },
      { type: "fill", prompt: "Check the ___ of spelling: use 'organisation' or 'organization', not both. (တသမတ်တည်း)", promptMm: "ဖြည့်ပါ။", answers: ["consistency"], explanation: "consistency။", topic: "editing" },
      { type: "correct", prompt: "Correct: In my opinion, I think the plan maybe could work.", promptMm: "ထပ်နေမှု ဖယ်ပါ။", answers: ["The plan may work.", "I think the plan could work."], explanation: "ထပ်နေသည့် ခန့်မှန်းချက် ဖယ်ပါ။", topic: "editing" },
    ],
    independent: [
      { type: "mcq", prompt: "Correct order of editing?", promptMm: "ရွေးပါ။", options: ["Proofread, then structure", "Structure, line, then proofread", "Only proofread", "Spell check only"], answer: 1, explanation: "ကြီးမှ သေးသို့။", topic: "editing" },
      { type: "fill", prompt: "The sentence is ___; remove unnecessary words. (ပိုလျှံ)", promptMm: "ဖြည့်ပါ။", answers: ["redundant"], explanation: "redundant။", topic: "editing" },
      { type: "mcq", prompt: "Which problem is a flow issue?", promptMm: "ရွေးပါ။", options: ["Misspelled name", "Missing linker between ideas", "Wrong apostrophe", "Wrong capital letter"], answer: 1, explanation: "ဆက်စပ်မှု။", topic: "editing" },
      { type: "translate", prompt: "Translate: ဒီစာပိုဒ်မှာ စီးဆင်းမှု မရှိဘူး။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["This paragraph lacks flow.", "The paragraph does not flow well."], explanation: "lack flow / flow well။", topic: "editing" },
    ],
    review: [
      { q: "တည်းဖြတ် အဆင့် ၃ ခု ဘာလဲ။", a: "structural, line, proofreading။" },
      { q: "စီးဆင်းမှု ပြဿနာ ၅ မျိုး ဘာလဲ။", a: "ဝါကျ ရှည်လွန်း၊ linker မရှိ၊ ထပ်နေမှု၊ ကာလ မညီ၊ နာမ်စား မရှင်း။" },
    ],
    summary: ["တည်းဖြတ်မှုကို အဆင့်ခွဲ လုပ်သည်။", "စီးဆင်းမှု ပြဿနာ ၅ မျိုး ရှာတတ်သည်။", "အချိန်ခြားပြီး ပြန်ဖတ်ခြင်း အရေးကြီးသည်။"],
    mastery: ["ကိုယ်ပိုင်စာ ၃၀၀ လုံးကို အဆင့် ၃ ခုဖြင့် တည်းဖြတ်နိုင်သည်။", "ပြဿနာ ၅ မျိုးထဲမှ ၄ မျိုး ရှာနိုင်သည်။"],
    topics: ["writing", "editing", "style"],
  },
  {
    id: "h17-research-writing",
    moduleId: "H",
    title: "Introduction to Research Writing",
    titleMm: "သုတေသန ရေးသားမှု အခြေခံ",
    level: "C1",
    minutes: 26,
    summaryLine: "သုတေသန မေးခွန်း ရေးခြင်း၊ နည်းလမ်း ဖော်ပြခြင်း နှင့် ကိုးကား စီမံခြင်း အခြေခံ။",
    objectives: ["သုတေသန မေးခွန်း ရေးနိုင်မည်။", "method/result ကို ပညာရေးဆန် စတိုင်ဖြင့် ရေးနိုင်မည်။", "ကိုးကား စီမံနိုင်မည်။"],
    vocab: [
      { en: "research question", mm: "သုတေသန မေးခွန်း", pos: "noun", example: "The research question must be specific.", exampleMm: "သုတေသန မေးခွန်းက တိကျရမည်။", topic: "research writing", level: "B2" },
      { en: "participants", mm: "ပါဝင်သူများ", pos: "noun", example: "Thirty participants completed the survey.", exampleMm: "ပါဝင်သူ သုံးဆယ် စစ်တမ်းကို ပြီးစီးခဲ့သည်။", topic: "research writing", level: "B2" },
      { en: "ethical approval", mm: "ကျင့်ဝတ် ခွင့်ပြုချက်", pos: "noun", example: "The study received ethical approval.", exampleMm: "လေ့လာမှုက ကျင့်ဝတ် ခွင့်ပြုချက် ရရှိခဲ့သည်။", topic: "research writing", level: "C1" },
    ],
    sections: [
      {
        heading: "ဖွဲ့စည်းပုံ",
        body: [
          "Introduction — နောက်ခံ၊ သုတေသန ကွက်လပ်၊ သုတေသန မေးခွန်း နှင့် ရည်ရွယ်ချက်။ Method — ပါဝင်သူ၊ ကိရိယာ၊ လုပ်ငန်းစဉ်၊ ကျင့်ဝတ်။",
          "Results — ဒေတာ (ဇယား/ဖော်ပြချက်)၊ အနက်ဖွင့်ဆိုမှု မပါ။ Discussion — အနက်ဖွင့်ဆိုမှု၊ ကန့်သတ်ချက်၊ နောက်ထပ် သုတေသန။",
          "သုတေသန မေးခွန်း ကောင်း တစ်ခု — တိကျ၊ တိုင်းတာနိုင်၊ အဖြေရှာနိုင်။ 'Does sleep affect learning?' ထက် 'How does sleep duration affect vocabulary recall among university students?' က ပိုကောင်းသည်။",
        ],
        table: { headers: ["အပိုင်း", "ရေးရန်", "မရေးရ"], rows: [["Method", "ဘယ်လို လုပ်ခဲ့", "ရလဒ် အနက်ဖွင့်"], ["Results", "ဒေတာ", "ထင်မြင်ချက်"], ["Discussion", "အနက်ဖွင့် + ကန့်သတ်ချက်", "ဒေတာ အသစ်"], ["References", "ကိုးကား စာရင်း", "မကိုးကားသည့် စာအုပ်"]] },
      },
      {
        heading: "ကိုးကား စီမံခြင်း",
        body: [
          "ကိုးကား တစ်ခုစီအတွက် စာရေးသူ၊ ခုနှစ်၊ ခေါင်းစဉ်၊ ရင်းမြစ်၊ လင့်/စာမျက်နှာ ကို မှတ်ထားသည်။ မှတ်စု မရှိလျှင် နောက်ပိုင်း ရှာရ ခက်သည်။",
          "ကိုးကား ပုံစံ (APA ကဲ့သို့) တစ်မျိုးတည်း အသုံးပြုသည်။ စာသားအတွင်း (Smith, 2023) နှင့် စာရင်းတွင် Smith, J. (2023). … ဟု တွဲဖက်ရမည်။",
        ],
      },
    ],
    examples: [
      { en: "This study examines how sleep duration affects vocabulary recall.", mm: "ဤလေ့လာမှုက အိပ်စက်ချိန် ကြာချိန်က စကားလုံး မှတ်မိမှုအပေါ် မည်သို့ သက်ရောက်သည်ကို စူးစမ်းသည်။" },
      { en: "Thirty participants completed a ten-minute recall task.", mm: "ပါဝင်သူ သုံးဆယ်က ဆယ်မိနစ် မှတ်မိမှု လုပ်ငန်းကို ပြီးစီးခဲ့သည်။" },
      { en: "A key limitation is the small sample, which limits generalisation.", mm: "အဓိက ကန့်သတ်ချက်က နမူနာ ငယ်ခြင်း ဖြစ်ပြီး ယေဘုယျချော်ချနိုင်မှုကို ကန့်သတ်သည်။" },
    ],
    mistakes: [
      { wrong: "Results တွင် ထင်မြင်ချက် ရောခြင်း", right: "ဒေတာသာ ဖော်ပြပါ", why: "Results နှင့် Discussion ကို ခွဲရသည်။" },
      { wrong: "ကိုးကား မှတ်စု မထားခြင်း", right: "ဖတ်ရင်း ချက်ချင်း မှတ်ပါ", why: "နောက်ပိုင်း ရှာရ ခက်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which is the best research question?", promptMm: "ရွေးပါ။", options: ["Is English hard?", "How does sleep duration affect vocabulary recall?", "What do you think about sleep?", "Sleep is important, right?"], answer: 1, explanation: "တိကျပြီး တိုင်းတာနိုင်သည်။", topic: "research writing" },
      { type: "mcq", prompt: "Where do limitations go?", promptMm: "ရွေးပါ။", options: ["Method", "Results", "Discussion", "References"], answer: 2, explanation: "Discussion။", topic: "research writing" },
      { type: "fill", prompt: "Thirty ___ completed the survey.", promptMm: "ဖြည့်ပါ။", answers: ["participants"], explanation: "participants။", topic: "research writing" },
      { type: "correct", prompt: "Correct: The study was received ethical approval.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The study received ethical approval."], explanation: "receive (active)။", topic: "research writing" },
    ],
    independent: [
      { type: "mcq", prompt: "Which belongs in Method?", promptMm: "ရွေးပါ။", options: ["The results were surprising.", "Data were collected over six weeks.", "This supports Smith (2020).", "The sample is too small."], answer: 1, explanation: "လုပ်ငန်းစဉ်။", topic: "research writing" },
      { type: "fill", prompt: "The study received ethical ___.", promptMm: "ဖြည့်ပါ။", answers: ["approval"], explanation: "ethical approval။", topic: "research writing" },
      { type: "mcq", prompt: "Which is a good citation practice?", promptMm: "ရွေးပါ။", options: ["Writing references from memory at the end", "Recording details as you read", "Citing only famous authors", "Skipping page numbers"], answer: 1, explanation: "ဖတ်ရင်း မှတ်သည်။", topic: "research writing" },
      { type: "translate", prompt: "Translate: ဒီလေ့လာမှုမှာ ပါဝင်သူ သုံးဆယ် ပါဝင်တယ်။", promptMm: "ပညာရေးဆန် လေသံဖြင့် ရေးပါ။", answers: ["Thirty participants took part in this study.", "This study included thirty participants."], explanation: "participants took part / included။", topic: "research writing" },
    ],
    review: [
      { q: "သုတေသန မေးခွန်း ကောင်း၏ လက္ခဏာ ၃ ခု ဘာလဲ။", a: "တိကျ၊ တိုင်းတာနိုင်၊ အဖြေရှာနိုင်။" },
      { q: "Results တွင် ဘာမပါရ။", a: "ထင်မြင်ချက်/အနက်ဖွင့်ဆိုမှု။" },
    ],
    summary: ["သုတေသန မေးခွန်းက စာတမ်းတစ်ခုလုံးကို ဦးတည်သည်။", "အပိုင်းတိုင်းတွင် ကိုယ်ပိုင် လုပ်ဆောင်ချက် ရှိသည်။", "ကိုးကားကို ဖတ်ရင်း မှတ်သည်။"],
    mastery: ["သုတေသန မေးခွန်း ၅ ခု ရေးနိုင်သည်။", "Method ပိုဒ် ၁ ပိုဒ် (၁၀၀+) ရေးနိုင်သည်။"],
    topics: ["writing", "research", "academic"],
  },
];

export const moduleHLessonsPart4: Lesson[] = buildLessons(seeds);
