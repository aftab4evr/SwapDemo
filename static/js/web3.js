var w_address = '';
const CONTRACT_ADDRESS = "0xEEef554ca1318652B902C5D4140e1960619dB662"
const ADMIN_WALLET = '0x1E5E3f3E2cF8c542b64728c6180789062b0d85E9';
var is_wallet_connected = false;
const contractABI = [
    {
        "constant": true,
        "inputs": [

        ],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [

        ],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [

        ],
        "name": "getController",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [

        ],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_newController",
                "type": "address"
            }
        ],
        "name": "changeController",
        "outputs": [

        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_unlockTime",
                "type": "uint256"
            }
        ],
        "name": "changeUnlockTime",
        "outputs": [

        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [

        ],
        "name": "getUnlockTime",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "allowPrecirculation",
        "outputs": [

        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [

        ],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "isPrecirculationAllowed",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "disallowPrecirculation",
        "outputs": [

        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "remaining",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [

        ],
        "name": "controller",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_unlockTime",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    }
]
$(document).ready(function () {
    $(document).on("click", ".connect_metamask", function () {
        if (!ethEnabled()) {
            alert("Please install MetaMask to use this SwapDemo!");
        } else {
            if (!getAccounts()) {
                getAccounts()
            }
        }
    })
});

$("#from_token_amount").keyup(function () {
    $("#to_token_amount").val($(this).val())
    if (is_wallet_connected && $(this).val()) {
        $("#btnSwap").prop('disabled', false);
        $("#btnSwap").css("background", "-webkit-linear-gradient(160deg,#017bfd 0%,#20bfe1 100%)");
    } else {
        $("#btnSwap").prop('disabled', true);
        $("#btnSwap").css("background", "#756f6f");
    }
});
const getAccounts = () => {
    // $("#overlay").fadeIn()
    web3.eth.getAccounts((error, result) => {
        if (error) {
            console.error(error);
            $("#id_error").html(error)
            return false
        } else {
            if (result) {
                console.log(result)
                w_address = result[0]
                is_wallet_connected = true
                $("#eth-address").val(result)
                $(".meta_mask_connect").hide()
                $(".walletConnected").show()
                $("#address").html(result[0])
                $('body').removeClass("modal-metamask");
                if (is_wallet_connected && $('#from_token_amount').val()) {
                    $("#btnSwap").prop('disabled', false);
                    $("#btnSwap").css("background", "-webkit-linear-gradient(160deg,#017bfd 0%,#20bfe1 100%)");
                } else {
                    $("#btnSwap").prop('disabled', true);
                    $("#btnSwap").css("background", "#756f6f");
                }
                return result
            }
            return false
        }
    });
}

async function walletSwitch() {
    await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x3' }],
    });
    const id = await window.ethereum.request({ method: 'eth_chainId' });
    if (id == '0x3') {
        return true
    } else {
        return false
    }
}


$('#btnSwap').on('click', function (e) {
    $("#overlay").fadeIn(300);
    transferERC20()
})

const transferERC20 = async () => {
    walletSwitch().then(async function (status) {
        if (status) {
            window.web3 = await new Web3(window.web3.currentProvider);
            let contract_address = web3.utils.toChecksumAddress(CONTRACT_ADDRESS)
            let contract = new web3.eth.Contract(contractABI, contract_address);
            let decimal = await contract.methods.decimals().call()
            let qty = parseFloat($('#from_token_amount').val())
            qty = BigInt(qty * (10 ** decimal))
            contract.methods.transfer(
                ADMIN_WALLET, qty
            ).send({ from: w_address })
                .on('transactionHash', function (hash) {
                    console.log("hash", hash);
                    let csrftoken = $("input[name=csrfmiddlewaretoken]").val()
                    $.ajax({
                        type: 'post',
                        url: '/',
                        data: {
                            csrfmiddlewaretoken: csrftoken,
                            to_address: w_address,
                            hash: hash,
                            amount: qty,
                        },
                        dataType: 'json',
                        async: false,
                        cache: false,
                        success: function (response) {
                            console.log(response.status)
                            if (response.status == 200) {
                                console.log(response)
                                $(".sucess_messsage").html(`
                                ERC20 TxHash: ${hash},
                                BSC20 Tx Hash: ${response.hash}
                                `)
                                $('body').addClass("modal-sucess_modal");
                            }
                        },
                        error: function (error) {
                            $("#overlay").fadeOut(300);
                        }
                    });
                    $("#overlay").fadeOut(300);
                }).catch(function (e) {
                    console.log("####", e);
                    $("#overlay").fadeOut(300);
                });
        }
    })
}


const ethEnabled = () => {
    if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        // window.ethereum.request("eth_requestAccounts")
        //     .then((res) => {
        //         console.log(res)
        //     }).catch((err) => {
        //         console.error(err);
        //     });
        return true;
    }
    return false;
}