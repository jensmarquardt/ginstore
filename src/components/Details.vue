<template>
    <div class="details container">
        <h1 class="page-header">{{gin.title}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'details',
        data() {
            return {
                gin: ''
            }
        },
        methods: {
            fetchGin(id) {
                this.$http.get('/static/gins.json')
                    .then(function(response) {
                        response.body.forEach(function(element) {
                            if(element.id == id) {
                                this.gin = element;
                            }
                        }, this);
                    });
            }
        },
        created: function() {
            this.fetchGin(this.$route.params.id);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>