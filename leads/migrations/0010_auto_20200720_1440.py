# Generated by Django 3.0.4 on 2020-07-20 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0009_auto_20200605_0338'),
    ]

    operations = [
        migrations.AddField(
            model_name='patchnote',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='patchnote',
            name='slug',
            field=models.SlugField(default='djangodbmodelsfieldscharfield', max_length=200),
        ),
    ]
