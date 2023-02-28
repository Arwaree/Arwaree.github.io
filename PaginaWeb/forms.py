from django import forms

class FormularioContacto(forms.Form):
    nombre = forms.CharField()
    mail = forms.EmailField(label='Su Mail')
    asunto = forms.CharField()
    mensaje = forms.CharField(widget=forms.Textarea())