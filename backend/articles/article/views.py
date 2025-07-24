from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import ArticleModel
from .serializers import ArticleSerializer
from .filters import ArticleFilter
from .mixins import Pagination

# Create your views here.

class ArticleView(ListAPIView):
    queryset = ArticleModel.objects.all()
    serializer_class = ArticleSerializer
    filterset_class = ArticleFilter
    pagination_class = Pagination


class ArticleDetailView(RetrieveAPIView):
    queryset = ArticleModel.objects.all()
    serializer_class = ArticleSerializer
    lookup_field = 'id'
