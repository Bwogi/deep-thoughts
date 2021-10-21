https://www.mongodb.com/community/forums/t/mongodb-compass-connect-econnrefused-127-0-0-1-27017/9201/2

You can check if you have your local `mongod` running by using `ps` piped into `grep`

```
$ ps -alx | grep mongod
```

You are supposed to see two lines, if not one line. To start the mongod process just run:

```
$ mkdir $HOME/data
```
```
$ mongod --dpath $HOME/data
```

then seed your databases with for example:

```
npm run seed
```