from django.urls import path, include


urlpatterns = [
    path('generate-image/', include('api.urls')),
]
