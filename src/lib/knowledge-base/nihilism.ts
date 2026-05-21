/**
 * 虚无主义知识库
 *
 * 整合西方虚无主义思想（尼采、加缪、海德格尔、西谷启治）与佛道空无思想，
 * 为内容创作提供"夺境 → 用工具 → 空空"的理论框架。
 *
 * 核心洞见：佛道的根本目标不是否定虚无，而是接纳虚无并从中建立自由。
 * 虚无是一切痛苦的根源，佛教和道教都是为了解决虚无而诞生的工具。
 */

// ============================================================================
// 一、西方虚无主义：核心思想家与核心命题
// ============================================================================

export interface ThinkerProfile {
  id: string
  name: string
  nameZh: string
  era: string
  keyWorks: string[]
  coreThesis: string
  coreThesisZh: string
  relationToBuddhism: string
}

export const THINKERS: Record<string, ThinkerProfile> = {
  nietzsche: {
    id: "nietzsche",
    name: "Friedrich Nietzsche",
    nameZh: "尼采",
    era: "1844–1900",
    keyWorks: [
      "The Gay Science (1882)",
      "Thus Spoke Zarathustra (1883–85)",
      "Beyond Good and Evil (1886)",
      "On the Genealogy of Morality (1887)",
      "The Will to Power (notebooks, 1883–88)",
    ],
    coreThesis:
      'Nihilism means "the highest values devalue themselves. The aim is lacking, and Why finds no answer." When traditional foundations (God, Truth, Morality) collapse, humanity confronts the abyss. Nietzsche distinguishes passive nihilism (resignation, despair) from active nihilism (the Übermensch who creates new values). His diagnosis: nihilism is not a philosophical opinion — it is the historical destiny of the West.',
    coreThesisZh:
      "虚无主义意味着\"最高价值的自行贬黜。目标缺失，'为何'找不到答案\"。当上帝、真理、道德这些传统地基塌陷之后，人直接面对深渊。尼采区分了消极虚无主义（放弃、绝望）和积极虚无主义（超人创造新价值）。他的诊断：虚无主义不是一种哲学观点——它是西方的历史命运。",
    relationToBuddhism:
      'Nietzsche famously called Buddhism "the only genuinely positivistic religion in history" yet also critiqued what he called "European Buddhism" as passive nihilism. He misunderstood śūnyatā as mere negation, never encountering the Mahayana doctrine of "emptiness of emptiness" that Nishitani later deployed against his critique.',
  },

  camus: {
    id: "camus",
    name: "Albert Camus",
    nameZh: "加缪",
    era: "1913–1960",
    keyWorks: [
      "The Myth of Sisyphus (1942)",
      "The Stranger (1942)",
      "The Rebel (1951)",
    ],
    coreThesis:
      "The absurd is the confrontation between humanity's hunger for meaning and the universe's unreasonable silence. Camus asks: does meaninglessness logically require suicide? His answer: no. The authentic response is revolt — to live with full consciousness of the absurd, without escape into religion or despair, and to defiantly persist. One must imagine Sisyphus happy.",
    coreThesisZh:
      "荒谬是人对意义的渴望和宇宙的沉默之间的对峙。加缪问了一个问题：人生没有意义，是否意味着应该自杀？他的回答：不。真正的回应是反抗——带着对荒谬的彻底清醒活着，不逃进宗教也不陷入绝望，倔强地继续。必须想象西西弗斯是快乐的。",
    relationToBuddhism:
      "Camus's \"revolt\" parallels the Buddhist bodhisattva path — to fully see the emptiness of existence yet choose to remain engaged with compassion. But Camus never moved beyond the heroic ego; Buddhism dissolves the rebel himself.",
  },

  heidegger: {
    id: "heidegger",
    name: "Martin Heidegger",
    nameZh: "海德格尔",
    era: "1889–1976",
    keyWorks: [
      "Being and Time (1927)",
      "What Is Metaphysics? (1929)",
      "The Question of Being (1955)",
      "Nietzsche (lectures, 1936–40)",
    ],
    coreThesis:
      "Nihilism is not a worldview people choose — it is the historical event of the forgetting of Being (Seinsvergessenheit). Because Being is not a being, from the perspective of beings it shows up as nothing. Western metaphysics has always asked about beings (what exists) while forgetting the question of Being itself (why existence at all?). The nothing that nihilism announces is actually Being's withdrawal — and this withdrawal itself is how Being gives itself.",
    coreThesisZh:
      "虚无主义不是人们选择的一种世界观——它是\"存在被遗忘\"这个历史事件。因为存在本身不是任何一个存在者，所以从存在者的视角看，它表现为无。西方形而上学一直在追问存在者（什么东西存在），而忘记了追问存在本身（为什么竟有存在而不是什么都没有）。虚无主义揭示的那个\"无\"，其实是存在本身的退隐——而这种退隐，恰恰是存在给予自身的方式。",
    relationToBuddhism:
      'Heidegger showed genuine interest in Daoism (he partially translated the Daodejing) and Zen. His idea that "the nothing nothings" (Das Nichts selbst nichtet) echoes the Buddhist insight that emptiness is not a thing but an activity — the dynamic "emptying" of all fixed essences. His critique of Western metaphysics as "forgetting" parallels the Buddhist diagnosis of avidyā (ignorance) as the root problem.',
  },

  nishitani: {
    id: "nishitani",
    name: "Nishitani Keiji",
    nameZh: "西谷启治",
    era: "1900–1990",
    keyWorks: [
      "The Self-Overcoming of Nihilism (1949/1990)",
      "Religion and Nothingness (1961)",
    ],
    coreThesis:
      "Nihilism cannot be overcome by avoiding it — the only way out is through. The self must pass through the Great Doubt (a thoroughgoing existential crisis where one's very being becomes a question) into the Great Death (the dissolution of the ego-centered self), and emerge into the Field of Emptiness (śūnyatā). Crucially, śūnyatā is not mere nothingness — it is the emptiness that empties even itself, the 'nothingness of being' where all things exist in their true suchness (tathatā). This is the Kyoto School's Buddhist answer to Nietzsche: nihilism is not the end — it is the doorway.",
    coreThesisZh:
      "虚无主义不能绕过去——唯一的出路是穿过去。自我必须经历大疑（连自己的存在本身都变成问号的彻底危机），进入大死（小我的解体），最终抵达空的场域（śūnyatā）。关键：空不是单纯的虚无——空连自己都空掉，是\"存在的无\"，万物在其中以本来的样子（tathatā/如）如实呈现。这是京都学派对尼采的回答：虚无主义不是终点——它是门。",
    relationToBuddhism:
      "Nishitani is the key bridge figure. He uses Mahayana Buddhism (specifically the concept of śūnyatā) to directly answer Nietzsche's problem of nihilism. His framework — Great Doubt → Great Death → Field of Emptiness — is essentially a philosophical articulation of Zen practice.",
  },
}

