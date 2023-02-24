from django.shortcuts import render
from PaginaWeb.forms import *

# Create your views here.

def index(request):

    formulario = FormularioContacto()
    return render(request, 'index.html',{'form':formulario})
