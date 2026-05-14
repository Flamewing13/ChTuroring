export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export interface Topic {
  id: string
  title: { en: string; sk: string }
  description: { en: string; sk: string }
  difficulty: Difficulty
  videoId?: string
}

export const mathematicsTopics: Topic[] = [
  {
    id: 'functions',
    title: { en: 'Functions', sk: 'Funkcie' },
    description: {
      en: 'Understand function types, domains, ranges, and graphs. Master linear, quadratic, exponential, logarithmic, and trigonometric functions with transformations and compositions.',
      sk: 'Pochopte typy funkcií, definičné obory, obory hodnôt a grafy. Zvládnite lineárne, kvadratické, exponenciálne, logaritmické a trigonometrické funkcie vrátane transformácií a kompozícií.',
    },
    difficulty: 'beginner',
  },
  {
    id: 'derivatives',
    title: { en: 'Derivatives', sk: 'Derivácie' },
    description: {
      en: 'Differentiation from first principles through chain, product, and quotient rules. Apply derivatives to optimization problems, curve sketching, and related rates.',
      sk: 'Diferenciácia od základných princípov cez reťazové pravidlo, pravidlo súčinu a podielu. Derivácie aplikujte na optimalizačné úlohy, skicovanie kriviek a súvisiace rýchlosti.',
    },
    difficulty: 'intermediate',
  },
  {
    id: 'integrals',
    title: { en: 'Integrals', sk: 'Integrály' },
    description: {
      en: 'From Riemann sums to the Fundamental Theorem of Calculus. Integration by substitution, parts, and partial fractions. Compute areas, volumes, and arc lengths.',
      sk: 'Od Riemannových súm po Základnú vetu matematickej analýzy. Integrácia substitúciou, per partes a parciálnymi zlomkami. Výpočet plôch, objemov a dĺžok kriviek.',
    },
    difficulty: 'intermediate',
  },
  {
    id: 'matrices',
    title: { en: 'Matrices', sk: 'Matice' },
    description: {
      en: 'Matrix operations, determinants, inverse matrices, and Gaussian elimination. Solve systems of linear equations and explore eigenvalues and linear transformations.',
      sk: 'Operácie s maticami, determinanty, inverzné matice a Gaussova eliminácia. Riešenie sústav lineárnych rovníc, vlastné čísla a lineárne transformácie.',
    },
    difficulty: 'intermediate',
  },
  {
    id: 'complex-numbers',
    title: { en: 'Complex Numbers', sk: 'Komplexné čísla' },
    description: {
      en: "Navigate the complex plane, algebraic and polar forms, and complex arithmetic. Apply De Moivre's theorem and find roots of complex numbers and polynomials.",
      sk: 'Orientujte sa v komplexnej rovine, algebraickom a polárnom tvare a aritmetike komplexných čísel. Aplikujte De Moivreovu vetu a hľadajte korene komplexných čísel a polynómov.',
    },
    difficulty: 'advanced',
  },
]

export const physicsTopics: Topic[] = [
  {
    id: 'mechanics',
    title: { en: 'Mechanics', sk: 'Mechanika' },
    description: {
      en: "Newton's laws, kinematics in 1D and 2D, work, energy, and momentum conservation. Circular motion, rotational dynamics, and simple harmonic oscillators.",
      sk: 'Newtonove pohybové zákony, kinematika v 1D a 2D, práca, energia a zachovanie hybnosti. Kruhový pohyb, rotačná dynamika a harmonický oscilátor.',
    },
    difficulty: 'beginner',
  },
  {
    id: 'thermodynamics',
    title: { en: 'Thermodynamics', sk: 'Termodynamika' },
    description: {
      en: 'Temperature, heat transfer, and the laws of thermodynamics. Ideal gas behavior, thermodynamic cycles, entropy, and the efficiency of heat engines.',
      sk: 'Teplota, prenos tepla a termodynamické zákony. Správanie ideálneho plynu, termodynamické cykly, entropia a účinnosť tepelných strojov.',
    },
    difficulty: 'intermediate',
  },
  {
    id: 'electricity',
    title: { en: 'Electricity & Magnetism', sk: 'Elektrina a Magnetizmus' },
    description: {
      en: "Electric fields and potentials, circuits, Ohm's law, capacitors, and inductors. Magnetic fields, electromagnetic induction, and an introduction to Maxwell's equations.",
      sk: 'Elektrické polia a potenciály, obvody, Ohmov zákon, kondenzátory a cievky. Magnetické polia, elektromagnetická indukcia a úvod do Maxwellových rovníc.',
    },
    difficulty: 'intermediate',
  },
  {
    id: 'nuclear-physics',
    title: { en: 'Nuclear Physics', sk: 'Jadrová Fyzika' },
    description: {
      en: 'Atomic structure, radioactive decay, nuclear reactions, fission and fusion. Mass-energy equivalence and real-world applications in energy production and medicine.',
      sk: 'Štruktúra atómu, rádioaktívny rozpad, jadrové reakcie, štiepenie a fúzia. Ekvivalencia hmotnosti a energie a aplikácie v energetike a medicíne.',
    },
    difficulty: 'advanced',
  },
  {
    id: 'optics',
    title: { en: 'Optics', sk: 'Optika' },
    description: {
      en: "Reflection, refraction, Snell's law, lenses, and mirrors. Wave optics: interference, diffraction, and polarization. Practical optical instruments and applications.",
      sk: 'Odraz, lom, Snellov zákon, šošovky a zrkadlá. Vlnová optika: interferencia, difrakcia a polarizácia. Praktické optické prístroje a ich aplikácie.',
    },
    difficulty: 'intermediate',
  },
]

export const otherTopics: Topic[] = [
  {
    id: 'chemistry',
    title: { en: 'Chemistry', sk: 'Chémia' },
    description: {
      en: 'Stoichiometry, the periodic table, chemical bonding, reaction types, and solution chemistry. Build a rigorous foundation for university chemistry or related disciplines.',
      sk: 'Stechiometria, periodická tabuľka, chemické väzby, typy reakcií a chémia roztokov. Pevný základ pre vysokoškolskú chémiu alebo príbuzné odbory.',
    },
    difficulty: 'beginner',
  },
  {
    id: 'programming',
    title: { en: 'Programming', sk: 'Programovanie' },
    description: {
      en: 'Algorithmic thinking, data structures, and problem decomposition. Introductory Python or C++. Learn to approach coding tasks confidently and systematically.',
      sk: 'Algoritmické myslenie, dátové štruktúry a dekompozícia problémov. Úvodný Python alebo C++. Naučte sa pristupovať k programovacím úlohám sebavedome a systematicky.',
    },
    difficulty: 'intermediate',
  },
  {
    id: 'study-techniques',
    title: { en: 'Study Techniques', sk: 'Techniky Štúdia' },
    description: {
      en: 'Evidence-based learning: spaced repetition, active recall, interleaved practice, and the Pomodoro technique. Build habits that multiply your study efficiency and retention.',
      sk: 'Vedecky overené učenie: priestorové opakovanie, aktívne vybavovanie, prelínanie a technika Pomodoro. Budujte návyky, ktoré znásobujú efektivitu a pamäť.',
    },
    difficulty: 'beginner',
  },
]