// ============================================================================
// 二、虚无主义的核心形态（问题诊断工具）
// ============================================================================

export interface NihilismForm {
  id: string
  name: string
  nameZh: string
  coreQuestion: string
  coreQuestionZh: string
  symptom: string
  symptomZh: string
  buddhistResponse: string
  taoistResponse: string
}

export const NIHILISM_FORMS: Record<string, NihilismForm> = {
  existential: {
    id: "existential",
    name: "Existential Nihilism",
    nameZh: "存在虚无主义",
    coreQuestion: "If life has no inherent meaning, why live?",
    coreQuestionZh: "如果生命没有内在意义，为什么还要活着？",
    symptom:
      "A pervasive sense that nothing ultimately matters. Success feels hollow, relationships feel temporary, death renders everything pointless. The feeling isn't intellectual — it's visceral: a background hum of 'why bother?' that colors everything.",
    symptomZh:
      "一种弥漫性的感觉：一切都没有意义。成功觉得空虚，人际关系觉得短暂，死亡让一切归零。这种感觉不是思想层面的——它是身体性的：一种'有什么意义呢'的底噪，让所有事情都褪了色。",
    buddhistResponse:
      "Buddhism agrees: life has no INHERENT meaning. This is not a bug — it's the correct observation. The problem is not meaninglessness — the problem is that you're still trying to find meaning in things that are empty of inherent self-nature. The suffering comes from grasping at permanence where there is only flux. When you stop demanding that things provide meaning, they stop failing to provide it — and something paradoxical happens: meaning arises as a spontaneous, impermanent, interdependent activity rather than a fixed possession.",
    taoistResponse:
      "Daoism says: you're looking for meaning like you're looking for a fixed point in a river. The river doesn't have a fixed point — but the river flows. The meaning of water isn't to reach the ocean (it already will); it's just to flow. 道法自然 — the Dao follows what is naturally so. Meaning isn't something you FIND; it's something that happens when you stop blocking the natural flow with the demand to 'know what it all means.'",
  },

  epistemological: {
    id: "epistemological",
    name: "Epistemological Nihilism",
    nameZh: "认知虚无主义",
    coreQuestion: "Can we know anything with certainty? If not, on what basis do we act?",
    coreQuestionZh: "我们能确定地知道任何事吗？如果不能，我们凭什么行动？",
    symptom:
      "The creeping realization that every belief system — religion, science, political ideology — rests on unprovable assumptions. When you see this clearly, you can't unsee it. But now you can't commit to anything either, because commitment requires believing something is true.",
    symptomZh:
      "一种逐渐蔓延的认知：每一个信仰体系——宗教、科学、政治意识形态——都建立在无法证明的假设之上。一旦看清楚这一点，你就回不去了。但你现在也没法对任何事全力以赴，因为全力以赴需要相信一件事是真实的。",
    buddhistResponse:
      "Buddhism's Madhyamaka (Middle Way) school says: you're right — no view is absolutely true. But this itself is the truth. 空 (emptiness) means all views are empty of absolute validity. The Middle Way is: don't cling to any view as absolute truth, but don't reject all views either. Use views as tools, not as possessions. A raft gets you across the river; you don't carry it on your back once you've crossed.",
    taoistResponse:
      "Daoism handles this with radical simplicity: 道可道，非常道 — the Dao that can be spoken is not the eternal Dao. Of course you can't nail it down. That's not a failure of knowledge — that's the nature of reality. You don't need certainty to live well, just like you don't need to define water to swim. Stop trying to capture the Dao in concepts, and start living in accordance with it.",
  },

  ethical: {
    id: "ethical",
    name: "Ethical/Moral Nihilism",
    nameZh: "道德虚无主义",
    coreQuestion: "If there is no objective morality, why be good?",
    coreQuestionZh: "如果没有客观的道德，为什么要做好人？",
    symptom:
      "The suspicion that all moral codes are just social constructs — tools of power, evolutionary programming, or cultural conditioning. Good and evil aren't real; they're stories we tell. But if that's true, what stops you from doing anything at all?",
    symptomZh:
      "一种怀疑：所有道德规范不过是社会建构——权力的工具、进化的程序、文化的条件反射。善恶不是真实的；它们只是我们讲的故事。但如果这是真的，什么能阻止你为所欲为？",
    buddhistResponse:
      "Buddhism doesn't ground morality in a divine lawgiver — it grounds it in causality. Being 'good' isn't obeying a rule; it's acting in a way that doesn't generate suffering for yourself and others, because suffering has causes and those causes can be understood. Karma isn't cosmic justice — it's just cause and effect. You don't need an absolute moral law to see that some actions lead to hell-states (for you and others) and some lead to freedom.",
    taoistResponse:
      "Daoism doesn't prescribe moral rules — it describes how things naturally work. 上德不德，是以有德 — highest virtue doesn't call itself virtue, and that's why it IS virtue. When you act without forcing, without self-conscious moral posturing, natural compassion arises. A river doesn't decide to nourish the valley; it just flows. Be like the river. Ethical action is spontaneous alignment with the Dao, not rule-following.",
  },
}

