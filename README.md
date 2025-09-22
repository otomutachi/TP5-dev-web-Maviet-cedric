# TP5-dev-web-Maviet-cedric

## CC3 Développement Web

<<<<<<< HEAD


CC3 dev web
Partie 1

### Question 1.1
En-têtes de la réponse HTTP du serveur :

=======
### Question 1.1
En-têtes de la réponse HTTP du serveur :

<<<<<<< HEAD
=======
CC3 dev web
Partie 1
question 1.1 :



connection keep-alive
date Fri, 19 Sep 2025 22:53:41 GMT
keep-alive timeout=5
transfer-encoding chunked


---

### Question 1.2
En-têtes après ajout JSON :

connection keep-alive
content-length 20
content-type application/json
date  Sun, 21 Sep 2025 03:46:04 GMT
keep-alive timeout=5





### Question 1.3

Le fichier **index.html** n'as pas etait trouver par le serveur,  
donc le client reçoit un message d’erreur.



### Question 1.4

la console va afficher :

Error: ENOENT: no such file or directory, open 'E:\2025 info\semestre 4\dev web\devweb-tp5\index.html'
    at async open (node:internal/fs/promises:642:25)
    at async Object.readFile (node:internal/fs/promises:1279:14) 
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'E:\\2025 info\\semestre 4\\dev web\\devweb-tp5\\index.html'

il s’agit du code erreur : **ENOENT**
 


### Question 1.6

Cette commande a ajouter dans le `package.json`:
'''
 "dependencies": {
    "cross-env": "^10.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.10"
  }

'''
 

### Question 1.7

la différence entre un http-dev et http-prod est :
http-dev va démarrer le serv  en mode developement ça veut dire que le serv va se relancer si je change mon programme et affiche les détail pour expliquer la situation 

Alors que http-prod va démarrer un serveur en mode production lui il n'affiche pas de messages de debug et ne se relance pas tous seul.
"""
[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server-http.mjs`
Server is running on http://localhost:8000
NODE_ENV = development
"""
"""
E:\2025 info\semestre 4\dev web\devweb-tp5>npm run http-prod

> devweb-tp5@1.0.0 http-prod
> cross-env NODE_ENV=production node server-http.mjs

Server is running on http://localhost:8000
"""
### question 1.8

http://localhost:8000/index.html :
200 
http://localhost:8000/random.html :
200
http://localhost:8000/ :
404
http://localhost:8000/dont-exist :
404


# TP5-dev-web-Maviet-cedric

## CC3 Développement Web



CC3 dev web
Partie 1

### Question 1.1
En-têtes de la réponse HTTP du serveur :

connection keep-alive
date Fri, 19 Sep 2025 22:53:41 GMT
keep-alive timeout=5
transfer-encoding chunked


---

### Question 1.2
En-têtes après ajout JSON :

connection keep-alive
content-length 20
content-type application/json
date  Sun, 21 Sep 2025 03:46:04 GMT
keep-alive timeout=5





### Question 1.3
Le fichier **index.html** n'as pas etait trouver par le serveur,  
donc le client reçoit un message d’erreur.



### Question 1.4

la console va afficher :

Error: ENOENT: no such file or directory, open 'E:\2025 info\semestre 4\dev web\devweb-tp5\index.html'
    at async open (node:internal/fs/promises:642:25)
    at async Object.readFile (node:internal/fs/promises:1279:14) 
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'E:\\2025 info\\semestre 4\\dev web\\devweb-tp5\\index.html'

il s’agit du code erreur : **ENOENT**
 


### Question 1.6

Cette commande a ajouter dans le `package.json`:
'''
 "dependencies": {
    "cross-env": "^10.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.10"
  }

'''
 

### Question 1.7

la différence entre un http-dev et http-prod est :
http-dev va démarrer le serv  en mode developement ça veut dire que le serv va se relancer si je change mon programme et affiche les détail pour expliquer la situation 

Alors que http-prod va démarrer un serveur en mode production lui il n'affiche pas de messages de debug et ne se relance pas tous seul.
"""
[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server-http.mjs`
Server is running on http://localhost:8000
NODE_ENV = development
"""
"""
E:\2025 info\semestre 4\dev web\devweb-tp5>npm run http-prod

> devweb-tp5@1.0.0 http-prod
> cross-env NODE_ENV=production node server-http.mjs

Server is running on http://localhost:8000
"""
### question 1.8

http://localhost:8000/index.html :
200 
http://localhost:8000/random.html :
200
http://localhost:8000/ :
404
http://localhost:8000/dont-exist :
404

