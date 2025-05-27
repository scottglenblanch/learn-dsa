#!/usr/bin/env bash

transpile_binary_tree_file() {
    ./node_modules/.bin/tsc --project ./src/chapter6-binary-tree/tsconfig.json 
}



start_static_server() {
    cd ./src/chapter6-binary-tree/visualization/
    yarn http-server -p 8080
}

transpile_binary_tree_file
start_static_server