# Generated by Django 3.1 on 2020-11-10 07:19

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_auto_20201110_1404'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='tag',
            field=models.CharField(default='', max_length=6),
        ),
        migrations.AlterField(
            model_name='comment',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 10, 7, 19, 19, 735782, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='post',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 10, 7, 19, 19, 733307, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='subcomment',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 10, 7, 19, 19, 736522, tzinfo=utc)),
        ),
    ]
