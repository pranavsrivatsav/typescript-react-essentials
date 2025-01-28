/**
 * @file Defines the schema and type for a Tour object using Zod library.
 */

import { z } from "zod";

/**
 * Schema for a Tour object.
 *
 * @property {string} id - The unique identifier for the tour.
 * @property {string} name - The name of the tour.
 * @property {string} info - Information about the tour.
 * @property {string} image - URL of the tour image.
 * @property {string} price - The price of the tour.
 */
const TourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
});

/**
 * Type inferred from the TourSchema.
 */
type Tour = z.infer<typeof TourSchema>;

export { TourSchema, type Tour };
