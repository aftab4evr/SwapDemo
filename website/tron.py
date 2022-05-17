from tronapi import Tron
from decouple import config

MAIN_NET="https://api.trongrid.io"
full_node = 'https://api.shasta.trongrid.io'
solidity_node = 'https://api.shasta.trongrid.io'
event_server = 'https://api.shasta.trongrid.io'


MAIN_NET_TRC10_TOKEN_ID="1003894"

MAIN_NET_TRC20_ADDRESS="TRQm9HCG6dEAbb4CMEfvV2324vMN4c5gdr"
MAIN_NET_TRC20_PRIVATE_KEY="fae9180a4b54be127585eb2fa2695bd2aae90442aaaa1156cc50d4d091d649e3"

TRC_20_CONTRACT = "TACsSqoWuidjzZuyMxf5UK7szhMAtFLSmP"
class CryptoTron:
    def __init__(self,contract,node):   
        self._tron = Tron(
            full_node=node,
            solidity_node=node,
            event_server=node
        )
        self.__abi = [{"constant": True, "inputs": [], "name":"mintingFinished", "outputs":[{"name": "", "type": "bool"}], "payable": False, "type": "function"}, {"constant": True, "inputs": [], "name":"name", "outputs":[{"name": "", "type": "string"}], "payable": False, "type": "function"}, {"constant": False, "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"}], "name": "approve", "outputs": [], "payable":False, "type":"function"}, {"constant": True, "inputs": [], "name":"totalSupply", "outputs":[{"name": "", "type": "uint256"}], "payable": False, "type": "function"}, {"constant": False, "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"}], "name": "transferFrom", "outputs": [], "payable":False, "type":"function"}, {"constant": True, "inputs": [], "name":"decimals", "outputs":[{"name": "", "type": "uint256"}], "payable": False, "type": "function"}, {"constant": False, "inputs": [], "name":"unpause", "outputs":[{"name": "", "type": "bool"}], "payable": False, "type": "function"}, {"constant": False, "inputs": [{"name": "_to", "type": "address"}, {"name": "_amount", "type": "uint256"}], "name": "mint", "outputs": [{"name": "", "type": "bool"}], "payable": False, "type": "function"}, {"constant": True, "inputs": [], "name":"paused", "outputs":[{"name": "", "type": "bool"}], "payable": False, "type": "function"}, {"constant": True, "inputs": [{"name": "_owner", "type": "address"}], "name": "balanceOf", "outputs": [{"name": "balance", "type": "uint256"}], "payable": False, "type": "function"}, {"constant": False, "inputs": [], "name":"finishMinting", "outputs":[{"name": "", "type": "bool"}], "payable": False, "type": "function"}, {"constant": False, "inputs": [], "name":"pause", "outputs":[{"name": "", "type": "bool"}], "payable": False, "type": "function"}, {"constant": True, "inputs": [
            ], "name":"owner", "outputs":[{"name": "", "type": "address"}], "payable": False, "type": "function"}, {"constant": True, "inputs": [], "name":"symbol", "outputs":[{"name": "", "type": "string"}], "payable": False, "type": "function"}, {"constant": False, "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"}], "name": "transfer", "outputs": [], "payable":False, "type":"function"}, {"constant": False, "inputs": [{"name": "_to", "type": "address"}, {"name": "_amount", "type": "uint256"}, {"name": "_releaseTime", "type": "uint256"}], "name": "mintTimelocked", "outputs": [{"name": "", "type": "address"}], "payable": False, "type": "function"}, {"constant": True, "inputs": [{"name": "_owner", "type": "address"}, {"name": "_spender", "type": "address"}], "name": "allowance", "outputs": [{"name": "remaining", "type": "uint256"}], "payable": False, "type": "function"}, {"constant": False, "inputs": [{"name": "newOwner", "type": "address"}], "name": "transferOwnership", "outputs": [], "payable":False, "type":"function"}, {"anonymous": False, "inputs": [{"indexed": True, "name": "to", "type": "address"}, {"indexed": False, "name": "value", "type": "uint256"}], "name": "Mint", "type": "event"}, {"anonymous": False, "inputs": [], "name":"MintFinished", "type":"event"}, {"anonymous": False, "inputs": [], "name":"Pause", "type":"event"}, {"anonymous": False, "inputs": [], "name":"Unpause", "type":"event"}, {"anonymous": False, "inputs": [{"indexed": True, "name": "owner", "type": "address"}, {"indexed": True, "name": "spender", "type": "address"}, {"indexed": False, "name": "value", "type": "uint256"}], "name": "Approval", "type": "event"}, {"anonymous": False, "inputs": [{"indexed": True, "name": "from", "type": "address"}, {"indexed": True, "name": "to", "type": "address"}, {"indexed": False, "name": "value", "type": "uint256"}], "name": "Transfer", "type": "event"}]
        self._contract = self._tron.trx.contract(contract,abi=self.__abi)
        self._contract_one = self._tron.trx.get_contract(contract)
        super(CryptoTron, self).__init__()

    def get_name(self):
        function = self._contract.__dict__
        print(function['functions'].__dict__)
        return self._contract.functions.name()

# obj = CryptoTron(
#     config('TRC_20_CONTRACT'),
#     config('TRC_NODE')
# )
# print(obj.get_name())
