# Generated by Django 3.0.4 on 2020-08-16 03:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0010_auto_20200720_1440'),
    ]

    operations = [
        migrations.AddField(
            model_name='patchnote',
            name='author',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='patchnote',
            name='slug',
            field=models.SlugField(default='djangodbmodelsfieldscharfielddjangodbmodelsfieldscharfield', max_length=200),
        ),
    ]
