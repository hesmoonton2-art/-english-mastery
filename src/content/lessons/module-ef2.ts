import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const note = "ဤသင်ခန်းစာတွင် အသံဖိုင် မပါပါ။ မူရင်း script ကို စာသားအဖြစ် ပေးထားပြီး အသံထွက်ဖတ်ခြင်းဖြင့် လေ့ကျင့်ပါ။";

const seeds: LessonSeed[] = [
  {
    id: "e12-connected-speech-listening",
    moduleId: "E",
    title: "Listening: Connected Speech in Real Conversations",
    titleMm: "နားထောင်မှု — စကားပြောတွင် ဆက်စပ်အသံ",
    level: "B2",
    minutes: 20,
    summaryLine: "linking, elision, assimilation နှင့် weak form များကြောင့် စကားလုံးများ ဆက်သွားသည့်အခါ နားလည်နိုင်ရန် လေ့ကျင့်သည်။",
    objectives: ["assimilation/linking ဥပမာ ၆ ခု ရှင်းပြနိုင်မည်။", "weak form ကြားလျှင် စကားလုံး မှတ်မိနိုင်မည်။", "script နှင့် နှိုင်းယှဉ်ပြီး ကိုယ်တိုင် လေ့ကျင့်နိုင်မည်။"],
    vocab: [
      { en: "elision", mm: "အသံ တစ်ခု ချန်လှပ်ခြင်း", pos: "noun", example: "'Next day' often becomes 'nex day'.", exampleMm: "'next day' သည် 'nex day' ဖြစ်လေ့ ရှိသည်။", topic: "connected speech", level: "C1" },
      { en: "assimilation", mm: "အသံ နှစ်ခု ရောခြင်း", pos: "noun", example: "'Ten bikes' sounds like 'tem bikes'.", exampleMm: "'ten bikes' သည် 'tem bikes' ကဲ့သို့ ကြားရသည်။", topic: "connected speech", level: "C1" },
      { en: "gonna", mm: "going to (စကားပြော)", pos: "contraction", example: "I'm gonna call him.", exampleMm: "သူ့ကို ဖုန်းဆက်မယ်။", topic: "connected speech", level: "B1" },
    ],
    sections: [
      {
        heading: "ဖြစ်ပျက်မှု ၄ မျိုး",
        body: [
          "Linking — 'turn it off' → 'tur-ni-toff'။ Elision — 'friendship' → 'frien-ship', 'want to' → 'wanna'။",
          "Assimilation — 'ten bikes' → 'tem bikes', 'good boy' → 'gub boy'။ Weak forms — 'and' → /ən/, 'of' → /əv/, 'can' → /kən/။",
          "Contractions in speech — 'I'm gonna', 'I wanna', 'lemme' (let me), 'dunno' (don't know)။ ဤပုံစံများကို နားထောင်ရာတွင် မှတ်မိရန် လိုသည်၊ စာရေးသားတွင် မသုံးပါ။",
        ],
        table: { headers: ["စာသား", "အသံထွက် (အကြမ်း)", "မှတ်ချက်"], rows: [["want to", "wanna", "စကားပြော"], ["going to", "gonna", "စကားပြော"], ["did you", "didja", "linking"], ["a lot of", "a lotta", "weak form"]] },
      },
      {
        heading: "လေ့ကျင့်နည်း",
        body: [
          "script ကို အရင် ဖတ်ပြီး မှတ်မိသည့် စကားလုံးများကို မှတ်သည်။ ထို့နောက် အသံထွက်ဖတ်ပြီး ဆက်စပ်အသံကို ကိုယ်တိုင် ဖန်တီးကြည့်သည်။",
          "ကျွမ်းကျင်လာလျှင် script မပါဘဲ ဖတ်ပြီး မှတ်မိနိုင်မှုကို စမ်းသပ်သည်။",
          note,
        ],
      },
    ],
    examples: [
      { en: "Text: Do you want to go out? → Speech: D'you wanna go out?", mm: "စာသား — မင်း အပြင်ထွက်ချင်လား။ → စကားပြော — ဒ်ယူ ဝါနာ ဂိုးအောက်။" },
      { en: "Text: I don't know what he's talking about. → Speech: I dunno what 'e's talkin' about.", mm: "စာသား — သူ ဘာပြောနေတာလဲ ငါ မသိဘူး။" },
      { en: "Text: Give me a cup of tea. → Speech: Gimme a cuppa tea.", mm: "စာသား — လက်ဖက်ရည် တစ်ခွက် ပေးပါ။" },
    ],
    mistakes: [
      { wrong: "စာသားအတိုင်း စကားလုံးတိုင်း ရှင်းရှင်း ဖတ်သည်ဟု မျှော်လင့်ခြင်း", right: "ဆက်စပ်အသံကို မျှော်လင့်ပါ", why: "သဘာဝ စကားပြောတွင် စကားလုံးများ ဆက်သွားသည်။" },
      { wrong: "gonna/wanna ကို တရားဝင် စာတွင် ရေးခြင်း", right: "စာရေးသားတွင် going to / want to ဟု ရေးပါ", why: "မှတ်တမ်း လေသံ မဟုတ်ပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "'Wanna' is the spoken form of ___.", promptMm: "ရွေးပါ။", options: ["want to", "won't do", "wanted", "want a"], answer: 0, explanation: "want to။", topic: "connected speech" },
      { type: "mcq", prompt: "'Ten bikes' often sounds like ___.", promptMm: "ရွေးပါ။", options: ["tem bikes", "ten bike", "te bikes", "ten pikes"], answer: 0, explanation: "assimilation။", topic: "connected speech" },
      { type: "fill", prompt: "'I don't know' often becomes ___ in fast speech.", promptMm: "ဖြည့်ပါ။", answers: ["I dunno", "dunno"], explanation: "dunno = I don't know ကို စကားပြောတွင် အတိုချုံ့ထားခြင်း။", topic: "connected speech" },
      { type: "correct", prompt: "Correct this formal sentence: I'm gonna apply for the job.", promptMm: "တရားဝင် ပြင်ပါ။", answers: ["I am going to apply for the job.", "I'm going to apply for the job."], explanation: "gonna → going to။", topic: "connected speech" },
    ],
    independent: [
      { type: "mcq", prompt: "Which is NOT used in formal writing?", promptMm: "ရွေးပါ။", options: ["going to", "want to", "gonna", "would like to"], answer: 2, explanation: "gonna သည် စကားပြော။", topic: "connected speech" },
      { type: "fill", prompt: "'A cup of tea' often sounds like 'a ___ tea'.", promptMm: "ဖြည့်ပါ။", answers: ["cuppa"], explanation: "cuppa = a cup of tea ကို စကားပြောတွင် အတိုချုံ့ထားခြင်း။", topic: "connected speech" },
      { type: "mcq", prompt: "Why is elision difficult for learners?", promptMm: "ရွေးပါ။", options: ["Sounds disappear", "Words are longer", "Grammar changes", "Spelling changes"], answer: 0, explanation: "အသံ ပျောက်သွားသဖြင့် မှတ်မိရ ခက်သည်။", topic: "connected speech" },
      { type: "translate", prompt: "Translate: မင်း ဘာလုပ်ချင်လဲ။ (စကားပြော ပုံစံ)", promptMm: "အင်္ဂလိပ် စကားပြော ပုံစံဖြင့် ရေးပါ။", answers: ["What d'you wanna do?", "What do you want to do?"], explanation: "d'you wanna / do you want to။", topic: "connected speech" },
    ],
    review: [
      { q: "linking ဆိုတာ ဘာလဲ။", a: "စကားလုံး နှစ်လုံး၏ အသံများ ဆက်သွားခြင်း။" },
      { q: "gonna/wanna ကို ဘယ်အခါ မသုံးသင့်သလဲ။", a: "တရားဝင် စာရေးသားမှုတွင်။" },
    ],
    summary: ["ဆက်စပ်အသံ ၄ မျိုး ရှိသည် — linking, elision, assimilation, weak form။", "စကားပြော အတိုကောက်များကို နားထောင်ရာတွင် မှတ်မိရသည်။", "စာရေးသားတွင် ပြည့်စုံသည့် ပုံစံ သုံးသည်။"],
    mastery: ["ဆက်စပ်အသံ ဥပမာ ၆ ခု ရှင်းပြနိုင်သည်။", "စကားပြော ပုံစံ ၁၀ ခုကို တရားဝင် ပြောင်းနိုင်သည်။"],
    topics: ["listening", "connected speech", "pronunciation"],
  },
  {
    id: "e13-inference-listening",
    moduleId: "E",
    title: "Listening: Inference and Speaker Purpose",
    titleMm: "နားထောင်မှု — ခန့်မှန်းဆင်ခြင်ခြင်း နှင့် ရည်ရွယ်ချက်",
    level: "C1",
    minutes: 22,
    summaryLine: "ပြောသူ၏ ရည်ရွယ်ချက် (အသိပေး၊ ဆွဲဆောင်၊ သတိပေး၊ ညည်းညူ) ကို စကားလုံး နှင့် ဖွဲ့စည်းပုံမှ ခန့်မှန်းနည်း။",
    objectives: ["ရည်ရွယ်ချက် ၅ မျိုး ခွဲခြားနိုင်မည်။", "ခန့်မှန်းချက်ကို အထောက်အထားဖြင့် ဖြေနိုင်မည်။", "မပြောထားသည့် အချက်ကို ခန့်မှန်းနိုင်မည်။"],
    vocab: [
      { en: "purpose", mm: "ရည်ရွယ်ချက်", pos: "noun", example: "The purpose is to warn listeners.", exampleMm: "ရည်ရွယ်ချက်က နားထောင်သူများကို သတိပေးရန် ဖြစ်သည်။", topic: "listening", level: "B2" },
      { en: "persuade", mm: "ဆွဲဆောင်သည်", pos: "verb", example: "The speaker tries to persuade the audience.", exampleMm: "ပြောသူက ပရိသတ်ကို ဆွဲဆောင်ရန် ကြိုးစားသည်။", topic: "listening", level: "B2" },
      { en: "tone", mm: "လေသံ", pos: "noun", example: "Her tone was concerned.", exampleMm: "သူမ၏ လေသံက စိုးရိမ်သလို ဖြစ်သည်။", topic: "listening", level: "C1" },
    ],
    sections: [
      {
        heading: "ရည်ရွယ်ချက် ၅ မျိုး",
        body: [
          "အသိပေး (inform) — ရိုးရိုး အချက်အလက်။ သတိပေး (warn) — 'Be careful', 'make sure'။ ဆွဲဆောင် (persuade) — 'You should', 'it's worth'။",
          "ညည်းညူ (complain) — 'I'm afraid', 'unfortunately', 'again'။ အကြံပြု (advise) — 'I'd recommend', 'the best thing is'။",
          "လေသံ နှင့် စကားလုံး ရွေးချယ်မှုက ရည်ရွယ်ချက်ကို ပြသည်။ 'unfortunately' ပါလျှင် ညည်းညူမှု/အနုတ်လက္ခဏာ ဖြစ်နိုင်သည်။",
        ],
        table: { headers: ["ေရည်ရွယ်ချက်", "သဲလွန်စ စကားလုံး", "ဥပမာ"], rows: [["inform", "we are pleased to announce", "ကြေညာချက်"], ["warn", "make sure you", "သတိပေးချက်"], ["advise", "I'd recommend", "အကြံပြုချက်"], ["complain", "unfortunately, again", "ညည်းညူမှု"]] },
      },
      {
        heading: "ခန့်မှန်းဆင်ခြင်ခြင်း",
        body: [
          "တိုက်ရိုက် မပြောသည့် အချက်ကို ခန့်မှန်းသည် — 'The speaker mentions the rising cost three times. We can infer that cost is her main concern.'",
          "ဖြေချက်တွင် 'It is implied / The speaker suggests…' ဟု ရေးပြီး အထောက်အထား ကို ကိုးကားသည်။",
          note,
        ],
      },
    ],
    examples: [
      { en: "Make sure you keep your receipt — we cannot help without it.", mm: "ဖြတ်ပိုင်း သိမ်းထားပါ — မရှိလျှင် ကူညီနိုင်မည် မဟုတ်ပါ။", note: "ရည်ရွယ်ချက် — သတိပေး။" },
      { en: "I'd recommend booking early; the courses fill up quickly.", mm: "စောစော ကြိုတင်မှာရန် အကြံပြုသည် — သင်တန်းများ လျင်မြန်စွာ ပြည့်သည်။", note: "ရည်ရွယ်ချက် — အကြံပြု။" },
      { en: "Unfortunately, this is the third time I've had to call.", mm: "ကံဆိုးစွာ ဖုန်းဆက်ရသည်မှာ တတိယအကြိမ် ဖြစ်သည်။", note: "ရည်ရွယ်ချက် — ညည်းညူ။" },
    ],
    mistakes: [
      { wrong: "ပြောသူ ပြောသည့် စကားလုံးကို ပြန်ချရုံဖြင့် ခန့်မှန်းမေးခွန်း ဖြေခြင်း", right: "အဓိပ္ပာယ်ကို ကိုယ်ပိုင် စကားဖြင့် ဖြေပါ", why: "inference မေးခွန်းသည် နားလည်မှုကို စမ်းသည်။" },
      { wrong: "လေသံကို လျစ်လျူရှုခြင်း", right: "ဖိသံ နှင့် ရပ်တန့်မှုကို ဂရုစိုက်ပါ", why: "ရည်ရွယ်ချက်ကို ပြသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "\"Make sure you check the date.\" Purpose?", promptMm: "ရွေးပါ။", options: ["inform", "warn/advise", "complain", "persuade"], answer: 1, explanation: "make sure = သတိပေး/အကြံပြု။", topic: "listening" },
      { type: "mcq", prompt: "\"This is the third time I've called.\" Purpose?", promptMm: "ရွေးပါ။", options: ["complain", "inform neutrally", "advertise", "joke"], answer: 0, explanation: "ထပ်ခါတလဲလဲ ဖော်ပြခြင်း → ညည်းညူ။", topic: "listening" },
      { type: "fill", prompt: "The speaker tries to ___ the audience to join. (ဆွဲဆောင်)", promptMm: "ဖြည့်ပါ။", answers: ["persuade"], explanation: "persuade။", topic: "listening" },
      { type: "correct", prompt: "Correct: The speaker suggest that prices will rise.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The speaker suggests that prices will rise."], explanation: "third person → suggests။", topic: "listening" },
    ],
    independent: [
      { type: "mcq", prompt: "\"I'd recommend the earlier train.\" Purpose?", promptMm: "ရွေးပါ။", options: ["advise", "complain", "warn only", "entertain"], answer: 0, explanation: "recommend = အကြံပြု။", topic: "listening" },
      { type: "fill", prompt: "Her ___ was concerned, not angry.", promptMm: "ဖြည့်ပါ။", answers: ["tone"], explanation: "tone = လေသံ; concerned ≠ angry။", topic: "listening" },
      { type: "mcq", prompt: "Which shows inference?", promptMm: "ရွေးပါ။", options: ["She said the word 'cost'.", "She mentions cost three times, so cost is her main concern.", "She spoke for two minutes.", "She used formal words."], answer: 1, explanation: "ခန့်မှန်းဆင်ခြင်ခြင်း။", topic: "listening" },
      { type: "translate", prompt: "Translate: ပြောသူက ကျွန်တော်တို့ စောစော ထွက်သင့်တယ်လို့ ဆိုလိုတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["The speaker implies that we should leave early.", "The speaker suggests that we should leave early."], explanation: "imply/suggest + that clause။", topic: "listening" },
    ],
    review: [
      { q: "ရည်ရွယ်ချက် ၅ မျိုး ဘာတွေလဲ။", a: "အသိပေး၊ သတိပေး၊ ဆွဲဆောင်၊ ညည်းညူ၊ အကြံပြု။" },
      { q: "inference ဖြေချက်တွင် ဘာပါသင့်သလဲ။", a: "ခန့်မှန်းချက် + ကိုးကားသည့် အထောက်အထား။" },
    ],
    summary: ["ရည်ရွယ်ချက်ကို စကားလုံး နှင့် လေသံမှ ခန့်မှန်းသည်။", "အထောက်အထား မပါဘဲ ခန့်မှန်းချက် မဖြေသင့်ပါ။", "တိုက်ရိုက် မပြောသည့် အချက်ကို ဆင်ခြင်နိုင်သည်။"],
    mastery: ["inference မေးခွန်း ၁၀ ခုတွင် ၈ ခု မှန်သည်။", "ရည်ရွယ်ချက် ၅ မျိုးကို ဥပမာဖြင့် ရှင်းပြနိုင်သည်။"],
    topics: ["listening", "inference", "critical listening"],
  },
  {
    id: "e14-exam-listening",
    moduleId: "E",
    title: "Listening: Exam Strategy",
    titleMm: "နားထောင်မှု — စာမေးပွဲ နည်းဗျူဟာ",
    level: "B2",
    minutes: 22,
    summaryLine: "IELTS/TOEFL ကဲ့သို့ နားထောင်မှု စာမေးပွဲအတွက် မေးခွန်း အမျိုးအစား၊ ကြိုဖတ်ခြင်း နှင့် အမှား ရှောင်နည်း။",
    objectives: ["မေးခွန်း အမျိုးအစား ၅ ခု သိမည်။", "ကြိုဖတ်ခြင်း နည်းလမ်း အသုံးချနိုင်မည်။", "အဖြေ ရှာရာတွင် ထောင်ချောက် ရှောင်နိုင်မည်။"],
    vocab: [
      { en: "distractor", mm: "အာရုံ လွဲစေသည့် အချက်", pos: "noun", example: "The first number was a distractor.", exampleMm: "ပထမ ဂဏန်းသည် အာရုံ လွဲစေသည့် အချက် ဖြစ်သည်။", topic: "exam listening", level: "C1" },
      { en: "paraphrase", mm: "အခြားစကားဖြင့် ပြန်ဆိုခြင်း", pos: "noun", example: "The answer is a paraphrase of the script.", exampleMm: "အဖြေသည် script ကို အခြားစကားဖြင့် ပြန်ဆိုထားခြင်း ဖြစ်သည်။", topic: "exam listening", level: "B2" },
      { en: "word limit", mm: "စကားလုံး ကန့်သတ်ချက်", pos: "noun", example: "Write no more than two words.", exampleMm: "စကားလုံး နှစ်လုံးထက် မပိုရ။", topic: "exam listening", level: "B1" },
    ],
    sections: [
      {
        heading: "မေးခွန်း အမျိုးအစားများ",
        body: [
          "form completion, note completion, multiple choice, matching, map/plan labelling။",
          "ကြိုဖတ်ခြင်း (၉၀ စက္ကန့်) — ခေါင်းစဉ်၊ စကားလုံး ကန့်သတ်ချက် နှင့် ဘယ်အမျိုးအစား အချက် (ဂဏန်း၊ အမည်၊ နေရာ) လိုသည်ကို မှတ်သည်။",
          "အဖြေ များသောအားဖြင့် script ၏ စကားလုံးအတိုင်း မဟုတ်ဘဲ paraphrase ဖြစ်သည်။",
        ],
        table: { headers: ["မေးခွန်း အမျိုးအစား", "ကြိုပြင်ဆင်ရန်", "ထောင်ချောက်"], rows: [["note completion", "စကားလုံး ကန့်သတ်ချက်", "စကားလုံး ပိုရေးခြင်း"], ["multiple choice", "ရွေးချယ်စရာ ကွာခြားချက်", "ပထမ ကြားသည့် အချက်"], ["map labelling", "အစ နေရာ", "left/right လွဲခြင်း"], ["matching", "အမည် စာရင်း", "အမည် နှစ်ဦး ရောခြင်း"]] },
      },
      {
        heading: "ထောင်ချောက် ရှောင်နည်း",
        body: [
          "ပြောသူက ပထမ အချက်ကို ပြောပြီး ပြင်လေ့ ရှိသည် — 'Actually, let's meet at four, not three.' အဖြေမှာ နောက်ဆုံး ပြောသည့် အချက်။",
          "စကားလုံး ကန့်သတ်ချက်ကို တိကျစွာ လိုက်နာသည် — 'NO MORE THAN TWO WORDS' ဖြစ်လျှင် သုံးလုံး ရေးလျှင် အမှတ် မရ။",
          note,
        ],
      },
    ],
    examples: [
      { en: "We'll meet at three — sorry, make that half past three.", mm: "သုံးနာရီမှာ တွေ့မယ် — တောင်းပန်ပါတယ်၊ သုံးနာရီ သုံးဆယ် ဖြစ်ပါစေ။", note: "အဖြေ — 3:30။" },
      { en: "The workshop is free, although you pay for materials.", mm: "အလုပ်ရုံက အခမဲ့ ဖြစ်သည်၊ သို့သော် ပစ္စည်းအတွက် ပေးရသည်။", note: "အဖြေ — free (materials မဟုတ်)။" },
      { en: "Write no more than two words for each answer.", mm: "အဖြေတိုင်းအတွက် စကားလုံး နှစ်လုံးထက် မပိုရ။" },
    ],
    mistakes: [
      { wrong: "မေးခွန်းကို မဖတ်ဘဲ နားထောင်ခြင်း", right: "အသံ မစမီ မေးခွန်းကို ကြိုဖတ်ပါ", why: "ဘယ်အချက် ရှာရမည်ကို သိရန်။" },
      { wrong: "ပထမ ကြားသည့် အချက်ကို ချက်ချင်း ရေးခြင်း", right: "ပြင်ဆင်ချက် ရှိမရှိ စောင့်ပါ", why: "ထောင်ချောက် ဖြစ်နိုင်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Before listening, you should ___.", promptMm: "ရွေးပါ။", options: ["read the questions", "write your name", "close your eyes", "memorise answers"], answer: 0, explanation: "မေးခွန်း ကြိုဖတ်ခြင်း။", topic: "exam listening" },
      { type: "mcq", prompt: "\"Four, not three\" — what do you write?", promptMm: "ရွေးပါ။", options: ["3", "4", "3 and 4", "nothing"], answer: 1, explanation: "နောက်ဆုံး ပြောသည့် အချက်။", topic: "exam listening" },
      { type: "fill", prompt: "Write no more ___ two words.", promptMm: "ဖြည့်ပါ။", answers: ["than"], explanation: "no more than။", topic: "exam listening" },
      { type: "correct", prompt: "Correct: The answer have to be one word only.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The answer has to be one word only."], explanation: "the answer → has။", topic: "exam listening" },
    ],
    independent: [
      { type: "mcq", prompt: "A 'distractor' is ___.", promptMm: "ရွေးပါ။", options: ["the correct answer", "an answer that looks right but is not", "a grammar error", "a synonym"], answer: 1, explanation: "အာရုံ လွဲစေသည့် အချက်။", topic: "exam listening" },
      { type: "fill", prompt: "The answer is often a ___ of the script. (ပြန်ဆိုချက်)", promptMm: "ဖြည့်ပါ။", answers: ["paraphrase"], explanation: "paraphrase။", topic: "exam listening" },
      { type: "mcq", prompt: "You miss one answer. Best action?", promptMm: "ရွေးပါ။", options: ["Stop and think", "Move on and catch the next", "Ask the examiner", "Rewrite everything"], answer: 1, explanation: "ဆက် နားထောင်ခြင်း။", topic: "exam listening" },
      { type: "translate", prompt: "Translate: အဖြေကို စကားလုံး နှစ်လုံးထက် မပိုရ ရေးပါ။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Write no more than two words for each answer.", "Write your answer in no more than two words."], explanation: "no more than + ပမာဏ။", topic: "exam listening" },
    ],
    review: [
      { q: "နားထောင်မှု စာမေးပွဲတွင် ကြိုဖတ်ချိန် ဘာလုပ်သလဲ။", a: "မေးခွန်း အမျိုးအစား၊ စကားလုံး ကန့်သတ်ချက် နှင့် ရှာရမည့် အချက်ကို မှတ်သည်။" },
      { q: "ထောင်ချောက် ဘယ်လို ရှောင်သလဲ။", a: "ပြင်ဆင်ချက် (not, actually) ကို နားထောင်ပြီး နောက်ဆုံး အချက်ကို ယူသည်။" },
    ],
    summary: ["မေးခွန်း ကြိုဖတ်ခြင်း မရှိမဖြစ်။", "အဖြေသည် များသောအားဖြင့် paraphrase။", "ပြင်ဆင်ချက်နှင့် စကားလုံး ကန့်သတ်ချက်ကို သတိထားရသည်။"],
    mastery: ["မေးခွန်း အမျိုးအစား ၅ ခု ဖော်ပြနိုင်သည်။", "နမူနာ စာမေးပွဲ ၁၀ ခုတွင် ၈ ခု မှန်သည်။"],
    topics: ["listening", "exam strategy", "IELTS"],
  },
  {
    id: "f3-comparing-sources",
    moduleId: "F",
    title: "Reading: Comparing Two Sources",
    titleMm: "ဖတ်ရှုမှု — ရင်းမြစ် နှစ်ခု နှိုင်းယှဉ်ခြင်း",
    level: "B2",
    minutes: 22,
    summaryLine: "ရင်းမြစ် နှစ်ခုကို သဘောတူညီမှု၊ ကွဲပြားမှု နှင့် အထောက်အထား အရည်အသွေးဖြင့် နှိုင်းယှဉ်နည်း။",
    objectives: ["ရင်းမြစ် နှစ်ခု၏ အဓိက အဆိုများကို ခွဲခြားနိုင်မည်။", "သဘောတူ/ကွဲပြားမှု ဇယား ရေးနိုင်မည်။", "ရင်းမြစ်၏ အားနည်းချက်ကို ဝေဖန်နိုင်မည်။"],
    vocab: [
      { en: "claim", mm: "အဆိုပြုချက်", pos: "noun", example: "Both sources make similar claims.", exampleMm: "ရင်းမြစ် နှစ်ခုလုံး တူညီသော အဆိုများ တင်ပြသည်။", topic: "reading", level: "B2" },
      { en: "reliable", mm: "ယုံကြည်စိတ်ချရသော", pos: "adjective", example: "The second source is more reliable.", exampleMm: "ဒုတိယ ရင်းမြစ်က ပိုယုံကြည်ရသည်။", topic: "reading", level: "B1" },
      { en: "bias", mm: "ဘက်လိုက်မှု", pos: "noun", example: "The article shows a clear bias.", exampleMm: "ဆောင်းပါးတွင် ထင်ရှားသည့် ဘက်လိုက်မှု ရှိသည်။", topic: "reading", level: "B2" },
    ],
    sections: [
      {
        heading: "နှိုင်းယှဉ်ရန် ဘောင်များ",
        body: [
          "၁) အဓိက အဆို — ရင်းမြစ် တစ်ခုစီက ဘာကို ဆိုသလဲ။ ၂) အထောက်အထား — ဒေတာ၊ နမူနာ ပမာဏ၊ ရင်းမြစ် အမျိုးအစား။",
          "၃) ရည်ရွယ်ချက်/ပရိသတ် — သတင်း၊ ကြော်ငြာ၊ သုတေသန။ ၄) ကွာခြားချက် — ကိန်းဂဏန်း၊ အချိန်၊ အဓိပ္ပာယ် ဖွင့်ဆိုမှု။",
          "ဇယား (တူညီမှု / ကွဲပြားမှု) ဖြင့် စီစဉ်ခြင်းက နှိုင်းယှဉ်မှုကို ရှင်းစေသည်။",
        ],
        table: { headers: ["အချက်", "Source A", "Source B"], rows: [["အဓိက အဆို", "online study improves results", "results depend on support"], ["အထောက်အထား", "one school, 40 students", "national survey, 5,000 students"], ["ပရိသတ်", "ကျောင်းသား", "မူဝါဒ ချမှတ်သူ"]] },
      },
      {
        heading: "ဝေဖန်စိစစ်မှု",
        body: [
          "နမူနာ ပမာဏ ငယ်လျှင် ယေဘုယျချော်ချရန် မသင့်ပါ — 'The first study is small, so the findings may not apply nationally.'",
          "ဘက်လိုက်မှု ရှာရန် — ဘယ် အချက် ချန်လှပ်ထားသလဲ၊ ဘယ် စကားလုံး ဖြင့် ဖော်ပြသလဲ ('tax relief' vs 'giveaway')။",
        ],
      },
    ],
    examples: [
      { en: "Source A reports a 12 percent rise; Source B reports 8 percent.", mm: "ရင်းမြစ် A က ၁၂ ရာခိုင်နှုန်း တိုးသည်ဟု ဆိုသည်၊ B က ၈ ရာခိုင်နှုန်း။", note: "ကိန်းဂဏန်း ကွာခြားသည်။" },
      { en: "Both sources agree that teacher training matters.", mm: "ဆရာ သင်တန်းပေးမှု အရေးကြီးသည်ကို ရင်းမြစ် နှစ်ခုလုံး သဘောတူသည်။" },
      { en: "The second article is more balanced because it includes critics' views.", mm: "ဝေဖန်သူများ၏ အမြင်များ ပါဝင်သဖြင့် ဒုတိယ ဆောင်းပါးက ပိုဟန်ချက်ညီသည်။" },
    ],
    mistakes: [
      { wrong: "Both sources say the same thing.", right: "Both sources agree on X but differ on Y.", why: "နှိုင်းယှဉ်မှုတွင် ကွာခြားချက်ကို ဖော်ပြရသည်။" },
      { wrong: "နမူနာ ငယ်သည့် လေ့လာမှုကို တစ်နိုင်ငံလုံး အတွက် ကောက်ချက်ချခြင်း", right: "ကောက်ချက်ကို နမူနာ ပမာဏအတွင်း ကန့်သတ်ပါ", why: "ယေဘုယျချော်ချခြင်း မှားသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Both texts ___ that cost is a problem.", promptMm: "ရွေးပါ။", options: ["differ", "agree", "deny", "ignore"], answer: 1, explanation: "သဘောတူညီမှု → agree။", topic: "reading" },
      { type: "mcq", prompt: "Which detail shows a difference?", promptMm: "ရွေးပါ။", options: ["Both mention schools.", "A says 12%, B says 8%.", "Both are articles.", "Both use English."], answer: 1, explanation: "ကိန်းဂဏန်း ကွာခြားချက်။", topic: "reading" },
      { type: "fill", prompt: "The article shows a clear ___ against the government. (ဘက်လိုက်မှု)", promptMm: "ဖြည့်ပါ။", answers: ["bias"], explanation: "bias against = …အပေါ် ဘက်လိုက်မှု။", topic: "reading" },
      { type: "correct", prompt: "Correct: The both sources mention cost.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["Both sources mention cost."], explanation: "both နှင့် the ကို တွဲမသုံးပါ။", topic: "reading" },
    ],
    independent: [
      { type: "mcq", prompt: "A large sample makes a study ___.", promptMm: "ရွေးပါ။", options: ["more reliable", "less reliable", "biased", "shorter"], answer: 0, explanation: "နမူနာ ကြီးလျှင် ပိုယုံကြည်ရသည်။", topic: "reading" },
      { type: "fill", prompt: "___ sources agree on the main point.", promptMm: "ဖြည့်ပါ။", answers: ["Both"], explanation: "both sources။", topic: "reading" },
      { type: "mcq", prompt: "Which is biased language?", promptMm: "ရွေးပါ။", options: ["The policy reduced costs by 5%.", "The reckless policy wasted money.", "Officials reported a 5% cut.", "Data were collected in 2024."], answer: 1, explanation: "reckless/wasted = ဘက်လိုက်သည်။", topic: "reading" },
      { type: "translate", prompt: "Translate: ရင်းမြစ် နှစ်ခုက ကိန်းဂဏန်းမှာ မတူဘူး။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["The two sources differ on the figures.", "The two sources give different figures."], explanation: "differ on + အကြောင်းအရာ။", topic: "reading" },
    ],
    review: [
      { q: "ရင်းမြစ် နှစ်ခု နှိုင်းယှဉ်ရာတွင် ဘယ်အချက် ၄ ခု စစ်သလဲ။", a: "အဓိက အဆို၊ အထောက်အထား၊ ရည်ရွယ်ချက်/ပရိသတ်၊ ကွာခြားချက်။" },
      { q: "နမူနာ ငယ်သည့် လေ့လာမှုကို ဘယ်လို ဝေဖန်သလဲ။", a: "ရလဒ်ကို ယေဘုယျချော်ချရန် မသင့်ကြောင်း ဖော်ပြသည်။" },
    ],
    summary: ["နှိုင်းယှဉ်မှုကို ဘောင် ၄ ခုဖြင့် စီစဉ်သည်။", "သဘောတူမှုနှင့် ကွဲပြားမှုကို ခွဲပြသည်။", "ဘက်လိုက်သည့် စကားလုံးကို ရှာတွေ့နိုင်သည်။"],
    mastery: ["ရင်းမြစ် နှစ်ခု နှိုင်းယှဉ် ဇယား ၁ ခု ရေးနိုင်သည်။", "ဘက်လိုက်သည့် စကားလုံး ၅ ခု ဖော်ပြနိုင်သည်။"],
    topics: ["reading", "comparing sources", "critical reading"],
  },
  {
    id: "f4-academic-reading",
    moduleId: "F",
    title: "Reading: Academic Articles",
    titleMm: "ဖတ်ရှုမှု — ပညာရေး ဆောင်းပါးများ",
    level: "C1",
    minutes: 24,
    summaryLine: "သုတေသန ဆောင်းပါး၏ ဖွဲ့စည်းပုံ (abstract, method, results, discussion) နှင့် ထိရောက်စွာ ဖတ်နည်း။",
    objectives: ["ဆောင်းပါး အပိုင်း ၅ ခု၏ လုပ်ဆောင်ချက် သိမည်။", "abstract မှ အဓိက အချက် ဖမ်းယူနိုင်မည်။", "ဝေါဟာရ မသိဘဲ အဓိပ္ပာယ် ခန့်မှန်းနိုင်မည်။"],
    vocab: [
      { en: "abstract", mm: "အနှစ်ချုပ် (ဆောင်းပါး အစ)", pos: "noun", example: "Read the abstract first.", exampleMm: "အနှစ်ချုပ်ကို အရင် ဖတ်ပါ။", topic: "academic reading", level: "B2" },
      { en: "methodology", mm: "သုတေသန နည်းစနစ်", pos: "noun", example: "The methodology section explains the sample.", exampleMm: "နည်းစနစ် အပိုင်းက နမူနာ အကြောင်း ရှင်းပြသည်။", topic: "academic reading", level: "C1" },
      { en: "findings", mm: "တွေ့ရှိချက်များ", pos: "noun", example: "The findings support the hypothesis.", exampleMm: "တွေ့ရှိချက်များက ယူဆချက်ကို ထောက်ခံသည်။", topic: "academic reading", level: "B2" },
    ],
    sections: [
      {
        heading: "အပိုင်း ၅ ခု",
        body: [
          "Abstract — ရည်ရွယ်ချက်၊ နည်းလမ်း၊ အဓိက ရလဒ်၊ ကောက်ချက် (စကားလုံး ၁၅၀–၂၅၀)။ Introduction — နောက်ခံ နှင့် သုတေသန မေးခွန်း။",
          "Method — နမူနာ၊ ကိရိယာ၊ လုပ်ငန်းစဉ်။ Results — ဒေတာ (ဇယား/ဂဏန်း)။ Discussion/Conclusion — အဓိပ္ပာယ် ဖွင့်ဆိုမှု၊ ကန့်သတ်ချက်၊ နောက်ထပ် သုတေသန။",
          "ထိရောက်စွာ ဖတ်နည်း — abstract → headings → tables/figures → conclusion → ပြီးမှ လိုအပ်သည့် အပိုင်းကို အပြည့် ဖတ်သည်။",
        ],
        table: { headers: ["အပိုင်း", "မေးခွန်း", "ဖတ်ရန် အချိန်"], rows: [["Abstract", "ဘာလုပ်ခဲ့သလဲ", "၂ မိနစ်"], ["Method", "ဘယ်လို လုပ်ခဲ့သလဲ", "လိုအပ်မှ"], ["Results", "ဘာတွေ့ခဲ့သလဲ", "ဇယား ကြည့်"], ["Discussion", "ဘာအဓိပ္ပာယ်လဲ", "၃ မိနစ်"]] },
      },
      {
        heading: "ဝေါဟာရ ခန့်မှန်းခြင်း",
        body: [
          "မသိသည့် စကားလုံးကို ဝါကျ အခြေအနေမှ ခန့်မှန်းသည် — 'The results were inconclusive' တွင် 'in-' နှင့် 'conclusive' မှ အနုတ်လက္ခဏာ ဖြစ်ကြောင်း ခန့်မှန်းနိုင်သည်။",
          "စကားလုံး အမျိုးအစား (နာမ်/ကြိယာ) ကို ကြည့်ပြီး ခန့်မှန်းသည်။ ဆက်တိုက် မသိလျှင် ခေတ္တ ကျော်ပြီး အဓိကအချက် ကို ဆက်ဖတ်သည်။",
        ],
      },
    ],
    examples: [
      { en: "This study investigates the effect of sleep on memory in adolescents.", mm: "ဤလေ့လာမှုသည် ဆယ်ကျော်သက်များ၏ မှတ်ဉာဏ်အပေါ် အိပ်စက်မှု သက်ရောက်မှုကို စူးစမ်းသည်။", note: "abstract မှ ရည်ရွယ်ချက်။" },
      { en: "Data were collected from 240 students over six weeks.", mm: "ဒေတာကို ကျောင်းသား ၂၄၀ ထံမှ ခြောက်ပတ်ကြာ စုဆောင်းခဲ့သည်။", note: "method။" },
      { en: "The findings suggest a modest but consistent improvement.", mm: "တွေ့ရှိချက်များက အနည်းငယ်သော်လည်း တသမတ်တည်း တိုးတက်မှုကို ထောက်ပြသည်။" },
    ],
    mistakes: [
      { wrong: "abstract ကို မဖတ်ဘဲ အစမှ အဆုံး ဖတ်ခြင်း", right: "အနှစ်ချုပ် → ခေါင်းစဉ် → ဇယား → နိဂုံး အစီအစဉ်ဖြင့် ဖတ်ပါ", why: "အချိန် သက်သာသည်။" },
      { wrong: "စကားလုံး တစ်လုံး မသိလျှင် ရပ်တန့်ခြင်း", right: "အခြေအနေမှ ခန့်မှန်းပြီး ဆက်ဖတ်ပါ", why: "အဓိကအချက် ဖတ်ရန် စကားလုံးအားလုံး မလိုပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which section states the research question?", promptMm: "ရွေးပါ။", options: ["Abstract only", "Introduction", "Results", "References"], answer: 1, explanation: "introduction တွင် သုတေသန မေးခွန်း ပါသည်။", topic: "academic reading" },
      { type: "mcq", prompt: "'Findings' means ___.", promptMm: "ရွေးပါ။", options: ["methods", "results", "references", "titles"], answer: 1, explanation: "findings = တွေ့ရှိချက်။", topic: "academic reading" },
      { type: "fill", prompt: "The ___ explains how the data were collected.", promptMm: "ဖြည့်ပါ။", answers: ["methodology", "method"], explanation: "methodology/method။", topic: "academic reading" },
      { type: "correct", prompt: "Correct: The findings supports the hypothesis.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The findings support the hypothesis."], explanation: "findings ဗဟုကိန်း → support။", topic: "academic reading" },
    ],
    independent: [
      { type: "mcq", prompt: "What is usually read first?", promptMm: "ရွေးပါ။", options: ["References", "Abstract", "Appendix", "Acknowledgements"], answer: 1, explanation: "abstract။", topic: "academic reading" },
      { type: "fill", prompt: "The results were ___, so no clear conclusion could be drawn. (မပြတ်လင်းသော)", promptMm: "ဖြည့်ပါ။", answers: ["inconclusive"], explanation: "inconclusive။", topic: "academic reading" },
      { type: "mcq", prompt: "Which is a limitation of a study?", promptMm: "ရွေးပါ။", options: ["A small sample", "A long title", "Many references", "Clear tables"], answer: 0, explanation: "နမူနာ ငယ်ခြင်းသည် ကန့်သတ်ချက်။", topic: "academic reading" },
      { type: "translate", prompt: "Translate: ဒီလေ့လာမှုက အိပ်စက်မှုနဲ့ မှတ်ဉာဏ် ဆက်စပ်မှုကို စူးစမ်းတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["This study investigates the link between sleep and memory.", "This study examines the relationship between sleep and memory."], explanation: "investigate/examine the link between။", topic: "academic reading" },
    ],
    review: [
      { q: "ဆောင်းပါး အပိုင်း ၅ ခု ဘာတွေလဲ။", a: "Abstract, Introduction, Method, Results, Discussion/Conclusion။" },
      { q: "ထိရောက်စွာ ဖတ်ရန် အစီအစဉ် ဘာလဲ။", a: "abstract → headings → tables → conclusion → လိုအပ်သည့် အပိုင်း။" },
    ],
    summary: ["ဆောင်းပါး အပိုင်းတိုင်းတွင် ကိုယ်ပိုင် လုပ်ဆောင်ချက် ရှိသည်။", "abstract နှင့် conclusion က အဓိက အချက် ပေးသည်။", "ဝေါဟာရ မသိလျှင် အခြေအနေမှ ခန့်မှန်းနိုင်သည်။"],
    mastery: ["ဆောင်းပါး ၁ ခုမှ အဓိက အချက် ၆ ခု ဖမ်းယူနိုင်သည်။", "အပိုင်း ၅ ခု၏ လုပ်ဆောင်ချက် ဖော်ပြနိုင်သည်။"],
    topics: ["reading", "academic reading", "research"],
  },
];

export const moduleEFLessonsPart4: Lesson[] = buildLessons(seeds);
