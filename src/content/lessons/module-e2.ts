import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const note = "ဤသင်ခန်းစာတွင် အသံဖိုင် မပါပါ။ မူရင်း script များကို စာသားအဖြစ် ပေးထားပြီး အသံထွက်ဖတ်ခြင်း/မိတ်ဆွေနှင့် အခန်းကဏ္ဍ လုပ်ခြင်းဖြင့် လေ့ကျင့်ပါ။";

const seeds: LessonSeed[] = [
  {
    id: "e3-implied-meaning",
    moduleId: "E",
    title: "Listening: Attitude and Implied Meaning",
    titleMm: "နားထောင်မှု — သဘောထား နှင့် သွယ်ဝိုက်အဓိပ္ပာယ်",
    level: "B2",
    minutes: 22,
    summaryLine: "ပြောသူက စကားလုံးဖြင့် တိုက်ရိုက် မပြောဘဲ သဘောထား၊ သံသယ နှင့် သဘောတူ/မတူမှုကို ဖော်ပြသည့် အချက်များကို ဖတ်ယူနည်း။",
    objectives: ["နိမ့်ချ/မြှောက်သည့် လေသံ ကွာခြားချက် သိမည်။", "သွယ်ဝိုက်အဓိပ္ပာယ် ဖော်ပြသည့် စကားစု ၆ ခု သိမည်။", "ပြောသူ၏ သဘောထားကို အထောက်အထားဖြင့် ဖော်ပြနိုင်မည်။"],
    vocab: [
      { en: "hesitate", mm: "တွန့်ဆုတ်သည်", pos: "verb", example: "He hesitated before answering.", exampleMm: "သူ ဖြေမည့်အခါ တွန့်ဆုတ်ခဲ့သည်။", topic: "listening", level: "B2" },
      { en: "sarcastic", mm: "သရော်သော", pos: "adjective", example: "Her tone was slightly sarcastic.", exampleMm: "သူမ၏ လေသံက အနည်းငယ် သရော်သလို ဖြစ်ခဲ့သည်။", topic: "listening", level: "C1" },
      { en: "imply", mm: "သွယ်ဝိုက် ဆိုလိုသည်", pos: "verb", example: "He implied that the plan would fail.", exampleMm: "အစီအစဉ် ကျရှုံးမည်ဟု သူ သွယ်ဝိုက် ဆိုလိုခဲ့သည်။", topic: "listening", level: "B2" },
    ],
    sections: [
      {
        heading: "သွယ်ဝိုက် အဓိပ္ပာယ် ဖော်ပြချက်များ",
        body: [
          "'That's one way to do it.' (အခြားနည်း ပိုကောင်းနိုင်သည်)။ 'If you say so.' (သဘောမတူသော်လည်း မငြင်းခြင်း)။ 'I suppose we could try.' (စိတ်မပါ)။",
          "'Actually…' ဖြင့် စခြင်းသည် များသောအားဖြင့် မတူညီကြောင်း သွယ်ဝိုက် ပြသည်။ 'With respect…' သည် ကန့်ကွက်မှု အပိုဒ် ဖြစ်လေ့ ရှိသည်။",
          "အသံ — လေသံ တက်ခြင်း၊ နှေးခြင်း၊ ရပ်တန့်ခြင်း သည် အဓိပ္ပာယ်ကို ပြောင်းနိုင်သည် (စာသားတွင် punctuation ဖြင့် ခန့်မှန်းနိုင်သည်)။",
        ],
        table: { headers: ["ပြောချက်", "သွယ်ဝိုက်အဓိပ္ပာယ်", "သဲလွန်စ"], rows: [["That's interesting.", "သဘောမတူ/သံသယ", "လေသံ ကျ"], ["I'll see what I can do.", "ကတိမ ပေးနိုင်", "ရှောင်လွဲသည့် စကား"], ["Right, of course.", "မကျေနပ်", "တိုတိုဖြေ"], ["You could try.", "အောင်မြင်မည် မထင်", "အလေးမထား"]] },
      },
      {
        heading: "ဖတ်ယူနည်း အဆင့်များ",
        body: [
          "၁) ပြောသူက ဘာကို တိုက်ရိုက် ဆိုသလဲ မှတ်ပါ။ ၂) ဘာကို ခံစားနေသလဲ ခန့်မှန်းပါ။ ၃) ဘယ်စကားလုံးက ထိုအချက်ကို ထောက်ပံ့သလဲ ရှာပါ။",
          "ခန့်မှန်းချက်ကို အထောက်အထားနှင့် တွဲဖြေသည် — 'The speaker implies X because she says \"…\".'",
          note,
        ],
      },
    ],
    examples: [
      { en: "\"That's one way to do it, I suppose.\"", mm: "\"အဲလိုလုပ်လည်း ရတာပါပဲ။\" (စိတ်မပါသလို လေသံ)", note: "သွယ်ဝိုက် သဘောမတူမှု။" },
      { en: "\"With respect, I think we've missed the main point.\"", mm: "\"ခွင့်လွှတ်ပါ၊ ကျွန်တော်တို့ အဓိကအချက်ကို လွတ်နေတယ်လို့ ထင်တယ်။\"", note: "with respect သည် ကန့်ကွက်မှု အပိုဒ်။" },
      { en: "\"I'll see what I can do.\"", mm: "\"တတ်နိုင်သလောက် ကြည့်ပါမယ်။\"", note: "ကတိ မပေးခြင်း။" },
    ],
    mistakes: [
      { wrong: "ပြောသူ 'yes' ဆိုလျှင် အမြဲ သဘောတူသည်ဟု ယူဆခြင်း", right: "'Yes, but…' ပါလျှင် သဘောတူမှု အပြည့် မဟုတ်နိုင်", why: "but ပြီးနောက် စကားက အဓိကအချက် ဖြစ်လေ့ ရှိသည်။" },
      { wrong: "လေသံကို လစ်လျူရှုခြင်း", right: "အဓိကစကားလုံး ဖိသံ နှင့် ရပ်တန့်မှုကို ဂရုစိုက်ပါ", why: "လေသံက အဓိပ္ပာယ်ကို ပြောင်းနိုင်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "\"If you say so.\" သည် များသောအားဖြင့် ဘာအဓိပ္ပာယ်လဲ။", promptMm: "ရွေးပါ။", options: ["အလွန် သဘောတူ", "သဘောမတူသော်လည်း မငြင်း", "မမေးနိုင်", "ကျေးဇူးတင်"], answer: 1, explanation: "မငြင်းဘဲ သဘောမတူကြောင်း သွယ်ဝိုက်ပြသည်။", topic: "listening" },
      { type: "mcq", prompt: "Which phrase often introduces a disagreement?", promptMm: "ရွေးပါ။", options: ["Absolutely right.", "With respect…", "Exactly.", "I couldn't agree more."], answer: 1, explanation: "with respect သည် ကန့်ကွက်မှု အပိုဒ်။", topic: "listening" },
      { type: "fill", prompt: "He ___ that the plan would fail. (သွယ်ဝိုက် ဆိုလို)", promptMm: "ဖြည့်ပါ။", answers: ["implied"], explanation: "imply → implied။", topic: "listening" },
      { type: "correct", prompt: "Correct: She implied me that she was unhappy.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["She implied that she was unhappy."], explanation: "imply + that clause; လူကို တိုက်ရိုက် မယူပါ။", topic: "listening" },
    ],
    independent: [
      { type: "mcq", prompt: "\"I'll see what I can do.\" သည် ဘာကို ပြသလဲ။", promptMm: "ရွေးပါ။", options: ["သေချာသည့် ကတိ", "ကတိ မပေးနိုင်ခြင်း", "ငြင်းပယ်ခြင်း", "ကျေးဇူးတင်ခြင်း"], answer: 1, explanation: "ရှောင်လွဲသည့် စကား။", topic: "listening" },
      { type: "fill", prompt: "Her tone was slightly ___ — she didn't mean it. (သရော်)", promptMm: "ဖြည့်ပါ။", answers: ["sarcastic"], explanation: "sarcastic။", topic: "listening" },
      { type: "mcq", prompt: "Which shows hesitation?", promptMm: "ရွေးပါ။", options: ["Well… I'm not sure.", "Definitely yes.", "Of course.", "Absolutely."], answer: 0, explanation: "Well… + မသေချာမှု။", topic: "listening" },
      { type: "translate", prompt: "Translate: သူက သဘောမတူကြောင်း သွယ်ဝိုက် ပြောခဲ့တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["He implied that he disagreed.", "He hinted that he didn't agree."], explanation: "imply/hint + that clause။", topic: "listening" },
    ],
    review: [
      { q: "သွယ်ဝိုက်အဓိပ္ပာယ်ကို ဘယ်လို ဖြေသလဲ။", a: "ခန့်မှန်းချက် + အထောက်အထား (ပြောခဲ့သည့် စကားလုံး) ကို တွဲဖြေသည်။" },
      { q: "'With respect' သည် ဘာကို ညွှန်းလေ့ ရှိသလဲ။", a: "ကန့်ကွက်မှု/မတူညီမှု။" },
    ],
    summary: ["သဘောထားကို စကားလုံး၊ လေသံ နှင့် ရပ်တန့်မှုဖြင့် ဖတ်ယူသည်။", "ရှောင်လွဲသည့် စကားများ (I'll see what I can do) ကို သတိထားရသည်။", "ဖြေချက်တွင် အထောက်အထား လိုသည်။"],
    mastery: ["သွယ်ဝိုက်အဓိပ္ပာယ် မေးခွန်း ၈ ခုတွင် ၇ ခု မှန်သည်။", "သဘောထား ဖော်ပြချက် ၅ ခုကို ရှင်းပြနိုင်သည်။"],
    topics: ["listening", "implied meaning", "critical listening"],
  },
  {
    id: "e4-longer-discussions",
    moduleId: "E",
    title: "Listening: Longer Discussions",
    titleMm: "နားထောင်မှု — ရှည်လျားသည့် ဆွေးနွေးမှုများ",
    level: "B2",
    minutes: 24,
    summaryLine: "လူနှစ်ဦး/သုံးဦး ဆွေးနွေးမှုတွင် သဘောထား ကွဲပြားမှု၊ သဘောတူညီမှု နှင့် ဆုံးဖြတ်ချက် ချမှတ်မှုကို လိုက်ပါနည်း။",
    objectives: ["ဆွေးနွေးမှုတွင် သဘောထား ကွဲပြားမှုကို ခွဲခြားနိုင်မည်။", "ဆုံးဖြတ်ချက် ချမှတ်သည့် အချက်ကို ဖော်ထုတ်နိုင်မည်။", "မှတ်စု ဖွဲ့စည်းပုံ ရေးနိုင်မည်။"],
    vocab: [
      { en: "come to an agreement", mm: "သဘောတူညီမှု ရသည်", pos: "phrase", example: "They came to an agreement on the budget.", exampleMm: "ဘတ်ဂျက်အပေါ် သူတို့ သဘောတူညီမှု ရခဲ့သည်။", topic: "listening", level: "B2" },
      { en: "first of all", mm: "ပထမဆုံး", pos: "phrase", example: "First of all, let's check the figures.", exampleMm: "ပထမဆုံး ကိန်းဂဏန်းများ စစ်ရအောင်။", topic: "listening", level: "B1" },
      { en: "as a result", mm: "ရလဒ်အနေဖြင့်", pos: "phrase", example: "As a result, we changed the plan.", exampleMm: "ရလဒ်အနေဖြင့် အစီအစဉ် ပြောင်းခဲ့သည်။", topic: "listening", level: "B2" },
    ],
    sections: [
      {
        heading: "ဖွဲ့စည်းပုံကို လိုက်ပါခြင်း",
        body: [
          "ဆွေးနွေးမှု များသောအားဖြင့် — အခြေအနေ ရှင်းပြခြင်း → ရွေးချယ်စရာ ၂–၃ ခု → အားသာချက်/အားနည်းချက် → ဆုံးဖြတ်ချက်။",
          "အချက်ပြ စကားစုများ — 'First of all', 'The problem is', 'On the other hand', 'The thing is', 'So what we've decided is'။",
          "သဘောထား ပြောင်းလဲမှုကို သတိထားပါ — 'I was going to say X, but actually Y is better.'",
        ],
        table: { headers: ["အဆင့်", "အချက်ပြ စကား", "မှတ်ရန်"], rows: [["စ", "First of all…", "အစီအစဉ်"], ["နှိုင်းယှဉ်", "On the other hand…", "အခြားရွေးချယ်မှု"], ["ပြဿနာ", "The thing is…", "အခက်အခဲ"], ["ဆုံးဖြတ်", "So we've decided to…", "ရလဒ်"]] },
      },
      {
        heading: "မှတ်စု ဖွဲ့စည်းပုံ",
        body: [
          "မှတ်စုကို ကော်လံ နှစ်ခုဖြင့် ခွဲသည် — ဘယ်: ပြောသူ/အကြောင်းအရာ၊ ညာ: အချက်/ရလဒ်။",
          "ဂဏန်း၊ ရက်စွဲ၊ အမည် များကို သင်္ကေတဖြင့် မှတ်သည် — '→' = ရလဒ်၊ '!' = အရေးကြီး၊ '?' = မရှင်းလင်း။",
          note,
        ],
      },
    ],
    examples: [
      { en: "First of all, we need to agree on the deadline.", mm: "ပထမဆုံး နောက်ဆုံး ရက်စွဲကို သဘောတူဖို့ လိုတယ်။" },
      { en: "The thing is, we don't have enough staff.", mm: "ပြဿနာက ဝန်ထမ်း မလုံလောက်တာပါ။" },
      { en: "So, as a result, we've decided to postpone the launch.", mm: "ဒါကြောင့် ရလဒ်အနေဖြင့် မိတ်ဆက်ပွဲကို ရွှေ့ဆိုင်းဖို့ ဆုံးဖြတ်ခဲ့တယ်။" },
    ],
    mistakes: [
      { wrong: "စကားလုံးတိုင်း ရေးမှတ်ခြင်း", right: "အချက်ပြ စကားစုနှင့် ရလဒ်ကို မှတ်ပါ", why: "အမြန်နှုန်းနှင့် လိုက်နိုင်ရန်။" },
      { wrong: "ပထမ ပြောသူ၏ အမြင်ကို ဆုံးဖြတ်ချက်ဟု ယူဆခြင်း", right: "ဆုံးဖြတ်ချက်ကို 'we've decided' ကဲ့သို့ အချက်ပြ စကားဖြင့် စစ်ပါ", why: "ဆွေးနွေးမှု အလယ်တွင် အမြင် ပြောင်းနိုင်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which phrase signals a decision?", promptMm: "ရွေးပါ။", options: ["First of all…", "So we've decided to…", "On the other hand…", "The thing is…"], answer: 1, explanation: "ဆုံးဖြတ်ချက် အချက်ပြ။", topic: "listening" },
      { type: "mcq", prompt: "___ the other hand, the cost is higher.", promptMm: "ရွေးပါ။", options: ["In", "On", "At", "For"], answer: 1, explanation: "on the other hand။", topic: "listening" },
      { type: "fill", prompt: "The ___, we don't have enough time. (ပြဿနာ)", promptMm: "ဖြည့်ပါ။", answers: ["thing is"], explanation: "the thing is။", topic: "listening" },
      { type: "correct", prompt: "Correct: As result, we changed the date.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["As a result, we changed the date."], explanation: "as a result။", topic: "listening" },
    ],
    independent: [
      { type: "mcq", prompt: "Which shows a change of mind?", promptMm: "ရွေးပါ။", options: ["I was going to say A, but actually B is better.", "I always say A.", "A is A.", "No comment."], answer: 0, explanation: "အမြင် ပြောင်းလဲမှု။", topic: "listening" },
      { type: "fill", prompt: "They came to an ___ on the price.", promptMm: "ဖြည့်ပါ။", answers: ["agreement"], explanation: "come to an agreement။", topic: "listening" },
      { type: "order", prompt: "Arrange the sentence.", promptMm: "စီပါ။", tokens: ["of", "First", "all", "check", "the", "figures"], answer: "First of all check the figures", explanation: "First of all, check the figures။", topic: "listening" },
      { type: "translate", prompt: "Translate: ရလဒ်အနေဖြင့် ကျွန်တော်တို့ အစီအစဉ်ကို ပြောင်းခဲ့တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["As a result, we changed the plan."], explanation: "as a result။", topic: "listening" },
    ],
    review: [
      { q: "ဆွေးနွေးမှု၏ ယေဘုယျ ဖွဲ့စည်းပုံ ဘာလဲ။", a: "အခြေအနေ → ရွေးချယ်စရာ → အားသာချက်/အားနည်းချက် → ဆုံးဖြတ်ချက်။" },
      { q: "မှတ်စုတွင် ဘာကို ဦးစားပေး မှတ်သလဲ။", a: "အချက်ပြ စကားစု၊ ဂဏန်း၊ ရက်စွဲ နှင့် ဆုံးဖြတ်ချက်။" },
    ],
    summary: ["ရှည်လျားသည့် ဆွေးနွေးမှုကို ဖွဲ့စည်းပုံအလိုက် လိုက်ပါနိုင်သည်။", "သဘောထား ပြောင်းလဲမှုကို သတိထားရသည်။", "ဆုံးဖြတ်ချက်ကို အချက်ပြ စကားဖြင့် စစ်သည်။"],
    mastery: ["ဆွေးနွေးမှု မေးခွန်း ၁၀ ခုတွင် ၈ ခု မှန်သည်။", "မှတ်စု ဖွဲ့စည်းပုံဖြင့် အချက် ၁၀ ခု မှတ်နိုင်သည်။"],
    topics: ["listening", "discussion", "note-taking"],
  },
  {
    id: "e5-numbers-dates-listening",
    moduleId: "E",
    title: "Listening: Numbers, Dates and Prices",
    titleMm: "နားထောင်မှု — ဂဏန်း၊ ရက်စွဲ နှင့် စျေးနှုန်း",
    level: "A2",
    minutes: 18,
    summaryLine: "ဂဏန်း၊ ရက်စွဲ၊ အချိန် နှင့် စျေးနှုန်းများကို နားထောင်ရာတွင် မှားယွင်းမှု လျှော့ချနည်း။",
    objectives: ["teen/-ty ကွာခြားချက် ခွဲခြားနိုင်မည်။", "ရက်စွဲ နှင့် အချိန် ပြောပုံ သိမည်။", "စျေးနှုန်းနှင့် ဖုန်းနံပါတ် မှတ်နိုင်မည်။"],
    vocab: [
      { en: "thirteen / thirty", mm: "၁၃ / ၃၀", pos: "number pair", example: "Thirteen has stress on the second syllable.", exampleMm: "Thirteen တွင် ဒုတိယ syllable ကို ဖိသည်။", topic: "numbers", level: "A2" },
      { en: "double", mm: "နှစ်လုံးတွဲ", pos: "adjective", example: "My number is double four, two, oh nine.", exampleMm: "နံပါတ်က လေး-လေး၊ နှစ်၊ သုည၊ ကိုး။", topic: "numbers", level: "A2" },
      { en: "quarter past", mm: "(နာရီ) ဆယ့်ငါးမိနစ် ကျော်", pos: "phrase", example: "The train leaves at quarter past six.", exampleMm: "ရထားက ခြောက်နာရီ ဆယ့်ငါးမိနစ်တွင် ထွက်သည်။", topic: "numbers", level: "A2" },
    ],
    sections: [
      {
        heading: "ဂဏန်း နားထောင်ခြင်း",
        body: [
          "teen (13–19) တွင် နောက်ဆုံး syllable ကို ဖိသည် — thirTEEN။ -ty (20–90) တွင် ပထမ syllable ကို ဖိသည် — THIRty။",
          "0 ကို 'oh', 'zero', 'nought' ဟု ပြောနိုင်သည်။ ဖုန်းနံပါတ်တွင် တစ်လုံးချင်း ဖတ်ပြီး ထပ်နေလျှင် 'double' သုံးသည်။",
          "ရက်စွဲ — 'the fifth of May' (BrE) / 'May fifth' (AmE)။ ခုနှစ်ကို 'nineteen ninety-eight' သို့ 'two thousand and five' ဟု ဖတ်သည်။",
        ],
        table: { headers: ["အခြေအနေ", "ဖတ်ပုံ", "သတိထားရန်"], rows: [["£4.50", "four pounds fifty", "pence ချန်လှပ်"], ["$12.99", "twelve ninety-nine", "တစ်လုံးချင်း မဖတ်"], ["14:30", "half past two", "half = မိနစ် ၃၀"], ["6/5", "the sixth of May / June fifth", "BrE/AmE ကွာ"]] },
      },
      {
        heading: "မှားယွင်းမှု လျှော့ချနည်း",
        body: [
          "နံပါတ် ကြားလျှင် ချက်ချင်း ရေးပြီး နောက်မှ ပြန်စစ်သည်။ ခန့်မှန်း မရလျှင် ပြန်မေးသည် — 'Sorry, was that fifteen or fifty?'",
          "နှစ်လုံးတွဲ ကိန်းများ (thirteen–nineteen) သည် နှုန်းမြန်လျှင် ရောတတ်သဖြင့် ကိုယ်တိုင် အသံထွက်ဖတ်ပြီး လေ့ကျင့်ပါ။",
          note,
        ],
      },
    ],
    examples: [
      { en: "The meeting is on the twenty-first of June at half past nine.", mm: "အစည်းအဝေးက ဇွန်လ ၂၁ ရက် ကိုးနာရီ သုံးဆယ်တွင် ဖြစ်သည်။" },
      { en: "The ticket costs fifteen thousand kyat.", mm: "လက်မှတ်က ကျပ် ဆယ့်ငါးထောင် ကုန်သည်။" },
      { en: "Call me on oh-nine, double seven, four, one, two.", mm: "သုည-ကိုး၊ ခုနစ်-ခုနစ်၊ လေး၊ တစ်၊ နှစ် ကို ဖုန်းဆက်ပါ။" },
    ],
    mistakes: [
      { wrong: "thirteen နှင့် thirty ကို အတူတူ ဖတ်ခြင်း", right: "thirTEEN နှင့် THIRty ဟု ဖိသံ ကွာစွာ ဖတ်ပါ", why: "ဖိသံ မှားလျှင် ဂဏန်း လွဲသည်။" },
      { wrong: "half past two ကို ၂:၃၀ မဟုတ်ဘဲ ၂:၅၀ ဟု မှတ်ခြင်း", right: "half past = မိနစ် ၃၀", why: "အချိန် ဖော်ပြချက် ပုံသေ။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which number is stressed on the second syllable?", promptMm: "ရွေးပါ။", options: ["thirty", "thirteen", "forty", "ninety"], answer: 1, explanation: "thirTEEN။", topic: "numbers" },
      { type: "mcq", prompt: "'Half past six' means ___.", promptMm: "ရွေးပါ။", options: ["6:00", "6:15", "6:30", "6:45"], answer: 2, explanation: "half past = မိနစ် ၃၀။", topic: "numbers" },
      { type: "fill", prompt: "0 in a phone number is often said as ___.", promptMm: "ဖြည့်ပါ။", answers: ["oh", "zero", "nought"], explanation: "oh/zero။", topic: "numbers" },
      { type: "correct", prompt: "Correct: The class starts in the ninth of May.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The class starts on the ninth of May."], explanation: "ရက်စွဲ → on။", topic: "numbers" },
    ],
    independent: [
      { type: "mcq", prompt: "£7.25 is read as ___.", promptMm: "ရွေးပါ။", options: ["seven point twenty-five pounds", "seven pounds twenty-five", "seven pounds and twenty five pence only", "seven twenty five pence"], answer: 1, explanation: "seven pounds twenty-five။", topic: "numbers" },
      { type: "fill", prompt: "14:45 is ___ to three.", promptMm: "ဖြည့်ပါ။", answers: ["a quarter", "quarter"], explanation: "a quarter to three။", topic: "numbers" },
      { type: "mcq", prompt: "Which is BrE date order?", promptMm: "ရွေးပါ။", options: ["May the fifth", "the fifth of May", "five May the", "May five of"], answer: 1, explanation: "BrE → the fifth of May။", topic: "numbers" },
      { type: "translate", prompt: "Translate: လက်မှတ်က ကျပ် နှစ်သောင်း ကုန်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["The ticket costs twenty thousand kyat.", "The ticket is twenty thousand kyat."], explanation: "costs + ပမာဏ။", topic: "numbers" },
    ],
    review: [
      { q: "teen နှင့် -ty ကွာခြားချက် ဘာလဲ။", a: "teen တွင် နောက်ဆုံး syllable ကို ဖိသည်၊ -ty တွင် ပထမ syllable ကို ဖိသည်။" },
      { q: "ရက်စွဲတွင် ဘယ်ဝိဘတာ သုံးသလဲ။", a: "on — on the fifth of May။" },
    ],
    summary: ["ဂဏန်း နားထောင်ရာတွင် ဖိသံ အရေးကြီးသည်။", "ရက်စွဲ BrE/AmE ကွာခြားသည်။", "မသေချာလျှင် ပြန်မေးခြင်းက အကောင်းဆုံး။"],
    mastery: ["ဂဏန်း/ရက်စွဲ မေးခွန်း ၁၀ ခုတွင် ၉ ခု မှန်သည်။", "ဖုန်းနံပါတ် ၅ ခုကို အသံထွက်ဖတ်နိုင်သည်။"],
    topics: ["listening", "numbers", "dates"],
  },
  {
    id: "e6-directions-listening",
    moduleId: "E",
    title: "Listening: Following Directions",
    titleMm: "နားထောင်မှု — လမ်းညွှန်ချက် လိုက်နာခြင်း",
    level: "A2",
    minutes: 18,
    summaryLine: "လမ်းညွှန်ချက် နားထောင်ရာတွင် အဓိက လမ်းမှတ်များ၊ ဘက်ပြ စကားလုံးများ နှင့် အကွာအဝေး ဖော်ပြချက်များကို မှတ်နည်း။",
    objectives: ["လမ်းညွှန် ကြိယာ ၈ ခု နားလည်မည်။", "ဘယ်/ညာ နှင့် အကွာအဝေး မှတ်နိုင်မည်။", "လမ်းညွှန်ချက်ကို ပြန်ပြောနိုင်မည်။"],
    vocab: [
      { en: "go straight on", mm: "တည့်တည့် ဆက်သွားသည်", pos: "phrase", example: "Go straight on for two blocks.", exampleMm: "နှစ်တုံး တည့်တည့် ဆက်သွားပါ။", topic: "directions", level: "A2" },
      { en: "take the second turning", mm: "ဒုတိယ လမ်းကွေ့ကို ယူသည်", pos: "phrase", example: "Take the second turning on the left.", exampleMm: "ဘယ်ဘက် ဒုတိယ လမ်းကွေ့ကို ယူပါ။", topic: "directions", level: "B1" },
      { en: "opposite", mm: "မျက်နှာချင်းဆိုင်", pos: "preposition", example: "It's opposite the pharmacy.", exampleMm: "ဆေးဆိုင်နှင့် မျက်နှာချင်းဆိုင် ဖြစ်သည်။", topic: "directions", level: "A2" },
    ],
    sections: [
      {
        heading: "လမ်းညွှန် စကားလုံးများ",
        body: [
          "ရွေ့လျားမှု — go straight, turn left/right, take the first turning, cross the road, go past, follow the signs။",
          "အနေအထား — next to, opposite, between, behind, in front of, at the end of, on the corner။",
          "အကွာအဝေး/အချိန် — about 200 metres, a five-minute walk, two blocks, just after the bridge။",
        ],
        table: { headers: ["စကားလုံး", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["go past", "ကျော်သွားသည်", "Go past the school."], ["cross", "ဖြတ်ကူးသည်", "Cross the road."], ["end of the street", "လမ်းအဆုံး", "at the end of the street"], ["landmark", "မှတ်တိုင်", "a tall tower as a landmark"]] },
      },
      {
        heading: "မှတ်နည်း",
        body: [
          "လမ်းညွှန်ချက်ကို စာဖြင့် ချက်ချင်း မှတ်ပြီး ပုံဆွဲခြင်းက ပိုထိရောက်သည် — လမ်းဆုံများကို မျဉ်းနှင့် မြှားဖြင့် ရေးသည်။",
          "ဖုန်းဖြင့် လမ်းညွှန်ချက် ရလျှင် အဆုံးတွင် ပြန်ပြောသည် — 'So, straight on, then left after the bank?'",
          note,
        ],
      },
    ],
    examples: [
      { en: "Go straight on, then take the second turning on your right.", mm: "တည့်တည့် သွားပြီး ညာဘက် ဒုတိယ လမ်းကွေ့ကို ယူပါ။" },
      { en: "It's about a five-minute walk from the station.", mm: "ဘူတာမှ ငါးမိနစ်ခန့် လမ်းလျှောက်ရသည်။" },
      { en: "The library is opposite the market, next to a small café.", mm: "စာကြည့်တိုက်က စျေးနှင့် မျက်နှာချင်းဆိုင်၊ ကော်ဖီဆိုင်ငယ် ဘေးတွင် ရှိသည်။" },
    ],
    mistakes: [
      { wrong: "Turn on left.", right: "Turn left.", why: "left/right တွင် on မလိုပါ။" },
      { wrong: "Go straightly.", right: "Go straight.", why: "straight သည် adverb ဖြစ်ပြီး -ly မလိုပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "___ straight on until the lights.", promptMm: "ရွေးပါ။", options: ["Go", "Take", "Cross", "Follow"], answer: 0, explanation: "go straight on။", topic: "directions" },
      { type: "fill", prompt: "The bank is ___ the post office. (မျက်နှာချင်းဆိုင်)", promptMm: "ဖြည့်ပါ။", answers: ["opposite"], explanation: "opposite။", topic: "directions" },
      { type: "mcq", prompt: "Which means 'pass it'?", promptMm: "ရွေးပါ။", options: ["go past", "go back", "go up", "go in"], answer: 0, explanation: "go past = ကျော်သွား။", topic: "directions" },
      { type: "correct", prompt: "Correct: Turn on the right at the corner.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["Turn right at the corner."], explanation: "turn right။", topic: "directions" },
    ],
    independent: [
      { type: "mcq", prompt: "___ the road at the crossing.", promptMm: "ရွေးပါ။", options: ["Cross", "Go", "Take", "Turn"], answer: 0, explanation: "cross the road။", topic: "directions" },
      { type: "fill", prompt: "It's ___ the end of the street.", promptMm: "ဖြည့်ပါ။", answers: ["at"], explanation: "at the end of။", topic: "directions" },
      { type: "order", prompt: "Arrange the directions.", promptMm: "စီပါ။", tokens: ["second", "Take", "turning", "the", "left", "on", "the"], answer: "Take the second turning on the left", explanation: "take the second turning on the left။", topic: "directions" },
      { type: "translate", prompt: "Translate: ဘူတာကနေ ငါးမိနစ် လမ်းလျှောက်ရတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["It's a five-minute walk from the station.", "It is about a five-minute walk from the station."], explanation: "a five-minute walk from။", topic: "directions" },
    ],
    review: [
      { q: "လမ်းညွှန်ချက် မှတ်ရန် အကောင်းဆုံး နည်းလမ်း ဘာလဲ။", a: "ပုံဆွဲခြင်း နှင့် အဆုံးတွင် ပြန်ပြောခြင်း။" },
      { q: "opposite နှင့် next to ကွာခြားချက် ဘာလဲ။", a: "opposite = မျက်နှာချင်းဆိုင်၊ next to = ဘေး/ကပ်လျက်။" },
    ],
    summary: ["လမ်းညွှန်ချက်တွင် ရွေ့လျားမှု၊ အနေအထား နှင့် အကွာအဝေး စကားလုံးများ ပါသည်။", "turn left/right တွင် on မလိုပါ။", "ပုံဆွဲမှတ်ခြင်း ထိရောက်သည်။"],
    mastery: ["လမ်းညွှန်ချက် ၈ ခုကို နားလည်ပြီး ပြန်ပြောနိုင်သည်။", "လမ်းညွှန်ချက် ၆ ကြောင်း ကိုယ်တိုင် ရေးနိုင်သည်။"],
    topics: ["listening", "directions", "travel"],
  },
  {
    id: "e7-phone-messages",
    moduleId: "E",
    title: "Listening: Phone Messages and Announcements",
    titleMm: "နားထောင်မှု — ဖုန်း မက်ဆေ့ချ် နှင့် ကြေညာချက်များ",
    level: "B1",
    minutes: 20,
    summaryLine: "ဖုန်း အသံမက်ဆေ့ချ်၊ လေဆိပ်/ဘူတာ ကြေညာချက် နှင့် ဆိုင်ကြော်ငြာ ကြေညာချက်များမှ အချက်အလက် ဖမ်းယူနည်း။",
    objectives: ["ကြေညာချက်မှ အချက် ၅ ခု ဖမ်းယူနိုင်မည်။", "ရက်စွဲ၊ အချိန်၊ နေရာ မှတ်နိုင်မည်။", "မက်ဆေ့ချ် ပြန်ရေးနိုင်မည်။"],
    vocab: [
      { en: "announcement", mm: "ကြေညာချက်", pos: "noun", example: "Please listen to the following announcement.", exampleMm: "အောက်ပါ ကြေညာချက်ကို နားထောင်ပါ။", topic: "listening", level: "B1" },
      { en: "platform change", mm: "ပလက်ဖောင်း ပြောင်းလဲမှု", pos: "phrase", example: "There is a platform change for the 9:15 train.", exampleMm: "၉:၁၅ ရထားအတွက် ပလက်ဖောင်း ပြောင်းလဲမှု ရှိသည်။", topic: "listening", level: "B1" },
      { en: "call back", mm: "ပြန်ဖုန်းဆက်သည်", pos: "phrasal verb", example: "Please call back after six.", exampleMm: "ခြောက်နာရီ နောက်ပိုင်း ပြန်ဆက်ပါ။", topic: "listening", level: "A2" },
    ],
    sections: [
      {
        heading: "ကြေညာချက် အစီအစဉ်",
        body: [
          "ကြေညာချက် များသောအားဖြင့် — အာရုံစိုက်စေရန် စကား ('Attention, please') → အကြောင်းအရာ → အသေးစိတ် → လုပ်ဆောင်ရန်။",
          "ဖုန်း မက်ဆေ့ချ် — ဖုန်းဆက်သူ အမည် → အကြောင်းရင်း → ပြန်ဆက်ရန် နံပါတ် → အချိန်။",
          "အမြန်ပြောသည့် နံပါတ်များကို တစ်လုံးချင်း မှတ်ပြီး နောက်မှ အစီအစဉ်တကျ ပြန်ရေးသည်။",
        ],
        table: { headers: ["အချက်အလက်", "မေးခွန်း ပုံစံ", "မှတ်ရန် နေရာ"], rows: [["အချိန်", "When does it leave?", "ရက်စွဲ + နာရီ"], ["နေရာ", "Which platform/gate?", "အမှတ်"], ["အကြောင်းရင်း", "Why is it delayed?", "တိုတိုစကားစု"], ["လုပ်ဆောင်ရန်", "What should you do?", "imperative"]] },
      },
      {
        heading: "မက်ဆေ့ချ် ပြန်ရေးခြင်း",
        body: [
          "မက်ဆေ့ချ်ကို အချက် ၄ ခုဖြင့် ပြန်ရေးသည် — ဖုန်းဆက်သူ၊ အကြောင်းရင်း၊ လိုအပ်သည့် လုပ်ဆောင်ချက်၊ ပြန်ဆက်ရန် နံပါတ်။",
          "ဥပမာ — 'Daw Mya called at 10:15. She wants to change Friday's meeting to Monday. Please call her back on 09-771-234-567.'",
          note,
        ],
      },
    ],
    examples: [
      { en: "The 9:15 train to Mandalay will now leave from platform four.", mm: "မန္တလေးသွား ၉:၁၅ ရထားက ယခု ပလက်ဖောင်း လေးမှ ထွက်မည်။" },
      { en: "This is a message for Ko Aung from the clinic.", mm: "ဆေးခန်းမှ ကိုအောင်ထံ မက်ဆေ့ချ် ဖြစ်ပါသည်။" },
      { en: "Please call back before five o'clock today.", mm: "ယနေ့ ငါးနာရီ မတိုင်မီ ပြန်ဆက်ပါ။" },
    ],
    mistakes: [
      { wrong: "ရက်စွဲနှင့် အချိန် မှတ်ရန် မေ့ခြင်း", right: "ကြေညာချက် တိုင်းတွင် ရက်စွဲ/အချိန် ပါဝင်လေ့ ရှိသည်", why: "မေးခွန်း အများစုက ထို အချက်ကို မေးသည်။" },
      { wrong: "အမည် စာလုံးပေါင်းကို ခန့်မှန်းခြင်း", right: "စာလုံးပေါင်း မေးရန် သို့မဟုတ် ပြန်ဖတ်ပြရန် တောင်းပါ", why: "အမည် မှားလျှင် အဓိပ္ပာယ် ပျက်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which question asks about place?", promptMm: "ရွေးပါ။", options: ["When?", "Where?", "Why?", "Who?"], answer: 1, explanation: "where = နေရာ။", topic: "listening" },
      { type: "fill", prompt: "Please call ___ after six. (ပြန်ဆက်)", promptMm: "ဖြည့်ပါ။", answers: ["back"], explanation: "call back။", topic: "listening" },
      { type: "mcq", prompt: "Which is a purpose of an announcement?", promptMm: "ရွေးပါ။", options: ["To inform and instruct", "To tell a long story", "To sell a house", "To make jokes"], answer: 0, explanation: "ကြေညာချက်က အသိပေး + လုပ်ဆောင်ရန် ပြောသည်။", topic: "listening" },
      { type: "correct", prompt: "Correct: The train leaves in platform four.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The train leaves from platform four."], explanation: "leaves from + ပလက်ဖောင်း။", topic: "listening" },
    ],
    independent: [
      { type: "mcq", prompt: "A message says 'call back on 09-771…'. What do you record?", promptMm: "ရွေးပါ။", options: ["The reason only", "The phone number", "The weather", "The caller's age"], answer: 1, explanation: "ပြန်ဆက်ရန် နံပါတ် မှတ်သည်။", topic: "listening" },
      { type: "fill", prompt: "There is a platform ___ for the 8:40 train.", promptMm: "ဖြည့်ပါ။", answers: ["change"], explanation: "platform change။", topic: "listening" },
      { type: "order", prompt: "Arrange the note.", promptMm: "စီပါ။", tokens: ["called", "She", "at", "ten", "fifteen"], answer: "She called at ten fifteen", explanation: "အချိန် မှတ်တမ်း။", topic: "listening" },
      { type: "translate", prompt: "Translate: မက်ဆေ့ချ်ကို ခြောက်နာရီနောက်ပိုင်း ပြန်ဆက်ပါ။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Please call back after six.", "Please return the call after six."], explanation: "call back after။", topic: "listening" },
    ],
    review: [
      { q: "ကြေညာချက်တွင် ဘယ်အချက်တွေ ရှာသလဲ။", a: "အချိန်၊ နေရာ၊ အကြောင်းရင်း နှင့် လုပ်ဆောင်ရန်။" },
      { q: "ဖုန်း မက်ဆေ့ချ် ပြန်ရေးရာတွင် ဘာ ၄ ခု ပါသလဲ။", a: "ဖုန်းဆက်သူ၊ အကြောင်းရင်း၊ လုပ်ဆောင်ရန်၊ ပြန်ဆက်ရန် နံပါတ်။" },
    ],
    summary: ["ကြေညာချက်ကို အချက် ၄ မျိုးဖြင့် ဖမ်းယူသည်။", "ဖုန်း မက်ဆေ့ချ်တွင် အမည်၊ အကြောင်းရင်း နှင့် နံပါတ် အဓိက။", "အမည်/နံပါတ် မသေချာလျှင် ပြန်မေးသည်။"],
    mastery: ["ကြေညာချက် ၅ ခုမှ အချက် ၁၅ ခု ဖမ်းယူနိုင်သည်။", "မက်ဆေ့ချ် ၅ ခု ပြန်ရေးနိုင်သည်။"],
    topics: ["listening", "announcements", "note-taking"],
  },
];

export const moduleEFLessonsPart2: Lesson[] = buildLessons(seeds);
