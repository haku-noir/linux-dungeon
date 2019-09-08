# linux-dungeon
Linuxのコマンドを学べる探索ゲーム

## 起動方法
```
git clone https://github.com/haku-noir/linux-dungeon.git
cd linux-dungeon/app
npm install
docker-compose up -d --build
docker exec -it linux-dungeon_app npm start
```

## 終了方法
```
docker-compose down
```
