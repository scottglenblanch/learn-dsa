echo "running"

SCRIPT_DIR="$(dirname "$(realpath "$0")")"
VISUALIZATION_DIR="$(cd $SCRIPT_DIR; cd ../; pwd)"

FRONTEND_DIR="$VISUALIZATION_DIR/frontend"
DIST_DIR="$VISUALIZATION_DIR/dist"

echo $VISUALIZATION_DIR

create_dist_dir() {
    mkdir -p $DIST_DIR
}

transpile_files() {
    yarn esbuild $FRONTEND_DIR/main.ts \
        --bundle --outfile=$DIST_DIR/bundle.js \
        --format=esm \
        --platform=browser \
        --watch
}

copy_over_html() {
    cp $FRONTEND_DIR/index.html $DIST_DIR/index.html
}

copy_over_html
transpile_files

