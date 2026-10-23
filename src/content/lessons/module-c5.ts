import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "c21-sports-hobbies",
    moduleId: "C",
    title: "Sports, Hobbies and Free Time",
    titleMm: "အားကစား၊ ဝါသနာ နှင့် အားလပ်ချိန်",
    level: "A2",
    minutes: 18,
    summaryLine: "အားကစား ကစားခြင်း၊ ဝါသနာ လုပ်ဆောင်ခြင်း နှင့် အားလပ်ချိန် အစီအစဉ် ပြောဆိုရာတွင် သုံးသည့် ဝေါဟာရ။",
    objectives: ["အားကစား/ဝါသနာ ဝေါဟာရ ၁၂ ခု သိမည်။", "play/go/do ကို မှန်ကန်စွာ ရွေးနိုင်မည်။", "ကိုယ့် အားလပ်ချိန် အကြောင်း ပြောနိုင်မည်။"],
    vocab: [
      { en: "take up", mm: "စတင် လုပ်သည် (ဝါသနာ)", pos: "phrasal verb", example: "I took up swimming last year.", exampleMm: "မနှစ်က ရေကူးခြင်းကို စတင်ခဲ့သည်။", topic: "hobbies", level: "B1" },
      { en: "coach", mm: "နည်းပြ", pos: "noun", example: "Our coach trains us twice a week.", exampleMm: "ကျွန်တော်တို့ နည်းပြက တစ်ပတ် နှစ်ကြိမ် လေ့ကျင့်ပေးသည်။", topic: "sports", level: "A2" },
      { en: "hobby", mm: "ဝါသနာ", pos: "noun", example: "Photography is my main hobby.", exampleMm: "ဓာတ်ပုံရိုက်ခြင်းက ကျွန်တော့် အဓိက ဝါသနာ ဖြစ်သည်။", topic: "hobbies", level: "A1" },
      { en: "keep fit", mm: "ကျန်းမာကြံ့ခိုင်အောင် ထိန်းသည်", pos: "phrase", example: "I cycle to keep fit.", exampleMm: "ကျန်းမာစေရန် စက်ဘီးစီးသည်။", topic: "sports", level: "B1" },
    ],
    sections: [
      {
        heading: "play / go / do",
        body: [
          "play + ဘောလုံး/ဂိမ်း/တူရိယာ — play football, play chess, play the guitar။",
          "go + -ing (လှုပ်ရှားမှု) — go swimming, go running, go hiking, go fishing။",
          "do + တစ်ဦးချင်း လေ့ကျင့်ခန်း/အနုပညာ — do yoga, do exercise, do karate, do a puzzle။",
        ],
        table: { headers: ["ကြိယာ", "တွဲဖက်သည့် အမျိုးအစား", "ဥပမာ"], rows: [["play", "ဘောလုံး/ဂိမ်း", "play badminton"], ["go", "-ing လှုပ်ရှားမှု", "go cycling"], ["do", "တစ်ဦးချင်း လေ့ကျင့်ခန်း", "do aerobics"], ["watch", "ကြည့်ရှုခြင်း", "watch a match"]] },
      },
      {
        heading: "အားလပ်ချိန် ပြောဆိုခြင်း",
        body: [
          "'In my free time, I usually…' 'I'm really into…' 'I've recently started…' 'I used to …, but now I…'",
          "ကြိမ်နှုန်း — once a week, twice a month, every other day, occasionally, hardly ever။",
        ],
      },
    ],
    examples: [
      { en: "I go swimming twice a week to keep fit.", mm: "ကျန်းမာစေရန် တစ်ပတ် နှစ်ကြိမ် ရေကူးသည်။" },
      { en: "She plays the guitar and does yoga in her free time.", mm: "သူမ အားလပ်ချိန်တွင် ဂစ်တာတီးပြီး ယောဂ လုပ်သည်။" },
      { en: "We hardly ever watch football, but we love playing it.", mm: "ဘောလုံး ကြည့်ခဲ့သည်မှာ အလွန်ရှားသည်၊ ဒါပေမယ့် ကစားရတာကို နှစ်သက်သည်။" },
    ],
    mistakes: [
      { wrong: "I play swimming.", right: "I go swimming.", why: "swimming တွင် go + -ing သုံးသည်။" },
      { wrong: "I do football every Sunday.", right: "I play football every Sunday.", why: "ဘောလုံး → play။" },
    ],
    guided: [
      { type: "mcq", prompt: "I ___ jogging every morning.", promptMm: "ရွေးပါ။", options: ["play", "go", "do", "make"], answer: 1, explanation: "go + -ing။", topic: "hobbies" },
      { type: "fill", prompt: "She ___ yoga twice a week.", promptMm: "ဖြည့်ပါ။", answers: ["does"], explanation: "do yoga → does။", topic: "sports" },
      { type: "mcq", prompt: "He ___ the piano very well.", promptMm: "ရွေးပါ။", options: ["plays", "does", "goes", "makes"], answer: 0, explanation: "တူရိယာ → play the piano။", topic: "hobbies" },
      { type: "correct", prompt: "Correct: I go to swim every weekend.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I go swimming every weekend."], explanation: "go + -ing။", topic: "hobbies" },
    ],
    independent: [
      { type: "mcq", prompt: "Which is correct?", promptMm: "မှန်ကန်သည့် ဝါကျ ရွေးပါ။", options: ["I do swimming.", "I play swimming.", "I go swimming.", "I make swimming."], answer: 2, explanation: "go swimming။", topic: "hobbies" },
      { type: "fill", prompt: "I've recently ___ up photography. (စတင်သည်)", promptMm: "ဖြည့်ပါ။", answers: ["taken"], explanation: "take up → taken up။", topic: "hobbies" },
      { type: "mcq", prompt: "How often do you play? — ___", promptMm: "ရွေးပါ။", options: ["Twice a week.", "Two weeks.", "For a week.", "In a week."], answer: 0, explanation: "ကြိမ်နှုန်း → twice a week။", topic: "hobbies" },
      { type: "translate", prompt: "Translate: ကျွန်တော် အားလပ်ချိန်မှာ စာဖတ်တယ်၊ တစ်ခါတလေ ဘောလုံး ကစားတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["In my free time I read, and I sometimes play football.", "In my free time I read; sometimes I play football."], explanation: "free time + ကြိမ်နှုန်း adverb။", topic: "hobbies" },
    ],
    review: [
      { q: "go နှင့် ဘယ်လို ကြိယာပုံစံ တွဲသလဲ။", a: "go + -ing (go swimming)။" },
      { q: "play ကို ဘယ်အရာတွေနှင့် သုံးသလဲ။", a: "အားကစား၊ ဂိမ်း နှင့် တူရိယာ။" },
    ],
    summary: ["play/go/do ကို အမျိုးအစားအလိုက် ရွေးရသည်။", "အားလပ်ချိန် ဖော်ပြရန် ကြိမ်နှုန်း adverb လိုသည်။", "take up သည် ဝါသနာ အသစ် စတင်ခြင်းကို ပြသည်။"],
    mastery: ["play/go/do ကွက်လပ် ၁၀ ခုတွင် ၉ ခု မှန်သည်။", "ကိုယ့် ဝါသနာ ၅ ခုကို ရေးနိုင်သည်။"],
    topics: ["hobbies", "sports", "vocabulary"],
  },
  {
    id: "c22-media-news",
    moduleId: "C",
    title: "Media and News",
    titleMm: "မီဒီယာ နှင့် သတင်း ဝေါဟာရ",
    level: "B2",
    minutes: 22,
    summaryLine: "သတင်းဖတ်ရှုမှု၊ မီဒီယာ အမျိုးအစားများ နှင့် သတင်း၏ ယုံကြည်စိတ်ချရမှု အကဲဖြတ်ခြင်း ဝေါဟာရ။",
    objectives: ["မီဒီယာ ဝေါဟာရ ၁၂ ခု သိမည်။", "headline, source, bias စသည်တို့ကို သုံးနိုင်မည်။", "သတင်းတစ်ပုဒ်ကို အနှစ်ချုပ် ဖော်ပြနိုင်မည်။"],
    vocab: [
      { en: "headline", mm: "သတင်း ခေါင်းစဉ်", pos: "noun", example: "The headline was misleading.", exampleMm: "သတင်း ခေါင်းစဉ်က လွဲမှားစွာ ဖော်ပြခဲ့သည်။", topic: "media", level: "B1" },
      { en: "source", mm: "သတင်း ရင်းမြစ်", pos: "noun", example: "The journalist protected her sources.", exampleMm: "သတင်းသမားက သူမ၏ ရင်းမြစ်များကို ကာကွယ်ခဲ့သည်။", topic: "media", level: "B2" },
      { en: "bias", mm: "ဘက်လိုက်မှု", pos: "noun", example: "The report showed a clear bias.", exampleMm: "အစီရင်ခံစာတွင် ထင်ရှားသည့် ဘက်လိုက်မှု ရှိသည်။", topic: "media", level: "B2" },
      { en: "coverage", mm: "သတင်း ဖော်ပြမှု", pos: "noun", example: "The event received wide coverage.", exampleMm: "ဖြစ်ရပ်ကို ကျယ်ကျယ်ပြန့်ပြန့် ဖော်ပြခဲ့သည်။", topic: "media", level: "B2" },
    ],
    sections: [
      {
        heading: "မီဒီယာ အမျိုးအစားများ",
        body: [
          "newspaper, magazine, tabloid (အပေါ်ယံ သတင်း), broadsheet (တရားဝင် သတင်းစာ), broadcast, podcast, newsletter, social media, blog။",
          "သတင်း တည်ဆောက်ပုံ — headline, lead (အဓိက အချက်), body, quote, source, editorial (အယ်ဒီတာ ဆောင်းပါး)။",
          "ကြိယာ — report, cover, publish, broadcast, leak, confirm, deny, allege။",
        ],
        table: { headers: ["ဝေါဟာရ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["misinformation", "မှားယွင်းသည့် အချက်အလက်", "spread misinformation"], ["credible", "ယုံကြည်နိုင်သော", "a credible source"], ["anonymous", "အမည်မဖော်သော", "an anonymous tip"], ["sensational", "စိတ်လှုပ်ရှားစေသည့်", "sensational reporting"]] },
      },
      {
        heading: "သတင်း အကဲဖြတ်ခြင်း",
        body: [
          "ယုံကြည်စိတ်ချရမှု စစ်ဆေးရန် — ရင်းမြစ် မည်သူလဲ၊ အခြား သတင်းဌာန နှစ်ခုက အတူတူ ဖော်ပြသလား၊ ရက်စွဲ နှင့် အထောက်အထား ပါသလား။",
          "ခေါင်းစဉ် (headline) သည် စိတ်ဆွဲဆောင်ရန် ရေးလေ့ ရှိသဖြင့် ခေါင်းစဉ်တစ်ခုတည်းဖြင့် မဆုံးဖြတ်ပါနှင့်။",
          "သတင်းတွင် အချက်အလက် (fact) နှင့် ထင်မြင်ချက် (opinion) ကို ခွဲခြားဖတ်ရသည် — 'Experts say…' သည် ထင်မြင်ချက် ဖြစ်နိုင်သည်။",
        ],
      },
    ],
    examples: [
      { en: "The story was reported by several credible sources.", mm: "သတင်းကို ယုံကြည်နိုင်သည့် ရင်းမြစ် များစွာက ဖော်ပြခဲ့သည်။" },
      { en: "Check the date before sharing an article online.", mm: "အွန်လိုင်းတွင် မျှဝေမီ ဆောင်းပါး၏ ရက်စွဲကို စစ်ပါ။" },
      { en: "The newspaper published an editorial criticising the policy.", mm: "သတင်းစာက မူဝါဒကို ဝေဖန်သည့် အယ်ဒီတာ ဆောင်းပါး ထုတ်ဝေခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "I heard a news about the flood.", right: "I heard some news about the flood.", why: "news သည် ရေတွက်မရ။" },
      { wrong: "According to me, the news is false.", right: "In my opinion, the news is false.", why: "according to ကို ကိုယ်တိုင် အပေါ် မသုံးပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "The journalist did not reveal her ___.", promptMm: "ရွေးပါ။", options: ["sources", "sauces", "sours", "courses"], answer: 0, explanation: "source = ရင်းမြစ်။", topic: "media" },
      { type: "fill", prompt: "The story received wide ___ in the press. (ဖော်ပြမှု)", promptMm: "ဖြည့်ပါ။", answers: ["coverage"], explanation: "media coverage။", topic: "media" },
      { type: "mcq", prompt: "Unfair preference for one side is ___.", promptMm: "ရွေးပါ။", options: ["balance", "bias", "biasness", "biased"], answer: 1, explanation: "bias = ဘက်လိုက်မှု။", topic: "media" },
      { type: "correct", prompt: "Correct: She gave me an useful information.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["She gave me some useful information.", "She gave me useful information."], explanation: "information သည် ရေတွက်မရ။", topic: "media" },
    ],
    independent: [
      { type: "mcq", prompt: "A ___ source can be trusted.", promptMm: "ရွေးပါ။", options: ["credible", "credulous", "incredible", "credited"], answer: 0, explanation: "credible = ယုံကြည်နိုင်သော။", topic: "media" },
      { type: "fill", prompt: "The news was ___ by the government. (ငြင်းဆိုသည်)", promptMm: "ဖြည့်ပါ။", answers: ["denied"], explanation: "deny → denied။", topic: "media" },
      { type: "mcq", prompt: "Which is a fact, not an opinion?", promptMm: "အချက်အလက် ရွေးပါ။", options: ["The film is boring.", "The film lasts 120 minutes.", "The film is too long.", "The film is the best this year."], answer: 1, explanation: "ကြာချိန်သည် စစ်ဆေးနိုင်သည့် အချက်။", topic: "media" },
      { type: "translate", prompt: "Translate: ဒီသတင်းက ဘက်လိုက်တယ်လို့ ကျွန်တော် ထင်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I think this report is biased.", "In my opinion, this news is biased."], explanation: "biased = ဘက်လိုက်သည်။", topic: "media" },
    ],
    review: [
      { q: "news ၏ ကြိယာ ပုံစံ ဘာလဲ။", a: "news သည် ရေတွက်မရဖြစ်ပြီး အနည်းကိန်း ကြိယာ ယူသည် — The news is…။" },
      { q: "သတင်း ယုံကြည်စိတ်ချရမှုကို ဘယ်လို စစ်သလဲ။", a: "ရင်းမြစ်၊ ရက်စွဲ၊ အခြား သတင်းဌာန အတည်ပြုမှု နှင့် အထောက်အထား တို့ကို စစ်သည်။" },
    ],
    summary: ["မီဒီယာ ဝေါဟာရတွင် အမျိုးအစား၊ သတင်း တည်ဆောက်ပုံ နှင့် ကြိယာ အုပ်စုများ ရှိသည်။", "ခေါင်းစဉ်တစ်ခုတည်းဖြင့် မဆုံးဖြတ်သင့်ပါ။", "fact နှင့် opinion ကို ခွဲဖတ်ရသည်။"],
    mastery: ["ဝေါဟာရ ၁၂ ခုကို သုံးနိုင်သည်။", "သတင်းတစ်ပုဒ်ကို စာကြောင်း ၅ ကြောင်းဖြင့် အနှစ်ချုပ်နိုင်သည်။"],
    topics: ["media", "news", "critical reading"],
  },
  {
    id: "c23-advertising",
    moduleId: "C",
    title: "Advertising and Marketing",
    titleMm: "ကြော်ငြာ နှင့် စျေးကွက် ဖော်ပြချက် ဝေါဟာရ",
    level: "B2",
    minutes: 20,
    summaryLine: "ကြော်ငြာ ဖတ်ရှုခြင်း၊ စျေးကွက် နည်းဗျူဟာ နှင့် ကြော်ငြာ ဆန်းစစ်ခြင်း ဝေါဟာရ။",
    objectives: ["ကြော်ငြာ ဝေါဟာရ ၁၂ ခု သိမည်။", "target, campaign, slogan စသည်တို့ကို သုံးနိုင်မည်။", "ကြော်ငြာ၏ နည်းဗျူဟာကို ဝေဖန်စိစစ်နိုင်မည်။"],
    vocab: [
      { en: "target audience", mm: "ပစ်မှတ် ပရိသတ်", pos: "noun", example: "The advert targets a young audience.", exampleMm: "ကြော်ငြာက လူငယ် ပရိသတ်ကို ပစ်မှတ်ထားသည်။", topic: "advertising", level: "B2" },
      { en: "slogan", mm: "ကြော်ငြာ ဆောင်ပုဒ်", pos: "noun", example: "The slogan is easy to remember.", exampleMm: "ဆောင်ပုဒ်က မှတ်ရလွယ်သည်။", topic: "advertising", level: "B1" },
      { en: "campaign", mm: "ကြော်ငြာ လှုံ့ဆော်မှု အစီအစဉ်", pos: "noun", example: "They ran a big campaign online.", exampleMm: "သူတို့ အွန်လိုင်းတွင် ကြော်ငြာ အစီအစဉ် ကြီးတစ်ခု လုပ်ခဲ့သည်။", topic: "advertising", level: "B2" },
      { en: "exaggerate", mm: "ချဲ့ကားပြောသည်", pos: "verb", example: "Adverts often exaggerate benefits.", exampleMm: "ကြော်ငြာများက အကျိုးကျေးဇူးများကို ချဲ့ကားပြောလေ့ ရှိသည်။", topic: "advertising", level: "B2" },
    ],
    sections: [
      {
        heading: "ကြော်ငြာ ဝေါဟာရ",
        body: [
          "brand, logo, promotional offer, discount code, free delivery, limited time, testimonial, influencer, sponsorship။",
          "ကြော်ငြာ ပုံစံ — print ad, billboard, TV commercial, pop-up, sponsored post, search ad။",
          "ငွေပေးချေမှု ပုံစံ — pay-per-click, impressions, conversion rate, reach။",
        ],
        table: { headers: ["ဝေါဟာရ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["endorsement", "ထောက်ခံ ကြော်ငြာ", "a celebrity endorsement"], ["persuasive", "ဆွဲဆောင်နိုင်သော", "persuasive language"], ["misleading", "လွဲမှားစေသော", "a misleading claim"], ["value for money", "ငွေနှင့် တန်ဖိုး", "good value for money"]] },
      },
      {
        heading: "ကြော်ငြာ ဆန်းစစ်ခြင်း",
        body: [
          "မေးသင့်သည့် မေးခွန်းများ — ဤကြော်ငြာက ဘယ်သူ့အတွက် လဲ။ ဘယ်လို စိတ်ခံစားချက်ကို အသုံးချသလဲ။ အချက်အလက် အားလုံး ပြည့်စုံသလား။ ကုန်ကျစရိတ် အားလုံး ပါသလား။",
          "'best', 'cheapest', 'guaranteed' ကဲ့သို့ စကားလုံးများကို သတိထားဖတ်ရသည် — ဘယ်အခြေအနေတွင် မှန်သလဲ ဆိုသည်ကို မေးရသည်။",
          "ကြော်ငြာ ရေးသားမှုတွင် အလွန်တိုတောင်းသော ဝါကျ၊ နာမဝိသေသန နှင့် imperative ကို အသုံးများသည် — 'Buy now!' 'Try it today!'",
        ],
      },
    ],
    examples: [
      { en: "The campaign targets people aged 18 to 30.", mm: "ကြော်ငြာ အစီအစဉ်က အသက် ၁၈ မှ ၃၀ အတွင်း လူများကို ပစ်မှတ်ထားသည်။" },
      { en: "The advert claims the phone is the fastest on the market.", mm: "ဖုန်းက စျေးကွက်တွင် အမြန်ဆုံးဟု ကြော်ငြာက ဆိုသည်။" },
      { en: "Prices look low, but delivery costs are added at checkout.", mm: "စျေးနှုန်းများ နည်းသလို ထင်ရသော်လည်း ငွေရှင်းချိန်တွင် ပို့ဆောင်ခ ထပ်တိုးသည်။" },
    ],
    mistakes: [
      { wrong: "The advert is targeting to young people.", right: "The advert targets young people.", why: "target သည် တိုက်ရိုက် ကြိယာ ဖြစ်သည်။" },
      { wrong: "It is more cheaper than others.", right: "It is cheaper than others.", why: "double comparative မသုံးပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "The people an advert aims at are its ___.", promptMm: "ရွေးပါ။", options: ["audience target", "target audience", "audience targeting", "targeting audience"], answer: 1, explanation: "target audience။", topic: "advertising" },
      { type: "fill", prompt: "The slogan is short and easy to ___. (မှတ်မိ)", promptMm: "ဖြည့်ပါ။", answers: ["remember"], explanation: "easy to remember။", topic: "advertising" },
      { type: "mcq", prompt: "To say something is better than it really is means to ___.", promptMm: "ရွေးပါ။", options: ["understate", "exaggerate", "estimate", "evaluate"], answer: 1, explanation: "exaggerate = ချဲ့ကား။", topic: "advertising" },
      { type: "correct", prompt: "Correct: The price is more cheaper than last year.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The price is cheaper than last year."], explanation: "cheaper သာ သုံးရသည်။", topic: "advertising" },
    ],
    independent: [
      { type: "mcq", prompt: "A short phrase used in adverts is a ___.", promptMm: "ရွေးပါ။", options: ["slogan", "logo", "brand", "poster"], answer: 0, explanation: "slogan = ဆောင်ပုဒ်။", topic: "advertising" },
      { type: "fill", prompt: "The company ran a marketing ___ for three months.", promptMm: "ဖြည့်ပါ။", answers: ["campaign"], explanation: "marketing campaign။", topic: "advertising" },
      { type: "mcq", prompt: "Which question best tests an advert's claim?", promptMm: "အကောင်းဆုံး မေးခွန်း ရွေးပါ။", options: ["Is the logo attractive?", "What evidence supports this claim?", "Is the music good?", "Do my friends like it?"], answer: 1, explanation: "အထောက်အထား မေးခြင်း။", topic: "advertising" },
      { type: "translate", prompt: "Translate: ဒီကြော်ငြာက လူငယ်တွေကို ပစ်မှတ်ထားတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["This advert targets young people.", "This advertisement targets young people."], explanation: "target + လူအုပ်စု။", topic: "advertising" },
    ],
    review: [
      { q: "target audience ဆိုတာ ဘာလဲ။", a: "ကြော်ငြာက ရည်ရွယ်သည့် ပရိသတ် အုပ်စု။" },
      { q: "ကြော်ငြာ ဖတ်ရာတွင် ဘာကို သတိထားရသလဲ။", a: "ချဲ့ကားပြောခြင်း၊ ဖုံးကွယ်ထားသည့် ကုန်ကျစရိတ် နှင့် အထောက်အထား မရှိသည့် အဆိုများ။" },
    ],
    summary: ["ကြော်ငြာ ဝေါဟာရတွင် ပစ်မှတ်၊ ပုံစံ နှင့် တိုင်းတာမှု အုပ်စုများ ရှိသည်။", "ကြော်ငြာ ဘာသာစကားသည် တို၊ ဆွဲဆောင်မှုရှိပြီး တစ်ခါတစ်ရံ ချဲ့ကားသည်။", "အထောက်အထား မေးခြင်းက ဝေဖန်စိစစ်မှု၏ အဓိက ဖြစ်သည်။"],
    mastery: ["ဝေါဟာရ ၁၂ ခုကို သုံးနိုင်သည်။", "ကြော်ငြာ တစ်ခုကို စာကြောင်း ၆ ကြောင်းဖြင့် ဝေဖန်နိုင်သည်။"],
    topics: ["advertising", "marketing", "critical reading"],
  },
  {
    id: "c24-politics-government",
    moduleId: "C",
    title: "Politics and Government",
    titleMm: "နိုင်ငံရေး နှင့် အစိုးရ ဝေါဟာရ",
    level: "B2",
    minutes: 22,
    summaryLine: "အစိုးရ ဖွဲ့စည်းပုံ၊ ရွေးကောက်ပွဲ နှင့် မူဝါဒ အကြောင်း ဓမ္မဓိဋ္ဌာန်ကျစွာ ဆွေးနွေးရန် ဝေါဟာရ။",
    objectives: ["နိုင်ငံရေး ဝေါဟာရ ၁၂ ခု သိမည်။", "election, policy, reform စသည်တို့ကို သုံးနိုင်မည်။", "ဓမ္မဓိဋ္ဌာန် လေသံဖြင့် ဆွေးနွေးနိုင်မည်။"],
    vocab: [
      { en: "policy", mm: "မူဝါဒ", pos: "noun", example: "The government introduced a new health policy.", exampleMm: "အစိုးရ ကျန်းမာရေး မူဝါဒ အသစ် ထုတ်ပြန်ခဲ့သည်။", topic: "politics", level: "B2" },
      { en: "election", mm: "ရွေးကောက်ပွဲ", pos: "noun", example: "The election will be held in November.", exampleMm: "ရွေးကောက်ပွဲကို နိုဝင်ဘာတွင် ကျင်းပမည်။", topic: "politics", level: "B1" },
      { en: "reform", mm: "ပြုပြင်ပြောင်းလဲမှု", pos: "noun", example: "Education reform takes years.", exampleMm: "ပညာရေး ပြုပြင်ပြောင်းလဲမှုက နှစ်များစွာ ကြာသည်။", topic: "politics", level: "B2" },
      { en: "citizen", mm: "နိုင်ငံသား", pos: "noun", example: "Every citizen has the right to vote.", exampleMm: "နိုင်ငံသား တိုင်း မဲပေးပိုင်ခွင့် ရှိသည်။", topic: "politics", level: "B1" },
    ],
    sections: [
      {
        heading: "အခြေခံ ဝေါဟာရ",
        body: [
          "အစိုးရ ဖွဲ့စည်းပုံ — parliament, cabinet, minister, opposition, constitution, local authority။",
          "ရွေးကောက်ပွဲ — candidate, campaign, ballot, vote, turnout, majority, coalition။",
          "မူဝါဒ — legislation, regulation, tax, subsidy, reform, budget, public services။",
        ],
        table: { headers: ["ဝေါဟာရ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["democracy", "ဒီမိုကရေစီ", "a parliamentary democracy"], ["corruption", "အဂတိလိုက်စားမှု", "tackle corruption"], ["transparency", "ပွင့်လင်းမြင်သာမှု", "greater transparency"], ["accountable", "တာဝန်ခံရသော", "hold officials accountable"]] },
      },
      {
        heading: "ဓမ္မဓိဋ္ဌာန် ဆွေးနွေးခြင်း",
        body: [
          "ဓမ္မဓိဋ္ဌာန်ကျစေရန် — 'According to the report…' 'The government argues that…' 'Critics point out that…' ကဲ့သို့ ရင်းမြစ် ကို ဖော်ပြသည်။",
          "ကိုယ်ပိုင် ထင်မြင်ချက် ပေးလိုလျှင် 'In my view…' ဟု ရှင်းရှင်းလင်းလင်း ခွဲပြသည်။",
          "လူပုဂ္ဂိုလ် တိုက်ခိုက်ခြင်း (personal attack) ကို ရှောင်ပြီး မူဝါဒ၏ သက်ရောက်မှုကို ဆွေးနွေးသည်။",
        ],
      },
    ],
    examples: [
      { en: "The new policy aims to improve access to healthcare.", mm: "မူဝါဒအသစ်က ကျန်းမာရေး ဝန်ဆောင်မှု ရရှိမှု တိုးတက်စေရန် ရည်ရွယ်သည်။" },
      { en: "Voter turnout was higher than in the previous election.", mm: "မဲပေးသူ ဦးရေက ယခင် ရွေးကောက်ပွဲထက် များခဲ့သည်။" },
      { en: "Critics argue that the reform does not address the main problem.", mm: "ပြုပြင်ပြောင်းလဲမှုက အဓိက ပြဿနာကို မဖြေရှင်းဟု ဝေဖန်သူများ ဆိုသည်။" },
    ],
    mistakes: [
      { wrong: "The government have made a new policy.", right: "The government has made a new policy.", why: "government ကို အနည်းကိန်း အဖြစ် သုံးလျှင် has။" },
      { wrong: "He is a politic person.", right: "He is a political person.", why: "နာမဝိသေသနသည် political။" },
    ],
    guided: [
      { type: "mcq", prompt: "Citizens ___ in elections.", promptMm: "ရွေးပါ။", options: ["vote", "elect", "select", "choose out"], answer: 0, explanation: "vote in elections။", topic: "politics" },
      { type: "fill", prompt: "The government introduced a new ___ on sugar. (အခွန်)", promptMm: "ဖြည့်ပါ။", answers: ["tax"], explanation: "a tax on။", topic: "politics" },
      { type: "mcq", prompt: "The percentage of people who vote is ___.", promptMm: "ရွေးပါ။", options: ["majority", "turnout", "ballot", "coalition"], answer: 1, explanation: "turnout = မဲပေးသူ ဦးရေ။", topic: "politics" },
      { type: "correct", prompt: "Correct: The government have approved the budget.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The government has approved the budget."], explanation: "government → has။", topic: "politics" },
    ],
    independent: [
      { type: "mcq", prompt: "Two parties working together form a ___.", promptMm: "ရွေးပါ။", options: ["coalition", "constitution", "cabinet", "campaign"], answer: 0, explanation: "coalition = ညွန့်ပေါင်း။", topic: "politics" },
      { type: "fill", prompt: "Officials should be ___ for their decisions. (တာဝန်ခံ)", promptMm: "ဖြည့်ပါ။", answers: ["accountable"], explanation: "accountable for။", topic: "politics" },
      { type: "mcq", prompt: "Which phrase reports a view neutrally?", promptMm: "ဓမ္မဓိဋ္ဌာန်ကျသည့် စကားစု ရွေးပါ။", options: ["Everyone knows the policy is bad.", "According to critics, the policy is flawed.", "The policy is obviously wrong.", "Only fools support this."], answer: 1, explanation: "According to… သည် ရင်းမြစ် ဖော်ပြသည်။", topic: "politics" },
      { type: "translate", prompt: "Translate: အစိုးရက ပညာရေး ပြုပြင်ပြောင်းလဲမှုကို ကြေညာခဲ့တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["The government announced education reform.", "The government has announced education reform."], explanation: "announce + နာမ်။", topic: "politics" },
    ],
    review: [
      { q: "turnout ဆိုတာ ဘာလဲ။", a: "ရွေးကောက်ပွဲတွင် မဲပေးသူ ဦးရေ အချိုးအစား။" },
      { q: "နိုင်ငံရေး ဆွေးနွေးမှုတွင် ဓမ္မဓိဋ္ဌာန်ကျစေရန် ဘယ်လို ပြောသလဲ။", a: "ရင်းမြစ်ကို ဖော်ပြပြီး ကိုယ်ပိုင် ထင်မြင်ချက်ကို ခွဲပြသည်။" },
    ],
    summary: ["နိုင်ငံရေး ဝေါဟာရတွင် ဖွဲ့စည်းပုံ၊ ရွေးကောက်ပွဲ နှင့် မူဝါဒ အုပ်စုများ ရှိသည်။", "government သည် အနည်းကိန်း ကြိယာ ယူသည်။", "ဓမ္မဓိဋ္ဌာန် လေသံသည် ရင်းမြစ် ဖော်ပြခြင်းဖြင့် ရနိုင်သည်။"],
    mastery: ["ဝေါဟာရ ၁၂ ခုကို သုံးနိုင်သည်။", "မူဝါဒ တစ်ခုအပေါ် ဟန်ချက်ညီ စာပိုဒ် ၁၂၀ လုံး ရေးနိုင်သည်။"],
    topics: ["politics", "government", "vocabulary"],
  },
];

export const moduleCLessonsPart5: Lesson[] = buildLessons(seeds);
