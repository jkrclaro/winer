# Generated by Django 3.0.1 on 2020-02-02 12:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_accountpxdcast'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='AccountPxdcast',
            new_name='Pxdcast',
        ),
        migrations.AlterModelTable(
            name='pxdcast',
            table='pxdcasts',
        ),
    ]