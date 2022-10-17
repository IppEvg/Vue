<template>
    <div class="globalWindow" v-if="isClick">
        <div class="cub"></div>
        <div class="window">

            <router-link to="redact" class="router" :idx="idx" :name="name" v-on:delForm="changeMeth"> <span
                    class='menu-in'><span class='menu-in'>&#9998;</span>
                </span>
                Редактировать
            </router-link>
            <a @click="onDelete"> <span class="menu-in">&#10008;</span> Удалить </a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ModalWindow',
    data() {
        return {
            isClick: false
        }
    },
    props: {
        name: Object,
        idx: Number
    },
    methods: {
        onShow(name) {
            if (this.name == name) {
                this.isClick = !this.isClick;
            }
        },
        onDelete() {
            this.$store.commit('delStr', this.idx);
            this.$store.getters.getPaymentsList;
        },
        changeMeth() {
            this.isClick = !this.isClick
        }

    },

    mounted() {
        this.$modal.EventBus.$on('show', this.onShow);
        this.$modal.EventBus.$on('hide', this.onHide);
    }
}

</script>



<style>
.window {
    position: absolute;
    width: 150px;
    height: 60px;
    top: 30px;
    left: -100px;
    background-color: rgba(196, 190, 190, 0.979);
    z-index: 2;
    text-align: start;
}

.menu-in {
    display: inline-block;
    position: relative;
    width: 25px;
    height: 25px;
    padding: 2px;
    box-sizing: border-box;
    cursor: pointer;
    color: blue;

}

.exit {
    position: absolute;
    padding: 2px;
    top: 3px;
    right: 3px;
}


.router {
    color: #2c3e50;
}

.cub {
    background-color: rgba(196, 190, 190, 0.911);
    border: none;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    left: 7px;
    position: absolute;
}

a {
    text-decoration: none;
}
</style>