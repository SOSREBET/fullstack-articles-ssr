import django_filters
from .models import ArticleModel

class ArticleFilter(django_filters.FilterSet):
    title = django_filters.CharFilter(lookup_expr='icontains')
    text = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = ArticleModel
        fields = ['title', 'text']
