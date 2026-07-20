import { eventsEntertainmentServices } from "./events-entertainment";
import { photographyMediaServices } from "./photography-media";
import { privateServices } from "./private-services";
import { transportationRentalServices } from "./transportation-rentals";

export const serviceProducts = [
  ...transportationRentalServices,
  ...photographyMediaServices,
  ...privateServices,
  ...eventsEntertainmentServices,
] as const;

export type ServiceProductId = (typeof serviceProducts)[number]["id"];
