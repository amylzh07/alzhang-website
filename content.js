export const siteConfig = {
  name: "Your Name",
  tagline: "Bioengineering PhD Student",
  institution: "MIT",
  email: "yourname@mit.edu",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourhandle",
  scholar: "https://scholar.google.com/",
  bio: `I'm a second-year PhD student in bioengineering at MIT, working at the intersection
  of synthetic biology and machine learning. I'm interested in how we can use computational
  tools to design biological systems more reliably.`,
};

export const blogPosts = [
  {
    id: "crispri-notes",
    date: "2024-03-15",
    dateDisplay: "Mar 2024",
    title: "Lab notes: troubleshooting CRISPRi knockdown efficiency",
    excerpt:
      "After three weeks of inconsistent results, I finally figured out why my CRISPRi experiments weren't working. Turns out guide RNA secondary structure matters more than I thought.",
    tags: ["CRISPR", "lab notes", "synthetic biology"],
    content: `
## The problem

For the past few weeks, I've been getting highly variable knockdown efficiency in my CRISPRi experiments — anywhere from 20% to 85% depending on the day. The protocol hadn't changed. The cells looked fine. What was going on?

After a lot of troubleshooting and some helpful conversations with labmates, I traced the issue to guide RNA secondary structure.

## Guide RNA secondary structure

It turns out that when you design a guide RNA, the sequence can fold back on itself and form hairpin structures. If those hairpins are stable enough, they can interfere with the guide RNA loading into dCas9 or prevent it from properly interrogating the DNA.

I was using an online tool to check for off-target effects, but I wasn't checking secondary structure at all. Once I ran my guide sequences through mFold, I found that three of my guides had deltaG values around -8 kcal/mol — enough to cause problems.

## The fix

Redesigning those guides to avoid stable secondary structures brought my knockdown efficiency up to a consistent 75–90%. The key design rules I now follow:

- Avoid sequences with more than 4 consecutive G's (G-quadruplexes are bad)
- Check predicted secondary structure with mFold; aim for deltaG > -3 kcal/mol
- Avoid palindromic sequences
- Test multiple guides per target and pick the best performer

## Takeaway

This was a painful lesson but a useful one. Always check secondary structure when designing guide RNAs — it's a step I now do automatically before ordering oligos.
    `,
  },
  {
    id: "ml-biology-reading",
    date: "2024-02-08",
    dateDisplay: "Feb 2024",
    title: "Reading list: machine learning for biology",
    excerpt:
      "A curated list of papers I've found genuinely useful for understanding how ML is being applied in biological research, with brief notes on each.",
    tags: ["machine learning", "reading list", "resources"],
    content: `
## Why this list

There's a lot of ML-in-biology content out there, and most of it is either too introductory or assumes you already know both fields deeply. This list is what I'd give to a bioengineer who knows their biology but wants to get up to speed on the ML side.

## Foundational papers

**Attention is All You Need** (Vaswani et al., 2017) — The transformer paper. You need to understand this to understand AlphaFold, ESM, and most modern sequence models.

**AlphaFold2** (Jumper et al., 2021) — Read the methods section carefully. The attention mechanisms applied to pairwise residue representations are beautiful.

**ESM-2** (Lin et al., 2023) — Protein language models. The analogy between protein sequences and natural language is surprisingly useful.

## Applications I find interesting

**Perturb-seq analysis** — Using ML to interpret high-dimensional single-cell data from CRISPR screens. The Norman et al. 2019 paper is a good starting point.

**Regulatory sequence modeling** — Predicting gene expression from sequence. Enformer is the current state of the art.

## What I'm reading next

Currently working through the Geneformer paper, which finetunes a transformer trained on single-cell data for various downstream tasks. The pretraining setup is clever.
    `,
  },
  {
    id: "first-rotation",
    date: "2023-12-01",
    dateDisplay: "Dec 2023",
    title: "Reflections on my first PhD rotation",
    excerpt:
      "What I learned spending three months in a wet lab after two years of mostly computational work. More humbling than expected.",
    tags: ["grad school", "reflection"],
    content: `
## Starting over (sort of)

I came into my PhD with a background in computational biology. I could write Python, I understood the math behind most ML algorithms, and I'd published one paper. What I couldn't do was pipette accurately or keep a cell line alive.

My first rotation was in a wet lab, and it was humbling in ways I didn't anticipate.

## What I underestimated

**Tacit knowledge.** So much of experimental biology is in the hands. How hard to tap the tube. Whether the cells look stressed before you even run an assay. How to know if a Western blot is going wrong from how the running buffer smells. None of this is written down anywhere.

**Time.** In computational work, experiments are fast and cheap. You can test 100 ideas in a day. In the wet lab, a single experiment can take a week, and if something goes wrong on day 6, you start over.

**Troubleshooting culture.** Wet lab scientists are incredible troubleshooters. They have to be. I learned more about scientific reasoning in three months of failed experiments than in two years of computational work.

## What I'd tell myself

Don't be embarrassed to ask basic questions. Everyone was a beginner once. And keep better notes — you'll thank yourself later.
    `,
  },
];

