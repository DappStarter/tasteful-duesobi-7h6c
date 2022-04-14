require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remain modify grace opinion sudden spirit'; 
let testAccounts = [
"0x02fddfe2f278600844915fe378efd8246cc46c3477b79e57de933d9fc0b6e995",
"0x27646f91608382788813bee660b25b52969620257bff27de5874c6b1b787d549",
"0xf20d6606287a90219edd712efd4bad82d65451cc3cb221b5406107c46841b934",
"0x52501ed7066b116da86aa36e06930f22042596455021c1eaec6b347c4997efc6",
"0xe36e505165fa35886fce1cd32c4fdd50bfe59dd00eedf2ebff362ed3a1ed38ec",
"0x6a891a3b39530eab0c7392faa62237b751979f45faff2f96db09d73304883185",
"0xef794a456687c06a1162a3afaed73d6b7e84c83e639c1ae51b8049aaffbc9022",
"0x38b8d2a7869ea5830e4e53f349bb52b29154ff55d1af9f21670b25378b980006",
"0x425bee2ecfcccad494afe8e0f19aabde32e711b7fb60553f0d8be3e90344c73e",
"0x7d2c02d95e0cedbe3f7e383424439ee13c2c905d5aea8e2e7d580cfa03d4a7f0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

