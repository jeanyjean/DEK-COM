# Generated by Django 3.1 on 2020-10-28 07:47

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0012_auto_20201027_0714'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='comment_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 28, 7, 47, 39, 30124, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='post',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 28, 7, 47, 39, 8931, tzinfo=utc)),
        ),
    ]
