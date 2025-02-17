export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Avi Trost",
  title: "Ph.D. Student",
  institution: "University of Wisconsin—Madison",
  // Note that links work in the description
  description:
    "I'm a final-year <a href='https://www.stanford.edu'>PhD candidate</a> working at the intersection of causal inference and machine learning. My research focuses on developing robust, interpretable systems that can reason about cause and effect in complex environments.",
  email: "astrost@wisc.edu",
  imageUrl:
    "/image_from_ios.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=exZPwQoAAAAJ",
  githubUsername: "avitrost",
  linkedinUsername: "avi-trost",
  twitterUsername: "atrost3122",
  blogUrl: "https://",
  cvUrl: "https://drive.google.com/file/d/1fBxzBm31o42p-TsWq24rZpmkUdH3Q-eb/view?usp=sharing",
  institutionUrl: "https://www.wisc.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
