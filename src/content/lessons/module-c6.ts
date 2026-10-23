import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "c25-law-crime",
    moduleId: "C",
    title: "Law and Crime",
    titleMm: "ဥပဒေ နှင့် ရာဇဝတ်မှု ဝေါဟာရ",
    level: "B2",
    minutes: 22,
    summaryLine: "ဥပဒေ၊ တရားရုံး နှင့် ရာဇဝတ်မှု သတင်းများတွင် တွေ့ရသည့် ဝေါဟာရနှင့် ဓမ္မဓိဋ္ဌာန် ဖော်ပြချက်။",
    objectives: ["ဥပဒေ ဝေါဟာရ ၁၂ ခု သိမည်။", "accuse, charge, convict စသည်တို့၏ ကွာခြားချက် သိမည်။", "သတင်း ဖော်ပြချက်ကို တိကျစွာ ပြန်ပြောနိုင်မည်။"],
    vocab: [
      { en: "accuse", mm: "စွပ်စွဲသည်", pos: "verb", example: "He was accused of theft.", exampleMm: "သူ ခိုးမှုဖြင့် စွပ်စွဲခံခဲ့ရသည်။", topic: "law", level: "B2" },
      { en: "sentence", mm: "ပြစ်ဒဏ် ချမှတ်သည်", pos: "verb/noun", example: "The judge sentenced him to two years.", exampleMm: "တရားသူကြီးက သူ့ကို နှစ်နှစ် ချမှတ်ခဲ့သည်။", topic: "law", level: "B2" },
      { en: "evidence", mm: "အထောက်အထား", pos: "noun", example: "The evidence was not strong enough.", exampleMm: "အထောက်အထား မခိုင်လုံခဲ့ပါ။", topic: "law", level: "B2" },
      { en: "witness", mm: "သက်သေ", pos: "noun", example: "Two witnesses gave statements.", exampleMm: "သက်သေ နှစ်ဦး ထွက်ဆိုချက် ပေးခဲ့သည်။", topic: "law", level: "B1" },
    ],
    sections: [
      {
        heading: "ဥပဒေ လုပ်ငန်းစဉ်",
        body: [
          "arrest → charge → trial → verdict → sentence → appeal။ တရားခံသည် 'innocent until proven guilty' ဖြစ်သည်။",
          "ကြိယာ ကွာခြားချက် — accuse somebody of, charge somebody with, convict somebody of, suspect somebody of။ ဝိဘတာ မတူညီပါ။",
          "ပုဂ္ဂိုလ် — suspect, defendant, lawyer, prosecutor, judge, jury, victim။",
        ],
        table: { headers: ["ဝေါဟာရ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["theft", "ခိုးမှု", "He was arrested for theft."], ["fraud", "လိမ်လည်မှု", "a case of fraud"], ["fine", "ငွေဒဏ်", "pay a fine"], ["probation", "စမ်းသပ်ကာလ ပြစ်ဒဏ်", "two years' probation"]] },
      },
      {
        heading: "သတင်း ဖော်ပြချက် တိကျမှု",
        body: [
          "သတင်းတွင် 'alleged', 'reportedly', 'charged with' ကဲ့သို့ စကားလုံးကို သုံးသည် — အပြစ်ရှိကြောင်း မတရားမှီ မဆိုနိုင်ပါ။",
          "'He was found guilty of fraud.' (တရားရုံး ဆုံးဖြတ်ပြီး) နှင့် 'He was accused of fraud.' (စွပ်စွဲခံရုံ) လုံးဝ ကွာသည်။",
        ],
      },
    ],
    examples: [
      { en: "The court found him guilty of fraud and fined him heavily.", mm: "တရားရုံးက သူ့ကို လိမ်လည်မှုဖြင့် အပြစ်ရှိကြောင်း ဆုံးဖြတ်ပြီး ငွေဒဏ် ကြီးကြီး ချမှတ်ခဲ့သည်။" },
      { en: "She was charged with dangerous driving but later acquitted.", mm: "သူမကို အန္တရာယ်ရှိ ကားမောင်းမှုဖြင့် စွဲချက်တင်ခဲ့သော်လည်း နောက်ပိုင်း လွှတ်ပေးခဲ့သည်။" },
      { en: "Witnesses described what they had seen that night.", mm: "သက်သေများက ထိုညက သူတို့ မြင်ခဲ့သည်ကို ဖော်ပြခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "He was accused for stealing.", right: "He was accused of stealing.", why: "accuse + of။" },
      { wrong: "The police charged him of murder.", right: "The police charged him with murder.", why: "charge + with။" },
    ],
    guided: [
      { type: "mcq", prompt: "She was accused ___ cheating.", promptMm: "ရွေးပါ။", options: ["of", "for", "with", "in"], answer: 0, explanation: "accuse of။", topic: "law" },
      { type: "fill", prompt: "The judge ___ him to three years in prison. (ချမှတ်)", promptMm: "ဖြည့်ပါ။", answers: ["sentenced"], explanation: "sentence somebody to။", topic: "law" },
      { type: "mcq", prompt: "A person who sees a crime is a ___.", promptMm: "ရွေးပါ။", options: ["witness", "victim", "suspect", "jury"], answer: 0, explanation: "witness = သက်သေ။", topic: "law" },
      { type: "correct", prompt: "Correct: The police charged him of theft.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The police charged him with theft."], explanation: "charge with။", topic: "law" },
    ],
    independent: [
      { type: "mcq", prompt: "The decision of the court is the ___.", promptMm: "ရွေးပါ။", options: ["verdict", "sentence", "trial", "appeal"], answer: 0, explanation: "verdict = ဆုံးဖြတ်ချက်။", topic: "law" },
      { type: "fill", prompt: "He had to pay a heavy ___. (ငွေဒဏ်)", promptMm: "ဖြည့်ပါ။", answers: ["fine"], explanation: "pay a fine။", topic: "law" },
      { type: "mcq", prompt: "Which word keeps the report neutral?", promptMm: "ဓမ္မဓိဋ္ဌာန်ကျသည့် စကားလုံး ရွေးပါ။", options: ["The criminal stole the car.", "The man allegedly stole the car.", "The thief obviously took it.", "Everyone knows he did it."], answer: 1, explanation: "allegedly = စွပ်စွဲခံရကြောင်း သာ ဖော်ပြသည်။", topic: "law" },
      { type: "translate", prompt: "Translate: သူက ခိုးမှုနဲ့ စွပ်စွဲခံရပေမယ့် အပြစ်မရှိဘူးလို့ ဆုံးဖြတ်ခံရတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["He was accused of theft but found not guilty.", "He was charged with theft but found not guilty."], explanation: "accused of + found not guilty။", topic: "law" },
    ],
    review: [
      { q: "accuse နှင့် convict ကွာခြားချက် ဘာလဲ။", a: "accuse = စွပ်စွဲသည် (အပြစ် မဆုံးဖြတ်ရသေး)၊ convict = တရားရုံးက အပြစ်ရှိကြောင်း ဆုံးဖြတ်သည်။" },
      { q: "allegedly ကို ဘာကြောင့် သုံးသလဲ။", a: "အပြစ်ရှိကြောင်း မဆုံးဖြတ်ရသေးသည့် အခြေအနေကို ဓမ္မဓိဋ္ဌာန်ကျစွာ ဖော်ပြရန်။" },
    ],
    summary: ["ဥပဒေ ဝေါဟာရသည် လုပ်ငန်းစဉ် အဆင့်လိုက် ဖြစ်သည်။", "accuse of / charge with ဝိဘတာ ကွာခြားသည်။", "သတင်းတွင် allegedly ကဲ့သို့ သတိထားသော စကားလုံး သုံးသည်။"],
    mastery: ["ဝေါဟာရ ၁၂ ခုကို သုံးနိုင်သည်။", "သတင်း ဖော်ပြချက် ၅ ခုကို ဓမ္မဓိဋ္ဌာန်ကျစွာ ပြန်ရေးနိုင်သည်။"],
    topics: ["law", "crime", "vocabulary"],
  },
  {
    id: "c26-arts-music",
    moduleId: "C",
    title: "Arts, Music and Film",
    titleMm: "အနုပညာ၊ ဂီတ နှင့် ရုပ်ရှင် ဝေါဟာရ",
    level: "B1",
    minutes: 20,
    summaryLine: "အနုပညာ လက်ရာ၊ ဂီတ နှင့် ရုပ်ရှင် အကြောင်း ဝေါဖွဲ့ ဖော်ပြခြင်း နှင့် ဝေဖန်သုံးသပ်ခြင်း ဝေါဟာရ။",
    objectives: ["အနုပညာ ဝေါဟာရ ၁၂ ခု သိမည်။", "လက်ရာတစ်ခုကို ဖော်ပြ/ဝေဖန်နိုင်မည်။", "ကိုယ်ကြိုက်သည့် လက်ရာအကြောင်း ပြောနိုင်မည်။"],
    vocab: [
      { en: "exhibition", mm: "ပြပွဲ", pos: "noun", example: "We visited a photography exhibition.", exampleMm: "ဓာတ်ပုံ ပြပွဲ တစ်ခုကို သွားကြည့်ခဲ့သည်။", topic: "arts", level: "B1" },
      { en: "plot", mm: "ဇာတ်လမ်းတွဲ", pos: "noun", example: "The plot was easy to follow.", exampleMm: "ဇာတ်လမ်းတွဲက နားလည်ရလွယ်သည်။", topic: "film", level: "B1" },
      { en: "performance", mm: "ဖျော်ဖြေမှု", pos: "noun", example: "Her performance was outstanding.", exampleMm: "သူမ၏ ဖျော်ဖြေမှုက ထူးချွန်ခဲ့သည်။", topic: "arts", level: "B1" },
      { en: "portray", mm: "သရုပ်ဖော်သည်", pos: "verb", example: "The film portrays life in a small village.", exampleMm: "ရုပ်ရှင်က ရွာငယ်တစ်ခုရှိ ဘဝကို သရုပ်ဖော်သည်။", topic: "film", level: "B2" },
    ],
    sections: [
      {
        heading: "ဖော်ပြခြင်း နှင့် ဝေဖန်ခြင်း",
        body: [
          "ဖော်ပြရန် — 'It is set in…' 'It tells the story of…' 'It features…' 'The main character…'",
          "ဝေဖန်ရန် — 'gripping', 'moving', 'predictable', 'overrated', 'well-acted', 'visually stunning', 'a bit slow in the middle'။",
          "အကြောင်းပြချက် ပေးရန် — 'What I liked most was…' 'It works because…' 'The only weakness is…'",
        ],
        table: { headers: ["ဝေါဟာရ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["masterpiece", "အကောင်းဆုံး လက်ရာ", "a modern masterpiece"], ["soundtrack", "ဂီတ နောက်ခံ", "an unforgettable soundtrack"], ["cast", "သရုပ်ဆောင် အဖွဲ့", "a strong cast"], ["subtitle", "စာတန်းထိုး", "watch with subtitles"]] },
      },
      {
        heading: "ယဉ်ကျေးစွာ မကျေနပ်ခြင်း",
        body: [
          "'It wasn't really my thing.' 'I found it a bit slow.' 'It didn't work for me.' — တိုက်ရိုက် 'It was terrible' ထက် နူးညံ့သည်။",
          "အနုပညာ အမြင် ကွဲပြားနိုင်ကြောင်း အသိအမှတ်ပြုခြင်းက ဆွေးနွေးမှုကို ကောင်းစေသည် — 'I can see why people love it, but…'",
        ],
      },
    ],
    examples: [
      { en: "The film is set in Yangon in the 1990s.", mm: "ရုပ်ရှင်က ၁၉၉၀ ပြည့်လွန်နှစ်များက ရန်ကုန်တွင် နောက်ခံထားသည်။" },
      { en: "The exhibition features work by local artists.", mm: "ပြပွဲတွင် ဒေသခံ အနုပညာရှင်များ၏ လက်ရာများ ပါဝင်သည်။" },
      { en: "I found the ending predictable, but the acting was excellent.", mm: "အဆုံးသတ်က ကြိုတင်ခန့်မှန်းနိုင်သည်ဟု ထင်ခဲ့သည်၊ ဒါပေမယ့် သရုပ်ဆောင်မှုက ထူးချွန်ခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "The film is based in a true story.", right: "The film is based on a true story.", why: "be based on။" },
      { wrong: "I watched a very interested film.", right: "I watched a very interesting film.", why: "ဖြစ်စေသည့် အရာ → -ing။" },
    ],
    guided: [
      { type: "mcq", prompt: "The novel was ___ on a true story.", promptMm: "ရွေးပါ။", options: ["based", "basing", "basis", "base"], answer: 0, explanation: "be based on။", topic: "arts" },
      { type: "fill", prompt: "The film ___ in a small village. (နောက်ခံထားသည်)", promptMm: "ဖြည့်ပါ။", answers: ["is set"], explanation: "be set in။", topic: "film" },
      { type: "mcq", prompt: "The actors in a film are called the ___.", promptMm: "ရွေးပါ။", options: ["cast", "crew", "plot", "script"], answer: 0, explanation: "cast = သရုပ်ဆောင် အဖွဲ့။", topic: "film" },
      { type: "correct", prompt: "Correct: The exhibition was very interested.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The exhibition was very interesting."], explanation: "-ing adjective။", topic: "arts" },
    ],
    independent: [
      { type: "mcq", prompt: "A song's music and sound is its ___.", promptMm: "ရွေးပါ။", options: ["script", "soundtrack", "cast", "plot"], answer: 1, explanation: "soundtrack။", topic: "film" },
      { type: "fill", prompt: "The film ___ the life of a famous writer. (သရုပ်ဖော်)", promptMm: "ဖြည့်ပါ။", answers: ["portrays"], explanation: "portray → portrays။", topic: "film" },
      { type: "mcq", prompt: "Which is the most polite criticism?", promptMm: "ရွေးပါ။", options: ["It was terrible.", "It was rubbish.", "It wasn't really my thing.", "Nobody would like it."], answer: 2, explanation: "နူးညံ့သော ဝေဖန်ချက်။", topic: "arts" },
      { type: "translate", prompt: "Translate: ဒီပြပွဲကို အရမ်း သဘောကျတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I really enjoyed this exhibition.", "I really liked this exhibition."], explanation: "enjoy/like + နာမ်။", topic: "arts" },
    ],
    review: [
      { q: "be based on နှင့် be set in ကွာခြားချက် ဘာလဲ။", a: "be based on = အခြေခံရာ ရင်းမြစ်၊ be set in = ဇာတ်ကွက် ဖြစ်သည့် နေရာ/အချိန်။" },
      { q: "ဝေဖန်ချက်ကို ယဉ်ကျေးစေရန် ဘယ်လို ပြောသလဲ။", a: "It wasn't really my thing ကဲ့သို့ ကိုယ်ပိုင် ခံစားချက်အဖြစ် ပြောသည်။" },
    ],
    summary: ["အနုပညာ ဝေါဟာရတွင် လက်ရာ၊ ဖျော်ဖြေမှု နှင့် ဝေဖန်ချက် အုပ်စုများ ရှိသည်။", "be based on, be set in သည် ပုံသေ တွဲဖက်မှု။", "ဝေဖန်ချက်ကို ကိုယ်ပိုင် ခံစားချက်အဖြစ် ပြောခြင်း ယဉ်ကျေးသည်။"],
    mastery: ["ဝေါဟာရ ၁၂ ခုကို သုံးနိုင်သည်။", "ရုပ်ရှင်/စာအုပ် တစ်ခုကို စာကြောင်း ၈ ကြောင်းဖြင့် ဝေဖန်နိုင်သည်။"],
    topics: ["arts", "film", "vocabulary"],
  },
  {
    id: "c27-food-culture",
    moduleId: "C",
    title: "Food and Culture",
    titleMm: "အစားအစာ နှင့် ယဉ်ကျေးမှု ဝေါဟာရ",
    level: "B1",
    minutes: 18,
    summaryLine: "အစားအစာ ဖော်ပြချက်၊ ချက်ပြုတ်နည်း နှင့် ယဉ်ကျေးမှု ဆိုင်ရာ စားသောက်မှု ဝေါဟာရ။",
    objectives: ["အစားအစာ ဝေါဟာရ ၁၂ ခု သိမည်။", "အရသာ ဖော်ပြရန် နာမဝိသေသန သုံးနိုင်မည်။", "ချက်ပြုတ်နည်း အဆင့်များကို ရေးနိုင်မည်။"],
    vocab: [
      { en: "ingredient", mm: "ပါဝင်ပစ္စည်း", pos: "noun", example: "The main ingredient is rice.", exampleMm: "အဓိက ပါဝင်ပစ္စည်းက ဆန် ဖြစ်သည်။", topic: "food", level: "A2" },
      { en: "spicy", mm: "စပ်သော", pos: "adjective", example: "This curry is very spicy.", exampleMm: "ဒီဟင်းက အလွန် စပ်သည်။", topic: "food", level: "A1" },
      { en: "boil", mm: "ဆူအောင် ချက်သည်", pos: "verb", example: "Boil the noodles for three minutes.", exampleMm: "ခေါက်ဆွဲကို သုံးမိနစ် ဆူအောင် ချက်ပါ။", topic: "cooking", level: "A2" },
      { en: "flavour", mm: "အရသာ", pos: "noun", example: "Lime adds a fresh flavour.", exampleMm: "သံပရာက လတ်ဆတ်သည့် အရသာ ထည့်သည်။", topic: "food", level: "B1" },
    ],
    sections: [
      {
        heading: "အရသာ နှင့် အရည်အသွေး",
        body: [
          "sweet, sour, salty, bitter, spicy/hot, savoury, creamy, crispy, tender, stale။",
          "အရသာ ဖော်ပြရာတွင် 'It tastes…' 'It smells…' 'It's slightly…' ကို သုံးသည်။ 'a bit too salty' သည် နူးညံ့သော ဝေဖန်ချက်။",
          "အစားအစာ ယဉ်ကျေးမှု — staple food (အဓိက အစားအစာ), street food, vegetarian, halal, portion size, eating habits။",
        ],
        table: { headers: ["ဝေါဟာရ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["recipe", "ချက်ပြုတ်နည်း", "a family recipe"], ["serve", "ကျွေးသည်", "serve with rice"], ["stir-fry", "လှော်ချက်", "stir-fry the vegetables"], ["season", "အရသာ ထည့်သည်", "season with salt"]] },
      },
      {
        heading: "ချက်ပြုတ်နည်း ရေးသားခြင်း",
        body: [
          "imperative ဖြင့် အဆင့်လိုက် ရေးသည် — 'Heat the oil. Add the garlic and stir for one minute. Pour in the water and simmer for ten minutes.'",
          "အချိန် နှင့် ပမာဏ ကို တိကျစွာ ဖော်ပြရသည် — 'two tablespoons of oil', 'simmer for ten minutes'။",
          "sequence စကားလုံး — first, then, after that, meanwhile, finally။",
        ],
      },
    ],
    examples: [
      { en: "Mohinga is a popular breakfast dish in Myanmar.", mm: "မုန့်ဟင်းခါးသည် မြန်မာတွင် လူကြိုက်များသည့် မနက်စာ ဖြစ်သည်။" },
      { en: "The soup tastes slightly sour and very fresh.", mm: "ဟင်းရည်က အနည်းငယ် ချဉ်ပြီး အလွန် လတ်ဆတ်သည်။" },
      { en: "First, wash the vegetables, then slice them thinly.", mm: "ပထမ ဟင်းသီးဟင်းရွက် ဆေးပါ၊ ပြီးနောက် ပါးပါးလှီးပါ။" },
    ],
    mistakes: [
      { wrong: "The food is very delicious taste.", right: "The food is very delicious.", why: "delicious သည် နာမဝိသေသန ဖြစ်ပြီး taste ထပ်မလိုပါ။" },
      { wrong: "I cooked a soup.", right: "I made a soup / I cooked soup.", why: "soup သည် ရေတွက်မရ။" },
    ],
    guided: [
      { type: "mcq", prompt: "___ the water before adding the noodles.", promptMm: "ရွေးပါ။", options: ["Boil", "Boils", "Boiling", "Boiled"], answer: 0, explanation: "imperative → Boil။", topic: "cooking" },
      { type: "fill", prompt: "This curry is too ___ for me — my mouth is burning. (စပ်)", promptMm: "ဖြည့်ပါ။", answers: ["spicy", "hot"], explanation: "spicy/hot။", topic: "food" },
      { type: "mcq", prompt: "Rice is the ___ food in Myanmar.", promptMm: "ရွေးပါ။", options: ["staple", "staple's", "stabling", "stabled"], answer: 0, explanation: "staple food။", topic: "food" },
      { type: "correct", prompt: "Correct: The soup is tasting deliciously.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The soup tastes delicious."], explanation: "taste သည် linking verb → adjective။", topic: "food" },
    ],
    independent: [
      { type: "mcq", prompt: "Instructions for cooking a dish are a ___.", promptMm: "ရွေးပါ။", options: ["recipe", "receipt", "menu", "ingredient"], answer: 0, explanation: "recipe = ချက်ပြုတ်နည်း။", topic: "food" },
      { type: "fill", prompt: "___ the onions in oil for two minutes. (လှော်)", promptMm: "ဖြည့်ပါ။", answers: ["Fry", "Stir-fry"], explanation: "fry/stir-fry။", topic: "cooking" },
      { type: "order", prompt: "Arrange the cooking steps.", promptMm: "စီပါ။", tokens: ["then", "the", "Boil", "add", "noodles", "salt"], answer: "Boil the noodles then add salt", explanation: "imperative + then။", topic: "cooking" },
      { type: "translate", prompt: "Translate: ဒီဟင်းက ငါ့အတွက် အနည်းငယ် စပ်လွန်းတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["This dish is a bit too spicy for me.", "This curry is slightly too spicy for me."], explanation: "a bit too + adjective + for me။", topic: "food" },
    ],
    review: [
      { q: "flavour နှင့် taste ကွာခြားချက် ဘာလဲ။", a: "flavour = အနံ့ နှင့် အရသာ ပေါင်းစပ်မှု၊ taste = လျှာဖြင့် ခံစားသည့် အရသာ။" },
      { q: "ချက်ပြုတ်နည်းကို ဘယ်ကာလ/ပုံစံဖြင့် ရေးသလဲ။", a: "imperative (Boil, Add, Stir) ဖြင့် ရေးသည်။" },
    ],
    summary: ["အစားအစာ ဝေါဟာရတွင် အရသာ၊ ပါဝင်ပစ္စည်း နှင့် ချက်ပြုတ်နည်း အုပ်စုများ ရှိသည်။", "ချက်ပြုတ်နည်းကို imperative ဖြင့် အဆင့်လိုက် ရေးသည်။", "အရသာ ဝေဖန်ချက်ကို နူးညံ့စွာ ပြောနိုင်သည်။"],
    mastery: ["ဝေါဟာရ ၁၂ ခုကို သုံးနိုင်သည်။", "ချက်ပြုတ်နည်း ၆ ဆင့်ကို အင်္ဂလိပ်လို ရေးနိုင်သည်။"],
    topics: ["food", "culture", "cooking"],
  },
  {
    id: "c28-internet-technology",
    moduleId: "C",
    title: "Internet and Technology",
    titleMm: "အင်တာနက် နှင့် နည်းပညာ ဝေါဟာရ",
    level: "B1",
    minutes: 20,
    summaryLine: "ဒီဂျစ်တယ် ကိရိယာ၊ အွန်လိုင်း လုံခြုံရေး နှင့် နည်းပညာ အသုံးပြုမှု ဝေါဟာရ။",
    objectives: ["နည်းပညာ ဝေါဟာရ ၁၂ ခု သိမည်။", "download, install, update ကဲ့သို့ ကြိယာများ သုံးနိုင်မည်။", "အွန်လိုင်း လုံခြုံရေး အလေ့အထ ပြောနိုင်မည်။"],
    vocab: [
      { en: "download", mm: "ဒေါင်းလုဒ် ရယူသည်", pos: "verb", example: "Download the app from the official site.", exampleMm: "တရားဝင် ဆိုက်မှ အက်ပ် ဒေါင်းလုဒ် လုပ်ပါ။", topic: "technology", level: "A2" },
      { en: "password", mm: "စကားဝှက်", pos: "noun", example: "Use a strong password.", exampleMm: "ခိုင်မာသည့် စကားဝှက် သုံးပါ။", topic: "technology", level: "A2" },
      { en: "update", mm: "အသစ်ပြောင်းသည်", pos: "verb/noun", example: "Update your app regularly.", exampleMm: "အက်ပ်ကို ပုံမှန် အသစ်ပြောင်းပါ။", topic: "technology", level: "A2" },
      { en: "reliable", mm: "ယုံကြည်စိတ်ချရသော", pos: "adjective", example: "The connection is not very reliable.", exampleMm: "ချိတ်ဆက်မှုက အလွန် မယုံကြည်ရပါ။", topic: "technology", level: "B1" },
    ],
    sections: [
      {
        heading: "ဒီဂျစ်တယ် အခြေခံ ဝေါဟာရ",
        body: [
          "device, screen, charger, battery, connection, Wi-Fi, data, browser, app, account, backup။",
          "ကြိယာ — sign up, log in, log out, download, upload, install, update, back up, scroll, share။",
          "ပြဿနာ — slow connection, crash, freeze, low battery, virus, hacked account။",
        ],
        table: { headers: ["ဝေါဟာရ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["two-factor authentication", "အဆင့်နှစ်ဆင့် အတည်ပြုမှု", "enable two-factor authentication"], ["phishing", "လိမ်လည် စာပို့မှု", "a phishing email"], ["privacy", "ကိုယ်ရေး လုံခြုံမှု", "protect your privacy"], ["backup", "အရန် သိမ်းဆည်းမှု", "keep a backup"]] },
      },
      {
        heading: "အွန်လိုင်း လုံခြုံရေး အလေ့အထ",
        body: [
          "စကားဝှက် တစ်ခုတည်းကို နေရာ အားလုံးတွင် မသုံးပါနှင့်။ စကားဝှက် စီမံခန့်ခွဲသည့် အက်ပ် (password manager) ကို သုံးနိုင်သည်။",
          "မသိသည့် လင့်ခ် မနှိပ်ပါနှင့်။ ဘဏ်/အစိုးရ ဟု ဆိုသည့် စာများတွင် အထောက်အထား တောင်းလျှင် သတိထားပါ။",
          "ကိုယ်ရေး အချက်အလက် (နေရာ၊ ဖုန်းနံပါတ်၊ မှတ်ပုံတင်) ကို လူသိရှင်ကြား မတင်ပါနှင့်။",
        ],
      },
    ],
    examples: [
      { en: "I installed the update, but the app keeps crashing.", mm: "အပ်ဒိတ် တင်ခဲ့သော်လည်း အက်ပ် ဆက်တိုက် ပျက်ကျနေသည်။" },
      { en: "Always back up your files before reinstalling the system.", mm: "စနစ် ပြန်မတင်မီ ဖိုင်များကို အမြဲ အရန် သိမ်းထားပါ။" },
      { en: "Two-factor authentication makes your account much safer.", mm: "အဆင့်နှစ်ဆင့် အတည်ပြုမှုက သင့်စာရင်းကို ပိုလုံခြုံစေသည်။" },
    ],
    mistakes: [
      { wrong: "I logged in my account.", right: "I logged in to my account.", why: "log in to + စာရင်း။" },
      { wrong: "Please download me the file.", right: "Please download the file for me.", why: "download နှင့် လူကို တိုက်ရိုက် မတွဲပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "You should ___ your password regularly.", promptMm: "ရွေးပါ။", options: ["change", "make", "do", "put"], answer: 0, explanation: "change a password။", topic: "technology" },
      { type: "fill", prompt: "I can't log ___ — I forgot my password.", promptMm: "ဖြည့်ပါ။", answers: ["in"], explanation: "log in သည် စာရင်းထဲ ဝင်ခြင်း — ဤနေရာတွင် in လိုသည်။", topic: "technology" },
      { type: "mcq", prompt: "A fake email that asks for your password is ___.", promptMm: "ရွေးပါ။", options: ["phishing", "fishing", "hacking", "spamming"], answer: 0, explanation: "phishing။", topic: "technology" },
      { type: "correct", prompt: "Correct: Please share to me the link.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["Please share the link with me."], explanation: "share something with somebody။", topic: "technology" },
    ],
    independent: [
      { type: "mcq", prompt: "A copy of your files kept in case of loss is a ___.", promptMm: "ရွေးပါ။", options: ["backup", "backpack", "backuping", "backed"], answer: 0, explanation: "backup = အရန် သိမ်းဆည်းထားသည့် မိတ္တူ။", topic: "technology" },
      { type: "fill", prompt: "The app won't open — it keeps ___. (ပျက်ကျ)", promptMm: "ဖြည့်ပါ။", answers: ["crashing"], explanation: "keep + -ing။", topic: "technology" },
      { type: "mcq", prompt: "Which is the safest habit?", promptMm: "ရွေးပါ။", options: ["Use one password everywhere.", "Share your password in chats.", "Enable two-factor authentication.", "Click every link you receive."], answer: 2, explanation: "2FA သည် လုံခြုံသည်။", topic: "technology" },
      { type: "translate", prompt: "Translate: ငါ့ဖုန်းမှာ ဘက်ထရီ ကုန်နေတယ်၊ အားသွင်းချင်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["My phone battery is low and I need to charge it.", "My phone is out of battery — I need to charge it."], explanation: "battery is low / charge it။", topic: "technology" },
    ],
    review: [
      { q: "phishing ဆိုတာ ဘာလဲ။", a: "အယောင်ဆောင် စာပို့ပြီး စကားဝှက် စသည့် အချက်အလက် ခိုးယူခြင်း။" },
      { q: "log in နှင့် log out ကို ဘယ်လို သုံးသလဲ။", a: "log in to + စာရင်း၊ log out of + စာရင်း။" },
    ],
    summary: ["နည်းပညာ ဝေါဟာရတွင် ကိရိယာ၊ လုပ်ဆောင်ချက် နှင့် လုံခြုံရေး အုပ်စုများ ရှိသည်။", "ကြိယာ + ဝိဘတာ တွဲဖက်မှု (log in to, share with) ကို မှတ်ရသည်။", "စကားဝှက် နှင့် အချက်အလက် ကာကွယ်မှုသည် အရေးကြီးသည်။"],
    mastery: ["ဝေါဟာရ ၁၂ ခုကို သုံးနိုင်သည်။", "လုံခြုံရေး အလေ့အထ ၅ ခုကို ရေးနိုင်သည်။"],
    topics: ["technology", "internet", "vocabulary"],
  },
  {
    id: "c29-academic-collocations",
    moduleId: "C",
    title: "Academic Collocations",
    titleMm: "ပညာရေး စာတမ်း တွဲဖက်သုံးနှုန်းများ",
    level: "C1",
    minutes: 22,
    summaryLine: "ပညာရေး စာတမ်းတွင် သဘာဝကျစွာ တွဲသုံးသည့် စကားလုံးတွဲများ (collocation) ကို လေ့လာသည်။",
    objectives: ["ပညာရေး collocation ၁၂ ခု သိမည်။", "conduct/play/hold ကဲ့သို့ ကြိယာ ရွေးချယ်နိုင်မည်။", "စာတမ်း ဝါကျတွင် သဘာဝကျစွာ သုံးနိုင်မည်။"],
    vocab: [
      { en: "conduct research", mm: "သုတေသန ပြုလုပ်သည်", pos: "collocation", example: "The team conducted research in three regions.", exampleMm: "အဖွဲ့က ဒေသ သုံးခုတွင် သုတေသန ပြုလုပ်ခဲ့သည်။", topic: "academic collocations", level: "B2" },
      { en: "draw a conclusion", mm: "ကောက်ချက်ချသည်", pos: "collocation", example: "We can draw several conclusions from the data.", exampleMm: "ဒေတာမှ ကောက်ချက် များစွာ ချနိုင်သည်။", topic: "academic collocations", level: "B2" },
      { en: "play a role", mm: "အခန်းကဏ္ဍ ပါဝင်သည်", pos: "collocation", example: "Culture plays an important role here.", exampleMm: "ဤနေရာတွင် ယဉ်ကျေးမှုက အရေးကြီး အခန်းကဏ္ဍ ပါဝင်သည်။", topic: "academic collocations", level: "B1" },
      { en: "raise awareness", mm: "အသိပညာ မြှင့်တင်သည်", pos: "collocation", example: "The campaign raised awareness of the issue.", exampleMm: "ကမ်ပိန်းက ကိစ္စအပေါ် အသိပညာ မြှင့်တင်ခဲ့သည်။", topic: "academic collocations", level: "B2" },
    ],
    sections: [
      {
        heading: "အသုံးများ collocation များ",
        body: [
          "ကြိယာ + နာမ် — conduct research, carry out a study, meet a deadline, address an issue, achieve a goal, provide evidence။",
          "နာမဝိသေသန + နာမ် — a significant increase, a key factor, a major impact, a common problem, a strong argument။",
          "နာမ် + ဝိဘတာ — an increase in, a solution to, the impact of, a reason for, an approach to။",
        ],
        table: { headers: ["collocation", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["carry out research", "သုတေသန ပြုလုပ်", "research was carried out"], ["highly effective", "အလွန် ထိရောက်", "a highly effective method"], ["strongly agree", "အလွန် သဘောတူ", "I strongly agree."], ["widely used", "ကျယ်ပြန့်စွာ သုံး", "a widely used tool"]] },
      },
      {
        heading: "မှားယွင်းတတ်သည့် တွဲဖက်မှုများ",
        body: [
          "'do research' သည် စကားပြောတွင် ရသော်လည်း စာတမ်းတွင် 'conduct/carry out research' ကို သုံးသည်။",
          "'make a research' မှားသည်။ 'make a decision' ('do a decision' မှားသည်) နှင့် 'take a decision' (BrE) နှစ်မျိုး ရှိသည်။",
          "collocation ကို စကားလုံး တစ်လုံးချင်း မဟုတ်ဘဲ အစုအဖွဲ့အဖြစ် မှတ်ခြင်းက ထိရောက်သည်။",
        ],
      },
    ],
    examples: [
      { en: "The study was carried out over six months.", mm: "လေ့လာမှုကို ခြောက်လကြာ ပြုလုပ်ခဲ့သည်။" },
      { en: "Poverty plays a major role in educational outcomes.", mm: "ပညာရေး ရလဒ်များတွင် ဆင်းရဲမွဲတေမှုက အဓိက အခန်းကဏ္ဍ ပါဝင်သည်။" },
      { en: "There has been a significant increase in online learning.", mm: "အွန်လိုင်း သင်ယူမှုတွင် သိသာထင်ရှားသည့် တိုးမှု ရှိခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "They made a research about climate.", right: "They conducted research on climate.", why: "conduct research on + ခေါင်းစဉ်။" },
      { wrong: "It has a big impact to the economy.", right: "It has a major impact on the economy.", why: "impact on။" },
    ],
    guided: [
      { type: "mcq", prompt: "The team ___ out a survey.", promptMm: "ရွေးပါ။", options: ["made", "carried", "did", "took"], answer: 1, explanation: "carry out a survey။", topic: "academic collocations" },
      { type: "fill", prompt: "There has been a significant increase ___ demand.", promptMm: "ဖြည့်ပါ။", answers: ["in"], explanation: "an increase in။", topic: "academic collocations" },
      { type: "mcq", prompt: "Which verb goes with 'a conclusion'?", promptMm: "ရွေးပါ။", options: ["make", "draw", "do", "put"], answer: 1, explanation: "draw a conclusion။", topic: "academic collocations" },
      { type: "correct", prompt: "Correct: They made a research about the topic.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["They conducted research on the topic."], explanation: "conduct research on။", topic: "academic collocations" },
    ],
    independent: [
      { type: "mcq", prompt: "The policy had a major ___ on rural areas.", promptMm: "ရွေးပါ။", options: ["impact", "affect", "effect to", "influence to"], answer: 0, explanation: "a major impact on။", topic: "academic collocations" },
      { type: "fill", prompt: "The campaign aims to raise ___ of mental health.", promptMm: "ဖြည့်ပါ။", answers: ["awareness"], explanation: "raise awareness of။", topic: "academic collocations" },
      { type: "mcq", prompt: "Which is the best academic collocation?", promptMm: "ရွေးပါ။", options: ["do a decision", "make a research", "take a decision", "make a conclusion"], answer: 2, explanation: "take a decision (BrE)။", topic: "academic collocations" },
      { type: "translate", prompt: "Translate: ဒီကိစ္စကို ဖြေရှင်းဖို့ နည်းလမ်းတစ်ခု လိုတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["We need a solution to this problem.", "A solution to this issue is needed."], explanation: "a solution to + ပြဿနာ။", topic: "academic collocations" },
    ],
    review: [
      { q: "conduct/carry out research နှင့် make research ကွာခြားချက် ဘာလဲ။", a: "make research မှားသည်။ conduct/carry out research ကို သုံးသည်။" },
      { q: "impact နှင့် တွဲသည့် ဝိဘတာ ဘာလဲ။", a: "impact on။" },
    ],
    summary: ["Collocation ကို အစုအဖွဲ့အဖြစ် မှတ်ရသည်။", "ကြိယာ မှန်ကန်စွာ ရွေးခြင်း (conduct, carry out, draw) က အရေးကြီးသည်။", "နာမ် + ဝိဘတာ တွဲဖက်မှု (increase in, solution to, impact on) ကို မှတ်ရသည်။"],
    mastery: ["collocation ၁၂ ခုကို မှန်ကန်စွာ သုံးနိုင်သည်။", "စာတမ်း ဝါကျ ၈ ခုကို collocation ဖြင့် ရေးနိုင်သည်။"],
    topics: ["academic collocations", "writing", "vocabulary"],
  },
];

export const moduleCLessonsPart6: Lesson[] = buildLessons(seeds);
