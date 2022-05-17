import json
import http.client
from decouple import config

from web3 import Web3, HTTPProvider

class Crypto:
    def __init__(self,contract,provider,wallet,private_key):
        self.__w3 = Web3(
            Web3.HTTPProvider(
                provider
            )
        )
        self.__wallet = wallet
        self.__private_key=private_key
        self.__abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":False,"inputs":[{"indexed":True,"internalType":"address","name":"owner","type":"address"},{"indexed":True,"internalType":"address","name":"spender","type":"address"},{"indexed":False,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":False,"inputs":[{"indexed":True,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":True,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":False,"inputs":[{"indexed":True,"internalType":"address","name":"from","type":"address"},{"indexed":True,"internalType":"address","name":"to","type":"address"},{"indexed":False,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        self.__check_sum = self.__w3.toChecksumAddress(contract)
        self.__contract = self.__w3.eth.contract(address=self.__check_sum, abi=self.__abi )
        
        super(Crypto, self).__init__()


    def get_balance(self,address):
        return self.__contract.functions.balanceOf(address).call()
    
    def get_name(self):
        return self.__contract.functions.name().call()

    def get_total_supply(self):
        return self.__contract.functions.totalSupply().call()

    def transfer_token(self,to_address,amount):
        try:
            nonce = self.__w3.eth.getTransactionCount(
                self.__wallet
            )
            print("nonce",nonce)
            unicorn_txn = self.__contract.functions.transfer(
                to_address,
                amount,
            ).buildTransaction({
                'nonce': nonce,
                'gas': 200000,
                'gasPrice': self.__w3.toWei('40', 'gwei'),
            })
            print("unicorn_txn",unicorn_txn)
            signed_txn = self.__w3.eth.account.signTransaction(
                    unicorn_txn, private_key=self.__private_key
            )
            print("signed_txn",signed_txn)
            self.__w3.eth.sendRawTransaction(signed_txn.rawTransaction)
            transaction = self.__w3.toHex(
                self.__w3.sha3(signed_txn.rawTransaction)
            )
            print("transaction", transaction)
            return True,transaction
        except Exception as error:
            print("#####",error.args[0]['message'])
            return False,error.args[0]['message'] if 'message' in error.args[0] else error.args[0]
