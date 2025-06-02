SCRIPT_DIR="$(dirname "$(realpath "$0")")"
NODE_MODULES_DIR="$(cd $SCRIPT_DIR; cd ../../../../node_modules; pwd)"
VISUALIZATION_DIR="$(cd $SCRIPT_DIR; cd ../; pwd)"
DIST_DIR="$VISUALIZATION_DIR/dist"

$NODE_MODULES_DIR/.bin/http-server $DIST_DIR -p 3000 -o