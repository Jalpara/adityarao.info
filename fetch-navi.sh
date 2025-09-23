#!/usr/bin/env bash
set -euo pipefail

# Overpass query: broader "Navi Mumbai" within Maharashtra.
# We try admin boundary and "place" polygons so it matches the common city footprint.
read -r -d '' Q << 'EOF'
[out:json][timeout:60];
area["name"="Maharashtra"]["boundary"="administrative"]->.state;

(
  rel(area.state)["name"="Navi Mumbai"]["boundary"="administrative"];
  rel(area.state)["name"="Navi Mumbai"]["type"="multipolygon"]["place"~"city|town|suburb"];
  way(area.state)["name"="Navi Mumbai"]["place"~"city|town|suburb"];
);
out ids tags bb;
>;
out skel qt;
EOF

curl -sS -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \
  --data-urlencode "data=$Q" \
  https://overpass-api.de/api/interpreter > navi.osm.json
echo "Saved: navi.osm.json"