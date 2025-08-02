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
    "Hi! I am a first year Computer Science PhD student at <a href='https://www.wisc.edu'>University of Wisconsin–Madison</a> working with <a href='https://tengyangxie.github.io/'>Tengyang Xie</a> and <a href='https://pages.cs.wisc.edu/~fredsala/'>Fred Sala</a>. As an undergraduate at <a href='https://www.brown.edu/'>Brown University</a>, I was fortunate to work with <a href='https://cs.brown.edu/people/sbach/'>Stephen Bach</a>." +
    "<br><br>" +
    "My research interests include reasoning, data-centric ML, and synthetic data. My recent emphasis has been on understanding the capabilities of RL post-training, and understanding the role that data plays. Feel free to reach out for a chat!",
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
