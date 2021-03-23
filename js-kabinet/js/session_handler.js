const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "usersdb",
  password: "пароль_от_сервера"
});
// тестирование подключения
 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });
 // закрытие подключения
 connection.end(function(err) {
  if (err) {
    return console.log("Ошибка: " + err.message);
  }
  console.log("Подключение закрыто");
});

var session = require('express-session');
//подключение модуля connect-mysql
var mssql = require('mssql');

module.exports = {
    createStore: function() {
        var config = {
            user: 'test', //пользователь базы данных
            password: '12345', // пароль пользователя
            server: 'localhost',//хост
            database: 'testdb',//имя бд
            port: 1433,   //порт на котором запускаем sql server
            pool: {
                max: 10, //максимально допустимое количество соединений
                min: 0, //минимально допустимое количество соединений
                idleTimeoutMillis: 30000 //время ожидания перед завершением неиспользуемого соединения
            }
        }
        return new MSSQLStore(config);
    }
}



//
//Инициализация подключения:
var mysql = require('mysql');
var connection = mysql.createConnection({
    host  : 'localhost',
    database : 'testdb',
    user  : 'root',
    password : 'mysql'
});
connection.connect(function(err) {
    if (err)
        console.error(err);
});