import type { Quiz } from "@/lib/types";

export const quizzes: Quiz[] = [
  {
    id: "quiz-a1-foundations",
    title: "Module A Quiz — Foundations",
    titleMm: "Module A စာမေးပွဲ — အခြေခံ",
    level: "A1",
    description: "အက္ခရာ၊ နှုတ်ဆက်စကား၊ article၊ ဗဟုဝုဏ်း နှင့် there is/are ကို စစ်ဆေးသည်။",
    timeLimitMin: 10,
    exercises: [
      { id: "qa1", type: "mcq", prompt: "She ___ a nurse.", promptMm: "be verb ရွေးပါ။", options: ["am", "is", "are", "be"], answer: 1, explanation: "she + is။", topic: "verb to be", level: "A1" },
      { id: "qa2", type: "mcq", prompt: "I need ___ umbrella.", promptMm: "article ရွေးပါ။", options: ["a", "an", "the", "no article"], answer: 1, explanation: "umbrella သည် သရသံဖြင့် စသည် → an။", topic: "articles", level: "A1" },
      { id: "qa3", type: "fill", prompt: "There ___ two chairs in the room.", promptMm: "is/are ဖြည့်ပါ။", answers: ["are"], explanation: "chairs ဗဟုဝုဏ်း → are။", topic: "there is there are", level: "A1" },
      { id: "qa4", type: "mcq", prompt: "Choose the correct plural of 'child'.", promptMm: "ဗဟုဝုဏ်း ရွေးပါ။", options: ["childs", "childes", "children", "childrens"], answer: 2, explanation: "child → children (မမှန်စည်းမျဉ်း)။", topic: "plural nouns", level: "A1" },
      { id: "qa5", type: "mcq", prompt: "It is 7 p.m. Choose the greeting.", promptMm: "နှုတ်ဆက်စကား ရွေးပါ။", options: ["Good morning", "Good afternoon", "Good evening", "Good night"], answer: 2, explanation: "ညနေပိုင်းတွင် Good evening သုံးသည်။", topic: "greetings", level: "A1" },
      { id: "qa6", type: "fill", prompt: "My birthday is ___ 4 May.", promptMm: "ဝိဘတ် ဖြည့်ပါ။", answers: ["on"], explanation: "ရက်စွဲ အတွက် on။", topic: "prepositions of time", level: "A1" },
      { id: "qa7", type: "mcq", prompt: "___ are my books.", promptMm: "အနီး ဗဟုဝုဏ်း ရွေးပါ။", options: ["This", "That", "These", "It"], answer: 2, explanation: "အနီး ဗဟုဝုဏ်း → these။", topic: "demonstratives", level: "A1" },
      { id: "qa8", type: "correct", prompt: "Correct: Him is my brother.", promptMm: "ဝါကျကို ပြင်ပါ။", answers: ["He is my brother.", "He is my brother"], explanation: "ကတ္တားနေရာတွင် He။", topic: "pronouns", level: "A1" },
      { id: "qa9", type: "mcq", prompt: "The cat is ___ the table. (အောက်တွင်)", promptMm: "ဝိဘတ် ရွေးပါ။", options: ["in", "on", "under", "between"], answer: 2, explanation: "under = အောက်တွင်။", topic: "prepositions of place", level: "A1" },
      { id: "qa10", type: "order", prompt: "Arrange the question.", promptMm: "မေးခွန်း ဖြစ်အောင် စီပါ။", tokens: ["Where", "are", "you", "from", "?"], answers: ["Where are you from?"], explanation: "Where + are + you + from?", topic: "questions and negatives", level: "A1" },
    ],
  },
  {
    id: "quiz-a2-elementary",
    title: "Module B Quiz — Elementary Grammar",
    titleMm: "Module B စာမေးပွဲ — အခြေခံ သဒ္ဒါ",
    level: "A2",
    description: "Present simple/continuous၊ past simple၊ future နှင့် comparatives ကို စစ်ဆေးသည်။",
    timeLimitMin: 12,
    exercises: [
      { id: "qa2-1", type: "mcq", prompt: "She ___ to work by bus every day.", promptMm: "ကြိယာပုံစံ ရွေးပါ။", options: ["go", "goes", "going", "is go"], answer: 1, explanation: "she + goes (present simple)။", topic: "present simple", level: "A2" },
      { id: "qa2-2", type: "mcq", prompt: "Look! It ___ outside.", promptMm: "present continuous ရွေးပါ။", options: ["rains", "is raining", "rained", "rain"], answer: 1, explanation: "ယခု ဖြစ်နေသည် → is raining။", topic: "present continuous", level: "A2" },
      { id: "qa2-3", type: "fill", prompt: "I ___ (buy) a new phone last week.", promptMm: "past ပုံစံ ဖြည့်ပါ။", answers: ["bought"], explanation: "buy → bought။", topic: "past simple", level: "A2" },
      { id: "qa2-4", type: "mcq", prompt: "___ you see the film yesterday?", promptMm: "အတိတ် မေးခွန်း ရွေးပါ။", options: ["Do", "Did", "Are", "Have"], answer: 1, explanation: "past simple မေးခွန်းတွင် Did။", topic: "past simple", level: "A2" },
      { id: "qa2-5", type: "mcq", prompt: "Look at the sky. It ___ rain.", promptMm: "အထောက်အထားရှိ ခန့်မှန်းချက် ရွေးပါ။", options: ["will", "is going to", "is", "would"], answer: 1, explanation: "မြင်နေရသော အထောက်အထား → be going to။", topic: "future forms", level: "A2" },
      { id: "qa2-6", type: "fill", prompt: "This bag is ___ (cheap) than that one.", promptMm: "comparative ဖြည့်ပါ။", answers: ["cheaper"], explanation: "cheap → cheaper than။", topic: "comparatives", level: "A2" },
      { id: "qa2-7", type: "mcq", prompt: "She is the ___ student in the class.", promptMm: "superlative ရွေးပါ။", options: ["tallest", "taller", "most tall", "tall"], answer: 0, explanation: "tall → the tallest။", topic: "superlatives", level: "A2" },
      { id: "qa2-8", type: "correct", prompt: "Correct: I didn't went to school yesterday.", promptMm: "ဝါကျကို ပြင်ပါ။", answers: ["I didn't go to school yesterday.", "I did not go to school yesterday."], explanation: "didn't + base verb။", topic: "past simple", level: "A2" },
      { id: "qa2-9", type: "mcq", prompt: "There isn't ___ milk in the fridge.", promptMm: "some/any ရွေးပါ။", options: ["some", "any", "many", "few"], answer: 1, explanation: "ငြင်းပယ်ဝါကျတွင် any။", topic: "quantifiers", level: "A2" },
      { id: "qa2-10", type: "translate", prompt: "Translate: သူတို့ မနေ့က ရုပ်ရှင် ကြည့်ခဲ့တယ်။", promptMm: "အင်္ဂလိပ်လို ပြန်ဆိုပါ။", answers: ["They watched a film yesterday.", "They saw a film yesterday.", "They watched a movie yesterday."], explanation: "past simple + yesterday။", topic: "past simple", level: "A2" },
    ],
  },
  {
    id: "quiz-b1-intermediate",
    title: "Module B Quiz — Intermediate",
    titleMm: "Module B စာမေးပွဲ — အလယ်အလတ်",
    level: "B1",
    description: "Present perfect၊ modals၊ conditionals နှင့် passive ကို စစ်ဆေးသည်။",
    timeLimitMin: 15,
    exercises: [
      { id: "qb1-1", type: "mcq", prompt: "I ___ my keys. I can't open the door.", promptMm: "သင့်လျော်သော tense ရွေးပါ။", options: ["lose", "lost", "have lost", "am losing"], answer: 2, explanation: "ယခု ရလဒ်ရှိနေသည် → present perfect။", topic: "present perfect", level: "B1" },
      { id: "qb1-2", type: "fill", prompt: "She has worked here ___ 2019.", promptMm: "for/since ဖြည့်ပါ။", answers: ["since"], explanation: "since + စတင်ချိန်။", topic: "present perfect", level: "B1" },
      { id: "qb1-3", type: "mcq", prompt: "You ___ smoke here. It is a hospital.", promptMm: "ခွင့်မပြုမှုကို ရွေးပါ။", options: ["don't have to", "mustn't", "shouldn't to", "needn't"], answer: 1, explanation: "mustn't = လုံးဝ မလုပ်ရ။", topic: "modals", level: "B1" },
      { id: "qb1-4", type: "mcq", prompt: "If it ___ tomorrow, we will cancel the trip.", promptMm: "first conditional ရွေးပါ။", options: ["will rain", "rains", "rained", "would rain"], answer: 1, explanation: "if + present simple, will + base verb။", topic: "conditionals", level: "B1" },
      { id: "qb1-5", type: "mcq", prompt: "The office ___ every evening.", promptMm: "passive ရွေးပါ။", options: ["cleans", "is cleaned", "is cleaning", "clean"], answer: 1, explanation: "present simple passive = is + V3။", topic: "passive voice", level: "B1" },
      { id: "qb1-6", type: "fill", prompt: "You should ___ (see) a doctor.", promptMm: "ကြိယာပုံစံ ဖြည့်ပါ။", answers: ["see"], explanation: "modal + base verb။", topic: "modals", level: "B1" },
      { id: "qb1-7", type: "mcq", prompt: "How ___ information do you need?", promptMm: "much/many ရွေးပါ။", options: ["many", "much", "few", "a few"], answer: 1, explanation: "information သည် ရေတွက်မရ → much။", topic: "quantifiers", level: "B1" },
      { id: "qb1-8", type: "mcq", prompt: "I have lived here ___ five years.", promptMm: "for/since ရွေးပါ။", options: ["since", "for", "from", "during"], answer: 1, explanation: "for + ကာလ။", topic: "present perfect", level: "B1" },
      { id: "qb1-9", type: "correct", prompt: "Correct: If I will have time, I will call you.", promptMm: "ဝါကျကို ပြင်ပါ။", answers: ["If I have time, I will call you.", "If I have time, I'll call you."], explanation: "if ဝါကျခွဲတွင် will မသုံးပါ။", topic: "conditionals", level: "B1" },
      { id: "qb1-10", type: "translate", prompt: "Translate: ဒီတံတားကို ၁၉၉၈ ခုနှစ်တွင် တည်ဆောက်ခဲ့တယ်။", promptMm: "အင်္ဂလိပ်လို ပြန်ဆိုပါ။", answers: ["This bridge was built in 1998.", "The bridge was built in 1998.", "This bridge was constructed in 1998."], explanation: "past simple passive = was + V3။", topic: "passive voice", level: "B1" },
      { id: "qb1-11", type: "mcq", prompt: "She suggested ___ earlier.", promptMm: "gerund/infinitive ရွေးပါ။", options: ["to leave", "leaving", "leave", "leaves"], answer: 1, explanation: "suggest + verb-ing။", topic: "gerunds and infinitives", level: "B1" },
      { id: "qb1-12", type: "mcq", prompt: "Which sentence is correct?", promptMm: "မှန်ကန်သော ဝါကျကို ရွေးပါ။", options: ["I am agree with you.", "I agree with you.", "I am agreeing with you.", "I agree you."], answer: 1, explanation: "agree is a verb; agree with + person။", topic: "verb patterns", level: "B1" },
    ],
  },
  {
    id: "quiz-b2-upper",
    title: "Module C/D Quiz — Upper Intermediate",
    titleMm: "Module C/D စာမေးပွဲ — အလယ်အလတ်အထက်",
    level: "B2",
    description: "Relative clauses၊ register၊ inference နှင့် advanced collocation များကို စစ်ဆေးသည်။",
    timeLimitMin: 15,
    exercises: [
      { id: "qb2-1", type: "mcq", prompt: "The man ___ called you is my uncle.", promptMm: "relative pronoun ရွေးပါ။", options: ["which", "who", "whose", "where"], answer: 1, explanation: "လူအတွက် who။", topic: "relative clauses", level: "B2" },
      { id: "qb2-2", type: "fill", prompt: "This is the town ___ I grew up.", promptMm: "နေရာအတွက် ဖြည့်ပါ။", answers: ["where"], explanation: "where = နေရာ။", topic: "relative clauses", level: "B2" },
      { id: "qb2-3", type: "mcq", prompt: "Choose the natural collocation.", promptMm: "သဘာဝကျသော တွဲသုံးမှုကို ရွေးပါ။", options: ["do a mistake", "make a mistake", "take a mistake", "put a mistake"], answer: 1, explanation: "make a mistake။", topic: "collocations", level: "B2" },
      { id: "qb2-4", type: "mcq", prompt: "Which sentence is formal?", promptMm: "တရားဝင် ဝါကျကို ရွေးပါ။", options: ["We looked into it and it was pretty bad.", "An investigation revealed significant weaknesses.", "It's a total mess.", "Things are bad, you know."], answer: 1, explanation: "formal register — investigation, revealed, significant။", topic: "register", level: "B2" },
      { id: "qb2-5", type: "mcq", prompt: "'The streets were empty and the shops were closed.' We can infer:", promptMm: "ကောက်ချက်ချပါ။", options: ["It was a busy day.", "It was probably a holiday or very early.", "The town was new.", "People were shopping."], answer: 1, explanation: "ရှင်းလင်းသော အထောက်အထား → ပိတ်ရက်/အစောပိုင်း။", topic: "inference", level: "B2" },
      { id: "qb2-6", type: "fill", prompt: "The results were ___ higher than expected. (considerable)", promptMm: "adverb ဖြည့်ပါ။", answers: ["considerably"], explanation: "considerably = သိသိသာသာ။", topic: "register", level: "B2" },
      { id: "qb2-7", type: "mcq", prompt: "Which sentence cannot be made passive?", promptMm: "passive မပြောင်းနိုင်သည်ကို ရွေးပါ။", options: ["They built the school.", "Someone stole my bike.", "The children arrived early.", "She wrote the email."], answer: 2, explanation: "arrive သည် intransitive ဖြစ်သည်။", topic: "passive voice", level: "B2" },
      { id: "qb2-8", type: "correct", prompt: "Correct: Although it was late, but we continued working.", promptMm: "ဝါကျကို ပြင်ပါ။", answers: ["Although it was late, we continued working.", "It was late, but we continued working."], explanation: "although နှင့် but ကို အတူ မသုံးပါ။", topic: "linking words", level: "B2" },
      { id: "qb2-9", type: "mcq", prompt: "Choose the correct meaning of 'The report claims that costs fell.'", promptMm: "အဓိပ္ပာယ် အကောင်းဆုံးကို ရွေးပါ။", options: ["The writer is certain costs fell.", "The writer may doubt the claim.", "The report is funny.", "Costs definitely rose."], answer: 1, explanation: "'claims' တွင် သံသယ အနုစိတ် ပါဝင်သည်။", topic: "register", level: "B2" },
      { id: "qb2-10", type: "translate", prompt: "Translate: ဒီသုတေသနက ကျွန်တော်တို့ရဲ့ ကောက်ချက်ကို ထောက်ခံတယ်။", promptMm: "အင်္ဂလိပ်လို ပြန်ဆိုပါ။", answers: ["This research supports our conclusion.", "The research supports our conclusion.", "This study supports our findings."], explanation: "supports = ထောက်ခံသည်။", topic: "register", level: "B2" },
    ],
  },
  {
    id: "placement-test",
    title: "Placement Assessment (A1–C1)",
    titleMm: "အဆင့် သတ်မှတ် စာမေးပွဲ (A1–C1)",
    level: "B1",
    description:
      "အဆင့်တစ်ခုစီမှ မေးခွန်းများ ပါဝင်သည်။ ရမှတ်အပေါ် မူတည်၍ ခန့်မှန်း CEFR အဆင့်ကို ပြပါမည်။ ဤအဆင့်သည် ခန့်မှန်းချက်သာဖြစ်ပြီး တရားဝင် CEFR လက်မှတ် မဟုတ်ပါ။",
    timeLimitMin: 25,
    exercises: [
      { id: "pl-1", type: "mcq", prompt: "___ your sister a teacher?", promptMm: "A1 — be verb မေးခွန်း။", options: ["Is", "Are", "Do", "Does"], answer: 0, explanation: "your sister အနည်းကိန်း → Is။", topic: "verb to be", level: "A1" },
      { id: "pl-2", type: "mcq", prompt: "There ___ some milk in the fridge.", promptMm: "A1 — there is/are။", options: ["is", "are", "have", "be"], answer: 0, explanation: "milk ရေတွက်မရ → is။", topic: "there is there are", level: "A1" },
      { id: "pl-3", type: "mcq", prompt: "He ___ football every Sunday.", promptMm: "A1 — present simple။", options: ["play", "plays", "playing", "is play"], answer: 1, explanation: "he + plays။", topic: "present simple", level: "A1" },
      { id: "pl-4", type: "fill", prompt: "My birthday is ___ 12 June.", promptMm: "A1 — ဝိဘတ်။", answers: ["on"], explanation: "ရက်စွဲ → on။", topic: "prepositions of time", level: "A1" },
      { id: "pl-5", type: "mcq", prompt: "They ___ to Bangkok last year.", promptMm: "A2 — past simple။", options: ["go", "went", "gone", "going"], answer: 1, explanation: "last year → past simple။", topic: "past simple", level: "A2" },
      { id: "pl-6", type: "mcq", prompt: "This is ___ book I have ever read.", promptMm: "A2 — superlative။", options: ["the best", "better", "best", "the better"], answer: 0, explanation: "the best book I have ever read။", topic: "superlatives", level: "A2" },
      { id: "pl-7", type: "mcq", prompt: "We ___ dinner when the phone rang.", promptMm: "A2 — past continuous။", options: ["have", "were having", "had", "are having"], answer: 1, explanation: "အတိတ်တွင် ဖြစ်နေဆဲ → past continuous။", topic: "past continuous", level: "A2" },
      { id: "pl-8", type: "mcq", prompt: "She ___ here since 2020.", promptMm: "B1 — present perfect။", options: ["works", "worked", "has worked", "is working"], answer: 2, explanation: "since + 2020 → present perfect။", topic: "present perfect", level: "B1" },
      { id: "pl-9", type: "mcq", prompt: "If I ___ you, I would apologize.", promptMm: "B1 — conditionals။", options: ["am", "was", "were", "will be"], answer: 2, explanation: "second conditional → were။", topic: "conditionals", level: "B1" },
      { id: "pl-10", type: "mcq", prompt: "The letter ___ by the manager yesterday.", promptMm: "B1 — passive။", options: ["signed", "was signed", "is signing", "has sign"], answer: 1, explanation: "past passive → was signed။", topic: "passive voice", level: "B1" },
      { id: "pl-11", type: "mcq", prompt: "You ___ pay; the entry is free.", promptMm: "B1 — modals။", options: ["mustn't", "don't have to", "shouldn't", "can't"], answer: 1, explanation: "မလိုအပ် → don't have to။", topic: "modals", level: "B1" },
      { id: "pl-12", type: "fill", prompt: "He suggested ___ (take) a short break.", promptMm: "B1 — gerund။", answers: ["taking"], explanation: "suggest + verb-ing။", topic: "gerunds and infinitives", level: "B1" },
      { id: "pl-13", type: "mcq", prompt: "The woman ___ car was stolen called the police.", promptMm: "B2 — relative။", options: ["who", "which", "whose", "where"], answer: 2, explanation: "ပိုင်ဆိုင်မှု → whose။", topic: "relative clauses", level: "B2" },
      { id: "pl-14", type: "mcq", prompt: "The report ___ that the policy has failed.", promptMm: "B2 — register nuance။", options: ["says", "claims", "tells", "speaks"], answer: 1, explanation: "claims — သံသယ အနုစိတ်ဖြင့် ပြောခြင်း။", topic: "register", level: "B2" },
      { id: "pl-15", type: "mcq", prompt: "Choose the correct collocation.", promptMm: "B2 — collocation။", options: ["strong evidence", "big evidence", "heavy evidence", "high evidence"], answer: 0, explanation: "strong evidence။", topic: "collocations", level: "B2" },
      { id: "pl-16", type: "correct", prompt: "Correct: Neither of the answers were correct.", promptMm: "B2 — agreement။", answers: ["Neither of the answers was correct.", "Neither answer was correct."], explanation: "neither of + plural noun သည် အနည်းကိန်း ကြိယာ ယူသည် (တရားဝင်)။", topic: "subject-verb agreement", level: "B2" },
      { id: "pl-17", type: "mcq", prompt: "Had I known, I ___ differently.", promptMm: "C1 — inversion conditional။", options: ["would act", "would have acted", "will act", "had acted"], answer: 1, explanation: "Had I known = If I had known → would have + V3။", topic: "conditionals", level: "C1" },
      { id: "pl-18", type: "mcq", prompt: "The findings are consistent ___ previous research.", promptMm: "C1 — ဝိဘတ်။", options: ["to", "with", "of", "for"], answer: 1, explanation: "consistent with။", topic: "collocations", level: "C1" },
      { id: "pl-19", type: "mcq", prompt: "Which sentence uses 'however' correctly?", promptMm: "C1 — punctuation။", options: ["However the results were surprising.", "The results, however were surprising.", "The results were, however, surprising.", "The results were surprising however."], answer: 2, explanation: "however ကို comma နှစ်ခုကြားတွင် ထည့်နိုင်သည်။", topic: "linking words", level: "C1" },
      { id: "pl-20", type: "mcq", prompt: "Choose the most academic paraphrase of 'a lot of people think'.", promptMm: "C1 — academic register။", options: ["loads of people think", "many people believe", "it is widely argued that", "everyone says"], answer: 2, explanation: "It is widely argued that — academic register။", topic: "register", level: "C1" },
    ],
  },
];

