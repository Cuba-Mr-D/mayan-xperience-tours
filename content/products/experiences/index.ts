import { adventureExperiences } from "./adventure";
import { cenoteExperiences } from "./cenotes";
import { caribbeanIslandExperiences } from "./caribbean-islands";
import { mayanRuinsCultureExperiences } from "./mayan-ruins-culture";
import { themeParkExperiences } from "./theme-parks";

export const experienceProducts = [
  ...caribbeanIslandExperiences,
  ...mayanRuinsCultureExperiences,
  ...cenoteExperiences,
  ...adventureExperiences,
  ...themeParkExperiences,
] as const;

export type ExperienceProductId = (typeof experienceProducts)[number]["id"];
