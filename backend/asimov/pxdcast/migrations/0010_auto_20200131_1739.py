# Generated by Django 3.0.1 on 2020-01-31 17:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pxdcast', '0009_auto_20200131_1458'),
    ]

    operations = [
        migrations.AlterField(
            model_name='podcast',
            name='summary',
            field=models.TextField(blank=True, null=True),
        ),
    ]