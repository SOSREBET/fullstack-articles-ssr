from django.contrib import admin

from .models import ArticleModel

# Register your models here.

class ArticleAdmin(admin.ModelAdmin):
    pass


admin.site.register(ArticleModel, ArticleAdmin)
