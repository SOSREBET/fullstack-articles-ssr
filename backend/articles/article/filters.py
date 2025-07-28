import django_filters
from django.db.models import Q
from .models import ArticleModel

class ArticleFilter(django_filters.FilterSet):
    search = django_filters.CharFilter(field_name='search', method='filter_search')

    class Meta:
        model = ArticleModel
        fields = []
        
    def filter_search(self, queryset, name, value):
        return queryset.filter(
            Q(title__icontains=value) | Q(text__icontains=value)
        )
