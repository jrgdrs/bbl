
https://docs.imgarena.com/basketball

https://jasonet.co/posts/scheduled-actions/

https://github.com/octokit/core.js



curl https://www.easycredit-bbl.de/spiele/50433a42-9662-4853-8c11-9c5830008b29 | tr -d '\n' | sed -E 's/.*<script id="__NEXT_DATA__" type="application\/json">//' | sed -E 's/<\/script><\/body><\/html>//' > wuerzi.json
node bbl.js wuerzi.json > wuerzi.html

curl https://www.easycredit-bbl.de/spiele/4ba5bf44-4837-4222-8aa8-7384fef7e879 | tr -d '\n' | sed -E 's/.*<script id="__NEXT_DATA__" type="application\/json">//' | sed -E 's/<\/script><\/body><\/html>//' > berli.json
node bbl.js berli.json > berli.html

curl https://www.easycredit-bbl.de/spiele/72bb7a26-573b-46b6-9464-afff8445e7a9  | tr -d '\n' | sed -E 's/.*<script id="__NEXT_DATA__" type="application\/json">//' | sed -E 's/<\/script><\/body><\/html>//' > brauni.json
node bbl.js brauni.json > brauni.html

curl https://www.easycredit-bbl.de/spiele/9352d254-c708-41e1-bb9a-2cced9eb7212#boxscore | tr -d '\n' | sed -E 's/.*<script id="__NEXT_DATA__" type="application\/json">//' | sed -E 's/<\/script><\/body><\/html>//' > hakr.json
node bbl.js hakr.json > hakr.html

curl https://www.easycredit-bbl.de/spiele/cd5a0474-f7ee-435a-9262-6eb59a337905#boxscore | tr -d '\n' | sed -E 's/.*<script id="__NEXT_DATA__" type="application\/json">//' | sed -E 's/<\/script><\/body><\/html>//' > mbc.json
node bbl.js mbc.json > mbc.html

curl https://www.easycredit-bbl.de/spiele/b0f4ff5e-5a23-43e5-b690-d9ee43410c84#boxscore  | tr -d '\n' | sed -E 's/.*<script id="__NEXT_DATA__" type="application\/json">//' | sed -E 's/<\/script><\/body><\/html>//' > test.json
node bbl.js test.json > test.html

cat test.json | node bblpipe


curl -s https://www.easycredit-bbl.de/spiele/b0f4ff5e-5a23-43e5-b690-d9ee43410c84#boxscore  | tr -d '\n' | sed -E 's/.*<script id="__NEXT_DATA__" type="application\/json">//' | sed -E 's/<\/script><\/body><\/html>//' | node bblpipe

curl -s https://www.easycredit-bbl.de/spiele/b0f4ff5e-5a23-43e5-b690-d9ee43410c84#boxscore  | tr -d '\n' | sed -E 's/.*<script id="__NEXT_DATA__" type="application\/json">//' | sed -E 's/<\/script><\/body><\/html>//' | ./bblpipe.js


