<template>
    <div class="gins container">
        <h1 class="page-header">Manage Gins</h1>
        <table class="table table-striped" valign="center">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Alcohol</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="gin in gins">
                    <td>{{gin.title}}</td>
                    <td>{{gin.country}}</td>
                    <td>{{gin.alcohol}} % Vol</td>
                    <td><router-link class="btn btn-default" v-bind:to="'/'">View</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'gins',
        data() {
            return {
                gins: []
            }
        },
        methods: {
            fetchGins() {
                this.$http.get('/static/gins.json')
                    .then(function(response) {
                       this.gins = response.body;
                    });
            }
        },
        created: function() {
            this.fetchGins();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>