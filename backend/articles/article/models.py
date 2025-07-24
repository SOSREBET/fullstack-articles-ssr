from django.db import models

# Create your models here.

class ArticleModel(models.Model):
    title = models.CharField('Title', max_length=256, blank=False, null=False)
    text = models.TextField('Content', max_length=2048, blank=False, null=False)
    created_at = models.DateField('Date', auto_now_add=True, null=False, blank=False)
    
    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'Article'
        verbose_name_plural = 'Articles'
        ordering = ['-id']
