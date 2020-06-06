require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remember social include kiwi sunset spring'; 
let testAccounts = [
"0xa758d9127ecc507f4fa471dbd74efcb87a6ea89d4f544098e1dc47cf820b0269",
"0x334ae11acd9f75b25246c107ca322a067e6c4611825cd443fd80e18ba3643f60",
"0x5d2d2f16c6785aa49b76b55dde619f5551b173ee2c6dcf096c168759b0c099af",
"0x3695b6ceff154d5ab1bdbd7cfb3057a47c2e65d215fe287bed81ec4f17e4d962",
"0x8a195ca758d2371f8d822efc61171fe3628be70e9cb440017cb8b43490ffdba9",
"0xaec4b26fed0f29306afe72a22bce09b44563a4562f6122c9d10f427af1ea2195",
"0x26d215eb5a097ed08882ee24d1737626cec9efb05579e84af617880c6f95ed0b",
"0x49b51898609e1bb20a3dd21e9f7e01a532efc0a9e9f2ab7cc0e5d57d4284a7e0",
"0xa5886096d7e4737a965c12daa21504a630e8181157d4a89dfa2bdebad6deb308",
"0xd227e6a986c2d7f08bc75f94e1d444c94805d699643f18d567f36630a7d29af7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
