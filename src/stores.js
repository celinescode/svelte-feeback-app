import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "some random text",
  },
  {
    id: 2,
    rating: 6,
    text: "some random text",
  },
  {
    id: 3,
    rating: 8,
    text: "some random text",
  },
]);