// ============================================================================
// 三、佛道对治框架：夺境 → 用工具 → 空空
// ============================================================================

export interface PracticeFramework {
  step: string
  stepZh: string
  description: string
  descriptionZh: string
  keyConcepts: string[]
}

export const FRAMEWORK: PracticeFramework[] = [
  {
    step: "Seizing Context (夺境)",
    stepZh: "夺境",
    description:
      "Before offering any solution, first reframe the problem through the lens of nihilism. The reader's anxiety/confusion/emptiness is not a personal failing or a medical condition — it is an encounter with the fundamental groundlessness of existence. This is the Chan Buddhist technique of 'seizing the environment' — you strip away the familiar framing and reveal the raw existential situation. Nietzsche saw it coming; the Buddha and Laozi already knew how to walk through it.",
    descriptionZh:
      "在给出任何解决方案之前，先把问题用虚无主义的透镜重新呈现。读者的焦虑/困惑/空虚不是个人失败或医学症状——这是和存在本身的虚无打了个照面。这就是禅宗的\"夺境\"——把读者熟悉的认知框架拆掉，让他直接看到存在的裸机状态。尼采预言了它的到来；佛陀和老子早就知道怎么穿过它。",
    keyConcepts: [
      "nihilism (虚无主义)",
      "groundlessness (无根性)",
      "seizing context (夺境)",
      "existential confrontation",
    ],
  },
  {
    step: "Using Tools (用工具)",
    stepZh: "用工具",
    description:
      "Buddhism and Daoism are not belief systems to adopt — they are tools to use. Buddhism provides the analytical scalpel: dependent origination, śūnyatā, anātman, the Four Noble Truths. Daoism provides the experiential compass: wu-wei, ziran, the metaphor of water. Both are practical technologies for working with nothingness rather than fleeing from it.",
    descriptionZh:
      "佛教和道教不是要你信仰的体系——它们是要你使用的工具。佛教提供分析的手术刀：缘起、空性、无我、四圣谛。道教提供体验的指南针：无为、自然、水的隐喻。它们都是处理虚无的实操技术，而不是逃避虚无的心理安慰。",
    keyConcepts: [
      "Buddhism as diagnosis (佛教是诊断)",
      "Daoism as alignment (道教是顺应)",
      "tools not beliefs (工具不是信仰)",
    ],
  },
  {
    step: "Double Emptiness (空空)",
    stepZh: "空空",
    description:
      "The final move: empty even emptiness itself. This is the Chan/Zen insight that most traditions miss. If you grasp śūnyatā as 'the truth' or wu-wei as 'the way,' you've made them into new objects of attachment. The genuine liberation is to realize that 'meaninglessness' itself is also empty — it has no fixed essence. You don't move from 'meaning exists' to 'meaning doesn't exist.' You move to: 'the question of meaning no longer binds me.' This is the 'great freedom' (大自在) of the Mahayana — not the absence of problems but the absence of the problem-structure itself.",
    descriptionZh:
      "最后一步：连空本身也空掉。这是禅宗的独门洞见，绝大多数传统都错过了这一步。如果你把\"空\"当成\"真理\"来抓，把\"无为\"当成\"正确的生活方式\"来执行，你已经把它们变成了新的执着对象。真正的解脱是：\"没有意义\"本身也是空的——它也没有固定本质。你不是从\"有意义\"走到\"没意义\"，你是走到\"意义这个问题不再绑住我了\"。这就是大乘的\"大自在\"——不是没有问题，而是\"问题\"这个结构本身消失了。",
    keyConcepts: [
      "emptiness of emptiness (空空)",
      "śūnyatāśūnyatā",
      "great freedom (大自在)",
      "beyond both eternalism AND nihilism (离二边)",
    ],
  },
]

