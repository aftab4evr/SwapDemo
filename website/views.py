import datetime
import requests
from decouple import config

from django.views import View

from django.http.response import HttpResponse, JsonResponse
from django.conf import settings
from django.shortcuts import render, redirect

from .crypto import Crypto


class IndexView(View):
    def get(self,request):
             
        return render(request,'index.html',{
            'is_mobile':False,
        })

    def post(self,request):
        params = request.POST
        print(params)
        result={}
        obj = Crypto(
            config('BEP_20_CONTRACT'),
            config('BEP_TEST_PROVIDER'),
            config('ERC_20_WALLET_ADDRESS'),
            config('ERC_20_PRIVATE_KEY')
        )
        is_sucess,tx_hash  = obj.transfer_token(
            params['to_address'],
            params['amount']
        )
        if is_sucess:
            result['hash']  = tx_hash
            result['message'] = "sucess"
            result['status'] = 200
        else:
            result['message'] = tx_hash
            result['status'] = 400
        return JsonResponse(result)

