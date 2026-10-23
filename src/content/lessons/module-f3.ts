import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "f10-literary-texts",
    moduleId: "F",
    title: "Reading: Literary Texts and Tone",
    titleMm: "ဖတ်ရှုမှု — စာပေ စာသား နှင့် လေသံ",
    level: "B2",
    minutes: 22,
    summaryLine: "ဝတ္ထု/ကဗျာ စာသားမှ ဇာတ်ကောင်၊ လေသံ နှင့် စာရေးသူ၏ ရည်ရွယ်ချက်ကို ဖတ်ယူနည်း။",
    objectives: ["လေသံ နှင့် ခံစားချက် ဖော်ပြနိုင်မည်။", "ပုံဆောင်စကား (imagery) ကို ခွဲခြားနိုင်မည်။", "ကိုးကားချက်ဖြင့် အမြင် ထောက်ခံနိုင်မည်။"],
    vocab: [
      { en: "tone", mm: "လေသံ/သဘောထား", pos: "noun", example: "The tone of the passage is nostalgic.", exampleMm: "စာသား၏ လေသံက လွမ်းဆွတ်မှု ဖြစ်သည်။", topic: "literature", level: "B2" },
      { en: "imagery", mm: "ပုံရိပ် ဖော်ပြချက်", pos: "noun", example: "The imagery of rain suggests sadness.", exampleMm: "မိုးရေပုံရိပ်က ဝမ်းနည်းမှုကို ထင်ဟပ်သည်။", topic: "literature", level: "C1" },
      { en: "narrator", mm: "ဇာတ်ကြောင်း ပြောသူ", pos: "noun", example: "The narrator is a young girl.", exampleMm: "ဇာတ်ကြောင်း ပြောသူက မိန်းကလေး ငယ်တစ်ဦး ဖြစ်သည်။", topic: "literature", level: "B1" },
    ],
    sections: [
      {
        heading: "လေသံ ဖတ်ခြင်း",
        body: [
          "လေသံကို စကားလုံး ရွေးချယ်မှု၊ ဝါကျ အရှည် နှင့် ပုံရိပ်တို့မှ ခန့်မှန်းသည်။ ဝါကျ တိုတိုများ ဆက်တိုက် ပါလျှင် တင်းမာမှု/အလျင်အမြန် ဖြစ်နိုင်သည်။",
          "ခံစားချက် ဝေါဟာရ — nostalgic, bitter, hopeful, ironic, anxious, calm, playful။ ရွေးချယ်သည့် စကားလုံးကို စာသားမှ ကိုးကား ထောက်ခံသည်။",
          "ဇာတ်ကောင်၏ စကားနှင့် စာရေးသူ၏ အမြင်ကို မရောပါနှင့် — 'The narrator believes X, but the story suggests Y.'",
        ],
        table: { headers: ["လေသံ", "သဲလွန်စ", "ဥပမာ စကားလုံး"], rows: [["nostalgic", "အတိတ်ကို ပြန်တမ်းတ", "remember, once, still"], ["ironic", "ဆန့်ကျင်ဘက် အဓိပ္ပာယ်", "of course, wonderful"], ["anxious", "မသေချာမှု", "perhaps, maybe, tremble"], ["calm", "ရှည်လျားညီညာသည့် ဝါကျ", "quiet, slowly, soft"]] },
      },
      {
        heading: "ပုံဆောင်စကား",
        body: [
          "Simile — like/as ဖြင့် နှိုင်းယှဉ်သည်။ Metaphor — တိုက်ရိုက် ခေါ်ဆိုသည် ('the city was a furnace')။ Personification — သက်မဲ့ကို လူကဲ့သို့ ဖော်ပြသည်။",
          "ပုံရိပ်တိုင်း အဓိပ္ပာယ် မထည့်သင့်ပါ — စာသား အထောက်အထား ရှိမှ ခန့်မှန်းသည်။",
        ],
      },
    ],
    examples: [
      { en: "The old house still remembered the sound of her laughter.", mm: "အိမ်အိုကြီးက သူမ၏ ရယ်သံကို အမှတ်ရနေဆဲ ဖြစ်သည်။", note: "personification + လွမ်းဆွတ်မှု။" },
      { en: "His words were stones thrown into a quiet pond.", mm: "သူ၏ စကားများက ငြိမ်သက်သော ရေကန်ထဲ ပစ်ချလိုက်သည့် ကျောက်ခဲများ ဖြစ်သည်။", note: "metaphor — အနှောင့်အယှက် ဖြစ်စေမှု။" },
      { en: "'How wonderful,' she said, staring at the broken window.", mm: "'အလွန် ကောင်းလိုက်တာ' ဟု သူမက ကျိုးနေသည့် ပြတင်းပေါက်ကို ကြည့်ရင်း ဆိုသည်။", note: "irony။" },
    ],
    mistakes: [
      { wrong: "ဇာတ်ကောင်ကို စာရေးသူနှင့် ရောထွေးခြင်း", right: "ဇာတ်ကောင်၏ အမြင် နှင့် စာသား၏ အဓိပ္ပာယ် ခွဲပါ", why: "ဇာတ်ကောင် မှားနိုင်သည်။" },
      { wrong: "ကိုးကားချက် မပါဘဲ လေသံ ဖော်ပြခြင်း", right: "စကားစု တစ်ခု ကိုးကားပါ", why: "အထောက်အထား လိုသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "'The city was a furnace' is ___.", promptMm: "ရွေးပါ။", options: ["simile", "metaphor", "personification", "hyperbole only"], answer: 1, explanation: "like/as မပါဘဲ တိုက်ရိုက် နှိုင်းယှဉ် → metaphor။", topic: "literature" },
      { type: "mcq", prompt: "'How wonderful,' said while crying shows ___.", promptMm: "ရွေးပါ။", options: ["irony", "simile", "rhyme", "alliteration"], answer: 0, explanation: "ဆန့်ကျင်ဘက် အဓိပ္ပာယ် → irony။", topic: "literature" },
      { type: "fill", prompt: "The ___ tells the story in the text.", promptMm: "ဖြည့်ပါ။", answers: ["narrator"], explanation: "narrator = ဇာတ်ကြောင်း ပြောသူ။", topic: "literature" },
      { type: "correct", prompt: "Correct: The story remember the past.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The story remembers the past."], explanation: "story → remembers။", topic: "literature" },
    ],
    independent: [
      { type: "mcq", prompt: "Rain, grey sky and silence suggest ___.", promptMm: "ရွေးပါ။", options: ["joy", "sadness", "anger", "excitement"], answer: 1, explanation: "ပုံရိပ် → ဝမ်းနည်းမှု။", topic: "literature" },
      { type: "fill", prompt: "The wind whispered through the trees. This is ___.", promptMm: "ဖြည့်ပါ။", answers: ["personification"], explanation: "သက်မဲ့ကို လူကဲ့သို့ ဖော်ပြခြင်း။", topic: "literature" },
      { type: "mcq", prompt: "Best evidence for tone?", promptMm: "ရွေးပါ။", options: ["The story is 4 pages.", "The author uses 'still' and 'once' twice.", "It is written in English.", "It has three characters."], answer: 1, explanation: "စကားလုံး အထောက်အထား။", topic: "literature" },
      { type: "translate", prompt: "Translate: ဒီစာသားရဲ့ လေသံက ဝမ်းနည်းမှုနဲ့ လွမ်းဆွတ်မှု ဖြစ်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["The tone of the passage is sad and nostalgic.", "The tone of this text is sorrowful and nostalgic."], explanation: "tone + be + adjective။", topic: "literature" },
    ],
    review: [
      { q: "လေသံ ဘယ်လို ခန့်မှန်းသလဲ။", a: "စကားလုံး ရွေးချယ်မှု၊ ဝါကျ ဖွဲ့စည်းပုံ နှင့် ပုံရိပ်တို့မှ။" },
      { q: "metaphor နှင့် simile ကွာခြားချက် ဘာလဲ။", a: "simile တွင် like/as ပါသည်။" },
    ],
    summary: ["လေသံကို အထောက်အထား ဖြင့် ဖော်ပြသည်။", "ပုံဆောင်စကား ၃ မျိုး ခွဲခြားနိုင်သည်။", "ဇာတ်ကောင်၏ အမြင်ကို စာရေးသူ၏ အမြင်နှင့် မရောပါ။"],
    mastery: ["စာသား ၁ ခုမှ လေသံ ၁ ခု ကိုးကားချက်ဖြင့် ဖော်ပြနိုင်သည်။", "ပုံဆောင်စကား ၅ ခု ခွဲခြားနိုင်သည်။"],
    topics: ["reading", "literature", "tone"],
  },
  {
    id: "f11-vocabulary-in-context",
    moduleId: "F",
    title: "Reading: Vocabulary in Context",
    titleMm: "ဖတ်ရှုမှု — အခြေအနေမှ ဝေါဟာရ ခန့်မှန်းခြင်း",
    level: "B2",
    minutes: 20,
    summaryLine: "မသိသည့် စကားလုံးကို ဝါကျ အခြေအနေ၊ စကားလုံး အစိတ်အပိုင်း နှင့် ဆက်စပ်မှုမှ ခန့်မှန်းနည်း။",
    objectives: ["အခြေအနေမှ အဓိပ္ပာယ် ခန့်မှန်းနိုင်မည်။", "prefix/suffix ဖြင့် အဓိပ္ပာယ် ခွဲနိုင်မည်။", "synonym/antonym သဲလွန်စ သုံးနိုင်မည်။"],
    vocab: [
      { en: "context", mm: "အခြေအနေ/ဝါကျ ပတ်ဝန်းကျင်", pos: "noun", example: "Guess the meaning from context.", exampleMm: "အခြေအနေမှ အဓိပ္ပာယ် ခန့်မှန်းပါ။", topic: "vocabulary", level: "B1" },
      { en: "prefix", mm: "စကားလုံး အရှေ့ဆက်", pos: "noun", example: "'Un-' is a negative prefix.", exampleMm: "'un-' သည် အနုတ်လက္ခဏာ အရှေ့ဆက် ဖြစ်သည်။", topic: "vocabulary", level: "B1" },
      { en: "synonym", mm: "အဓိပ္ပာယ် တူသော စကားလုံး", pos: "noun", example: "'Big' is a synonym of 'large'.", exampleMm: "'big' သည် 'large' ၏ အဓိပ္ပာယ်တူ စကားလုံး ဖြစ်သည်။", topic: "vocabulary", level: "B1" },
    ],
    sections: [
      {
        heading: "ခန့်မှန်းသည့် အဆင့် ၄ ဆင့်",
        body: [
          "၁) စကားလုံး အမျိုးအစား (နာမ်/ကြိယာ/နာမဝိသေသန) ကို ကြည့်သည် — ဝါကျတွင် ဘယ်နေရာ ရှိသလဲ။",
          "၂) ဝါကျ အနှစ်သာရ (positive/negative) ကို ကြည့်သည် — 'although', 'but', 'however' က ဆန့်ကျင်ဘက် အဓိပ္ပာယ် ပေးသည်။",
          "၃) အရှေ့ဆက်/အဆက်များ — un-, in-, dis-, re-, -less, -ful, -tion, -able။ ၄) အခြားစကားလုံးနှင့် ဆက်စပ်မှု (collocation) ကို ကြည့်သည်။",
        ],
        table: { headers: ["အရှေ့ဆက်/အဆက်", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["un-/in-/dis-", "မဟုတ်/ဆန့်ကျင်ဘက်", "unclear, incomplete"], ["re-", "ပြန်လုပ်", "rewrite"], ["-less", "မရှိ", "careless"], ["-able", "နိုင်သည်", "readable"]] },
      },
      {
        heading: "မလုပ်သင့်သည့် အချက်",
        body: [
          "စကားလုံး တစ်လုံးတည်းကို ကြည့်ပြီး ခန့်မှန်း မလုပ်ပါနှင့်။ 'The plan was sound' တွင် 'sound' သည် 'အသံ' မဟုတ်ဘဲ 'ခိုင်မာသည်' ဖြစ်သည်။",
          "ခန့်မှန်းချက်ကို စာသားထဲ ပြန်ထည့်ကြည့်ပြီး အဓိပ္ပာယ် ကိုက်ညီမှုကို စစ်သည်။",
        ],
      },
    ],
    examples: [
      { en: "The instructions were ambiguous, so nobody knew what to do.", mm: "ညွှန်ကြားချက်များက မရှင်းလင်းသဖြင့် ဘာလုပ်ရမည်ကို မည်သူမှ မသိခဲ့ပါ။", note: "ambiguous ≈ unclear။" },
      { en: "She was hopeful, although the results were disappointing.", mm: "ရလဒ်များ စိတ်ပျက်စရာ ဖြစ်ခဲ့သော်လည်း သူမ မျှော်လင့်ချက် ရှိနေသည်။", note: "although → ဆန့်ကျင်ဘက်။" },
      { en: "The device is portable and easy to carry.", mm: "စက်ပစ္စည်းက သယ်ဆောင်ရ လွယ်ကူသည်။", note: "portable ≈ easy to carry။" },
    ],
    mistakes: [
      { wrong: "false friend ကို မိခင်ဘာသာစကားအရ ကောက်ယူခြင်း", right: "အင်္ဂလိပ် အခြေအနေအတိုင်း ခန့်မှန်းပါ", why: "အဓိပ္ပာယ် ကွဲပြားနိုင်သည်။" },
      { wrong: "ခန့်မှန်းချက်ကို မစစ်ဆေးခြင်း", right: "ဝါကျထဲ ပြန်ထည့် စမ်းပါ", why: "အဓိပ္ပာယ် မကိုက်လျှင် မှားသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "'Incomplete' means ___.", promptMm: "ရွေးပါ။", options: ["finished", "not finished", "too long", "written again"], answer: 1, explanation: "in- = မ…သေး။", topic: "vocabulary" },
      { type: "mcq", prompt: "'He was reluctant, although he agreed.' Reluctant means ___.", promptMm: "ရွေးပါ။", options: ["eager", "unwilling", "angry", "quick"], answer: 1, explanation: "although → ဆန့်ကျင်ဘက်။", topic: "vocabulary" },
      { type: "fill", prompt: "'Careless' contains the suffix ___.", promptMm: "ဖြည့်ပါ။", answers: ["-less"], explanation: "-less = မရှိ။", topic: "vocabulary" },
      { type: "correct", prompt: "Correct: The news was very interested.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The news was very interesting."], explanation: "အရာဝတ္ထု → -ing။", topic: "vocabulary" },
    ],
    independent: [
      { type: "mcq", prompt: "'Rewrite' means ___.", promptMm: "ရွေးပါ။", options: ["write again", "write badly", "not write", "write first"], answer: 0, explanation: "re- = ပြန်လုပ်။", topic: "vocabulary" },
      { type: "fill", prompt: "The plan was ___; everyone agreed it was strong. (ခိုင်မာသည်)", promptMm: "ဖြည့်ပါ။", answers: ["sound"], explanation: "sound = ခိုင်မာသည်။", topic: "vocabulary" },
      { type: "mcq", prompt: "Which word is a synonym of 'brief'?", promptMm: "ရွေးပါ။", options: ["short", "long", "loud", "old"], answer: 0, explanation: "brief = short။", topic: "vocabulary" },
      { type: "translate", prompt: "Translate: ဒီဝါကျမှာ ဒီစကားလုံးရဲ့ အဓိပ္ပာယ်က မရှင်းလင်းဘူး။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["The meaning of this word is unclear in this sentence.", "The meaning of the word is not clear in this sentence."], explanation: "unclear / not clear။", topic: "vocabulary" },
    ],
    review: [
      { q: "အခြေအနေမှ ခန့်မှန်းသည့် အဆင့် ၄ ဆင့် ဘာလဲ။", a: "စကားလုံး အမျိုးအစား၊ ဝါကျ အနှစ်သာရ၊ အရှေ့ဆက်/အဆက်၊ collocation။" },
      { q: "ခန့်မှန်းချက် မှန်/မမှန် ဘယ်လို စစ်သလဲ။", a: "ဝါကျထဲ ပြန်ထည့်ပြီး အဓိပ္ပာယ် ကိုက်ညီမှု စစ်သည်။" },
    ],
    summary: ["အရှေ့ဆက်/အဆက်က အဓိပ္ပာယ် အများကြီး ပေးသည်။", "although/but က ဆန့်ကျင်ဘက် သဲလွန်စ ဖြစ်သည်။", "ခန့်မှန်းချက်ကို အမြဲ ပြန်စစ်သည်။"],
    mastery: ["မသိသည့် စကားလုံး ၁၀ ခုတွင် ၈ ခု ခန့်မှန်းနိုင်သည်။", "အရှေ့ဆက်/အဆက် ၈ ခု ဖြေနိုင်သည်။"],
    topics: ["reading", "vocabulary", "guessing"],
  },
  {
    id: "f12-speed-reading",
    moduleId: "F",
    title: "Reading: Speed Reading Skills",
    titleMm: "ဖတ်ရှုမှု — အမြန် ဖတ်နည်း",
    level: "B2",
    minutes: 20,
    summaryLine: "skimming, scanning နှင့် အဓိကအချက် ရှာနည်းဖြင့် ဖတ်နှုန်း တိုးပြီး နားလည်မှု မလျော့စေရန် လေ့ကျင့်သည်။",
    objectives: ["skimming နှင့် scanning ခွဲခြားနိုင်မည်။", "အဓိကဝါကျ ရှာနိုင်မည်။", "ဖတ်နှုန်း တိုင်းတာနိုင်မည်။"],
    vocab: [
      { en: "skim", mm: "အမြန် ဖတ်ပြီး အဓိကအချက် ယူသည်", pos: "verb", example: "Skim the article first.", exampleMm: "ဆောင်းပါးကို အရင် အမြန် ဖတ်ပါ။", topic: "speed reading", level: "B2" },
      { en: "scan", mm: "အချက်အလက် တစ်ခု ရှာသည်", pos: "verb", example: "Scan the text for dates.", exampleMm: "စာသားထဲ ရက်စွဲများ ရှာပါ။", topic: "speed reading", level: "B2" },
      { en: "topic sentence", mm: "အပိုဒ်၏ အဓိကဝါကျ", pos: "noun", example: "The topic sentence is usually first.", exampleMm: "အဓိကဝါကျက များသောအားဖြင့် ပထမတွင် ရှိသည်။", topic: "speed reading", level: "B1" },
    ],
    sections: [
      {
        heading: "နည်းလမ်း ၂ မျိုး",
        body: [
          "Skimming — အဓိကအချက် ရရန် အမြန် ဖတ်သည်။ ခေါင်းစဉ်၊ ပထမ/နောက်ဆုံး ဝါကျ၊ ဇယား ကို ကြည့်သည်။",
          "Scanning — ဂဏန်း၊ အမည်၊ ရက်စွဲ ကဲ့သို့ အချက်တစ်ခုကို ရှာသည်။ စကားလုံး အားလုံးကို မဖတ်ဘဲ ပုံသဏ္ဌာန် လိုက် ရှာသည်။",
          "ဖတ်နှုန်း တိုင်းတာ — စကားလုံး အရေအတွက် ÷ မိနစ်။ နားလည်မှု စစ်ရန် အဓိကအချက် ၃ ခု ပြန်ပြောသည်။",
        ],
        table: { headers: ["နည်း", "ရည်ရွယ်ချက်", "အမြန်နှုန်း"], rows: [["skim", "အဓိကအနှစ်သာရ", "အလွန် မြန်"], ["scan", "အချက်တစ်ခု", "အလွန် မြန်"], ["detailed", "အပြည့်အစုံ နားလည်", "ပုံမှန်"], ["intensive", "ဘာသာစကား လေ့လာ", "နှေး"]] },
      },
      {
        heading: "အာရုံ မလွဲစေရန်",
        body: [
          "စကားလုံး တစ်လုံးချင်း မဖတ်ဘဲ စကားစု (chunk) ၃–၅ လုံးအုပ်စုဖြင့် ဖတ်သည်။ လက်ညှိုးဖြင့် လိုက်ခြင်းက အာရုံ စုစည်းမှု ကူညီသည်။",
          "မသိသည့် စကားလုံးအတွက် ရပ်မနေပါနှင့်။ အဓိကအချက် ရပြီးမှ ပြန်ကြည့်သည်။",
        ],
      },
    ],
    examples: [
      { en: "Skim: read the first sentence of each paragraph.", mm: "အပိုဒ်တိုင်း၏ ပထမ ဝါကျကို ဖတ်ပါ။" },
      { en: "Scan: look for '2024' and 'budget'.", mm: "'2024' နှင့် 'budget' ကို ရှာပါ။" },
      { en: "I read 300 words in 2 minutes, so my speed is 150 wpm.", mm: "၂ မိနစ်အတွင်း စကားလုံး ၃၀၀ ဖတ်ခဲ့သဖြင့် ဖတ်နှုန်းက ၁၅၀ wpm ဖြစ်သည်။" },
    ],
    mistakes: [
      { wrong: "skimming လုပ်ရင်း အသေးစိတ် မှတ်မိရန် မျှော်လင့်ခြင်း", right: "skimming သည် အဓိကအချက်အတွက်သာ", why: "အသေးစိတ် လိုလျှင် detailed reading လုပ်ရသည်။" },
      { wrong: "နှုန်းတင်ရန် နားလည်မှု လျော့ချခြင်း", right: "နားလည်မှု ၇၀% အောက် မကျအောင် ထိန်းပါ", why: "မနားလည်လျှင် ဖတ်ခြင်း အကျိုး မရှိ။" },
    ],
    guided: [
      { type: "mcq", prompt: "Looking for a phone number is ___.", promptMm: "ရွေးပါ။", options: ["skimming", "scanning", "intensive reading", "reading aloud"], answer: 1, explanation: "အချက်တစ်ခု ရှာခြင်း → scanning။", topic: "speed reading" },
      { type: "mcq", prompt: "The main idea of a paragraph is often in the ___.", promptMm: "ရွေးပါ။", options: ["topic sentence", "last word", "title only", "footnote"], answer: 0, explanation: "topic sentence။", topic: "speed reading" },
      { type: "fill", prompt: "If you read 600 words in 4 minutes, your speed is ___ wpm.", promptMm: "ဖြည့်ပါ။", answers: ["150"], explanation: "600 ÷ 4 = 150။", topic: "speed reading" },
      { type: "correct", prompt: "Correct: Skim the text for find the main idea.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["Skim the text to find the main idea."], explanation: "to find (infinitive of purpose)။", topic: "speed reading" },
    ],
    independent: [
      { type: "mcq", prompt: "Which task needs scanning?", promptMm: "ရွေးပါ။", options: ["Understanding the argument", "Finding a date", "Learning new grammar", "Writing a summary"], answer: 1, explanation: "ရက်စွဲ ရှာခြင်း → scanning။", topic: "speed reading" },
      { type: "fill", prompt: "Read in ___ of three to five words.", promptMm: "ဖြည့်ပါ။", answers: ["chunks"], explanation: "chunks of words။", topic: "speed reading" },
      { type: "mcq", prompt: "You read 900 words in 6 minutes. Speed?", promptMm: "ရွေးပါ။", options: ["100 wpm", "150 wpm", "200 wpm", "300 wpm"], answer: 1, explanation: "900 ÷ 6 = 150။", topic: "speed reading" },
      { type: "translate", prompt: "Translate: ဒီစာသားကို အမြန်ဖတ်ပြီး အဓိကအချက် ပြောပါ။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Skim the text and tell me the main idea.", "Skim the passage and give the main point."], explanation: "skim + and + imperative။", topic: "speed reading" },
    ],
    review: [
      { q: "skimming နှင့် scanning ကွာခြားချက် ဘာလဲ။", a: "skimming = အဓိကအနှစ်သာရ၊ scanning = အချက်တစ်ခု ရှာခြင်း။" },
      { q: "wpm ဘယ်လို တွက်သလဲ။", a: "စကားလုံး အရေအတွက် ÷ မိနစ်။" },
    ],
    summary: ["ရည်ရွယ်ချက်အလိုက် ဖတ်နည်း ရွေးသည်။", "စကားစု အုပ်စုဖြင့် ဖတ်ခြင်း မြန်စေသည်။", "နှုန်း တင်လျှင် နားလည်မှု မလျော့စေရ။"],
    mastery: ["skimming/scanning လုပ်ငန်း ၁၀ ခုတွင် ၈ ခု မှန်ကန်စွာ ရွေးနိုင်သည်။", "ကိုယ်ပိုင် wpm တိုင်းတာနိုင်သည်။"],
    topics: ["reading", "speed reading", "exam strategy"],
  },
  {
    id: "f13-exam-reading",
    moduleId: "F",
    title: "Reading: Exam Techniques",
    titleMm: "ဖတ်ရှုမှု — စာမေးပွဲ နည်းစနစ်",
    level: "B2",
    minutes: 24,
    summaryLine: "True/False/Not Given, matching headings နှင့် multiple choice အတွက် အချိန် စီမံမှု နှင့် ထောင်ချောက် ရှောင်နည်း။",
    objectives: ["မေးခွန်း အမျိုးအစား ၄ ခု ခွဲခြားနိုင်မည်။", "Not Given နှင့် False ကို ကွဲပြားစွာ ဆုံးဖြတ်နိုင်မည်။", "အချိန် စီမံနိုင်မည်။"],
    vocab: [
      { en: "Not Given", mm: "စာသားတွင် မပါရှိခြင်း", pos: "phrase", example: "The answer is Not Given.", exampleMm: "အဖြေက စာသားတွင် မပါ။", topic: "exam reading", level: "B2" },
      { en: "heading", mm: "ခေါင်းစဉ်", pos: "noun", example: "Choose the best heading.", exampleMm: "အကောင်းဆုံး ခေါင်းစဉ်ကို ရွေးပါ။", topic: "exam reading", level: "B1" },
      { en: "keyword", mm: "အဓိက စကားလုံး", pos: "noun", example: "Underline the keywords.", exampleMm: "အဓိက စကားလုံးများကို မျဉ်းသားပါ။", topic: "exam reading", level: "B1" },
    ],
    sections: [
      {
        heading: "True / False / Not Given",
        body: [
          "TRUE — စာသားက မေးခွန်းကို ထောက်ခံသည်။ FALSE — စာသားက ဆန့်ကျင်သည်။ NOT GIVEN — စာသားတွင် မပါပါ။",
          "အရေးကြီးချက် — ကိုယ်ပိုင် ဗဟုသုတ မသုံးပါနှင့်။ စာသား အထောက်အထား မရှိလျှင် NOT GIVEN ဖြစ်သည်။",
          "မေးခွန်းထဲ စကားလုံး တစ်လုံး ကွာခြားမှုကို သတိထားသည် — 'all' vs 'some', 'always' vs 'often', 'increase' vs 'cause'။",
        ],
        table: { headers: ["အဖြေ", "အဓိပ္ပာယ်", "စစ်ဆေးရန်"], rows: [["TRUE", "ထောက်ခံ", "တူညီသည့် အချက် ရှာ"], ["FALSE", "ဆန့်ကျင်", "ဆန့်ကျင်သည့် အချက် ရှာ"], ["NOT GIVEN", "မပါ", "မပါကြောင်း သေချာအောင် ရှာ"]] },
      },
      {
        heading: "အချိန် စီမံမှု",
        body: [
          "မိနစ် ၆၀၊ စာသား ၃ ပုဒ် → တစ်ပုဒ်လျှင် မိနစ် ၁၇–၂၀ (မေးခွန်း ဖတ်ချိန် အပါ)။ မေးခွန်း တစ်ခုတွင် မိနစ် ၁ ကျော်လျှင် ကျော်ပြီး နောက်တစ်ခု ဆက်သည်။",
          "Matching headings အတွက် အပိုဒ်တိုင်း၏ အဓိကအချက် (မိမိစကားဖြင့်) ကို ဦးစွာ ရေးပြီး ခေါင်းစဉ်နှင့် တွဲသည်။",
        ],
      },
    ],
    examples: [
      { en: "Text: The course is open to all students. Question: Only final-year students can join. → FALSE", mm: "စာသား — ကျောင်းသား အားလုံး တက်နိုင်သည်။ မေးခွန်း — နောက်ဆုံးနှစ် ကျောင်းသားများသာ။ → FALSE" },
      { en: "Text: Some participants reported fatigue. Question: Most participants were tired. → NOT GIVEN", mm: "စာသား — အချို့ ပင်ပန်းသည်ဟု ဆိုသည်။ မေးခွန်း — အများစု ပင်ပန်းသည်။ → NOT GIVEN" },
      { en: "Underline keywords before you read the passage in detail.", mm: "စာသားကို အသေးစိတ် မဖတ်မီ အဓိက စကားလုံးများကို မျဉ်းသားပါ။" },
    ],
    mistakes: [
      { wrong: "ကိုယ်ပိုင် ဗဟုသုတဖြင့် TRUE/FALSE ဆုံးဖြတ်ခြင်း", right: "စာသား အထောက်အထား သာ သုံးပါ", why: "စာမေးပွဲက စာသား နားလည်မှုကို စမ်းသည်။" },
      { wrong: "မသေချာလျှင် FALSE ရွေးခြင်း", right: "ဆန့်ကျင်သည့် အထောက်အထား မရှိလျှင် NOT GIVEN", why: "False = ဆန့်ကျင်ချက် ရှိရသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Text: 'The library opens at 9.' Question: 'The library opens at 10.' Answer?", promptMm: "ရွေးပါ။", options: ["True", "False", "Not Given", "Cannot decide"], answer: 1, explanation: "ဆန့်ကျင်ချက် ရှိသည်။", topic: "exam reading" },
      { type: "mcq", prompt: "Text: 'Many students use the app.' Question: 'The app was designed by students.' Answer?", promptMm: "ရွေးပါ။", options: ["True", "False", "Not Given", "Partly true"], answer: 2, explanation: "ဒီဇိုင်နာ အကြောင်း မပါ။", topic: "exam reading" },
      { type: "fill", prompt: "TRUE means the passage ___ the statement.", promptMm: "ဖြည့်ပါ။", answers: ["supports", "agrees with"], explanation: "supports။", topic: "exam reading" },
      { type: "correct", prompt: "Correct: The passage doesn't says the price.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The passage doesn't say the price."], explanation: "doesn't + verb မူလပုံစံ။", topic: "exam reading" },
    ],
    independent: [
      { type: "mcq", prompt: "You cannot find evidence either way. Answer?", promptMm: "ရွေးပါ။", options: ["True", "False", "Not Given", "Leave blank"], answer: 2, explanation: "အထောက်အထား မရှိ → Not Given။", topic: "exam reading" },
      { type: "fill", prompt: "Underline ___ before reading in detail.", promptMm: "ဖြည့်ပါ။", answers: ["keywords"], explanation: "keywords။", topic: "exam reading" },
      { type: "mcq", prompt: "Best time plan for 60 minutes, 3 passages?", promptMm: "ရွေးပါ။", options: ["20 minutes each", "35/15/10", "10/40/10", "50/5/5"], answer: 0, explanation: "တူညီစွာ ခွဲခြင်း။", topic: "exam reading" },
      { type: "translate", prompt: "Translate: ဒီအချက်အလက်က စာသားထဲမှာ မပါဘူး။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["This information is not given in the passage.", "That detail is not stated in the text."], explanation: "is not given/stated။", topic: "exam reading" },
    ],
    review: [
      { q: "False နှင့် Not Given ကွာခြားချက် ဘာလဲ။", a: "False = စာသားက ဆန့်ကျင်သည်၊ Not Given = မပါ။" },
      { q: "အချိန် စီမံမှု ဘယ်လို လုပ်သလဲ။", a: "စာသား အရေအတွက်ဖြင့် ညီတူညီမျှ ခွဲပြီး မေးခွန်းတစ်ခုတွင် မကြာစေရ။" },
    ],
    summary: ["အဖြေကို စာသား အထောက်အထားဖြင့်သာ ဆုံးဖြတ်သည်။", "False နှင့် Not Given ကို ခွဲခြားသည်။", "အချိန် စီမံမှုက အမှတ် တိုးစေသည်။"],
    mastery: ["True/False/Not Given ၁၀ ခုတွင် ၈ ခု မှန်သည်။", "မိနစ် ၂၀ အတွင်း စာသားတစ်ပုဒ် ပြီးစီးနိုင်သည်။"],
    topics: ["reading", "exam strategy", "IELTS"],
  },
  {
    id: "f14-summarising-sources",
    moduleId: "F",
    title: "Reading: Summarising Sources",
    titleMm: "ဖတ်ရှုမှု — ရင်းမြစ် အနှစ်ချုပ်ခြင်း",
    level: "C1",
    minutes: 22,
    summaryLine: "ရင်းမြစ်တစ်ခုမှ အဓိကအချက် ရွေးထုတ်ပြီး ကိုယ်ပိုင်စကားဖြင့် အနှစ်ချုပ် ရေးနည်း။",
    objectives: ["အဓိကအချက် နှင့် အထောက်အချက် ခွဲခြားနိုင်မည်။", "ကိုယ်ပိုင်စကားဖြင့် ပြန်ရေးနိုင်မည်။", "ကိုးကား မှတ်တမ်း ရေးနိုင်မည်။"],
    vocab: [
      { en: "summarise", mm: "အနှစ်ချုပ်သည်", pos: "verb", example: "Summarise the article in three sentences.", exampleMm: "ဆောင်းပါးကို ဝါကျ သုံးကြောင်းဖြင့် အနှစ်ချုပ်ပါ။", topic: "summarising", level: "B2" },
      { en: "paraphrase", mm: "အခြားစကားဖြင့် ပြန်ဆိုသည်", pos: "verb", example: "Paraphrase the sentence.", exampleMm: "ဝါကျကို အခြားစကားဖြင့် ပြန်ဆိုပါ။", topic: "summarising", level: "B2" },
      { en: "in other words", mm: "တစ်နည်းအားဖြင့်", pos: "phrase", example: "In other words, the cost matters more than speed.", exampleMm: "တစ်နည်းအားဖြင့် ကုန်ကျစရိတ်က အမြန်နှုန်းထက် ပိုအရေးကြီးသည်။", topic: "summarising", level: "B2" },
    ],
    sections: [
      {
        heading: "အနှစ်ချုပ် အဆင့် ၄ ဆင့်",
        body: [
          "၁) အပိုဒ်တိုင်း၏ အဓိကအချက် ကို ကိုယ်ပိုင် စကားလုံး ၅–၈ လုံးဖြင့် ရေးသည်။ ၂) ထပ်နေသည့် အချက် နှင့် ဥပမာများကို ဖယ်သည်။",
          "၃) အချက်များကို အကြောင်းရင်း-အကျိုး/အစီအစဉ်ဖြင့် ဆက်စပ်သည်။ ၄) ကိုးကား — စာရေးသူ၊ ခုနှစ်၊ ခေါင်းစဉ် ကို မှတ်တမ်းတင်သည်။",
          "အနှစ်ချုပ်တွင် ကိုယ်ပိုင် အမြင်ကို မထည့်ပါ (လိုလျှင် သီးခြား ဝါကျဖြင့် ဖော်ပြသည်)။",
        ],
        table: { headers: ["လုပ်ဆောင်ချက်", "မှန်", "မှား"], rows: [["ရွေးထုတ်", "အဓိက ၃ ချက် ထားရှိ", "အချက်အားလုံး ပြန်ရေး"], ["ပြန်ရေး", "ကိုယ်ပိုင် စကားလုံး", "မူရင်း စကားစု ကူးချ"], ["ကိုးကား", "စာရေးသူ + ခုနှစ်", "မဖော်ပြခြင်း"]] },
      },
      {
        heading: "ပြန်ရေး နည်းလမ်းများ",
        body: [
          "Synonym ပြောင်းခြင်း — 'increase' → 'rise'။ ဝါကျ ဖွဲ့စည်းပုံ ပြောင်းခြင်း — 'The team completed the study' → 'The study was completed by the team'။",
          "စကားလုံး အမျိုးအစား ပြောင်းခြင်း — 'They decided quickly' → 'Their decision was quick'။",
        ],
      },
    ],
    examples: [
      { en: "Original: The programme improved attendance by 15 percent among younger students.", mm: "မူရင်း — အစီအစဉ်က ငယ်ရွယ်သည့် ကျောင်းသားများ၏ တက်ရောက်မှုကို ၁၅ ရာခိုင်နှုန်း တိုးစေခဲ့သည်။" },
      { en: "Summary: According to Smith (2023), the programme raised attendance for younger learners by 15 percent.", mm: "အနှစ်ချုပ် — Smith (2023) အရ အစီအစဉ်က ငယ်ရွယ်သူများ၏ တက်ရောက်မှုကို ၁၅% တိုးစေခဲ့သည်။" },
      { en: "In other words, the scheme worked best for the youngest group.", mm: "တစ်နည်းအားဖြင့် အစီအစဉ်က အငယ်ဆုံး အုပ်စုအတွက် အကောင်းဆုံး အလုပ်ဖြစ်ခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "မူရင်း စကားစုကို အတိအကျ ကူးချခြင်း", right: "ကိုယ်ပိုင် စကားလုံးဖြင့် ပြန်ရေးပါ", why: "ကူးချခြင်းသည် အနှစ်ချုပ် မဟုတ်ပါ။" },
      { wrong: "ကိုယ်ပိုင် အမြင်ကို အနှစ်ချုပ်ထဲ ရောခြင်း", right: "အနှစ်ချုပ်နှင့် အကဲဖြတ်ချက် ခွဲပါ", why: "ရင်းမြစ်နှင့် ကိုယ်ပိုင် အမြင် မရောသင့်။" },
    ],
    guided: [
      { type: "mcq", prompt: "A good summary contains ___.", promptMm: "ရွေးပါ။", options: ["every example", "the main points", "your opinion", "the full text"], answer: 1, explanation: "အဓိက အချက်များ။", topic: "summarising" },
      { type: "mcq", prompt: "Which is paraphrasing?", promptMm: "ရွေးပါ။", options: ["Copying the sentence", "Changing words and structure", "Deleting the sentence", "Quoting in full"], answer: 1, explanation: "စကားလုံး နှင့် ဖွဲ့စည်းပုံ ပြောင်းခြင်း။", topic: "summarising" },
      { type: "fill", prompt: "___ other words, the cost is the main issue.", promptMm: "ဖြည့်ပါ။", answers: ["In"], explanation: "in other words။", topic: "summarising" },
      { type: "correct", prompt: "Correct: According to Smith (2023) say that attendance rose.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["According to Smith (2023), attendance rose.", "Smith (2023) says that attendance rose."], explanation: "According to + noun phrase။", topic: "summarising" },
    ],
    independent: [
      { type: "mcq", prompt: "What is left out of a summary?", promptMm: "ရွေးပါ။", options: ["Main claims", "Repeated details", "The topic", "The source"], answer: 1, explanation: "ထပ်နေသည့် အသေးစိတ်။", topic: "summarising" },
      { type: "fill", prompt: "Summarise the text ___ three sentences.", promptMm: "ဖြည့်ပါ။", answers: ["in"], explanation: "in three sentences။", topic: "summarising" },
      { type: "mcq", prompt: "Which keeps the source visible?", promptMm: "ရွေးပါ။", options: ["The study shows…", "According to Lee (2022), …", "Everyone knows…", "It is obvious…"], answer: 1, explanation: "စာရေးသူ + ခုနှစ်။", topic: "summarising" },
      { type: "translate", prompt: "Translate: ဒီဆောင်းပါးက အတန်းတက်မှုနှုန်း တိုးတယ်လို့ ဆိုတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["The article says that attendance has increased.", "The article states that attendance increased."], explanation: "says/states that + clause။", topic: "summarising" },
    ],
    review: [
      { q: "အနှစ်ချုပ် အဆင့် ၄ ဆင့် ဘာလဲ။", a: "အဓိကအချက် ရေး၊ ထပ်နေသည့် အချက် ဖယ်၊ ဆက်စပ်၊ ကိုးကား။" },
      { q: "အနှစ်ချုပ်တွင် ကိုယ်ပိုင် အမြင် ထည့်သင့်သလား။", a: "မထည့်သင့်ပါ။" },
    ],
    summary: ["အဓိကအချက်ကို ရွေးထုတ်ခြင်းက အနှစ်ချုပ်၏ အခြေခံ။", "ကိုယ်ပိုင်စကားဖြင့် ပြန်ရေးသည်။", "ကိုးကား အမြဲ ဖော်ပြသည်။"],
    mastery: ["စာသား ၁ ခုကို ဝါကျ ၃ ကြောင်းဖြင့် အနှစ်ချုပ်နိုင်သည်။", "မူရင်းစကားစု မကူးဘဲ ပြန်ရေးနိုင်သည်။"],
    topics: ["reading", "summarising", "academic writing"],
  },
];

export const moduleEFLessonsPart6: Lesson[] = buildLessons(seeds);
