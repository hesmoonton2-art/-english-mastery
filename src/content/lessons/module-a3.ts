import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "a18-large-numbers",
    moduleId: "A",
    title: "Large Numbers and Prices",
    titleMm: "ဂဏန်းကြီးများ နှင့် ဈေးနှုန်း",
    level: "A2",
    minutes: 18,
    summaryLine:
      "ရာ၊ ထောင်၊ သောင်း၊ သန်း ဂဏန်းများကို အင်္ဂလိပ်လို ဖတ်နည်း၊ ဈေးနှုန်း ပြောနည်းနှင့် ငွေရေတွက်နည်း။",
    objectives: [
      "ဂဏန်း ၁,၀၀၀ မှ ၁,၀၀၀,၀၀၀ အထိ အင်္ဂလိပ်လို ဖတ်နိုင်မည်။",
      "ဈေးနှုန်းကို မှန်ကန်စွာ ပြောနိုင်မည်။",
      "hundred/thousand/million နောက်တွင် 'of' သုံးမသုံး ခွဲခြားနိုင်မည်။",
    ],
    vocab: [
      { en: "hundred", mm: "တစ်ရာ", ipa: "ˈhʌndrəd", pos: "number", example: "There are two hundred students.", exampleMm: "ကျောင်းသား နှစ်ရာ ရှိသည်။", topic: "numbers", level: "A1" },
      { en: "thousand", mm: "တစ်ထောင်", ipa: "ˈθaʊznd", pos: "number", example: "The book costs twelve thousand kyat.", exampleMm: "စာအုပ်က ဆယ့်နှစ်ထောင် ကျပ် ကျသည်။", topic: "numbers", level: "A1" },
      { en: "million", mm: "တစ်သန်း", ipa: "ˈmɪljən", pos: "number", example: "The city has over one million people.", exampleMm: "မြို့တွင် လူ တစ်သန်းကျော် ရှိသည်။", topic: "numbers", level: "A2" },
      { en: "change", mm: "ငွေလက်ကျန် (ပြန်အမ်းငွေ)", ipa: "tʃeɪndʒ", pos: "noun", example: "Here is your change, two thousand kyat.", exampleMm: "ဒါက သင့်ပြန်အမ်းငွေ နှစ်ထောင် ကျပ်။", topic: "shopping", level: "A2" },
    ],
    sections: [
      {
        heading: "ဂဏန်း ဖတ်နည်း",
        body: [
          "အင်္ဂလိပ်တွင် ဂဏန်းကို သုံးလုံးတစ်အုပ် ခွဲပြီး ဖတ်သည်။ 1,250 ကို 'one thousand two hundred and fifty' ဟု ဖတ်သည်။ ဗြိတိန်တွင် hundred နောက် 'and' ထည့်လေ့ ရှိသည်။",
          "အုပ်စု တစ်ခုစီကို thousand, million, billion ဖြင့် ခေါ်သည်။ 2,000,000 = two million။ မြန်မာတွင် သိန်း၊ သန်း ဖြင့် ရေတွက်သဖြင့် အင်္ဂလိပ် ဂဏန်း ဖတ်ပုံနှင့် အလေ့အထ ကွာခြားသည်။",
          "hundred, thousand, million တို့သည် တိကျသော ဂဏန်း ရှေ့တွင် ဗဟုဝုဏ်း s မယူပါ — 'two hundred', 'three thousand'။ သို့သော် မသေချာသော အရေအတွက် ဖြစ်လျှင် s ယူပြီး of နှင့် တွဲသည် — 'hundreds of people', 'thousands of books'။",
        ],
        table: {
          headers: ["ဂဏန်း", "အင်္ဂလိပ်", "မြန်မာ"],
          rows: [
            ["1,500", "one thousand five hundred", "တစ်ထောင် ငါးရာ"],
            ["12,000", "twelve thousand", "ဆယ့်နှစ်ထောင်"],
            ["250,000", "two hundred and fifty thousand", "နှစ်သိန်း ငါးသောင်း"],
            ["1,000,000", "one million", "တစ်သန်း"],
          ],
        },
      },
      {
        heading: "ဈေးနှုန်း ပြောခြင်း",
        body: [
          "ဈေးနှုန်း မေးရန် 'How much is it?' သို့မဟုတ် 'How much does it cost?' ကို သုံးသည်။ ပစ္စည်း များစွာဖြစ်လျှင် 'How much are they?' ဟု မေးသည်။",
          "ငွေပမာဏကို ဖတ်သည့်အခါ 'twelve thousand five hundred kyat' ဟု ရေးထားသည့်အတိုင်း ဖတ်သည်။ ဒေါ်လာနှင့် ဆန့်တွင် အစက်ကို 'point' ဟု ဖတ်သည် — $5.50 = five dollars fifty / five point five zero dollars။",
          "ဤပလက်ဖောင်းတွင် ငွေကြေး လဲလှယ်မှု သို့မဟုတ် အချက်အလက် တိုက်ရိုက် မပါပါ။ ဂဏန်း ဖတ်နည်း လေ့ကျင့်ခန်းသာ ဖြစ်သည်။",
        ],
      },
    ],
    examples: [
      { en: "This phone costs four hundred and fifty thousand kyat.", mm: "ဒီဖုန်းက လေးသိန်း ငါးသောင်း ကျပ် ကျသည်။" },
      { en: "Thousands of people visited the festival.", mm: "ပွဲတော်သို့ လူ ထောင်ချီ လာရောက်ခဲ့သည်။", note: "မသေချာသော အရေအတွက်တွင် thousands of။" },
      { en: "I paid twenty-five dollars for the ticket.", mm: "လက်မှတ်အတွက် နှစ်ဆယ့်ငါး ဒေါ်လာ ပေးခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "I have two hundreds books.", right: "I have two hundred books.", why: "တိကျသော ဂဏန်း ရှေ့တွင် s မယူပါ။" },
      { wrong: "Hundred of students came.", right: "Hundreds of students came.", why: "မသေချာသော အရေအတွက်တွင် hundreds of ဟု s ယူသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "How do we read 2,750?", promptMm: "မှန်ကန်သည့် ဖတ်ပုံ ရွေးပါ။", options: ["two thousand seven hundred and fifty", "twenty-seven fifty", "two hundreds seven fifty", "two thousand and seventy-five"], answer: 0, explanation: "ထောင် နှစ်ခု + ရာ ခုနစ်ခု + ငါးဆယ်။", topic: "numbers" },
      { type: "mcq", prompt: "Which is correct?", promptMm: "မှန်ကန်သည့် ဝါကျ ရွေးပါ။", options: ["three thousands people", "three thousand people", "thousand of people", "three thousands of people"], answer: 1, explanation: "တိကျသော ဂဏန်းနှင့် thousand ကို s မယူပါ။", topic: "numbers" },
      { type: "fill", prompt: "The house costs 500,000 kyat — five hundred ___ kyat.", promptMm: "ဂဏန်း စကားလုံး ဖြည့်ပါ။", answers: ["thousand"], explanation: "500,000 = five hundred thousand။", topic: "numbers" },
      { type: "correct", prompt: "Correct: I need two hundreds envelopes.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I need two hundred envelopes.", "I need two hundred envelopes"], explanation: "two hundred + ဗဟုဝုဏ်း နာမ်။", topic: "numbers" },
    ],
    independent: [
      { type: "mcq", prompt: "How much is '1,250 kyat'?", promptMm: "ဖတ်ပုံ ရွေးပါ။", options: ["one thousand two hundred and fifty", "one hundred and twenty-five", "twelve hundred and five", "one thousand twenty-five"], answer: 0, explanation: "1,250 = one thousand two hundred and fifty။", topic: "numbers" },
      { type: "fill", prompt: "___ of tourists visit Bagan every year.", promptMm: "Thousand(s) ဖြည့်ပါ။", answers: ["Thousands"], explanation: "မသေချာသော အရေအတွက် → thousands of။", topic: "numbers" },
      { type: "order", prompt: "Arrange the sentence.", promptMm: "စီပါ။", tokens: ["costs", "This", "fifty", "bag", "thousand", "kyat"], answer: "This bag costs fifty thousand kyat", explanation: "ကတ္တား + costs + ငွေပမာဏ။", topic: "numbers" },
      { type: "translate", prompt: "Translate: ဒီစာအုပ်က ရှစ်ထောင် ကျပ် ကျတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["This book costs eight thousand kyat.", "This book is eight thousand kyat.", "The book costs 8,000 kyat."], explanation: "costs + ဂဏန်း + kyat။", topic: "numbers" },
    ],
    review: [
      { q: "hundred/thousand/million တွင် s ဘယ်အခါ ယူသလဲ။", a: "တိကျသော ဂဏန်း ရှေ့တွင် s မယူပါ (two hundred)။ 'hundreds of', 'thousands of' ကဲ့သို့ မသေချာသော အရေအတွက်တွင် s ယူသည်။" },
      { q: "ဈေးနှုန်း မေးရန် ဘယ်လို ပြောမလဲ။", a: "'How much is it?' သို့မဟုတ် 'How much does it cost?' ဟု မေးနိုင်သည်။" },
    ],
    summary: [
      "ဂဏန်းကို သုံးလုံးတစ်အုပ် ခွဲပြီး thousand/million ဖြင့် ဖတ်သည်။",
      "တိကျသော ဂဏန်းတွင် hundred/thousand s မယူပါ။",
      "hundreds of, thousands of သည် မသေချာသော အရေအတွက် ဖြစ်သည်။",
    ],
    mastery: [
      "ဂဏန်း ၁၀ ခုကို အင်္ဂလိပ်လို မှန်ကန်စွာ ဖတ်နိုင်သည်။",
      "ဈေးနှုန်း ပြောသော ဝါကျ ၅ ခု ရေးနိုင်သည်။",
    ],
    topics: ["numbers", "shopping", "money"],
  },
  {
    id: "a19-asking-questions",
    moduleId: "A",
    title: "Forming Questions",
    titleMm: "မေးခွန်း ဖွဲ့ခြင်း",
    level: "A2",
    minutes: 20,
    summaryLine:
      "Yes/No မေးခွန်း၊ Wh- မေးခွန်းနှင့် ကြိယာ အမျိုးအစား အလိုက် မေးခွန်း ဖွဲ့ပုံကို စနစ်တကျ လေ့ကျင့်သည်။",
    objectives: [
      "be ကြိယာနှင့် action ကြိယာအတွက် မေးခွန်း ဖွဲ့ပုံ ကွဲပြားမှုကို နားလည်မည်။",
      "Wh- မေးခွန်း ၇ မျိုး ဖွဲ့နိုင်မည်။",
      "မေးခွန်း အမှားများကို ပြင်နိုင်မည်။",
    ],
    vocab: [
      { en: "question word", mm: "မေးခွန်း စကားလုံး", ipa: "ˈkwestʃən wɜːd", pos: "noun", example: "What, where and when are question words.", exampleMm: "what, where, when တို့သည် မေးခွန်း စကားလုံးများ ဖြစ်သည်။", topic: "questions", level: "A2" },
      { en: "auxiliary verb", mm: "အကူကြိယာ", ipa: "ɔːɡˈzɪliəri vɜːb", pos: "noun", example: "Do, does and did are auxiliary verbs.", exampleMm: "do, does, did တို့သည် အကူကြိယာများ ဖြစ်သည်။", topic: "questions", level: "A2" },
      { en: "ask", mm: "မေးသည်", ipa: "ɑːsk", pos: "verb", example: "May I ask a question?", exampleMm: "မေးခွန်း တစ်ခု မေးလို့ ရမလား။", topic: "questions", level: "A1" },
      { en: "answer", mm: "ဖြေသည် / အဖြေ", ipa: "ˈɑːnsə", pos: "verb", example: "Please answer in a full sentence.", exampleMm: "ဝါကျ အပြည့်ဖြင့် ဖြေပါ။", topic: "questions", level: "A1" },
    ],
    sections: [
      {
        heading: "Yes/No မေးခွန်း",
        body: [
          "be ကြိယာ (am/is/are/was/were) ပါသော ဝါကျတွင် be ကို ရှေ့သို့ ရွှေ့သည် — 'She is a teacher.' → 'Is she a teacher?'",
          "Action ကြိယာ ပါသော ဝါကျတွင် do/does/did ကို ရှေ့ထည့်ပြီး ကြိယာကို မူလပုံစံ ပြန်ထားသည် — 'She works here.' → 'Does she work here?' (works → work)။",
          "Modal (can, will, should) ပါလျှင် modal ကို ရှေ့ရွှေ့သည် — 'You can swim.' → 'Can you swim?'",
        ],
        table: {
          headers: ["အပြောဝါကျ", "မေးခွန်း", "အကူကြိယာ"],
          rows: [
            ["You are tired.", "Are you tired?", "be"],
            ["He likes tea.", "Does he like tea?", "does"],
            ["They went home.", "Did they go home?", "did"],
            ["She can drive.", "Can she drive?", "modal"],
          ],
        },
      },
      {
        heading: "Wh- မေးခွန်း",
        body: [
          "Wh- စကားလုံးများမှာ what (ဘာ), where (ဘယ်မှာ), when (ဘယ်တော့), who (ဘယ်သူ), why (ဘာကြောင့်), which (ဘယ်ဟာ), how (ဘယ်လို) ဖြစ်သည်။",
          "Wh- စကားလုံးသည် အကူကြိယာ ရှေ့တွင် လာသည် — 'Where do you live?', 'What is your name?'. ကတ္တားကို မေးသော 'who' သည် ကြိယာ အကူအညီ မလိုဘဲ တိုက်ရိုက် ကတ္တားနေရာတွင် ထားသည် — 'Who called you?'",
          "'How' နှင့် တွဲသော ပုံစံများ — how much (ဘယ်လောက် ဈေး/အရေအတွက်), how many (ဘယ်နှစ်ခု), how long (ဘယ်လောက်ကြာ), how often (ဘယ်လောက် မကြာခဏ)။",
        ],
      },
    ],
    examples: [
      { en: "Where do you work?", mm: "ဘယ်မှာ အလုပ်လုပ်ပါသလဲ။" },
      { en: "Why did she leave early?", mm: "သူမ ဘာကြောင့် စောပြီး ထွက်သွားခဲ့သလဲ။" },
      { en: "How many brothers do you have?", mm: "အကို/မောင် ဘယ်နှစ်ဦး ရှိပါသလဲ။" },
    ],
    mistakes: [
      { wrong: "Does she works here?", right: "Does she work here?", why: "does ပါလျှင် ကြိယာသည် မူလပုံစံ ဖြစ်ရသည်။" },
      { wrong: "Where you live?", right: "Where do you live?", why: "Wh- မေးခွန်းတွင်လည်း အကူကြိယာ လိုသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "___ he speak English?", promptMm: "အကူကြိယာ ရွေးပါ။", options: ["Do", "Does", "Is", "Are"], answer: 1, explanation: "he + action verb → does။", topic: "questions" },
      { type: "mcq", prompt: "___ are you late?", promptMm: "Wh- စကားလုံး ရွေးပါ။", options: ["What", "Why", "Who", "Which"], answer: 1, explanation: "အကြောင်းရင်း မေးရန် why။", topic: "questions" },
      { type: "fill", prompt: "___ long does the journey take?", promptMm: "Wh- စကားလုံး ဖြည့်ပါ။", answers: ["How"], explanation: "how long = ဘယ်လောက်ကြာ။", topic: "questions" },
      { type: "order", prompt: "Arrange the question.", promptMm: "မေးခွန်း စီပါ။", tokens: ["do", "Where", "live", "you"], answer: "Where do you live", explanation: "Wh- + အကူကြိယာ + ကတ္တား + ကြိယာ။", topic: "questions" },
    ],
    independent: [
      { type: "mcq", prompt: "___ she a doctor?", promptMm: "be မေးခွန်း ရွေးပါ။", options: ["Does", "Is", "Do", "Has"], answer: 1, explanation: "be ကြိယာမေးခွန်း → Is she…?", topic: "questions" },
      { type: "correct", prompt: "Correct: What you are doing?", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["What are you doing?", "What are you doing"], explanation: "Wh- + be + ကတ္တား + ကြိယာ-ing။", topic: "questions" },
      { type: "fill", prompt: "___ many students are in the class?", promptMm: "Wh- စကားလုံး ဖြည့်ပါ။", answers: ["How"], explanation: "how many + ဗဟုဝုဏ်း နာမ်။", topic: "questions" },
      { type: "translate", prompt: "Translate: မင်း ဘယ်တော့ ကျောင်းပြီးလဲ။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["When do you finish school?", "When will you finish school?", "When do you graduate?"], explanation: "When + do/will + ကတ္တား + ကြိယာ။", topic: "questions" },
    ],
    review: [
      { q: "ကတ္တားကို မေးသော 'who' မေးခွန်းတွင် do/does လိုသလား။", a: "မလိုပါ။ 'Who called you?' ဟု ကြိယာကို တိုက်ရိုက် သုံးသည်။ သို့သော် 'Who did you call?' တွင် ကံကို မေးသဖြင့် did လိုသည်။" },
      { q: "does ပါလျှင် ကြိယာ ဘယ်လို ပြောင်းသနည်း။", a: "မူလပုံစံ (base form) ပြန်ထားရသည် — does she work (works မဟုတ်)။" },
    ],
    summary: [
      "be ကြိယာမေးခွန်းတွင် be ကို ရှေ့ရွှေ့သည်။",
      "Action ကြိယာမေးခွန်းတွင် do/does/did ကို ရှေ့ထည့်ပြီး ကြိယာကို မူလပုံစံ ထားသည်။",
      "Wh- စကားလုံးသည် အကူကြိယာ ရှေ့တွင် လာသည်။",
    ],
    mastery: [
      "မေးခွန်း ၁၀ ခုကို မှန်ကန်စွာ ဖွဲ့နိုင်သည်။",
      "Wh- မေးခွန်း ၇ မျိုး ကိုယ်တိုင် ရေးနိုင်သည်။",
    ],
    topics: ["questions", "auxiliary verbs", "word order"],
  },
  {
    id: "a20-short-answers",
    moduleId: "A",
    title: "Short Answers and Responses",
    titleMm: "အတိုချုံး ဖြေခြင်း",
    level: "A2",
    minutes: 15,
    summaryLine:
      "Yes/No မေးခွန်းများကို အတိုချုံး ဖြေနည်း၊ သဘောတူ/မတူ ပြခြင်းနှင့် နေ့စဉ် စကားပြောတွင် သဘာဝကျသော တုံ့ပြန်မှုများ။",
    objectives: [
      "အတိုချုံး အဖြေ (Yes, I do. / No, she doesn't.) ကို မှန်ကန်စွာ ဖွဲ့နိုင်မည်။",
      "So/neither ဖြင့် သဘောတူမှု ပြနိုင်မည်။",
      "ဖြေရာတွင် ကတ္တားနှင့် အကူကြိယာ ကိုက်ညီမှုကို စစ်နိုင်မည်။",
    ],
    vocab: [
      { en: "exactly", mm: "အတိအကျ", ipa: "ɪɡˈzæktli", pos: "adverb", example: "Exactly! That is what I meant.", exampleMm: "အတိအကျပဲ။ ငါဆိုလိုတာ ဒါပဲ။", topic: "responses", level: "A2" },
      { en: "not really", mm: "သိပ်မဟုတ်ပါ", ipa: "nɒt ˈrɪəli", pos: "phrase", example: "Do you like coffee? Not really.", exampleMm: "ကော်ဖီ ကြိုက်လား။ သိပ်မကြိုက်ပါ။", topic: "responses", level: "A2" },
      { en: "I'm afraid not", mm: "မဖြစ်နိုင်ပါ (ယဉ်ကျေးစွာ ငြင်း)", ipa: "aɪm əˈfreɪd nɒt", pos: "phrase", example: "Can you come? I'm afraid not.", exampleMm: "လာနိုင်လား။ မဖြစ်နိုင်ပါ။", topic: "responses", level: "B1" },
      { en: "of course", mm: "ဟုတ်တာပေါ့", ipa: "əv kɔːs", pos: "phrase", example: "Of course you can borrow it.", exampleMm: "ဟုတ်တာပေါ့၊ ငှားလို့ ရတယ်။", topic: "responses", level: "A2" },
    ],
    sections: [
      {
        heading: "အတိုချုံး အဖြေ ဖွဲ့ပုံ",
        body: [
          "Yes/No မေးခွန်း၏ အတိုချုံး အဖြေတွင် Yes/No + ကတ္တား + အကူကြိယာ ပါဝင်သည် — 'Do you like tea?' → 'Yes, I do.' / 'No, I don't.'",
          "be ကြိယာ မေးခွန်းတွင် be ဖြင့် ပြန်ဖြေသည် — 'Are you a student?' → 'Yes, I am.' ကြိယာကို ပြန်မလုပ်ပါ — 'Yes, I am a student.' သည် အပြည့်အစုံ ဖြေချက် ဖြစ်သည်။",
          "မေးခွန်း၏ ကတ္တားနှင့် အဖြေ၏ ကတ္တား ကိုက်ညီရမည်။ 'Does she work here?' → 'Yes, she does.' ('Yes, he does.' မဖြစ်ပါ)။",
        ],
        table: {
          headers: ["မေးခွန်း", "အပြုသဘော", "အပျက်သဘော"],
          rows: [
            ["Do you like tea?", "Yes, I do.", "No, I don't."],
            ["Is he here?", "Yes, he is.", "No, he isn't."],
            ["Can she swim?", "Yes, she can.", "No, she can't."],
            ["Did they come?", "Yes, they did.", "No, they didn't."],
          ],
        },
      },
      {
        heading: "သဘောတူမှု ပြခြင်း — So / Neither",
        body: [
          "အပြုသဘော သဘောတူမှုအတွက် 'So do I.', 'So am I.', 'So can I.' ကို သုံးသည်။ 'I like coffee.' → 'So do I.'",
          "အပျက်သဘော သဘောတူမှုအတွက် 'Neither do I.', 'Neither am I.' ကို သုံးသည်။ 'I don't like tea.' → 'Neither do I.'",
          "အကူကြိယာသည် ပထမ ဝါကျ၏ ကာလနှင့် ကိုက်ညီရသည် — 'I went there.' → 'So did I.' ('So do I' မဟုတ်)။",
        ],
      },
    ],
    examples: [
      { en: "Do you speak Japanese? — No, I don't, but I'd like to learn.", mm: "ဂျပန်လို ပြောနိုင်လား။ မပြောနိုင်ပါ၊ ဒါပေမယ့် သင်ချင်တယ်။" },
      { en: "I love this song. — So do I!", mm: "ဒီသီချင်း ကြိုက်တယ်။ ငါလည်း ကြိုက်တယ်။" },
      { en: "I can't come tomorrow. — Neither can I.", mm: "မနက်ဖြန် မလာနိုင်ဘူး။ ငါလည်း မလာနိုင်ဘူး။" },
    ],
    mistakes: [
      { wrong: "Yes, I like.", right: "Yes, I do.", why: "အတိုချုံး အဖြေတွင် ကြိယာ အပြည့် မလိုပါ၊ အကူကြိယာ သုံးသည်။" },
      { wrong: "Yes, she is work here.", right: "Yes, she does.", why: "မေးခွန်းက does ဖြင့် မေးထားသဖြင့် does ဖြင့် ပြန်ဖြေသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "'Are you hungry?' — Choose the short answer.", promptMm: "အတိုချုံး အဖြေ ရွေးပါ။", options: ["Yes, I do.", "Yes, I am.", "Yes, I have.", "Yes, I hungry."], answer: 1, explanation: "be မေးခွန်း → be ဖြင့် ဖြေသည်။", topic: "short answers" },
      { type: "mcq", prompt: "'I don't have a car.' — Respond.", promptMm: "သဘောတူမှု ရွေးပါ။", options: ["So do I.", "Neither do I.", "So am I.", "Neither am I."], answer: 1, explanation: "အပျက်သဘော + do → Neither do I။", topic: "short answers" },
      { type: "fill", prompt: "'Did they finish?' — 'Yes, they ___.'", promptMm: "အကူကြိယာ ဖြည့်ပါ။", answers: ["did"], explanation: "did ဖြင့် မေးထားသဖြင့် did ဖြင့် ဖြေသည်။", topic: "short answers" },
      { type: "correct", prompt: "Correct: No, I don't like.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["No, I don't.", "No, I do not."], explanation: "အတိုချုံး အဖြေတွင် ကြိယာ မလိုပါ။", topic: "short answers" },
    ],
    independent: [
      { type: "mcq", prompt: "'Can she drive?' — 'No, she ___.'", promptMm: "ဖြည့်ပါ။", options: ["can't", "doesn't", "isn't", "don't"], answer: 0, explanation: "can မေးခွန်း → can't ဖြင့် ဖြေ။", topic: "short answers" },
      { type: "fill", prompt: "'I am tired.' — '___ am I.'", promptMm: "So/Neither ဖြည့်ပါ။", answers: ["So"], explanation: "အပြုသဘော သဘောတူမှု → So am I။", topic: "short answers" },
      { type: "mcq", prompt: "Which is the most polite refusal?", promptMm: "ယဉ်ကျေးသည့် ငြင်းချက် ရွေးပါ။", options: ["No.", "No way.", "I'm afraid not.", "Not possible."], answer: 2, explanation: "I'm afraid not သည် ယဉ်ကျေးသည်။", topic: "short answers" },
      { type: "translate", prompt: "Translate: 'မင်း ဒီမှာ နေလား။' — 'ဟုတ်တယ်၊ နေတယ်။'", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Do you live here? Yes, I do.", "Do you live here? — Yes, I do.", "Do you live here? Yes, I do"], explanation: "Do မေးခွန်း → Yes, I do။", topic: "short answers" },
    ],
    review: [
      { q: "အတိုချုံး အဖြေတွင် ဘာတွေ ပါဝင်သလဲ။", a: "Yes/No + ကတ္တား + အကူကြိယာ (သို့မဟုတ် be) ပါဝင်သည် — Yes, I do. / No, she isn't." },
      { q: "So နှင့် Neither ကို ဘယ်လို ခွဲသုံးမလဲ။", a: "အပြုသဘော သဘောတူမှုအတွက် So၊ အပျက်သဘောအတွက် Neither ကို သုံးပြီး အကူကြိယာကို ပထမ ဝါကျနှင့် ကိုက်ညီစေရသည်။" },
    ],
    summary: [
      "အတိုချုံး အဖြေတွင် အကူကြိယာကို ပြန်သုံးသည်။",
      "မေးခွန်း၏ ကတ္တားနှင့် ကိုက်ညီသော နာမ်စား သုံးရသည်။",
      "So do I / Neither do I ဖြင့် သဘောတူမှု ပြနိုင်သည်။",
    ],
    mastery: [
      "မေးခွန်း ၁၀ ခုအတွက် အတိုချုံး အဖြေကို ၉ ခု မှန်ကန်စွာ ပေးနိုင်သည်။",
      "So/Neither ပါသော ဝါကျ ၄ ခု ရေးနိုင်သည်။",
    ],
    topics: ["short answers", "responses", "auxiliary verbs"],
  },
  {
    id: "a21-articles",
    moduleId: "A",
    title: "Articles: a, an, the",
    titleMm: "Article သုံးခြင်း",
    level: "A2",
    minutes: 20,
    summaryLine:
      "a/an/the နှင့် article မသုံးသည့် အခြေအနေများကို ခွဲခြားပြီး နေ့စဉ် ဝါကျများတွင် မှန်ကန်စွာ သုံးနည်း။",
    objectives: [
      "a နှင့် an ကို အသံအပေါ် အခြေခံ၍ ရွေးနိုင်မည်။",
      "the ကို တိကျသော/သိပြီးသား နာမ်အတွက် သုံးနိုင်မည်။",
      "article မလိုသည့် အခြေအနေ ၅ မျိုးကို မှတ်သားမည်။",
    ],
    vocab: [
      { en: "singular", mm: "အနည်းကိန်း", ipa: "ˈsɪŋɡjələ", pos: "adjective", example: "Use 'a' before a singular countable noun.", exampleMm: "အနည်းကိန်း ရေတွက်နိုင်သော နာမ် ရှေ့တွင် a ကို သုံးသည်။", topic: "articles", level: "A2" },
      { en: "plural", mm: "ဗဟုဝုဏ်း", ipa: "ˈplʊərəl", pos: "adjective", example: "Do not use 'a' with plural nouns.", exampleMm: "ဗဟုဝုဏ်း နာမ်နှင့် a ကို မသုံးပါ။", topic: "articles", level: "A2" },
      { en: "specific", mm: "တိကျသော", ipa: "spəˈsɪfɪk", pos: "adjective", example: "We use 'the' for a specific thing.", exampleMm: "တိကျသော အရာအတွက် the ကို သုံးသည်။", topic: "articles", level: "A2" },
      { en: "general", mm: "ယေဘုယျ", ipa: "ˈdʒenrəl", pos: "adjective", example: "In general statements, we often use no article.", exampleMm: "ယေဘုယျ ဖော်ပြချက်များတွင် article မသုံးလေ့ ရှိသည်။", topic: "articles", level: "A2" },
    ],
    sections: [
      {
        heading: "a နှင့် an",
        body: [
          "a/an ကို အနည်းကိန်း ရေတွက်နိုင်သော နာမ် ရှေ့တွင် သုံးပြီး 'တစ်ခု' ဟု အဓိပ္ပာယ်ရသည် — a book, an apple။",
          "ရွေးချယ်မှုသည် စာလုံး၏ ပထမ အက္ခရာမဟုတ်ဘဲ အသံအပေါ် မူတည်သည်။ သရသံ ဖြင့် စသည့် စကားလုံးများတွင် an ကို သုံးသည် — an hour (h မထွက်), an honest man, an MBA (em ဟု ဖတ်သည်)။ ဗျည်းသံ ဖြင့် စသည့် 'university', 'European' တွင် a ကို သုံးသည် — a university, a European country။",
        ],
        table: {
          headers: ["အခြေအနေ", "ဥပမာ"],
          rows: [
            ["သရသံ ဖြင့် စသည်", "an apple, an egg, an idea"],
            ["မထွက်သော h", "an hour, an honest person"],
            ["'you' သံ ဖြင့် စသည်", "a university, a user"],
            ["ဗျည်းသံ ဖြင့် စသည်", "a book, a car, a house"],
          ],
        },
      },
      {
        heading: "the နှင့် article မသုံးသည့် အခါ",
        body: [
          "the ကို ပြောသူနှင့် နားထောင်သူ နှစ်ဦးလုံး သိပြီးသား၊ တိကျသော အရာအတွက် သုံးသည် — 'Close the door.' (ဒီအခန်းထဲက တံခါး)။ တစ်ခုတည်းသော အရာ — the sun, the moon, the Internet။",
          "the ကို မသုံးသည့် အခြေအနေများ — ဗဟုဝုဏ်းဖြင့် ယေဘုယျ ပြောလျှင် (I like dogs), မရေတွက်နိုင်သော နာမ် ယေဘုယျ (Water is important), အမည်များ (Myanmar, Yangon, Mount Popa), ဘာသာစကား/ဘာသာရပ် (I study English), မွေးနေ့/နေ့အမည်များ (on Monday)။",
          "'go to school / go to bed / go home' ကဲ့သို့ အသုံးအနှုန်းများတွင် article မပါပါ။ သို့သော် 'go to the bank / the market' တွင် the ပါသည်။",
        ],
      },
    ],
    examples: [
      { en: "I saw a dog in the park. The dog was very friendly.", mm: "ပန်းခြံထဲတွင် ခွေးတစ်ကောင် တွေ့ခဲ့သည်။ အဲဒီခွေးက အလွန် ဖော်ရွေသည်။", note: "ပထမအကြိမ် a၊ ဒုတိယအကြိမ် the။" },
      { en: "She studies at a university in Yangon.", mm: "သူမ ရန်ကုန်ရှိ တက္ကသိုလ်တစ်ခုတွင် ပညာသင် နေသည်။" },
      { en: "Honesty is the best policy.", mm: "ရိုးသားမှုသည် အကောင်းဆုံး မူဝါဒ ဖြစ်သည်။" },
    ],
    mistakes: [
      { wrong: "I waited for a hour.", right: "I waited for an hour.", why: "hour ၏ h မထွက်သဖြင့် သရသံဖြင့် စသည်။" },
      { wrong: "I like the dogs. (ယေဘုယျ ပြောလျှင်)", right: "I like dogs.", why: "ယေဘုယျ ဗဟုဝုဏ်းတွင် the မသုံးပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "She is ___ engineer.", promptMm: "a/an ရွေးပါ။", options: ["a", "an", "the", "no article"], answer: 1, explanation: "engineer သည် သရသံဖြင့် စသည်။", topic: "articles" },
      { type: "mcq", prompt: "He studies at ___ university in Bangkok.", promptMm: "ရွေးပါ။", options: ["a", "an", "the", "no article"], answer: 0, explanation: "university သည် 'you' သံဖြင့် စသဖြင့် a။", topic: "articles" },
      { type: "fill", prompt: "Please close ___ door.", promptMm: "article ဖြည့်ပါ။", answers: ["the"], explanation: "တိကျသော တံခါး → the။", topic: "articles" },
      { type: "correct", prompt: "Correct: I want to be a honest person.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I want to be an honest person.", "I want to be an honest person"], explanation: "honest ၏ h မထွက်သဖြင့် an။", topic: "articles" },
    ],
    independent: [
      { type: "mcq", prompt: "___ sun rises in the east.", promptMm: "ရွေးပါ။", options: ["A", "An", "The", "No article"], answer: 2, explanation: "တစ်ခုတည်းသော အရာ → the။", topic: "articles" },
      { type: "mcq", prompt: "Which sentence is correct?", promptMm: "မှန်ကန်သည့် ဝါကျ ရွေးပါ။", options: ["Water is important for life.", "The water is important for life.", "A water is important.", "Waters are important."], answer: 0, explanation: "မရေတွက်နိုင်သော နာမ် ယေဘုယျ → article မလို။", topic: "articles" },
      { type: "fill", prompt: "I go to ___ bed at ten o'clock.", promptMm: "article လိုပါက ဖြည့်ပါ၊ မလိုပါက 'none' ရေးပါ။", answers: ["none", "no article", "-"], explanation: "go to bed တွင် article မပါ။", topic: "articles" },
      { type: "translate", prompt: "Translate: ကျွန်တော် အင်္ဂလိပ်စာ လေ့လာနေတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I am studying English.", "I am learning English.", "I study English."], explanation: "ဘာသာရပ် အမည်ရှေ့တွင် article မလိုပါ။", topic: "articles" },
    ],
    review: [
      { q: "a နှင့် an ကို ဘယ်လို ရွေးမလဲ။", a: "စာလုံး မဟုတ်ဘဲ အသံအပေါ် မူတည်သည်။ သရသံဖြင့် စလျှင် an၊ ဗျည်းသံဖြင့် စလျှင် a။" },
      { q: "the ကို ဘယ်အခါ မသုံးသင့်ဘူးလဲ။", a: "ယေဘုယျ ဗဟုဝုဏ်း (I like dogs)၊ ယေဘုယျ မရေတွက်နိုင်သော နာမ် (Water is important)၊ လူ/နေရာ အမည်များ၊ ဘာသာစကား/ဘာသာရပ် များတွင် မသုံးပါ။" },
    ],
    summary: [
      "a/an သည် အနည်းကိန်း ရေတွက်နိုင်သော နာမ် အတွက် ဖြစ်ပြီး အသံအပေါ် မူတည်သည်။",
      "the သည် တိကျသော၊ သိပြီးသား၊ တစ်ခုတည်းသော အရာအတွက် ဖြစ်သည်။",
      "ယေဘုယျ ဖော်ပြချက်များတွင် article မလိုပါ။",
    ],
    mastery: [
      "a/an/the ပါသော ကွက်လပ် ၁၀ ခုတွင် ၈ ခု မှန်ကန်စွာ ဖြည့်နိုင်သည်။",
      "article မလိုသည့် ဝါကျ ၅ ခုကို ခွဲခြားပြနိုင်သည်။",
    ],
    topics: ["articles", "determiners"],
  },
];

export const moduleALessonsPart3: Lesson[] = buildLessons(seeds);
