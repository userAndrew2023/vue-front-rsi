<template>
    <div>
        <div v-for="(item, index) in deals" :key="item">
            <div class="item_deal">
                <p>{{ item }}</p>
                <button @click="close_order(index)">Закрыть сделку</button>
            </div>
        </div>
    </div>
</template>


<script>

export default {

    
    beforeCreate() {
        
        if (this.$cookies.get("username") == null) {
          window.location.href = "/login/"
        }
    },
    data() {
        return {
            deals: []
        }
    },
    mounted() {
        fetch("http://89.178.108.32:5000/deals").then(response => response.json()).then(json => {
            this.deals = json
        })
    },
    methods: {
        close_order(index) {
            delete this.deals[index]
            fetch("http://89.178.108.32/dealsRemove/" + index).then(response => response.json()).then(json => {
                this.deals = json
            })
        }
    }
}

</script>

<style scoped>

.item_deal {
    background: #e3f3ff;
    margin: 10px;
    padding: 10px;
    margin-left: 100px;
    margin-right: 100px;
    border-radius: 10px;
}

.rsi_td_buy {
    border-radius: 10px;
    background-color: #004d00;
    color: white;
    padding: 5px;
    text-align: center;
    vertical-align: middle;
    width: 5%;
    margin-bottom: 5px;
    transition: 0.4s;
}

.rsi_td_sell {
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 5px;
    width: 5%;
    text-align: center;
    vertical-align: middle;
    background-color: #cc0000;
    color: white;
    transition: 0.4s;
}

</style>
