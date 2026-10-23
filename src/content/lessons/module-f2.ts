import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "f5-news-articles",
    moduleId: "F",
    title: "Reading: News Articles",
    titleMm: "ဖတ်ရှုမှု — သတင်းဆောင်းပါးများ",
    level: "B1",
    minutes: 20,
    summaryLine: "သတင်းဆောင်းပါး၏ ဖွဲ့စည်းပုံ (headline, lead, body) နှင့် အချက်အလက် မှန်ကန်မှုကို စစ်ဆေးနည်း။",
    objectives: ["သတင်း ခေါင်းစဉ် နှင့် lead ကို နားလည်မည်။", "5W1H ဖြင့် အချက် ဖမ်းယူနိုင်မည်။", "သတင်း အရင်းအမြစ် စစ်ဆေးနိုင်မည်။"],
    vocab: [
      { en: "headline", mm: "ခေါင်းစဉ်", pos: "noun", example: "The headline was shocking.", exampleMm: "ခေါင်းစဉ်က အံ့အားသင့်စရာ ဖြစ်ခဲ့သည်။", topic: "news", level: "B1" },
      { en: "lead", mm: "သတင်း၏ ပထမ အပိုဒ်", pos: "noun", example: "The lead summarises the story.", exampleMm: "ပထမ အပိုဒ်က သတင်းကို အနှစ်ချုပ်သည်။", topic: "news", level: "B2" },
      { en: "quote", mm: "ကိုးကားချက်", pos: "noun", example: "The article includes a quote from the minister.", exampleMm: "ဆောင်းပါးတွင် ဝန်ကြီး၏ ကိုးကားချက် ပါဝင်သည်။", topic: "news", level: "B1" },
    ],
    sections: [
      {
        heading: "သတင်း ဖွဲ့စည်းပုံ",
        body: [
          "Headline (ခေါင်းစဉ်) → Lead (အဓိက အချက် ၅W1H) → Body (အသေးစိတ်၊ နောက်ခံ၊ ကိုးကားချက်) → Ending (နောက်ဆက်တွဲ/အခြား အမြင်)။",
          "ခေါင်းစဉ်သည် တိုတိုဖြစ်ရန် article/determiner များ ချန်လှပ်လေ့ ရှိသည် — 'Three arrested after protest' ('Three people were arrested…')။",
          "သတင်း ဘာသာစကား — passive၊ အတိတ်ကာလ၊ reporting verb (said, confirmed, denied)။",
        ],
        table: { headers: ["အပိုင်း", "ရည်ရွယ်ချက်", "ဖတ်ရန် နည်းလမ်း"], rows: [["Headline", "အာရုံ ဆွဲ", "အချက်အလက် မယုံသေးပါ"], ["Lead", "အဓိက အချက်", "5W1H ရှာ"], ["Body", "အသေးစိတ်/နောက်ခံ", "ကိုးကားချက် ရှာ"], ["Ending", "နောက်ဆက်တွဲ", "အခြား အမြင်"]] },
      },
      {
        heading: "ယုံကြည်စိတ်ချရမှု စစ်ဆေးခြင်း",
        body: [
          "မေးခွန်း ၄ ခု — မည်သူ ရေးသလဲ။ မည်သည့် သတင်းဌာန လဲ။ ရင်းမြစ် ဖော်ပြသလား။ ရက်စွဲ ဘယ်တော့လဲ။",
          "'Sources say' ကဲ့သို့ အမည်မဖော်သည့် ရင်းမြစ်များ ပါလျှင် သတိထားဖတ်သည်။ အခြား သတင်းဌာန နှစ်ခုက အတည်ပြုမှ ယုံကြည်မှု တိုးသည်။",
        ],
      },
    ],
    examples: [
      { en: "Three people were arrested after the protest on Tuesday.", mm: "အင်္ဂါနေ့ ဆန္ဒပြပွဲ အပြီး လူသုံးဦး အဖမ်းခံခဲ့ရသည်။", note: "lead — 5W1H ပြည့်စုံ။" },
      { en: "A police spokesperson said the investigation was continuing.", mm: "ရဲ တာဝန်ရှိသူတစ်ဦးက စုံစမ်းစစ်ဆေးမှု ဆက်လက်နေသည်ဟု ဆိုခဲ့သည်။" },
      { en: "However, witnesses described a different sequence of events.", mm: "သို့သော် မျက်မြင်သက်သေများက ဖြစ်ရပ် အစီအစဉ် ကွဲပြားစွာ ဖော်ပြခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "ခေါင်းစဉ်တစ်ခုတည်းဖြင့် ကောက်ချက်ချခြင်း", right: "lead နှင့် body ကို ဖတ်ပြီးမှ ကောက်ချက်ချပါ", why: "ခေါင်းစဉ်သည် အာရုံဆွဲရန် ရေးလေ့ ရှိသည်။" },
      { wrong: "news တွင် a news သုံးခြင်း", right: "some news / a news story", why: "news သည် ရေတွက်မရ။" },
    ],
    guided: [
      { type: "mcq", prompt: "The first paragraph of a news story is the ___.", promptMm: "ရွေးပါ။", options: ["headline", "lead", "quote", "caption"], answer: 1, explanation: "lead အပိုဒ်။", topic: "news" },
      { type: "mcq", prompt: "Which is a reporting verb?", promptMm: "ရွေးပါ။", options: ["confirmed", "walked", "opened", "painted"], answer: 0, explanation: "confirmed။", topic: "news" },
      { type: "fill", prompt: "The article includes a ___ from the mayor.", promptMm: "ဖြည့်ပါ။", answers: ["quote"], explanation: "quote = သတင်းထဲတွင် ကိုးကားထားသည့် စကားစု။", topic: "news" },
      { type: "correct", prompt: "Correct: I read a news about the flood.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I read some news about the flood.", "I read a news story about the flood."], explanation: "a news မသုံးပါ။", topic: "news" },
    ],
    independent: [
      { type: "mcq", prompt: "What should you check first for reliability?", promptMm: "ရွေးပါ။", options: ["The font", "The source and date", "The length", "The pictures"], answer: 1, explanation: "ရင်းမြစ် နှင့် ရက်စွဲ။", topic: "news" },
      { type: "fill", prompt: "___ to officials, the road will reopen soon.", promptMm: "ဖြည့်ပါ။", answers: ["According"], explanation: "according to။", topic: "news" },
      { type: "mcq", prompt: "Which phrase shows caution?", promptMm: "ရွေးပါ။", options: ["Everyone knows…", "The report claims that…", "It is obviously true…", "No one doubts…"], answer: 1, explanation: "claims that = သတိထားသော ဖော်ပြချက်။", topic: "news" },
      { type: "translate", prompt: "Translate: သတင်းအရ လူငါးဦး ဒဏ်ရာရခဲ့တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["According to the report, five people were injured.", "The report says five people were injured."], explanation: "were injured။", topic: "news" },
    ],
    review: [
      { q: "သတင်း ဖွဲ့စည်းပုံ ဘာလဲ။", a: "headline → lead → body → ending။" },
      { q: "သတင်း ယုံကြည်ရန် ဘာစစ်သလဲ။", a: "ရင်းမြစ်၊ ရက်စွဲ၊ ကိုးကားချက် နှင့် အခြား သတင်းဌာန အတည်ပြုမှု။" },
    ],
    summary: ["lead အပိုဒ်က အဓိက အချက် ပေးသည်။", "ခေါင်းစဉ်ကို မယုံသေးဘဲ body ဖတ်သည်။", "ရင်းမြစ် နှင့် ရက်စွဲ စစ်ဆေးခြင်း အရေးကြီးသည်။"],
    mastery: ["သတင်း ၃ ပုဒ်မှ 5W1H ဖြည့်နိုင်သည်။", "သတင်း အနှစ်ချုပ် ၃ ကြောင်း ရေးနိုင်သည်။"],
    topics: ["reading", "news", "critical reading"],
  },
  {
    id: "f6-graphs-charts",
    moduleId: "F",
    title: "Reading: Graphs, Charts and Tables",
    titleMm: "ဖတ်ရှုမှု — ဂရပ်၊ ဇယား နှင့် ကိန်းဂဏန်း",
    level: "B2",
    minutes: 22,
    summaryLine: "ဂရပ်/ဇယားမှ အဓိက လမ်းကြောင်း၊ နှိုင်းယှဉ်မှု နှင့် ခန့်မှန်းချက်ကို ဖတ်ပြီး ဖော်ပြနည်း။",
    objectives: ["ဂရပ်မှ လမ်းကြောင်း ဖော်ပြနိုင်မည်။", "ဇယားမှ နှိုင်းယှဉ်ချက် ရေးနိုင်မည်။", "ကိန်းဂဏန်း ဖော်ပြချက် ဝေါဟာရ သုံးနိုင်မည်။"],
    vocab: [
      { en: "increase", mm: "တိုးလာသည်", pos: "verb/noun", example: "Sales increased by ten percent.", exampleMm: "ရောင်းအား ဆယ်ရာခိုင်နှုန်း တိုးခဲ့သည်။", topic: "data", level: "B1" },
      { en: "peak", mm: "အမြင့်ဆုံး အချက်", pos: "noun/verb", example: "Demand peaked in July.", exampleMm: "ဝယ်လိုအားက ဇူလိုင်တွင် အမြင့်ဆုံး ဖြစ်ခဲ့သည်။", topic: "data", level: "B2" },
      { en: "remain stable", mm: "တည်ငြိမ်နေသည်", pos: "phrase", example: "Prices remained stable.", exampleMm: "စျေးနှုန်းများ တည်ငြိမ်နေခဲ့သည်။", topic: "data", level: "B2" },
    ],
    sections: [
      {
        heading: "လမ်းကြောင်း ဖော်ပြခြင်း",
        body: [
          "တိုးခြင်း — increase, rise, grow, climb။ လျော့ခြင်း — decrease, fall, drop, decline။ တည်ငြိမ် — remain stable, level off, stay constant။",
          "အတိုးအလျော့ ပမာဏ — 'by 10 percent' (ပမာဏ)၊ 'to 10 percent' (ရောက်သည့် အချက်)။ 'from 20 to 35' ဟု အစ/အဆုံး ဖော်ပြသည်။",
          "ခန့်မှန်း — 'approximately', 'around', 'just over', 'slightly under', 'nearly'။ ဇယားတွင် တိကျသည့် ဂဏန်း မပါလျှင် ဤစကားလုံးများ သုံးသည်။",
        ],
        table: { headers: ["ပုံစံ", "ဥပမာ", "အဓိပ္ပာယ်"], rows: [["rose sharply", "Sales rose sharply.", "သိသိသာသာ တက်"], ["fell steadily", "Costs fell steadily.", "တဖြည်းဖြည်း ကျ"], ["peaked at", "It peaked at 40%.", "အမြင့်ဆုံး ၄၀%"], ["levelled off", "It levelled off after May.", "ငြိမ်သွား"]] },
      },
      {
        heading: "ဇယား ဖတ်ခြင်း",
        body: [
          "၁) ခေါင်းစဉ် နှင့် ယူနစ် (%, ကျပ်, ဦးရေ) ကို အရင် ဖတ်ပါ။ ၂) ဝန်ဆိုင် (x/y) နှင့် အညွှန်း (legend) ကို စစ်ပါ။ ၃) အမြင့်ဆုံး/အနိမ့်ဆုံး နှင့် လမ်းကြောင်းကို ရှာပါ။",
          "အကြောင်းရင်း နှင့် ရလဒ်ကို မရောပါနှင့်။ ဂရပ်က ဆက်စပ်မှုကို ပြသည်၊ အကြောင်းရင်းကို မပြနိုင်ပါ။",
        ],
      },
    ],
    examples: [
      { en: "The number of online students rose from 200 to 750 between 2020 and 2024.", mm: "အွန်လိုင်း ကျောင်းသား အရေအတွက်က ၂၀၂၀ မှ ၂၀၂၄ အတွင်း ၂၀၀ မှ ၇၅၀ သို့ တိုးခဲ့သည်။" },
      { en: "Rainfall peaked in July at about 300 mm.", mm: "မိုးရေချိန်က ဇူလိုင်တွင် ၃၀၀ မီလီမီတာခန့်ဖြင့် အမြင့်ဆုံး ဖြစ်ခဲ့သည်။" },
      { en: "Prices remained stable for three months before falling slightly.", mm: "စျေးနှုန်းများက သုံးလကြာ တည်ငြိမ်ပြီးနောက် အနည်းငယ် ကျခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "increased with 10 percent", right: "increased by 10 percent", why: "ပမာဏ အတိုးအလျော့ → by။" },
      { wrong: "The graph shows that rain caused the growth.", right: "The graph shows a link between rain and growth.", why: "ဂရပ်က အကြောင်းရင်း မပြနိုင်ပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "Sales ___ by 15 percent last year.", promptMm: "ရွေးပါ။", options: ["rose", "raised", "risen", "raise"], answer: 0, explanation: "rise → rose (intransitive)။", topic: "data" },
      { type: "mcq", prompt: "Prices fell ___ 20 to 15 dollars.", promptMm: "ရွေးပါ။", options: ["by", "from", "to", "of"], answer: 1, explanation: "fell from 20 to 15။", topic: "data" },
      { type: "fill", prompt: "Demand ___ in July and then declined. (အမြင့်ဆုံး ဖြစ်သည်)", promptMm: "ဖြည့်ပါ။", answers: ["peaked"], explanation: "peak → peaked။", topic: "data" },
      { type: "correct", prompt: "Correct: The figure increased with 8 percent.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The figure increased by 8 percent."], explanation: "increase by + ပမာဏ။", topic: "data" },
    ],
    independent: [
      { type: "mcq", prompt: "Which means 'almost'?", promptMm: "ရွေးပါ။", options: ["nearly", "exactly", "double", "half"], answer: 0, explanation: "nearly = နီးပါး။", topic: "data" },
      { type: "fill", prompt: "Numbers ___ stable between May and August.", promptMm: "ဖြည့်ပါ။", answers: ["remained"], explanation: "remained stable။", topic: "data" },
      { type: "mcq", prompt: "What should you read first in a chart?", promptMm: "ရွေးပါ။", options: ["The colours", "The title and units", "The smallest number", "The footnotes only"], answer: 1, explanation: "ခေါင်းစဉ် နှင့် ယူနစ်။", topic: "data" },
      { type: "translate", prompt: "Translate: ဝင်ငွေက ၂၀၂၀ မှ ၂၀၂၄ အတွင်း နှစ်ဆ တိုးခဲ့တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Revenue doubled between 2020 and 2024.", "Revenue doubled from 2020 to 2024."], explanation: "double → doubled။", topic: "data" },
    ],
    review: [
      { q: "increase by နှင့် increase to ကွာခြားချက် ဘာလဲ။", a: "by = ပမာဏ၊ to = ရောက်သည့် အချက်။" },
      { q: "ဂရပ်မှ ဘာကို ကောက်ချက် မချနိုင်သလဲ။", a: "အကြောင်းရင်း-အကျိုး ဆက်စပ်မှု။" },
    ],
    summary: ["လမ်းကြောင်း ဝေါဟာရများကို တိကျစွာ ရွေးသည်။", "by/to/from ဝိဘတာ ကွာခြားချက် အရေးကြီးသည်။", "ဂရပ်က ဆက်စပ်မှုသာ ပြသည်။"],
    mastery: ["ဂရပ်/ဇယား ဖော်ပြချက် ၈ ကြောင်း ရေးနိုင်သည်။", "လမ်းကြောင်း ဝေါဟာရ ၁၀ ခု သုံးနိုင်သည်။"],
    topics: ["reading", "data", "writing"],
  },
  {
    id: "f7-instructions",
    moduleId: "F",
    title: "Reading: Instructions and Procedures",
    titleMm: "ဖတ်ရှုမှု — ညွှန်ကြားချက် နှင့် လုပ်ငန်းစဉ်များ",
    level: "B1",
    minutes: 18,
    summaryLine: "လုပ်ငန်းစဉ် ညွှန်ကြားချက်များကို ဖတ်ပြီး အဆင့်လိုက် လိုက်နာနည်း နှင့် အန္တရာယ် သတိပေးချက် ဖတ်နည်း။",
    objectives: ["imperative ညွှန်ကြားချက် ဖတ်နိုင်မည်။", "အဆင့် အစီအစဉ် နှင့် သတိပေးချက် ခွဲခြားနိုင်မည်။", "ညွှန်ကြားချက်မှ လုပ်ငန်းစဉ် ပြန်ရေးနိုင်မည်။"],
    vocab: [
      { en: "insert", mm: "ထည့်သွင်းသည်", pos: "verb", example: "Insert the card into the slot.", exampleMm: "ကတ်ကို အပေါက်ထဲ ထည့်ပါ။", topic: "instructions", level: "B1" },
      { en: "ensure", mm: "သေချာအောင် လုပ်သည်", pos: "verb", example: "Ensure the device is switched off.", exampleMm: "စက်ကို ပိတ်ထားကြောင်း သေချာအောင် လုပ်ပါ။", topic: "instructions", level: "B2" },
      { en: "caution", mm: "သတိပေးချက်", pos: "noun", example: "Caution: hot surface.", exampleMm: "သတိ — မျက်နှာပြင် ပူသည်။", topic: "instructions", level: "B1" },
    ],
    sections: [
      {
        heading: "ဖွဲ့စည်းပုံ",
        body: [
          "ညွှန်ကြားချက်များသည် imperative (verb မူလပုံစံ) ဖြင့် ရေးလေ့ ရှိသည် — 'Press and hold the button for three seconds.'",
          "အစီအစဉ် စကားလုံး — first, then, next, after that, finally။ ရှေးဦး အခြေအနေ — 'Before you begin, make sure…', 'If the light is red, do not start.'",
          "သတိပေးချက် — Warning (အန္တရာယ်), Caution (ပျက်စီးနိုင်), Note (အချက်အလက်)။ ဤစကားလုံးများ ပါလျှင် အထူး ဂရုစိုက် ဖတ်သည်။",
        ],
        table: { headers: ["စကားလုံး", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["press", "နှိပ်သည်", "Press the green button."], ["hold", "ကိုင်ထားသည်", "Hold for 3 seconds."], ["remove", "ဖယ်ရှားသည်", "Remove the cover."], ["tighten", "တင်းအောင် လုပ်သည်", "Tighten the screw."]] },
      },
      {
        heading: "လိုက်နာရာတွင် သတိထားရန်",
        body: [
          "အဆင့် တစ်ဆင့်ကို မကျော်ပါနှင့်။ 'Do not' နှင့် 'never' ပါသည့် ဝါကျများကို အထူး လိုက်နာသည်။",
          "မရှင်းလင်းလျှင် ခန့်မှန်း မလုပ်ဘဲ မေးသည် သို့မဟုတ် လက်စွဲစာအုပ်/ဝန်ဆောင်မှုဌာနကို ဆက်သွယ်သည်။",
        ],
      },
    ],
    examples: [
      { en: "Before you start, ensure the power is switched off.", mm: "မစတင်မီ ပါဝါ ပိတ်ထားကြောင်း သေချာအောင် လုပ်ပါ။" },
      { en: "Then press and hold the button until the light turns blue.", mm: "ထို့နောက် မီးက ပြာဖြစ်သည်အထိ ခလုတ်ကို နှိပ်ကိုင်ထားပါ။" },
      { en: "Caution: do not use the device near water.", mm: "သတိ — ရေအနီးတွင် စက်ကို မသုံးပါနှင့်။" },
    ],
    mistakes: [
      { wrong: "အဆင့်များကို အစီအစဉ် မလိုက်ဘဲ လုပ်ခြင်း", right: "အဆင့် ၁ မှ အစဉ်လိုက် လုပ်ပါ", why: "အစီအစဉ် မှားလျှင် မအောင်မြင်နိုင်။" },
      { wrong: "Warning စာသားကို ကျော်ဖတ်ခြင်း", right: "Warning/Caution ကို အရင် ဖတ်ပါ", why: "အန္တရာယ် ရှိနိုင်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "___ the card into the slot.", promptMm: "ရွေးပါ။", options: ["Insert", "Inserts", "Inserting", "Inserted"], answer: 0, explanation: "imperative → Insert။", topic: "instructions" },
      { type: "mcq", prompt: "'Caution' warns about ___.", promptMm: "ရွေးပါ။", options: ["a small risk of damage", "a joke", "a price", "a name"], answer: 0, explanation: "ပျက်စီးနိုင်သည့် အန္တရာယ်။", topic: "instructions" },
      { type: "fill", prompt: "___ sure the power is off. (သေချာစေရန်)", promptMm: "ဖြည့်ပါ။", answers: ["Make", "Ensure"], explanation: "make sure / ensure။", topic: "instructions" },
      { type: "correct", prompt: "Correct: Please don't not press this button.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["Please do not press this button."], explanation: "double negative မသုံးပါ။", topic: "instructions" },
    ],
    independent: [
      { type: "mcq", prompt: "Which word shows the last step?", promptMm: "ရွေးပါ။", options: ["First", "Next", "Finally", "Before"], answer: 2, explanation: "finally။", topic: "instructions" },
      { type: "fill", prompt: "___ the cover before cleaning. (ဖယ်ရှား)", promptMm: "ဖြည့်ပါ။", answers: ["Remove"], explanation: "remove။", topic: "instructions" },
      { type: "order", prompt: "Arrange the steps.", promptMm: "စီပါ။", tokens: ["the", "Press", "button", "then", "wait"], answer: "Press the button then wait", explanation: "imperative + then။", topic: "instructions" },
      { type: "translate", prompt: "Translate: မီးနီဖြစ်နေရင် မစတင်ပါနဲ့။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["If the light is red, do not start.", "Don't start if the light is red."], explanation: "if + imperative။", topic: "instructions" },
    ],
    review: [
      { q: "ညွှန်ကြားချက်တွင် ဘယ်ကြိယာ ပုံစံ သုံးသလဲ။", a: "imperative (verb မူလပုံစံ)။" },
      { q: "Warning နှင့် Caution ကွာခြားချက် ဘာလဲ။", a: "Warning = ထိခိုက်မှု အန္တရာယ်၊ Caution = ပျက်စီးနိုင်မှု အန္တရာယ်။" },
    ],
    summary: ["ညွှန်ကြားချက်ကို အဆင့်လိုက် လိုက်နာသည်။", "Warning/Caution ကို ဂရုစိုက်ဖတ်သည်။", "မရှင်းလျှင် မေးခြင်း/လက်စွဲ ကြည့်ခြင်း လုပ်သည်။"],
    mastery: ["ညွှန်ကြားချက် ၈ ဆင့်ကို အစီအစဉ်တကျ ရေးနိုင်သည်။", "သတိပေးချက် ၅ ခု နားလည်သည်။"],
    topics: ["reading", "instructions", "procedures"],
  },
  {
    id: "f8-emails-letters",
    moduleId: "F",
    title: "Reading: Emails and Formal Letters",
    titleMm: "ဖတ်ရှုမှု — အီးမေးလ် နှင့် တရားဝင် စာများ",
    level: "B2",
    minutes: 20,
    summaryLine: "တရားဝင် အီးမေးလ်/စာ၏ ဖွဲ့စည်းပုံ၊ လေသံ နှင့် တောင်းဆိုချက် အဓိပ္ပာယ်ကို ဖတ်ယူနည်း။",
    objectives: ["အီးမေးလ် အပိုင်း ၅ ခု သိမည်။", "formal/informal လေသံ ခွဲခြားနိုင်မည်။", "တောင်းဆိုချက်ကို ရှာနိုင်မည်။"],
    vocab: [
      { en: "Dear Sir or Madam", mm: "ခင်ဗျာ/ရှင် (အမည် မသိလျှင်)", pos: "phrase", example: "Dear Sir or Madam, I am writing to…", exampleMm: "ခင်ဗျာ၊ ကျွန်တော် … ရေးသားအပ်ပါသည်။", topic: "email", level: "B1" },
      { en: "I am writing to", mm: "…ရန်အတွက် ရေးသားအပ်ပါသည်", pos: "phrase", example: "I am writing to apply for the post.", exampleMm: "ရာထူးအတွက် လျှောက်ထားရန် ရေးသားအပ်ပါသည်။", topic: "email", level: "B1" },
      { en: "look forward to", mm: "မျှော်လင့်သည်", pos: "phrase", example: "I look forward to your reply.", exampleMm: "သင့်ပြန်ကြားချက်ကို မျှော်လင့်ပါသည်။", topic: "email", level: "B2" },
    ],
    sections: [
      {
        heading: "ဖွဲ့စည်းပုံ",
        body: [
          "Greeting (Dear …) → ရည်ရွယ်ချက် (I am writing to…) → အသေးစိတ် (အပိုဒ် ၁–၂) → တောင်းဆိုချက် (Could you…/I would be grateful if…) → နိဂုံး (Yours sincerely/faithfully)။",
          "အမည် သိလျှင် 'Dear Mr. Hla' → 'Yours sincerely'။ အမည် မသိလျှင် 'Dear Sir or Madam' → 'Yours faithfully'။",
          "လေသံ — formal တွင် contraction မသုံးပါ ('I do not' ≠ 'I don't')။ ယဉ်ကျေးသည့် တောင်းဆိုချက် — 'I would be grateful if you could…'။",
        ],
        table: { headers: ["အပိုင်း", "formal", "informal"], rows: [["စ", "Dear Mr. Hla,", "Hi Ko Aung,"], ["ရည်ရွယ်ချက်", "I am writing to…", "Just a quick note to…"], ["တောင်းဆို", "I would be grateful if…", "Could you…?"], ["ပိတ်", "Yours sincerely,", "Best wishes,"]] },
      },
      {
        heading: "တောင်းဆိုချက် ရှာခြင်း",
        body: [
          "တောင်းဆိုချက်ကို 'could', 'would', 'please', 'I would like', 'I would be grateful' ဖြင့် ရှာသည်။",
          "'I am afraid…' ပါလျှင် ငြင်းပယ်ခြင်း/အခက်အခဲ ဖော်ပြခြင်း ဖြစ်နိုင်သည်။",
        ],
      },
    ],
    examples: [
      { en: "I am writing to enquire about the part-time course.", mm: "အချိန်ပိုင်း သင်တန်းအကြောင်း မေးမြန်းရန် ရေးသားအပ်ပါသည်။" },
      { en: "I would be grateful if you could confirm the dates.", mm: "ရက်စွဲများကို အတည်ပြုပေးနိုင်လျှင် ကျေးဇူးတင်ပါမည်။" },
      { en: "I look forward to hearing from you.", mm: "သင့်ပြန်ကြားချက်ကို မျှော်လင့်ပါသည်။" },
    ],
    mistakes: [
      { wrong: "Dear Sir, Yours sincerely", right: "Dear Sir/Madam, Yours faithfully", why: "အမည် မပါလျှင် faithfully။" },
      { wrong: "I am writing for apply the job.", right: "I am writing to apply for the job.", why: "writing to + verb။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which closing matches 'Dear Sir or Madam'?", promptMm: "ရွေးပါ။", options: ["Yours sincerely", "Yours faithfully", "Best wishes", "Cheers"], answer: 1, explanation: "အမည် မသိလျှင် faithfully။", topic: "email" },
      { type: "mcq", prompt: "Which is a polite request?", promptMm: "ရွေးပါ။", options: ["Send me the form.", "I would be grateful if you could send the form.", "Give the form.", "Form now."], answer: 1, explanation: "I would be grateful if…။", topic: "email" },
      { type: "fill", prompt: "I look forward ___ your reply.", promptMm: "ဖြည့်ပါ။", answers: ["to"], explanation: "look forward to။", topic: "email" },
      { type: "correct", prompt: "Correct: I am writing for applying the course.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I am writing to apply for the course."], explanation: "writing to + verb။", topic: "email" },
    ],
    independent: [
      { type: "mcq", prompt: "Which is informal?", promptMm: "ရွေးပါ။", options: ["I am writing to…", "Just a quick note to…", "Yours faithfully", "I would be grateful if…"], answer: 1, explanation: "quick note = informal။", topic: "email" },
      { type: "fill", prompt: "I am ___ to enquire about the price.", promptMm: "ဖြည့်ပါ။", answers: ["writing"], explanation: "I am writing to။", topic: "email" },
      { type: "mcq", prompt: "Where is the purpose usually stated?", promptMm: "ရွေးပါ။", options: ["First paragraph", "Last line", "In the subject only", "Never"], answer: 0, explanation: "ပထမ အပိုဒ်။", topic: "email" },
      { type: "translate", prompt: "Translate: ကျွန်တော် သင်တန်းအကြောင်း မေးချင်ပါတယ်။", promptMm: "တရားဝင် အီးမေးလ် ဝါကျ ရေးပါ။", answers: ["I am writing to enquire about the course.", "I would like to enquire about the course."], explanation: "enquire about။", topic: "email" },
    ],
    review: [
      { q: "Yours sincerely နှင့် Yours faithfully ကို ဘယ်လို ခွဲသလဲ။", a: "အမည် သိလျှင် sincerely၊ မသိလျှင် faithfully။" },
      { q: "ယဉ်ကျေးသော တောင်းဆိုချက် ပုံစံ ဘာလဲ။", a: "I would be grateful if you could… / Could you…, please?" },
    ],
    summary: ["အီးမေးလ် ဖွဲ့စည်းပုံ ၅ ပိုင်း ရှိသည်။", "formal/informal လေသံ ကွာခြားသည်။", "တောင်းဆိုချက်ကို ယဉ်ကျေးသည့် ပုံစံဖြင့် ရှာသည်။"],
    mastery: ["တရားဝင် အီးမေးလ် ၁ စောင် ရေးနိုင်သည်။", "formal/informal စကားစု ၈ ခု ခွဲခြားနိုင်သည်။"],
    topics: ["reading", "email", "writing"],
  },
  {
    id: "f9-academic-papers",
    moduleId: "F",
    title: "Reading: Understanding Academic Papers",
    titleMm: "ဖတ်ရှုမှု — ပညာရေး စာတမ်း နားလည်ခြင်း",
    level: "C1",
    minutes: 24,
    summaryLine: "ပညာရေး စာတမ်း၏ ငြင်းခုံမှု ဖွဲ့စည်းပုံ၊ ကိုးကားခြင်း နှင့် သုတေသန ကန့်သတ်ချက်များကို ဖတ်ယူနည်း။",
    objectives: ["စာတမ်း၏ အဓိက ငြင်းခုံမှုကို ဖော်ထုတ်နိုင်မည်။", "ကိုးကားချက် နှင့် ကိုယ်ပိုင် အဆို ခွဲခြားနိုင်မည်။", "ကန့်သတ်ချက်များကို ဖော်ပြနိုင်မည်။"],
    vocab: [
      { en: "argue", mm: "ငြင်းခုံသည်/အခိုင်အမာ ဆိုသည်", pos: "verb", example: "The authors argue that funding matters.", exampleMm: "ရန်ပုံငွေ အရေးကြီးသည်ဟု စာရေးသူများ ဆိုသည်။", topic: "academic reading", level: "B2" },
      { en: "cite", mm: "ကိုးကားသည်", pos: "verb", example: "They cite three earlier studies.", exampleMm: "သူတို့ ယခင် လေ့လာမှု သုံးခုကို ကိုးကားသည်။", topic: "academic reading", level: "B2" },
      { en: "limitation", mm: "ကန့်သတ်ချက်", pos: "noun", example: "The authors acknowledge several limitations.", exampleMm: "စာရေးသူများ ကန့်သတ်ချက် များစွာကို ဝန်ခံသည်။", topic: "academic reading", level: "C1" },
    ],
    sections: [
      {
        heading: "ငြင်းခုံမှု ဖွဲ့စည်းပုံ",
        body: [
          "Thesis (အဓိက အဆို) → အကြောင်းရင်း ၂–၄ ခု → အထောက်အထား (ကိုးကား၊ ဒေတာ) → ဆန့်ကျင်ချက် ဖြေရှင်းမှု → ကောက်ချက်။",
          "ကိုးကားချက် (citation) နှင့် စာရေးသူ၏ ကိုယ်ပိုင် အဆိုကို ခွဲခြားရသည် — 'According to Smith (2020), …' ပြီးနောက် 'However, this study argues…'။",
          "ကန့်သတ်ချက် — နမူနာ အရွယ်အစား၊ ဒေသ၊ အချိန် ကာလ၊ ကိရိယာ၏ ယုံကြည်စိတ်ချရမှု။ ကောင်းသည့် စာတမ်းက ဤအချက်များကို ဝန်ခံသည်။",
        ],
        table: { headers: ["အချက်", "မေးခွန်း", "ရှာရန် နေရာ"], rows: [["Thesis", "ဘာကို ဆိုသလဲ", "abstract/introduction"], ["Evidence", "ဘာအထောက်အထား", "results"], ["Counter-argument", "ဘယ်လို ဖြေသလဲ", "discussion"], ["Limitation", "ဘာကန့်သတ်သလဲ", "conclusion"]] },
      },
      {
        heading: "ဖတ်ရာတွင် မှတ်စု",
        body: [
          "မှတ်စုတွင် 'အဆို → အထောက်အထား → ကိုယ့် အမြင်' ဟု ကော်လံ သုံးခု ခွဲသည်။",
          "ကိုယ်ပိုင် အမြင်ကို ထည့်လျှင် 'This seems convincing because…' သို့မဟုတ် 'This claim would be stronger if…' ဟု ရေးသည်။",
        ],
      },
    ],
    examples: [
      { en: "The authors argue that early intervention reduces dropout rates.", mm: "စောစီးစွာ ကြားဝင်မှုက ကျောင်းထွက်နှုန်းကို လျှော့ချသည်ဟု စာရေးသူများ ဆိုသည်။", note: "thesis။" },
      { en: "According to a 2021 survey, 40 percent of students reported stress.", mm: "၂၀၂၁ စစ်တမ်းအရ ကျောင်းသား ၄၀ ရာခိုင်နှုန်းက ဖိစီးမှု ရှိသည်ဟု ဖော်ပြခဲ့သည်။", note: "ကိုးကားချက်။" },
      { en: "One limitation is that the sample included only urban schools.", mm: "ကန့်သတ်ချက် တစ်ခုက နမူနာတွင် မြို့ပြ ကျောင်းများသာ ပါဝင်ခြင်း ဖြစ်သည်။" },
    ],
    mistakes: [
      { wrong: "ကိုးကားချက်ကို စာရေးသူ၏ ကိုယ်ပိုင် အမြင်ဟု ယူဆခြင်း", right: "'According to…' ပါလျှင် ကိုးကားချက် ဖြစ်သည်", why: "ခွဲခြားမှု မရှိလျှင် အနက်ပြန်ဆိုမှု မှားနိုင်သည်။" },
      { wrong: "ကန့်သတ်ချက် မဖတ်ဘဲ ကောက်ချက် လက်ခံခြင်း", right: "conclusion တွင် ကန့်သတ်ချက် ရှာပါ", why: "ရလဒ် အသုံးချနိုင်သည့် အတိုင်းအတာကို သိရန်။" },
    ],
    guided: [
      { type: "mcq", prompt: "A paper's main claim is its ___.", promptMm: "ရွေးပါ။", options: ["citation", "thesis", "limitation", "appendix"], answer: 1, explanation: "thesis။", topic: "academic reading" },
      { type: "mcq", prompt: "'According to…' introduces ___.", promptMm: "ရွေးပါ။", options: ["the author's own view", "a cited source", "a conclusion", "a definition"], answer: 1, explanation: "ကိုးကားချက်။", topic: "academic reading" },
      { type: "fill", prompt: "The authors acknowledge several ___. (ကန့်သတ်ချက်)", promptMm: "ဖြည့်ပါ။", answers: ["limitations"], explanation: "limitations။", topic: "academic reading" },
      { type: "correct", prompt: "Correct: The study argue that funding matters.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The study argues that funding matters."], explanation: "study → argues။", topic: "academic reading" },
    ],
    independent: [
      { type: "mcq", prompt: "Which is a limitation?", promptMm: "ရွေးပါ။", options: ["Only 20 participants were included.", "The paper is 12 pages.", "It has five authors.", "It uses English."], answer: 0, explanation: "နမူနာ ငယ်ခြင်း။", topic: "academic reading" },
      { type: "fill", prompt: "The authors ___ three earlier studies. (ကိုးကား)", promptMm: "ဖြည့်ပါ။", answers: ["cite"], explanation: "cite = ရင်းမြစ်ကို ကိုးကားခြင်း။", topic: "academic reading" },
      { type: "mcq", prompt: "Which sentence evaluates a claim?", promptMm: "ရွေးပါ။", options: ["The study was published in 2022.", "This claim would be stronger with a larger sample.", "The authors are from Asia.", "The paper has four sections."], answer: 1, explanation: "ဝေဖန်အကဲဖြတ်ချက်။", topic: "academic reading" },
      { type: "translate", prompt: "Translate: ဒီအဆိုက ခိုင်မာတယ်၊ ဒါပေမယ့် နမူနာ သေးငယ်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["The claim is convincing, but the sample is small.", "This claim is strong, although the sample is small."], explanation: "although/but ဖြင့် ဆန့်ကျင်ချက်။", topic: "academic reading" },
    ],
    review: [
      { q: "စာတမ်း၏ ငြင်းခုံမှု ဖွဲ့စည်းပုံ ဘာလဲ။", a: "thesis → reasons → evidence → counter-argument → conclusion။" },
      { q: "ကန့်သတ်ချက် ဘယ်နေရာ ရှာသလဲ။", a: "discussion/conclusion တွင်။" },
    ],
    summary: ["thesis နှင့် evidence ကို ခွဲခြားဖတ်သည်။", "ကိုးကားချက် နှင့် ကိုယ်ပိုင် အဆို မရောပါ။", "ကန့်သတ်ချက်က ရလဒ် အသုံးချနိုင်မှုကို ကန့်သတ်သည်။"],
    mastery: ["စာတမ်း ၁ ခု၏ thesis ၃ ခု ဖော်ထုတ်နိုင်သည်။", "ကန့်သတ်ချက် ၃ ခု ရှာနိုင်သည်။"],
    topics: ["reading", "academic reading", "research"],
  },
];

export const moduleEFLessonsPart5: Lesson[] = buildLessons(seeds);
