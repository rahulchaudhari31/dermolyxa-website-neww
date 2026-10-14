// ─────────────────────────────────────────────────────────────
//  DERMOLYXA™ – Sample educational blog posts
//  General, educational content only. Not medical advice and not a
//  substitute for professional consultation. Imagery is illustrative.
// ─────────────────────────────────────────────────────────────
import { images } from './siteData';

export const blogCategories = ['All', 'Skin', 'Hair', 'Aesthetics', 'Education'];

export const posts = [
  {
    slug: 'gentle-introduction-to-skin-science',
    title: 'A Gentle Introduction to Skin Science',
    category: 'Skin',
    excerpt:
      'An approachable overview of how skin is structured and why understanding it matters for responsible skin care education.',
    image: images.explorer.skin,
    author: 'DERMOLYXA Editorial',
    dateLabel: '15 Jan 2026',
    readingTime: 5,
    featured: true,
    tags: ['Skin Science', 'Foundations'],
    body: [
      {
        type: 'p',
        text: 'Skin is often described as the largest organ of the body. For anyone studying skin care, a basic understanding of its structure provides useful context for everything that follows.',
      },
      { type: 'h2', text: 'A layered structure' },
      {
        type: 'p',
        text: 'Skin is commonly described in terms of layers, each with its own general characteristics. Learning this structure helps students understand why different care approaches are discussed in different ways.',
      },
      {
        type: 'ul',
        items: [
          'The outermost layer, often discussed in relation to barrier function.',
          'The middle layer, associated with structure and support.',
          'The deeper layer, associated with underlying tissues.',
        ],
      },
      { type: 'h2', text: 'Why foundations matter' },
      {
        type: 'p',
        text: 'Structured education begins with foundations. Understanding terminology and general concepts helps learners follow more advanced material with confidence later on.',
      },
      {
        type: 'quote',
        text: 'This article is educational only. It is not medical advice and does not describe treatments or outcomes.',
      },
      { type: 'h2', text: 'Where to go next' },
      {
        type: 'p',
        text: 'Learners often continue with skin care fundamentals and professional standards. Our institute pages describe the general shape of the proposed program levels.',
      },
    ],
  },
  {
    slug: 'the-hair-growth-cycle-explained',
    title: 'The Hair Growth Cycle, Explained Simply',
    category: 'Hair',
    excerpt:
      'A simple, educational look at the general phases of the hair growth cycle and why they are part of foundational hair science.',
    image: images.explorer.hair,
    author: 'DERMOLYXA Editorial',
    dateLabel: '09 Jan 2026',
    readingTime: 6,
    featured: false,
    tags: ['Hair Science', 'Foundations'],
    body: [
      {
        type: 'p',
        text: 'Hair science is a core part of professional education in aesthetics. A useful starting point is the general idea that hair grows in repeating cycles rather than continuously.',
      },
      { type: 'h2', text: 'Phases, in general terms' },
      {
        type: 'p',
        text: 'Educational material often describes the growth cycle as a sequence of phases. Terminology varies, but the general concept helps learners organise the topic.',
      },
      {
        type: 'ul',
        items: [
          'A growth phase, during which hair is actively forming.',
          'A transitional phase.',
          'A resting phase, after which the cycle may begin again.',
        ],
      },
      { type: 'h2', text: 'Why it is taught' },
      {
        type: 'p',
        text: 'Understanding general cycles provides context for how hair science topics connect within a structured curriculum.',
      },
      {
        type: 'quote',
        text: 'This article is educational only and is not intended as a diagnostic tool or medical advice.',
      },
    ],
  },
  {
    slug: 'what-aesthetic-science-covers',
    title: 'What Aesthetic Science Covers',
    category: 'Aesthetics',
    excerpt:
      'A broad, non-technical overview of how aesthetic science connects biology, chemistry and technology in professional education.',
    image: images.explorer.science,
    author: 'DERMOLYXA Editorial',
    dateLabel: '02 Jan 2026',
    readingTime: 5,
    featured: false,
    tags: ['Aesthetic Science', 'Overview'],
    body: [
      {
        type: 'p',
        text: 'Aesthetic science is a broad field. At a general level, it draws on several disciplines to inform professional practice and education.',
      },
      { type: 'h2', text: 'Connected disciplines' },
      {
        type: 'ul',
        items: [
          'Biology, for understanding general structure and function.',
          'Chemistry, for understanding how formulations and materials are described.',
          'Technology, for understanding tools and methods discussed in the field.',
        ],
      },
      { type: 'h2', text: 'A responsible lens' },
      {
        type: 'p',
        text: 'Education in this area emphasises clarity and responsibility. General understanding is presented in a way that avoids overstating what any single approach can do.',
      },
      {
        type: 'quote',
        text: 'This article is educational only. No outcome, result or benefit is implied or guaranteed.',
      },
    ],
  },
  {
    slug: 'why-structured-learning-matters',
    title: 'Why Structured Learning Matters in Aesthetics',
    category: 'Education',
    excerpt:
      'How a level-based approach can help learners build understanding step by step, from foundational concepts to deeper areas.',
    image: images.divisions.institute,
    author: 'DERMOLYXA Editorial',
    dateLabel: '24 Dec 2025',
    readingTime: 4,
    featured: false,
    tags: ['Education', 'Learning'],
    body: [
      {
        type: 'p',
        text: 'Aesthetics is a broad subject, and approaching it in a clear order generally helps. Structured learning arranges topics so that each builds on the last.',
      },
      { type: 'h2', text: 'Levels of learning' },
      {
        type: 'p',
        text: 'Our proposed institute programs are organised across levels, from focused certificate courses to in-depth fellowships. The idea is to make the pathway visible.',
      },
      {
        type: 'ul',
        items: [
          'Foundational concepts first.',
          'Applied understanding next.',
          'Specialisation at higher levels.',
        ],
      },
      { type: 'h2', text: 'A practical mindset' },
      {
        type: 'p',
        text: 'Skill-based education combines understanding with practice, so learners can connect ideas to professional scenarios.',
      },
    ],
  },
  {
    slug: 'everyday-skin-care-habits',
    title: 'Everyday Skin Care Habits: General Guidance',
    category: 'Skin',
    excerpt:
      'General, non-prescriptive habits often discussed in educational settings to support overall skin comfort and routine.',
    image: images.hero.primary,
    author: 'DERMOLYXA Editorial',
    dateLabel: '16 Dec 2025',
    readingTime: 4,
    featured: false,
    tags: ['Skin Care', 'Habits'],
    body: [
      {
        type: 'p',
        text: 'Skin care routines are personal, and general guidance differs from individual advice. The habits below are commonly discussed in educational material.',
      },
      { type: 'h2', text: 'Broadly discussed habits' },
      {
        type: 'ul',
        items: [
          'Keeping routines simple and consistent.',
          'Paying attention to comfort and irritation.',
          'Following product instructions as labelled.',
        ],
      },
      { type: 'h2', text: 'When to seek advice' },
      {
        type: 'p',
        text: 'For any concern, individuals should consult a qualified professional. Educational content is not a substitute for that.',
      },
      {
        type: 'quote',
        text: 'This article is educational only and is not medical advice.',
      },
    ],
  },
  {
    slug: 'general-considerations-for-scalp-health',
    title: 'General Considerations for Scalp Health',
    category: 'Hair',
    excerpt:
      'An educational overview of why scalp health is often treated as a starting point in hair science learning.',
    image: images.divisions.clinic,
    author: 'DERMOLYXA Editorial',
    dateLabel: '08 Dec 2025',
    readingTime: 5,
    featured: false,
    tags: ['Hair Science', 'Scalp'],
    body: [
      {
        type: 'p',
        text: 'Within hair science, the scalp is often described as part of the bigger picture. Educational material frequently begins with general concepts rather than techniques.',
      },
      { type: 'h2', text: 'Why it is a starting point' },
      {
        type: 'p',
        text: 'Framing hair topics alongside general scalp considerations helps learners organise the subject and follow more advanced material later.',
      },
      { type: 'h2', text: 'Educational framing' },
      {
        type: 'p',
        text: 'General understanding is presented without claims about results. Individual situations vary and are assessed through professional consultation.',
      },
    ],
  },
];

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug) ?? null;
}

export function getFeaturedPost() {
  return posts.find((post) => post.featured) ?? posts[0];
}

export function getRelatedPosts(slug, limit = 3) {
  const current = getPostBySlug(slug);
  if (!current) return [];

  const sameCategory = posts.filter(
    (post) => post.slug !== slug && post.category === current.category,
  );
  const others = posts.filter(
    (post) => post.slug !== slug && post.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, limit);
}
