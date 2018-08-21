<template>
    <div class="main_content">
        <div class="panel">
            <div class="container">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus odio dolor, sit amet consequat ante bibendum feugiat. Donec ultricies tincidunt urna. Quisque pulvinar mattis sapien, id fermentum urna accumsan porta. Nulla porta lobortis efficitur. Duis viverra mattis luctus.</p>
                <SocialList :socials="personalSocials" alignment="left" />
            </div>
        </div>
    </div>
</template>

<script>

    import SocialList from '../atoms/SocialList';
    import { personalSocials } from '../../data/socials.js';
                
    export default {
        name: 'Sample',
        metaInfo: {
            title: 'Sample',
        },
        components: {
            SocialList
        },
        data () {
            return {
                personalSocials
            }
        }
    }

</script>

<style scoped lang="scss">

</style>