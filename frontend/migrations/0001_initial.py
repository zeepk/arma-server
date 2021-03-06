# Generated by Django 3.0.2 on 2020-01-15 02:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=15)),
                ('last_updated', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Entry',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('attack', models.IntegerField()),
                ('strength', models.IntegerField()),
                ('defence', models.IntegerField()),
                ('ranged', models.IntegerField()),
                ('prayer', models.IntegerField()),
                ('magic', models.IntegerField()),
                ('constitution', models.IntegerField()),
                ('crafting', models.IntegerField()),
                ('mining', models.IntegerField()),
                ('smithing', models.IntegerField()),
                ('fishing', models.IntegerField()),
                ('cooking', models.IntegerField()),
                ('firemaking', models.IntegerField()),
                ('woodcutting', models.IntegerField()),
                ('runecrafting', models.IntegerField()),
                ('dungeoneering', models.IntegerField()),
                ('fletching', models.IntegerField()),
                ('agility', models.IntegerField()),
                ('herblore', models.IntegerField()),
                ('thieving', models.IntegerField()),
                ('slayer', models.IntegerField()),
                ('farming', models.IntegerField()),
                ('construction', models.IntegerField()),
                ('hunter', models.IntegerField()),
                ('summoning', models.IntegerField()),
                ('divination', models.IntegerField()),
                ('invention', models.IntegerField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='frontend.User')),
            ],
        ),
    ]
