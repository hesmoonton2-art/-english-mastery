import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "c11-science",
    moduleId: "C",
    title: "Science and Research Vocabulary",
    titleMm: "သိပ္ပံ နှင့် သုတေသန ဝေါဟာရ",
    level: "B2",
    minutes: 22,
    summaryLine: "သုတေသန လုပ်ငန်းစဉ်၊ ဒေတာ နှင့် သိပ္ပံနည်းလမ်း ဆိုင်ရာ ဝေါဟာရများကို တိကျစွာ သုံးနည်း။",
    objectives: ["သုတေသန ဝေါဟာရ ၁၂ ခု သိမည်။", "hypothesis, evidence, conclude စသည်တို့ကို ဝါကျထဲ သုံးနိုင်မည်။", "သုတေသန တွေ့ရှိချက်ကို တိကျစွာ ဖော်ပြနိုင်မည်။"],
    vocab: [
      { en: "hypothesis", mm: "ယူဆချက်", pos: "noun", example: "The hypothesis was tested in three trials.", exampleMm: "ယူဆချက်ကို စမ်းသပ်မှု သုံးကြိမ်ဖြင့် စစ်ဆေးခဲ့သည်။", topic: "science", level: "B2" },
      { en: "evidence", mm: "အထောက်အထား", pos: "noun", example: "There is strong evidence for the theory.", exampleMm: "သီအိုရီအတွက် ခိုင်မာသည့် အထောက်အထား ရှိသည်။", topic: "science", level: "B2" },
      { en: "variable", mm: "ပြောင်းလဲနိုင်သည့် အပိုင်းအခြား", pos: "noun", example: "Temperature was the main variable.", exampleMm: "အပူချိန်သည် အဓိက ပြောင်းလဲနိုင်သည့် အချက် ဖြစ်သည်။", topic: "science", level: "B2" },
      { en: "conclude", mm: "ကောက်ချက်ချသည်", pos: "verb", example: "The authors concluded that more data is needed.", exampleMm: "ဒေတာ ပိုလိုအပ်သည်ဟု စာရေးသူများ ကောက်ချက်ချခဲ့သည်။", topic: "science", level: "B2" },
    ],
    sections: [
      {
        heading: "သုတေသန လုပ်ငန်းစဉ်",
        body: [
          "identify a problem → review the literature → form a hypothesis → design an experiment → collect data → analyse results → draw conclusions → publish findings။",
          "သိပ္ပံ စာတမ်းတွင် passive နှင့် ဓမ္မဓိဋ္ဌာန် လေသံ ကို သုံးလေ့ ရှိသည် — 'Samples were collected daily.' 'The results suggest that…'",
          "'prove' ကို သိပ္ပံတွင် သတိထား သုံးသည်။ များသောအားဖြင့် 'suggest', 'indicate', 'support the hypothesis' ဟု ရေးသည်။",
        ],
        table: { headers: ["ဝေါဟာရ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["sample", "နမူနာ", "a blood sample"], ["significant", "သိသာထင်ရှားသော (စာရင်းအင်း)", "a significant difference"], ["correlation", "ဆက်စပ်မှု", "a strong correlation"], ["replicate", "ထပ်မံ ပြုလုပ်သည်", "replicate the study"]] },
      },
      {
        heading: "တိကျစွာ ဖော်ပြခြင်း",
        body: [
          "ခန့်မှန်းချက် ပြောရန် — 'may', 'might', 'is likely to', 'appears to' ကို သုံးသည်။ 'Water causes X' ဟု သေချာစွာ မပြောဘဲ 'Water may cause X' ဟု ရေးသည်။",
          "'correlation does not imply causation' — ဆက်စပ်မှု ရှိခြင်းက အကြောင်းရင်း ဖြစ်သည်ဟု မဆိုလိုပါ။ ဤအချက်ကို သိပ္ပံ စာတမ်း ဖတ်ရာတွင် သတိထားရသည်။",
        ],
      },
    ],
    examples: [
      { en: "The study suggests that regular exercise may improve memory.", mm: "ပုံမှန် လေ့ကျင့်ခန်းက မှတ်ဉာဏ်ကို ကောင်းစေနိုင်သည်ဟု လေ့လာမှုက ထောက်ပြသည်။" },
      { en: "Researchers analysed data from two thousand participants.", mm: "ပါဝင်သူ နှစ်ထောင်မှ ဒေတာကို သုတေသီများ ခွဲခြမ်း စိတ်ဖြာခဲ့သည်။" },
      { en: "The results were not statistically significant.", mm: "ရလဒ်များသည် စာရင်းအင်းအရ သိသာထင်ရှားမှု မရှိခဲ့ပါ။" },
    ],
    mistakes: [
      { wrong: "The research prove that smoking is bad.", right: "The research shows that smoking is harmful.", why: "research သည် မရေတွက်နိုင်သော နာမ် (အနည်းကိန်း ကြိယာ)။" },
      { wrong: "There are many evidences.", right: "There is a lot of evidence.", why: "evidence သည် ရေတွက်မရ။" },
    ],
    guided: [
      { type: "mcq", prompt: "The scientists ___ an experiment.", promptMm: "ရွေးပါ။", options: ["did", "conducted", "made", "performed on"], answer: 1, explanation: "conduct an experiment။", topic: "science" },
      { type: "fill", prompt: "There is strong ___ that the climate is changing. (အထောက်အထား)", promptMm: "ဖြည့်ပါ။", answers: ["evidence"], explanation: "evidence = အထောက်အထား။", topic: "science" },
      { type: "mcq", prompt: "The study ___ that more research is needed.", promptMm: "ရွေးပါ။", options: ["concludes", "concluding", "conclusion", "concluded that it"], answer: 0, explanation: "the study concludes။", topic: "science" },
      { type: "correct", prompt: "Correct: The datas were collected carefully.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The data were collected carefully.", "The data was collected carefully."], explanation: "data သည် ဗဟုကိန်း (သို့) စုစည်း နာမ်အဖြစ် သုံးသည် — datas မရှိပါ။", topic: "science" },
    ],
    independent: [
      { type: "mcq", prompt: "A possible explanation to be tested is a ___.", promptMm: "ရွေးပါ။", options: ["conclusion", "hypothesis", "variable", "sample"], answer: 1, explanation: "hypothesis = စမ်းသပ်ရန် ယူဆချက်။", topic: "science" },
      { type: "fill", prompt: "The results ___ a strong correlation between sleep and mood.", promptMm: "ဖြည့်ပါ။", answers: ["show", "indicate", "suggest"], explanation: "results show/indicate/suggest။", topic: "science" },
      { type: "mcq", prompt: "Which sentence is the most careful claim?", promptMm: "အသတိအရှိဆုံး အဆို ရွေးပါ။", options: ["This proves the theory.", "This may support the theory.", "This is definitely true.", "Everyone knows this."], answer: 1, explanation: "may support = ခန့်မှန်းချက် ဖြင့် ပြောသည်။", topic: "science" },
      { type: "translate", prompt: "Translate: သုတေသနက ဒီအချက်ကို မထောက်ခံပါဘူး။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["The research does not support this.", "The research doesn't support this claim."], explanation: "support + object။", topic: "science" },
    ],
    review: [
      { q: "evidence ကို ဘာကြောင့် evidences ဟု မရေးသလဲ။", a: "ရေတွက်မရ နာမ် ဖြစ်သဖြင့်။" },
      { q: "correlation နှင့် causation ကွာခြားချက် ဘာလဲ။", a: "correlation = အတူ ဖြစ်နေခြင်း၊ causation = တစ်ခုက အခြားတစ်ခုကို ဖြစ်စေခြင်း။" },
    ],
    summary: ["သုတေသန ဝေါဟာရသည် လုပ်ငန်းစဉ် အဆင့်လိုက် ဖြစ်သည်။", "သိပ္ပံ စာတွင် ခန့်မှန်းချက် လေသံ (may, suggest) ကို သုံးသည်။", "data, evidence, research တို့၏ ရေတွက်နိုင်မှုကို သတိထားရသည်။"],
    mastery: ["ဝေါဟာရ ၁၂ ခုကို မှန်ကန်စွာ သုံးနိုင်သည်။", "သုတေသန တွေ့ရှိချက် ၅ ခုကို သတိထားသော လေသံဖြင့် ရေးနိုင်သည်။"],
    topics: ["science", "academic vocabulary", "research"],
  },
  {
    id: "c12-society-culture",
    moduleId: "C",
    title: "Society, Culture and Community",
    titleMm: "လူမှုအဖွဲ့အစည်း နှင့် ယဉ်ကျေးမှု ဝေါဟာရ",
    level: "B2",
    minutes: 20,
    summaryLine: "လူမှုရေး ပြဿနာ၊ ယဉ်ကျေးမှု ကွဲပြားမှု နှင့် အသိုင်းအဝိုင်း အကြောင်း ဆွေးနွေးရန် ဝေါဟာရ။",
    objectives: ["လူမှုရေး ဝေါဟာရ ၁၂ ခု သိမည်။", "tradition, custom, norm ကဲ့သို့ အနီးစပ် စကားလုံးများကို ခွဲခြားနိုင်မည်။", "လူမှုရေး ကိစ္စ တစ်ခုကို ထင်မြင်ချက် ဖော်ပြနိုင်မည်။"],
    vocab: [
      { en: "tradition", mm: "အစဉ်အလာ", pos: "noun", example: "Water festivals are a long tradition in Myanmar.", exampleMm: "သင်္ကြန်ပွဲသည် မြန်မာတွင် ရှည်ကြာသည့် အစဉ်အလာ ဖြစ်သည်။", topic: "society", level: "B1" },
      { en: "norm", mm: "လူမှု စံတန်ဖိုး", pos: "noun", example: "Social norms differ between cultures.", exampleMm: "လူမှု စံတန်ဖိုးများသည် ယဉ်ကျေးမှုအလိုက် ကွာခြားသည်။", topic: "society", level: "B2" },
      { en: "inequality", mm: "မညီမျှမှု", pos: "noun", example: "Income inequality has widened.", exampleMm: "ဝင်ငွေ မညီမျှမှု ကျယ်လာသည်။", topic: "society", level: "B2" },
      { en: "diversity", mm: "ကွဲပြားမှု", pos: "noun", example: "The city is known for its cultural diversity.", exampleMm: "မြို့သည် ယဉ်ကျေးမှု ကွဲပြားမှုဖြင့် ကျော်ကြားသည်။", topic: "society", level: "B2" },
    ],
    sections: [
      {
        heading: "အနီးစပ် စကားလုံးများ",
        body: [
          "tradition = မျိုးဆက်လိုက် ဆက်ခံသည့် အလေ့အထ။ custom = လူအများ လိုက်နာသည့် ကျင့်ဝတ်။ norm = အသိုင်းအဝိုင်း လက်ခံသည့် စံ။",
          "ethnicity = လူမျိုးစု၊ nationality = နိုင်ငံသားဖြစ်မှု၊ identity = ကိုယ်ပိုင် လက္ခဏာ။",
          "generation gap, gender roles, social mobility, urbanisation ကဲ့သို့ အသုံးအနှုန်းများသည် လူမှုရေး ဆွေးနွေးမှုတွင် အသုံးများသည်။",
        ],
        table: { headers: ["ဝေါဟာရ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["community", "အသိုင်းအဝိုင်း", "a tight-knit community"], ["heritage", "အမွေအနှစ်", "cultural heritage"], ["migration", "ရွှေ့ပြောင်းမှု", "rural-to-urban migration"], ["prejudice", "အစွဲအလမ်း", "tackle prejudice"]] },
      },
      {
        heading: "ထင်မြင်ချက် ဖော်ပြခြင်း",
        body: [
          "အကြောင်းရင်း ပေးရန် — 'One reason for this is…' 'This is largely because…'",
          "ဟန်ချက်ညီစွာ ပြောရန် — 'On the one hand… on the other hand…' 'While it is true that…, it is also the case that…'",
          "ရှောင်ကြဉ်ရန် — လူမျိုး/ဘာသာ/ကျား-မ အပေါ် ယေဘုယျချော်ချခြင်း (generalisation) ကို ရှောင်ပြီး 'some', 'many', 'in many cases' ကဲ့သို့ သတိထားသော စကားလုံး သုံးသည်။",
        ],
      },
    ],
    examples: [
      { en: "Urbanisation has changed the way families live together.", mm: "မြို့ပြအသွင်ကူးပြောင်းမှုက မိသားစုများ အတူနေထိုင်သည့် ပုံစံကို ပြောင်းလဲစေခဲ့သည်။" },
      { en: "In many communities, elders still play a central role.", mm: "အသိုင်းအဝိုင်း အတော်များတွင် သက်ကြီးရွယ်အိုများက အဓိက အခန်းကဏ္ဍတွင် ရှိနေသည်။" },
      { en: "While traditions matter, some customs are being questioned.", mm: "အစဉ်အလာများ အရေးကြီးသော်လည်း အချို့ ဓလေ့များကို မေးခွန်း ထုတ်လာကြသည်။" },
    ],
    mistakes: [
      { wrong: "All Burmese people like spicy food.", right: "Many Burmese people like spicy food.", why: "ယေဘုယျချော်ချခြင်းကို ရှောင်ရသည်။" },
      { wrong: "The society is changing.", right: "Society is changing.", why: "ယေဘုယျအဓိပ္ပာယ်ဖြင့် society တွင် the မလိုပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "Cultural ___ includes languages and festivals.", promptMm: "ရွေးပါ။", options: ["heritage", "heredity", "heir", "hermit"], answer: 0, explanation: "cultural heritage = ယဉ်ကျေးမှု အမွေအနှစ်။", topic: "society" },
      { type: "fill", prompt: "Income ___ has increased in many cities. (မညီမျှမှု)", promptMm: "ဖြည့်ပါ။", answers: ["inequality"], explanation: "income inequality။", topic: "society" },
      { type: "mcq", prompt: "Which is a 'norm'?", promptMm: "ရွေးပါ။", options: ["A law passed by parliament", "An unwritten rule about behaviour", "A national holiday", "A family recipe"], answer: 1, explanation: "norm = လူမှု စံ။", topic: "society" },
      { type: "correct", prompt: "Correct: The most of people agree with this.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["Most people agree with this."], explanation: "most of the people / most people — 'the most of people' မှားသည်။", topic: "society" },
    ],
    independent: [
      { type: "mcq", prompt: "Moving from villages to cities is called ___.", promptMm: "ရွေးပါ။", options: ["migration", "immigration", "urbanisation", "emigration"], answer: 2, explanation: "urbanisation = မြို့ပြအသွင်ကူးပြောင်းမှု။", topic: "society" },
      { type: "fill", prompt: "The government aims to reduce social ___. (မညီမျှမှု)", promptMm: "ဖြည့်ပါ။", answers: ["inequality"], explanation: "social inequality။", topic: "society" },
      { type: "mcq", prompt: "Which phrase introduces a balanced view?", promptMm: "ရွေးပါ။", options: ["Everyone knows…", "On the one hand… on the other hand…", "It is obvious…", "There is no doubt…"], answer: 1, explanation: "ဟန်ချက်ညီသော အမြင် ဖော်ပြချက်။", topic: "society" },
      { type: "translate", prompt: "Translate: ကျွန်တော်တို့ အသိုင်းအဝိုင်းမှာ သက်ကြီးရွယ်အိုတွေကို လေးစားတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["In our community, elders are respected.", "Our community respects elders."], explanation: "community + passive/active။", topic: "society" },
    ],
    review: [
      { q: "tradition နှင့် custom ကွာခြားချက် ဘာလဲ။", a: "tradition သည် မျိုးဆက်လိုက် ဆက်ခံသည့် အလေ့အထ၊ custom သည် လူအများ လိုက်နာသည့် ကျင့်ဝတ်။" },
      { q: "ယေဘုယျချော်ချခြင်းကို ဘယ်လို ရှောင်သလဲ။", a: "some, many, in many cases ကဲ့သို့ သတိထားသော စကားလုံး သုံးသည်။" },
    ],
    summary: ["လူမှုရေး ဝေါဟာရတွင် ယဉ်ကျေးမှု၊ မညီမျှမှု နှင့် ရွှေ့ပြောင်းမှု အုပ်စုများ ရှိသည်။", "အနီးစပ် စကားလုံးများကို အနက်ကွဲပြားချက်ဖြင့် ခွဲခြားရသည်။", "ဟန်ချက်ညီသော လေသံဖြင့် ထင်မြင်ချက် ဖော်ပြခြင်းက ယုံကြည်မှု တည်ဆောက်သည်။"],
    mastery: ["ဝေါဟာရ ၁၂ ခုကို အဓိပ္ပာယ် ဖော်ပြနိုင်သည်။", "လူမှုရေး ကိစ္စ တစ်ခုအပေါ် ထင်မြင်ချက် စာပိုဒ် ၁၀၀ လုံး ရေးနိုင်သည်။"],
    topics: ["society", "culture", "vocabulary"],
  },
  {
    id: "c13-emotions-personality",
    moduleId: "C",
    title: "Emotions and Personality",
    titleMm: "ခံစားချက် နှင့် ကိုယ်ရည်ကိုယ်သွေး ဝေါဟာရ",
    level: "B1",
    minutes: 20,
    summaryLine: "ခံစားချက်များကို တိကျစွာ ဖော်ပြရန် ဝေါဟာရ နှင့် -ed/-ing နာမဝိသေသန ကွာခြားချက်။",
    objectives: ["ခံစားချက် ဝေါဟာရ ၁၂ ခု သိမည်။", "-ed နှင့် -ing နာမဝိသေသန ခွဲခြားနိုင်မည်။", "ကိုယ်ရည်ကိုယ်သွေး ဖော်ပြနိုင်မည်။"],
    vocab: [
      { en: "relieved", mm: "စိတ်သက်သာရာရသော", pos: "adjective", example: "I was relieved when the results came out.", exampleMm: "ရလဒ် ထွက်လာတော့ စိတ်သက်သာရာရခဲ့သည်။", topic: "emotions", level: "B1" },
      { en: "anxious", mm: "စိုးရိမ်သော", pos: "adjective", example: "She felt anxious before the interview.", exampleMm: "အင်တာဗျူ မတိုင်မီ သူမ စိုးရိမ်ခဲ့သည်။", topic: "emotions", level: "B1" },
      { en: "outgoing", mm: "ပေါင်းသင်းဆက်ဆံရ လွယ်သော", pos: "adjective", example: "He is outgoing and makes friends easily.", exampleMm: "သူက ပေါင်းသင်းရလွယ်ပြီး မိတ်ဆွေ လွယ်လွယ် ရသည်။", topic: "personality", level: "B1" },
      { en: "reliable", mm: "ယုံကြည်စိတ်ချရသော", pos: "adjective", example: "She is a reliable colleague.", exampleMm: "သူမက ယုံကြည်စိတ်ချရသည့် လုပ်ဖော်ကိုင်ဖက် ဖြစ်သည်။", topic: "personality", level: "B1" },
    ],
    sections: [
      {
        heading: "-ed နှင့် -ing",
        body: [
          "-ed သည် ခံစားချက်ကို ပြသည် — 'I am bored.' (ငါ ပျင်းနေသည်)။ -ing သည် ခံစားချက် ဖြစ်စေသည့် အရာကို ပြသည် — 'The lesson is boring.' (သင်ခန်းစာက ပျင်းစရာ ဖြစ်သည်)။",
          "အတွဲများ — interested/interesting, excited/exciting, tired/tiring, confused/confusing, disappointed/disappointing, satisfied/satisfying။",
        ],
        table: { headers: ["စကားလုံး", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["frustrated", "စိတ်တိုသော", "I felt frustrated."], ["grateful", "ကျေးဇူးတင်သော", "I'm grateful for your help."], ["confident", "ယုံကြည်မှု ရှိသော", "She is confident in public."], ["stubborn", "ခေါင်းမာသော", "He is too stubborn to apologise."]] },
      },
      {
        heading: "ခံစားချက် ဖော်ပြခြင်း",
        body: [
          "အခြေခံ ပုံစံ — be + adjective ('I am exhausted.'), feel + adjective ('I feel nervous.'), get + adjective ('I got angry.')။",
          "ပိုတိကျစေရန် — 'a bit', 'extremely', 'absolutely', 'slightly' ကို ထည့်သည် — 'I was absolutely terrified.'",
          "ကိုယ်ရည်ကိုယ်သွေး ဖော်ပြရာတွင် 'He is quite…' / 'She tends to be…' ကဲ့သို့ နူးညံ့စွာ ပြောသည်။ အနုတ်လက္ခဏာ စကားလုံးကို တိုက်ရိုက် မသုံးဘဲ 'He can be a little…' ဟု ပြောလေ့ ရှိသည်။",
        ],
      },
    ],
    examples: [
      { en: "I was disappointed with my exam results.", mm: "စာမေးပွဲ ရလဒ်ကြောင့် စိတ်ပျက်ခဲ့သည်။" },
      { en: "The talk was inspiring — everyone left feeling motivated.", mm: "ဟောပြောပွဲက စိတ်ဓာတ် တက်ကြွစေသည် — အားလုံး စိတ်အားတက်ပြီး ထွက်သွားကြသည်။" },
      { en: "She tends to be shy with strangers but talkative with friends.", mm: "သူမက သူစိမ်းများနှင့် ရှက်တတ်ပြီး သူငယ်ချင်းများနှင့် စကားများတတ်သည်။" },
    ],
    mistakes: [
      { wrong: "I am boring in this class.", right: "I am bored in this class.", why: "ခံစားချက် → -ed။" },
      { wrong: "She is very interest in music.", right: "She is very interested in music.", why: "interested + in။" },
    ],
    guided: [
      { type: "mcq", prompt: "The film was so ___ that I fell asleep.", promptMm: "ရွေးပါ။", options: ["bored", "boring", "bore", "boringly"], answer: 1, explanation: "ဖြစ်စေသည့် အရာ → -ing။", topic: "emotions" },
      { type: "mcq", prompt: "I was ___ to hear the good news.", promptMm: "ရွေးပါ။", options: ["delight", "delighting", "delighted", "delights"], answer: 2, explanation: "ခံစားချက် → -ed။", topic: "emotions" },
      { type: "fill", prompt: "He felt ___ before the speech. (စိုးရိမ်)", promptMm: "ဖြည့်ပါ။", answers: ["nervous", "anxious"], explanation: "feel + adjective။", topic: "emotions" },
      { type: "correct", prompt: "Correct: I am very exciting about the trip.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I am very excited about the trip."], explanation: "ခံစားချက် → excited။", topic: "emotions" },
    ],
    independent: [
      { type: "mcq", prompt: "A person who keeps promises is ___.", promptMm: "ရွေးပါ။", options: ["reliable", "generous", "curious", "patient"], answer: 0, explanation: "reliable = ယုံကြည်စိတ်ချရ။", topic: "personality" },
      { type: "fill", prompt: "She was ___ with the service, so she complained. (စိတ်မကျေနပ်)", promptMm: "ဖြည့်ပါ။", answers: ["dissatisfied", "unhappy", "disappointed"], explanation: "-ed adjective။", topic: "emotions" },
      { type: "mcq", prompt: "Which sentence is correct?", promptMm: "မှန်ကန်သည့် ဝါကျ ရွေးပါ။", options: ["I am boring of this game.", "I am bored with this game.", "I am bore with this game.", "I am boring with this game."], answer: 1, explanation: "bored with။", topic: "emotions" },
      { type: "translate", prompt: "Translate: သူက စိတ်ရှည်ပြီး ကြင်နာတတ်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["He is patient and kind.", "He's patient and kind."], explanation: "be + personality adjective။", topic: "personality" },
    ],
    review: [
      { q: "-ed နှင့် -ing နာမဝိသေသန ကွာခြားချက် ဘာလဲ။", a: "-ed = ခံစားချက် (I am tired)၊ -ing = ဖြစ်စေသည့် အရာ (It is tiring)။" },
      { q: "ခံစားချက် အားကို ဘယ်လို ဖော်ပြသလဲ။", a: "a bit / quite / extremely / absolutely ကဲ့သို့ adverb ထည့်သည်။" },
    ],
    summary: ["ခံစားချက်ကို -ed၊ အကြောင်းရင်းကို -ing ဖြင့် ပြသည်။", "ကိုယ်ရည်ကိုယ်သွေးကို နူးညံ့သော လေသံဖြင့် ဖော်ပြသည်။", "adverb ဖြင့် ခံစားချက် အားကို တိကျစေနိုင်သည်။"],
    mastery: ["-ed/-ing ကွက်လပ် ၁၀ ခုတွင် ၉ ခု မှန်သည်။", "ကိုယ်ရည်ကိုယ်သွေး ၅ ချက်ကို အကြောင်းပြချက်ဖြင့် ရေးနိုင်သည်။"],
    topics: ["emotions", "personality", "adjectives"],
  },
  {
    id: "c14-academic-vocabulary",
    moduleId: "C",
    title: "Academic Word List Essentials",
    titleMm: "ပညာရေး စာတမ်း အသုံးများ ဝေါဟာရ",
    level: "B2",
    minutes: 24,
    summaryLine: "ပညာရေး စာတမ်းများတွင် အများဆုံး တွေ့ရသည့် စကားလုံးများနှင့် ၎င်းတို့၏ တွဲဖက်သုံးပုံ။",
    objectives: ["ပညာရေး ဝေါဟာရ ၁၂ ခု သိမည်။", "analyse, significant, approach စသည်တို့ကို မှန်ကန်စွာ သုံးနိုင်မည်။", "စာတမ်း ဝါကျတွင် တရားဝင် လေသံ သုံးနိုင်မည်။"],
    vocab: [
      { en: "analyse", mm: "ခွဲခြမ်း စိတ်ဖြာသည်", pos: "verb", example: "The study analyses survey data.", exampleMm: "လေ့လာမှုက စစ်တမ်း ဒေတာကို ခွဲခြမ်း စိတ်ဖြာသည်။", topic: "academic", level: "B2" },
      { en: "significant", mm: "သိသာထင်ရှားသော", pos: "adjective", example: "There was a significant increase in demand.", exampleMm: "ဝယ်လိုအားတွင် သိသာထင်ရှားသည့် တိုးမှု ရှိခဲ့သည်။", topic: "academic", level: "B2" },
      { en: "approach", mm: "နည်းလမ်း/ချဉ်းကပ်မှု", pos: "noun", example: "A qualitative approach was adopted.", exampleMm: "အရည်အသွေးဆိုင်ရာ နည်းလမ်းကို အသုံးပြုခဲ့သည်။", topic: "academic", level: "B2" },
      { en: "establish", mm: "တည်ထောင်သည်/သက်သေပြသည်", pos: "verb", example: "The study establishes a clear link.", exampleMm: "လေ့လာမှုက ရှင်းလင်းသည့် ဆက်စပ်မှုကို သက်သေပြသည်။", topic: "academic", level: "B2" },
    ],
    sections: [
      {
        heading: "အသုံးများ ဝေါဟာရ အုပ်စုများ",
        body: [
          "ခွဲခြမ်းစိတ်ဖြာမှု — analyse, evaluate, assess, interpret, compare, contrast။",
          "အထောက်အထား — evidence, data, findings, indicate, demonstrate, suggest။",
          "အဆိုပြုချက် — argue, claim, propose, hypothesise, conclude။",
          "အဆောက်အအုံ စကားလုံးများ — approach, framework, factor, context, aspect, issue။",
        ],
        table: { headers: ["ဝေါဟာရ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["factor", "အကြောင်းရင်း", "a key factor"], ["context", "အခြေအနေ/နောက်ခံ", "in this context"], ["implication", "သက်ရောက်မှု", "policy implications"], ["derive", "ရရှိသည်", "derive from data"]] },
      },
      {
        heading: "တရားဝင် လေသံ",
        body: [
          "စကားပြော ပုံစံကို တရားဝင် ပြောင်းရသည် — 'a lot of' → 'considerable/numerous', 'get' → 'obtain', 'find out' → 'determine', 'look at' → 'examine'။",
          "ပထမလူ (I, we) ကို လျှော့သုံးပြီး passive သို့မဟုတ် 'This study…' ကဲ့သို့ တတိယလူ သုံးသည်။",
          "ခန့်မှန်းချက် လေသံ — 'may', 'appears to', 'it is likely that' ဖြင့် ပြောသည်။",
        ],
      },
    ],
    examples: [
      { en: "The data indicate a significant decline in rainfall.", mm: "ဒေတာက မိုးရေချိန် သိသိသာသာ ကျဆင်းမှုကို ထောက်ပြသည်။" },
      { en: "Several factors contribute to this trend.", mm: "ဤလမ်းကြောင်းကို အကြောင်းရင်း များစွာ ဖြစ်စေသည်။" },
      { en: "This approach has important implications for policy.", mm: "ဤနည်းလမ်းသည် မူဝါဒအတွက် အရေးကြီးသည့် သက်ရောက်မှု ရှိသည်။" },
    ],
    mistakes: [
      { wrong: "The research makes a lot of evidences.", right: "The research provides considerable evidence.", why: "evidence သည် ရေတွက်မရ။" },
      { wrong: "I think this data is good.", right: "The data appear to support this view.", why: "ပညာရေး စာတွင် ကိုယ်ပိုင် ထင်မြင်ချက် ထက် အထောက်အထား လေသံ သုံးသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "The researchers ___ the results carefully.", promptMm: "ရွေးပါ။", options: ["analysed", "analysis", "analytical", "analytically"], answer: 0, explanation: "ကြိယာ လိုသည် → analysed။", topic: "academic vocabulary" },
      { type: "fill", prompt: "This is a key ___ in the decision. (အကြောင်းရင်း)", promptMm: "ဖြည့်ပါ။", answers: ["factor"], explanation: "key factor။", topic: "academic vocabulary" },
      { type: "mcq", prompt: "Which is the most formal?", promptMm: "အရှိဆုံး တရားဝင် ရွေးပါ။", options: ["find out", "get", "determine", "look at"], answer: 2, explanation: "determine = တရားဝင်။", topic: "academic vocabulary" },
      { type: "correct", prompt: "Correct: The findings shows a clear trend.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The findings show a clear trend."], explanation: "findings (ဗဟုကိန်း) → show။", topic: "academic vocabulary" },
    ],
    independent: [
      { type: "mcq", prompt: "The study ___ that sleep affects memory.", promptMm: "ရွေးပါ။", options: ["demonstrates", "demonstration", "demonstrative", "demonstratively"], answer: 0, explanation: "ကြိယာ → demonstrates။", topic: "academic vocabulary" },
      { type: "fill", prompt: "These results have important ___ for teaching. (သက်ရောက်မှု)", promptMm: "ဖြည့်ပါ။", answers: ["implications"], explanation: "implications for။", topic: "academic vocabulary" },
      { type: "mcq", prompt: "Choose the formal version of 'a lot of people'.", promptMm: "ရွေးပါ။", options: ["many peoples", "numerous people", "lots of person", "much people"], answer: 1, explanation: "numerous people = တရားဝင်။", topic: "academic vocabulary" },
      { type: "translate", prompt: "Translate: ဒီလေ့လာမှုက ရှင်းလင်းတဲ့ ဆက်စပ်မှုကို ပြသတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["This study demonstrates a clear link.", "The study demonstrates a clear link."], explanation: "demonstrate + object။", topic: "academic vocabulary" },
    ],
    review: [
      { q: "data နှင့် findings ၏ ကြိယာ ပုံစံ ဘာလဲ။", a: "နှစ်ခုလုံးကို ဗဟုကိန်းအဖြစ် သုံးလျှင် ကြိယာ အများကိန်း (show, indicate) ယူသည်။" },
      { q: "စကားပြော ဝေါဟာရကို တရားဝင် ဘယ်လို ပြောင်းသလဲ။", a: "get → obtain, find out → determine, a lot of → considerable/numerous ကဲ့သို့ လဲလှယ်သည်။" },
    ],
    summary: ["ပညာရေး ဝေါဟာရကို လုပ်ဆောင်ချက်၊ အထောက်အထား နှင့် အဆောက်အအုံ စကားလုံး အုပ်စု ခွဲနိုင်သည်။", "တရားဝင် လေသံတွင် ခန့်မှန်းချက် စကားလုံး သုံးသည်။", "စကားပြော ဝေါဟာရကို တရားဝင် အစားထိုး သုံးနိုင်သည်။"],
    mastery: ["ဝေါဟာရ ၁၂ ခုကို စာတမ်း ဝါကျတွင် သုံးနိုင်သည်။", "စကားပြော ဝါကျ ၈ ခုကို တရားဝင် ပြောင်းနိုင်သည်။"],
    topics: ["academic vocabulary", "writing", "register"],
  },
  {
    id: "c15-idioms",
    moduleId: "C",
    title: "Everyday Idioms and Fixed Expressions",
    titleMm: "နေ့စဉ်သုံး Idiom နှင့် ပုံသေစကားစုများ",
    level: "B2",
    minutes: 22,
    summaryLine: "အဓိပ္ပာယ်ကို စကားလုံးအလိုက် မခွဲနိုင်သည့် idiom ၁၂ ခုကို သဘာဝကျသော အခြေအနေတွင် သုံးနည်း။",
    objectives: ["idiom ၁၂ ခု၏ အဓိပ္ပာယ် သိမည်။", "idiom ကို မှန်ကန်သည့် အခြေအနေတွင် ရွေးသုံးနိုင်မည်။", "idiom အလွန်အကျွံ မသုံးရန် သိမည်။"],
    vocab: [
      { en: "break the ice", mm: "စကားစ ဖြစ်စေရန် စတင်သည်", pos: "idiom", example: "He told a joke to break the ice.", exampleMm: "စကားစ ဖြစ်စေရန် သူ ဟာသ တစ်ခု ပြောခဲ့သည်။", topic: "idioms", level: "B2" },
      { en: "under the weather", mm: "နေမကောင်း ဖြစ်သည်", pos: "idiom", example: "I'm feeling a bit under the weather.", exampleMm: "ကျွန်တော် နည်းနည်း နေမကောင်း ဖြစ်နေသည်။", topic: "idioms", level: "B2" },
      { en: "get the hang of", mm: "ကျွမ်းကျင်လာသည်", pos: "idiom", example: "You'll get the hang of it soon.", exampleMm: "မကြာမီ ကျွမ်းကျင်လာမည်။", topic: "idioms", level: "B2" },
      { en: "on the same page", mm: "သဘောတူ နားလည်မှု တူသည်", pos: "idiom", example: "Let's make sure we're on the same page.", exampleMm: "ကျွန်တော်တို့ သဘောတူညီမှု ရှိကြောင်း သေချာအောင် လုပ်ရအောင်။", topic: "idioms", level: "B2" },
    ],
    sections: [
      {
        heading: "idiom ဆိုတာ",
        body: [
          "idiom ၏ အဓိပ္ပာယ်သည် စကားလုံး တစ်လုံးချင်း အဓိပ္ပာယ်မှ မထွက်ပါ — 'break the ice' သည် ရေခဲကို မချိုးပါ၊ စကားစ ဖြစ်စေခြင်းကို ဆိုလိုသည်။",
          "idiom များသည် ယဉ်ကျေးမှုနှင့် ဆက်စပ်သဖြင့် တိုက်ရိုက် ဘာသာပြန်၍ မရပါ။ အခြေအနေနှင့် တွဲပြီး မှတ်ရသည်။",
          "idiom သည် စကားပြောနှင့် မှတ်တမ်း/သတင်း စာများတွင် သဘာဝကျသော်လည်း ပညာရေး စာတမ်းတွင် ရှောင်သည်။",
        ],
        table: { headers: ["idiom", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["a piece of cake", "အလွန် လွယ်သည်", "The test was a piece of cake."], ["hit the books", "စာကျက်သည်", "I need to hit the books."], ["call it a day", "ဒီနေ့တာ ရပ်လိုက်သည်", "Let's call it a day."], ["in the same boat", "အခြေအနေ တူသည်", "We're all in the same boat."]] },
      },
      {
        heading: "idiom သုံးရာတွင် သတိထားရန်",
        body: [
          "idiom ကို ကိုယ်တိုင် ဖန်တီး၍ မရပါ။ စကားလုံး ပြောင်းလျှင် အဓိပ္ပာယ် မရတော့ပါ — 'break the ice' ကို 'cut the ice' ဟု မပြောပါ။",
          "တစ်စာပိုဒ်လျှင် idiom တစ်ခု နှစ်ခုထက် မပိုသင့်ပါ။ အလွန်အကျွံ သုံးလျှင် မသဘာဝကျပါ။",
          "တရားဝင် စာတွင် idiom အစား တိကျသော စကားလုံး သုံးခြင်းက ပိုကောင်းသည် — 'a piece of cake' → 'straightforward'။",
        ],
      },
    ],
    examples: [
      { en: "The interview was a piece of cake compared with the written test.", mm: "စာရေးစာမေးပွဲနှင့် နှိုင်းယှဉ်လျှင် အင်တာဗျူက အလွန် လွယ်ခဲ့သည်။" },
      { en: "We spent an hour breaking the ice before the workshop started.", mm: "အလုပ်ရုံ မစတင်မီ တစ်နာရီကြာ စကားစ ဖြစ်စေရန် အချိန်ယူခဲ့သည်။" },
      { en: "It took me a week to get the hang of the new software.", mm: "ဆော့ဖ်ဝဲ အသစ်ကို ကျွမ်းကျင်လာရန် တစ်ပတ် ကြာခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "The exam was a cake.", right: "The exam was a piece of cake.", why: "idiom ကို အတိအကျ သုံးရသည်။" },
      { wrong: "I am under the weather today, so I am sick of it.", right: "I am feeling under the weather today.", why: "'sick of' သည် စိတ်ပျက်ခြင်း ဖြစ်ပြီး အဓိပ္ပာယ် ကွာသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "The task was very easy — it was ___.", promptMm: "ရွေးပါ။", options: ["a piece of cake", "a hot potato", "a fish out of water", "a big cheese"], answer: 0, explanation: "a piece of cake = အလွန် လွယ်သည်။", topic: "idioms" },
      { type: "mcq", prompt: "I don't feel well — I'm feeling ___.", promptMm: "ရွေးပါ။", options: ["on cloud nine", "under the weather", "over the moon", "in the dark"], answer: 1, explanation: "under the weather = နေမကောင်း။", topic: "idioms" },
      { type: "fill", prompt: "Let's call it a ___. (ဒီနေ့တာ ရပ်လိုက်)", promptMm: "ဖြည့်ပါ။", answers: ["day"], explanation: "call it a day။", topic: "idioms" },
      { type: "correct", prompt: "Correct: We are in the same boat together.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["We are in the same boat."], explanation: "together ထပ်မလိုပါ။", topic: "idioms" },
    ],
    independent: [
      { type: "mcq", prompt: "Before the meeting, let's make sure we are ___.", promptMm: "ရွေးပါ။", options: ["on the same page", "on the same boat", "in the same page", "at the same page"], answer: 0, explanation: "on the same page = နားလည်မှု တူ။", topic: "idioms" },
      { type: "fill", prompt: "I need to ___ the books before the exam. (စာကျက်)", promptMm: "ဖြည့်ပါ။", answers: ["hit"], explanation: "hit the books။", topic: "idioms" },
      { type: "mcq", prompt: "Which avoids idioms (formal writing)?", promptMm: "idiom မပါသည့် တရားဝင် ဝါကျ ရွေးပါ။", options: ["The task was a piece of cake.", "The task was straightforward.", "The task was a breeze.", "We nailed the task."], answer: 1, explanation: "straightforward = တိကျသော တရားဝင် စကားလုံး။", topic: "idioms" },
      { type: "translate", prompt: "Translate: ဒီဆော့ဖ်ဝဲကို သုံးတတ်လာဖို့ ရက်အနည်းငယ် ကြာလိမ့်မယ်။", promptMm: "idiom ဖြင့် ဘာသာပြန်ပါ။", answers: ["It will take a few days to get the hang of this software.", "You'll get the hang of this software in a few days."], explanation: "get the hang of + နာမ်။", topic: "idioms" },
    ],
    review: [
      { q: "idiom ကို ဘာကြောင့် တိုက်ရိုက် ဘာသာမပြန်နိုင်သလဲ။", a: "အဓိပ္ပာယ်သည် စကားလုံး အလိုက် မဟုတ်ဘဲ တစ်ခုလုံး အနေဖြင့် ဖြစ်သည့်အတွက်။" },
      { q: "ပညာရေး စာတွင် idiom ကို ဘယ်လို ကိုင်တွယ်သလဲ။", a: "တိကျသော စကားလုံးဖြင့် အစားထိုးသည်။" },
    ],
    summary: ["idiom ၏ အဓိပ္ပာယ်ကို စကားလုံးအလိုက် မခွဲနိုင်ပါ။", "အခြေအနေနှင့် တွဲပြီး မှတ်ရသည်။", "တရားဝင် စာတွင် အလွန်အကျွံ မသုံးသင့်ပါ။"],
    mastery: ["idiom ၁၂ ခုကို သင့်လျော်သည့် အခြေအနေတွင် သုံးနိုင်သည်။", "idiom ပါသော ဝါကျ ၅ ခုကို တရားဝင် ပြောင်းနိုင်သည်။"],
    topics: ["idioms", "vocabulary", "register"],
  },
];

export const moduleCLessonsPart3: Lesson[] = buildLessons(seeds);
