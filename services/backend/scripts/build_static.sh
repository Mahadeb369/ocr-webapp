#!/usr/bin/env bash

export $(egrep -v '^#' ./.test.env | xargs)

export DB_CONNECTION='{"dbname":"build","username":"build","password":"build","host":"db","port":5434}'

python manage.py collectstatic --no-input
