<template lang="pug">
#teachingExcellence.card
  .card-header #[h1 教卓計畫]
  .card-body
    TeachingExcellenceCreate
    TeachingExcellenceList
    TeachingExcellenceEdit
</template>
<script>
import TeachingExcellenceCreate from './TeachingExcellenceCreate'
import TeachingExcellenceList from './TeachingExcellenceList'
import TeachingExcellenceEdit from './TeachingExcellenceEdit'

export default {
  components: {
    TeachingExcellenceCreate,
    TeachingExcellenceList,
    TeachingExcellenceEdit
  }
}
</script>
