from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from lists.models import List

def addList(request):
    return render(request, 'lists/html/addList.html')


def addConList(request):
    name = request.POST['name']
    detail = request.POST['detail']

    qs = List(l_name = name, l_detail = detail)
    qs.save()

    return HttpResponseRedirect(reverse('lists:all'))


def showAll(request):
    qs = List.objects.all()
    context = {'list_list':qs}
    return render(request, 'lists/html/allList.html', context)


def listDet(request, name):
    qs = List.objects.get(l_name = name)
    context = {'list_info':qs}
    return render(request, 'lists/html/listDetail.html', context)


def listMod(request, name):
    qs = List.objects.get(l_name=name)
    context = {'list_info': qs}
    return render(request, 'lists/html/modifyList.html', context)


def modCon(request):
    name = request.POST['name']
    detail = request.POST['detail']

    l_qs = List.objects.get(l_name=name)

    l_qs.l_name = name
    l_qs.l_detail = detail

    l_qs.save()

    return HttpResponseRedirect(reverse('lists:all'))


def listDel(request, name):
    qs = List.objects.get(l_name=name)
    qs.delete()

    return HttpResponseRedirect(reverse('lists:all'))
