import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: 'python or js?',
    answerA:'python',
    answerB: 'js',
    votesA: 9,
    votesB: 15
  },
]);

export default PollStore;