// ============================================================================
// 四、经典映射：西哲概念 → 佛道经典
// ============================================================================

export interface ConceptMapping {
  westernConcept: string
  westernThinker: string
  buddhistConcept: string
  buddhistSource: string
  taoistConcept: string
  taoistSource: string
  synthesis: string
}

export const CONCEPT_MAPPINGS: ConceptMapping[] = [
  {
    westernConcept: "The death of God / collapse of ultimate values",
    westernThinker: "Nietzsche",
    buddhistConcept: "Śūnyatā — all dharmas are empty of self-nature",
    buddhistSource: "《中论》卷一：诸法不自生，亦不从他生，不共不无因，是故知无生",
    taoistConcept: "道可道，非常道 — the ultimate cannot be named or grasped",
    taoistSource: "《道德经》第一章",
    synthesis:
      "Nietzsche's 'God is dead' and Nāgārjuna's 'all dharmas are empty' are describing the same collapse of metaphysical foundations — but Nietzsche experienced it as a catastrophe, while Nāgārjuna experienced it as liberation.",
  },
  {
    westernConcept: "The Absurd — the confrontation between meaning-hunger and cosmic silence",
    westernThinker: "Camus",
    buddhistConcept: "Duḥkha — the fundamental unsatisfactoriness of conditioned existence",
    buddhistSource: "《杂阿含经》卷一：色无常，无常即苦，苦即非我",
    taoistConcept: "天地不仁，以万物为刍狗 — Heaven and Earth are not humane",
    taoistSource: "《道德经》第五章",
    synthesis:
      "Camus's 'absurd' is duḥkha experienced by a modern individual severed from spiritual technology. The diagnosis is identical; the Buddhist/Taoist prescription is older and arguably more complete.",
  },
  {
    westernConcept: "The forgetting of Being (Seinsvergessenheit)",
    westernThinker: "Heidegger",
    buddhistConcept: "Avidyā — fundamental ignorance of the nature of reality",
    buddhistSource: "《杂阿含经》卷十二：无明为缘行，行为缘识",
    taoistConcept: "为学日益，为道日损 — learning adds, the Dao subtracts",
    taoistSource: "《道德经》第四十八章",
    synthesis:
      "Heidegger's 'forgetting of Being' is structurally identical to the Buddhist 'ignorance' (avidyā): the primordial condition of being lost in beings (phenomena) while oblivious to Being itself (the nature of reality).",
  },
  {
    westernConcept: "Nihilism overcome through nihilism itself",
    westernThinker: "Nishitani",
    buddhistConcept: "空空 — the emptiness of emptiness",
    buddhistSource: "《大般若波罗蜜多经》：空空者，谓空一切法空",
    taoistConcept: "无无 — not not-being, but the negation of negation",
    taoistSource: "《庄子·齐物论》：有有也者，有无也者，有未始有无也者",
    synthesis:
      "Nishitani's 'overcoming nihilism by passing through nihilism' is the Mahayana 'emptiness of emptiness' translated into philosophical language: the negation of negation that opens into absolute affirmation.",
  },
  {
    westernConcept: "Will to Power as creative response to nihilism",
    westernThinker: "Nietzsche",
    buddhistConcept: "Bodhicitta — the awakened intention to benefit all beings",
    buddhistSource: "《入菩萨行论》：众生皆具如来藏，皆堪成佛",
    taoistConcept: "无为而无不为 — doing nothing, nothing is left undone",
    taoistSource: "《道德经》第四十八章",
    synthesis:
      "Nietzsche's active nihilism (create your own values) and the bodhisattva path (spontaneous compassionate action) are both forms of creative engagement after the collapse of self-centered meaning — but the bodhisattva acts without an 'I' that needs to be affirmed.",
  },
]