/** Deterministic CEFR estimate from a placement attempt. */
export function estimateCefr(correct: number, total: number): { level: string; labelMm: string; note: string } {
  const percent = total === 0 ? 0 : (correct / total) * 100;
  if (percent >= 88) return { level: "C1", labelMm: "အဆင့်မြင့် (ခန့်မှန်း)", note: "Module H ၏ advanced သင်ခန်းစာများကို ဆက်လေ့လာပါ။" };
  if (percent >= 75) return { level: "B2", labelMm: "အလယ်အလတ် အထက် (ခန့်မှန်း)", note: "Relative clauses နှင့် register ကို အားဖြည့်ပါ။" };
  if (percent >= 60) return { level: "B1", labelMm: "အလယ်အလတ် (ခန့်မှန်း)", note: "Present perfect နှင့် conditionals ကို ပြန်လည်လေ့ကျင့်ပါ။" };
  if (percent >= 40) return { level: "A2", labelMm: "အခြေခံ (ခန့်မှန်း)", note: "Past simple နှင့် future forms ကို အားဖြည့်ပါ။" };
  return { level: "A1", labelMm: "အစပြု (ခန့်မှန်း)", note: "Module A မှ စတင်ပြီး အခြေခံ ဝါကျများကို လေ့ကျင့်ပါ။" };
}
