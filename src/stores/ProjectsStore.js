import { writable } from "svelte/store";

const ProjectsStore = writable([{}]);

export default {
  ProjectsStore
};