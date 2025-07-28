from django.urls import path

from .views import ArticleView, ArticleDetailView

urlpatterns = [
    path('', ArticleView.as_view(), name='article_list'),
    path('<int:id>/', ArticleDetailView.as_view(), name='article_detail')
]
