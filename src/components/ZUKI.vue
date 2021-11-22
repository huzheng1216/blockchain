<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div>
            <button v-on:click="link_wallet">链接钱包</button>
            <span>钱包地址：{{ accounts }}</span>
        </div>
        <div>
            <button v-on:click="check_supply">查询资金池</button>
            <span>最大供应：{{ maxSupply }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    created() {
    },
    mounted() {
        if (typeof window.ethereum.isMetaMask === 'undefined') {
            alert('请安装 MetaMask！')
        }
    },
    data() {
        return {
            accounts: undefined,
            abi: '',
            maxSupply: 0,
        }
    },
    methods: {
        link_wallet() {
            let self = this
            window.ethereum.request({method: 'eth_requestAccounts'}).catch(function (reason) {
                alert(JSON.stringify(reason))
            }).then(function (accounts) {
                self.accounts = accounts[0]
                console.log('account', accounts)
            })
        },
        check_supply() {
            let self = this
            window.ethereum.request({method: 'eth_requestAccounts'}).catch(function (reason) {
                alert(JSON.stringify(reason))
            }).then(function (accounts) {
                self.accounts = accounts[0]
                console.log('account', accounts)
            })
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
