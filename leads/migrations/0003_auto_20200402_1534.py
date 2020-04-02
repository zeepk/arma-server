# Generated by Django 3.0.4 on 2020-04-02 15:34

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0002_patchnote'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patchnote',
            name='content',
            field=ckeditor.fields.RichTextField(blank=True, default=''),
        ),
        migrations.AlterField(
            model_name='patchnote',
            name='version',
            field=models.CharField(blank=True, max_length=20),
        ),
    ]