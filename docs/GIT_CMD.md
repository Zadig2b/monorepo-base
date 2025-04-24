git remote add js1 git@github.com:<user>/js1.git
git fetch js1
git read-tree --prefix=projets/js1/ -u js1/main  #ou autre branche
git commit -m "Import du projet js1 dans projets/js1/"