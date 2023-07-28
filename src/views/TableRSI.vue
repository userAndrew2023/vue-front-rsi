<template>
    <div class="box">
    
        <table class="rsi_table">
            <tr>
                <th>Coin pair</th>
                <th>M15</th>
                <th>H1</th>
                <th>D1</th>
                <th>Price</th>
                <th>Volume</th>
                <th>Percentage</th>
            </tr> <!--ряд с ячейками заголовков-->
            <tr @click="this.modal = true" class="trr" v-for="(item, name) in rsi" :key="item.m15">
                <td>{{name}}</td>
                <td>
                    <div :class="{'rsi_td': item.m15 >= 30 && item.m15 <= 70,
                                  'rsi_td_buy': item.m15 < 30,
                                  'rsi_td_sell': item.m15 > 70}">
                        {{ Math.round(item.m15 * 100) / 100 }}
                    </div>
                </td>
                <td>
                    <div :class="{'rsi_td': item.h1 >= 30 && item.h1 <= 70,
                                  'rsi_td_buy': item.h1 < 30,
                                  'rsi_td_sell': item.h1 > 70}">
                        {{ Math.round(item.h1 * 100) / 100 }}
                    </div>
                </td>
                <td>
                    <div :class="{'rsi_td': item.d1 >= 30 && item.d1 <= 70,
                                  'rsi_td_buy': item.d1 < 30,
                                  'rsi_td_sell': item.d1 > 70}">
                        {{ Math.round(item.d1 * 100) / 100 }}
                    </div>
                </td>
                <td>{{ item.price }}</td>
                <td>{{ item.volume }}</td>
                <td :class="{'up': item.percent >= 0,
                    'down': item.percent <= 0}">{{ item.percent }}%</td>
            </tr>
        </table>
    </div>
</template>

<script>


export default {
    mounted() {
        this.getRsi()
    },
    data() {
        return {
            rsi: [],
            modal: false
        }
    },
    methods: {
        getRsi() {
            fetch("http://127.0.0.1:5000/get").then(res => res.json()).then(json => {
                    this.rsi = json
            });
            setInterval(() => {
                fetch("http://127.0.0.1:5000/get").then(res => res.json()).then(json => {
                    this.rsi = json
                });
	}, 10000)
        },
        enteredQuantity(side, coin, quanity) {
            console.log(quanity, coin)
            fetch("http://127.0.0.1:5000/placeOrder", {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    symbol: coin,
                    quantity: quanity,
                    side: side
                })
            }).then(response => response.json()).then(json => {
                console.log(json)
            });
        }
    },
    components: {

    }
}

</script>

<style scoped>

.up {
    font-weight: 600;
    color: #004d00
}

.down {
    font-weight: 600;
    color: #cc0000
}

table {
    margin: auto;
}

td {
    text-align: center;
    vertical-align: middle;
    padding: 10px;
}

th {
    padding: 15px;
    background: #afdafc;
    padding-left: 40px;
    padding-right: 40px;
}

tr {
    background: #e3f3ff;
}

.rsi_td {
    border-radius: 10px;
    padding: 5px;
    background-color: #afdafc;
    color: black;
    transition: 0.4s;
}

.rsi_td_buy {
    border-radius: 10px;
    padding: 5px;
    background-color: #004d00;
    color: white;
    transition: 0.4s;
}

.rsi_td_sell {
    border-radius: 10px;
    padding: 5px;
    background-color: #cc0000;
    color: white;
    transition: 0.4s;
}

.box {
    font-size: 18px;
}

table {
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
}
/* required css to make rounded table (below) */
tr:first-child th:first-child {
  border-top-left-radius: 10px;
}
tr:first-child th:last-child {
  border-top-right-radius: 10px;
}
tr:last-child td:first-child {
  border-bottom-left-radius: 10px;
}
tr:last-child td:last-child {
  border-bottom-right-radius: 10px;
}

.inline_block {
    margin-right: 5px;
}
input {
    width: 100px;
}

</style>