// ============================================================================
// 五、知识库查询接口
// ============================================================================

export interface NihilismQueryResult {
  type: "thinker" | "nihilism_form" | "framework_step" | "concept_mapping"
  data: unknown
}

export const nihilism = {
  /** 获取某位思想家的完整档案 */
  thinker(id: string): ThinkerProfile | undefined {
    return THINKERS[id]
  },

  /** 获取所有思想家 */
  allThinkers(): ThinkerProfile[] {
    return Object.values(THINKERS)
  },

  /** 获取某种虚无主义形态的完整描述 */
  form(id: string): NihilismForm | undefined {
    return NIHILISM_FORMS[id]
  },

  /** 获取所有虚无主义形态 */
  allForms(): NihilismForm[] {
    return Object.values(NIHILISM_FORMS)
  },

  /** 获取对治框架 */
  framework(): PracticeFramework[] {
    return FRAMEWORK
  },

  /** 获取概念映射 */
  mappings(): ConceptMapping[] {
    return CONCEPT_MAPPINGS
  },

  /** 搜索：根据关键词在知识库中查找相关内容 */
  search(query: string): NihilismQueryResult[] {
    const q = query.toLowerCase()
    const results: NihilismQueryResult[] = []

    for (const thinker of Object.values(THINKERS)) {
      if (
        thinker.name.toLowerCase().includes(q) ||
        thinker.nameZh.includes(query) ||
        thinker.coreThesis.toLowerCase().includes(q) ||
        thinker.coreThesisZh.includes(query)
      ) {
        results.push({ type: "thinker", data: thinker })
      }
    }

    for (const form of Object.values(NIHILISM_FORMS)) {
      if (
        form.name.toLowerCase().includes(q) ||
        form.nameZh.includes(query) ||
        form.coreQuestion.toLowerCase().includes(q) ||
        form.symptom.toLowerCase().includes(q) ||
        form.symptomZh.includes(query)
      ) {
        results.push({ type: "nihilism_form", data: form })
      }
    }

    for (const step of FRAMEWORK) {
      if (
        step.step.toLowerCase().includes(q) ||
        step.stepZh.includes(query) ||
        step.description.toLowerCase().includes(q) ||
        step.descriptionZh.includes(query)
      ) {
        results.push({ type: "framework_step", data: step })
      }
    }

    for (const mapping of CONCEPT_MAPPINGS) {
      if (
        mapping.westernConcept.toLowerCase().includes(q) ||
        mapping.buddhistConcept.toLowerCase().includes(q) ||
        mapping.taoistConcept.toLowerCase().includes(q) ||
        mapping.synthesis.toLowerCase().includes(q)
      ) {
        results.push({ type: "concept_mapping", data: mapping })
      }
    }

    return results
  },
}
