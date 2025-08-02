export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  // {
  //   year: "2024",
  //   conference: "NeurIPS",
  //   title: "Scalable Causal Discovery in High-Dimensional Time Series",
  //   authors: "Jane Smith, Sarah Johnson, Yue Zhang",
  //   paperUrl: "https://arxiv.org/abs/2409.15476",
  //   codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
  //   //bibtex: "https://arxiv.org/abs/2409.15476.bib",
  //   tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   award: "🏆 Best Paper Award",
  //   // if you have an image in public/images, you can use it like this:
  //   // imageUrl: "/images/publication-image.jpg"
  // },
  {
    year: "",
    conference: "",
    title: "R&B: Domain Regrouping and Data Mixture Balancing for Efficient Foundation Model Training",
    authors: "Albert Ge, Tzu-Heng Huang, John Cooper, Avi Trost, Ziyi Chu, Satya Sai Srinath Namburi GNVV, Ziyang Cai, Kendall Park, Nicholas Roberts, Frederic Sala",
    paperUrl: "https://arxiv.org/abs/2505.00358?",
    // codeUrl: "https://github.com/BatsResearch/bonito",
    tldr: "Reclustering data and reusing training gradients for data mixing.",
    imageUrl: "/rnb.png"
  },
  {
    year: "2024",
    conference: "ACL Findings",
    title: "Learning to Generate Instruction Tuning Datasets for Zero-Shot Task Adaptation",
    authors: "Nihal V. Nayak, Yiyang Nan, Avi Trost, Stephen H. Bach",
    paperUrl: "https://arxiv.org/abs/2402.18334",
    codeUrl: "https://github.com/BatsResearch/bonito",
    tldr: "Training a model to generate conditional synthetic data for task adaptation.",
    imageUrl: "/bonito.png"
  },
];
