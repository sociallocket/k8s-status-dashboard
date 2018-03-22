#!/bin/bash
PATH=`pwd`

export AUTH0_CLIENT_ID=
export AUTH0_DOMAIN=
export AUTH0_CALLBACK_URL=
export CLIENT_KEY=
export CLIENT_CRT=
export HOST=

/bin/bash $PATH/shell-scripts/set-env.sh > $PATH/src/public/js/auth0-variables.js