export const cvData = {
  education: [
    {
      year: "2023–",
      title: "PhD, Bioengineering",
      subtitle: "Massachusetts Institute of Technology",
      detail: "Advisor: Prof. Jane Smith. Focus: synthetic biology and machine learning.",
    },
    {
      year: "2019–23",
      title: "B.S., Biomedical Engineering",
      subtitle: "Johns Hopkins University",
      detail: "Graduated with honors. Thesis on CRISPR screen analysis pipelines.",
    },
  ],
  research: [
    {
      year: "2023–",
      title: "Graduate Researcher",
      subtitle: "Smith Lab, MIT",
      detail: "Developing ML models to predict guide RNA efficiency for CRISPRi screens.",
    },
    {
      year: "2021–23",
      title: "Undergraduate Researcher",
      subtitle: "Jones Lab, Johns Hopkins",
      detail: "Built computational pipeline for analyzing genome-wide CRISPR screens in yeast.",
    },
    {
      year: "Sum. 2022",
      title: "Research Intern",
      subtitle: "Genentech, South San Francisco",
      detail: "Worked on target identification using single-cell RNA-seq data.",
    },
  ],
  publications: [
    {
      year: "2024",
      title: "Predicting CRISPRi guide RNA efficiency using sequence features",
      subtitle: "Your Name, Collaborator A, Collaborator B, Jane Smith",
      detail: "bioRxiv preprint. In revision at Nature Methods.",
    },
    {
      year: "2023",
      title: "A scalable pipeline for genome-wide CRISPR screen analysis",
      subtitle: "Your Name, Advisor Name",
      detail: "Journal of Computational Biology, 30(4), 412–428.",
    },
  ],
  awards: [
    {
      year: "2023",
      title: "NSF Graduate Research Fellowship",
      subtitle: "",
      detail: "",
    },
    {
      year: "2023",
      title: "MIT School of Engineering Fellowship",
      subtitle: "",
      detail: "",
    },
    {
      year: "2022",
      title: "Goldwater Scholarship",
      subtitle: "",
      detail: "",
    },
  ],
  skills: [
    {
      year: "Wet lab",
      title: "Cell culture, CRISPRi/a, flow cytometry, cloning, Western blotting, qPCR",
      subtitle: "",
      detail: "",
    },
    {
      year: "Computation",
      title: "Python (PyTorch, scikit-learn, pandas), R, Nextflow, Linux/bash",
      subtitle: "",
      detail: "",
    },
  ],
};

export const projects = [
  {
    id: "crispr-ml",
    title: "CRISPRi guide prediction",
    subtitle: "PhD thesis project",
    status: "active",
    statusLabel: "Active",
    description:
      "Training sequence-based transformer models to predict CRISPRi knockdown efficiency from guide RNA and target site features. Goal: reduce the number of guides researchers need to test experimentally.",
    tags: ["deep learning", "CRISPR", "synthetic biology"],
    links: [
      { label: "GitHub", url: "https://github.com/yourusername/crispr-pred" },
      { label: "Preprint", url: "#" },
    ],
  },
  {
    id: "perturb-analysis",
    title: "Perturbation screen analysis toolkit",
    subtitle: "Collaborative project with the Broad Institute",
    status: "active",
    statusLabel: "Active",
    description:
      "A Python package for analyzing high-dimensional Perturb-seq datasets. Implements several normalization strategies and downstream analysis workflows. Used by 3 labs so far.",
    tags: ["single-cell", "genomics", "open source"],
    links: [
      { label: "GitHub", url: "#" },
      { label: "Docs", url: "#" },
    ],
  },
  {
    id: "biomarker-review",
    title: "Synthetic biology biosensors: a review",
    subtitle: "Independent writing project",
    status: "ongoing",
    statusLabel: "Writing",
    description:
      "Working on a review article synthesizing recent advances in engineered genetic biosensors, with focus on medical diagnostics applications. Expected submission mid-2024.",
    tags: ["synthetic biology", "review", "writing"],
    links: [],
  },
  {
    id: "jhmi-pipeline",
    title: "CRISPR screen analysis pipeline",
    subtitle: "Undergraduate thesis",
    status: "past",
    statusLabel: "Published",
    description:
      "Genome-wide CRISPR screen analysis pipeline built on Nextflow, with integrated quality control and visualization. Published in J. Comp. Biology 2023.",
    tags: ["bioinformatics", "Nextflow", "CRISPR"],
    links: [
      { label: "Paper", url: "#" },
      { label: "GitHub", url: "#" },
    ],
  },
];
