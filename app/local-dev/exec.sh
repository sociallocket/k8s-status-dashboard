#!/usr/bin/env bash
docker build -t k8s-status-dashboard-test .
docker run \
        -p 80:5000 \
        -it k8s-status-dashboard-test
