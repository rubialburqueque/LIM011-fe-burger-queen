<template>
<div id="tabPosts" class="posts-tab">
    <div>
        <b-card no-body>
            <b-tabs pills card vertical>
            <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
            <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
            <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
            </b-tabs>
        </b-card>
    </div>
    <ul class="posts-sidebar">
        <li
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:class="{ selected: post === selectedPost }"
                v-on:click="selectedPost = post"
        >
        {{ post.title }}
        </li>
    </ul>
    <div class="selected-post-container">
        <div 
        v-if="selectedPost"
        class="selected-post"
        >
            <h3>{{ selectedPost.title }}</h3>
        <div v-html="selectedPost.content"></div>
    </div>
    <strong v-else>
    Click on a blog title to the left to view it.
    </strong>
    </div>
</div>
</template>

<script>
export default {
    // component: tabPost,
    // data() {
    // currentTab: 'Posts'
    // tabs: ['Posts', 'Archive']
    // },
    computed: {
    currentTabComponent() {
    return 'tab-' + this.currentTab.toLowerCase()
    }}
}
</script>
