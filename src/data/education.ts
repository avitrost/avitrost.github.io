export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  advisor_past?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2024—Present",
    institution: "University of Wisconsin—Madison",
    degree: "Ph.D. in Computer Science",
    advisor: "Prof. Fred Sala, Prof. Tengyang Xie",
  },
  {
    year: "2020—2024",
    institution: "Brown University",
    degree: "Sc.B. in Mathematics-Computer Science",
    advisor_past: "Prof. Stephen Bach",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
