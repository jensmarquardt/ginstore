<template>
    <div class="gins container">
        <h1 class="page-header">Our Gins</h1>
        <div class="table-responsive">
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
                        <td><router-link v-bind:to="'/gin/'+gin.id">More</router-link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import Firebase from 'firebase'

    const firebaseApp = Firebase.initializeApp({
        databaseURL: "https://ginstore-2e92e.firebaseio.com",
    })
    const db = firebaseApp.database()

    export default {
        name: 'gins',
        data() {
            return {
            }
        },
        firebase: {
            gins: db.ref('gins')
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>