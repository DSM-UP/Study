from django.db import models

class List(models.Model):
    l_name = models.CharField(max_length=100)
    l_detail = models.CharField(max_length=300)

    def __str__(self):
        return self.l_name