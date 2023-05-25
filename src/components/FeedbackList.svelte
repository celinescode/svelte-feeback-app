<script>
  import {FeedbackStore} from '../stores'
  import FeedbackItem from "./FeedbackItem.svelte";
  import { fade, scale } from "svelte/transition";

</script>

{#each $FeedbackStore as fb}
  <div in:scale out:fade="{{duration: 500}}">
    <FeedbackItem item={fb} on:delete-feedback />
  </div>
{/each}
